import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Project Arche",
  description: "Project Arche 官方设定集与资料库",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '世界观', link: '/world' },
      { text: '角色档案', link: '/characters' }
    ],
    sidebar: [
      {
        text: '📖 世界观',
        items: [
          { text: '背景设定', link: '/world' },
          { 
            text: '🏛️ 势力', 
            link: '/world#势力',
            items: [
              { text: '捕梦者', link: '/world#捕梦者' },
              { text: '代达罗斯工业', link: '/world#代达罗斯工业' },
              { text: '教团', link: '/world#教团' }
            ]
          }
        ]
      },
      {
        text: '👥 角色列表',
        items: [
          { text: '角色档案', link: '/characters' },
        ]
      }
    ]
  }
})
