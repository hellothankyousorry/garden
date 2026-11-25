# Architecture

## 基础项目

基础：AstroPaper v7.2.1（MIT，satnaing/astro-paper）。选择理由：活跃维护、Astro + TypeScript、Content Collections 类型校验、Pagefind、SEO/OG/RSS 基础、可访问性和响应式基础成熟，且视觉层可彻底替换。

## 目录

```
site/
├─ astro.config.ts            # 站点、base、Markdown 插件、集成
├─ astro-paper.config.ts      # 继承上游的站点配置
├─ src/
│  ├─ site.config.ts          # base / URL / 内容类型元数据
│  ├─ content.config.ts       # posts(notes) / projects / pages 集合与 zod schema
│  ├─ data/                   # profile / resume / now JSON
│  ├─ content/
│  │  ├─ notes/               # Markdown 笔记
│  │  ├─ projects/            # Markdown 项目
│  │  └─ pages/about.md
│  ├─ components/             # Header/Footer/AmbientShapes/NoteCard/ProjectCard/KindBadge
│  ├─ layouts/                # Layout / PostLayout（继承 SEO 与 head slot）
│  ├─ pages/                  # 首页、notes、projects、resume、about、now、tags、search、404、RSS
│  ├─ styles/                 # theme.css / global.css / typography.css
│  └─ utils/
│     ├─ knowledge.ts         # 内容查询、反向链接、相关内容
│     ├─ remarkWikilinks.ts   # [[slug]] 内部链接转换
│     └─ withBase.ts          # GitHub Pages 子路径处理
├─ public/fonts/              # 自托管 OFL 字体与子集脚本产物
├─ licenses/fonts/            # OFL 许可文本
└─ .github/workflows/deploy.yml
```

## 数据流

1. Markdown/JSON → Astro Content Collections（zod 校验）；
2. `remarkMath` + `remarkWikilinks` → mdast；`rehypeKatex` + 上游 rehype 插件 → HTML；
3. `knowledge.ts` 在构建时生成反向链接与相关内容；
4. Astro 静态生成到 `dist/`；
5. Pagefind 扫描 `dist/` 生成静态搜索索引；
6. `copy-pagefind.mjs` 把运行时所需资源复制到可访问路径；
7. GitHub Actions 上传 `dist/` 并部署 Pages。

## 保留 / 重构

**保留**：Content Collections 与 zod 校验、Markdown/MDX 管道、Shiki 代码高亮、Pagefind、RSS/robots/sitemap、Layout 的 head slot 与 SEO 元信息、可访问性基础。

**重构**：全部页面与组件、设计令牌、字体加载、抽象图形、内容模型（note kinds/related/projects）、知识关联、导航、搜索与标签页视觉、部署配置。

**移除**：上游博客示例内容、`posts/` 与 `archives/` 路由、动态 OG 端点、依赖 Google Fonts 的字体配置、上游社交/share 配置。

## 关键设计决策

- 使用项目仓库子路径 `/garden`，所有链接通过 `import.meta.env.BASE_URL` 与 `noteUrl/projectUrl` 生成，避免硬编码。
- 中文手写字体采用构建前子集化，正文仍用清晰无衬线字体，兼顾表现力与可读性。
- 不实现完整知识图谱：先用内部链接、反向链接、标签和相关内容建立可扩展关系机制，保证首版稳定。
- 个人信息使用 JSON/Markdown 占位符，发布前可逐项替换，不污染组件代码。
