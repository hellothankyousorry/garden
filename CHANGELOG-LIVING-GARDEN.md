# Changelog — Living Garden

## 2026-11-25 — 整包改造 v1.0

### 选型

- 调研 AstroPaper、al-folio、Academic Pages、digitalgarden 等候选；
- 选定 **AstroPaper v7.2.1**（MIT，Astro + TypeScript + Content Collections + Pagefind）作为基础。

### 保留

- Content Collections 与 zod 内容校验；
- Markdown/MDX 渲染管道、Shiki 代码高亮、SEO/OG/RSS/robots 基础；
- Pagefind 静态搜索、可访问性与响应式基础；
- MIT 许可与上游版权声明。

### 新增 / 重构

- 全新设计系统：暖纸色/墨紫基底、六色强调体系、逐页强调色切换；
- 字体：自托管 Playfair Display、Allura、中文 Long Cang 子集（均为 OFL），正文使用系统无衬线字体；
- 抽象图形层：流动色块、知识节点曲线、轨道、项目渐变封面、首页关系图；
- 页面：Home、Notes、Note 详情、Projects、Project 详情、Resume、About、Now、Tags、Search、404；
- 内容模型：笔记新增 `seed/note/evergreen`、`related` 字段；新增 projects 集合；
- 知识花园能力：`[[wikilink]]` 内部链接、构建时反向链接、标签、相关内容推荐、Pagefind 搜索、类型筛选；
- 数学与代码：remark-math / rehype-katex、代码复制按钮、KaTeX 响应式滚动；
- 部署：项目仓库子路径 `/garden`、GitHub Actions 自动构建与 Pages 部署；
- 文档：README / DESIGN / CONTENT / ARCHITECTURE / DEPLOYMENT / CHANGELOG；
- 示例内容：清晰标记的占位个人资料与示例笔记/项目，未编造真实身份信息。

### 移除

- 上游博客示例文章、`/posts/` 与 `/archives/` 路由、动态 OG 端点；
- 依赖 Google Fonts 运行时的字体配置与上游社交/share 配置。

### 已知限制

- 未实现完整交互式知识图谱（按需求首版优先稳定性）；
- 中文手写字体为展示文案子集，新增展示标题后需重新生成子集；
- 个人资料与项目内容为占位示例，需用户替换后才适合作为正式个人站点。
