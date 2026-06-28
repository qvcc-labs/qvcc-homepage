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
 * 图标数据：完全内嵌，无外部依赖
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
//  ★★★ 图标路径（完全内嵌） ★★★
// ═══════════════════════════════════════════════════════════════
// ================================================================

const LOGO_PATHS = {
  nvidia: {
    path: 'M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z',
    viewBox: '0 0 24 24'
  },
  apple: {
    path: 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
    viewBox: '0 0 24 24'
  },
  alphabet: {
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
    viewBox: '0 0 24 24'
  },
  microsoft: {
    path: 'M5 5h10v10H5z M17 5h10v10H17z M5 17h10v10H5z M17 17h10v10H17z',
    viewBox: '0 0 32 32'
  },
  amazon: {
    path: 'M25.4026553,25.9595294 C24.660417,27.4418824 23.3876054,28.3962353 22.0103725,28.7181176 C21.8015298,28.7181176 21.4826213,28.8225882 21.1637129,28.8225882 C18.835399,28.8225882 17.458166,27.0211765 17.458166,24.3727059 C17.458166,20.9788235 19.4703937,19.392 22.0103725,18.6465882 C23.3876054,18.3303529 24.9793255,18.2230588 26.5682233,18.2230588 L26.5682233,19.4964706 C26.5682233,21.9331765 26.6726447,23.8390588 25.4026553,25.9595294 L25.4026553,25.9595294 Z M26.5682233,13.3524706 C25.1909904,13.4569412 23.5992703,13.5614118 22.0103725,13.7703529 C19.574815,14.0922353 17.1392576,14.5157647 15.1298521,15.4701176 C11.2098182,17.0597647 8.55977364,20.4508235 8.55977364,25.4287059 C8.55977364,31.6856471 12.5842289,34.8621176 17.6726531,34.8621176 C19.3659723,34.8621176 20.7432053,34.6475294 22.0103725,34.3341176 C24.0282445,33.696 25.7187415,32.5298824 27.7309692,30.4094118 C28.8965372,31.9990588 29.2182679,32.7444706 31.2276733,34.4385882 C31.7582467,34.6475294 32.28882,34.6475294 32.7093276,34.3341176 C33.9821392,33.2724706 36.208854,31.3637647 37.3715998,30.3049412 C37.9021732,29.8814118 37.7977518,29.2432941 37.4760212,28.7181176 C36.3132753,27.2329412 35.1448851,25.9595294 35.1448851,23.0992941 L35.1448851,13.5614118 C35.1448851,9.53505882 35.4666157,5.82494118 32.5004849,3.072 C30.0649275,0.849882353 26.2493149,0 23.2831841,0 L22.0103725,0 C16.6115064,0.313411765 10.8937319,2.64564706 9.61809814,9.32329412 C9.40643324,10.1731765 10.0442501,10.4894118 10.4675799,10.5938824 L16.3998415,11.3364706 C17.0348362,11.2291765 17.3537447,10.6983529 17.458166,10.1731765 C17.9859172,7.84094118 19.8937235,6.67482353 22.0103725,6.46023529 L22.4365245,6.46023529 C23.7093361,6.46023529 25.086569,6.99105882 25.8259851,8.05270588 C26.6726447,9.32329411 26.5682233,11.0202353 26.5682233,12.5054118 L26.5682233,13.3524706 L26.5682233,13.3524706 Z M47.9943556,35.9463529 L47.9943556,35.9435294 C47.971778,35.4437647 47.8673567,35.0625882 47.658514,34.7463529 L47.6359364,34.7152941 L47.6105366,34.6842353 C47.3988717,34.4527059 47.1956734,34.3651765 46.9755419,34.2691765 C46.3179696,34.0150588 45.3612442,33.8795294 44.2097872,33.8767059 C43.382883,33.8767059 42.4713128,33.9557647 41.5540982,34.1562353 L41.551276,34.0941176 L40.6284171,34.4018824 L40.6114839,34.4103529 L40.0893771,34.5797647 L40.0893771,34.6023529 C39.47696,34.8564706 38.9209869,35.1727059 38.4045245,35.5482353 C38.0827939,35.7882353 37.8175072,36.1072941 37.8033962,36.5957647 C37.7949296,36.8611765 37.9303952,37.1661176 38.1533489,37.3468235 C38.3763025,37.5275294 38.6359448,37.5896471 38.8645429,37.5896471 C38.9181647,37.5896471 38.9689643,37.5868235 39.0141194,37.5783529 L39.0592746,37.5755294 L39.093141,37.5698824 C39.5446928,37.4738824 40.2022651,37.4089412 40.9727253,37.3016471 C41.6331198,37.2282353 42.3330251,37.1745882 42.9397978,37.1745882 C43.368772,37.1717647 43.7554132,37.2028235 44.0206999,37.2592941 C44.1533432,37.2875294 44.2521202,37.3214118 44.3057419,37.3496471 C44.3254973,37.3552941 44.3396083,37.3637647 44.3480749,37.3694118 C44.3593637,37.4061176 44.3762969,37.5021176 44.3734747,37.6348235 C44.3791191,38.1430588 44.164632,39.0861176 43.8683012,40.0065882 C43.5804369,40.9270588 43.2304843,41.8503529 42.999064,42.4630588 C42.94262,42.6042353 42.9059314,42.7595294 42.9059314,42.9289412 C42.900287,43.1745882 43.0018862,43.4738824 43.2163733,43.6715294 C43.425216,43.8691765 43.696147,43.9482353 43.9219229,43.9482353 L43.9332117,43.9482353 C44.2718756,43.9454118 44.5597398,43.8098824 44.8080933,43.6150588 C47.1505182,41.5087059 47.9661336,38.1430588 48,36.2484706 L47.9943556,35.9463529 Z M41.0489247,38.8658824 C40.8090378,38.8630588 40.5635065,38.9195294 40.3349084,39.0268235 C40.0780883,39.1284706 39.8156239,39.2470588 39.5672704,39.3515294 L39.2032068,39.504 L38.7290774,39.6931765 L38.7290774,39.6988235 C33.5785648,41.7882353 28.16841,43.0136471 23.1618295,43.1209412 C22.9783866,43.1265882 22.7921215,43.1265882 22.614323,43.1265882 C14.7403887,43.1322353 8.31706456,39.4785882 1.83729642,35.8785882 C1.61152053,35.76 1.37727804,35.6978824 1.15150215,35.6978824 C0.860815683,35.6978824 0.561662624,35.808 0.344353327,36.0112941 C0.12704403,36.2174118 -0.00277710907,36.5138824 4.50895989e-05,36.816 C-0.00277710907,37.2084706 0.208887791,37.5698824 0.505218651,37.8042353 C6.58705678,43.0870588 13.25309,47.9943529 22.2192152,48 C22.3941915,48 22.57199,47.9943529 22.7497885,47.9915294 C28.453452,47.8644706 34.902176,45.936 39.9087564,42.7905882 L39.9398006,42.7708235 C40.5945507,42.3783529 41.2493008,41.9322353 41.8673623,41.4381176 C42.2511813,41.1529412 42.516468,40.7068235 42.516468,40.2437647 C42.4995348,39.4221176 41.8024517,38.8658824 41.0489247,38.8658824 Z',
    viewBox: '0 0 48 48'
  },
  tsmc: {
    path: 'M250.664,208.844v-4.104l-220.007,0.13v8.28l220.007,-0.161z M243.576,76.533c-20.396,0 -35.975,10.62 -35.975,29.103c0,15.58 14.192,26.59 33.217,26.59c14.479,0 26.465,-10.469 29.907,-17.09c0,-2.044 -2.07,-2.899 -3.984,-2.899c-3.316,5.1 -12.685,8.978 -16.533,8.827c-23.03,-0.834 -26.752,-10.063 -27.028,-19.703c-0.428,-10.48 10.886,-19.594 20.542,-18.88c5.631,0.387 7.581,9.61 12.513,12.931c1.554,0.855 5.12,0.693 7.472,0.287c1.793,-0.287 6.595,-1.377 6.595,-5.522c0,-3.44 -4.27,-7.31 -8.384,-9.786c-4.129,-1.913 -13.378,-3.858 -18.342,-3.858z M107.437,116.512c0,8.546 -2.195,13.087 -9.093,13.494l0.162,1.392c11.549,-0.13 23.3,0 34.573,-0.26l0.13,-0.715c-5.208,0 -9.228,-5.511 -9.228,-12.373v-23.034c0,-5.662 6.887,-9.244 11.58,-8.827c7.283,0.678 11.303,5.365 11.303,9.51v22.607c0,6.893 -2.07,11.168 -7.44,11.57v1.261h31.69v-0.97c-4.693,-0.568 -7.993,-4.849 -7.993,-11.303v-23.739c0,-5.078 4.405,-8.53 12.278,-8.655c6.893,-0.14 11.017,4.97 11.017,9.797v21.486c0,7.305 -2.195,11.846 -7.7,12.414v0.97c11.574,0.13 21.073,0.13 32.507,0v-0.714c-6.048,0 -8.112,-3.984 -8.112,-12.373v-23.728c0,-7.852 -4.281,-17.231 -16.273,-17.231c-8.123,0 -14.087,3.973 -17.487,5.125c-2.351,0.928 -4.014,2.044 -4.572,2.044c-1.08,0 -2.31,-0.688 -3.848,-2.341c-2.904,-3.056 -8.123,-4.828 -13.655,-4.828c-7.039,0 -14.067,3.973 -17.383,5.125c-0.39,0.11 -2.862,1.356 -3.16,1.356c-0.547,0 -2.752,0 -2.752,-0.266c0,-6.622 0.417,-3.322 0.146,-8.004h-4.557c-1.361,0 -3.733,2.493 -6.481,3.561c-3.31,1.408 -9.932,1.257 -12.66,1.956v4.676l7.144,1.372v9.113z M76.43,131.268c12.137,-0.568 23.837,-3.175 23.837,-14.896c0,-8.524 -9.36,-13.92 -19.276,-18.19c-6.366,-2.618 -15.579,-6.476 -15.579,-9.521c0,-3.572 7.018,-10.47 13.77,-4.959l11.726,9.798l5.38,-1.12l-3.018,-14.584c-2.769,0.125 -4.703,0.277 -14.776,-1.402c-12.414,-1.784 -27.154,4.425 -27.154,15.984c0,7.748 11.179,13.108 20.006,16.69c4.817,2.059 13.378,5.114 13.378,9.796c0,4.52 -8.013,5.782 -12.55,5.782c-7.72,0 -16.282,-10.344 -16.282,-10.344h-5.083l2.752,15.46c0.944,-0.845 4.417,-0.726 5.11,-0.418c2.466,0.939 11.423,2.341 17.758,1.924z M47.199,84.405v-7.18l-15.015,0.141c-1.909,0 -1.8,-0.407 -1.8,-2.888l0.152,-9.797l-7.586,-0.136c-2.325,5.235 -5.224,8.687 -6.867,9.37l-14.082,6.204v4.416l5.266,0.136c2.34,0 3.3,-0.136 3.3,2.627v29.073c0,8.827 4.813,15.313 17.248,15.6c9.337,0.255 15.01,-3.88 18.988,-7.748l-1.095,-3.728c-1.663,1.12 -3.018,2.085 -5.245,2.085c-10.605,0 -10.323,-8.28 -10.323,-15.579v-19.703c0,-2.893 0.245,-2.893 2.195,-2.893z',
    viewBox: '2 -13.154 268.725 236.696'
  },
  spacex: {
    path: 'M972.503,1377.719H763.261l-7.474,5.979v186.075h57.542v-70.246l5.23-5.23h153.942c38.858,0 56.794,-10.461 56.794,-37.363v-42.596c0.002,-26.157 -17.934,-36.619 -56.792,-36.619z M972.503,1446.469c0,12.703 -8.221,14.945 -26.903,14.945H819.308l-5.979,-5.23v-39.606l5.23,-5.231h127.039c17.936,0 26.902,2.242 26.902,14.945l0.003,20.177z M1135.412,1412.841l50.068,73.234l-2.989,6.726h-110.599l-28.397,35.123h164.403l11.957,6.725l25.408,35.123h66.509l-145.721,-194.295z M1795.268,1532.407v-52.309l5.979,-5.232h111.347v-32.881h-176.362v127.787h260.058v-32.881h-194.296z M1736.232,1377.719h262.299v35.87h-262.299z M1444.043,1412.094h211.482c-2.989,-26.902 -20.177,-34.375 -62.025,-34.375h-151.699c-47.826,0 -62.772,8.968 -62.772,45.584v101.631c0,35.871 14.946,45.586 62.772,45.586H1593.5c42.596,0 59.036,-8.221 60.531,-35.871h-209.988l-5.979,-5.979v-112.092z M613.803,1452.448H460.609l-4.484,-5.23v-32.881l4.484,-3.736h206.999l2.989,-6.726c-6.726,-17.936 -25.408,-26.902 -59.036,-26.902H467.334c-47.826,0 -62.772,8.967 -62.772,45.583v21.672c0,35.871 14.946,45.586 62.772,45.586h153.195l4.483,4.482v34.375l-3.736,5.232H400.078s-5.23,2.988 -5.23,3.736c3.736,25.408 20.924,32.133 62.024,32.133h156.932c47.826,0 63.52,-8.967 63.52,-45.584v-26.156c-0.001,-35.869 -15.694,-45.584 -63.521,-45.584z M2163.682,1376.972h-86.686l-4.483,8.967l95.652,70.246c17.936,-10.463 38.112,-20.924 59.036,-31.387z M2241.4,1508.495l84.444,61.277h86.686l3.736,-8.221l-125.545,-91.916c-16.44,12.703 -33.627,25.408 -49.321,38.86z M2150.978,1569.772h-78.465l-6.727,-10.463c53.059,-51.562 290.696,-271.265 807.074,-294.431c0,0 -432.681,14.945 -721.882,304.894z',
    viewBox: '394.847 178.688 2478.014 2478.014'
  },
  broadcom: {
    path: 'M156.547,110.788v13.033h3.098v-4.857h2.746v-2.666h-2.688v-5.51h-3.156z M144.863,124.888v10.663h14.84v-10.663h-14.84z M156.67,132.948h-8.775v-5.457h8.775v5.457z M149.1,111.263c0,0 -0.176,7.05 5.258,9.894l-1.811,2.229c0,0 -3.975,-2.644 -4.908,-5.665c-0.936,3.021 -4.908,5.665 -4.908,5.665l-1.811,-2.229c5.434,-2.844 5.258,-9.894 5.258,-9.894h2.922z M183.619,110.788v13.033h-3.096v-5.982h-4.031v-2.666h3.971v-4.385h3.156z M175.908,123.675c-4.609,0 -8.346,2.851 -8.346,6.367s3.736,6.367 8.346,6.367c4.607,0 8.344,-2.851 8.344,-6.367s-3.736,-6.367 -8.344,-6.367z M175.908,133.599c-2.867,0 -5.191,-1.593 -5.191,-3.557c0,-1.965 2.324,-3.557 5.191,-3.557c2.865,0 5.188,1.592 5.188,3.557c0,1.964 -2.323,3.557 -5.188,3.557z M172.547,111.263c0,0 -0.174,7.05 5.26,9.894l-1.811,2.229c0,0 -3.975,-2.644 -4.908,-5.665c-0.936,3.021 -4.908,5.665 -4.908,5.665l-1.811,-2.229c5.434,-2.844 5.258,-9.894 5.258,-9.894h2.92z M152.955,57.15c-32.988,-3.323 -81.185,3.869 -114.766,17.621l-2.008,0.873c0.617,-0.032 1.037,-0.004 1.037,-0.004c5.589,0.155 5.249,3.681 5.249,3.681l0.008,2.152h-4.517v-1.462c0,-1.036 -1.244,-1.105 -1.244,-1.105c-0.955,0 -1.176,0.657 -1.176,0.657c-0.528,1.002 0.375,1.866 0.375,1.866c0.46,0.518 2.778,1.607 2.778,1.607c0.75,0.293 1.959,1.054 1.959,1.054c2.266,1.382 2.062,4.008 2.062,4.008v1.729c-0.272,4.285 -6.1,4.164 -6.1,4.164c-6.101,0 -5.967,-4.06 -5.967,-4.06v-2.122h4.748v1.462c0,1.244 1.186,1.299 1.186,1.299c1.294,0.052 1.404,-1.219 1.404,-1.219c0.177,-1.235 -1.166,-2.012 -1.166,-2.012c-1.328,-0.691 -3.544,-1.901 -3.544,-1.901c-1.091,-0.726 -1.533,-1.383 -1.533,-1.383c-0.784,-1.001 -0.733,-2.557 -0.733,-2.557v-1.348c0,-1.866 0.494,-2.401 0.494,-2.401c0.006,-0.013 0.016,-0.024 0.023,-0.037c-32.86,15.581 -29.113,31.778 1.507,34.782c33.471,3.283 84.017,-3.244 117.979,-18.639c-0.107,0.006 -0.203,0.026 -0.314,0.026c0,0 -5.748,0.472 -5.885,-4.228v-9.088c0,0 -0.715,-5.01 5.725,-5.01c0,0 4.193,-0.139 5.301,2.384c0,0 0.547,0.676 0.4,3.465h-4.465v-1.43c0,0 -0.01,-1.154 -1.168,-1.154c0,0 -1.209,0.052 -1.209,1.02v9.399c0,0 -0.051,1.262 1.312,1.262c0,0 1.117,-0.025 1.117,-1.351v-2.719h-1.217v-5.208h5.736v5.339c0,0 -0.014,1.124 -0.475,1.78c0,0 -0.34,0.515 -0.549,0.746l1.867,-0.948c30.088,-15.639 26.322,-30.584 -4.293,-33.667z M55.734,93.377l-1.736,-13.307h-0.39l-1.736,13.307h-4.742l2.93,-17.161h7.486l2.931,17.161h-4.743z M79.703,93.395l-0.106,-12.929h-0.306l-2.307,12.926h-4.635l-2.336,-12.931h-0.346l-0.053,12.934h-4.406l0.372,-17.166h7.443l1.425,9.395h0.348l1.492,-9.394h7.369l0.477,17.165h-4.431z M101.525,88.097v1.729c-0.273,4.285 -6.1,4.164 -6.1,4.164c-6.1,0 -5.968,-4.06 -5.968,-4.06v-2.122h4.748v1.462c0,1.244 1.186,1.299 1.186,1.299c1.295,0.052 1.404,-1.219 1.404,-1.219c0.177,-1.235 -1.166,-2.012 -1.166,-2.012c-1.328,-0.691 -3.544,-1.901 -3.544,-1.901c-1.09,-0.726 -1.534,-1.383 -1.534,-1.383c-0.784,-1.001 -0.733,-2.557 -0.733,-2.557v-1.348c0,-1.866 0.495,-2.401 0.495,-2.401c1.261,-2.402 5.656,-2.108 5.656,-2.108c5.588,0.155 5.249,3.681 5.249,3.681l0.008,2.152h-4.516v-1.462c0,-1.036 -1.243,-1.105 -1.243,-1.105c-0.955,0 -1.176,0.657 -1.176,0.657c-0.528,1.002 0.375,1.866 0.375,1.866c0.46,0.518 2.777,1.607 2.777,1.607c0.75,0.293 1.961,1.054 1.961,1.054c2.266,1.381 2.061,4.007 2.061,4.007z M119.107,89.256c0,4.718 -5.893,4.646 -5.893,4.646c-6.781,0 -6.285,-4.872 -6.285,-4.872v-13.095h4.84l0.016,12.976c0,1.454 1.361,1.381 1.361,1.381c1.295,0 1.23,-1.417 1.23,-1.417v-12.94h4.73v13.096l0.001,0.225z M139.191,93.395h-5.26l-4.693,-10.497h-0.197l0.264,10.496h-4.412v-17.166h5.422l4.533,10.41h0.193l-0.318,-10.413h4.469v17.166z',
    viewBox: '0 0 192.756 192.756'
  }
  // 如果后续新增图标，直接在这里追加
};

// 占位图标（当 key 找不到时使用）
const PLACEHOLDER_PATH = 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.6c3.536 0 6.4 2.864 6.4 6.4s-2.864 6.4-6.4 6.4-6.4-2.864-6.4-6.4 2.864-6.4 6.4-6.4zm0 2.4c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 2.4c.884 0 1.6.716 1.6 1.6s-.716 1.6-1.6 1.6-1.6-.716-1.6-1.6.716-1.6 1.6-1.6z';
const PLACEHOLDER_VIEWBOX = '0 0 24 24';

// ================================================================
// 绘制商标（从内嵌数据读取）
// ================================================================
function drawLogo(ctx, key, cx, cy, size, color = '#ffffff') {
  let logo = LOGO_PATHS[key];
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