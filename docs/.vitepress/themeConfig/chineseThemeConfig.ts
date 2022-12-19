export const getChineseThemeConfig = ()=> {
  return {
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: "最近更新时间",
    nav: [
      {
        text: "💻前端",
        items: [
          { text: '🟩 Vue', link: '/guide/web/vue/Vue.md' },
          { text: '🟦 TS', link: '/guide/web/ts/01.md' }
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
      },
      {
        text: "📒笔记",
        items: [
          { text: '🟩 Vue面试', link: '/guide/note/interview/vue/01.md' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      }
    ],
    sidebar: {
      "/guide/web/ts": [
        {
          text: "🟦 TS 介绍",
          items: [
            { text: "🟦 TS 安装", link: "/guide/web/ts/01.md" },
            { text: "🟦 TS 笔记", link: "/guide/web/ts/02.md" },
          ],
          collapsible: true,
        },
        {
          text: "🟦 TS 基础",
          items: [
            { text: "🟦 TS 基本类型", link: "/guide/web/ts/03.md" },
            { text: "🟦 TS 函數", link: "/guide/web/ts/04.md" },
            { text: "🟦 TS 斷言", link: "/guide/web/ts/05.md" },
          ],
          collapsible: true,
        },
      ],
      "/guide/web/vue": [
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

