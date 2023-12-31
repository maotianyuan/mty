import{_ as s,c as i,o as a,U as t}from"./chunks/framework.iGn5XQY6.js";const o=JSON.parse(`{"title":"40.'use strict' 的作用是什么","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/js/40.'use strict' 的作用是什么.md","filePath":"前端/面试题/js/40.'use strict' 的作用是什么.md"}`),n={name:"前端/面试题/js/40.'use strict' 的作用是什么.md"},e=t(`<h1 id="_40-use-strict-的作用是什么" tabindex="-1">40.&#39;use strict&#39; 的作用是什么 <a class="header-anchor" href="#_40-use-strict-的作用是什么" aria-label="Permalink to &quot;40.&#39;use strict&#39; 的作用是什么&quot;">​</a></h1><p>旨在减少常见错误，更健壮、安全</p><pre><code>- 意外创建全局变量 // message = &quot;Hello JavaScript! &quot;; //  这一行代码就会抛出 ReferenceError 
- 不能使用 delete 删除变量 var x;
</code></pre><p>delete x; // !!! 语法错误 - 不能使用保留子做变量名 public private protected static extends implements let var yield var private = 123; // !!! 语法错误 var public = &#39;hello&#39;; // !!! 语法错误 - 为只读属性赋值报错</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; } };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    obj2.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抛出TypeError错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, writable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    obj1.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抛出TypeError错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抛出TypeError错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { p: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, p: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// !!! 语法错误</span></span></code></pre></div><pre><code>- eval不在为上下文中创建变量或函数
- 禁止使用with语句
- 全局作用域的函数中的this不再指向全局而是undefined
</code></pre><ul><li>arguments 禁用</li></ul>`,7),h=[e];function p(l,k,r,E,d,c){return a(),i("div",null,h)}const y=s(n,[["render",p]]);export{o as __pageData,y as default};
