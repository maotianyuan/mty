import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '风禾源泉',
  description: '光阴不再，境遇难得',
  base: '/mty/',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        collapsed: true,
        ignoreIndexItem: false,
        ignoreList: ['练习环境','运行题', '算法', '手写'],
        // You can also set options to adjust sidebar data
        // see option document below
      })
    ]
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/favicon.png',
    // siteTitle: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/前端/面试题/题目' }
    ],
    editLink: {
      pattern: 'https://github.com/maotianyuan/mty/blob/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maotianyuan/mty'  }
    ],
    footer: {
      message: '在 MIT 许可下发布',
      copyright: '版权所有 © 2023-至今 MTY'
    },
  }
})
