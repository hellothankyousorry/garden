# Changelog — Living Garden

## 2026-11-26 — 排版归位与卡片类型标签重做

### 排版

- 新增 `--font-editorial` 字体栈（Playfair Display + Songti SC / Noto Serif CJK / SimSun 回退），中英文统一到编辑式衬线；
- 眉标（`.eyebrow`）由全大写宽字距无衬线改为衬线斜体，前缀一条微倾斜手绘短线；
- 各页导语段落改用 `.lede`（衬线、clamp 字号、1.9 行高），替换原灰色系统无衬线小字：首页、Notes、Projects、Résumé、Now、Tags、404。

### 卡片类型标签

- `KindBadge` 去掉 ✳/✦/❋ 字形图标，改为 6px 彩色圆点；
- `.kind-pill` 从彩色药丸改为「纸片标签」：近直角圆角、白纸底、极淡描边、柔和投影、-1.5° 微旋转（相邻卡片交替 +1.3°），英文大写 + 0.12em 字距，呼应参考拼贴的白色纸片；
- 亮色与暗色主题均验证可读。

### 其他

- Now 页示例提示条由蓝色 info 样式改为暖色纸片条（衬线斜体），与全局配色一致。

## 2026-11-26 — 视觉参考图落地与工程收尾

### 视觉

- 根据用户提供的「imagine your website as a garden」手绘拼贴参考图，新增 `GardenVerbs.astro`：黄绿/青绿竖向色带、荧光粉手写 `a garden`、9 个白色纸片 garden verbs 标签、SVG 植物根系与放射连接线、橙色气泡；
- 新增 `--chartreuse` / `--neon` 设计变量（浅色与深色各一套），抽象背景层增加第 4 个色块与更多连接线；
- 修正首屏 `hello, curious one` 与 `Your Name` 叠字，桌面与手机分别调整位置；
- DESIGN.md 增补「参考图转译」说明。

### 工程

- CI workflow 由 pnpm 统一为 npm（`npm ci`），Node 固定 22.23.4，超时放宽至 10 分钟；
- 移除遗留的 `pnpm-lock.yaml` / `pnpm-workspace.yaml`，package.json 声明 `packageManager: npm@10.9.7`、重命名为 `living-garden` 并同步锁文件；
- eslint 忽略 `dist_prev_*` 构建残留；全仓源码按 Prettier 规范格式化，`format:check` 通过；
- 本地验证：lint / format / astro check / build / Pagefind 全部通过，28 页构建成功。

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
