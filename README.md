# Prompt Freeport MVP

一个基于 OpenNana 图库结构做的免费提示词分享网站原型，聚合带真实图片或真实视频预览的 AI 提示词案例。

## 功能

- 图片案例与视频案例混排展示，质量审查后保留 1100+ 条真实媒体案例
- 搜索、媒体类型筛选、热门标签筛选
- 单条提示词一键复制，复制按钮保持单一入口
- 按来源语言显示单份提示词，完整内容只在弹窗中查看
- 图片/视频点击后使用同一成功加载媒体源等比放大，避免预览图和弹窗媒体不一致
- GitHub 免费资源索引
- 只显示有真实图片或真实视频封面的案例，不再使用无媒体模板或 SVG 假预览
- 投稿模板复制

## 使用

直接打开 `index.html` 即可，不依赖后端服务。

批量生成的数据在 `data/generated-cases.js`，来源审查摘要在 `data/license-audit.json`。如需重新抓取公开媒体案例，运行：

```bash
node scripts/generate-cases.mjs
```

## 部署

项目已包含 GitHub Pages workflow。推送到 GitHub `main` 分支后，在仓库 Settings -> Pages 中选择 GitHub Actions，后续 push 会自动部署静态站。

## 数据来源

- OpenNana Awesome Prompt Gallery
- OpenAI Sora 2 Prompting Guide
- OpenAI Output Copyright FAQ
- OpenAI Images 2.0
- peterRooo/awesome-gpt-image-2-prompts
- EvoLinkAI/awesome-gpt-image-2-prompts
- YouMind-OpenLab/awesome-seedance-2-prompts
- YouMind-OpenLab/awesome-grok-imagine-prompts
- Wikimedia Commons

真实图片/视频媒体来自公开社区页面、仓库和 Wikimedia Commons；正式商用前仍需按单条来源核查作者授权、平台条款、肖像、商标、音乐和第三方素材权利。
