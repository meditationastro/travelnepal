// Lightweight markdown-to-HTML helper (no external deps).
// Supports: headings (#, ##, ###), paragraphs, unordered lists, bold/italic, links, images.

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export type TocItem = { id: string; text: string; level: 2 | 3 };

export function parseMarkdown(markdown: string): { html: string; toc: TocItem[] } {
  const lines = (markdown || '').split(/\r?\n/);
  const toc: TocItem[] = [];
  const out: string[] = [];

  let inList = false;

  const flushList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  const inline = (text: string) => {
    // escape first
    let s = escapeHtml(text);
    // images ![alt](url)
    s = s.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, (_m, alt, url) => {
      const safeAlt = escapeHtml(String(alt || ''));
      const safeUrl = String(url || '').replace(/"/g, '');
      return `<img src="${safeUrl}" alt="${safeAlt}" class="rounded-2xl border border-stone-100 my-4" />`;
    });
    // links [text](url)
    s = s.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (_m, label, url) => {
      const safeUrl = String(url || '').replace(/"/g, '');
      return `<a href="${safeUrl}" class="text-himalaya-700 hover:underline">${label}</a>`;
    });
    // bold **text**
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // italic *text*
    s = s.replace(/(^|\s)\*([^*]+)\*(?=\s|$)/g, '$1<em>$2</em>');
    return s;
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      flushList();
      continue;
    }

    const h3 = line.match(/^###\s+(.+)/);
    const h2 = line.match(/^##\s+(.+)/);
    const h1 = line.match(/^#\s+(.+)/);
    const li = line.match(/^-\s+(.+)/);

    if (h1) {
      flushList();
      const text = h1[1].trim();
      const id = slugifyHeading(text);
      out.push(`<h2 id="${id}" class="text-2xl md:text-3xl font-display font-semibold text-stone-900 mt-8">${inline(text)}</h2>`);
      continue;
    }
    if (h2) {
      flushList();
      const text = h2[1].trim();
      const id = slugifyHeading(text);
      toc.push({ id, text, level: 2 });
      out.push(`<h2 id="${id}" class="text-2xl font-display font-semibold text-stone-900 mt-8">${inline(text)}</h2>`);
      continue;
    }
    if (h3) {
      flushList();
      const text = h3[1].trim();
      const id = slugifyHeading(text);
      toc.push({ id, text, level: 3 });
      out.push(`<h3 id="${id}" class="text-xl font-display font-semibold text-stone-900 mt-6">${inline(text)}</h3>`);
      continue;
    }

    if (li) {
      if (!inList) {
        out.push('<ul class="list-disc pl-6 space-y-1 text-stone-700">');
        inList = true;
      }
      out.push(`<li>${inline(li[1].trim())}</li>`);
      continue;
    }

    flushList();
    out.push(`<p class="text-stone-700 leading-relaxed mt-4">${inline(line)}</p>`);
  }

  flushList();
  return { html: out.join('\n'), toc };
}
