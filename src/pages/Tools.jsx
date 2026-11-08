import { motion } from 'framer-motion'

// ==================== 方法工具 · 内容数据（示例框架，待充实） ====================
// 三类内容：分析框架（怎么看供应链）、合规清单（怎么过准入）、评估方法（怎么选市场）

const FRAMEWORKS = [
  {
    emoji: '🔍',
    name: '供应链五环拆解法',
    desc: '把任何窗饰产品拆成五个观察环：原材料 → 组件 → 成品 → 渠道 → 终端，逐环看毛利分布、话语权与质量风险点。',
    points: ['每环的核心玩家是谁', '价格加成的合理区间', '质量事故的高发环节'],
    accent: 'border-indigo-500/30 bg-indigo-500/10',
    status: '框架示例 · 待充实',
  },
  {
    emoji: '⚖️',
    name: '大B / 小B 采购差异模型',
    desc: '成品厂买组件（大B逻辑：一致性、交期、成本），独立站与改造商买整套系统（小B逻辑：易安装、售后、起订量）。两套逻辑对照使用，判断客户真实诉求。',
    points: ['大B看稳定，小B看灵活', '报价策略完全不同', '售后责任的分界线'],
    accent: 'border-teal-500/30 bg-teal-500/10',
    status: '框架示例 · 待充实',
  },
  {
    emoji: '🗺️',
    name: '品类定位四象限',
    desc: '以「毛利 × 刚需」划四象限，给品类定位：卷帘是流量基石，蜂巢是利润引擎，轨道是工程刚需，调速离合器是差异化壁垒。',
    points: ['流量品 vs 利润品', '工程刚需 vs 零售弹性', '组合拳的排布逻辑'],
    accent: 'border-rose-500/30 bg-rose-500/10',
    status: '框架示例 · 待充实',
  },
]

const CHECKLISTS = [
  {
    region: '欧盟',
    items: [
      { text: 'CE 符合性声明与适用 EN 标准核对', done: 'doc' },
      { text: '公告机构测试报告有效期确认', done: 'doc' },
      { text: 'REACH / 化学品合规文件', done: 'doc' },
      { text: '包装与说明书语言本地化', done: 'material' },
    ],
  },
  {
    region: '中东',
    items: [
      { text: '第三方验货安排（出货前检验）', done: 'process' },
      { text: '阶段性付款与信用保险', done: 'finance' },
      { text: '高温高湿环境下的材料适配', done: 'tech' },
      { text: '清真认证敏感物料排查（如涉及）', done: 'doc' },
    ],
  },
  {
    region: '东南亚',
    items: [
      { text: '市场分层定价（新加坡 vs 其他）', done: 'strategy' },
      { text: '防潮防霉包装方案', done: 'material' },
      { text: '本地经销与售后责任划分', done: 'process' },
      { text: '关税与原产地规则确认', done: 'doc' },
    ],
  },
]

const MARKETS = [
  { region: '欧美', position: '主攻', logic: '合规门槛高但订单稳定，适合有认证能力与交期保障的供应商；工程与零售双渠道并行。', tag: '高门槛 · 高复利' },
  { region: '中东', position: '精选', logic: '项目制大单与付款风险并存，绑定靠谱工程商比广撒网更有效；验货体系是入场券。', tag: '大单 · 控风险' },
  { region: '东南亚', position: '分层', logic: '双层市场结构：新加坡对标欧美品质，其余市场手动系统走量；用产品线分层覆盖。', tag: '分层覆盖' },
]

export default function Tools() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden pb-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-[128px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-teal-500/10 border border-violet-500/25 text-violet-700 text-sm font-semibold">
              方法工具 · 观察的方法论
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">看产业，用框架而不是感觉</span>
            </h1>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
              我用来做产业观察的三类工具：拆解框架、合规清单、市场分层评估。
              全部来自一线观察，持续迭代——拿去就能用。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* 分析框架 */}
        <section className="mb-14">
          <div className="mb-5">
            <div className="eyebrow mb-1">分析框架</div>
            <h2 className="text-2xl font-black text-[#1d1d1f]">怎么看懂一条供应链</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {FRAMEWORKS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.accent} flex items-center justify-center text-2xl mb-4`}>{f.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[#1d1d1f]">{f.name}</h3>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">{f.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {f.points.map(p => (
                    <li key={p} className="text-[13px] text-[#6e6e73] flex gap-2">
                      <span className="text-[#0071e3] shrink-0">→</span>{p}
                    </li>
                  ))}
                </ul>
                <span className="text-[10px] text-[#86868b] px-2 py-0.5 rounded bg-black/[.04]">{f.status}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 合规清单 */}
        <section className="mb-14">
          <div className="mb-5">
            <div className="eyebrow mb-1">出海合规清单</div>
            <h2 className="text-2xl font-black text-[#1d1d1f]">三大市场的准入自查项</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {CHECKLISTS.map((c, i) => (
              <motion.div
                key={c.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1d1d1f]">{c.region}</h3>
                  <span className="text-[10px] text-[#86868b] px-2 py-0.5 rounded bg-black/[.04]">示例 · 待充实</span>
                </div>
                <ul className="space-y-3">
                  {c.items.map(item => (
                    <li key={item.text} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-4 h-4 rounded border border-black/15 bg-white shrink-0" />
                      <span className="text-[13px] text-[#6e6e73] leading-snug">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 市场分层 */}
        <section className="mb-14">
          <div className="mb-5">
            <div className="eyebrow mb-1">市场分层评估</div>
            <h2 className="text-2xl font-black text-[#1d1d1f]">目标市场怎么排兵布阵</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {MARKETS.map((m, i) => (
              <motion.div
                key={m.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-[#1d1d1f]">{m.region}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 text-[#0071e3] text-[11px] font-semibold">{m.position}</span>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-3">{m.logic}</p>
                <span className="text-[11px] text-[#86868b] font-semibold">{m.tag}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 订阅 */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/10 to-teal-500/10 border border-violet-500/20 text-center">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">清单与框架持续迭代</h3>
          <p className="text-sm text-[#6e6e73] mb-4">新版本第一时间在公众号发布，欢迎来交流你的用法与补充。</p>
          <a href="/about" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0071e3] text-white font-medium text-sm hover:bg-[#0077ed] transition-colors">
            去关注 →
          </a>
        </section>
      </div>
    </div>
  )
}
