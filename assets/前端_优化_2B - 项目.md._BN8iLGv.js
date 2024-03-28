import{_ as a,c as l,o as i,U as e}from"./chunks/framework.iGn5XQY6.js";const q=JSON.parse('{"title":"2B 项目-优化","description":"","frontmatter":{},"headers":[],"relativePath":"前端/优化/2B - 项目.md","filePath":"前端/优化/2B - 项目.md","lastUpdated":1711606098000}'),t={name:"前端/优化/2B - 项目.md"},r=e('<h1 id="_2b-项目-优化" tabindex="-1">2B 项目-优化 <a class="header-anchor" href="#_2b-项目-优化" aria-label="Permalink to &quot;2B 项目-优化&quot;">​</a></h1><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><ul><li>特点：对内、小步快跑、模块分割</li><li>目标：效率、好用</li></ul><h2 id="效率" tabindex="-1">效率 <a class="header-anchor" href="#效率" aria-label="Permalink to &quot;效率&quot;">​</a></h2><h3 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h3><ul><li>背景: 部门从电销 LEC 发展而来不满 1 年，站在巨人的肩膀上开发, 高速发展，人员增速快，小步快跑</li><li>问题: 多个部门维护一个 git, 上线排队，其他团队构建代码有可能影响到我们的代码，代码规范和组件方式不统一, 不好管理，大促封线影响迭代</li><li>方案: 微前端拆分, 域名拆分, 父容器转移</li><li>效果: 打包构建变快，上线不在排队不用等待，上线方案独立互不干扰</li></ul><h3 id="脚手架" tabindex="-1">脚手架 <a class="header-anchor" href="#脚手架" aria-label="Permalink to &quot;脚手架&quot;">​</a></h3><ul><li>背景：微前端抽离项目过多，5 个左右，或者新增有新增子应用项目，每次看文档，因为理解不一致</li><li>问题：根据文档来，理解不一致，导致新创建项目，有可能出错，需要仔细比对哪出和文档有出入，造成失败，有时候线下看不出来，路径匹配出错，可能影响在上线前才能发现</li><li>方案：脚手架抽离</li><li>效果：新项目通过工具自动化创建，不在一一比对</li></ul><h3 id="构建统一" tabindex="-1">构建统一 <a class="header-anchor" href="#构建统一" aria-label="Permalink to &quot;构建统一&quot;">​</a></h3><ul><li>背景: 随着 LPC 发展慢慢演变，发现跟班主任辅导老师部门业务重叠(数据报表中心、排灌版、工作台、课程报名)，部分功能它有它也要，有细微差别可做成配置话</li><li>问题: 两部门规范不一致，打包构建方式不同意，新成员加入成本理解成本较高，一个用 vue-cli，一个用 原生 Webpack 构建，需求经常跨越式开发，易乱，子应用无法单独打开，需要基于父应用打</li><li>方案: 文档理解, 升级老 Webpack, 项目多 并写自动化配置工具 wp2vite wp2vuecli</li><li>效果: 各种构建方式统一，成员不在来回切换</li></ul><h2 id="好用" tabindex="-1">好用 <a class="header-anchor" href="#好用" aria-label="Permalink to &quot;好用&quot;">​</a></h2><h3 id="异步加载" tabindex="-1">异步加载 <a class="header-anchor" href="#异步加载" aria-label="Permalink to &quot;异步加载&quot;">​</a></h3><ul><li>背景: 组织架构节点层级深，过多历史原因无限制，全国-团队-大组-分部-小初高-团-小组-校-人，checkbox 节点过多 9 千多</li><li>问题: 配置中包含组织，需要复显，并勾选默认选中</li><li>方案: 将选中的 dom 节点，缓存到一个字符串变量中，暂存起来，详情的时候异步获取</li><li>效果: 异步加载组件，将不再影响整个页面的现实顺序</li></ul><h3 id="虚拟列表" tabindex="-1">虚拟列表 <a class="header-anchor" href="#虚拟列表" aria-label="Permalink to &quot;虚拟列表&quot;">​</a></h3><ul><li>背景: 内部项目，需要快速满足需求，能用即可，读取 上传 excel 中的列，简单过滤即可</li><li>问题: 三万条的下拉框数据，一下子渲染出来，页面很卡顿，无法使用</li><li>方案: 虚拟列表</li><li>效果: 页面不在卡顿，可正常搜索结果</li></ul><h3 id="单元测试" tabindex="-1">单元测试 <a class="header-anchor" href="#单元测试" aria-label="Permalink to &quot;单元测试&quot;">​</a></h3><ul><li>背景: 工具方法类型多，无收敛控制，每个人参与就新增一些</li><li>问题: 老得文档已无人维护和更新，不知道方法是否适合自己</li><li>方案: 工具方法增加单元测试，基础组件模块增加测试用例，通过测试用例更好的理解方法，理解组件使用方式</li><li>效果: 通过测试用例发现一些问题，核心模块也增加测试用例，方便更新</li></ul><h3 id="综合" tabindex="-1">综合 <a class="header-anchor" href="#综合" aria-label="Permalink to &quot;综合&quot;">​</a></h3><ul><li>UI 库按需加载</li><li>大文件分片上传</li><li>公共组件抽离</li></ul>',19),o=[r];function h(n,d,c,u,s,_){return i(),l("div",null,o)}const m=a(t,[["render",h]]);export{q as __pageData,m as default};
