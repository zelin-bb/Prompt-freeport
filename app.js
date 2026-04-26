const resources = [
  {
    title: "OpenAI Sora 2 Prompting Guide",
    url: "https://cookbook.openai.com/examples/sora/sora2_prompting_guide",
    note: "Sora 2.0 官方提示词结构、镜头语言、时间轴和参数参考。"
  },
  {
    title: "OpenAI Output Copyright FAQ",
    url: "https://help.openai.com/en/articles/5008634-will-openai-claim-copyright-over-what-outputs-i-generate-with-the-api",
    note: "OpenAI 输出使用边界的官方说明。"
  },
  {
    title: "OpenAI Images 2.0",
    url: "https://openai.com/index/introducing-chatgpt-images-2-0/",
    note: "GPT Image 2 / ChatGPT Images 2.0 官方产品信息参考。"
  },
  {
    title: "OpenNana Awesome Prompt Gallery",
    url: "https://opennana.com/awesome-prompt-gallery?media_type=video",
    note: "参考页面信息架构：顶部导航、媒体筛选、模型/标签过滤、搜索与案例卡片流。"
  },
  {
    title: "EvoLinkAI/awesome-gpt-image-2-prompts",
    url: "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    note: "GPT Image 2 图片案例和提示词参考。"
  },
  {
    title: "ZeroLu/awesome-gpt-image",
    url: "https://github.com/ZeroLu/awesome-gpt-image",
    note: "GPT Image 2 社区提示词参考。"
  },
  {
    title: "zhangchenchen/awesome_sora2_prompt",
    url: "https://github.com/zhangchenchen/awesome_sora2_prompt",
    note: "Sora 2.0 社区提示词参考。"
  },
  {
    title: "hr98w/awesome-sora-prompts",
    url: "https://github.com/hr98w/awesome-sora-prompts",
    note: "Sora 提示词参考仓库。"
  },
  {
    title: "ZeroLu/awesome-sora2",
    url: "https://github.com/ZeroLu/awesome-sora2",
    note: "Sora 2.0 提示词和玩法整理。"
  },
  {
    title: "YouMind-OpenLab/awesome-seedance-2-prompts",
    url: "https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts",
    note: "Seedance 2.0 视频提示词与真实视频案例来源。"
  }
];

const baseCases = [
  {
    id: "img-city-poster",
    media: "image",
    model: "GPT Image 2",
    title: "中文城市节海报",
    category: "海报 / 文字渲染",
    tags: ["海报", "中文排版", "商业视觉"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case4/output.jpg",
    summary: "测试中文标题、纸张肌理、留白和印刷层级。",
    promptZh: `为「城市春日设计节」生成一张 9:16 竖版中文海报。
画面：米白纸张肌理，大面积留白，中心是一条从左下向右上游走的墨绿色丝带，边缘带轻微水墨晕染。
文字：主标题清晰写「春日设计节」，副标题写「城市、记忆与发明」，底部有小号赞助栏但不要拥挤。
风格：高级编辑设计、现代中文字体、黑色与朱红点缀、印刷级质感，文字必须可读。`,
    promptEn: `Create a 9:16 vertical Chinese poster for "Urban Spring Design Festival".
Scene: off-white paper texture, generous negative space, one ink-green ribbon flowing from lower left to upper right with subtle watercolor edges.
Text: the main headline clearly reads "春日设计节"; the subtitle reads "城市、记忆与发明"; include a small sponsor area at the bottom without clutter.
Style: premium editorial design, modern Chinese typography, black with vermilion accents, print-ready texture, all text must be readable.`
  },
  {
    id: "img-neon-portrait",
    media: "image",
    model: "GPT Image 2",
    title: "便利店夜景人像",
    category: "摄影 / 生活切片",
    tags: ["真实摄影", "夜景", "人像"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/portrait_case1/output.jpg",
    summary: "真实街拍质感，霓虹反射和普通人状态。",
    promptZh: `生成一张夜间便利店门口的真实街拍人像。
主体：一个年轻创作者站在玻璃门旁，手里拿着冰饮，表情自然，不摆拍。
环境：白色便利店灯光、湿润地面、玻璃反射、促销贴纸、路边共享单车和远处车灯。
镜头：35mm 胶片质感，轻微颗粒，肤色自然，背景有真实城市噪点。
要求：不要网红棚拍感，不要过度磨皮，像路人随手拍到的生活片段。`,
    promptEn: `Generate a realistic candid night portrait outside a convenience store.
Subject: a young creator stands beside the glass entrance holding an iced drink, natural expression, not posed.
Environment: bright white store lights, wet pavement, glass reflections, promo stickers, shared bikes by the road, distant car headlights.
Camera: 35mm film look, slight grain, natural skin tone, real urban background noise.
Requirements: avoid influencer studio styling and heavy skin smoothing; it should feel like a slice of life captured casually.`
  },
  {
    id: "img-ui-kit",
    media: "image",
    model: "GPT Image 2",
    title: "一条提示词生成 UI 套件",
    category: "UI Mockup",
    tags: ["UI", "设计系统", "SaaS"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/ui_case1/output.jpg",
    summary: "生成产品后台、组件库和提示词管理界面。",
    promptZh: `为一个 AI 提示词管理平台生成一张桌面端 UI mockup。
布局：左侧为模型与标签导航，中间为提示词卡片网格，右侧为选中卡片的详情与复制按钮。
视觉：浅色工作台风格，细边框，8px 以下圆角，绿色和蓝色作为状态色，信息密度适中。
内容：卡片包含模型、媒体类型、授权、收藏数和复制按钮。
要求：文字清晰可读，界面像真实 SaaS 产品截图，不要营销海报。`,
    promptEn: `Create a desktop UI mockup for an AI prompt management platform.
Layout: model and tag navigation on the left, prompt card grid in the center, selected-card details and copy buttons on the right.
Visual style: light productivity workspace, thin borders, radius below 8px, green and blue status colors, medium information density.
Content: cards include model, media type, license, save count, and copy buttons.
Requirements: all text must be readable; make it look like a real SaaS product screenshot, not a marketing poster.`
  },
  {
    id: "img-product-page",
    media: "image",
    model: "GPT Image 2",
    title: "商品详情页视觉压力测试",
    category: "电商 / 版式",
    tags: ["产品页", "可读文字", "移动端"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case53/output.jpg",
    summary: "测试价格、参数表、卖点模块和长图排版。",
    promptZh: `生成一张移动端商品详情页长图，产品是「便携冷萃咖啡机」。
顶部：真实产品照片，占据首屏 60%，背景为干净厨房台面。
中段：卖点模块包含「12小时低温萃取」「USB-C 充电」「可拆洗滤芯」「650ml 容量」。
底部：参数表、价格、配送信息和购买按钮。
风格：真实电商 App 页面，文字清晰，层级明确，避免错别字和无意义假字。`,
    promptEn: `Create a long mobile product detail page for a "portable cold brew coffee maker".
Top: realistic product photo occupying 60% of the first screen, placed on a clean kitchen counter.
Middle: feature modules reading "12-hour low-temperature extraction", "USB-C charging", "removable washable filter", and "650ml capacity".
Bottom: specifications table, price, shipping info, and purchase button.
Style: realistic ecommerce app page with clear text hierarchy; avoid typos and meaningless fake text.`
  },
  {
    id: "img-infographic",
    media: "image",
    model: "GPT Image 2",
    title: "知识卡片信息图",
    category: "信息图 / 教育",
    tags: ["信息图", "科普", "图文混排"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case57/output.jpg",
    summary: "将复杂主题拆成可读知识卡片。",
    promptZh: `制作一张横版知识信息图，主题是「一杯咖啡从产地到杯中」。
结构：五个步骤，从种植、采摘、处理、烘焙到萃取，每步配小图标和 1 句解释。
视觉：自然纸张背景，咖啡棕、森林绿、奶油白和少量蓝色标注。
要求：所有中文小标题可读，箭头路径清晰，图标统一，整体像一本现代科普杂志内页。`,
    promptEn: `Create a horizontal educational infographic titled "From Origin to Cup: A Coffee Journey".
Structure: five steps: growing, harvesting, processing, roasting, and brewing. Each step has a small icon and one explanatory sentence.
Visuals: natural paper background, coffee brown, forest green, cream white, and small blue annotations.
Requirements: all Chinese subtitles must be readable, arrow paths clear, icons consistent, overall look like a modern science magazine spread.`
  },
  {
    id: "vid-romance",
    media: "video",
    model: "Seedance 2.0",
    title: "15 秒青春短片分镜",
    category: "剧情 / 分镜",
    tags: ["分镜", "对白", "微表情"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/7f63ad253175a9ad1dac53de490efac8/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/7f63ad253175a9ad1dac53de490efac8/downloads/default.mp4",
    summary: "用时间戳约束镜头、情绪和低声对白。",
    promptZh: `15 秒青春短片，写实电影感，下午空教室，金色阳光穿过百叶窗，空气中有细小尘埃。
0-4 秒：中景慢慢推近，两位学生并排坐在课桌前，女生低头写字，男生余光看她。
4-9 秒：切男生近景，他察觉女生停笔后慌忙低头，手指轻微发抖，耳朵泛红。
9-15 秒：两人同时抬眼，短暂停顿后低声对话，嘴型自然，表情克制。
声音：远处蝉鸣、纸笔摩擦、很轻的钢琴尾音。要求角色一致，无字幕，无水印。`,
    promptEn: `A 15-second youth short film with realistic cinematic quality. An empty classroom in the afternoon, golden sunlight through blinds, tiny dust particles in the air.
0-4s: medium shot slowly pushes in. Two students sit side by side at desks; the girl writes with her head down while the boy glances at her.
4-9s: cut to a close-up of the boy. When he notices her pen pause, he looks down nervously, fingers trembling slightly, ears turning red.
9-15s: both look up at the same time. After a short pause, they whisper naturally with restrained expressions.
Sound: distant cicadas, pen on paper, very soft piano tail. Keep character identity consistent, no subtitles, no watermark.`
  },
  {
    id: "vid-fashion",
    media: "video",
    model: "Seedance 2.0",
    title: "高定幻想广告",
    category: "广告 / 时装",
    tags: ["广告", "高定", "流体"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/e066fab457509bc6809ea212ae5d6a51/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/e066fab457509bc6809ea212ae5d6a51/downloads/default.mp4",
    summary: "材质变化、镜头推进和流体结尾。",
    promptZh: `15 秒高定幻想广告，天空之镜盐湖，冷色调，真实摄影与超现实流体特效结合。
0-5 秒：低机位长焦推近，一位模特从反光水面走来，衣裙像流动的蓝白瓷。
5-10 秒：模特停下看向镜头，打响指，裙摆碎裂为墨色水滴与飞散纹样，围绕身体旋转。
10-15 秒：俯拍快速下降，水面变成黑白流体漩涡，画面被吞入深处。
风格：奢侈品广告、锐利高光、真实材质、无字幕。`,
    promptEn: `A 15-second haute couture fantasy commercial on a mirror-like salt flat, cool color palette, combining real cinematography with surreal fluid effects.
0-5s: low-angle telephoto push-in. A model walks across the reflective water surface; her dress looks like flowing blue-and-white porcelain.
5-10s: the model stops, looks into camera, snaps her fingers. The skirt breaks into ink droplets and flying patterns swirling around her.
10-15s: overhead shot descends quickly as the water turns into a black-and-white fluid vortex that swallows the frame.
Style: luxury brand commercial, sharp highlights, realistic materials, no subtitles.`
  },
  {
    id: "vid-rural",
    media: "video",
    model: "Seedance 2.0",
    title: "现代田园疗愈短片",
    category: "生活方式 / ASMR",
    tags: ["食物", "微距", "自然光"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/ce508b28e505ffce07247e2ab036d6f1/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/ce508b28e505ffce07247e2ab036d6f1/downloads/default.mp4",
    summary: "美食、家居、乡村生活方式多镜头脚本。",
    promptZh: `12 秒现代田园疗愈短片，明亮开放厨房，窗外是菜园，阳光自然透明。
0-3 秒：手从藤上摘下一颗成熟番茄，露珠轻晃，微距浅景深。
3-7 秒：切到木质案板，刀锋缓慢切开番茄，汁水与籽的细节清晰。
7-12 秒：创作者坐在窗边品尝，轻轻微笑，背景绿意虚化。
声音：刀触案板、轻微风声、室内环境声。要求干净真实，不要古装感。`,
    promptEn: `A 12-second modern rural healing short film in a bright open kitchen with a vegetable garden outside, natural transparent sunlight.
0-3s: a hand picks a ripe tomato from the vine, dew drops gently shaking, macro shallow depth of field.
3-7s: cut to a wooden cutting board as a knife slowly slices the tomato, showing clear juice and seed details.
7-12s: the creator sits by the window, tastes the food, and smiles softly; green background is blurred.
Sound: knife on cutting board, slight wind, indoor room tone. Keep it clean and realistic, no historical costume feeling.`
  },
  {
    id: "vid-mv",
    media: "video",
    model: "Seedance 2.0",
    title: "银发说唱 MV",
    category: "音乐 / MV",
    tags: ["MV", "节奏", "舞台"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/e011d2666b5ee19d5b9f8b9837b974c2/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/e011d2666b5ee19d5b9f8b9837b974c2/downloads/default.mp4",
    summary: "人物设定、音乐节奏、镜头切换和舞台灯光。",
    promptZh: `12 秒银发说唱 MV，夜间小型舞台，复古麦克风，观众区只有柔和轮廓光。
0-3 秒：中近景，银发表演者握住麦克风，跟着节拍轻点肩膀，眼神自信。
3-6 秒：切低机位，脚步踩在舞台灯带旁，灯光随鼓点从暖黄切到蓝绿。
6-9 秒：手持跟拍绕到侧面，表演者用自然手势强调歌词节奏，背景虚化。
9-12 秒：正面推近，最后一个重拍时舞台背光亮起，画面停在微笑表情。
风格：真实演唱会纪录片、节奏明确、口型自然、无字幕、无水印。`,
    promptEn: `A 12-second silver-haired rap music video on a small night stage, vintage microphone, audience area lit only by soft rim light.
0-3s: medium close-up. The silver-haired performer grips the microphone, lightly taps shoulders to the beat, confident gaze.
3-6s: cut to low angle. Footsteps land beside stage light strips as lighting shifts from warm yellow to blue-green with the drums.
6-9s: handheld follow shot moves to the side; the performer uses natural gestures to emphasize the lyrics, background blurred.
9-12s: frontal push-in. On the final beat, the backlight flares and freezes on a slight smile.
Style: realistic concert documentary, clear rhythm, natural lip motion, no subtitles, no watermark.`
  },
  {
    id: "img-boston-poster",
    media: "image",
    model: "GPT Image 2",
    title: "波士顿春日城市海报",
    category: "海报 / 城市品牌",
    tags: ["海报", "旅行", "城市"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case1/output.jpg",
    summary: "用城市符号、季节色彩和清晰文字做旅行海报。",
    promptZh: `生成一张竖版城市旅行海报，主题是「Boston Spring Weekend」。
画面：查尔斯河、砖红建筑、春季树影和骑行的人，构成干净的城市剪影。
排版：顶部大标题清晰可读，底部放日期、地点和一行短口号。
风格：复古旅行海报与现代编辑设计结合，柔和天空蓝、砖红和奶油白，印刷纹理明显。`,
    promptEn: `Create a vertical city travel poster titled "Boston Spring Weekend".
Scene: the Charles River, red-brick buildings, spring tree shadows, and a cyclist forming a clean city silhouette.
Typography: large readable title at the top; date, location, and one short tagline at the bottom.
Style: a mix of vintage travel poster and modern editorial design, soft sky blue, brick red, cream white, with visible print texture.`
  },
  {
    id: "img-amalfi-travel",
    media: "image",
    model: "GPT Image 2",
    title: "阿玛菲海岸旅行海报",
    category: "海报 / 旅行",
    tags: ["海报", "旅行", "复古"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case2/output.jpg",
    summary: "地中海色彩、复古构图和旅游标题。",
    promptZh: `生成一张意大利阿玛菲海岸复古旅行海报。
画面：海边峭壁、层叠房屋、柠檬树、阳伞和蓝绿色海面，阳光明亮但不刺眼。
文字：主标题写「AMALFI」，副标题写「Summer light, cliffside days」。
风格：20 世纪旅行海报、颗粒印刷、暖黄色、海蓝色和柠檬黄，构图简洁大气。`,
    promptEn: `Create a vintage travel poster for Italy's Amalfi Coast.
Scene: seaside cliffs, layered houses, lemon trees, umbrellas, and turquoise water under bright but soft sunlight.
Text: main title "AMALFI"; subtitle "Summer light, cliffside days".
Style: 20th-century travel poster, grainy print texture, warm yellow, ocean blue, lemon yellow, clean and elegant composition.`
  },
  {
    id: "img-chengdu-food-map",
    media: "image",
    model: "GPT Image 2",
    title: "成都美食地图插画",
    category: "信息图 / 美食地图",
    tags: ["信息图", "旅行", "美食"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case3/output.jpg",
    summary: "把城市、美食和路线做成可读地图。",
    promptZh: `制作一张「成都一日美食地图」横版插画。
内容：宽窄巷子、人民公园、春熙路、玉林路四个地点，用路线连接，每个地点配一种代表小吃。
视觉：温暖手绘地图，红油、竹叶绿、米白纸张背景，图标统一。
要求：中文地点名清楚，路线易读，像一本城市指南里的跨页地图。`,
    promptEn: `Create a horizontal illustrated map titled "One-Day Chengdu Food Map".
Content: connect Kuanzhai Alley, People's Park, Chunxi Road, and Yulin Road with a route; each location has one representative local snack.
Visuals: warm hand-drawn map, chili oil red, bamboo green, off-white paper background, consistent icons.
Requirements: Chinese place names must be readable; routes clear; it should feel like a city guidebook spread.`
  },
  {
    id: "img-science-poster",
    media: "image",
    model: "GPT Image 2",
    title: "科学百科竖版海报",
    category: "信息图 / 科普",
    tags: ["信息图", "科普", "海报"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case32/output.jpg",
    summary: "适合科普账号的百科卡片版式。",
    promptZh: `生成一张竖版科学百科海报，主题是「海洋发光生物」。
结构：顶部大标题，中间为 5 种发光生物的插画和短说明，底部是原理小图解。
视觉：深海蓝黑背景，荧光青绿色高光，细线标注，像现代科学杂志。
要求：中文小标题可读，标注线清晰，不要把文字挤在一起。`,
    promptEn: `Create a vertical science encyclopedia poster about "Bioluminescent Ocean Life".
Structure: large title at the top, five illustrated glowing organisms with short captions in the center, and a small mechanism diagram at the bottom.
Visuals: deep ocean blue-black background, cyan-green glowing highlights, fine annotation lines, like a modern science magazine.
Requirements: Chinese subtitles readable, annotation lines clear, avoid crowded text.`
  },
  {
    id: "img-sci-fi-movie-poster",
    media: "image",
    model: "GPT Image 2",
    title: "科幻电影主视觉",
    category: "海报 / 电影概念",
    tags: ["海报", "科幻", "电影"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case45/output.jpg",
    summary: "黑色宇宙背景、人物剪影和电影标题。",
    promptZh: `生成一张原创科幻电影海报，片名「THE QUIET ORBIT」。
画面：宇航员站在废弃空间站走廊尽头，远处有巨大的蓝色行星和破碎光环。
文字：片名清晰居中，底部有一行小号演职员排版。
风格：冷色电影海报、强对比、体积光、真实材质，不要使用现有电影 IP。`,
    promptEn: `Create an original sci-fi movie poster titled "THE QUIET ORBIT".
Scene: an astronaut stands at the end of an abandoned space station corridor; a huge blue planet and broken ring glow in the distance.
Text: title clearly centered, with a small credit block at the bottom.
Style: cool-toned cinematic poster, strong contrast, volumetric light, realistic materials, no existing movie IP.`
  },
  {
    id: "img-japanese-sale-flyer",
    media: "image",
    model: "GPT Image 2",
    title: "日式超市促销传单",
    category: "商业设计 / 促销",
    tags: ["海报", "商业视觉", "可读文字"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/poster_case49/output.jpg",
    summary: "高密度促销信息和价格排版测试。",
    promptZh: `生成一张日式超市周末促销传单。
内容：水果、饮料、便当、零食四个区域，每个区域有产品图、价格和简短促销语。
视觉：明亮红黄配色，手写风标题，价格醒目但排版有秩序。
要求：数字价格清晰，日文/中文混合标签可读，整体像真实超市 flyer。`,
    promptEn: `Create a Japanese supermarket weekend sale flyer.
Content: four sections for fruit, drinks, bento, and snacks. Each section includes product images, prices, and short promo copy.
Visuals: bright red and yellow palette, handwritten-style headlines, prominent prices with orderly layout.
Requirements: price numbers clear, mixed Japanese/Chinese labels readable, overall like a real supermarket flyer.`
  },
  {
    id: "img-persona-card",
    media: "image",
    model: "GPT Image 2",
    title: "角色参考卡",
    category: "角色 / 设定",
    tags: ["角色", "设定卡", "插画"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/character_case2/output.jpg",
    summary: "角色三视图、表情和服装信息聚合。",
    promptZh: `生成一张原创角色参考卡。
内容：正面、侧面、背面三视图，旁边有 6 个表情头像、服装细节和配色条。
角色：年轻城市探险者，短发，轻量外套，背包和小型相机。
风格：动画设定集页面，线条干净，背景留白，文字标注可读，不要引用现有角色。`,
    promptEn: `Create an original character reference sheet.
Content: front, side, and back views; six expression portraits; outfit details; color swatches.
Character: a young urban explorer with short hair, lightweight jacket, backpack, and small camera.
Style: animation production design sheet, clean linework, white space, readable labels, no existing character references.`
  },
  {
    id: "img-mecha-city-keyvisual",
    media: "image",
    model: "GPT Image 2",
    title: "机甲少女城市主视觉",
    category: "角色 / 主视觉",
    tags: ["角色", "科幻", "海报"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/character_case7/output.jpg",
    summary: "角色、机械部件和城市背景融合。",
    promptZh: `生成一张原创科幻角色主视觉。
主体：一位穿轻型机械外骨骼的少女站在未来港口城市，高楼与海面反光在身后展开。
细节：机械手臂、透明护目镜、发光能源模块、风吹动外套。
风格：高质量动画电影海报，蓝灰与橙色点光，强空间层次，不要文字。`,
    promptEn: `Create an original sci-fi character key visual.
Subject: a girl wearing a lightweight mechanical exoskeleton stands in a futuristic harbor city, with skyscrapers and ocean reflections behind her.
Details: mechanical arms, transparent goggles, glowing energy module, jacket moving in the wind.
Style: high-quality animated film poster, blue-gray palette with orange lights, strong depth, no text.`
  },
  {
    id: "img-social-feed",
    media: "image",
    model: "GPT Image 2",
    title: "历史人物社交信息流",
    category: "UI / 社交媒体",
    tags: ["UI", "社交", "图文混排"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/ui_case4/output.jpg",
    summary: "把历史主题做成现代社交 App 截图。",
    promptZh: `生成一张手机社交 App 信息流截图，主题是「宋代城市日常」。
内容：三条帖子，分别是茶馆、夜市、书院，每条有头像、昵称、图片和短评论。
视觉：真实手机截图感，UI 元素清晰，宋代插画内容与现代界面融合。
要求：中文 UI 文案可读，布局像真实社交产品，不要过度装饰。`,
    promptEn: `Create a mobile social app feed screenshot themed "Daily Life in a Song Dynasty City".
Content: three posts about a teahouse, night market, and academy. Each post includes avatar, nickname, image, and short comments.
Visuals: realistic phone screenshot, clear UI elements, Song-era illustration content blended into a modern interface.
Requirements: Chinese UI copy readable, layout like a real social product, avoid over-decoration.`
  },
  {
    id: "img-travel-guide-card",
    media: "image",
    model: "GPT Image 2",
    title: "城市旅行指南卡",
    category: "UI / 信息图",
    tags: ["UI", "旅行", "信息图"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/ui_case29/output.jpg",
    summary: "用 App 卡片承载路线、天气和景点推荐。",
    promptZh: `生成一张城市旅行指南 App 卡片截图。
城市：杭州。内容包含天气、三处景点、半日路线、预算提示和收藏按钮。
视觉：清爽移动端 UI，轻量地图线条，西湖照片卡片，绿色与蓝色点缀。
要求：中文信息层级清晰，按钮和图标像真实产品，不要落地页风格。`,
    promptEn: `Create a mobile city travel guide app card screenshot.
City: Hangzhou. Include weather, three attractions, a half-day route, budget tips, and a save button.
Visuals: clean mobile UI, lightweight map lines, West Lake photo card, green and blue accents.
Requirements: clear Chinese information hierarchy; buttons and icons should feel like a real product, not a landing page.`
  },
  {
    id: "img-cyberpunk-ui",
    media: "image",
    model: "GPT Image 2",
    title: "赛博霓虹 UI 系统",
    category: "UI / 设计系统",
    tags: ["UI", "科幻", "设计系统"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/ui_case38/output.jpg",
    summary: "暗色组件、数据卡片和霓虹状态色。",
    promptZh: `生成一张赛博朋克风格的 UI 设计系统展示图。
内容：按钮、输入框、数据卡片、状态徽章、侧边导航、图表组件。
视觉：深色背景，青色、洋红和琥珀色高光，细线网格，玻璃质感但信息可读。
要求：所有组件像真实产品可用，不要纯装饰图。`,
    promptEn: `Create a cyberpunk UI design system showcase.
Content: buttons, inputs, data cards, status badges, side navigation, and chart components.
Visuals: dark background, cyan, magenta, and amber highlights, thin grid lines, glassy feel while keeping information readable.
Requirements: all components should look usable in a real product, not just decorative art.`
  },
  {
    id: "img-game-screenshot",
    media: "image",
    model: "GPT Image 2",
    title: "复古游戏截图混搭",
    category: "游戏 / 截图",
    tags: ["游戏", "截图", "像素"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/comparison_case30/output.jpg",
    summary: "测试游戏 HUD、像素风和真实屏摄感。",
    promptZh: `生成一张原创复古冒险游戏截图。
画面：地下洞穴、像素角色、发光矿石、简洁 HUD、右上角小地图。
风格：16-bit 像素艺术与现代光影混合，像从掌机屏幕拍下来的截图。
要求：不要引用现有游戏名称或角色，UI 数字清晰，画面有探索感。`,
    promptEn: `Create an original retro adventure game screenshot.
Scene: underground cave, pixel character, glowing crystals, simple HUD, mini-map in the top right.
Style: 16-bit pixel art mixed with modern lighting, like a photo of a handheld console screen.
Requirements: no existing game names or characters, readable UI numbers, strong sense of exploration.`
  },
  {
    id: "img-open-world-screenshot",
    media: "image",
    model: "GPT Image 2",
    title: "开放世界游戏截图",
    category: "游戏 / 真实感",
    tags: ["游戏", "截图", "真实摄影"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/comparison_case34/output.jpg",
    summary: "游戏画面、任务 UI 和屏摄质感结合。",
    promptZh: `生成一张原创开放世界游戏截图。
画面：雨后工业港口，玩家角色站在集装箱旁，远处有城市灯光和无人机。
UI：左下角小地图，右侧任务目标，顶部天气和时间。
风格：真实 4K 游戏画面，轻微手持屏摄模糊，HUD 清晰但不过度抢眼。`,
    promptEn: `Create an original open-world game screenshot.
Scene: an industrial harbor after rain. The player character stands beside containers; city lights and drones appear in the distance.
UI: mini-map at bottom left, mission objective on the right, weather and time at the top.
Style: realistic 4K game visuals, slight handheld screen-photo blur, HUD clear but not distracting.`
  },
  {
    id: "img-green-tea-kit",
    media: "image",
    model: "GPT Image 2",
    title: "绿茶护肤套装广告",
    category: "产品 / 商业摄影",
    tags: ["产品", "广告", "真实摄影"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/portrait_case78/output.jpg",
    summary: "清爽产品包装、材质和广告构图。",
    promptZh: `生成一张绿茶主题护肤套装商业摄影。
画面：打开的礼盒正面展示，包含洁面、面霜、精华和小样，旁边有绿茶叶、水滴和磨砂玻璃。
光线：柔和自然光，浅绿色背景，干净阴影。
要求：包装文字清晰，品牌名使用虚构名称「LUMA TEA」，整体像电商主图。`,
    promptEn: `Create a commercial product photo for a green-tea skincare kit.
Scene: an open gift box shown frontally, containing cleanser, cream, serum, and samples, with tea leaves, water drops, and frosted glass nearby.
Lighting: soft natural light, pale green background, clean shadows.
Requirements: packaging text readable, fictional brand name "LUMA TEA", overall like an ecommerce hero image.`
  },
  {
    id: "img-strawberry-softserve",
    media: "image",
    model: "GPT Image 2",
    title: "草莓冰淇淋产品摄影",
    category: "产品 / 食物",
    tags: ["产品", "食物", "真实摄影"],
    aspect: "tall",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/portrait_case79/output.jpg",
    summary: "甜品微距、奶油质感和包装广告。",
    promptZh: `生成一张草莓软冰淇淋产品摄影。
主体：粉色草莓软冰淇淋放在透明杯中，顶部有草莓碎和薄荷叶。
环境：冷凝水、浅粉背景、散落草莓、柔和反光板光线。
风格：真实商业摄影，奶油纹理清晰，适合甜品店广告，不能有品牌水印。`,
    promptEn: `Create a product photo of strawberry soft-serve ice cream.
Subject: pink strawberry soft serve in a clear cup, topped with strawberry bits and mint leaves.
Environment: condensation, pale pink background, scattered strawberries, soft reflector lighting.
Style: realistic commercial photography, clear creamy texture, suitable for a dessert shop ad, no brand watermark.`
  },
  {
    id: "img-laptop-ui-mockup",
    media: "image",
    model: "GPT Image 2",
    title: "笔记本 UI 展示图",
    category: "UI / 产品展示",
    tags: ["UI", "产品", "SaaS"],
    aspect: "wide",
    image: "https://raw.githubusercontent.com/EvoLinkAI/awesome-gpt-image-2-prompts/main/images/portrait_case80/output.jpg",
    summary: "把界面 mockup 融入真实桌面摄影。",
    promptZh: `生成一张现代笔记本电脑上的 SaaS 产品 UI 展示图。
场景：木质桌面、咖啡杯、柔和日光，屏幕展示一个数据分析仪表盘。
UI：左侧导航、顶部筛选、图表卡片、表格和导出按钮。
风格：真实产品摄影，屏幕内容锐利可读，背景自然虚化。`,
    promptEn: `Create a modern SaaS UI mockup displayed on a laptop.
Scene: wooden desk, coffee cup, soft daylight; the screen shows a data analytics dashboard.
UI: left navigation, top filters, chart cards, table, and export button.
Style: realistic product photography, sharp readable screen content, naturally blurred background.`
  },
  {
    id: "vid-luxury-teaser",
    media: "video",
    model: "Seedance 2.0",
    title: "奢侈品牌预告片",
    category: "广告 / 品牌",
    tags: ["广告", "品牌", "高定"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/c8730c3651468b9846611f4cbf6e57a5/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/c8730c3651468b9846611f4cbf6e57a5/downloads/default.mp4",
    summary: "高端品牌质感、人物与动物同框的广告片。",
    promptZh: `15 秒奢侈品牌预告片。
画面：年轻模特在极简黑色空间中缓慢走动，一只黑豹从阴影里经过，镜头有自然手持微晃。
镜头：特写产品纹理、模特眼神、黑豹轮廓，最后切到品牌包装盒。
风格：高端商业广告、低饱和、硬朗高光、克制音乐，无字幕。`,
    promptEn: `A 15-second luxury brand teaser.
Scene: a young model walks slowly through a minimal black space while a black panther passes through the shadows; natural handheld micro-shake.
Shots: close-ups of product texture, the model's gaze, the panther silhouette, ending on a premium packaging box.
Style: high-end commercial, low saturation, crisp highlights, restrained music, no subtitles.`
  },
  {
    id: "vid-house-timelapse",
    media: "video",
    model: "Seedance 2.0",
    title: "现代住宅建造延时",
    category: "建筑 / 延时",
    tags: ["建筑", "延时", "真实摄影"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/3b7a0bb9a6ee651c384e370a3afd27ef/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/3b7a0bb9a6ee651c384e370a3afd27ef/downloads/default.mp4",
    summary: "从空地到完工住宅的连贯施工延时。",
    promptZh: `15 秒现代住宅建造延时视频。
0-3 秒：空地和测量线出现，工人进场。
3-8 秒：地基、钢筋、墙体、脚手架快速成型。
8-12 秒：屋顶、窗户、外墙涂装和景观同步完成。
12-15 秒：镜头后退，展示完工后的现代住宅。真实施工细节、自然光、流畅转场。`,
    promptEn: `A 15-second modern house construction time-lapse.
0-3s: empty plot and measurement lines appear as workers arrive.
3-8s: foundation, rebar, walls, and scaffolding rapidly form.
8-12s: roof, windows, exterior paint, and landscaping complete in sync.
12-15s: camera pulls back to reveal the finished modern house. Real construction details, natural light, smooth transitions.`
  },
  {
    id: "vid-whale-fpv",
    media: "video",
    model: "Seedance 2.0",
    title: "鲸跃 FPV 航拍",
    category: "自然 / FPV",
    tags: ["FPV", "自然", "航拍"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/82e2b12ae8d5ba7ed866e26fa2f4a01f/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/82e2b12ae8d5ba7ed866e26fa2f4a01f/downloads/default.mp4",
    summary: "高速 FPV 穿越、鲸鱼跃出和游艇揭示。",
    promptZh: `12 秒 FPV 航拍镜头。
镜头从海面低空高速前进，穿过一座自然石拱前，座头鲸突然跃出水面。
无人机迅速侧翻躲过浪花，再沿水面掠过，最后揭示远处白色游艇。
风格：真实航拍、强速度感、自然海浪、没有字幕和水印。`,
    promptEn: `A 12-second FPV drone shot.
The camera races low over the ocean; just before passing through a natural stone arch, a humpback whale suddenly jumps out of the water.
The drone rolls aside to avoid the splash, skims over the sea, and finally reveals a white yacht in the distance.
Style: realistic drone cinematography, strong speed, natural waves, no subtitles or watermark.`
  },
  {
    id: "vid-cyberpunk-subway",
    media: "video",
    model: "Seedance 2.0",
    title: "赛博地铁黑客动作",
    category: "动作 / 科幻",
    tags: ["科幻", "动作", "赛博"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/8aa97852f8e2cb5a10ed05f4aa301a87/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/8aa97852f8e2cb5a10ed05f4aa301a87/downloads/default.mp4",
    summary: "地铁车厢、霓虹屏幕和紧张动作镜头。",
    promptZh: `12 秒赛博朋克地铁动作片段。
0-4 秒：黑客在空荡地铁车厢里快速输入代码，车窗外霓虹光飞过。
4-8 秒：警报响起，屏幕闪红，镜头手持跟拍她冲向车门。
8-12 秒：车门打开，她跳入雨夜站台，电子广告牌反射在水面。
风格：真实电影感、蓝紫霓虹、紧张节奏、无字幕。`,
    promptEn: `A 12-second cyberpunk subway action sequence.
0-4s: a hacker types rapidly inside an empty subway car as neon lights streak past the windows.
4-8s: alarms sound, screens flash red, handheld camera follows her rushing toward the door.
8-12s: doors open and she jumps onto a rainy platform, electronic billboards reflected on the wet floor.
Style: realistic cinematic look, blue-purple neon, tense pacing, no subtitles.`
  },
  {
    id: "vid-sci-fi-lab",
    media: "video",
    model: "Seedance 2.0",
    title: "科幻实验室通讯",
    category: "科幻 / 室内戏",
    tags: ["科幻", "分镜", "实验室"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/4a0a30c529c0e357d14fb3f2aca8ec69/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/4a0a30c529c0e357d14fb3f2aca8ec69/downloads/default.mp4",
    summary: "科学家、全息屏和通讯故障的短剧情。",
    promptZh: `10 秒科幻实验室通讯场景。
画面：夜间实验室，科学家站在蓝色全息屏前，屏幕信号断续闪烁。
镜头：从背后推近到侧脸特写，背景设备低频闪光，玻璃上有雨水反射。
动作：她按下通讯按钮，说话时屏幕短暂出现未知星球坐标。
风格：冷色、真实室内电影光、克制紧张感。`,
    promptEn: `A 10-second sci-fi lab communication scene.
Scene: a night laboratory where a scientist stands before a blue holographic screen; the signal flickers intermittently.
Camera: push in from behind to a side-face close-up; background equipment emits low-frequency flashes; rain reflects on the glass.
Action: she presses the communication button, and unknown planet coordinates briefly appear on the screen.
Style: cool tones, realistic interior cinematic lighting, restrained tension.`
  },
  {
    id: "vid-ocean-colossus",
    media: "video",
    model: "Seedance 2.0",
    title: "风暴海面巨像",
    category: "奇观 / 电影感",
    tags: ["奇观", "自然", "电影"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/cebd6e4f44489deaca985d431fcbf8d5/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/cebd6e4f44489deaca985d431fcbf8d5/downloads/default.mp4",
    summary: "海上风暴、巨型轮廓和宏大尺度。",
    promptZh: `15 秒风暴海面奇观视频。
0-5 秒：低机位贴近海浪，暴雨和闪电照亮远处黑影。
5-10 秒：巨大人形轮廓从海雾中缓慢站起，海水从肩膀倾泻。
10-15 秒：镜头后退，显示小船与巨像的尺度对比。
风格：宏大灾难片、真实水体、低饱和、强体积光。`,
    promptEn: `A 15-second ocean storm spectacle.
0-5s: low angle near the waves; rain and lightning reveal a dark shape in the distance.
5-10s: a gigantic humanoid silhouette slowly rises from the sea mist, water pouring from its shoulders.
10-15s: camera pulls back to show the scale contrast between a small boat and the colossus.
Style: epic disaster film, realistic water simulation, low saturation, strong volumetric light.`
  },
  {
    id: "vid-biker-dusk",
    media: "video",
    model: "Seedance 2.0",
    title: "黄昏摩托骑行",
    category: "生活方式 / 运动",
    tags: ["运动", "黄昏", "真实摄影"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/e601ba787d7bb3040d786a7ce608b8d4/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/e601ba787d7bb3040d786a7ce608b8d4/downloads/default.mp4",
    summary: "道路跟拍、夕阳逆光和运动品牌氛围。",
    promptZh: `12 秒黄昏摩托骑行广告片。
镜头：低角度贴近公路跟拍摩托车轮，随后切到骑手背影穿过海边弯道。
光线：金色夕阳、镜头眩光、路面轻微反射。
结尾：无人机视角拉高，显示海岸线和远处城市灯光。
风格：真实运动品牌广告，速度感强，无字幕。`,
    promptEn: `A 12-second dusk motorcycle riding commercial.
Camera: low-angle road tracking shot close to the motorcycle wheel, then cut to the rider's back through a coastal curve.
Lighting: golden sunset, lens flare, subtle road reflections.
Ending: drone pulls up to reveal the coastline and distant city lights.
Style: realistic sports brand commercial, strong sense of speed, no subtitles.`
  },
  {
    id: "vid-oreo-baking",
    media: "video",
    model: "Seedance 2.0",
    title: "电影感烘焙教程",
    category: "食物 / 教程",
    tags: ["食物", "教程", "微距"],
    aspect: "wide",
    image: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/552735c513e3412551e9168392190bd4/thumbnails/thumbnail.jpg",
    video: "https://customer-qs6wnyfuv0gcybzj.cloudflarestream.com/552735c513e3412551e9168392190bd4/downloads/default.mp4",
    summary: "食材微距、步骤节奏和厨房广告光。",
    promptZh: `15 秒电影感烘焙教程。
0-4 秒：饼干被压碎，粉末落入玻璃碗，微距慢动作。
4-8 秒：倒入牛奶和奶油，搅拌形成丝滑纹理。
8-12 秒：面糊进入烤盘，镜头跟随刮刀扫过表面。
12-15 秒：成品切块上桌，热气与巧克力光泽清晰。
风格：真实厨房广告、暖光、ASMR 声音、无字幕。`,
    promptEn: `A 15-second cinematic baking tutorial.
0-4s: cookies are crushed; crumbs fall into a glass bowl in macro slow motion.
4-8s: milk and cream pour in, stirring into a smooth texture.
8-12s: batter enters a baking tray; camera follows the spatula sweeping the surface.
12-15s: finished dessert is sliced and served, with steam and chocolate gloss visible.
Style: realistic kitchen commercial, warm light, ASMR sound, no subtitles.`
  }
];

const generatedCases = Array.isArray(window.PROMPT_FREEPORT_CASES) ? window.PROMPT_FREEPORT_CASES : [];
const qualityBlockedCaseIds = new Set(
  Array.isArray(window.PROMPT_FREEPORT_BLOCKED_CASE_IDS)
    ? window.PROMPT_FREEPORT_BLOCKED_CASE_IDS
    : []
);

function hasDisplayMedia(item) {
  if (item.media === "image") return mediaImageCandidates(item).length > 0;
  if (item.media === "video") return Boolean(item.video && mediaImageCandidates(item).length);
  return false;
}

function dedupeCombinedCases(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!hasDisplayMedia(item)) return false;
    const keys = [item.image && `image:${item.image}`, item.video && `video:${item.video}`].filter(Boolean);
    if (keys.some((key) => seen.has(key))) return false;
    keys.forEach((key) => seen.add(key));
    return true;
  });
}

function isEcommerceCase(item) {
  const text = [
    item.title,
    item.category,
    item.summary,
    ...(Array.isArray(item.tags) ? item.tags : []),
    item.promptZh,
    item.promptEn
  ].join(" ");
  return /电商|商品详情|商品页|产品页|购物|购买|价格|SKU|e-?commerce|shopping|shop|product\s+(page|detail|listing)|packaging/i.test(text);
}

function withDerivedTags(item) {
  const tags = Array.isArray(item.tags) ? item.tags.filter(Boolean) : [];
  if (!isEcommerceCase(item) || tags.includes("电商")) {
    return { ...item, tags };
  }
  return { ...item, tags: [...tags, "电商"] };
}

const cases = dedupeCombinedCases(
  generatedCases
    .filter((item) => !qualityBlockedCaseIds.has(item.id))
    .map((item) => ({
      sourceName:
        item.sourceName ||
        (item.model === "Seedance 2.0"
          ? "YouMind-OpenLab/awesome-seedance-2-prompts"
          : item.media === "image"
            ? "EvoLinkAI/awesome-gpt-image-2-prompts"
            : "社区案例"),
      sourceUrl:
        item.sourceUrl ||
        (item.model === "Seedance 2.0"
          ? "https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts"
          : item.media === "image"
            ? "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts"
            : ""),
      licenseStatus: item.licenseStatus || "needs-review",
      commercialUse: item.commercialUse || "needs-review",
      licenseNote:
        item.licenseNote ||
        "社区来源的提示词文本已做中英文整理；预览媒体、人物肖像、品牌/IP 和平台输出权利仍需正式商用前逐条复核。",
      ...item
    }))
).map(withDerivedTags);

const PAGE_SIZE = 84;

const state = {
  filter: "all",
  tag: "all",
  license: "all",
  search: "",
  visible: [...cases],
  limit: PAGE_SIZE
};

const galleryGrid = document.querySelector("#galleryGrid");
const resourceList = document.querySelector("#resourceList");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const caseCount = document.querySelector("#caseCount");
const caseBreakdown = document.querySelector("#caseBreakdown");
const loadMoreButton = document.querySelector("#loadMoreButton");
const toast = document.querySelector("#toast");
const promptModal = document.querySelector("#promptModal");
const modalTitle = document.querySelector("#modalTitle");
const modalMeta = document.querySelector("#modalMeta");
const modalPrompt = document.querySelector("#modalPrompt");
const modalCopyPrompt = document.querySelector("#modalCopyPrompt");
const mediaModal = document.querySelector("#mediaModal");
const mediaTitle = document.querySelector("#mediaTitle");
const mediaMeta = document.querySelector("#mediaMeta");
const mediaViewer = document.querySelector("#mediaViewer");
let activeModalItem = null;
const VIEW_STORAGE_KEY = "prompt-freeport-view-counts-v1";
let viewCounts = loadViewCounts();

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadViewCounts() {
  try {
    const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveViewCounts() {
  try {
    window.localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(viewCounts));
  } catch {
    // localStorage can be blocked in private contexts; the UI still updates in memory.
  }
}

function getViewStats(id) {
  const stats = viewCounts[id] || {};
  return {
    media: Number(stats.media) || 0,
    prompt: Number(stats.prompt) || 0
  };
}

function totalViews(id) {
  const stats = getViewStats(id);
  return stats.media + stats.prompt;
}

function formatViewCount(count) {
  if (count > 9999) return `${Math.floor(count / 1000)}k`;
  if (count > 999) return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(count);
}

function viewLabel(item) {
  const stats = getViewStats(item.id);
  const total = stats.media + stats.prompt;
  return `浏览 ${total} 次，媒体 ${stats.media} 次，提示词 ${stats.prompt} 次`;
}

function cardViewBadge(item) {
  return `
    <span class="view-badge" data-view-badge data-id="${escapeHtml(item.id)}" title="${escapeHtml(viewLabel(item))}" aria-label="${escapeHtml(viewLabel(item))}">
      <i data-lucide="eye"></i>
      <span data-view-count>${formatViewCount(totalViews(item.id))}</span>
    </span>
  `;
}

function updateViewBadge(id) {
  document.querySelectorAll("[data-view-badge]").forEach((badge) => {
    if (badge.dataset.id !== id) return;
    const item = cases.find((entry) => entry.id === id);
    if (!item) return;
    const count = badge.querySelector("[data-view-count]");
    if (count) count.textContent = formatViewCount(totalViews(id));
    const label = viewLabel(item);
    badge.setAttribute("title", label);
    badge.setAttribute("aria-label", label);
  });
}

function recordView(item, kind) {
  if (!item?.id) return;
  const stats = getViewStats(item.id);
  viewCounts = {
    ...viewCounts,
    [item.id]: {
      ...stats,
      [kind]: stats[kind] + 1
    }
  };
  saveViewCounts();
  updateViewBadge(item.id);
}

function isCommercialClear(item) {
  return ["clear", "commercial-clear", "original-template", "cc0", "mit"].includes(item.commercialUse);
}

function stripPromptPrefix(value) {
  return String(value || "").replace(/^Original source prompt:\s*/i, "").trim();
}

function hasCjk(value) {
  return /[\u3400-\u9fff]/u.test(String(value || ""));
}

function sourcePrompt(item) {
  const zh = stripPromptPrefix(item.promptZh);
  const en = stripPromptPrefix(item.promptEn);
  const language = String(item.sourceLanguage || item.language || "").toLowerCase();

  if (language.startsWith("zh") || language.startsWith("cn")) return zh || en;
  if (language.startsWith("en")) return en || zh;
  if (hasCjk(zh)) return zh || en;
  return zh || en;
}

function caseCopyText(item) {
  return sourcePrompt(item);
}

async function copyText(text, message = "已复制") {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  showToast(message);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1600);
}

function renderResources() {
  const auditCounts = window.PROMPT_FREEPORT_AUDIT?.counts;
  const mediaSummary = auditCounts
    ? `当前数据：${cases.length} 条真实媒体案例，图片 ${cases.filter((item) => item.media === "image").length} 条，视频 ${cases.filter((item) => item.media === "video").length} 条；所有卡片都有真实预览媒体。`
    : "当前数据只显示有真实图片或真实视频封面的案例。";
  resourceList.textContent = [
    mediaSummary,
    "参考资源：",
    ...resources.map((resource) => {
      return `${resource.title}（${resource.note}）`;
    }),
    "来源说明：真实媒体和公开社区案例作为来源参考与审美样例展示；正式商用前仍需逐条核查作者、平台、肖像、商标、音乐和第三方素材权利。"
  ].join(" · ");
}

function uniqueUrls(urls) {
  return urls.filter(Boolean).filter((url, index, list) => list.indexOf(url) === index);
}

function mediaImageCandidates(item) {
  if (item.media === "video") {
    return uniqueUrls([item.thumbnail, item.image]);
  }
  return uniqueUrls([item.image, item.thumbnail]);
}

function mediaFrameImage(item) {
  const candidates = mediaImageCandidates(item);
  if (!candidates.length) return "";

  return `
    <img
      src="${escapeHtml(candidates[0])}"
      alt="${escapeHtml(item.title)}"
      loading="lazy"
      data-fit-media
      data-media-image
      data-media-candidates="${escapeHtml(JSON.stringify(candidates))}"
    />
    <span class="media-error-state" aria-hidden="true">
      <i data-lucide="image-off"></i>
      <span>预览暂不可用</span>
    </span>
  `;
}

function cardMedia(item) {
  if (!hasDisplayMedia(item)) {
    return "";
  }
  const isVideo = item.media === "video";
  const typeIcon = isVideo ? "play" : "image";
  const typeText = isVideo ? "视频" : "图片";

  if (isVideo) {
    return `
      <div class="media-frame is-video ${item.aspect || ""}" data-action="media" data-id="${escapeHtml(item.id)}" role="button" tabindex="0" aria-label="放大预览 ${escapeHtml(item.title)}">
        ${mediaFrameImage(item)}
        <span class="media-chip"><i data-lucide="${typeIcon}"></i>${typeText}</span>
        ${cardViewBadge(item)}
        <span class="media-expand" aria-hidden="true"><i data-lucide="maximize-2"></i></span>
      </div>
    `;
  }

  return `
    <div class="media-frame ${item.aspect || ""}" data-action="media" data-id="${escapeHtml(item.id)}" role="button" tabindex="0" aria-label="放大预览 ${escapeHtml(item.title)}">
      ${mediaFrameImage(item)}
      <span class="media-chip"><i data-lucide="${typeIcon}"></i>${typeText}</span>
      ${cardViewBadge(item)}
      <span class="media-expand" aria-hidden="true"><i data-lucide="maximize-2"></i></span>
    </div>
  `;
}

function matchesTag(item) {
  if (state.tag === "all") return true;
  return (item.tags || []).some((tag) => tag.toLowerCase().includes(state.tag.toLowerCase()));
}

function hasRealMedia(item) {
  return hasDisplayMedia(item);
}

function renderCases() {
  const query = state.search.trim().toLowerCase();
  state.visible = cases.filter((item) => {
    const matchesFilter = state.filter === "all" || item.media === state.filter;
    const matchesLicense =
      state.license === "all" ||
      (state.license === "media" && hasRealMedia(item)) ||
      (state.license === "commercial" && isCommercialClear(item)) ||
      (state.license === "review" && !isCommercialClear(item));
    const haystack = [
      item.title,
      item.model,
      item.category,
      item.summary,
      (item.tags || []).join(" "),
      item.sourceName,
      item.licenseNote,
      item.promptZh,
      item.promptEn
    ]
      .join(" ")
      .toLowerCase();
    return (
      matchesFilter &&
      matchesLicense &&
      matchesTag(item) &&
      (!query || haystack.includes(query))
    );
  });

  const imageCount = state.visible.filter((item) => item.media === "image").length;
  const videoCount = state.visible.filter((item) => item.media === "video").length;
  const displayItems = state.visible.slice(0, state.limit);

  caseCount.textContent = state.visible.length;
  caseBreakdown.textContent = `图片 ${imageCount} · 视频 ${videoCount} · 当前显示 ${displayItems.length}`;
  emptyState.hidden = state.visible.length > 0;
  if (loadMoreButton) {
    loadMoreButton.hidden = displayItems.length >= state.visible.length;
  }

  galleryGrid.innerHTML = displayItems
    .map((item) => {
      const tags = (item.tags || []).map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");
      const modelClass = item.media === "video" ? "video-model" : "model";

      return `
        <article class="prompt-card" data-id="${item.id}">
          ${cardMedia(item)}
          <div class="card-body">
            <div class="meta-line">
              <span class="pill ${modelClass}">${escapeHtml(item.model)}</span>
              ${tags}
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <div class="copy-row" aria-label="${escapeHtml(item.title)} 复制提示词">
              <button class="copy-button" type="button" data-action="copy" data-id="${item.id}">
                <i data-lucide="copy"></i>复制
              </button>
              <button class="copy-button view-prompt" type="button" data-action="view" data-id="${item.id}">
                <i data-lucide="scan-text"></i>查看提示词
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  hydrateMediaImages();
  observeCards();
  refreshIcons();
}

function setFrameRatio(media) {
  const frame = media.closest(".media-frame");
  if (!frame) return;

  const width = media.naturalWidth || media.videoWidth;
  const height = media.naturalHeight || media.videoHeight;
  if (!width || !height) return;

  frame.style.setProperty("--media-ratio", `${width} / ${height}`);
}

function parseMediaCandidates(media) {
  try {
    const candidates = JSON.parse(media.dataset.mediaCandidates || "[]");
    return Array.isArray(candidates) ? candidates.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function markMediaLoaded(media) {
  const frame = media.closest(".media-frame");
  const viewer = media.closest(".media-viewer");
  if (!frame) {
    viewer?.classList.remove("is-media-loading", "is-media-error");
    return;
  }
  frame.classList.remove("is-media-loading", "is-media-error");
  frame.dataset.currentImage = media.currentSrc || media.src;
  setFrameRatio(media);
}

function markMediaFailed(media) {
  const frame = media.closest(".media-frame");
  const viewer = media.closest(".media-viewer");
  if (!frame) {
    viewer?.classList.remove("is-media-loading");
    viewer?.classList.add("is-media-error");
    return;
  }
  frame.classList.remove("is-media-loading");
  frame.classList.add("is-media-error");
  delete frame.dataset.currentImage;
}

function tryNextMediaCandidate(media) {
  const candidates = parseMediaCandidates(media);
  const currentIndex = Number(media.dataset.mediaCandidateIndex || 0);
  const nextIndex = currentIndex + 1;

  if (nextIndex < candidates.length) {
    media.dataset.mediaCandidateIndex = String(nextIndex);
    media.src = candidates[nextIndex];
    return;
  }

  markMediaFailed(media);
}

function hydrateMediaImages(root = document) {
  root.querySelectorAll("[data-media-image]").forEach((media) => {
    if (media.dataset.mediaHydrated === "true") return;
    const frame = media.closest(".media-frame");
    media.dataset.mediaHydrated = "true";
    media.dataset.mediaCandidateIndex = media.dataset.mediaCandidateIndex || "0";
    frame?.classList.add("is-media-loading");
    media.closest(".media-viewer")?.classList.add("is-media-loading");

    media.addEventListener("load", () => markMediaLoaded(media));
    media.addEventListener("error", () => tryNextMediaCandidate(media));

    if (media.complete) {
      if (media.naturalWidth > 0) {
        markMediaLoaded(media);
      } else {
        tryNextMediaCandidate(media);
      }
    }
  });
}

function observeCards() {
  const cards = [...document.querySelectorAll(".prompt-card")];
  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "80px 0px 80px", threshold: 0.08 }
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index % 8, 7) * 35}ms`;
    observer.observe(card);
  });
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    state.limit = PAGE_SIZE;
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("is-active", item === button));
    renderCases();
  });
});

document.querySelectorAll(".license-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.license = button.dataset.license;
    state.limit = PAGE_SIZE;
    document.querySelectorAll(".license-tab").forEach((item) => item.classList.toggle("is-active", item === button));
    renderCases();
  });
});

document.querySelectorAll(".tag-filter").forEach((button) => {
  button.addEventListener("click", () => {
    state.tag = button.dataset.tag;
    state.limit = PAGE_SIZE;
    document.querySelectorAll(".tag-filter").forEach((item) => item.classList.toggle("is-active", item === button));
    renderCases();
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  state.limit = PAGE_SIZE;
  renderCases();
});

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    state.limit += PAGE_SIZE;
    renderCases();
  });
}

galleryGrid.addEventListener("click", (event) => {
  const mediaFrame = event.target.closest("[data-action='media']");
  if (mediaFrame) {
    const item = cases.find((entry) => entry.id === mediaFrame.dataset.id);
    if (item) openMediaModal(item, { imageUrl: mediaFrame.dataset.currentImage });
    return;
  }

  const viewButton = event.target.closest("[data-action='view']");
  if (viewButton) {
    const item = cases.find((entry) => entry.id === viewButton.dataset.id);
    if (item) openPromptModal(item);
    return;
  }

  const button = event.target.closest(".copy-button[data-action='copy']");
  if (!button) return;

  const item = cases.find((entry) => entry.id === button.dataset.id);
  if (!item) return;

  copyText(caseCopyText(item), `已复制：${item.title} 提示词`);
});

galleryGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const mediaFrame = event.target.closest("[data-action='media']");
  if (!mediaFrame) return;
  event.preventDefault();
  const item = cases.find((entry) => entry.id === mediaFrame.dataset.id);
  if (item) openMediaModal(item, { imageUrl: mediaFrame.dataset.currentImage });
});

document.querySelector("#copySubmitTemplate").addEventListener("click", () => {
  const template = `# Prompt Freeport 投稿模板
标题：
模型：GPT Image 2 / Sora 2.0 / 其他
媒体：图片 / 视频
标签：
预览图或视频链接：
提示词：
来源文字：
投稿人：`;
  copyText(template, "已复制投稿模板");
});

function openPromptModal(item) {
  activeModalItem = item;
  recordView(item, "prompt");
  modalTitle.textContent = item.title;
  modalMeta.textContent = `${item.model} · ${item.media === "image" ? "图片" : "视频"} · ${item.category}`;
  modalPrompt.textContent = sourcePrompt(item);
  promptModal.hidden = false;
  document.body.style.overflow = "hidden";
  refreshIcons();
}

function closePromptModal() {
  promptModal.hidden = true;
  activeModalItem = null;
  document.body.style.overflow = "";
}

function openMediaModal(item, options = {}) {
  if (!hasDisplayMedia(item)) return;
  const candidates = uniqueUrls([options.imageUrl, ...mediaImageCandidates(item)]);
  const poster = candidates[0] || item.thumbnail || item.image;
  const isPlayableVideo = item.media === "video" && item.video;
  recordView(item, "media");
  mediaTitle.textContent = item.title;
  mediaMeta.textContent = `${item.model} · ${isPlayableVideo ? "视频" : "图片"} · ${item.category}`;
  mediaViewer.className = "media-viewer";
  mediaViewer.innerHTML = isPlayableVideo
    ? `<video src="${escapeHtml(item.video)}" poster="${escapeHtml(poster)}" controls autoplay muted playsinline></video>`
    : `<img src="${escapeHtml(poster)}" alt="${escapeHtml(item.title)}" data-media-image data-media-candidates="${escapeHtml(JSON.stringify(candidates))}" />`;
  mediaModal.hidden = false;
  document.body.style.overflow = "hidden";
  hydrateMediaImages(mediaViewer);
  refreshIcons();
}

function closeMediaModal() {
  mediaModal.hidden = true;
  mediaViewer.innerHTML = "";
  mediaViewer.className = "media-viewer";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closePromptModal);
});

document.querySelectorAll("[data-close-media]").forEach((button) => {
  button.addEventListener("click", closeMediaModal);
});

modalCopyPrompt.addEventListener("click", () => {
  if (activeModalItem) {
    copyText(caseCopyText(activeModalItem), `已复制：${activeModalItem.title} 提示词`);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mediaModal.hidden) {
    closeMediaModal();
    return;
  }

  if (event.key === "Escape" && !promptModal.hidden) {
    closePromptModal();
  }
});

renderResources();
renderCases();
refreshIcons();
