export const getChineseThemeConfig = () => {
  return {
    docFooter: { prev: "上一篇", next: "下一篇" },
    lastUpdatedText: "最近更新时间",
    nav: [
      {
        text: "💻前端",
        items: [
          { text: "v-u-e", link: "/guide/web/vue/01.md" },
          { text: "t-s", link: "/guide/web/ts/01.md" },
          { text: "d-a-r-t", link: "/guide/web/dart/01.md" },
          { text: "f-l-u-t-t-e-r", link: "/guide/web/flutter/01.md" },
          { text: "h-t-m-l", link: "/guide/web/html/01.md" },
          { text: "c-s-s", link: "/guide/web/css/01.md" },
          { text: "j-a-v-a-s-c-r-i-p-t", link: "/guide/web/js/01.md" },
          { text: "w-e-b-p-a-c-k", link: "/guide/web/webpack/01.md" },
        ],
      },
      {
        text: "🖥️后端",
        items: [{ text: "組件庫", link: "/guide/project/iuui/01.md" }],
      },
      // {
      //   text: "🖥️后端",
      //   items: [
      //     // { text: "options-1", link: "/" },
      //     // { text: "options-2", link: "http://www.baidu.com" },
      //   ],
      // },
      // {
      //   text: "💿数据库",
      //   items: [
      //     // { text: "options-1", link: "/" },
      //     // { text: "options-2", link: "http://www.baidu.com" },
      //   ],
      // },
      // {
      //   text: "🧑‍💻运维",
      //   items: [
      //     // { text: "options-1", link: "/" },
      //     // { text: "options-2", link: "http://www.baidu.com" },
      //   ],
      // },
      {
        text: "📒笔记",
        items: [
          { text: "g-i-t", link: "/guide/note/git/01.md" },
          { text: "l-i-n-u-x", link: "/guide/note/linux/01.md" },
          { text: "🟦 iuui", link: "/guide/note/iuui/01.md" },
        ],
      },
    ],
    sidebar: {
      "/guide/web/ts": [
        {
          text: "🟦 TS 介绍",
          items: [
            { text: "🟦 TS 安装", link: "/guide/web/ts/01.md" },
            { text: "🟦 TS 笔记", link: "/guide/web/ts/02.md" },
          ],
          // collapsible: true,
        },
        {
          text: "🟦 TS 基础",
          items: [
            { text: "🟦 TS 基本类型", link: "/guide/web/ts/03.md" },
            { text: "🟦 TS 函數", link: "/guide/web/ts/04.md" },
            { text: "🟦 TS 斷言", link: "/guide/web/ts/05.md" },
          ],
          // collapsible: true,
        },
      ],
      "/guide/web/vue": [
        {
          text: "🟩 Vue2",
          items: [{ text: "🟩 Vue2開篇介绍", link: "/guide/web/vue/01.md" }],
        },
        {
          text: "🟩 Vue2 源碼",
          items: [{ text: "🟩 Vue構造函數", link: "/guide/web/vue/02.md" }],
        },
      ],
      //
      "/guide/web/dart": [
        {
          text: "🟦 Datr概览",
          items: [
            { text: "🟦 关于Dart", link: "/guide/web/dart/01.md" },
            { text: "🟦 Dart代码风格", link: "/guide/web/dart/02.md" },
            { text: "🟦 Dart基本语法", link: "/guide/web/dart/03.md" }],
          // collapsible: true,
        },
      ],
      "/guide/web/flutter": [
        {
          text: "🟦 Flutter起步",
          items: [
            { text: "🟦 移动开发技术", link: "/guide/web/flutter/01.md" },
          ],
        },
        {
          text: "🟦 Flutter应用",
          items: [
            { text: "🟦 计数器应用示例", link: "/guide/web/flutter/05.md" },
            { text: "🟦 Widget", link: "/guide/web/flutter/06.md" },
          ],
        },
      ],
      "/guide/web/html": [
        {
          text: "🟧 html基础",
          items: [{ text: "🟧 HTML概述", link: "/guide/web/html/01.md" }],
        },
      ],
      "/guide/web/css": [
        {
          text: "🟦 CSS基础",
          items: [{ text: "🟦 CSS概述", link: "/guide/web/css/01.md" }],
        },
      ],
      "/guide/web/webpack": [
        {
          text: "🟦 webpack",
          items: [{ text: "🟦 快速入門", link: "/guide/web/webpack/01.md" }],
        },
      ],
      "/guide/note/iuui": [
        {
          text: "🟦 啰嗦一下",
          items: [
            { text: "🟦 思考", link: "/guide/note/iuui/01.md" },
            { text: "🟦 package.json", link: "/guide/note/iuui/02.md" },
          ],
        },
      ],
    },
  };
};
