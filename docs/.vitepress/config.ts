import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '风禾源泉',
  description: '风禾源泉',
  base: '/FHYQ/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/blue.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/maotianyuan/fhyq/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maotianyuan/fhyq'  }
    ],
    footer: {
      message: '在 MIT 许可下发布。',
      copyright: '版权所有 © 2023-至今 AKUN'
    },
  }
})
