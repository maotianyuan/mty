import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '风禾源泉',
  description: '光阴不再，境遇难得',
  base: '/mty/',
  head: [
    ['link', { rel: 'icon', href: '/mty/favicon.png' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-5TP0TZ39K5'
      }
    ],
  ],
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        collapsed: true,
        ignoreIndexItem: false,
        ignoreList: ['练习环境', '运行题', '算法', '手写'],
        // You can also set options to adjust sidebar data
        // see option document below
      })
    ]
  },
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo: '/favicon.png',
    // siteTitle: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端',
        items: [
          { text: '面试题', link: '/前端/面试题/题目' },
          { text: '跨端', link: '/前端/跨端/Electron' },
          { text: '框架', link: '/前端/框架' },
          { text: '优化', link: '/前端/优化/2C - 直播间' },
          { text: '经验', link: '/前端/经验/如何避免稳定性和体验升级成为一场不停歇的拉锯战' },
        ]
      },
      {
        text: '成长',
        items: [
          { text: '书籍', link: '/成长/书籍/人物传记/曾国藩家书' },
          { text: '规律', link: '/成长/规律/index' },
          { text: '反思', link: '/成长/反思/恒' },
          { text: '思维', link: '/成长/思维/独立思考' },
        ]
      },
      {
        text: '我的工具',
        items: [
          { text: 'Pocket - JS常用方法', link: 'https://maotianyuan.github.io/ailer/packages/pocket/doc/pocket.html' },
          { text: 'Tiny - Lottie 压缩', link: 'https://maotianyuan.github.io/ailer/packages/tiny/doc/' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '博客', link: 'https://www.yuque.com/mty/here' },
          { text: '掘金', link: 'https://juejin.cn/user/2576910988085624/posts' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/maotianyuan/mty/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maotianyuan/mty' }
    ],
    footer: {
      message: '在 MIT 许可下发布',
      copyright: '版权所有 © 2023-至今 MTY'
    },
  }
})
