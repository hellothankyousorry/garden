import { defineAstroPaperConfig } from "./src/types/config";
import { SITE_URL } from "./src/site.config";

/**
 * Configuration retained from the AstroPaper base. Personal-facing data lives
 * in src/data/profile.json and Markdown content collections.
 */
export default defineAstroPaperConfig({
  site: {
    url: SITE_URL,
    title: "A Living Garden",
    description: "林晚的个人数字花园：交互设计笔记、项目复盘与还没想清楚的问题。",
    author: "Lin Wan",
    profile: "https://github.com/hellothankyousorry",
    ogImage: "og.svg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    toc: true,
  },
  socials: [],
  shareLinks: [],
});
