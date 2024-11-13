# Proxy 应用场景

## 背景

由于端和 H5 的更新周期不同，端的灰度发布通常需要更长时间（约两三周），而 H5 的更新可以在较短时间内完成全量发布。因此，网页需要在代码中编写大量的逻辑判断，以确保在不同版本之间能够正确调用方法，否则可能会导致错误或异常。如果每个方法调用前都加上版本号判断或者方法存在性判断，代码将变得冗长且不易维护，但如果省略这些判断，可能会导致在不同版本下出现运行时错误。

此外，部分历史代码中存在重复调用端方法的情况，有些方法在调用一次之后可以缓存结果，避免重复调用，从而提升性能。在这种情况下，我们可以使用 `Proxy` 来进行方法的缓存和处理，避免重复的逻辑判断，同时提高代码的可维护性和性能。下面我们将具体介绍如何利用 `Proxy` 来解决这些问题。

## 1. System & InvokeMethod 判断方法是否存在

一般情况下，端会直接给出方法名并告知我们在哪个模块挂载该方法。然而，历史版本中可能并没有这些方法，因此我们不能直接调用这些方法。为了避免错误，我们需要在调用方法前先判断方法是否存在，例如：

```javascript
await API.invokeMethod.lectureBootstrap();
await API.system.getAppInfo();
```
直接调用上述方法会抛出错误，因为这些方法在某些版本的端中可能并不存在。为了避免这种情况，我们可以使用 `Reflect.has` 来检查方法是否存在：
```javascript
if (Reflect.has(API.system, 'getAppInfo')) {
  await API.system.getAppInfo();
}
```
或者使用 `try-catch` 来包裹方法调用，但这种方法并不是通用的解决方案，且会增加代码冗余。
因此，我们可以使用 `Proxy` 来全局代理方法的调用，避免手动添加版本检查逻辑：同时用 `try-catch` 和日志记录机制来捕获并处理潜在的错误，以便快速定位问题并修复。

```javascript
API.system = new Proxy(API.system, {
  get(target, key, receiver) {
    try {
      if (!Reflect.has(API.system, key)) {
        const errMsg = `${key} not exists`;
        warn(loggerModules.system, errMsg);
        return { errNo: -1, errMsg };
      }
    } catch (e) {
      error(loggerModules.system, e);
    }
    return Reflect.get(target, key, receiver);
  },
});
```
通过这种方式，我们可以动态地处理方法是否存在的问题，避免手动编写冗余的判断逻辑。

## 2. BvManager 扩展

端通常提供一些基础的 `bv` 方法，如 `setTopBrowserView` 和 `updateBrowserView`，但是有时候我们需要对这些方法进行更加个性化的扩展。例如，可能需要提供 `setDefaultSizeBrowserView` 和 `setMiniSizeBrowserView` 方法来调整浏览器视图的大小。虽然这两者可以通过 `updateBrowserView` 实现，但为了代码更加语义化，我们可以通过 `Proxy` 来扩展 `BvManager`：

```javascript
export const proxyBVManager = {
  setDefaultSizeBrowserView: (_: any, key: string) => {
    return async (args: { id: number; name: string; bounding: Bounding }) => {
      try {
        // 处理正在执行的状态
        if (ProxyBVStatus !== OperatorStatus.pending) {
          warn(loggerModules.proxyBVManager, `${key} 等待执行`);
          return new Promise((resolve) => {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
              info(loggerModules.proxyBVManager, `${key} 执行`, args);
              const result = API.bvManager.setDefaultSizeBrowserView(args);
              resolve(result);
            });
          });
        }
        ProxyBVStatus = OperatorStatus.defaultsizeing;
        // 执行方法
        const { errNo } = await API.bvManager.updateBrowserView(args);
        if (errNo !== 0) {
          error(loggerModules.proxyBVManager, `${key} 更新失败`);
        }
        ProxyBVStatus = OperatorStatus.pending;
        return true;
      } catch (e) {
        error(loggerModules.proxyBVManager, `${key} 出错`, e);
      }
    };
  },

  setMiniSizeBrowserView: (_: any, key: string) => {
    return async (args: { id: number; name: string }) => {
      try {
        // 同样处理等待状态
        if (ProxyBVStatus !== OperatorStatus.pending) {
          warn(loggerModules.proxyBVManager, `${key} 等待执行`);
          return new Promise((resolve) => {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
              info(loggerModules.proxyBVManager, `${key} 执行`, args);
              const result = API.bvManager.setMiniSizeBrowserView(args);
              resolve(result);
            });
          });
        }
        ProxyBVStatus = OperatorStatus.minisizeing;
        const { errNo } = await API.bvManager.updateBrowserView({
          ...args,
          bounding: { x: 0, y: 0, width: 0, height: 0 },
        });
        if (errNo !== 0) {
          error(loggerModules.proxyBVManager, `${key} 更新失败`);
        }
        ProxyBVStatus = OperatorStatus.pending;
        return true;
      } catch (e) {
        error(loggerModules.proxyBVManager, `${key} 出错`, e);
      }
    };
  },

  hasBrowserView: (_: any, key: string) => {
    return async (args: { name: string }) => {
      try {
        const { data, errNo } = await API.bvManager.getBrowserViewInfo(args);
        return data && errNo === 0;
      } catch (e) {
        error(loggerModules.proxyBVManager, `${key} 出错`, e);
      }
      return false;
    };
  },

  getBounding: (_: any, key: string) => {
    return async (args: { name: string; id: string }) => {
      try {
        const { data, errNo } = await API.bvManager.getBrowserViewInfo(args);
        if (data && errNo === 0) {
          return Reflect.get(data, 'bounding');
        }
        return null;
      } catch (e) {
        error(loggerModules.proxyBVManager, `${key} 出错`, e);
      }
      return null;
    };
  },
};
```

## 3. CommonData 增加缓存拦截

`CommonData` 是用于读取和写入文件的一种机制，在一些情况下，读取文件的操作可能会影响性能，特别是在频繁访问数据时。为了解决这个问题，我们可以通过 `Proxy` 来对 `CommonData` 的方法进行缓存，避免重复读取相同的数据。

通过以下代码，我们定义了 `freezeCommonDataKey` 常量来指定哪些方法可以缓存，并使用 `Proxy` 来进行缓存拦截和方法调用：

```javascript
export const freezeCommonDataKey = !isEnterPage ? [
  'getAppId',
  'getBaseData',
  'getQualityCheck',
  'getUid',
  'getUiConfig',
  'getVersionName',
  'getVersionCode',
  // 其他可缓存方法...
] : [];

export let CommonData = new Proxy(targetBaseCommonData, {
  get(target, name: string, receiver) {
    if (isDev) {
      let count = (commonDataFromProxy.get(name) || 0) + 1;
      commonDataFromProxy.set(name, count);
    }

    if (Reflect.has(proxyHandler, name)) {
      const cache = cacheCommonData.get(name);
      if (cache) {
        return () => cache;
      }
      const value = proxyHandler[name](target, name);
      if (freezeCommonDataKey.includes(name)) {
        if (value) {
          cacheCommonData.set(name, value);
        }
      }
      return () => value;
    }

    // 处理未定义方法的情况
    if (!freezeCommonDataKey.includes(name)) {
      return Reflect.get(target, name, receiver);
    }

    const cache = cacheCommonData.get(name);
    if (cache) {
      return () => cache;
    }

    let fn = target[name];
    if (!fn) {
      console.warn(`[CommonData] 方法不存在`);
      return Reflect.get(target, name, receiver);
    }

    try {
      const origin = target[name]();
      if (origin) {
        cacheCommonData.set(name, origin);
      }
      return () => origin;
    } catch (error) {
      console.error(`[CommonData] 方法调用失败`, error);
    }

    return () => null;
  },
});
```
通过这种方式，我们可以缓存 `CommonData` 中的常用数据，避免每次都进行重复读取，从而提升性能。

### 总结
通过使用 `Proxy` 机制，我们可以解决以下问题：

1. 避免在方法调用前进行繁琐的版本号和方法存在性判断。
2. 扩展现有的方法，提升代码的语义性和可维护性。
3. 缓存常用的数据，减少不必要的
