const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'docs');

function rel(p, depth) {
  return depth > 0 ? '../'.repeat(depth) + p : p;
}

async function build() {
  await fs.ensureDir(DIST);
  await fs.remove(path.join(DIST, 'characters'));
  await fs.remove(path.join(DIST, 'glossary'));
  await fs.remove(path.join(DIST, 'discussion'));
  await fs.remove(path.join(DIST, 'index.html'));
  await fs.remove(path.join(DIST, 'edit.html'));
  await fs.remove(path.join(DIST, 'styles.css'));
  await fs.remove(path.join(DIST, 'i18n.js'));

  const layoutTemplate = await fs.readFile(path.join(SRC, 'templates', 'layout.ejs'), 'utf8');
  const charListTemplate = await fs.readFile(path.join(SRC, 'templates', 'character-list.ejs'), 'utf8');
  const discListTemplate = await fs.readFile(path.join(SRC, 'templates', 'discussion-list.ejs'), 'utf8');
  const indexTemplate = await fs.readFile(path.join(SRC, 'templates', 'index.ejs'), 'utf8');



  await fs.copy(path.join(SRC, 'styles', 'main.css'), path.join(DIST, 'styles.css'));
  await fs.copy(path.join(SRC, 'styles', 'github-markdown.css'), path.join(DIST, 'github-markdown.css'));
  await fs.copy(path.join(SRC, 'assets', 'github.svg'), path.join(DIST, 'github.svg'));
  await fs.copy(path.join(SRC, 'scripts', 'i18n.js'), path.join(DIST, 'i18n.js'));

  const uiData = await fs.readJson(path.join(SRC, 'i18n', 'ui.json'));
  const langData = await fs.readJson(path.join(SRC, 'i18n', 'langs.json'));
  const langNames = langData;
  const uiLangs = Object.keys(langData);
  await fs.writeFile(path.join(DIST, 'i18n-data.js'),
    'window.__UI = ' + JSON.stringify(uiData) + ';\n' +
    'window.__LANGS = ' + JSON.stringify(uiLangs) + ';\n' +
    'window.__LANG_NAMES = ' + JSON.stringify(langData) + ';');

  await fs.ensureDir(path.join(DIST, 'characters'));
  await fs.ensureDir(path.join(DIST, 'discussion'));

  const tagSystem = await fs.readJson(path.join(SRC, 'i18n', 'tag-system.json'));
  const charListContent = ejs.render(charListTemplate, { r: (p) => rel(p, 1), tagSystem });
  const charListHtml = ejs.render(layoutTemplate, {
    title: 'Characters',
    content: charListContent,
    r: (p) => rel(p, 1),
    lang: uiLangs[0]
  });
  await fs.writeFile(path.join(DIST, 'characters', 'index.html'), charListHtml);

  const discListContent = ejs.render(discListTemplate);
  const discListHtml = ejs.render(layoutTemplate, {
    title: 'Discussion',
    content: discListContent,
    r: (p) => rel(p, 1),
    lang: 'zh'
  });
  await fs.writeFile(path.join(DIST, 'discussion', 'index.html'), discListHtml);

  const indexContent = ejs.render(indexTemplate, { r: (p) => rel(p, 0) });
  const indexHtml = ejs.render(layoutTemplate, {
    title: 'MUGEN OOTQ Ranking Wiki',
    content: indexContent,
    r: (p) => rel(p, 0),
    lang: 'zh'
  });
  await fs.writeFile(path.join(DIST, 'index.html'), indexHtml);




  console.log('Build complete! Output in docs/');
}

build().catch(console.error);
