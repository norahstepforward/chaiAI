import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// 出海企业最常见的卡点（对应读者的真实处境）
const pains = [
  { q: '询盘来了，却看不懂对方市场的准入规则', a: '认证、标准、验货惯例——每个市场的门槛不一样。前沿板块把规则变化盯起来。' },
  { q: '供应链报价总在被动调，不知道上游发生了什么', a: '原材料、组件、产能的变化传导到你的报价单之前，产业溯源先把它写出来。' },
  { q: '想做品牌出海，找不到产业里真正说话的人', a: '决策链上每一环谁说了算、怎么谈——行业对话直接问一线的人。' },
  { q: '渠道信息都是二手的，判断总慢半拍', a: '工厂、展会、工程商的一手观察，用框架整理成你能直接用的判断。' },
]

// 观察方法：溯源 / 规则 / 对话
const method = [
  {
    k: '溯源',
    d: '走到产业链上游去：进工厂、看产线、拆成本结构。把「听说」变成「看过」，把模糊的供应链写成可核对的环节。',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    k: '规则',
    d: '把认证、标准、采购惯例逐条读进条文里。合规不是门槛清单，是成本与周期的账——帮你提前算清楚。',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    k: '对话',
    d: '约谈产业里的人：成品厂老板、工程商、研发工程师。一线经验比报告值钱，对话把它们变成公共知识。',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
  },
]

// 五大板块全景（与导航同序）
const sections = [
  { k: '窗饰前沿', emoji: '🌐', d: '技术趋势、市场准入与采购规则的动态观察', stat: '动态', statLabel: '欧美 · 中东 · 东南亚', href: '/frontier', tile: 'bg-sky-500/10', num: 'text-sky-600' },
  { k: '产业专栏', emoji: '🏭', d: '产业溯源长文 + 行业人物对话，把上游写给你看', stat: '2 栏目', statLabel: '溯源系列 · 行业对话', href: '/industry', tile: 'bg-amber-500/10', num: 'text-amber-600' },
  { k: '方法工具', emoji: '🧰', d: '供应链拆解框架、合规清单、市场分层评估', stat: '3 类', statLabel: '拿去就能用', href: '/tools', tile: 'bg-violet-500/10', num: 'text-violet-600' },
  { k: '知识链接', emoji: '📚', d: '站内沉淀的知识栏目：经典拆解、AI 工作坊、共学社区', stat: '8 个', statLabel: '全部开放浏览', href: '/knowledge', tile: 'bg-emerald-500/10', num: 'text-emerald-600' },
  { k: '关于', emoji: '🧭', d: '我是谁、我做什么、怎么找到我', stat: '诺拉', statLabel: '窗饰遮阳产业出海观察者', href: '/about', tile: 'bg-rose-500/10', num: 'text-rose-600' },
]

export default function Home() {
  return (
    <div className="hero-wash">
      {/* ==================== Hero ==================== */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="eyebrow mb-4">窗饰遮阳出海观察 · 产业供应链出海观察阵地</div>
            <h1 className="headline text-[44px] md:text-[64px] mb-6">
              看懂窗饰遮阳产业的<br />
              <span className="gradient-text">出海之路。</span>
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-[#6e6e73] max-w-2xl mx-auto mb-9">
              产业溯源、出海合规、行业对话——把产业链上游的工厂、组件与跨境渠道
              写给需要出海的企业。不转述二手信息，只写一线观察。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/industry" className="btn-primary">
                看产业专栏 →
              </Link>
              <Link to="/frontier" className="btn-secondary">
                看前沿动态 →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 出海企业的卡点 ==================== */}
      <section className="py-20 px-4 bg-white border-y border-black/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3 text-center">从你出发</div>
          <h2 className="headline text-[30px] md:text-[38px] text-center mb-12">出海路上，这些卡点是不是很熟悉？</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {pains.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className="text-[16px] font-semibold text-[#1d1d1f] mb-2.5">“{p.q}”</div>
                <div className="text-[14px] leading-relaxed text-[#6e6e73]">{p.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 观察方法 ==================== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3 text-center">我的观察方法</div>
          <h2 className="headline text-[30px] md:text-[38px] text-center mb-4">溯源 · 规则 · 对话</h2>
          <p className="text-center text-[#6e6e73] text-[15px] mb-12 max-w-2xl mx-auto">
            三条腿走路，缺一条就是二手信息。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {method.map((c, i) => (
              <motion.div
                key={c.k}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="apple-card p-7 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#0071e3]/[.08] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </div>
                <div className="text-[18px] font-bold text-[#1d1d1f] mb-2.5">{c.k}</div>
                <div className="text-[13.5px] leading-relaxed text-[#6e6e73]">{c.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 五大板块全景 ==================== */}
      <section className="py-24 px-4 bg-[#f5f5f7] border-y border-black/[.05]">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow mb-3 text-center">站点全景 · 一图看懂</div>
          <h2 className="headline text-[30px] md:text-[40px] text-center mb-4">
            五个板块，一条<span className="gradient-text">从观察到行动的线</span>
          </h2>
          <p className="text-center text-[#6e6e73] text-[15px] mb-14 max-w-2xl mx-auto">
            前沿看动态，专栏读深度，工具拿方法，知识链接沉淀资产——
            每个板块都在持续更新，不摆概念。
          </p>
          <div className="relative">
            <div className="hidden lg:block absolute top-[46px] left-[12%] right-[12%] h-[2px] rounded-full bg-gradient-to-r from-sky-400/50 via-amber-400/50 to-rose-400/50" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {sections.map((m, i) => (
                <motion.div
                  key={m.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                >
                  <Link to={m.href} className="group block h-full apple-card p-5 !shadow-sm">
                    <div className="flex lg:justify-center mb-4">
                      <div className={`relative w-12 h-12 rounded-2xl ${m.tile} flex items-center justify-center text-2xl`}>
                        {m.emoji}
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border border-black/10 text-[9px] font-bold text-[#86868b] flex items-center justify-center shadow-sm">{i + 1}</span>
                      </div>
                    </div>
                    <div className="text-[17px] font-black text-[#1d1d1f] mb-1 lg:text-center">{m.k}</div>
                    <div className="text-[11.5px] leading-snug text-[#6e6e73] mb-4 lg:text-center">{m.d}</div>
                    <div className="lg:text-center">
                      <div className={`text-[22px] font-black leading-none ${m.num}`}>{m.stat}</div>
                      <div className="text-[10px] text-[#86868b] mt-1.5 tracking-wide">{m.statLabel}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/knowledge" className="text-[13px] font-semibold text-[#0071e3] hover:text-[#1d1d1f] transition-colors">
              八个知识栏目在哪 → 看知识链接专页
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 读者带走什么 ==================== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-3 text-center">你能带走什么</div>
          <h2 className="headline text-[30px] md:text-[38px] text-center mb-12">只认一个标准：看完能做判断</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['看得清', '动态与快讯盯住三大市场的规则变化，趋势判断不再慢半拍。'],
              ['拿得走', '框架与清单直接复用：供应链怎么拆、合规怎么查、市场怎么分层。'],
              ['找得到', '决策链上的角色与对话入口——从「找不到人」到「知道该问谁」。'],
            ].map(([t, d], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-[34px] font-bold gradient-text mb-3">0{i + 1}</div>
                <div className="text-[18px] font-bold text-[#1d1d1f] mb-2">{t}</div>
                <div className="text-[13.5px] leading-relaxed text-[#6e6e73]">{d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-4 bg-white border-t border-black/[.05]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline text-[28px] md:text-[36px] mb-4">关注公众号，看见产业链上游的真实运转。</h2>
          <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-6">
            产业溯源、出海合规、行业对话——窗饰遮阳产业链上游的工厂、组件与跨境渠道，把一线的规则和变化写给需要出海的企业。
          </p>
          <div className="flex flex-col items-center gap-3">
            <img src="/images/gzh-qr.png" alt="公众号「窗饰遮阳出海观察」二维码" className="w-[200px] rounded-2xl border border-black/[.06] shadow-[0_8px_28px_rgba(0,0,0,.10)]" />
            <p className="text-[14px] text-[#6e6e73] font-semibold">微信扫码关注「窗饰遮阳出海观察」</p>
            <Link to="/about" className="text-[13px] text-[#0071e3] hover:underline">了解我做的事 →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
