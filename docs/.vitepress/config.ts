import { defineConfig } from "vitepress";
import { getEnglishThemeConfig } from "./themeConfig/englishThemeConfig";
import { getChineseThemeConfig } from "./themeConfig/chineseThemeConfig";
/**
 * 注意：默认导出必须是 defineConfig 的类型对象
 * 这里不采用是因为需要额外配置一套多语言的配置
 * 但在每一套语言配置中都严格符合defineConfig接口
 */
export default {
  // title: 'VitePress-Fun',
  locales: {
    "/": {
      lang: "zh-CN",
      title: "自定义的title",
      description: "自定义的description",
    },
    "/en/": {
      lang: "en-US",
      title: "Custom title",
      description: "Custom description",
    },
  },
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // 左上角
    logo: "/logo-with-shadow.png",
    siteTitle: "『 彩虹鸭 』",
    outlineTitle: '⚫🔴🟠🟡🟢🔵🟣🟤⚪',
    outline:[2,6],
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/gumingWu/vitepress-fun" },
    ],
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    localeLinks: {
      text: "",
      items: [
        { text: "简体中文", link: '/' },
        { text: "English", link: '/en/' },
      ],
    },
    locales: {
      "/": getChineseThemeConfig(),
      "/en/": getEnglishThemeConfig(),
    },
  },
};
