import{_ as l,c as i,o as a,U as e}from"./chunks/framework.iGn5XQY6.js";const b=JSON.parse('{"title":"如何保证项目高效保质交付","description":"","frontmatter":{},"headers":[],"relativePath":"前端/经验/如何保证项目如期正常交付.md","filePath":"前端/经验/如何保证项目如期正常交付.md","lastUpdated":1729048480000}'),t={name:"前端/经验/如何保证项目如期正常交付.md"},r=e('<h1 id="如何保证项目高效保质交付" tabindex="-1">如何保证项目高效保质交付 <a class="header-anchor" href="#如何保证项目高效保质交付" aria-label="Permalink to &quot;如何保证项目高效保质交付&quot;">​</a></h1><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>项目开始到交付涉及多个关键阶段，每个阶段都有不同的侧重和关注点。本文站在研发角度结合个人自己的经历，总结了每个阶段需要关注的测重点，保证项目高效保质交付。 注：不同的需求内容和团队规模，对其历程及侧重点有所差异。</p><h2 id="需求预沟通" tabindex="-1">需求预沟通 <a class="header-anchor" href="#需求预沟通" aria-label="Permalink to &quot;需求预沟通&quot;">​</a></h2><p>产品概括描述需求内容、完善收益数据；研发对需求评估出技术可行性及初步成本估算。之后双方根据当前资源情况，评估出优先级，确定需求是否准入及本期需求内容。</p><ul><li><p>人员</p><ul><li>各个方向的主R, 参与需求的预沟通阶段。预沟通阶段，切忌拉过多一线执行，需求未准入阶段，过度参与，造成研发资源的浪费</li></ul></li><li><p>需求内容</p><ul><li>避免过细节: 预沟通时，避免沟通过于细节的点，将焦点放在需求的业务价值和基本可行性上</li><li>合理分期分布执行: 复杂且体系化大型需求，引导产品将其拆分为阶段性目标，逐步实现，确保每阶段都能产生可用成果</li><li>通用化实现自定义方案: 较为自定义的复杂需求，先做一版初级通用的，后期完善自定义功能，避免一上来就做复杂自定义需求</li><li>紧急修复历史债有原因: 历史问题，突然提出紧急需求优化，需要提出疑问，全面了解其背景之后，在做决策。防止短期修复影响长期线上稳定性</li><li>新人产品保持敬畏之心: 防止新人因不了解全链路以及技术实现手段，一上来大改特改，特别是表面看起来需求简单的，一句话需求，但是内部含复杂的历史逻辑，这与产品预期有所大的出入</li></ul></li><li><p>可行性: 研发基于当前对团队技术了解，评估出需求可行性，识别出潜在的风险点，明确技术限制</p></li><li><p>收益</p><ul><li>ROI 评估: 资源有限且宝贵、研发准入，收益评估是最重要一项之一。确保项目的资源使用能够带来最大的回报</li><li>数据可推敲: 研发关注描述的数据是否是产品自己主观的，需要是客观的数据指标和明确的收益，具有前后数据对比的收益产出。 有收益前后的数据对比产出。研发需要对数据计算的方式进行理解</li></ul></li><li><p>成本及优先级</p><ul><li>粗估成本：研发根据当前需求内容，粗估一个时间，有助于产品了解成本，考虑需求分期方案</li><li>资源预警: 研发预沟通评估一定的成本，感知超过一定研发容量，研发需提前预警，要求产品明确需求的优先级、并提前沟通可能存在的潜在资源冲突</li></ul></li></ul><h2 id="需求初评" tabindex="-1">需求初评 <a class="header-anchor" href="#需求初评" aria-label="Permalink to &quot;需求初评&quot;">​</a></h2><p>确定各个方向参与需求成员， 产品详细描述需求内容，完善需求边界场景；研发根据需求细节点，初步评估技术可行性</p><ul><li><p>通用关注点</p><ul><li>技术实现细节：需求会议，保持会议高效，避免讨论过多的技术细节，占用过多时间。专注于阻塞点</li><li>历史逻辑文档全: 注意对产品需求描述中&quot;历史逻辑不在展开&quot;的关键点。研发需要要求产品，提供更加细致的历史流程逻辑梳理及描述，以便于研发能够全面理解需求背景和影响</li><li>极端异常场景考虑全: 研发把控需求极端异常 case 情况，对产品梳理不全及不清晰的给予需求打回，减少遗漏</li><li>小需求警惕流程变更: 需求小一句话概括，警惕流程是否发成了变化，这不仅涉及各个方向协调，也可能造成全流程的影响</li><li>投入大产出小均衡: 主R有时无法掌握具体细节的逻辑，有可能存在投入大产出小的需求，研发推动部分方向暂时妥协或更换其他方案达到交付目的，或提出问题所在</li><li>确认核心问题: 倒排情况确定当前现状，确认问题核心点，防止反复沟通与修改</li><li>所有场景的罗列: 场景过多的时候，需要全部罗列，防止不同理解有所偏差</li></ul></li><li><p>自定义</p><ul><li>体验类需求，明确资源标准：体验升级类需求，提前明确当前程序可承载的性能标准，提前同步到产品、设计、动效，在后续设计中有参考，满足程序性能要求</li><li>资源限制：部分需求模块容易引发性能问题，需要警惕此需求变更，同时警惕需求改动，检查需求是否有所限制</li><li>低端场景：评估需求在低端设备上的表现，确保性能不受影响，研发及时提出低端设备所需方案</li><li>操作限制：异步流程类需求，需要在操作入口处给予限制</li><li>性能数据标准：再次强调设计之前，各端若对设计产出的资源有要求，例如：PNG 需要小于 10KB, Lottie 小于 50KB 等等 需提前提出已制定好的数据规范，防止测试阶段性能问题暴露，引起的全流程重新返工，特别是刚组建的团队或有新人介入，需要建立数据驱动决策的思维</li></ul></li></ul><h2 id="需求终评" tabindex="-1">需求终评 <a class="header-anchor" href="#需求终评" aria-label="Permalink to &quot;需求终评&quot;">​</a></h2><p>主要对初评遗留的待确认项，做最后的确认</p><ul><li>变更同步全员知晓: 需求变动(细节逻辑追加、修改), 不仅仅文档技术修改，也周知到各个角色包含 QA</li><li>变更需求分析: 目的、为什么、问题所在，以便评估其对整体项目的影响</li></ul><h2 id="交互评审" tabindex="-1">交互评审 <a class="header-anchor" href="#交互评审" aria-label="Permalink to &quot;交互评审&quot;">​</a></h2><p>交互需要关注产品需求的描述，给予交互状态的补充。</p><ul><li>检查完整性：研发需要检查交互是否涵盖需求的描述，确保所有功能点都有所体现</li><li>可行性：交互可行性投入产出比，若有实现低成本表现高质量的平替给予建议</li><li>多端一致性：交互多端需要统一</li></ul><h2 id="动效评审" tabindex="-1">动效评审 <a class="header-anchor" href="#动效评审" aria-label="Permalink to &quot;动效评审&quot;">​</a></h2><p>研发需要提供资源标准，动效需要符合标准</p><ul><li>资源规范：研发检查是否符合资源标准，防止动效过多带来性能问题</li><li>资源内容：关注输出的动效资源，有无多余没用到元素，提醒进行移除</li><li>Lottie 类重型资源：重资源考虑低端机场景，评估设计在低端机的性能是否达标(最后一帧、图片)</li><li>关注细微动效：关注细微元素、展现形式与顺序、元素拆分、元素对齐</li><li>兼容提醒：动效注意多端适配和属性及版本的兼容，测试提前预留兼容测试场景，为防止后期批量出现不兼容问题，导致增加测试时长</li></ul><h2 id="ui-评审" tabindex="-1">UI 评审 <a class="header-anchor" href="#ui-评审" aria-label="Permalink to &quot;UI 评审&quot;">​</a></h2><p>研发重点关注设计实现方式和成本，产品重点关注设计效果 设计中间先于产品及交互先内部对齐一致，避免设计完成评审时，会议上产品对设计效果有所大意见，造成反复沟通与返工</p><ul><li>实现方案有把控：不同的设计方案，会影响到需求具体实现的技术方案，导致与初步评估时长有较大出入</li><li>设计增加原有需求程序逻辑: 样式变更，增加了需求实现的程序逻辑点，需要格外关注, 可能影响技术方案或造成成本增加，避免审查时再提出来，导致多个方向发生变更</li><li>设计稿标出改动点：从 1-N 设计稿, 给出修改点，防止遗漏</li><li>设计满足交互场景：设计需要体现，所有交互状态</li><li>历史清晰：研发需要对历史逻辑的样式提前了解，现在发生了哪些更改，才能准确评估出时间以及审查技术方案，UI 审查时间也更明了</li><li>成本考量需适宜：不合理的以及实现成本较高的，与各方向沟通技术方案，寻找其他设计方案替代，例如：不规则图形的应用，造成 选中、悬浮、禁用、锁定态只能图片进行替换</li><li>全排列场景：多种需求场景的设计，给出全排列展示, 而不是所有场景所有元素的集合，防止遗漏场景造成不全</li><li>切图：研发检查切图完整性，切图是否符合代码实现方式</li><li>压缩：设计出图需要进行最终压缩，防止对规范的不清晰</li><li>设计规范：若设计过程中制定的规范，需要形成设计文档，后期人员维护迭代时，需要给予提醒</li></ul><h2 id="技术评审" tabindex="-1">技术评审 <a class="header-anchor" href="#技术评审" aria-label="Permalink to &quot;技术评审&quot;">​</a></h2><p>技术文档提前准备，内部先一对一沟通对齐，再拉会。先思考再行动</p><ul><li>文档细致清晰易懂：文档需要完善，提前督促把控技术方案文档，技术文档不仅代表各方一起查看，同时也是一份修改的文档记录，方便后期维护人了解背景</li><li>接口字段提前敲定：定义完之后先于各个端进行沟通，沟通达成一致、确定后在写代码</li><li>统一改动规范：主 R 需要全局意识关注，涉及到跨团队都需要改的文档，统一各个方向修改点，提前梳理改动项并制定改动规范</li><li>把控细节：细节不足，实在考虑不到的细节点，及时拉会沟通</li><li>风险暴露：关注技术评审，其他方向的风险，有无可能带来的性能问题(列表、动效)，若有及时暴露寻找解决方案</li><li>逻辑实现：新项目中，历史字段和逻辑等干扰需要移除</li><li>开关：流程修改需要搭配开关、开关判断的方式，是新增一个字段判断，还是通过某一字段的值判断，不仅描述清晰，需要文档列出模拟数据</li></ul><h2 id="排期" tabindex="-1">排期 <a class="header-anchor" href="#排期" aria-label="Permalink to &quot;排期&quot;">​</a></h2><ul><li>交互稿：C 端需要交互稿产出后，才能输出准确排期</li><li>设计稿：对设计稿有依赖的C端，需要在设计稿产出之后在评估具体时间</li><li>分期排期：周期长的多项零碎需求，可分期排期，避免整体拉的过长</li><li>细化任务：排期过长输出时段任务明细</li><li>集体等待：一人造成大部队集体等待，及时向上反馈，协调人员</li><li>避免并行：风险提前暴露，避免研发时间挤压，避免测试时间并行，需加班提前几周告知，时间分配文档记录清晰，集中上线日期提前提醒</li><li>UI 走查很重要：对于体验类需求，UI 走查容易有所疏漏，时间提前预留并沟通时间，各方向提前预留时间，体验较重需求 UI 走查可放在提测前或提测中</li><li>时间节奏均匀：showcase 时间过短，时间整体需要更加均匀，避免前松后紧</li></ul><h2 id="开发过程" tabindex="-1">开发过程 <a class="header-anchor" href="#开发过程" aria-label="Permalink to &quot;开发过程&quot;">​</a></h2><p>盯紧过程，关注进度与风险，以及问题同步沟通</p><ul><li>进度同步风险沟通：统一早会同步消息(看情况 二四或者一五，看情况不用天天)、沟通问题、风险暴露，确保信息一致性</li><li>关注需求实现细节：防止需求实现有遗漏后无法补救</li><li>各个端文档统一：相同技术方案需要统一整理文档，并同步各个方向，防止多端冲突，提高沟通效率</li><li>多端方案：警惕多端方案发生的变更，避免各方向沟通同步不全</li><li>灰度方案：流程及核心功能变更需要有灰度方案</li><li>性能数据：对性能有影响的需求，需要产出性能数据，及时反馈数据结果</li><li>群公告：公共粘贴全所有项目信息，及时更新项目相关信息：联调环境、账号、课程、各端包资源</li></ul><h1 id="测试用例评审" tabindex="-1">测试用例评审 <a class="header-anchor" href="#测试用例评审" aria-label="Permalink to &quot;测试用例评审&quot;">​</a></h1><p>产品及研发需要评估 case 点，是否覆盖所有场景，是否与需求内容相符，全面细致</p><ul><li>历史遗留: 提前告知历史遗留问题，历史逻辑知识储备</li><li>需求变更: 需求后期变更时，产品容易忘记同步测试，case 评审时，需进行把控</li></ul><h2 id="联调环境" tabindex="-1">联调环境 <a class="header-anchor" href="#联调环境" aria-label="Permalink to &quot;联调环境&quot;">​</a></h2><ul><li>账号版本环境提前准备: 提前准备课程账号、整理文档并记录、更新在群公告、协调并提醒各个方向开始联调，提前预留时间并积极参与</li><li>关注其他方向功能完全: 统一组织集中联调功能，关注所有方向的功能实现情况</li><li>覆盖核心 case 点: 联调不仅仅只验证单一的新增功能点，将核心 case 点整体过一遍</li></ul><h2 id="设计审查" tabindex="-1">设计审查 <a class="header-anchor" href="#设计审查" aria-label="Permalink to &quot;设计审查&quot;">​</a></h2><ul><li>截图提效: 提前截图录屏提高设计审查的效率，减少沟通成本，节省时间</li><li>提醒时间: 由于开发周期问题，设计审查时间跨度较为漫长，审查前再次与设计强调时间，预留充分时间，防止人力占用推迟审查</li></ul><h2 id="showcase" tabindex="-1">showcase <a class="header-anchor" href="#showcase" aria-label="Permalink to &quot;showcase&quot;">​</a></h2><ul><li>环境账号备齐：研发来创建课程，测试及研发需要明确边界，提前准备环境，提前预演</li><li>推动流程无卡点：推动问题解决和定位，防止小问题阻碍整体进度</li><li>协调人力无阻塞：showcase 时长有限，阻塞问题，推动协调不同方向解决阻塞问题</li><li>历史遗留卡新需求进度：历史遗留问题造成的阻塞，及时推动单独排时间看，不影响当前整体 show 时间</li></ul><h2 id="qa-跟测" tabindex="-1">QA 跟测 <a class="header-anchor" href="#qa-跟测" aria-label="Permalink to &quot;QA 跟测&quot;">​</a></h2><ul><li>细心细节：历史遗留、异常极端场景均回归到</li><li>同步加班：测试需要提前预知自己是否需要加班，提前跟研发主 R 反馈，研发在知道情况下需要陪同，主 R 需要提前协调</li><li>问题分类：历史遗留不阻塞、兼容性问题确定机型、偶现问题确定复现路径</li><li>历史逻辑：测试需要熟知历史功能逻辑</li><li>问题优先级：对历史遗留的问题，不影响本次需求上线，干扰的后面给时间排，不影响本次需求测试</li></ul><h2 id="内灰" tabindex="-1">内灰 <a class="header-anchor" href="#内灰" aria-label="Permalink to &quot;内灰&quot;">​</a></h2><p>提前协调组内其他成员，参与内灰流程，关注内灰问题，确保内灰问题得到及时处理</p><ul><li>产品组织：产品发起操作，所有参与的QA需要配合，研发参与关注</li></ul><h2 id="上线" tabindex="-1">上线 <a class="header-anchor" href="#上线" aria-label="Permalink to &quot;上线&quot;">​</a></h2><p>检查集中上线单，提醒各位及时填写，紧盯各个方向不同模块全量状态结果，防止意外造成无法全量问题</p><h2 id="外灰" tabindex="-1">外灰 <a class="header-anchor" href="#外灰" aria-label="Permalink to &quot;外灰&quot;">​</a></h2><p>产品组织业务参与外灰，业务老师感知需求变动，做最后的验收</p><ul><li>灰度开关: 确保各个关键环节都有灰度开关，以便进行功能灰度测试，灰度开关判断条件，文档描述，数据结构描述清晰</li><li>灰度文档: 提前准备灰度发布方案和文档，确保外灰流程顺利进行</li><li>问题监控: 关注放量时间节奏，关注外灰期间的数据指标，及时调整策略以应对可能的问题</li></ul><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>有效的需求管理、详细的评审流程、清晰的开发进度、全面的测试覆盖、周密的上线准备是项目高效保质交付的关键。加强团队沟通、规范化流程、优化资源配置、提前规划和风险管理是未来改进的重点。</p>',50),h=[r];function o(u,s,n,d,c,p){return a(),i("div",null,h)}const _=l(t,[["render",o]]);export{b as __pageData,_ as default};
