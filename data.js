/**
 * data.js
 * 主题：2026年6月 · 全球市值50大
 * 副题：英伟达4.85万亿登顶，AI重塑全球资本版图
 * 版本：2026-06-27（黑咖说 · 视频号版）
 *
 * 数据来源：Visual Capitalist, 2026-06-26
 * 数据日期：截至2026年6月26日
 *
 * 图表方案：全矩形树图 + 饼图（零柱状图）
 * 配色：深蓝与金色 #0a1628 × #f5a623
 * 风格：冷静 · 有洞见 · 带思辨性 · 克制平衡
 *
 * 图标加载：模块加载时自动从 /assets/logos/ 预加载所有 SVG
 *           必须使用 HTTP 服务器访问（http://），不能直接用 file://
 */

// ================================================================
// 品牌配置
// ================================================================
export const BRAND_CONFIG = {
  logo: './logo.png',
  name: '黑咖说',
  slogan: '深度解构商业与科技',
};

export const DISCLAIMER_CONFIG = {
  title: '[DECLARATION] 内容声明',
  text: '本内容为基于公开市场资讯与专家言论的科普分享，旨在提供多元思考视角，不构成任何形式的投资建议或财务规划指导。市场有风险，投资需谨慎。具体决策请咨询专业金融顾问。',
};

export const THEME_CONFIG = {
  primaryColor: '#2a1a3e',
  accentColor: '#f5a623',
  accentLight: '#f7c35c',
  primaryBgLight: '#f0f2f5',
  borderColor: 'rgba(42, 26, 62, 0.12)',
  footerText: 'AI浪潮 · 市值重构 · 万亿俱乐部',
};

export const VOICE_CONFIG = {
  defaultVoice: 'zh-CN-YunjianNeural',
  rate: 1.0,
  options: [
    { value: 'zh-CN-YunjianNeural', label: '沉稳讲述者（云健）' },
    { value: 'zh-CN-XiaoxiaoNeural', label: '理性分析（晓晓）' },
    { value: 'zh-CN-YunxiNeural', label: '干练解说（云希）' },
  ],
};

export const WELCOME_CONFIG = {
  mainTitle: '全球市值五十大·2026年6月',
  subTitle: 'AI重塑万亿版图',
  descText: '英伟达以4.85万亿美元登顶，苹果、Alphabet、微软紧随其后。SpaceX上市即冲入万亿俱乐部。物理科技14家、非物科技8家，金融8强合计$4.3T，非美13强$9.8T，万亿俱乐部扩容至7家。10张卡片，看懂全球资本的流向与重构。',
  actionBtnText: '开始播放',
};

// ================================================================
// 工具函数：缓动动画 (ease-out, 3秒)
// ================================================================
function animateDraw(ctx, drawFn, duration = 3000) {
  const startTime = performance.now();

  function frame(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawFn(eased);
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }
  requestAnimationFrame(frame);
}

// ================================================================
// 统一图片（备用）
// ================================================================
const UNIFIED_IMG = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800';

// ================================================================
// ═══════════════════════════════════════════════════════════════
//  ★★★ 图标加载系统（fetch 从 assets/logos/ 加载） ★★★
// ═══════════════════════════════════════════════════════════════
// ================================================================

// ---------- 图标文件名映射 ----------
const LOGO_FILES = {
  nvidia: 'nvidia.svg',
  apple: 'apple.svg',
  alphabet: 'alphabet.svg',
  microsoft: 'microsoft.svg',
  amazon: 'amazon.svg',
  tsmc: 'tsmc.svg',
  spacex: 'spacex.svg',
  broadcom: 'broadcom.svg',
  // 后续新增图标在这里加一行
};

// ---------- 缓存 ----------
const LOGO_CACHE = {};

// ---------- 占位图标 ----------
const PLACEHOLDER_PATH = 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.6c3.536 0 6.4 2.864 6.4 6.4s-2.864 6.4-6.4 6.4-6.4-2.864-6.4-6.4 2.864-6.4 6.4-6.4zm0 2.4c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 2.4c.884 0 1.6.716 1.6 1.6s-.716 1.6-1.6 1.6-1.6-.716-1.6-1.6.716-1.6 1.6-1.6z';
const PLACEHOLDER_VIEWBOX = '0 0 24 24';

// ---------- 加载单个 SVG ----------
async function loadLogoFile(key) {
  const fileName = LOGO_FILES[key];
  if (!fileName) return null;

  try {
    const resp = await fetch(`./assets/logos/${fileName}`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const svgText = await resp.text();

    const pathMatch = svgText.match(/<path[^>]*d=["']([^"']*)["']/);
    if (!pathMatch) {
      console.warn(`[Logo] ${fileName} 中未找到 path 数据`);
      return null;
    }

    const viewBoxMatch = svgText.match(/viewBox=["']([^"']*)["']/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

    return { path: pathMatch[1], viewBox };
  } catch (err) {
    console.warn(`[Logo] 加载 ${fileName} 失败:`, err.message);
    return null;
  }
}

// ---------- ★★★ 预加载所有图标（顶层 await） ★★★ ----------
await (async () => {
  const keys = Object.keys(LOGO_FILES);
  if (keys.length === 0) return;

  console.log(`[Logo] 开始预加载 ${keys.length} 个图标...`);
  const results = await Promise.all(keys.map(key => loadLogoFile(key)));

  keys.forEach((key, i) => {
    const data = results[i];
    if (data) LOGO_CACHE[key] = data;
  });

  const loaded = Object.keys(LOGO_CACHE).length;
  console.log(`[Logo] 预加载完成: ${loaded}/${keys.length} 个图标`);
})();

// ================================================================
// 绘制商标（从缓存同步读取）
// ================================================================
function drawLogo(ctx, key, cx, cy, size, color = '#ffffff') {
  let logo = LOGO_CACHE[key];
  if (!logo) {
    logo = { path: PLACEHOLDER_PATH, viewBox: PLACEHOLDER_VIEWBOX };
  }
  try {
    const path = new Path2D(logo.path);
    const viewBoxParts = logo.viewBox.split(' ');
    const viewBoxSize = parseInt(viewBoxParts[2]) || 24;
    const scale = size / viewBoxSize;
    ctx.save();
    ctx.translate(cx - size / 2, cy - size / 2);
    ctx.scale(scale, scale);
    ctx.fillStyle = color;
    ctx.fill(path);
    ctx.restore();
  } catch (e) {
    // 静默跳过
  }
}

// ================================================================
// 辅助：通用矩形树图绘制
// ================================================================
function drawTreemap(ctx, w, h, items, rowSplit, progress, title = '矩形树图 · 面积代表市值') {
  const p = Math.min(progress, 1);
  const total = items.reduce((s, i) => s + i.value, 0);
  let yOffset = 0;

  rowSplit.forEach((rowIndices) => {
    const rowItems = rowIndices.map(i => items[i]);
    const rowTotal = rowItems.reduce((s, item) => s + item.value, 0);
    const rowHeight = (rowTotal / total) * h * 0.85 * p;
    let xOffset = 0;

    rowItems.forEach((item) => {
      const blockWidth = (item.value / rowTotal) * w * 0.92 * p;
      const x = w * 0.04 + xOffset;
      const y = h * 0.08 + yOffset;

      ctx.fillStyle = item.color;
      ctx.fillRect(x, y, blockWidth, rowHeight);

      if (item.logoKey) {
        const logoSize = Math.min(blockWidth, rowHeight) * 0.22;
        const cx = x + blockWidth / 2;
        const cy = y + rowHeight * 0.28;
        drawLogo(ctx, item.logoKey, cx, cy, logoSize, '#ffffff');
      }

      ctx.fillStyle = '#ffffff';
      const nameSize = Math.min(blockWidth / 4.5, Math.min(blockWidth, rowHeight) * 0.22, 22);
      ctx.font = 'bold ' + nameSize + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (blockWidth > 60 && rowHeight > 50) {
        const textY = y + rowHeight * 0.68;
        ctx.fillText(item.label, x + blockWidth / 2, textY);
        const capSize = Math.min(blockWidth / 7, Math.min(blockWidth, rowHeight) * 0.14, 16);
        ctx.font = capSize + 'px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.fillText('$' + item.value.toFixed(2) + 'T', x + blockWidth / 2, textY + nameSize * 0.85 + 4);
      } else {
        const smallSize = Math.min(blockWidth / 3.5, rowHeight * 0.5, 16);
        ctx.font = 'bold ' + smallSize + 'px sans-serif';
        ctx.fillText(item.label, x + blockWidth / 2, y + rowHeight / 2);
      }
      xOffset += blockWidth;
    });
    yOffset += rowHeight;
  });

  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(title + ' · 截至2026年6月26日', 10, 6);
}

// ================================================================
// 辅助：通用饼图
// ================================================================
function drawPie(ctx, w, h, pieData, progress, title = '饼图 · 占比分布', valuePrefix = '') {
  const p = Math.min(progress, 1);
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.35;
  const total = pieData.reduce((s, d) => s + d.value, 0);
  let startAngle = -Math.PI / 2;

  pieData.forEach((item) => {
    const sliceAngle = ((item.value / total) * 2 * Math.PI) * p;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();

    const midAngle = startAngle + sliceAngle / 2;
    const labelR = r * 0.6;
    const lx = cx + Math.cos(midAngle) * labelR;
    const ly = cy + Math.sin(midAngle) * labelR;

    if (sliceAngle > 0.1 && p > 0.3) {
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 4;
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 10px sans-serif';
      ctx.fillText(item.label, lx, ly - 6);
      ctx.font = 'bold 8px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fillText(valuePrefix + (item.displayValue || item.value + '家'), lx, ly + 10);
      ctx.shadowBlur = 0;
    }
    startAngle += sliceAngle;
  });

  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '9px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(title + ' · 截至2026年6月26日', cx, cy - r - 8);
}

// ================================================================
// 卡片数据（10张卡，完整）
// ================================================================
export const SCRIPT_DATA_RAW = [
  // ---- 卡片 01：前20强 ----
  {
    part: '终',
    category: '01 · 前20强',
    title: '前20强：头部集中度惊人',
    hook: '前20强合计市值超$40T，占50强总市值近80%。',
    visual: '矩形树图 · 前20强 · 白色商标',
    detail: '英伟达$4.85T、苹果$4.32T、Alphabet$4.22T、微软$2.78T、亚马逊$2.52T、台积电$2.26T、SpaceX$2.06T、博通$1.81T、沙特阿美$1.70T、三星$1.45T、特斯拉$1.43T、Meta$1.43T、SK海力士$1.19T、美光$1.19T、伯克希尔$1.06T、礼来$0.99T、沃尔玛$0.95T、摩根大通$0.90T、AMD$0.85T、ASML$0.69T。财富正在以前所未有的速度向头部集中。',
    voiceText: '',
    action: '财富向头部集中，是趋势还是隐患？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '20', label: '前20强' },
      { number: '$40T+', label: '合计市值' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '英伟达', value: 4.85, color: '#76b900', logoKey: 'nvidia' },
        { label: '苹果', value: 4.32, color: '#a2aaad', logoKey: 'apple' },
        { label: 'Alphabet', value: 4.22, color: '#4285f4', logoKey: 'alphabet' },
        { label: '微软', value: 2.78, color: '#00a4ef', logoKey: 'microsoft' },
        { label: '亚马逊', value: 2.52, color: '#ff9900', logoKey: 'amazon' },
        { label: '台积电', value: 2.26, color: '#0057a3', logoKey: 'tsmc' },
        { label: 'SpaceX', value: 2.06, color: '#1347a8', logoKey: 'spacex' },
        { label: '博通', value: 1.81, color: '#cc092f', logoKey: 'broadcom' },
        { label: '沙特阿美', value: 1.70, color: '#0a8f3c', logoKey: 'saudi_aramco' },
        { label: '三星', value: 1.45, color: '#1428a0', logoKey: 'samsung' },
        { label: '特斯拉', value: 1.43, color: '#e82127', logoKey: 'tesla' },
        { label: 'Meta', value: 1.43, color: '#1877f2', logoKey: 'meta' },
        { label: 'SK海力士', value: 1.19, color: '#d32f2f', logoKey: 'sk_hynix' },
        { label: '美光', value: 1.19, color: '#0066b3', logoKey: 'micron' },
        { label: '伯克希尔', value: 1.06, color: '#d45d2e', logoKey: 'berkshire' },
        { label: '礼来', value: 0.99, color: '#4a8c6f', logoKey: 'lilly' },
        { label: '沃尔玛', value: 0.95, color: '#0071ce', logoKey: 'walmart' },
        { label: '摩根大通', value: 0.90, color: '#b84a2e', logoKey: 'jpmorgan' },
        { label: 'AMD', value: 0.85, color: '#ed1c24', logoKey: 'amd' },
        { label: 'ASML', value: 0.69, color: '#00b4d8', logoKey: 'asml' },
      ];
      const rowSplit = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8, 9],
        [10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '前20强');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 02：行业分布（饼图） ----
  {
    part: '终',
    category: '02 · 行业分布',
    title: '行业版图：物理科技14家，非物科技8家',
    hook: '科技拆分为物理与非物，两个完全不同的行业逻辑。',
    visual: '饼图 · 全行业分布（物理vs非物分开）',
    detail: '物理科技14家（28%）：英伟达、苹果、台积电、博通、三星、特斯拉、SpaceX、AMD、ASML、英特尔、美光、SK海力士、KIOXIA、应用材料。非物科技8家（16%）：Alphabet、微软、亚马逊、Meta、腾讯、甲骨文、Arm、思科。其他行业：金融8家（16%）、医疗5家（10%）、能源3家（6%）、消费3家（6%）、工业2家（4%）、其他7家（14%）。',
    voiceText: '',
    action: '物理科技vs非物科技，你更看好哪个？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '14', label: '物理科技' },
      { number: '8', label: '非物科技' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const pieData = [
        { label: '物理科技', value: 14, color: '#f5a623', displayValue: '28%' },
        { label: '非物科技', value: 8, color: '#8b5cf6', displayValue: '16%' },
        { label: '金融', value: 8, color: '#d45d2e', displayValue: '16%' },
        { label: '医疗', value: 5, color: '#4a8c6f', displayValue: '10%' },
        { label: '能源', value: 3, color: '#0a8f3c', displayValue: '6%' },
        { label: '消费', value: 3, color: '#0071ce', displayValue: '6%' },
        { label: '工业', value: 2, color: '#7a5c8a', displayValue: '4%' },
        { label: '其他', value: 7, color: '#2a1a3e', displayValue: '14%' },
      ];

      function draw(progress) {
        drawPie(ctx, w, h, pieData, progress, '全球50强 · 行业分布', '');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 03：物理科技14家 ----
  {
    part: '终',
    category: '03 · 物理科技',
    title: '物理科技14家：合计$18.0T',
    hook: '有实体、有制造——硬核玩家正在统治市值榜。',
    visual: '矩形树图 · 物理科技14家 · 白色商标',
    detail: '英伟达$4.85T、苹果$4.32T、台积电$2.26T、博通$1.81T、三星$1.45T、特斯拉$1.43T、SpaceX$2.06T、AMD$0.85T、ASML$0.69T、英特尔$0.67T、美光$1.19T、SK海力士$1.19T、KIOXIA$0.31T、应用材料$0.47T。芯片、火箭、电动车、光刻机——物理世界的一切，都在被这些公司重新定义。',
    voiceText: '',
    action: '物理科技巨头中，谁最有统治力？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '14', label: '物理科技' },
      { number: '$18.0T', label: '合计市值' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '英伟达', value: 4.85, color: '#76b900', logoKey: 'nvidia' },
        { label: '苹果', value: 4.32, color: '#a2aaad', logoKey: 'apple' },
        { label: 'SpaceX', value: 2.06, color: '#1347a8', logoKey: 'spacex' },
        { label: '台积电', value: 2.26, color: '#0057a3', logoKey: 'tsmc' },
        { label: '博通', value: 1.81, color: '#cc092f', logoKey: 'broadcom' },
        { label: '三星', value: 1.45, color: '#1428a0', logoKey: 'samsung' },
        { label: '特斯拉', value: 1.43, color: '#e82127', logoKey: 'tesla' },
        { label: 'SK海力士', value: 1.19, color: '#d32f2f', logoKey: 'sk_hynix' },
        { label: '美光', value: 1.19, color: '#0066b3', logoKey: 'micron' },
        { label: 'AMD', value: 0.85, color: '#ed1c24', logoKey: 'amd' },
        { label: 'ASML', value: 0.69, color: '#00b4d8', logoKey: 'asml' },
        { label: '英特尔', value: 0.67, color: '#0071c5', logoKey: 'intel' },
        { label: '应用材料', value: 0.47, color: '#6a8d73', logoKey: 'applied_materials' },
        { label: 'KIOXIA', value: 0.31, color: '#e67e22', logoKey: 'kioxia' },
      ];
      const rowSplit = [
        [0, 1, 2],
        [3, 4, 5, 6],
        [7, 8, 9, 10],
        [11, 12, 13],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '物理科技14家');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 04：非物科技8家 ----
  {
    part: '终',
    category: '04 · 非物科技',
    title: '非物科技8家：合计$12.0T',
    hook: '纯数字、虚拟世界——它们统治的是信息、代码和注意力。',
    visual: '矩形树图 · 非物科技8家 · 白色商标',
    detail: 'Alphabet$4.22T、微软$2.78T、亚马逊$2.52T、Meta$1.43T、腾讯$0.49T、甲骨文$0.48T、思科$0.48T、Arm$0.39T。搜索、云服务、电商、社交、IP授权——数字世界的权力中枢，全在这里。',
    voiceText: '',
    action: '非物科技巨头中，谁最有护城河？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '8', label: '非物科技' },
      { number: '$12.0T', label: '合计市值' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: 'Alphabet', value: 4.22, color: '#4285f4', logoKey: 'alphabet' },
        { label: '微软', value: 2.78, color: '#00a4ef', logoKey: 'microsoft' },
        { label: '亚马逊', value: 2.52, color: '#ff9900', logoKey: 'amazon' },
        { label: 'Meta', value: 1.43, color: '#1877f2', logoKey: 'meta' },
        { label: '腾讯', value: 0.49, color: '#2e8b57', logoKey: 'tencent' },
        { label: '甲骨文', value: 0.48, color: '#c74634', logoKey: 'oracle' },
        { label: '思科', value: 0.48, color: '#049fd9', logoKey: 'cisco' },
        { label: 'Arm', value: 0.39, color: '#6ec6ff', logoKey: 'arm' },
      ];
      const rowSplit = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '非物科技8家');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 05：金融8强 ----
  {
    part: '终',
    category: '05 · 金融8强',
    title: '金融8强：合计市值$4.3T',
    hook: '伯克希尔$1.06T领跑，摩根大通、Visa紧随。',
    visual: '矩形树图 · 金融8强 · 白色商标',
    detail: '伯克希尔$1.06T、摩根大通$0.90T、Visa$0.63T、摩根士丹利$0.36T、建设银行$0.38T、汇丰$0.33T、农业银行$0.33T、工商银行$0.31T。中美金融力量在全球50强中分庭抗礼。',
    voiceText: '',
    action: '金融巨头会被科技公司全面超越吗？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '8', label: '金融企业' },
      { number: '$4.3T', label: '合计市值' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '伯克希尔', value: 1.06, color: '#d45d2e', logoKey: 'berkshire' },
        { label: '摩根大通', value: 0.90, color: '#b84a2e', logoKey: 'jpmorgan' },
        { label: 'Visa', value: 0.63, color: '#9a3a2e', logoKey: 'visa' },
        { label: '建设银行', value: 0.38, color: '#c60a0a', logoKey: 'ccb' },
        { label: '摩根士丹利', value: 0.36, color: '#8a2a2e', logoKey: 'morgan_stanley' },
        { label: '汇丰', value: 0.33, color: '#d4af37', logoKey: 'hsbc' },
        { label: '农业银行', value: 0.33, color: '#b30808', logoKey: 'abc' },
        { label: '工商银行', value: 0.31, color: '#a00606', logoKey: 'icbc' },
      ];
      const rowSplit = [
        [0, 1],
        [2, 3, 4],
        [5, 6, 7],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '金融8强');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 06：医疗五巨头 ----
  {
    part: '终',
    category: '06 · 医疗五巨头',
    title: '医疗五巨头：合计市值近$2.7T',
    hook: 'GLP-1减肥药浪潮推动礼来逼近万亿市值。',
    visual: '矩形树图 · 医疗五巨头 · 白色商标 · 竖排',
    detail: '礼来$0.99T、强生$0.58T、艾伯维$0.42T、联合健康$0.37T、罗氏$0.33T。GLP-1减肥药和肿瘤免疫疗法正在重塑全球医疗产业格局。',
    voiceText: '',
    action: '医疗板块会成为下一个科技赛道吗？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '$0.99T', label: '礼来' },
      { number: '5家', label: '医疗巨头' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '礼来', value: 0.99, color: '#4a8c6f', logoKey: 'lilly' },
        { label: '强生', value: 0.58, color: '#5b9a7f', logoKey: 'jnj' },
        { label: '艾伯维', value: 0.42, color: '#6ca88f', logoKey: 'abbvie' },
        { label: '联合健康', value: 0.37, color: '#7db69f', logoKey: 'unitedhealth' },
        { label: '罗氏', value: 0.33, color: '#8ec4af', logoKey: 'roche' },
      ];
      const rowSplit = [
        [0, 1, 2],
        [3, 4],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '医疗五巨头');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 07：能源三巨头 ----
  {
    part: '终',
    category: '07 · 能源三巨头',
    title: '沙特阿美$1.70T领跑能源',
    hook: '能源三巨头总市值超$2.6T，与科技巨头形成鲜明对比。',
    visual: '矩形树图 · 能源三巨头 · 白色商标 · 竖排',
    detail: '沙特阿美$1.70T，埃克森美孚$0.58T，雪佛龙$0.35T。与科技巨头的疯狂扩张相比，传统能源的估值显得"冷静"得多。',
    voiceText: '',
    action: '能源巨头的市值会被科技公司进一步拉开吗？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '$1.70T', label: '沙特阿美' },
      { number: '$0.58T', label: '埃克森美孚' },
      { number: '$0.35T', label: '雪佛龙' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '沙特阿美', value: 1.70, color: '#0a8f3c', logoKey: 'saudi_aramco' },
        { label: '埃克森美孚', value: 0.58, color: '#1a6b3a', logoKey: 'exxon' },
        { label: '雪佛龙', value: 0.35, color: '#2a4a3a', logoKey: 'chevron' },
      ];
      const rowSplit = [
        [0, 1],
        [2],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '能源三巨头');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 08：万亿俱乐部 ----
  {
    part: '终',
    category: '08 · 万亿俱乐部',
    title: '万亿俱乐部扩容：7家巨头跨过门槛',
    hook: '2026年，全球已有7家公司市值超过1万亿美元。',
    visual: '矩形树图 · 万亿俱乐部 · 白色商标',
    detail: '英伟达4.85T、苹果4.32T、Alphabet4.22T、微软2.78T、亚马逊2.52T、台积电2.26T、SpaceX2.06T。7家万亿巨头合计市值超$24T。五年前，万亿俱乐部仅有苹果和微软两家。',
    voiceText: '',
    action: '下一家进入万亿俱乐部的会是谁？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '7', label: '万亿俱乐部成员' },
      { number: '$24T+', label: '合计市值' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '英伟达', value: 4.85, color: '#76b900', logoKey: 'nvidia' },
        { label: '苹果', value: 4.32, color: '#a2aaad', logoKey: 'apple' },
        { label: 'Alphabet', value: 4.22, color: '#4285f4', logoKey: 'alphabet' },
        { label: '微软', value: 2.78, color: '#00a4ef', logoKey: 'microsoft' },
        { label: '亚马逊', value: 2.52, color: '#ff9900', logoKey: 'amazon' },
        { label: '台积电', value: 2.26, color: '#0057a3', logoKey: 'tsmc' },
        { label: 'SpaceX', value: 2.06, color: '#1347a8', logoKey: 'spacex' },
      ];
      const rowSplit = [
        [0, 1, 2],
        [3, 4],
        [5, 6],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '万亿俱乐部');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 09：非美13强 ----
  {
    part: '终',
    category: '09 · 非美13强',
    title: '非美13强：合计市值$9.8T',
    hook: '台积电领跑，沙特阿美、三星紧随。亚洲已成全球半导体产业链核心。',
    visual: '矩形树图 · 非美13强 · 白色商标',
    detail: '台积电$2.26T、沙特阿美$1.70T、三星$1.45T、SK海力士$1.19T、ASML$0.69T、腾讯$0.49T、Arm$0.39T、建设银行$0.38T、罗氏$0.33T、汇丰$0.33T、农业银行$0.33T、工商银行$0.31T、KIOXIA$0.31T。非美力量正在全球市值版图中占据越来越重要的位置。',
    voiceText: '',
    action: '非美企业能否打破美国科技霸权的垄断？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: true,
    data: [
      { number: '13', label: '非美企业' },
      { number: '$9.8T', label: '合计市值' },
    ],
    renderChart: function (canvas) {
      const ctx = canvas.getContext('2d');
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const items = [
        { label: '台积电', value: 2.26, color: '#0057a3', logoKey: 'tsmc' },
        { label: '沙特阿美', value: 1.70, color: '#0a8f3c', logoKey: 'saudi_aramco' },
        { label: '三星', value: 1.45, color: '#1428a0', logoKey: 'samsung' },
        { label: 'SK海力士', value: 1.19, color: '#d32f2f', logoKey: 'sk_hynix' },
        { label: 'ASML', value: 0.69, color: '#00b4d8', logoKey: 'asml' },
        { label: '腾讯', value: 0.49, color: '#2e8b57', logoKey: 'tencent' },
        { label: 'Arm', value: 0.39, color: '#6ec6ff', logoKey: 'arm' },
        { label: '建设银行', value: 0.38, color: '#c60a0a', logoKey: 'ccb' },
        { label: '罗氏', value: 0.33, color: '#8b5cf6', logoKey: 'roche' },
        { label: '汇丰', value: 0.33, color: '#d4af37', logoKey: 'hsbc' },
        { label: '农业银行', value: 0.33, color: '#b30808', logoKey: 'abc' },
        { label: '工商银行', value: 0.31, color: '#a00606', logoKey: 'icbc' },
        { label: 'KIOXIA', value: 0.31, color: '#e67e22', logoKey: 'kioxia' },
      ];
      const rowSplit = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8, 9],
        [10, 11, 12],
      ];

      function draw(progress) {
        drawTreemap(ctx, w, h, items, rowSplit, progress, '非美13强');
      }
      animateDraw(ctx, draw, 3000);
      return function () {};
    },
  },

  // ---- 卡片 10：收尾 ----
  {
    part: '终',
    category: '10 · 收尾',
    title: '市值是投票器，但长期是称重机',
    hook: 'AI浪潮改变了排名，但什么才是真正的护城河？',
    visual: '科技与人文结合图',
    detail: '英伟达登顶、苹果被超越、SpaceX一飞冲天——市值排名每年都在变，但真正伟大的公司，从不依赖于一份排名。它们穿越周期、塑造未来。物理科技vs非物科技，这轮AI浪潮，到底是在创造价值，还是在制造泡沫？只有时间能给出答案。而我们，都是见证者。',
    voiceText: '',
    action: '你看好哪家公司在2030年成为全球第一？评论区聊聊。',
    img: UNIFIED_IMG,
    hasData: false,
  },
];