import{_ as l,c as i,o as a,U as e}from"./chunks/framework.iGn5XQY6.js";const m=JSON.parse('{"title":"浏览器进程","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/浏览器/1.浏览器进程，渲染进程，渲染流程.md","filePath":"前端/面试题/浏览器/1.浏览器进程，渲染进程，渲染流程.md"}'),t={name:"前端/面试题/浏览器/1.浏览器进程，渲染进程，渲染流程.md"},o=e('<h1 id="浏览器进程" tabindex="-1">浏览器进程 <a class="header-anchor" href="#浏览器进程" aria-label="Permalink to &quot;浏览器进程&quot;">​</a></h1><p>浏览器进程分为：</p><blockquote><blockquote><p>从上到下，从左到右，从外到里</p></blockquote></blockquote><ul><li>主进程</li><li>插件进程</li><li>渲染进程</li><li>GPU 进程</li><li>网络进程</li></ul><h1 id="渲染进程的线程" tabindex="-1">渲染进程的线程 <a class="header-anchor" href="#渲染进程的线程" aria-label="Permalink to &quot;渲染进程的线程&quot;">​</a></h1><blockquote><blockquote><p>先总后分</p></blockquote></blockquote><ul><li>JS 引擎线程：和渲染互斥 <ul><li>事件处理</li><li>计时器：setTimeout setInterval</li><li>异步请求 XMLHttpRequest</li></ul></li><li>GUI 渲染页面（解析、布局、绘制、回流重绘）</li></ul><h1 id="浏览器渲染流程" tabindex="-1">浏览器渲染流程 <a class="header-anchor" href="#浏览器渲染流程" aria-label="Permalink to &quot;浏览器渲染流程&quot;">​</a></h1><ul><li><p>主线程</p><ul><li>html 解析构建 DOM Tree</li><li>css 构建 CSSOM Tree</li><li>dom 和 om 树合成 Render Tree</li><li>布局计算、生成布局 Layout Tree</li><li>拆分出对应的层 Layer Tree，交给合成线程</li></ul></li><li><p>合成线程</p><ul><li>层进行分割，根据优先级交给光栅化线程进行光栅化(几何信息真正的像素点)</li></ul></li><li><p>光栅化线程池</p><ul><li>对块进行光栅化</li></ul></li><li><p>合成线程</p><ul><li>生成合成帧，发送给 GPU 显示</li></ul></li><li><p>前后端交互时候 cookie 跨域如何携带 withCredentials</p></li></ul><h2 id="link-标签或者-css-会阻塞-html-的解析吗-为什么" tabindex="-1">link 标签或者 css 会阻塞 html 的解析吗？为什么？ <a class="header-anchor" href="#link-标签或者-css-会阻塞-html-的解析吗-为什么" aria-label="Permalink to &quot;link 标签或者 css 会阻塞 html 的解析吗？为什么？&quot;">​</a></h2><p>阻塞渲染，不阻塞解析</p><h2 id="浏览器从-html-响应到渲染出内容过程-渲染树和-dom-树有什么区别" tabindex="-1">浏览器从 html 响应到渲染出内容过程，渲染树和 DOM 树有什么区别 <a class="header-anchor" href="#浏览器从-html-响应到渲染出内容过程-渲染树和-dom-树有什么区别" aria-label="Permalink to &quot;浏览器从 html 响应到渲染出内容过程，渲染树和 DOM 树有什么区别&quot;">​</a></h2><p>渲染树是： css os 树和 dom 结合</p><h2 id="浏览器渲染过程中可以优化的点" tabindex="-1">浏览器渲染过程中可以优化的点 <a class="header-anchor" href="#浏览器渲染过程中可以优化的点" aria-label="Permalink to &quot;浏览器渲染过程中可以优化的点&quot;">​</a></h2><ul><li><p>减少重绘和回流</p></li><li><p>批量操作：操作 dom 进行合并，并保存</p></li><li><p>纯合成动画</p></li><li><p>懒加载、异步加载</p></li><li><p>虚拟加载</p></li><li><p>预渲染、ssr</p></li><li><p>双向绑定</p></li><li><p>cdn</p></li><li><p>节流、防抖</p></li></ul><h2 id="js-为什么是单线程的" tabindex="-1">JS 为什么是单线程的 <a class="header-anchor" href="#js-为什么是单线程的" aria-label="Permalink to &quot;JS 为什么是单线程的&quot;">​</a></h2><p>单线程特点：同一时间只能做一件事情 如果是多线程，可能互相之间发生冲突，js 操作 dom, 防止互相发生覆盖，如果一个修改一个删除，浏览器决定由那个线程生效。 避免锁加深复杂性。</p><h2 id="js-为什么阻塞页面加载" tabindex="-1">JS 为什么阻塞页面加载 <a class="header-anchor" href="#js-为什么阻塞页面加载" aria-label="Permalink to &quot;JS 为什么阻塞页面加载&quot;">​</a></h2><p>如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了</p><h2 id="为什么操作-dom-慢" tabindex="-1">为什么操作 DOM 慢 <a class="header-anchor" href="#为什么操作-dom-慢" aria-label="Permalink to &quot;为什么操作 DOM 慢&quot;">​</a></h2><p>在 JS 操作元素的位置大小时候, 会引发重排</p><h2 id="访问-dom-属性成本可能会很高" tabindex="-1">访问 DOM 属性成本可能会很高 <a class="header-anchor" href="#访问-dom-属性成本可能会很高" aria-label="Permalink to &quot;访问 DOM 属性成本可能会很高&quot;">​</a></h2><ul><li>跨线程通信</li><li>强制重排：js 线程和渲染线程相互独立， 浏览器重排优化等待一段时间进行批处理，JS 访问属性时，为了更正确的获取元素的几何信息，会立刻重新计算，强制重排</li></ul>',23),r=[o];function h(s,p,c,d,n,u){return a(),i("div",null,r)}const q=l(t,[["render",h]]);export{m as __pageData,q as default};
