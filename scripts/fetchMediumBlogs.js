const fs = require('fs');
const Parser = require('rss-parser');
const TurndownService = require('turndown');

const parser = new Parser();

// 🔥 Markdown converter
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

// ✅ Convert <pre><code> → fenced code blocks
turndownService.addRule('pre', {
  filter: ['pre'],
  replacement: function (content) {
    return `\n\`\`\`\n${content}\n\`\`\`\n`;
  },
});

// ✅ Keep images
turndownService.addRule('image', {
  filter: 'img',
  replacement: function (content, node) {
    const src = node.getAttribute('src');
    return src ? `![image](${src})` : '';
  },
});

// 🔥 Clean HTML before conversion
function cleanHTML(html) {
  if (!html) return '';

  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/g, '')
    .replace(/ style="[^"]*"/g, '');
}

async function fetchBlogs() {
  const feed = await parser.parseURL(
    'https://medium.com/feed/@bala-kubelancer'
  );

  if (!fs.existsSync('./blog')) {
    fs.mkdirSync('./blog');
  }

  feed.items.forEach((item) => {
    // ✅ Slug
    const slug = item.link
      .split('/')
      .filter(Boolean)
      .pop()
      .split('?')[0];

    // ✅ Date (fix 1970 issue)
    const date = new Date(item.pubDate).toISOString();

    // ✅ Raw HTML
    const rawHTML = item['content:encoded'] || item.content;

    // ✅ Clean HTML
    const cleanedHTML = cleanHTML(rawHTML);

// ✅ Convert HTML → Markdown
let markdown = turndownService.turndown(cleanedHTML);

// 🔥 MDX SAFE CONTENT
let safeMarkdown = markdown
  .replace(/\bimport\b/g, 'import_')
  .replace(/\bexport\b/g, 'export_');

// 🔥 Remove first image (avoid duplicate hero)
safeMarkdown = safeMarkdown.replace(/!\[.*?\]\(.*?\)/, '');

// ✅ Extract hero image
const imgMatch = rawHTML?.match(/<img[^>]+src="([^">]+)"/);
const image = imgMatch ? imgMatch[1] : '';

    // 🧠 Auto tags
    const title = item.title.toLowerCase();
    const tags = [];

    if (title.includes('aws')) tags.push('AWS');
    if (title.includes('eks') || title.includes('kubernetes')) tags.push('Kubernetes');
    if (title.includes('devops')) tags.push('DevOps');
    if (title.includes('terraform')) tags.push('Terraform');
    if (title.includes('istio')) tags.push('Service Mesh');

    // ✅ Remove duplicate title inside content
    safeMarkdown = safeMarkdown.replace(/^# .*\n/, '');

    // ✅ Final MDX content
    const mdx = `---
title: "${item.title.replace(/"/g, '\\"')}"
slug: ${slug}
date: ${date}
image: "${image}"
tags: ${JSON.stringify(tags)}
---

${image ? `![banner](${image})` : ''}

${safeMarkdown}

---

👉 Originally published on Medium: [Read more](${item.link})
`;

    fs.writeFileSync(`./blog/${slug}.mdx`, mdx);
  });

  console.log('✅ Blogs generated successfully (FULL + MDX SAFE)');
}

fetchBlogs();