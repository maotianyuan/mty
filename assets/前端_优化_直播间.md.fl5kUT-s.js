import{_ as l,c as i,o as a,U as e}from"./chunks/framework.iGn5XQY6.js";const b=JSON.parse('{"title":"2C 直播间-优化","description":"","frontmatter":{},"headers":[],"relativePath":"前端/优化/直播间.md","filePath":"前端/优化/直播间.md","lastUpdated":1727403591000}'),t={name:"前端/优化/直播间.md"},u=e('<h1 id="_2c-直播间-优化" tabindex="-1">2C 直播间-优化 <a class="header-anchor" href="#_2c-直播间-优化" aria-label="Permalink to &quot;2C 直播间-优化&quot;">​</a></h1><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><ul><li>特点：课件资源需要下载、互动答题、视频播放、聊天</li><li>目标：进教室快、互动题易懂流畅、反馈激励丝滑、页面秒开、视频高清无黑屏无卡顿</li></ul><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><ul><li>进教室 <ul><li>单页：多单页面权衡(稳定性和性能取舍)</li><li>资源：资源缓存、拆包、rust 资源高效下载</li></ul></li><li>互动题 <ul><li>创建: 预创建、基础参数读取(因是文件读取)增加缓存、多互动复用</li><li>挂载：挂载方法自定义注入</li></ul></li><li>反馈激励 <ul><li>动画: Lottie <ul><li>大小有标准把控，减少粒子效果</li><li>低端设备效果分层：展示图片</li><li>资源包构建抽离、预加载</li><li>图片外挂与非外挂取舍：换肤资源用图片外挂、在线预览用 base64, 图片压缩</li></ul></li><li>声音: 声音统一压缩，单个音频小于 100kb</li></ul></li><li>页面容器 <ul><li>层级: 同步位移替换异步层级、分类别容器可选注入</li><li>创建: 常驻、复用、预创建</li></ul></li><li>基础 <ul><li>事件：防抖节流(bv 事件成本高)、定时器(避免浏览器懒执行)、主动要而非监听(BV 崩溃导致端监听事件堆叠)</li><li>时机：空闲加载(动画资源、拆包资源)、异步加载、预加载(音频预加载)</li><li>数据：代理缓存(本地文件读取，常量变量分析，常量给增加缓存)</li><li>资源：构建(拆包)</li></ul></li><li>聊天 <ul><li>动图缓存与压缩</li></ul></li><li>其他 <ul><li>日志: 降频落盘、高频和无意义移除</li><li>低端设备: 极速模式打开</li></ul></li></ul><h2 id="体验" tabindex="-1">体验 <a class="header-anchor" href="#体验" aria-label="Permalink to &quot;体验&quot;">​</a></h2><ul><li>进教室 <ul><li>多页面过度 loading 动画统一</li></ul></li><li>互动题 <ul><li>流程：用户不知怎么发言、用户不知道怎么参与</li></ul></li><li>反馈激励 <ul><li>动画：学分称号效果炫酷提升</li><li>声音：声音播放主要内容进行提示</li></ul></li><li>页面容器 <ul><li>多分辨率适配</li><li>骨架屏</li></ul></li><li>视频流 <ul><li>清晰度优化、清晰度切换、双网加速(移动)</li></ul></li></ul><h2 id="稳定" tabindex="-1">稳定 <a class="header-anchor" href="#稳定" aria-label="Permalink to &quot;稳定&quot;">​</a></h2><ul><li>多容器架构进程隔离</li><li>CDN 容灾</li><li>本地资源离线化</li><li>数据监控 <ul><li>进教室成功率</li><li>进教室时长</li><li>crash 率：提示优化</li><li>内存 占比</li><li>CPU 使用</li></ul></li></ul><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><ul><li>框架：融合无类型、配置化</li><li>皮肤：zip 包配置</li></ul><h2 id="效率" tabindex="-1">效率 <a class="header-anchor" href="#效率" aria-label="Permalink to &quot;效率&quot;">​</a></h2><ul><li>构建：不等待打包构建，端直接嵌套本地运行</li><li>基础：日志课件地址、用户信息快捷查询、</li><li>直播：信令模拟、进度条点位分析、融合配置信息</li><li>架构：CommonData 健康度、BV 管理、CommonUI 触发</li><li>工具：日志落盘</li></ul><h2 id="流程挑战" tabindex="-1">流程挑战 <a class="header-anchor" href="#流程挑战" aria-label="Permalink to &quot;流程挑战&quot;">​</a></h2><ul><li>时间：倒逼、紧迫、并行、赶不上大部队</li><li>业务：业务无交接和宣讲、不熟悉成本无法评估时间</li><li>技术：重构中、遇到一个问题解决一个</li><li>人人：刚组合不熟悉</li></ul><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><ul><li>聊天</li><li>common-ui</li><li>容器</li><li>无网｜声音</li><li>进教室</li><li>CommonData</li><li>表扬榜</li></ul>',17),o=[u];function r(h,n,d,s,c,_){return a(),i("div",null,o)}const q=l(t,[["render",r]]);export{b as __pageData,q as default};
