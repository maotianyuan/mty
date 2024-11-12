# HackTimer: 解决 Chrome 后台定时器暂停问题

## 背景
在实际业务中，应用切换到后台时浏览器对 setTimeout 和 setInterval 定时器的限制可能引发一些问题。在 Chrome 浏览器的特定版本中（例如自 Chrome 88 开始），浏览器在页面后台运行超过约5分钟后，JavaScript定时器会受到限制或停止，导致定时器频率降低。这种限制主要是为了节省系统资源，尤其在移动设备上，减少 CPU 和电量消耗​
DEV。在多容器架构下的业务场景中，例如直播间、实时互动游戏等，当页面切换到后台后，setTimeout 和 setInterval 被自动暂停或减缓的情况会导致同步和计时相关的问题。特别是在 K12 在线课堂或游戏结算场景下，后台状态对时间戳和信令的依赖导致了同步失败的情况。因此，为确保后台计时器的可靠性，Web Worker 提供了一种有效的解决方案。

## Chrome 的具体版本及定时器后台限制
从 Chrome 88 版本开始，浏览器针对切后台的页面执行了严格的资源限制，**定时器会被降低执行频率**，最小间隔被设定为 1 秒甚至更长。若页面后台运行时间较长（通常 5 分钟以上），部分计时器将直接暂停，直至页面恢复前台状态。通过 `HackTimer` 类，可以在后台准确执行定时器，实现页面后台稳定同步。[具体可见](https://developer.chrome.com/blog/timer-throttling-in-chrome-88?hl=zh-cn)

## 解决方案

Web Worker 在后台执行 JavaScript，不会受到页面前后台状态的影响。因此，可以在 Worker 中使用 `setTimeout` 或者 `setInterval` 实现不被限制的计时器

## Web Worker 为何能在后台继续执行

Web Worker 的设计初衷是在主线程之外执行较重的计算任务，它不直接依赖于 DOM 渲染，也不受前后台状态的影响。因此，浏览器在切后台时不会限制 Web Worker 中的计时器执行频率，使其成为实现不被后台限制的定时器的有效方法。

使用 Web Worker 的额外性能消耗较低，因为在此方案中只依赖 Worker 进行定时和简单通信，避免了复杂计算，减少了主线程的负载。

## `HackTimer` 类的主要代码实现细节

`HackTimer` 使用了 Web Worker 作为独立线程来实现一个自定义的 `setTimeout` 和 `clearTimeout`，使得页面切后台后仍能稳定、准确地触发定时器回调。以下是该类的主要功能模块描述：

**1、构造函数与初始化**
构造函数检查 `signal` 标志位以确保 `HackTimer` 实例只初始化一次。初始化方法 `createTimerBlob` 使用 Blob 构造 Web Worker 脚本，将计时逻辑完全封装在 Worker 内部，以避免切后台时被限制。

**2、定时器控制接口**

`setTimeout(callback, time, fakeId)`: 创建定时器，记录 `callback` 函数和 `fakeId` 用于管理定时器。每个定时器的标识 `fakeId` 用于在 Worker 中唯一标识计时器，并使用 `postMessage` 传递设置信息。

`clearTimeout(fakeId)`: 停止指定 `fakeId` 的定时器，并向 Worker 发送取消该定时器的指令。

**3、Web Worker 脚本创建 (**`createTimerBlob`**)**
`createTimerBlob` 使用 Blob 和 Object URL 创建 Web Worker 的独立计时环境，逻辑如下：



**4、消息处理 (**`onmessage`**和**`onerror`**)**
在主线程中监听 Worker 的消息回调 `onmessage`，以确保 `setTimeout` 触发时能够及时执行 `callback`，并清理 `fakeIdToCallback`。如果 Worker 遇到错误，则记录在控制台便于调试

```json
import { debug, loggerModules } from '@/common/stulogger';
class HackTimer {
  private fakeIdToCallback: any = {};
  private logPrefix: string = 'MIX_HackTimerWorker';
  private worker: Worker | null = null;
  private signal: boolean = false;
  constructor() {
    if (this.signal) {
      return;
    }
    this.createTimerBlob();
  }
  public setTimeout(callback: any, time: number, fakeId: string) {
    this.fakeIdToCallback[fakeId] = {
      callback,
      isTimeout: true,
    };
    this.log('setTimeout', fakeId);
    if (!this.worker) {
      return;
    }
    this.worker.postMessage({
      name: 'setTimeout',
      fakeId,
      time,
    });
  }
  public clearTimeout(fakeId: any) {
    this.log('clearTimeout', fakeId);
    delete this.fakeIdToCallback[fakeId];
    if (!this.worker) {
      return;
    }
    this.worker.postMessage({
      name: 'clearTimeout',
      fakeId,
    });
  }
  private createTimerBlob() {
    // tslint:disable-next-line
    const blob = new Blob (["\
    var fakeIdToId = {};\
    onmessage = function(event) {\
      var data = event.data,\
        name = data.name,\
        fakeId = data.fakeId,\
        time;\
      if(data.hasOwnProperty('time')) {\
        time = data.time;\
      }\
      switch (name) {\
        case 'setTimeout':\
          fakeIdToId[fakeId] = setTimeout(function () {\
            postMessage({fakeId: fakeId});\
            if (fakeIdToId.hasOwnProperty(fakeId)) {\
              delete fakeIdToId[fakeId];\
            }\
          }, time);\
          break;\
        case 'clearTimeout':\
          if (fakeIdToId.hasOwnProperty(fakeId)) {\
            clearTimeout(fakeIdToId[fakeId]);\
            delete fakeIdToId[fakeId];\
          }\
          break;\
      }\
    }\
    "]);
    const workerScript = window.URL.createObjectURL(blob);
    this.worker = new Worker(workerScript);
    this.worker.onmessage = (event) => {
      const data = event.data, fakeId = data.fakeId;
      let request, callback;
      if (this.fakeIdToCallback.hasOwnProperty(fakeId)) {
        request = this.fakeIdToCallback[fakeId];
        callback = request.callback;
        if (request.hasOwnProperty ('isTimeout') && request.isTimeout) {
          delete this.fakeIdToCallback[fakeId];
        }
      }
      if (typeof (callback) === 'function') {
        this.log('onmessage run', fakeId);
        callback.apply(window);
      }
    };
    this.worker.onerror = function(event) {
      console.log(event);
    };
    this.signal = true;
  }
  private log(...args: unknown[]) {
    // debug(loggerModules.pages,`[${this.logPrefix}]`, ...args);
  }
}

export const hackTimer = new HackTimer();
```


## HackTimer 使用方式

```json
  hackTimer.clearTimeout('syncTimer');
  hackTimer.setTimeout(async () => {                       
      TODO:
  }, 1000, 'syncTimer');
```

## 最后
通过 `HackTimer` 类，信令定时器不再受限于页面前后台状态，确保了用户在直播间答题过程中体验的流畅与实时。

