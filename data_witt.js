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
        { value: "zh-CN-YunyangNeural", label: "📰 新闻男声" },
        { value: "zh-CN-XiaoxiaoNeural", label: "🎀 温柔女声" },
        { value: "zh-CN-XiaoyiNeural", label: "🌸 抒情女声" },
        { value: "zh-CN-XiaorouNeural", label: "🧸 自然女声" }
    ]
};

export const WELCOME_CONFIG = {
    emoji: '🧠',
    mainTitle: '维特根斯坦与智能涌现',
    subTitle: '语言游戏 · 大模型 · 逻辑闭环',
    descText: '下一词预测如何重构哲学边界',
    actionBtnText: '⚡ 进入语言游戏场'
};

export const SCRIPT_DATA_RAW = [
    { 
        category: "☕ 问题意识", 
        title: "第一步：涌现现象击碎了何种观念？", 
        hook: "没有灵魂的黑箱，为什么能在高维符号中展现推理特征？", 
        detail: "以ChatGPT为代表的大语言模型在达到特定参数规模后，展现出了强大的上下文推理与文本生成行为。这种从量变到质变的过程被称为涌现。涌现现象的核心冲击在于，它打破了传统认知中机器只能执行死板规则的陈旧观念，证明了高维度的概率拟合同样能够逼近人类思维的表象。", 
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ludwig_Wittgenstein.jpg" 
    },
    { 
        category: "🧩 语言游戏", 
        title: "第二步：大模型的本质是概率还是游戏？", 
        hook: "意义不在于符号本身，而在于符号在网络中的使用方式。", 
        detail: "维特根斯坦在后期哲学中提出语言游戏说，指出语言的意义并不源于对客观世界的绝对映射，而取决于它在特定规则下的实际使用。大语言模型本质上不理解物理世界，它通过海量文本训练，掌握的是高维向量空间里的符号组合规则。每一次预测下一词，都是在严格执行人类语言积淀下来的博弈游戏。", 
        img: "https://placehold.co/600x400/111111/ffffff?text=Language+Games" 
    },
    { 
        category: "⚡ 意义即使用", 
        title: "第三步：高维向量如何对齐哲学概念？", 
        hook: "别看思想，看使用。大模型对语境的捕捉展现了这种纯粹性。", 
        detail: "在Transformer架构中，一个词的向量是由它周围所有的上下文共同决定的。这与维特根斯坦词语的意义在于其具体使用的断言不谋而合。大模型不需要拥有人类的肉身意识，它仅仅通过统计学上的上下文分布，就抓取到了语言概念的全部网络关联，从而在行为表现上实现了与人类对齐的智能。", 
        img: "https://placehold.co/600x400/1e1e1e/ffffff?text=Meaning+as+Use" 
    },
    { 
        category: "🔒 逻辑闭环", 
        title: "第四步：语言的边界是否就是AI的边界？", 
        hook: "凡是能够说的，都能够说清楚；凡是不能谈论的，必须保持沉默。", 
        detail: "大模型的一切幻觉、逻辑漏洞与局限性，恰恰标注了训练语料所能覆盖的逻辑边界。模型无法超越其符号边界去感知真实。当人类用自然语言作为代码去提示、驯服大模型时，我们是在大模型的边界内与之共同拓展语言游戏的新领地。机器的逻辑闭环，正折射出人类理性语言的自我限制。", 
        img: "https://placehold.co/600x400/2c3e4f/ffffff?text=Logical+Limits" 
    }
];
