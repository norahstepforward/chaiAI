import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// 知识链接落地页：原站知识栏目的总入口
const SECTIONS = [
  {
    group: '成长路线',
    items: [
      { path: '/learning-path', label: '拆成长', emoji: '🧭', desc: '三级九拆过级路线，33 个官方技能点逐项拆解' },
      { path: '/skills', label: '拆技能', emoji: '⚡', desc: '每个技能拆成便签 + 信息图 + 可下载 Skill' },
    ],
  },
  {
    group: '知识库',
    items: [
      { path: '/hot', label: '拆经典', emoji: '📖', desc: '2255 本致用经典热拆库，1713 本已有拆页' },
      { path: '/chailive/', label: '拆指南', emoji: '📚', desc: 'RIA 便签法全库共拆（外部站点）', external: true },
    ],
  },
  {
    group: '社区与工作坊',
    items: [
      { path: '/chaibuddy', label: '拆搭子', emoji: '🤝', desc: '5473 位拆书家名录，按城市 / 标签匹配搭子' },
      { path: '/workshops', label: '拆软件', emoji: '🖥️', desc: 'AI 软件工作坊，当场拆开真软件跑通工作流' },
    ],
  },
  {
    group: '进阶玩法',
    items: [
      { path: '/skill-fusion', label: '拆专家', emoji: '🧠', desc: '思想家蒸馏成可召唤的领域 AI 专家团' },
      { path: '/coai', label: '共拆AI', emoji: '🚀', desc: '六条合作线全部开放' },
    ],
  },
]

export default function Knowledge() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden pb-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-[128px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-emerald-500/25 text-emerald-700 text-sm font-semibold">
              知识链接 · 站内知识资产总入口
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">八个知识栏目，一个入口</span>
            </h1>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
              本站沉淀的知识库与共学社区：从经典拆解到 AI 工作坊，全部开放浏览。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {SECTIONS.map((sec, gi) => (
          <section key={sec.group}>
            <div className="eyebrow mb-3">{sec.group}</div>
            <div className="grid md:grid-cols-2 gap-4">
              {sec.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (gi + i) * 0.06 }}
                >
                  {item.external ? (
                    <a href={item.path} className="group block h-full apple-card p-6">
                      <ItemBody item={item} />
                    </a>
                  ) : (
                    <Link to={item.path} className="group block h-full apple-card p-6">
                      <ItemBody item={item} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function ItemBody({ item }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-black/[.04] flex items-center justify-center text-2xl shrink-0">{item.emoji}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="text-[17px] font-black text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">{item.label}</div>
          {item.external && <span className="text-[10px] text-[#86868b] px-1.5 py-0.5 rounded bg-black/[.04]">外部</span>}
        </div>
        <div className="text-[13px] text-[#6e6e73] leading-relaxed mt-1">{item.desc}</div>
        <div className="text-[12px] text-[#0071e3] font-semibold mt-2">进入 →</div>
      </div>
    </div>
  )
}
