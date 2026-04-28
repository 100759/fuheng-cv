# fuheng-cv

付恒个人简历网站，基于 Astro 构建，静态导出并部署至 Cloudflare Pages。

## 概述

本项目为一款个人简历展示站，包含首页、工作经历、教育背景、项目、技能、联系等页面。数据集中管理，便于快速更新内容。

## 功能

- 响应式页面，适配桌面与移动端
- 顶部导航栏支持页面间跳转
- 数据驱动：个人信息、经历、项目、技能均从 `src/data/` 模块读取
- 自动生成站点地图（Sitemap）
- 404 页面

## 技术栈

| 类别       | 技术               |
| ---------- | ------------------ |
| 框架       | Astro 6            |
| 样式       | CSS（`global.css`） |
| 字体       | Inter Variable（Google Fonts） |
| 静态资源   | SVG（favicon / OG） |
| 构建产物   | 纯静态 HTML/CSS/JS |

## 设置

1. **克隆仓库**
   ```bash
   git clone https://github.com/100759/fuheng-cv.git
   cd fuheng-cv
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```
   默认访问 `http://localhost:4321`。

## 环境变量

本项目无需环境变量。站点 URL 等配置已在 `src/data/site.ts` 中硬编码，如需修改请直接编辑该文件。

## 脚本

| 命令              | 说明                               |
| ----------------- | ---------------------------------- |
| `npm run dev`     | 启动开发服务器（热更新）            |
| `npm run build`   | 构建生产版本，输出至 `dist/`        |
| `npm run preview` | 本地预览 `dist/` 构建结果           |
| `npm run check`   | 完整性检查：`astro sync && astro build` |

## 部署

推荐部署到 Cloudflare Pages。

### 手动部署（当前流程）

```bash
npm run build
npx wrangler pages deploy dist --project-name fuheng-cv-site --branch main
```

### DNS 配置

- 生产域名：`cv.fuheng.vip`（CNAME → `fuheng-cv-site.pages.dev`）
- 保持 Cloudflare proxy 开启（橙色云朵）

## 项目结构

```text
fuheng-cv/
├── public/                   # 静态资源（favicon, robots.txt 等）
├── src/
│   ├── components/           # Astro 组件（如 Header.astro）
│   ├── data/                 # 内容数据（profile.ts, site.ts）
│   ├── layouts/              # 页面布局（Layout.astro）
│   ├── pages/                # 路由页面（index, experience, skills 等）
│   └── styles/               # 全局样式（global.css）
├── astro.config.mjs          # Astro 配置
├── tsconfig.json
└── package.json
```

## 维护说明

- **个人信息、工作经历、项目、技能**：修改 `src/data/profile.ts`。
- **导航栏条目、首页章节入口**：修改 `src/data/site.ts`。
- **布局与样式**：编辑 `src/layouts/Layout.astro` 和 `src/styles/global.css`。
- **导航组件**：编辑 `src/components/Header.astro`。
- 修改后运行 `npm run build` 验证无误再部署。