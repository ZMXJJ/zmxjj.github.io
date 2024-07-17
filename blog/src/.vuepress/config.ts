import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "EnjoyCloud Blog",
      description: "A blog from EnjoyCloud Teams",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "享云智联云科技",
      description: "享云智联博客页",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  //import fonts
  head: [

    // 导入字体
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Regular.min.css",
        rel: "stylesheet",
        crossorigin: "anonymous",
      },
    ],
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css",
        rel: "stylesheet",
        crossorigin: "anonymous",
      },
    ],
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Bold.min.css",
        rel: "stylesheet",
        crossorigin: "anonymous",
      },
    ],
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css",
        rel: "stylesheet",
        crossorigin: "anonymous",
      },
    ],
  ],
});
