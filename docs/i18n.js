const translations = {
  zh: {
    home: "首页",
    characters: "角色",
    glossary: "术语",
    search: "搜索...",
    relatedLinks: "相关链接",
    noContent: "暂无内容",
    tags: "标签",
    ootqLevel: "OOTQ 等级",
    origin: "作品来源",
    activation: "启动方式",
    author: "作者",
    summary: "摘要",
    description: "详情",
    title: "标题",
    viewAll: "查看全部 →",
    tierTop: "论外最上位",
    tierHigh: "论外上位",
    tierMid: "论外中位",
    tierLow: "论外下位",
    leadText: "所有已收录的角色列表",
    newEntry: "新建",
    edit: "编辑",
    download: "下载",
    downloadLink: "点击下载",

    charLead: "列表、预览、详情统一在此页面。数据实时来自 GitHub Issues。",
    tierFilter: "分级",
    tierAll: "全部",
    tierUnknown: "未标注",
    reload: "刷新",
    loading: "正在从 GitHub 拉取角色数据...",
    charList: "角色列表",
    noMatch: "没有匹配角色",
    resultCount: "共 {n} 条",
    errorLoad: "加载失败，请稍后重试。",

    homeLead: "角色内容已重构为 GitHub Issue CMS。列表、预览、详情统一在单页中。",
    charDB: "角色数据库",
    charDBDesc: "进入单页角色库，按 Issue 实时读取数据，支持搜索、预览、详情。",
    glossaryDesc: "当前术语条目数量：",
    backToList: "← 返回列表",
    viewOnGitHub: "在 GitHub 查看",
    comments: "评论",
    loadingComments: "正在加载评论...",
    noComments: "暂无评论，",
    commentsFailed: "评论加载失败",
    noDetailDesc: "暂无详细描述"
  },
  en: {
    home: "Home",
    characters: "Characters",
    glossary: "Glossary",
    search: "Search...",
    relatedLinks: "Related Links",
    noContent: "No content yet",
    tags: "Tags",
    ootqLevel: "OOTQ Level",
    origin: "Origin",
    activation: "Activation",
    author: "Author",
    summary: "Summary",
    description: "Details",
    title: "Title",
    viewAll: "View all →",
    tierTop: "Top",
    tierHigh: "High",
    tierMid: "Mid",
    tierLow: "Low",
    leadText: "All indexed characters",
    newEntry: "New",
    edit: "Edit",
    download: "Download",
    downloadLink: "Download",

    charLead: "List, preview, and details in one page. Data from GitHub Issues in real-time.",
    tierFilter: "Tier",
    tierAll: "All",
    tierUnknown: "Unknown",
    reload: "Refresh",
    loading: "Loading character data from GitHub...",
    charList: "Character List",
    noMatch: "No matching characters",
    resultCount: "{n} results",
    errorLoad: "Load failed, please try again later.",

    homeLead: "Content rebuilt as GitHub Issue CMS. List, preview, and details in a single page.",
    charDB: "Character Database",
    charDBDesc: "Enter the single-page character database with real-time data from Issues.",
    glossaryDesc: "Current glossary entries: ",
    backToList: "← Back to List",
    viewOnGitHub: "View on GitHub",
    comments: "Comments",
    loadingComments: "Loading comments...",
    noComments: "No comments yet, ",
    commentsFailed: "Failed to load comments",
    noDetailDesc: "No description yet"
  },
  ja: {
    home: "ホーム",
    characters: "キャラクター",
    glossary: "用語",
    search: "検索...",
    relatedLinks: "関連リンク",
    noContent: "コンテンツなし",
    tags: "タグ",
    ootqLevel: "OOTQ 等級",
    origin: "作品來源",
    activation: "起動方式",
    author: "作者",
    summary: "要約",
    description: "詳細",
    title: "タイトル",
    viewAll: "すべて表示 →",
    tierTop: "論外最上位",
    tierHigh: "論外上位",
    tierMid: "論外中位",
    tierLow: "論外下位",
    leadText: "すべての登録済みキャラクター",
    newEntry: "新規",
    edit: "編集",
    download: "ダウンロード",
    downloadLink: "ダウンロード",

    charLead: "リスト、プレビュー、詳細はこの1ページで。データはGitHub Issuesからリアルタイムに。",
    tierFilter: "等級",
    tierAll: "すべて",
    tierUnknown: "未分類",
    reload: "リフレッシュ",
    loading: "GitHubからキャラクターデータを読み込み中...",
    charList: "キャラクターリスト",
    noMatch: "該当するキャラクターがいません",
    resultCount: "全 {n} 件",
    errorLoad: "読み込みに失敗しました。後でもう一度お試しください。",

    homeLead: "GitHub Issue CMSに再構築されました。リスト、プレビュー、詳細が1ページに統合されました。",
    charDB: "キャラクターデータベース",
    charDBDesc: "シングルページキャラクターデータベースへ。Issuesからリアルタイムにデータを表示。",
    glossaryDesc: "現在の用語エントリー数：",
    backToList: "← リストに戻る",
    viewOnGitHub: "GitHubで見る",
    comments: "コメント",
    loadingComments: "コメントを読み込み中...",
    noComments: "まだコメントがありません。",
    commentsFailed: "コメントの読み込みに失敗しました",
    noDetailDesc: "詳細説明はまだありません"
  }
};

function getStoredTheme() {
  return localStorage.getItem("theme") || "light";
}

function getStoredLang() {
  return localStorage.getItem("lang") || "zh";
}

function __(key, lang) {
  const l = lang || getStoredLang();
  const t = translations[l] || translations.zh;
  return t[key] || key;
}
window.__ = __;

function getField(val, lang) {
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && val !== null) {
    return val[lang] || val.zh || '';
  }
  return '';
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

function applyLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  const t = translations[lang] || translations.zh;

  document.querySelectorAll("[data-lang]").forEach(el => {
    try {
      const langData = JSON.parse(el.dataset.lang);
      el.textContent = getField(langData, lang);
    } catch (e) {}
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (el.tagName === 'INPUT') return;
    const key = el.getAttribute("data-i18n");
    if (!['title', 'summary', 'description', 'ootqLevel'].includes(key) && t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });

  if (window.__meta) {
    const meta = window.__meta;
    const fields = ['title', 'summary', 'description', 'ootqLevel'];
    for (const field of fields) {
      if (meta[field]) {
        const els = document.querySelectorAll(`[data-i18n="${field}"]`);
        const val = getField(meta[field], lang);
        els.forEach(el => {
          if (field === 'description') {
            el.innerHTML = val;
          } else {
            el.textContent = val;
          }
        });
      }
    }
  }

  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = lang;
}

function toggleTheme() {
  const current = getStoredTheme();
  applyTheme(current === "dark" ? "light" : "dark");
}

function init() {
  applyTheme(getStoredTheme());

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", e => applyLang(e.target.value));
  }

  applyLang(getStoredLang());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
