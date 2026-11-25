# Deployment — GitHub Pages

目标仓库：`hellothankyousorry/garden`  
线上地址：<https://hellothankyousorry.github.io/garden/>

## 仓库结构

这是一个**项目仓库**，因此站点地址包含 `/garden` 子路径。所有站内链接、静态资源和搜索索引路径都通过 `src/site.config.ts` 的 `BASE_PATH` 与 Astro 的 `base` 配置生成，不能硬编码根路径。

关键配置：

- `astro.config.ts`：`site = SITE_URL`，`base = "/garden"`，`trailingSlash: "always"`
- `src/site.config.ts`：`REPO_NAME = "garden"`
- `.github/workflows/deploy.yml`：构建并部署 `dist/`

## 一次性仓库设置

1. 打开 <https://github.com/hellothankyousorry/garden/settings/pages>
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 确认 Actions 具有Pages 权限：Settings → Actions → General → Workflow permissions 选择 **Read and write permissions**
4. 推送 `main` 分支后，workflow 会自动运行；完成后 Pages 会给出部署 URL。

> 如果仓库是私有仓库，需要 GitHub Pro/Team 或更高套餐才能使用 Pages。仓库公开时无此限制。

## 自动部署流程

每次推送到 `main`：

1. `actions/checkout@v4`
2. `actions/setup-node@v4`（Node 22.23.4，npm 缓存）
3. `npm ci`
4. `npm run build`
   - `astro check`
   - `astro build`
   - `pagefind --site dist`
   - `node copy-pagefind.mjs`
5. `actions/upload-pages-artifact@v3` 上传 `dist`
6. `actions/deploy-pages@v4` 发布

## 本地验证

```bash
npm ci
npm run build
npm run preview
```

打开 `http://localhost:4321/garden/`。如果本地 Node 低于 22.23.4：

```bash
npx node@22.23.4 node_modules/astro/bin/astro.mjs build
npx node@22.23.4 node_modules/pagefind/lib/runner/bin.cjs --site dist
npx node@22.23.4 copy-pagefind.mjs
```

## 路径问题排查

| 现象 | 原因 | 处理 |
|---|---|---|
| 首页正常、CSS/JS 404 | `base` 与实际仓库名不一致 | 检查 `src/site.config.ts` 的 `REPO_NAME` 与 `astro.config.ts` 的 `base` |
| 子页面刷新 404 | 未生成 `index.html` 或路径缺少尾斜杠 | 保持 `trailingSlash: "always"`，确认构建路由 |
| 搜索无结果 | Pagefind 索引未生成 | 运行完整 `npm run build`，确认 `dist/pagefind/` 存在 |
| 站内链接跳到根域名 | Markdown 中硬编码 `/notes/...` | 使用 `[[slug]]` 或 `getAssetPath` / `noteUrl` |
| Actions 报 403 | Pages 权限不足 | Settings → Actions → General → Read and write permissions |

## 安全

仓库中不包含 API Key、密码或私人令牌。部署使用 GitHub 内置 `GITHUB_TOKEN` 与 OIDC（`id-token: write`），无需额外 secret。个人联系方式目前是占位符，上线前请替换 `src/data/profile.json`。

## 重新部署 / 回滚

- 重新部署：Actions 页面选择最新 workflow → **Re-run all jobs**
- 回滚：在 Git 中回退到目标 commit 并推送到 `main`，workflow 会重新构建
- 取消发布：仓库 Settings → Pages → Source 改为 None（不会删除代码）
