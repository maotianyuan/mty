import{_ as l,c as a,o as i,U as e}from"./chunks/framework.iGn5XQY6.js";const b=JSON.parse('{"title":"如何保证项目如期正常交付","description":"","frontmatter":{},"headers":[],"relativePath":"前端/经验/如何保证项目如期正常交付.md","filePath":"前端/经验/如何保证项目如期正常交付.md","lastUpdated":1722846512000}'),r={name:"前端/经验/如何保证项目如期正常交付.md"},t=e('<h1 id="如何保证项目如期正常交付" tabindex="-1">如何保证项目如期正常交付 <a class="header-anchor" href="#如何保证项目如期正常交付" aria-label="Permalink to &quot;如何保证项目如期正常交付&quot;">​</a></h1><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>项目交付涉及多个关键阶段，每个阶段都有其重要性和影响力。从研发角度出发，总结了每个阶段的关键任务及其执行要点，旨在确保项目按时、高质量地完成交付。</p><h2 id="需求预沟通" tabindex="-1">需求预沟通 <a class="header-anchor" href="#需求预沟通" aria-label="Permalink to &quot;需求预沟通&quot;">​</a></h2><p>各个方向的主R, 参与需求的预沟通，对需求进行是否准入判断。主要从这几个方面：衡量需求功能的必要性、查看收益、优先级、技术可行性及实现成本的初步估算、潜在风险的评估和预警机制。</p><ul><li>收益：研发资源有限、关注收益，需要关注收益中，描述数据是否是产品自己主观的，需要是客观的收益，且有收益数据对比产出</li><li>先整体后细节：预沟通避免沟通过于细节的点</li><li>分期: 复杂且体系化需求，分期做</li><li>自定义/通用化: 较为自定义的复杂需求，先做一版初级通用的，后期完善自定义功能</li><li>确定优先级：预沟通需求过多时，感知超过一定研发容量，提前预警明确需求优先级、并提前沟通可能存在的潜在资源冲突</li></ul><h2 id="需求初评" tabindex="-1">需求初评 <a class="header-anchor" href="#需求初评" aria-label="Permalink to &quot;需求初评&quot;">​</a></h2><ul><li>初评阶段侧重于需求的理解、初步技术方案和资源规划，主要目的是确定项目的可行性和初步计划。</li></ul><h2 id="需求终评" tabindex="-1">需求终评 <a class="header-anchor" href="#需求终评" aria-label="Permalink to &quot;需求终评&quot;">​</a></h2><p>确定各个方向参与需求成员，主要确认需求各个细节点、每个点的技术实现方案、潜在风险</p><ul><li>历史逻辑依然文档全：对 PM 业务需求 wiki 中存在的历史逻辑需要把控，需提供更加细致的历史流程逻辑梳理描述</li><li>紧急修复历史问题有原因：历史悠久功能，突然提出紧急需求优化，需要提出疑问</li><li>极端异常场景考虑全：把控需求极端异常 case 情况，不全给予需求打回，考虑全面，补充全面</li><li>小需求提醒流程发生变更：需求几句描述，但是现有流程发成变化，此时需要重点关注流程变更，涉及各个方向协调</li><li>需求变动同步全：需求变动(细节逻辑追加、修改), 不仅仅文档技术修改，也周知到各个角色包含 QA</li><li>新人产品有敬畏之心：防止因不了解全链路以及技术实现手段，大改特改，特别是表面看起来需求简单，但是内部复杂的逻辑，对其难易程度、实现时间的评估有所出入</li><li>投入大产出小均衡：推动部分方向暂时妥协或更换其他方案达到交付目的</li><li>变更需求刨根问：目的、为什么、问题所在</li><li>确认核心问题：倒排情况确定当前现状，确认问题核心点，防止反复沟通与修改</li></ul><h2 id="ui-评审" tabindex="-1">UI 评审 <a class="header-anchor" href="#ui-评审" aria-label="Permalink to &quot;UI 评审&quot;">​</a></h2><p>全面细节</p><ul><li>实现方案有把控：换肤 IP 问题提前沟通把控，避免开发后调整</li><li>逻辑细节需关注：除了样式，样式需要新增的逻辑点，需要格外关注,可能影响技术方案，(换肤方案提前沟通，避免审查时再提出来，在更换)</li><li>历史清晰现状易改：对历史逻辑的样式需要提前了解，现在的更改，才能准确评估出时间以及审查技术方案，UI 审查时间也更明了</li><li>成本考量需适宜：不合理处以及实现成本较高，与各方向沟通技术方案，寻找其他方案替代</li><li>标出改动点：从 1-N 设计稿, 给出修改点</li></ul><h2 id="动效评审" tabindex="-1">动效评审 <a class="header-anchor" href="#动效评审" aria-label="Permalink to &quot;动效评审&quot;">​</a></h2><p>规范大小、元素有度</p><ul><li>开发前确定：动效交互需要开发前确定，否则无法评估具体时间</li><li>不忽略每一像素动效：关注每一个元素、展现形式形式与顺序、元素拆分、元素对齐</li><li>动效资源监测：关注输出的动效，有无多余没用到图片元素进行移除</li><li>大小标准规范统一：资源拆分合并有度、统一内容容器，大小支持换肤，在处理资源时，需要有统一打下标准，防止不同皮肤在不同场景大小差异过大</li><li>Lottie 关注最后一帧：低端设备展示最后一帧，最后一帧注意不要是消失，否则展示不出来</li><li>兼容：动效注意适配和兼容</li></ul><h2 id="技术评审" tabindex="-1">技术评审 <a class="header-anchor" href="#技术评审" aria-label="Permalink to &quot;技术评审&quot;">​</a></h2><p>技术文档提前准备，提前思考再行动</p><ul><li>把控细节：细节不足，非纳米未考虑到、换肤改动不小</li><li>统一改动规范：主 R 需要全局意识关注，涉及到跨团队都需要改的文档，统一各个方向修改点，提前梳理改动项并制定改动规范（换肤）</li><li>文档细致清晰易懂：文档需要完善，提前督促把控技术方案文档</li><li>接口字段提前敲定：定义完之后先于各个端进行沟通，沟通达成一致、确定后在写代码</li><li>逻辑实现：新项目，历史字段和逻辑需要移除</li><li>风险暴露：关注技术评审的风险，有无可能带来的性能问题(列表、动效)，若有及时暴露</li></ul><h2 id="开发过程" tabindex="-1">开发过程 <a class="header-anchor" href="#开发过程" aria-label="Permalink to &quot;开发过程&quot;">​</a></h2><p>盯紧过程，关注进度与风险，以及问题同步沟通</p><ul><li>进度同步：统一早会同步消息(看情况 二四或者一五，看情况不用天天)、沟通问题、风险暴露</li><li>关注需求细节：防止需求有遗漏后无法补救</li><li>各个端文档统一：相同技术方案需要统一整理文档，并同步各个方向，防止多端冲突，提高沟通效率</li><li>移动端：移动端对于动画效果有所局限，要求相对 H5 较多，以移动端为主</li></ul><h2 id="时间安排" tabindex="-1">时间安排 <a class="header-anchor" href="#时间安排" aria-label="Permalink to &quot;时间安排&quot;">​</a></h2><ul><li>避免并行：风险提前暴露，研发时间不挤压不和 QA 时间并行，需加班提前几周告知，时间分配文档记录清晰，集中上线日期提前提醒</li><li>UI 走查很重要：时间提前预留并沟通时间，各方向提前预留时间</li><li>时间节奏均匀：showcase 时间过短，时间整体需要更加均匀，避免前松后紧</li></ul><h1 id="qa-case-评审" tabindex="-1">QA case 评审 <a class="header-anchor" href="#qa-case-评审" aria-label="Permalink to &quot;QA case 评审&quot;">​</a></h1><p>case 细致</p><ul><li>历史遗留：提前告知历史遗留问题，历史逻辑知识准备</li><li>变更需求case是否变更：需求后期变更，恐忘记同步QA，case 评审时，需进行把控</li></ul><h2 id="联调" tabindex="-1">联调 <a class="header-anchor" href="#联调" aria-label="Permalink to &quot;联调&quot;">​</a></h2><ul><li>账号版本环境提前准备：提前准备课程账号、整理文档并记录、协调各个方向开始联调，提前预留时间并积极参与</li><li>关注其他方向功能完全：统一组织集中联调功能，虽然是 PC 组也需关注下并验证下移动端的功能</li><li>细致细节全面：联调只验证单一新增功能，还需要多点一下多深入验证</li></ul><h2 id="ui-审查" tabindex="-1">UI 审查 <a class="header-anchor" href="#ui-审查" aria-label="Permalink to &quot;UI 审查&quot;">​</a></h2><ul><li>截图提效：提前截图录屏，节省时间</li><li>提醒时间：审查前再次与 UI 强调时间，预留充分时间，防止人力占用推迟审查</li></ul><h2 id="showcase" tabindex="-1">showcase <a class="header-anchor" href="#showcase" aria-label="Permalink to &quot;showcase&quot;">​</a></h2><ul><li>环境账号备齐：谁来创建课程，确认边界，提前准备课，提前预演</li><li>推动流程无卡点：推动问题解决和定位，防止某一个卡点，造成 case 卡主，阻塞影响整体进度</li><li>协调人力无阻塞：协调不同端解决阻塞问题</li><li>历史遗留卡新需求进度：历史遗留阻塞及时推动，不影响整体 show 时间</li></ul><h2 id="qa-跟测" tabindex="-1">QA 跟测 <a class="header-anchor" href="#qa-跟测" aria-label="Permalink to &quot;QA 跟测&quot;">​</a></h2><ul><li>细心细节：历史遗留、异常极端场景均回归到</li><li>同步加班：QA 预知自己需要加班，提前跟研发反馈，研发在知道情况下需要陪同，主R 需要提前协调</li><li>问题分类：历史遗留不阻塞、兼容性问题确定机型、偶现问题确定复现路径</li><li>历史逻辑：需要熟知历史功能逻辑</li><li>问题优先级：对历史遗留的问题，不影响本次需求上线，干扰的后面给时间排，不影响本次需求测试</li></ul><h2 id="内灰" tabindex="-1">内灰 <a class="header-anchor" href="#内灰" aria-label="Permalink to &quot;内灰&quot;">​</a></h2><p>提前协调组内其他成员，确定灰度方案，关注内灰问题</p><h2 id="外灰" tabindex="-1">外灰 <a class="header-anchor" href="#外灰" aria-label="Permalink to &quot;外灰&quot;">​</a></h2><ul><li>灰度开关：确保各个关键环节都有灰度开关，且功能可以灰度得到</li><li>灰度文档：外灰时间准备充分、外灰方案和影响点需要提前思考并落成文档</li></ul><h2 id="上线" tabindex="-1">上线 <a class="header-anchor" href="#上线" aria-label="Permalink to &quot;上线&quot;">​</a></h2><p>检查集中上线单，提醒各位及时填写，盯着各个模块全量状态结果，防止意外造成无法全量问题</p>',42),h=[t];function o(s,u,n,c,d,q){return i(),a("div",null,h)}const p=l(r,[["render",o]]);export{b as __pageData,p as default};
