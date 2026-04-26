import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = dirname(here);
const dataDir = join(root, "data");

const REMOTE_SOURCE_TIMEOUT_MS = 90000;
const COMMONS_PAGE_LIMIT = 50;
const TARGET_COMMONS_VIDEO_CASES = 520;

const sources = {
  peterImageJson:
    "https://raw.githubusercontent.com/peterRooo/awesome-gpt-image-2-prompts/main/data/gpt-image-2-prompts.json",
  peterImageRepo: "https://github.com/peterRooo/awesome-gpt-image-2-prompts",
  evoImageJson:
    "https://api.github.com/repos/EvoLinkAI/awesome-gpt-image-2-prompts/contents/gpt_image2_prompts.json",
  evoImageRepo: "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
  seedanceReadme:
    "https://raw.githubusercontent.com/YouMind-OpenLab/awesome-seedance-2-prompts/main/README_zh.md",
  seedanceVideoUrls:
    "https://raw.githubusercontent.com/YouMind-OpenLab/awesome-seedance-2-prompts/main/video-urls.json",
  seedanceRepo: "https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts",
  grokReadme:
    "https://raw.githubusercontent.com/YouMind-OpenLab/awesome-grok-imagine-prompts/main/README.md",
  grokRepo: "https://github.com/YouMind-OpenLab/awesome-grok-imagine-prompts",
  commonsApi: "https://commons.wikimedia.org/w/api.php"
};

async function fetchJson(url, headers = {}) {
  try {
    const response = await fetch(url, {
      headers: { "user-agent": "Prompt-Freeport-MVP", accept: "application/json", ...headers },
      signal: AbortSignal.timeout(REMOTE_SOURCE_TIMEOUT_MS)
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  } catch (error) {
    try {
      return JSON.parse(curlText(url, headers));
    } catch (curlError) {
      console.warn(`Skipped JSON source: ${url} (${error.message}; curl fallback: ${curlError.message})`);
      return null;
    }
  }
}

async function fetchText(url, headers = {}) {
  try {
    const response = await fetch(url, {
      headers: { "user-agent": "Prompt-Freeport-MVP", accept: "text/plain", ...headers },
      signal: AbortSignal.timeout(REMOTE_SOURCE_TIMEOUT_MS)
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.text();
  } catch (error) {
    try {
      return curlText(url, headers);
    } catch (curlError) {
      console.warn(`Skipped text source: ${url} (${error.message}; curl fallback: ${curlError.message})`);
      return "";
    }
  }
}

function curlText(url, headers = {}) {
  const args = [
    "-L",
    "--fail",
    "--silent",
    "--show-error",
    "--max-time",
    "120",
    "-A",
    "Prompt-Freeport-MVP"
  ];
  Object.entries(headers).forEach(([key, value]) => {
    args.push("-H", `${key}: ${value}`);
  });
  args.push(url);
  return execFileSync("curl", args, { maxBuffer: 64 * 1024 * 1024 }).toString("utf8");
}

function normalizeSpace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function stripHtml(value) {
  return normalizeSpace(String(value || "").replace(/<[^>]+>/g, " "));
}

function stripMarkdown(value) {
  return stripHtml(
    String(value || "")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[`*_>#|]/g, "")
  );
}

function compactTitle(value, fallback, maxLength = 34) {
  const cleaned = stripMarkdown(value)
    .replace(/^file:/iu, "")
    .replace(/\.(jpe?g|png|webp|gif|webm|mp4|ogv)$/iu, "")
    .replace(/^请根据【?主题】?/u, "")
    .replace(/^使用\s*(GPT Image 2|Sora 2\.0|Seedance 2\.0|Grok Imagine)\s*/iu, "")
    .replace(/^生成一?张?/u, "")
    .replace(/^create\s+/iu, "")
    .trim();
  const title = cleaned || fallback;
  return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
}

function aspectFromSize(width, height, fallback = "wide") {
  if (!width || !height) return fallback;
  if (height > width * 1.12) return "tall";
  if (width > height * 1.12) return "wide";
  return "wide";
}

function stableId(value) {
  let hash = 2166136261;
  for (const char of String(value || "")) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return hash.toString(36);
}

function inferLanguage(value) {
  const text = String(value || "");
  if (/[\u3400-\u9fff]/u.test(text)) return "zh";
  return "en";
}

function inferImageMeta(text, width, height) {
  const source = `${text}`.toLowerCase();
  const zh = `${text}`;
  if (/poster|海报|flyer|传单|主视觉|key visual/i.test(source + zh)) {
    return { category: "海报 / 真实案例", tags: ["海报", "商业视觉", "图片"], aspect: aspectFromSize(width, height, "tall") };
  }
  if (/ui|app|dashboard|界面|产品截图|设计系统|组件/i.test(source + zh)) {
    return { category: "UI / 真实案例", tags: ["UI", "SaaS", "图片"], aspect: aspectFromSize(width, height, "wide") };
  }
  if (/infographic|diagram|信息图|科普|图鉴|百科|map|地图/i.test(source + zh)) {
    return { category: "信息图 / 真实案例", tags: ["信息图", "图文混排", "图片"], aspect: aspectFromSize(width, height, "tall") };
  }
  if (/character|角色|人物设定|reference sheet|设定卡/i.test(source + zh)) {
    return { category: "角色 / 真实案例", tags: ["角色", "设定", "图片"], aspect: aspectFromSize(width, height, "tall") };
  }
  if (/product|packaging|商品|电商|包装|广告|commercial/i.test(source + zh)) {
    return { category: "产品 / 真实案例", tags: ["产品", "广告", "图片"], aspect: aspectFromSize(width, height, "wide") };
  }
  if (/food|coffee|tea|美食|咖啡|茶|甜品|餐/i.test(source + zh)) {
    return { category: "食物 / 真实案例", tags: ["食物", "真实摄影", "图片"], aspect: aspectFromSize(width, height, "tall") };
  }
  if (/game|游戏|像素|rpg|开放世界/i.test(source + zh)) {
    return { category: "游戏 / 真实案例", tags: ["游戏", "科幻", "图片"], aspect: aspectFromSize(width, height, "wide") };
  }
  return { category: "图片 / 真实案例", tags: ["真实摄影", "图片", "灵感"], aspect: aspectFromSize(width, height, "wide") };
}

function inferVideoMeta(title, prompt = "") {
  const source = `${title} ${prompt}`.toLowerCase();
  const zh = `${title} ${prompt}`;
  if (/fpv|drone|航拍|无人机|追逐/i.test(source + zh)) {
    return { category: "运动 / FPV", tags: ["FPV", "镜头运动", "视频"], aspect: "wide" };
  }
  if (/music|mv|rap|song|stage|音乐|说唱|舞台|演唱/i.test(source + zh)) {
    return { category: "音乐 / MV", tags: ["MV", "节奏", "视频"], aspect: "wide" };
  }
  if (/fashion|luxury|brand|commercial|ad|广告|品牌|高定|产品/i.test(source + zh)) {
    return { category: "广告 / 真实视频", tags: ["广告", "产品", "视频"], aspect: "wide" };
  }
  if (/food|coffee|baking|kitchen|食物|厨房|烘焙|咖啡/i.test(source + zh)) {
    return { category: "食物 / 真实视频", tags: ["食物", "微距", "视频"], aspect: "wide" };
  }
  if (/architecture|house|interior|building|建筑|室内|房屋/i.test(source + zh)) {
    return { category: "建筑 / 真实视频", tags: ["建筑", "镜头运动", "视频"], aspect: "wide" };
  }
  if (/sci-fi|cyberpunk|space|robot|科幻|赛博|太空|机甲/i.test(source + zh)) {
    return { category: "科幻 / 真实视频", tags: ["科幻", "分镜", "视频"], aspect: "wide" };
  }
  if (/anime|battle|fight|action|combat|动作|战斗|武侠/i.test(source + zh)) {
    return { category: "动作 / 真实视频", tags: ["分镜", "动作", "视频"], aspect: "wide" };
  }
  if (/portrait|romance|classroom|healing|documentary|人像|恋爱|教室|疗愈|纪录/i.test(source + zh)) {
    return { category: "电影 / 真实视频", tags: ["分镜", "真实摄影", "视频"], aspect: "wide" };
  }
  return { category: "视频 / 真实案例", tags: ["分镜", "视频", "灵感"], aspect: "wide" };
}

function promptFromRealVideo(title, description, duration, aspect) {
  const subject = compactTitle(title, "真实视频案例", 80);
  const detail = stripHtml(description) || "参考真实素材的主体、动作、镜头节奏和环境氛围。";
  const seconds = duration ? Math.max(6, Math.min(30, Math.round(duration))) : 12;
  return {
    zh: `基于真实视频案例「${subject}」生成一支 ${seconds} 秒${aspect === "tall" ? "竖屏" : "横屏"}视频。
参考画面：${detail}
镜头：先建立场景和主体，再切入最有辨识度的动作或细节，最后收束到一个稳定、可截屏的画面。
风格：真实摄影感，自然光影，运动轨迹清楚，主体不要变形。
要求：无字幕、无水印、不要出现真实品牌商标；如包含人物或地点，保持自然纪录片质感。`,
    en: `Create a ${seconds}-second ${aspect === "tall" ? "vertical" : "horizontal"} video inspired by the real video case "${subject}".
Reference scene: ${detail}
Camera: establish the environment and subject first, cut to the most recognizable action or detail, then resolve on a stable frame suitable for a still.
Style: realistic cinematography, natural lighting, clear motion path, no subject deformation.
Requirements: no subtitles, no watermark, no real brand logos; if people or places appear, keep a natural documentary feel.`
  };
}

async function buildPeterImageCases() {
  const records = await fetchJson(sources.peterImageJson);
  if (!Array.isArray(records)) return [];

  return records
    .filter((record) => record.image_url || record.image)
    .map((record, index) => {
      const prompt = String(record.prompt || "").trim();
      const previewPath = record.image ? `https://raw.githubusercontent.com/peterRooo/awesome-gpt-image-2-prompts/main/${record.image}` : "";
      const image = record.image_url || previewPath;
      const thumbnail = previewPath || record.image_url;
      const meta = inferImageMeta(`${record.title} ${record.category} ${prompt}`);
      return {
        id: `peter-gpt-image-2-${record.id || record.index || index + 1}`,
        media: "image",
        model: "GPT Image 2",
        title: compactTitle(record.title || prompt, `GPT Image 2 图片案例 ${index + 1}`),
        category: meta.category,
        tags: Array.from(new Set([record.category, ...meta.tags].filter(Boolean))).slice(0, 4),
        aspect: meta.aspect,
        image,
        thumbnail,
        summary: `GPT Image 2 真实图片案例，来源于公开提示词数据集。`,
        promptZh: prompt || "原始数据未提供可解析提示词。",
        promptEn: `Original source prompt:\n${prompt || "No parseable prompt text found in source."}`,
        sourceLanguage: record.language || inferLanguage(prompt),
        sourceName: `peterRooo/awesome-gpt-image-2-prompts${record.author_name ? ` / ${record.author_name}` : ""}`,
        sourceUrl: record.source_url || sources.peterImageRepo,
        licenseStatus: "source-review",
        commercialUse: "source-review",
        licenseNote:
          "公开提示词与预览图作为真实案例展示；正式商用前需逐条核查作者授权、平台条款、人物肖像、品牌/IP 和署名要求。",
        sourceKind: "real-image"
      };
    });
}

async function buildEvoImageCases() {
  const records = await fetchJson(sources.evoImageJson, { accept: "application/vnd.github.raw" });
  if (!Array.isArray(records)) return [];

  const cases = [];
  records.forEach((record, recordIndex) => {
    const prompt = String(record.text || "").trim();
    const item = Array.isArray(record.media)
      ? record.media.find((media) => media.type === "photo" && media.url)
      : null;
    if (!item) return;
    const meta = inferImageMeta(prompt, item.width, item.height);
    cases.push({
      id: `evo-gpt-image-2-${record.id || recordIndex}`,
      media: "image",
      model: "GPT Image 2",
      title: compactTitle(prompt, `GPT Image 2 社区图片 ${recordIndex + 1}`),
      category: meta.category,
      tags: meta.tags,
      aspect: meta.aspect,
      image: item.url,
      summary: `来自 ${record.author ? `@${record.author}` : "社区作者"} 的 GPT Image 2 真实图片案例。`,
      promptZh: prompt || "原始页面未提供可解析提示词。",
      promptEn: `Original source prompt:\n${prompt || "No parseable prompt text found in source."}`,
      sourceLanguage: inferLanguage(prompt),
      sourceName: `EvoLinkAI/awesome-gpt-image-2-prompts${record.author ? ` / @${record.author}` : ""}`,
      sourceUrl: record.url || sources.evoImageRepo,
      licenseStatus: "source-review",
      commercialUse: "source-review",
      licenseNote:
        "社区图片和社媒来源仅作为预览与灵感展示；正式商用前需逐条核查作者授权、平台条款、人物肖像、品牌/IP 和署名要求。",
      sourceKind: "real-image"
    });
  });
  return cases;
}

function cloudflareDownloadUrl(thumbnailUrl) {
  if (!thumbnailUrl) return "";
  return thumbnailUrl.replace("/thumbnails/thumbnail.jpg", "/downloads/default.mp4");
}

function parseYouMindVideoSections(markdown, options) {
  const sections = [];
  const headings = [...markdown.matchAll(/^### .+$/gm)].map((match) => ({
    index: match.index,
    line: match[0],
    title: match[0].replace(/^###\s+/, "")
  }));

  headings.forEach((heading, index) => {
    const nextHeading = headings[index + 1];
    const rawTitle = heading.title;
    const blockStart = heading.index + heading.line.length;
    const block = markdown.slice(blockStart, nextHeading ? nextHeading.index : markdown.length);
    const imageMatch = block.match(/<img\s+src="([^"]*cloudflarestream\.com\/[^"]+\/thumbnails\/thumbnail\.jpg)"[^>]*alt="([^"]*)"/i);
    const promptMatch =
      block.match(/####[^\n]*提示词[^\n]*\n[\s\S]*?```[^\n]*\n([\s\S]*?)```/i) ||
      block.match(/####[^\n]*Prompt[^\n]*\n[\s\S]*?```[^\n]*\n([\s\S]*?)```/i) ||
      block.match(/```[^\n]*\n([\s\S]*?)```/);
    if (!imageMatch || !promptMatch) return;

    const youmindId =
      block.match(/seedance-2-0-prompts\?id=(\d+)/i)?.[1] ||
      block.match(/grok-imagine-prompts\?id=(\d+)/i)?.[1] ||
      block.match(/\?id=(\d+)/i)?.[1] ||
      stableId(`${options.idPrefix}-${rawTitle}-${sections.length + 1}`);
    const releaseVideo = options.videoUrls?.[youmindId];
    const description =
      stripMarkdown(block.match(/####[^\n]*描述[^\n]*\n([\s\S]*?)(?=\n#### |\n```|<img)/i)?.[1] || "") ||
      stripMarkdown(block.match(/\n>\s*([^\n]+)/)?.[1] || "");
    const title = stripMarkdown(rawTitle.replace(/^No\.\s*\d+:\s*/i, ""));
    const prompt = promptMatch[1].trim();
    const thumbnail = imageMatch[1].startsWith("http") ? imageMatch[1] : `https://${imageMatch[1]}`;
    const meta = inferVideoMeta(title, prompt);

    sections.push({
      id: `${options.idPrefix}-${youmindId}`,
      media: "video",
      model: options.model,
      title: title || imageMatch[2] || `${options.model} 视频案例 ${sections.length + 1}`,
      category: meta.category,
      tags: meta.tags,
      aspect: meta.aspect,
      image: thumbnail,
      video: cloudflareDownloadUrl(thumbnail) || releaseVideo,
      summary: description || `${options.model} 真实视频案例，已接入真实视频封面和播放源。`,
      promptZh: prompt,
      promptEn: `Original source prompt:\n${prompt}`,
      sourceLanguage: options.sourceLanguage || inferLanguage(prompt),
      sourceName: options.sourceName,
      sourceUrl: youmindId ? `${options.publicUrl}?id=${youmindId}` : options.repoUrl,
      licenseStatus: "source-review",
      commercialUse: "source-review",
      licenseNote:
        "社区视频按来源仓库和页面仅作预览与灵感展示；正式商用前需核查作者授权、平台条款、人物肖像、声音、音乐、品牌/IP 和第三方素材。",
      sourceKind: "real-video"
    });
  });
  return sections;
}

async function buildYouMindVideoCases() {
  const [seedanceMarkdown, seedanceVideoUrlJson, grokMarkdown] = await Promise.all([
    fetchText(sources.seedanceReadme),
    fetchJson(sources.seedanceVideoUrls),
    fetchText(sources.grokReadme)
  ]);

  const seedance = parseYouMindVideoSections(seedanceMarkdown, {
    idPrefix: "seedance",
    model: "Seedance 2.0",
    sourceName: "YouMind-OpenLab/awesome-seedance-2-prompts",
    repoUrl: sources.seedanceRepo,
    publicUrl: "https://youmind.com/zh-CN/seedance-2-0-prompts",
    sourceLanguage: "zh",
    videoUrls: seedanceVideoUrlJson?.prompts || {}
  });
  const grok = parseYouMindVideoSections(grokMarkdown, {
    idPrefix: "grok-imagine",
    model: "Grok Imagine",
    sourceName: "YouMind-OpenLab/awesome-grok-imagine-prompts",
    repoUrl: sources.grokRepo,
    publicUrl: "https://youmind.com/grok-imagine-prompts",
    sourceLanguage: "en"
  });

  return [...seedance, ...grok];
}

async function fetchCommonsVideoPage(offset = 0) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: "filemime:video/webm",
    gsrnamespace: "6",
    gsrlimit: String(COMMONS_PAGE_LIMIT),
    prop: "imageinfo",
    iiprop: "url|mime|size|extmetadata",
    iiurlwidth: "640",
    format: "json",
    origin: "*"
  });
  if (offset) params.set("gsroffset", String(offset));
  return await fetchJson(`${sources.commonsApi}?${params.toString()}`);
}

function commonsTitle(title) {
  return compactTitle(String(title || "").replace(/^File:/i, ""), "Wikimedia Commons 视频案例", 54);
}

function buildCommonsVideoCase(page, index) {
  const info = page.imageinfo?.[0];
  if (!info?.url || !info?.thumburl || !String(info.mime || "").includes("webm")) return null;
  if (!info.width || !info.height || info.width < 240 || info.height < 180) return null;
  const metadata = info.extmetadata || {};
  const title = commonsTitle(metadata.ObjectName?.value || page.title);
  const description = stripHtml(metadata.ImageDescription?.value || "");
  const artist = stripHtml(metadata.Artist?.value || "");
  const license = stripHtml(metadata.LicenseShortName?.value || metadata.UsageTerms?.value || "Wikimedia Commons");
  const aspect = aspectFromSize(info.width, info.height, "wide");
  const meta = inferVideoMeta(`${title} ${description}`);
  const prompt = promptFromRealVideo(title, description, info.duration, aspect);

  return {
    id: `commons-video-${page.pageid || stableId(info.url)}-${index}`,
    media: "video",
    model: "Real Video Reference",
    title,
    category: meta.category,
    tags: meta.tags,
    aspect,
    image: info.thumburl,
    video: info.url,
    summary: description || "Wikimedia Commons 公开视频案例，带真实封面和可播放视频。",
    promptZh: prompt.zh,
    promptEn: prompt.en,
    sourceName: artist ? `Wikimedia Commons / ${artist}` : "Wikimedia Commons",
    sourceUrl: info.descriptionurl || info.descriptionshorturl || "https://commons.wikimedia.org/",
    sourceLanguage: "en",
    licenseStatus: license,
    commercialUse: "source-review",
    licenseNote: `Wikimedia Commons 来源，页面标注许可：${license}。使用前仍需核查署名、肖像、商标、地点、音乐和第三方权利。`,
    sourceKind: "real-video"
  };
}

async function buildCommonsVideoCases() {
  const cases = [];
  const seenUrls = new Set();
  let offset = 0;

  while (cases.length < TARGET_COMMONS_VIDEO_CASES) {
    const json = await fetchCommonsVideoPage(offset);
    const pages = Object.values(json?.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    if (!pages.length) break;

    for (const page of pages) {
      const item = buildCommonsVideoCase(page, cases.length + 1);
      if (!item || seenUrls.has(item.video)) continue;
      seenUrls.add(item.video);
      cases.push(item);
      if (cases.length >= TARGET_COMMONS_VIDEO_CASES) break;
    }

    const nextOffset = json?.continue?.gsroffset;
    if (nextOffset === undefined || nextOffset === offset) break;
    offset = nextOffset;
  }

  return cases;
}

function hasRequiredMedia(item) {
  if (item.media === "image") return Boolean(item.image);
  if (item.media === "video") return Boolean(item.video && item.image);
  return false;
}

function dedupeCases(items) {
  const seen = new Set();
  const deduped = [];
  const removed = [];

  for (const item of items.filter(hasRequiredMedia)) {
    const key = item.media === "video" ? `video:${item.video}` : `image:${item.image}`;
    if (seen.has(key)) {
      removed.push({ id: item.id, duplicateOf: key });
      continue;
    }
    seen.add(key);
    deduped.push(item);
  }

  return { cases: deduped, removed };
}

const [peterImages, evoImages, youmindVideos, commonsVideos] = await Promise.all([
  buildPeterImageCases(),
  buildEvoImageCases(),
  buildYouMindVideoCases(),
  buildCommonsVideoCases()
]);

const deduped = dedupeCases([...peterImages, ...evoImages, ...youmindVideos, ...commonsVideos]);
const cases = deduped.cases;

const audit = {
  generatedAt: "2026-04-26",
  counts: {
    image: cases.filter((item) => item.media === "image").length,
    video: cases.filter((item) => item.media === "video").length,
    total: cases.length,
    noMedia: cases.filter((item) => !hasRequiredMedia(item)).length,
    peterImages: peterImages.length,
    evoImages: evoImages.length,
    youmindVideos: youmindVideos.length,
    commonsVideos: commonsVideos.length,
    exactDuplicatesRemoved: deduped.removed.length
  },
  policy:
    "本次生成只保留有真实图片或真实视频+封面的案例；不再生成无媒体提示词模板。视频卡片使用真实封面图预览，点击放大时才加载视频本体。",
  deduplication: {
    method: "exact media URL dedupe after source-level one-image-per-prompt selection",
    removed: deduped.removed
  },
  reviewedSources: [
    {
      name: "peterRooo/awesome-gpt-image-2-prompts",
      url: sources.peterImageRepo,
      observedLicense: "公开 GPT Image 2 提示词与预览图数据集",
      commercialAssessment: "作为真实案例展示；商用前需逐条核查作者和平台授权。"
    },
    {
      name: "EvoLinkAI/awesome-gpt-image-2-prompts",
      url: sources.evoImageRepo,
      observedLicense: "社区提示词与社媒预览图合集",
      commercialAssessment: "作为真实案例展示；商用前需逐条核查作者和平台授权。"
    },
    {
      name: "YouMind-OpenLab/awesome-seedance-2-prompts",
      url: sources.seedanceRepo,
      observedLicense: "公开视频生成提示词案例仓库",
      commercialAssessment: "作为真实视频案例展示；商用前需核查作者授权、声音、音乐、肖像和第三方素材。"
    },
    {
      name: "YouMind-OpenLab/awesome-grok-imagine-prompts",
      url: sources.grokRepo,
      observedLicense: "公开视频生成提示词案例仓库",
      commercialAssessment: "作为真实视频案例展示；商用前需核查作者授权、声音、音乐、肖像和第三方素材。"
    },
    {
      name: "Wikimedia Commons",
      url: "https://commons.wikimedia.org/",
      observedLicense: "每条媒体文件携带独立许可元数据",
      commercialAssessment: "用于补齐真实可播放视频案例；使用前需按单条页面核查许可、署名和第三方权利。"
    }
  ]
};

mkdirSync(dataDir, { recursive: true });
writeFileSync(
  join(dataDir, "generated-cases.js"),
  `window.PROMPT_FREEPORT_CASES = ${JSON.stringify(cases, null, 2)};\nwindow.PROMPT_FREEPORT_AUDIT = ${JSON.stringify(audit, null, 2)};\n`,
  "utf8"
);
writeFileSync(join(dataDir, "license-audit.json"), `${JSON.stringify(audit, null, 2)}\n`, "utf8");

console.log(`Generated ${audit.counts.image} image cases and ${audit.counts.video} video cases (${audit.counts.total} total).`);
