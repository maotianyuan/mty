# Lottie
Lottie 对 CPU 和 内存有真很大的性能挑战，在使用的时候，需要关注性能问题
本文从 资源加载、资源本身、渲染层面进行探讨 Lottie 使用方式


## 一、加载
### 1.1 异步
Lottie 文件较大，按需加载时，需要以异步的方式分包打包，否则将会造成 js 文件过大，影响每个页面
```js
 const loadLoop = import(
      /* webpackPreload: true */
      /* webpackChunkName: "lottie-[request]-loop" */
      `./assets/lottie-path/${this.customAnimationFile}/loop.json`);
```
### 1.2 同步
每次都需要加载 Lottie，给资源设置预加载 prefetch, preload 不建议打包到 js 文件中，否则 cdn 文件缓存会变更
```js
import fail from './assets/fail.json';
```

### 1.3 并行、串行
多个 Lottie 需要一起出现时, 并行加载
先后出现时，串行按条件加载
```js
 const loadLoop = import(
      /* webpackPreload: true */
      /* webpackChunkName: "lottie-[request]-loop" */
      `./assets/lottie-path/${this.customAnimationFile}/loop.json`);
 
 const loadShow = import(
      /* webpackPreload: true */
      /* webpackChunkName: "lottie-[request]-show" */
      `./assets/lottie-path/${this.customAnimationFile}/shoow.json`);

Promise.all([loadLoop, loadShow]).then(() => {})
```

### 1.4 缓存
- 频繁读取的 Lottie 资源增加一定大的缓存，避免频繁的网络请求
```js
private async getLottieData() {
  const { id, url, cache } = this.options;
  if (LOTTIE_CACHE.has(id)) {
    const value = LOTTIE_CACHE.get(id);
    if (value) {
      return value;
    }
  }
  try {
    const { data: res = [] } = await axios.get(url, {
      timeout: 5000,
    });
    const data = res;
    if (cache && data) {
      LOTTIE_CACHE.set(id, data);
      if (LOTTIE_CACHE.size > CACHE_MAX) {
        const keys = [...LOTTIE_CACHE.keys()];
        const earliestKey = keys[0];
        LOTTIE_CACHE.delete(earliestKey);
      }
    }
    return data;
  } catch (e) {
    error(loggerModules.pages, '[BaseEmoticon] 热词聊天', e);
  }
  return '';
}
```
- 通过网络加载动态 Lottie 时，需要进行并发量作下控制
```js
// 并行同时加载表情包
const ASYNC_POOL_NUM = 3;

asyncPool(ASYNC_POOL_NUM, visible, async (index: any) => {
  this.loadLottieAnimation(index, config);
});
export async function asyncPool(poolLimit: number, array: any, iteratorFn: any) {
  let ret: any = []; // 存储所有的异步任务
  let executing: any = []; // 存储所有正在执行的任务
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    // 调用iteratorFn函数创建异步任务
    ret.push(p);
    // 保存新的异步任务

    if (poolLimit <= array.length) {
      // 当poolLimit小于等于总任务数量时，进行并发控制
      const e: any = p.then(() => executing.splice(executing.indexOf(e), 1));
      // 当任务完成后，从正在执行的任务队列中移除任务，腾出一个空位
      executing.push(e);
      // 加入正在执行的异步任务

      if (executing.length >= poolLimit) {
        await Promise.race(executing);
        // 有任务执行完成之后，进入下一次循环
      }
    }
  }
  return Promise.all(ret); // 所有任务完成之后返回
}
```

## 二、资源
### 2.1 大小
资源大小需要进行压缩 https://maotianyuan.github.io/ailer/packages/tiny/doc/
该工具主要对 Lottie 图片进行压缩

### 2.2 外挂
离线本地的 Lottie 资源，且图片较丰富的 Lottie, 图片以外挂形式加载
```js
export const getSkinLottie = async (path: string) => {
  try {
    console.log('[getSkinLottie] path = ', path);
    const { content = '' } = await EV2Client.invokeMethod.fileReader(`${path}/index.json`,{});
    if (!content) {
      return;
    }
    const loadLocalImg = (assetData: any) => {
      const data = JSON.parse(assetData);
      if (!Reflect.has(data, 'assets')) {
        return;
      }
      data.assets.forEach((i: any) => {
        if (i.u) {
          i.p = `file://${path}/${i.u}${i.p}`;
          i.u = '';
        }
      });
      return data;
    };
    return loadLocalImg(content);
  } catch (error) {
    console.error('getSkinLottie', error);
  }
  return;
};
```
### 2.3 base64 图片
网络加载 Lottie 资源，图片内置到 base64 否则网络加载图片不一致，部分图片展示时机无法像预想一样

## 三、渲染
### 动态修改
部分复杂动画效果，跟 Lottie 元素对齐的动态数据，可通过 Lottie 修改数据方式修改

```js
anim.addEventListener('DOMLoaded', () => {
  /** 修改文字 */
  anim.renderer.elements[0].elements[0].updateDocumentData({t:'替换文本'},0); 

  /** 修改图片 */
  if (anim.renderer.rendererType === 'canvas') {
    // canvas 模式下的图片替换
    anim.renderer.elements[0].elements[8].img.src = 「'https://gw.alipayobjects.com/mdn/rms_91e1e4/afts/img/A*2mfsTo-gbDgAAAAAAAAAAABkARQnAQ';
  } else {
    // svg 模式下的图片替换，前两个参数为固定值
    anim.renderer.elements[0].elements[8].innerElem.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href', 
      'https://gw.alipayobjects.com/mdn/rms_91e1e4/afts/img/A*2mfsTo-gbDgAAAAAAAAAAABkARQnAQ'
    );
  }  
});
```
css 实现成本不高的动画，使用 css 动画，避免 Lottie 层级过多

### 渲染时机
列表多 Lottie 动画，需要进行可视区渲染的控制，可视区外销毁, 防止 CPU 和 内存过高带来性能问题
```js
  private async onObserver(config?: any) {
    try {
      const list = document.querySelectorAll('.base-emoticon');
      const getEmoticonStatus = async () => {
        let visible: any = [];
        let hidden: any = [];
        try {
          for (const element of list) {
            const id = element.getAttribute('data-id');
            const isVisible = await isInViewport(element);
            isVisible ? visible.push(id) : hidden.push(id);
          }
          const min = parseInt(visible[0], 10);
          const max = parseInt(visible[visible.length - 1], 10);

          // 找到比 visible 中最小值小的两个值，加入到 visible 数组开头
          const lowerTargets = hidden.filter((item: string) => parseInt(item, 10) < min).slice(REMAIN * -1);
          visible.unshift(...lowerTargets);

          // 找到比 visible 中最大值大的两个值，加入到 visible 数组末尾
          const upperTargets = hidden.filter((item: string) => parseInt(item, 10) > max).slice(0, REMAIN);
          visible.push(...upperTargets);

          hidden = hidden.filter((id: any) => !visible.includes(id));
          visible = visible.filter((item: any) => item !== undefined);

        } catch (error) {
          console.error('Error in getEmoticonStatus:', error);
        }
        return {
          visible,
          hidden,
        };
      };
      const { visible, hidden } = await getEmoticonStatus();
      asyncPool(ASYNC_POOL_NUM, visible, async (index: any) => {
        this.loadLottieAnimation(index, config);
      });
      hidden.forEach((item: any) => {
        this.desctroyLottie(item);
      });
    } catch (error) {
      console.error('Error in onObserver:', error);
    }
  }
  export const isInViewport = (element: any) => {
    return new Promise((resolve) => {
      const observer = new IntersectionObserver((entries) => {
        const isIntersecting = entries.some((entry) => entry.intersectionRatio > 0);
        resolve(isIntersecting);
        observer.unobserve(element);
        observer.disconnect();
      }, {
        rootMargin: '0px',
        threshold: 0,
      });
      observer.observe(element);
    });
  };
```


## supported 跨端
动效设计时候，会出现 PC 无问题但 Android 和 iOS 异常，或者 PC 有问题但移动端没问题情况，需动效老师根据各端支持 supported 属性进行设计
- https://airbnb.io/lottie/#/supported-features
- https://www.uisdc.com/lottie-dynamic-design-guide
