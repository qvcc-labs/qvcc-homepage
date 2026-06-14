/**
 * 📦 模块化主题资产包：维特根斯坦与智能涌现（学术深度扩充版）
 * 图片链接：维基媒体公共领域 / CC BY-SA 资源，确保稳定可用
 * 内容修订：基于审阅建议优化论证，新增总结章节
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
        { value: "zh-CN-XiaoyiNeural", label: "🌸 抒情女声" }
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
        detail: "以ChatGPT为代表的大语言模型在达到特定参数规模后，展现出了强大的上下文推理与文本生成行为。这种从量变到质变的过程在控制论中被称为涌现。涌现现象的核心冲击在于，它彻底打破了自笛卡尔以来'思维必须依赖非物质的灵魂实体'的直觉，证明了无意识的统计系统也能产生类理性的符号行为。它迫使我们重新审视理性的本质：智能或许并不需要一个超验的灵魂作为载体，只要符号序列的统计密度足够高，规则与逻辑就能在无意识的黑箱中自然编织出来。",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ludwig_Wittgenstein_1910.jpg"
    },
    {
        category: "🧩 语言游戏",
        title: "第二步：大模型的本质是概率还是游戏？",
        hook: "意义不在于符号本身，而在于符号在网络中的使用方式。",
        detail: "维特根斯坦在后期哲学中提出语言游戏说，指出语言的意义并不源于对客观世界的绝对映射，而取决于它在特定的社会生活流和规则下的实际使用。大语言模型本质上不具备任何物理世界的实体感知，它通过海量语料的训练，掌握的是高维向量空间里的符号组合概率。每一次预测下一词，都是在严格执行人类语言积淀下来的博弈游戏。模型并非在理解，而是在玩一场精密的符号接龙，在这场游戏里，语境的流变决定了概念的流变，概率的叠加涌现出了表象的智慧。然而需要警醒的是，模型虽然模拟了语言游戏的产物（文本序列），却永远无法参与一个需要肉身、疼痛与共同实践的真实语言游戏——这是其'虚假游戏'的根本局限。",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Wittgenstein_Philosophical_Investigations_-_Opening_page.jpg/800px-Wittgenstein_Philosophical_Investigations_-_Opening_page.jpg"
    },
    {
        category: "⚡ 家族相似性",
        title: "第三步：潜空间向量如何对齐哲学概念？",
        hook: "别去寻找事物之间共同的本质，要去看它们交织的相似性纽带。",
        detail: "在传统符号派AI中，概念有着严苛的定义，这屡屡遭遇破产。而维特根斯坦用家族相似性指出，同一概念的各个样本之间并没有统一的本质特征，只有重叠、交叉的相似性。在Transformer的嵌入潜空间中，一个词的向量是由它周围所有的上下文动态决定的。这种连续的、多维的向量分布，完美对齐了家族相似性的哲学模型。大模型在没有建立任何僵化本体树的情况下，仅通过捕捉这些重叠交织的向量亲缘关系，就抓取到了人类概念的动态全貌。不过需要指出：维特根斯坦反对一切'隐藏的本质'，而大模型的潜空间虽然动态，却可能通过聚类产生新的原型范畴——这恰好是AI与后期维特根斯坦的一个潜在冲突点。",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Family_resemblance_venn.svg/800px-Family_resemblance_venn.svg.png"
    },
    {
        category: "🏛️ 实在与图画",
        title: "第四步：世界是事实的总体，还是词语的总体？",
        hook: "我们在大模型面前的惊叹，来源于我们自己铸造的图画迷宫。",
        detail: "维特根斯坦在早期《逻辑哲学论》中提出图画说，断言语言是实在的图画，世界的边界由语言的边界决定。大语言模型对人类世界的全部认知，完全建立在人类历史文本这一语言图画之上。它面对的不是真实的客观存在，而是由事实构成的文本图景。这意味着，大模型无法通过自省去纠正逻辑幻觉，因为在纯粹的符号图画中，真理与谎言都只是概率分布。值得玩味的是，大模型恰好复活了早期维特根斯坦的图画理论——它把人类文本当作世界的完备图画，而后期维特根斯坦恰恰要摧毁这种图画崇拜。因此，大模型更接近《逻辑哲学论》时期的语言观，而非后期哲学。我们对大模型智能的惊叹，实质上是人类面对自身数千年语言图画在镜子中高维投影时的自我震撼。",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Tractatus_Logico-Philosophicus_first_edition.jpg/800px-Tractatus_Logico-Philosophicus_first_edition.jpg"
    },
    {
        category: "🔒 逻辑闭环",
        title: "第五步：无法说出的沉默，是否就是AI的死角？",
        hook: "凡是能够说的，都能够说清楚；凡是不能谈论的，必须保持沉默。",
        detail: "大模型的一切逻辑漏洞与局限性，恰恰标注了人类训练语料所能覆盖的理性边界。模型无法超越其符号系统去感知那些不可说的神秘之域，如纯粹的直觉或切身的痛苦。当人类用自然语言作为代码去提示、驯服大模型时，我们是在大模型的逻辑闭环内，与之共同拓展语言游戏的新领地。模型可以输出'我感到了痛苦'这句话，却永远无法用沉默来展示真正的痛苦——这种空洞的能指游戏，正是其逻辑闭环中最大的裂缝。那些无法被数值化、无法被下一词预测捕捉的内容，被冷酷地排除在系统的视界之外。机器的沉默，不仅是AI的死角，更是一面折射人类理性语言边界的镜子。",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Wittgenstein_grave_in_Cambridge.jpg/800px-Wittgenstein_grave_in_Cambridge.jpg"
    },
    {
        category: "📌 结语",
        title: "维特根斯坦的AI预言：语言界限与未来智能",
        hook: "语言的边界就是世界的边界，但边界之外的东西才是理解的关键。",
        detail: "大模型证明了一条维特根斯坦式的真理：语言的边界就是世界的边界。它能完美地操纵语言边界之内的所有符号游戏，展现出令人惊叹的涌现智能。但边界之外的东西——身体性的参与、无法言说的疼痛、沉默中的伦理判断、植根于生活形式的共同实践——正是未来智能体能否真正跨越'理解'鸿沟的关键试金石。维特根斯坦提醒我们：不要被语言的平滑表面迷惑。当一个大模型说出'我明白'的时候，它只是在语言游戏中走对了下一步。真正的理解需要参与世界，而不仅仅是描述世界。这既是AI的极限，也是我们反思自身智能本质的最佳透镜。",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ludwig_Wittgenstein_reading.jpg/800px-Ludwig_Wittgenstein_reading.jpg"
    }
];
