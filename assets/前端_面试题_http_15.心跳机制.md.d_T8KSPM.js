import{_ as a,c as s,o,k as e,a as t}from"./chunks/framework.iGn5XQY6.js";const P=JSON.parse('{"title":"websocket心跳机制","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/http/15.心跳机制.md","filePath":"前端/面试题/http/15.心跳机制.md","lastUpdated":1704283107000}'),c={name:"前端/面试题/http/15.心跳机制.md"},n=e("h1",{id:"websocket心跳机制",tabindex:"-1"},[t("websocket心跳机制 "),e("a",{class:"header-anchor",href:"#websocket心跳机制","aria-label":'Permalink to "websocket心跳机制"'},"​")],-1),_=e("p",null,"客户端每隔一段时间向服务端发送一个特有的心跳消息 每次服务端收到消息后只需将消息返回，此时，若二者还保持连接，则客户端就会收到消息， 若没收到，则说明连接断开，此时，客户端就要主动重连，完成一个周期",-1),r=e("p",null,"心跳的实现也很简单，只需在第一次连接时用回调函数做延时处理，此时还需要设置一个心跳超时时间， 若某时间段内客户端发送了消息，而服务端未返回，则认定为断线。",-1),d=e("p",null,"固定时长主动向后台发送一次数据，一般是30s，这个可以自己设置，保证通信正常。如果连接中断，需要重新去连接websocket",-1),l=e("h2",{id:"问题",tabindex:"-1"},[t("问题 "),e("a",{class:"header-anchor",href:"#问题","aria-label":'Permalink to "问题"'},"​")],-1),i=e("p",null,"WebSocket 由于各种原因和后端失去的连接没有了反应 有时前端或者后端会断线而对方不知道，像弱网或者后端服务器重启时，前端并不能保证一直连接",-1),h=[n,_,r,d,l,i];function p(k,b,m,f,u,w){return o(),s("div",null,h)}const $=a(c,[["render",p]]);export{P as __pageData,$ as default};
