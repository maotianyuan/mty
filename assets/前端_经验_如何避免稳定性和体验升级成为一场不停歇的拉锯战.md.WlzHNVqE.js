import{_ as a,c as e,o as t,U as r}from"./chunks/framework.iGn5XQY6.js";const b=JSON.parse('{"title":"如何避免稳定性和体验升级成为一场不停歇的拉锯战","description":"","frontmatter":{},"headers":[],"relativePath":"前端/经验/如何避免稳定性和体验升级成为一场不停歇的拉锯战.md","filePath":"前端/经验/如何避免稳定性和体验升级成为一场不停歇的拉锯战.md","lastUpdated":1721386652000}'),o={name:"前端/经验/如何避免稳定性和体验升级成为一场不停歇的拉锯战.md"},h=r('<h1 id="如何避免稳定性和体验升级成为一场不停歇的拉锯战" tabindex="-1">如何避免稳定性和体验升级成为一场不停歇的拉锯战 <a class="header-anchor" href="#如何避免稳定性和体验升级成为一场不停歇的拉锯战" aria-label="Permalink to &quot;如何避免稳定性和体验升级成为一场不停歇的拉锯战&quot;">​</a></h1><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>当产品发展到一定程度，将会遇到稳定问题与体验问题，或单独遇到或同时遇到，当同时遇到时，如何避免稳定性和体验升级成为一场不停歇的拉锯战。如果你也有同样的问题，那怎么解决，本文将会对此话题进行探讨</p><h2 id="稳定性和体验简介" tabindex="-1">稳定性和体验简介 <a class="header-anchor" href="#稳定性和体验简介" aria-label="Permalink to &quot;稳定性和体验简介&quot;">​</a></h2><p>为方便下文的探讨，将会对什么是稳定性问题，什么是体验性问题，做下基础的简单介绍</p><h3 id="什么是稳定性问题" tabindex="-1">什么是稳定性问题 <a class="header-anchor" href="#什么是稳定性问题" aria-label="Permalink to &quot;什么是稳定性问题&quot;">​</a></h3><p>当一款产品，一会能用一会不能用，通常现象为：突发、某段时间、批量用户、集中、无法使用； 举个例子：某软件突然无法支付、某博客突然无法访问等等，这就是稳定性问题，通俗来说：软件提供的基础功能无法正常使用</p><h3 id="什么是体验问题" tabindex="-1">什么是体验问题 <a class="header-anchor" href="#什么是体验问题" aria-label="Permalink to &quot;什么是体验问题&quot;">​</a></h3><p>一款产品功能已经满足了用户的诉求，为了让用户使用起来更加舒适、沉浸、愉快等；全方位各个细节的提升用户的感官感受； 最基础的按钮几个状态：点击、悬浮、点击过、点击中（增加转圈的 loading 告知用户一致在等待，而不是没反应）、点击完成 再到到静态背景变为 3D 炫酷的动画；各个环节细节的打磨，沉浸式体验，带给用户最舒适的感受</p><h2 id="统一宗旨" tabindex="-1">统一宗旨 <a class="header-anchor" href="#统一宗旨" aria-label="Permalink to &quot;统一宗旨&quot;">​</a></h2><p>一款 2C 产品维护过程中，将会遇到稳定性和体验之间拉锯战；为什么这么说呢，当产品用户量足够多，需求也随之变多，就需要更加专业的人才过来，不同的角色职能就有所不同； 研发负责实现需求，保证系统运行的稳定性和性能是重要职责；设计负责提升样式效果；产品需要满足业务的诉求；秉持着专业的人做专业的事情。 当产品逐渐成型，功能整体完善，视觉体验就变得更加重要；在保证稳定性的基础之上，完成业务诉求，提升用户体验。是所有角色的统一宗旨。 当团队变大角色变多，在加之团队成员的流动性、各角色之间有一定的边界；若此时大家对于宗旨的认知达不成一致，各个角色对目标有所偏颇，那可能就造成拉锯站</p><h2 id="为什么是一场拉锯战" tabindex="-1">为什么是一场拉锯战 <a class="header-anchor" href="#为什么是一场拉锯战" aria-label="Permalink to &quot;为什么是一场拉锯战&quot;">​</a></h2><p>研发侧实现需要保稳定性，设计侧需要发挥创造力打磨好用户体验，当动效足够多、列表足够长、全屏元素过多、色彩图片足够丰富等类似这一系列的体验升级，都会对性能造成一定的挑战。 设计为体验更加好，上了很多炫酷的动效，研发为了保证稳定性，对炫酷的动效说实现不了。 设计说已经减无可减，不能再小了；研发说超了不行，再减点，内存 CPU 还超标。好不容易内存、CPU 控制在一定范围内，设计说效果不行。 一来一回反复调整，最好的结局便是在反复调整过程中，调整到双方都能结束的情况。 但若一方无法让步，一方不寻求最优解，各自站在自己的立场上，互相觉着对方能力不行，这场拉锯战便回不停歇，问题也随之上升。</p><p>下面的对话相信部分人遇到过类似的 张三：2M 动画资源，闹着玩呢，实现不了，上去也会返工，都不用试，效果肯定要打折 李四：怎么一上来总是说实现不了，你试了吗就说实现不了 张三：这都不用试，这是常识你懂么？ 王五：效果肯定不能打折扣 这是底线吧，效果若不及预期，体验这个事，还有啥可忙活的，对吧 张三：上了就崩，性能谁来保证？ 随着参与人越多，七嘴八舌问题越来越没用眉目, 问题上升</p><p>好你说不行，证明给我看， 啊真不行，减效果再试， 1h 过去，还不行，再减效果 1d 过去, 给你 1h 修改代码，还不行，再减点吧，快了 没法减了，我再试一试，还不行就没办法了 1h 过去，还不行，要不再试最后一次 耐心慢慢消磨，</p><h2 id="如何避免" tabindex="-1">如何避免 <a class="header-anchor" href="#如何避免" aria-label="Permalink to &quot;如何避免&quot;">​</a></h2><p>那如何避免成为一场拉锯战，让目标快速实现呢，让问题解决</p><h3 id="睁哪只眼闭哪只眼" tabindex="-1">睁哪只眼闭哪只眼 <a class="header-anchor" href="#睁哪只眼闭哪只眼" aria-label="Permalink to &quot;睁哪只眼闭哪只眼&quot;">​</a></h3><p>研发睁一只眼闭一只眼，给我多大的资源就用多大的资源，不压缩不看数据，直接上线吧，实现效果嘛很简单、任务完成皆大欢喜 然当上去后稳定性遇到了问题，事故随之而来，麻烦接踵而至，用户投诉无穷无尽；各个角色不得已重新返工； 逃避方式解决问题，问题终将暴露，当然这是闹着玩的。</p><h3 id="宗旨达成一致" tabindex="-1">宗旨达成一致 <a class="header-anchor" href="#宗旨达成一致" aria-label="Permalink to &quot;宗旨达成一致&quot;">​</a></h3><p>如果各个角色无法意识到，彼此相辅相成，互惠互利，宗旨无法达成一致，那接下来的避免将无从谈起</p><h3 id="性能数据测试工具" tabindex="-1">性能数据测试工具 <a class="header-anchor" href="#性能数据测试工具" aria-label="Permalink to &quot;性能数据测试工具&quot;">​</a></h3><p>图片(PNG\\GIF\\JEG)、音视频、动效(Lottie、APNG)、 大小、帧、尺寸给到多大合适，团队内是否有可靠的性能数据工具，有所靠谱且专业让人信服的工具进行评估 当指标（CPU 和 内存）超过多少，对稳定性会有挑战。</p><h3 id="标准规范制定" tabindex="-1">标准规范制定 <a class="header-anchor" href="#标准规范制定" aria-label="Permalink to &quot;标准规范制定&quot;">​</a></h3><p>当有了性能数据工具，各种资源将会给予一定的标准产出，有了这份标准，设计就会在产出之前就知道是否达标，缩短的沟通和返工时间，提高了效率</p><p>例如：图片资源需要小于 10kb、Lottie 需要小于 50kb、帧需要在 7-20 之间 故具体标准的数据制定需要，基于数据支撑上，各个角色共同商定达成一致，且随着产品发展有所适配调整的数据 统一共识：数据不在标准范围内，将会对稳定性造成一定影响</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>研发需要努力探索不同技术方案，承接更加复杂的设计元素 设计需要也同样有这样的意思：体验效果升级，或许有时候，并非只是炫酷大屏效果的叠加 当然，多站在对方立场考虑，目标一致，好好沟通，同样也很重要</p>',28),i=[h];function l(n,d,_,s,c,p){return t(),e("div",null,i)}const q=a(o,[["render",l]]);export{b as __pageData,q as default};
