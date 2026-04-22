# MUGEN OOTQ Ranking Wiki

这是一个面向公开展示的 `MUGEN` 现代论外分级网站。

## 内容结构

```
content/
  characters/<slug>/
    meta.json       # 角色信息
    assets/         # 角色图片
  glossary/<slug>/
    meta.json       # 术语信息
```

## meta.json 示例

```json
{
  "title": "角色名称",
  "summary": "简短描述",
  "tags": ["论外", "高阶"],
  "description": "<p>支持HTML</p>",
  "links": [{ "name": "下载", "url": "https://..." }]
}
```

## 构建

```bash
npm install
npm run build
```

输出到 `dist/`，可直接部署到 GitHub Pages。

## 添加新内容

- 新增角色：`content/characters/<slug>/meta.json`
- 新增术语：`content/glossary/<slug>/meta.json`
- 重新构建：`npm run build`
