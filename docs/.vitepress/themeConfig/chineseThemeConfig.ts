export const getChineseThemeConfig = ()=> {
  return {
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: "最近更新时间",
    nav: [
      {
        text: "💻前端",
        items: [
          { text: '🟩 Vue', link: '/guide/web/vue/Vue.md' }
        ]
      },
      {
        text: "🖥️后端",
        items: [
          { text: 'options-1', link: '/' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      },
      {
        text: "💿数据库",
        items: [
          { text: 'options-1', link: '/' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      },
      {
        text: "🧑‍💻运维",
        items: [
          { text: 'options-1', link: '/' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "🟩 Vue",
          items: [
            { text: "🟩 Vue介绍", link: "/guide/web/vue/Vue.md" },
          ],
          collapsible: true,
        },
        {
          text: "🟩 Vue",
          items: [
            { text: "🟩 Vue介绍", link: "/guide/web/vue/Vue.md" },
          ],
          collapsible: true,
        },
      ],
    },
    // ... ...
  };
}

