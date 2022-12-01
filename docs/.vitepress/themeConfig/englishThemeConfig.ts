export const getEnglishThemeConfig = ()=> {
  return {
    docFooter: { prev: 'Previous', next: 'Next' },
    lastUpdatedText: "Last Updated Time",
    nav: [
      {
        text: "Guide",
        link: "/en/guide/what-is-vitepress",
        activeMatch: "/en/guide/",
      },
    ],
    sidebar: {
      "/en/guide/": [
        {
          text: "Description",
          items: [
            { text: "What is VitePress", link: "/en/guide/what-is-vitepress" },
          ],
          collapsible: true,
        },
      ],
    },
    // ... ...
  };
}

