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
});
