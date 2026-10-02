import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Project Arche",
  description: "Project Arche 官方设定集与资料库",
  themeConfig: {
    // 添加这一段配置右侧大纲
  outline: {
    level: [1, 3],       // 抓取 h1 到 h3 标题
    label: '导航栏'     // 右侧导航栏的中文标题
  },
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
