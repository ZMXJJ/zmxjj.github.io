import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // "/demo/",
  {
    text: "Posts",
    icon: "book",
    prefix: "/posts/",
    children: [
      // {
      //   text: "Apple",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "Apple1", icon: "pen-to-square", link: "1" },
      //     { text: "Apple2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
      // {
      //   text: "Banana",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "Banana 1",
      //       icon: "pen-to-square",
      //       link: "1",
      //     },
      //     {
      //       text: "Banana 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
      // { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Event 2024-04", icon: "pen-to-square", link: "event240411" },
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
