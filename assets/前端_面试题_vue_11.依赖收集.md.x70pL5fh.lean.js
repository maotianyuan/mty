import{_ as t,c as a,o as l,k as e,a as r}from"./chunks/framework.iGn5XQY6.js";const v=JSON.parse('{"title":"依赖收集","description":"","frontmatter":{},"headers":[],"relativePath":"前端/面试题/vue/11.依赖收集.md","filePath":"前端/面试题/vue/11.依赖收集.md","lastUpdated":1704283107000}'),s={name:"前端/面试题/vue/11.依赖收集.md"},n=e("h1",{id:"依赖收集",tabindex:"-1"},[r("依赖收集 "),e("a",{class:"header-anchor",href:"#依赖收集","aria-label":'Permalink to "依赖收集"'},"​")],-1),o=e("ul",null,[e("li",null,"先渲染当前 watcher"),e("li",null,"渲染时候 get 变量，进行 Dep.depend 值为 Watcher 添加自己的 Dep"),e("li",null,"set 变量时候，发布事件，循环当前 Dep 中 Watcher 并执行"),e("li",null,"因为会频繁设置值，会导致多次运行 Watcher, 故发布前去重，并异步更新")],-1),c=[n,o];function _(d,i,p,h,u,m){return l(),a("div",null,c)}const x=t(s,[["render",_]]);export{v as __pageData,x as default};
