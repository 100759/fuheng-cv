# fuheng-cv

付恒个人简历站，基于 Astro 静态构建，部署到 Cloudflare Pages。

## 常用命令

```bash
npm run dev
npm run build
npm run check
npm run preview
```

## 线上信息

- GitHub: https://github.com/100759/fuheng-cv
- Cloudflare Pages project: `fuheng-cv-site`
- Production domain: https://cv.fuheng.vip
- Pages preview domain: `https://<deployment-id>.fuheng-cv-site.pages.dev`

## 部署

构建并部署当前 `dist`：

```bash
npm run build
$env:WRANGLER_SEND_METRICS='false'
npx --yes wrangler@latest pages deploy dist --project-name fuheng-cv-site --branch main
```

DNS 推荐状态：`cv.fuheng.vip` 使用 CNAME 指向 `fuheng-cv-site.pages.dev`，并保持 Cloudflare proxied。

## 内容维护

- 个人信息、经历、项目、技能：`src/data/profile.ts`
- 导航与首页章节入口：`src/data/site.ts`
- 页面公共布局：`src/layouts/Layout.astro`
- 顶部导航和移动菜单：`src/components/Header.astro`
