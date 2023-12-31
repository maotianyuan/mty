import{_ as a,c as i,o as l,U as s}from"./chunks/framework.iGn5XQY6.js";const P=JSON.parse('{"title":"输入 url 到看到页面发生了什么","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/浏览器/4.输入url到看到页面发生了什么.md","filePath":"前端/面试题/浏览器/4.输入url到看到页面发生了什么.md"}'),e={name:"前端/面试题/浏览器/4.输入url到看到页面发生了什么.md"},h=s(`<h1 id="输入-url-到看到页面发生了什么" tabindex="-1">输入 url 到看到页面发生了什么 <a class="header-anchor" href="#输入-url-到看到页面发生了什么" aria-label="Permalink to &quot;输入 url 到看到页面发生了什么&quot;">​</a></h1><h2 id="总" tabindex="-1">总 <a class="header-anchor" href="#总" aria-label="Permalink to &quot;总&quot;">​</a></h2><p>浏览器是多进程的，每个页面是一个进程 浏览器进程：输入 URL 地址获取到地址，开启新的进程 网络进程，发起资源请求，获取到文件交给渲染进程 渲染进程：解析并渲染文件</p><h2 id="网络进程-网络七层模型" tabindex="-1">网络进程 （网络七层模型） <a class="header-anchor" href="#网络进程-网络七层模型" aria-label="Permalink to &quot;网络进程 （网络七层模型）&quot;">​</a></h2><h3 id="缓存资源" tabindex="-1">缓存资源 <a class="header-anchor" href="#缓存资源" aria-label="Permalink to &quot;缓存资源&quot;">​</a></h3><ul><li>请求资源，先去检查浏览器缓存，存在着直接返回资源</li></ul><h3 id="应用层-域名解析" tabindex="-1">应用层： 域名解析 <a class="header-anchor" href="#应用层-域名解析" aria-label="Permalink to &quot;应用层： 域名解析&quot;">​</a></h3><ul><li>看域名是否被解析，通过 DNS 协议将域名解析成 IP 地址（过程基于 UDP） <ul><li>URL 找到先找浏览器缓存，没有找本机缓存，没有找 HOST，在没有找 DNS 域名服务找到，中间可能经过路由缓存</li><li>HTTP 生成请求报文 请求行 空行 请求主体</li></ul></li></ul><h3 id="传输层" tabindex="-1">传输层 <a class="header-anchor" href="#传输层" aria-label="Permalink to &quot;传输层&quot;">​</a></h3><ul><li>请求如果是 HTTPS 的话需要进行 TLS 协商</li><li>建立 TCP 通信连接，进行三次握手</li><li>利用 TCP 传输数据包（可靠、有序），服务器按照顺序来收</li><li>默认不会断开 keep-alive 复用上次链接</li></ul><h3 id="其他层" tabindex="-1">其他层 <a class="header-anchor" href="#其他层" aria-label="Permalink to &quot;其他层&quot;">​</a></h3><ul><li>网络层：路由转发找到对应服务器 物理 MAC 地址</li><li>物理链路层：通过物理设备</li></ul><h3 id="服务器" tabindex="-1">服务器 <a class="header-anchor" href="#服务器" aria-label="Permalink to &quot;服务器&quot;">​</a></h3><ul><li>服务器收到数据 <ul><li>负载均衡 HTTP 复用</li></ul></li><li>HTTP 响应报文</li><li>缓存设置</li></ul><h2 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h2><ul><li><p>GUI 渲染线程</p><ul><li>HTML 解析成 DOM Tree， CSS 解析成 CSSOM，合成 RenderTree，计算布局 render,然后绘制渲染</li></ul></li><li><p>JS 引擎解析线程</p><ul><li>EventLoop 作用域链 变量提升 回收机制 垃圾回收 作用域链 原型链</li></ul></li></ul><h2 id="osi-七层模型" tabindex="-1">OSI 七层模型 <a class="header-anchor" href="#osi-七层模型" aria-label="Permalink to &quot;OSI 七层模型&quot;">​</a></h2><p>理想化模型，给我们网络划分层次，复杂内容简单化，专人干专事 下一层为上一层做服务的</p><p>应用层：接口 【报文】 表式：数据进行描述、压缩 会话：建立管理会话 传输层：UDP TCP 协议给对方传过去数据，丢了重传【数据端-增加端口】 网络层：寻址找到对方【数据包-增加 ip】 数据链路层：讲两个设备进行连接，中转【数据帧-增加 mac 地址】 物理层：怎么把数据传输过去 用 0、1 表示</p><h2 id="每一层的数据格式是" tabindex="-1">每一层的数据格式是 <a class="header-anchor" href="#每一层的数据格式是" aria-label="Permalink to &quot;每一层的数据格式是&quot;">​</a></h2><ul><li>报文：应用层 + 数据</li><li>数据段：传输层 + 数据 + 端口</li><li>数据包：网络层 + 数据 + 端口 + ip</li><li>数据帧：数据链路鞥 + 数据 + 端口 + ip + mac 地址</li></ul><h2 id="ip-地址-mac-地址" tabindex="-1">ip 地址 + mac 地址 <a class="header-anchor" href="#ip-地址-mac-地址" aria-label="Permalink to &quot;ip 地址 + mac 地址&quot;">​</a></h2><p>目的 ip 地址 找到 mac 地址</p><ul><li>ip 地址不是固定的</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ipV4</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255.255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255.255</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  255</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 亿个</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ipv6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4444.4444</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4444.4444</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4444.4444</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4444.4444</span></span></code></pre></div><ul><li>mac 每个网卡自动的 mac 地址，原则上不变</li></ul><h2 id="每个层的设备有哪些" tabindex="-1">每个层的设备有哪些 <a class="header-anchor" href="#每个层的设备有哪些" aria-label="Permalink to &quot;每个层的设备有哪些&quot;">​</a></h2><h3 id="物理层设备" tabindex="-1">物理层设备 <a class="header-anchor" href="#物理层设备" aria-label="Permalink to &quot;物理层设备&quot;">​</a></h3><ul><li>光线、电缆 网线有大传输距离 100，需要放大器，解决距离</li></ul><h3 id="链路层" tabindex="-1">链路层 <a class="header-anchor" href="#链路层" aria-label="Permalink to &quot;链路层&quot;">​</a></h3><ul><li>交换机，有 mac 地址映射表</li></ul><h3 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h3><ul><li>路由器（网关）wan lan</li><li>不具备 wan 就是交换机</li><li>与交换机区别，就是可以上网</li></ul><p>mac 地址在变化，ip 是不变的</p><h2 id="每一层的协议" tabindex="-1">每一层的协议 <a class="header-anchor" href="#每一层的协议" aria-label="Permalink to &quot;每一层的协议&quot;">​</a></h2><blockquote><p>约定和规范, 网络层以上有协议</p></blockquote><ul><li>应用层：HTTP DNS DHCP</li><li>传输层：TCP UDP</li><li>网络层：IP ARP</li></ul><h3 id="arp" tabindex="-1">ARP <a class="header-anchor" href="#arp" aria-label="Permalink to &quot;ARP&quot;">​</a></h3><p>ip 转化为 mac, 最终通过 mac 转化传输，做一个广播</p><h3 id="dhcp" tabindex="-1">DHCP <a class="header-anchor" href="#dhcp" aria-label="Permalink to &quot;DHCP&quot;">​</a></h3><p>动态主机配置协议，基于 UDP 自动分配 IP， 无需手动配置</p>`,41),t=[h];function r(n,p,o,d,k,u){return l(),i("div",null,t)}const b=a(e,[["render",r]]);export{P as __pageData,b as default};
