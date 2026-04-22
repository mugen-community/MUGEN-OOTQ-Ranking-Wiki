# MUGEN OOTQ Ranking Wiki

`MUGEN` 现代论外分级对外展示网站。

## 内容结构

```
content/
  characters/<slug>/
    meta.json       # 角色信息
    assets/         # 角色图片
  glossary/<slug>/
    meta.json       # 术语信息
```

## meta.json 格式

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

输出到 `docs/`，设置 GitHub Pages 源为 `docs/` 即可部署。

## 添加内容

- 角色：新建 `content/characters/<slug>/meta.json`
- 术语：新建 `content/glossary/<slug>/meta.json`
- 重建：`npm run build`
