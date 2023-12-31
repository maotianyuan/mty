import{_ as t,c as a,o as e,U as _}from"./chunks/framework.iGn5XQY6.js";const f=JSON.parse('{"title":"http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/2.http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断.md","filePath":"前端/面试题/http/2.http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断.md"}'),h={name:"前端/面试题/http/2.http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断.md"},o=_('<h1 id="http-缓存原理-前端缓存了解哪些-网络缓存和前端缓存如何交互-协商缓存浏览器如何判断" tabindex="-1">http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断 <a class="header-anchor" href="#http-缓存原理-前端缓存了解哪些-网络缓存和前端缓存如何交互-协商缓存浏览器如何判断" aria-label="Permalink to &quot;http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断&quot;">​</a></h1><p>http 缓存分为强缓存和协商缓存 具体如何判断是通过 http header</p><h2 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-label="Permalink to &quot;强缓存&quot;">​</a></h2><p>expires 文件到期时间(绝对时间)，但是因为时区，本地电脑时间问题，http1.0 ，如果时间发送修改，则文件缓存失效 cache-control http1.1 相对时间 no-cache 不使用本地缓存，使用协商缓存 no-store 禁用 public private 只允许浏览器，不允许代理 max-age XX秒 相对于服务器期时间 s-maxage 代理</p><p>过程 第一次请求资源，返回一个 expires 到这个时间点之内，不再发送请求，默认从本地取 状态码 200</p><h2 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h2><p>last-modify|if-modify-since 文件最后修改时间 秒 有一个问题，文件非秒，还有内容不变但是修改时间变化 etag ｜ if-none-match 文件内容计算出的 hash，请求时进行比对，相同则返回 304，否则 200</p><ul><li>app.js 都存在使用了 协商缓存</li><li>字体图标 base64 memeory cache</li><li>mathjax disk cache</li></ul>',8),i=[o];function p(r,c,s,n,l,d){return e(),a("div",null,i)}const u=t(h,[["render",p]]);export{f as __pageData,u as default};
