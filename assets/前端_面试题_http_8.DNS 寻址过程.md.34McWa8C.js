import{_ as a,c as t,o as e,U as i}from"./chunks/framework.iGn5XQY6.js";const m=JSON.parse('{"title":"DNS 寻址过程","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/8.DNS 寻址过程.md","filePath":"前端/面试题/http/8.DNS 寻址过程.md","lastUpdated":1704283107000}'),l={name:"前端/面试题/http/8.DNS 寻址过程.md"},p=i('<h1 id="dns-寻址过程" tabindex="-1">DNS 寻址过程 <a class="header-anchor" href="#dns-寻址过程" aria-label="Permalink to &quot;DNS 寻址过程&quot;">​</a></h1><p>域名服务 Domain Name Systemk,</p><ul><li><p>找浏览器缓存</p></li><li><p>操作系统缓存会对 DNS 解析结果做缓存</p></li><li><p>host</p></li><li><p>路由内置 DNS 缓存 或者 配置的 DNS 服务器 0.0.0.0、8.8.8.8</p></li><li><p>互联网服务器提供商（ISP）本地 DNS(LDNS), 缓存中查找，命中返回，没命中递归查询 (主机名.次级域名.顶级域名.根域名)</p><ul><li>从根域名(.)查到顶级域名(com)</li><li>从顶级域名(com)查找到次级域名(baidu)</li><li>根据次级域名(baidu)查找出主机名的 ip 地址(www)</li><li>LDNS 会缓存这个域名和对应的 ip</li></ul></li><li><p>递归：用户只发送一次请求，要求对方给出最终结果</p></li><li><p>迭代：用户发出一次请求，对方如果没有授权回答，它就会返回一个能解答这个查询的其他名称服务器列表 客户端在像列表发送请求，直到找到最终负责所查域名的名称服务器，从它的到结果</p></li></ul><p>从递归和迭代查询可以看出：</p><p>客户端-本地 dns 服务端：这部分属于递归查询。 本地 dns 服务端---外网：这部分属于迭代查询</p><h2 id="dns-为什么快" tabindex="-1">DNS 为什么快 <a class="header-anchor" href="#dns-为什么快" aria-label="Permalink to &quot;DNS 为什么快&quot;">​</a></h2><p>无连接 UPD, 每一步都有缓存</p><h2 id="几级域名" tabindex="-1">几级域名 <a class="header-anchor" href="#几级域名" aria-label="Permalink to &quot;几级域名&quot;">​</a></h2><p>www.test.com 二级 www.test.com.cn 三级 几个点就是几级</p>',9),o=[p];function s(n,r,_,d,c,h){return e(),t("div",null,o)}const D=a(l,[["render",s]]);export{m as __pageData,D as default};
