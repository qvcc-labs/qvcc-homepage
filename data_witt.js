/**
 * 📦 模块化主题资产包：维特根斯坦与智能涌现
 */

export const THEME_CONFIG = {
    primaryColor: '#b91c1c',           
    primaryBgLight: '#fff5f5',         
    borderColor: 'rgba(185, 28, 28, 0.35)', 
    footerText: '# 维特根斯坦大模型连续叙事'    
};

export const VOICE_CONFIG = {
    defaultVoice: "zh-CN-YunjianNeural", 
    options: [
        { value: "zh-CN-YunjianNeural", label: "📖 专业男声" },
        { value: "zh-CN-YunxiNeural", label: "⚡ 活力男声" },
        { value: "zh-CN-XiaoxiaoNeural", label: "🎀 温柔女声" }
    ]
};

export const WELCOME_CONFIG = {
    emoji: '🧠',
    mainTitle: '维特根斯坦与智能涌现',
    subTitle: '语言游戏 · 大模型 · 逻辑闭环',
    descText: '下一词预测如何重构哲学边界',
    actionBtnText: '⚡ 进入语言游戏场'
};

export const IMAGE_URLS = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ludwig_Wittgenstein.jpg"
];

export const SCRIPT_DATA_RAW = [
    { 
        category: "☕ 问题意识", 
        title: "第一步：涌现现象击碎了何种观念？", 
        hook: "没有灵魂的黑箱，为什么能在高维符号中展现推理特征？", 
        detail: "以ChatGPT为代表的大语言模型在达到特定参数规模后，展现出了强大的上下文推理与文本生成行为 [训C]。这里放置具体的文章细节段落 [推D]。", 
        img: IMAGE_URLS[0]
    }
];
