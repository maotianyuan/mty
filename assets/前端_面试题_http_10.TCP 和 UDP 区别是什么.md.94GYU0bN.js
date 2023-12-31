import{_ as a,c as e,o as t,U as r}from"./chunks/framework.iGn5XQY6.js";const u=JSON.parse('{"title":"TCP 和 UDP 区别是什么","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/10.TCP 和 UDP 区别是什么.md","filePath":"前端/面试题/http/10.TCP 和 UDP 区别是什么.md"}'),o={name:"前端/面试题/http/10.TCP 和 UDP 区别是什么.md"},i=r('<h1 id="tcp-和-udp-区别是什么" tabindex="-1">TCP 和 UDP 区别是什么 <a class="header-anchor" href="#tcp-和-udp-区别是什么" aria-label="Permalink to &quot;TCP 和 UDP 区别是什么&quot;">​</a></h1><p>传输层的两个协议</p><p>TCP: 有链接、可靠，缓慢的，双向的保证交付保证消息顺序的，基于字节流传输控制协议 Transfer Control Protocol UDP: 无连接(不需要三次握手) 不可靠，没序列，但快速的。头部开销小，可一对多，直播， User Data protocal 用户数据报</p><h1 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h1><p>TCP 三次握手有连接 UDP: 无连接</p><h1 id="可靠" tabindex="-1">可靠 <a class="header-anchor" href="#可靠" aria-label="Permalink to &quot;可靠&quot;">​</a></h1><p>TCP: 可靠，丢失会重发 UDP: 不可靠，不提供任何交付保证</p><h1 id="有序" tabindex="-1">有序 <a class="header-anchor" href="#有序" aria-label="Permalink to &quot;有序&quot;">​</a></h1><p>TCP: 有序 UDP：不保证顺序</p><h1 id="速度" tabindex="-1">速度 <a class="header-anchor" href="#速度" aria-label="Permalink to &quot;速度&quot;">​</a></h1><p>TCP 慢 UDP 快速</p><h1 id="头大小" tabindex="-1">头大小 <a class="header-anchor" href="#头大小" aria-label="Permalink to &quot;头大小&quot;">​</a></h1><p>TCP 头大 20 字节 序列号、ACK 号 数据偏移量、控制位、窗口、紧急指针、源端口、目标端口 UDP 头小 8 字节 源端口、目标端口、校验和、长度</p><h1 id="拥塞或流控制" tabindex="-1">拥塞或流控制 <a class="header-anchor" href="#拥塞或流控制" aria-label="Permalink to &quot;拥塞或流控制&quot;">​</a></h1><p>TCP 有流量控制，窗口大小 UDP 不能进行流量控制</p><h2 id="端口号为什么最大-65536" tabindex="-1">端口号为什么最大 65536 <a class="header-anchor" href="#端口号为什么最大-65536" aria-label="Permalink to &quot;端口号为什么最大 65536&quot;">​</a></h2><p>源端口号一共是 16 位，所以 2^16-1 = 65535</p><h2 id="udp-应用" tabindex="-1">UDP 应用 <a class="header-anchor" href="#udp-应用" aria-label="Permalink to &quot;UDP 应用&quot;">​</a></h2><p>DNS DHCP</p><h2 id="tcp-信号位" tabindex="-1">TCP 信号位 <a class="header-anchor" href="#tcp-信号位" aria-label="Permalink to &quot;TCP 信号位&quot;">​</a></h2><p>ACK 确认 PSH 发送 RST 重发 SYN 序号 FIN 断开 URG 紧急</p><h2 id="tcp-问题" tabindex="-1">TCP 问题 <a class="header-anchor" href="#tcp-问题" aria-label="Permalink to &quot;TCP 问题&quot;">​</a></h2><ul><li>tpc 顺序问题造成的对头阻塞</li><li>慢启动</li><li>time-wait 占用端口</li></ul>',23),h=[i];function l(n,P,c,d,p,s){return t(),e("div",null,h)}const T=a(o,[["render",l]]);export{u as __pageData,T as default};
