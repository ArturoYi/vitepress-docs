export const getChineseThemeConfig = () => {
  return {
    docFooter: { prev: "上一篇", next: "下一篇" },
    lastUpdatedText: "最近更新时间",
    nav: [
      {
        text: "💻前",
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
        text: "🖥️后",
        items: [
          { text: "l-i-n-u-x", link: "/guide/backend/linux/01.md" },
          { text: "k-o-t-l-i-n", link: "/guide/backend/kotlin/01.md" },
        ],
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
      {
        text: "📒笔记",
        items: [
          { text: "g-i-t", link: "/guide/backend/git/01.md" },
          // {
          //   text: "🤔FlutterApp工程化",
          //   link: "/guide/project/flutter/app/01.md",
          // },
          // {
          //   text: "🟦 Flutter 开发记录",
          //   link: "/guide/other/flutter_app.md",
          // },
        ],
      },
      {
        text: "🧑日常",
        items: [
          { text: "📒 日常记录", link: "/guide/life/story/01.md" },
          { text: "📒 面試", link: "/guide/note/interview/vue/01.md" },
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
          text: "🟩 Vue3 介绍",
          items: [
            { text: "🟩 Vue3", link: "/guide/web/vue/01.md" },
            { text: "🟩 关于diff", link: "/guide/web/vue/diff.md" },
          ],
        },
        {
          text: "🟩 Vue3 全局API",
          items: [
            { text: "🟩 应用实例", link: "/guide/web/vue/02.md" },
            { text: "🟩 通用", link: "/guide/web/vue/03.md" },
            { text: "🟩 響應核心", link: "/guide/web/vue/04.md" },
          ],
        },
      ],
      //
      // "/guide/other/": [
      //   {
      //     text: "🟦 Flutter开发问题记录",
      //     items: [
      //       {
      //         text: "🟦 Flutter ios问题记录",
      //         link: "/guide/other/flutter_app.md",
      //       },
      //       {
      //         text: "🟦 Flutter Canvas学习",
      //         link: "/guide/other/flutter_canvas.md",
      //       },
      //     ],
      //   },
      // ],
      //
      "/guide/web/dart": [
        {
          text: "🟦 Datr概览",
          items: [
            { text: "🟦 关于Dart", link: "/guide/web/dart/01.md" },
            { text: "🟦 Dart代码风格", link: "/guide/web/dart/02.md" },
            { text: "🟦 基础语法", link: "/guide/web/dart/03.md" },
          ],
          // collapsible: true,
        },
      ],
      "/guide/web/js": [
        {
          text: "🟨 JS指南",
          items: [
            { text: "🟨 关于JS", link: "/guide/web/js/01.md" },
            { text: "🟨 基本语法和数据类型介绍", link: "/guide/web/js/02.md" },
            { text: "🟨 流程控制与循环迭代", link: "/guide/web/js/03.md" },
            { text: "🟨 表达式与运算符", link: "/guide/web/js/05.md" },
            { text: "🟨 函數对象", link: "/guide/web/js/04.md" },
            { text: "🟨 数字对象", link: "/guide/web/js/06.md" },
          ],
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
      "/guide/life/story": [
        {
          text: "🎵 歌曲傳記",
          items: [{ text: "🎵 《陀飛輪》", link: "/guide/life/story/01.md" }],
        },
        {
          text: "📓 故事集",
          items: [{ text: "📓 《故事会》", link: "/guide/life/story/02.md" }],
        },
        {
          text: "📓 我的工作记录",
          items: [{ text: "📓 工作历程", link: "/guide/life/story/03.md" }],
        },
      ],
      "/guide/backend/kotlin": [
        {
          text: "🟪 kotlin概述",
          items: [
            { text: "🟪 kotlin基本", link: "/guide/backend/kotlin/01.md" },
            { text: "🟪 基本语法", link: "/guide/backend/kotlin/02.md" },
          ],
        },
        {
          text: "🟪 kotlin语法",
          items: [
            { text: "🟪 基本类型", link: "/guide/backend/kotlin/03.md" },
            { text: "🟪 控制流程", link: "/guide/backend/kotlin/04.md" },
            { text: "🟪 函数", link: "/guide/backend/kotlin/05.md" },
          ],
        },
      ],

      "/guide/project/flutter": [
        {
          text: "🟦 FlutterApp",
          items: [
            { text: "🟦 项目创建", link: "/guide/project/flutter/app/01.md" },
          ],
        },
        {
          text: "🟦 Widget",
          items: [
            {
              text: "🟦 上拉刷新和下拉加载",
              link: "/guide/project/flutter/widget/01.md",
            },
          ],
        },
      ],

      // 混合配置
      "/guide/note/interview/vue/": [
        {
          text: "🟩 Vue面試",
          items: [{ text: "🟩 Vue", link: "/guide/note/interview/vue/01.md" }],
        },
        {
          text: "🟦 Dart面試",
          items: [
            { text: "🟦 Dart", link: "/guide/note/interview/dart/01.md" },
          ],
        },
      ],
      "/guide/note/interview/dart/": [
        {
          text: "🟩 Vue面試",
          items: [{ text: "🟩 Vue", link: "/guide/note/interview/vue/01.md" }],
        },
        {
          text: "🟦 Dart面試",
          items: [
            { text: "🟦 Dart", link: "/guide/note/interview/dart/01.md" },
          ],
        },
      ],
    },
  };
};
