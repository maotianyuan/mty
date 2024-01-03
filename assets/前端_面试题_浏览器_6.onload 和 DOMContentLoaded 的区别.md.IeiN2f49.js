import{_ as a,c as t,o as s,U as e}from"./chunks/framework.iGn5XQY6.js";const E=JSON.parse('{"title":"6.onload 和 DOMContentLoaded 的区别","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/浏览器/6.onload 和 DOMContentLoaded 的区别.md","filePath":"前端/面试题/浏览器/6.onload 和 DOMContentLoaded 的区别.md","lastUpdated":1704283107000}'),n={name:"前端/面试题/浏览器/6.onload 和 DOMContentLoaded 的区别.md"},o=e('<h1 id="_6-onload-和-domcontentloaded-的区别" tabindex="-1">6.onload 和 DOMContentLoaded 的区别 <a class="header-anchor" href="#_6-onload-和-domcontentloaded-的区别" aria-label="Permalink to &quot;6.onload 和 DOMContentLoaded 的区别&quot;">​</a></h1><h2 id="domcontentloaded" tabindex="-1">DomContentLoaded <a class="header-anchor" href="#domcontentloaded" aria-label="Permalink to &quot;DomContentLoaded&quot;">​</a></h2><p>DOMContentLoaded 含义是指仅当DOM加载完成，内敛 js 下载执行和defer脚本下周执行完毕之后， 不用等待图片</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DOMContentLoaded&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {})</span></span></code></pre></div><h1 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-label="Permalink to &quot;onload&quot;">​</a></h1><p>window.onload事件的含义是指当文档内容完全加载完成后(图片、CSS、脚本),触发</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span></code></pre></div>',7),i=[o];function d(l,h,p,r,c,k){return s(),t("div",null,i)}const g=a(n,[["render",d]]);export{E as __pageData,g as default};
