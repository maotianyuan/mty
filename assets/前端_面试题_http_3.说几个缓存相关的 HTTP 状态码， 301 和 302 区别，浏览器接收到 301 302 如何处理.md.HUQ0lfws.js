import{_,c as t,o as e,U as i}from"./chunks/framework.iGn5XQY6.js";const u=JSON.parse('{"title":"说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/3.说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理.md","filePath":"前端/面试题/http/3.说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理.md"}'),r={name:"前端/面试题/http/3.说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理.md"},l=i('<h1 id="说几个缓存相关的-http-状态码-301-和-302-区别-浏览器接收到-301-302-如何处理" tabindex="-1">说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理 <a class="header-anchor" href="#说几个缓存相关的-http-状态码-301-和-302-区别-浏览器接收到-301-302-如何处理" aria-label="Permalink to &quot;说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理&quot;">​</a></h1><ul><li><p>301 302 303 304</p></li><li><p>301 永久性重定向，所有页面已经转移到新的 url</p><ul><li>第一次请求后 origin redirect 存在缓存中，当再次请求 origin 时候，浏览器会获取到 redirect 直接进行跳转，</li><li>在浏览器缓存不失效情况下，即使浏览器重定向地址修改为 redirect2，浏览器依然重定项到 redirect</li></ul></li><li><p>302 临时重定向</p><ul><li>浏览器不进行缓存，每次都会请求一下 origin</li></ul></li><li><p>303 临时重定向 需要 get 获取资源</p></li></ul>',2),a=[l];function o(c,n,p,s,d,T){return e(),t("div",null,a)}const P=_(r,[["render",o]]);export{u as __pageData,P as default};
