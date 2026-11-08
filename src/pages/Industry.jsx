import { motion } from 'framer-motion'

// ==================== 产业专栏 · 内容数据（示例条目，待替换） ====================
// 两个栏目：溯源系列（深度长文） + 行业对话（IP 栏目）
// 更新方式：编辑下方数组。文章有了真实链接后，把 href 填上即可点击跳转。

const SERIES = [
  {
    no: '001',
    title: '一支卷帘的旅程：从注塑车间到欧洲客厅',
    desc: '从离合器、卷管、面料到成品包装，跟踪一支出口卷帘的全链条成本与工艺节点——每个环节的毛利与话语权分布。',
    tag: '供应链溯源',
    region: '欧美线',
    href: null,
    status: '选题示例 · 待撰写',
  },
  {
    no: '002',
    title: '佛山产业带：70000㎡ 工厂里的窗饰世界',
    desc: '走进窗饰组件工厂，看自动化产线、质检流程与 OEM 大B订单的交付节奏，理解「中国供应链为什么被全球采购」。',
    tag: '产业带观察',
    region: '中国佛山',
    href: null,
    status: '选题示例 · 待撰写',
  },
  {
    no: '003',
    title: '蜂巢帘的高毛利从哪里来',
    desc: '拆解蜂巢系统的成本结构：型材精度、面料工艺、配件配套率——为什么它是成品厂最值得押注的品类之一。',
    tag: '品类拆解',
    region: '欧美线',
    href: null,
    status: '选题示例 · 待撰写',
  },
  {
    no: '004',
    title: '工程商的选型清单：酒店项目里谁说了算',
    desc: '从甲方、设计院到安装承包商，还原酒店窗饰项目的决策链——组件供应商应该在哪一环进场。',
    tag: '渠道决策链',
    region: '全球',
    href: null,
    status: '选题示例 · 待撰写',
  },
]

const DIALOGUE = [
  {
    no: 'EP.01',
    guest: '（嘉宾待定）',
    title: '对话出海成品厂老板：一年 500 个货柜的教训与复利',
    desc: '与深耕欧美市场十年的成品厂主理人聊渠道、认证与踩坑。',
    status: '筹备中',
  },
  {
    no: 'EP.02',
    guest: '（嘉宾待定）',
    title: '对话工程商：大型项目的窗饰采购是怎么谈成的',
    desc: '从投标到交付，听工程端讲采购逻辑与供应商淘汰机制。',
    status: '筹备中',
  },
  {
    no: 'EP.03',
    guest: '（嘉宾待定）',
    title: '对话组件研发工程师：一个好离合器的标准是什么',
    desc: '技术视角拆解手感、噪音与寿命背后的工程取舍。',
    status: '筹备中',
  },
]

export default function Industry() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden pb-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-[128px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/25 text-amber-700 text-sm font-semibold">
              产业专栏 · 深度内容
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">把产业链上游，写给你看</span>
            </h1>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
              两个栏目：「产业溯源」深入工厂与供应链，写真实的运转与成本；
              「行业对话」约谈产业里的人，把一线经验变成公共知识。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* 产业溯源系列 */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-5">
            <div>
              <div className="eyebrow mb-1">产业溯源系列</div>
              <h2 className="text-2xl font-black text-[#1d1d1f]">供应链深度长文</h2>
            </div>
            <span className="text-xs text-[#86868b]">首发于公众号，此处归档</span>
          </div>
          <div className="space-y-4">
            {SERIES.map((s, i) => (
              <motion.article
                key={s.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`apple-card p-6 flex flex-col md:flex-row md:items-center gap-4 ${!s.href ? 'opacity-80' : ''}`}
              >
                <div className="text-2xl font-black text-black/[.12] md:w-16 shrink-0">{s.no}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[11px] font-semibold">{s.tag}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/[.04] text-[#86868b] text-[11px] font-semibold">{s.region}</span>
                    {s.status && <span className="px-2 py-0.5 rounded bg-black/[.04] text-[#86868b] text-[10px]">{s.status}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-[#1d1d1f] mb-1 leading-snug">{s.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
                </div>
                {s.href ? (
                  <a href={s.href} className="shrink-0 px-5 py-2 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors">阅读全文 →</a>
                ) : (
                  <span className="shrink-0 px-5 py-2 rounded-full bg-black/[.04] text-[#86868b] text-sm font-medium">待发布</span>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* 行业对话 IP */}
        <section className="mb-14">
          <div className="mb-5">
            <div className="eyebrow mb-1">行业对话 IP</div>
            <h2 className="text-2xl font-black text-[#1d1d1f]">和产业里的人聊透一件事</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {DIALOGUE.map((d, i) => (
              <motion.div
                key={d.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-black text-[#0071e3]">{d.no}</span>
                  <span className="px-2 py-0.5 rounded bg-black/[.04] text-[#86868b] text-[10px]">{d.status}</span>
                </div>
                <div className="text-xs text-[#86868b] mb-2">对话 {d.guest}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2 leading-snug">{d.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 投稿与合作 */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/20 text-center">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">你有值得被写下来的产业故事？</h3>
          <p className="text-sm text-[#6e6e73] mb-4">成品厂、工程商、组件研发——欢迎提供选题线索，或成为下一期对话嘉宾。</p>
          <a href="/about" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d1d1f] text-white font-medium text-sm hover:bg-black transition-colors">
            联系我 →
          </a>
        </section>
      </div>
    </div>
  )
}
