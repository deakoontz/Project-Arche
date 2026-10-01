import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Project Arche",
  description: "Project Arche 官方设定集与世界观资料库",
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
