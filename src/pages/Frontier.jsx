import { motion } from 'framer-motion'

// ==================== 窗饰前沿 · 内容数据（示例条目，待替换） ====================
// 更新方式：直接编辑下方数组，每条 { date, tag, title, desc, region }
// date 格式随意，tag 控制分类标签，region 控制市场区域角标

const TRENDS = [
  {
    date: '2026-11',
    tag: '技术趋势',
    region: '全球',
    title: '电机智能化：从遥控到生态兼容',
    desc: '窗饰电机的竞争重心正从「能电动」转向「进生态」。Matter 协议成为欧美智能家居的事实入口，组件厂商的差异化机会在「生态兼容配件」而非电机本体认证——认证成本高、周期长，兼容层反而是大B采购决策的加分项。',
    status: '示例 · 待替换',
  },
  {
    date: '2026-10',
    tag: '产品趋势',
    region: '欧美',
    title: '蜂巢帘：高毛利品类继续走高',
    desc: '节能法规趋严推动蜂巢帘在欧美零售与工程市场渗透率上行。对成品厂而言，蜂巢系统的供应链深度（型材、布料、配件配套）决定毛利空间，上游组件一致性成为采购核心考量。',
    status: '示例 · 待替换',
  },
  {
    date: '2026-09',
    tag: '供应链',
    region: '全球',
    title: '调速离合器：被忽视的差异化部件',
    desc: '卷帘系统的手感差异一半来自离合器。调速离合器的噪音控制、寿命测试数据，正在成为工程商选型的隐性门槛，也是组件供应商建立技术壁垒的切入点。',
    status: '示例 · 待替换',
  },
]

const COMPLIANCE = [
  {
    date: '2026-11',
    tag: '市场准入',
    region: '欧盟',
    title: 'CE / EN 13561 之下的细节坑',
    desc: '外部遮阳产品的 EN 标准体系更新后，公告机构对耐候性与机械安全的文件要求趋严。示例条目：概述欧盟市场准入的常见文件缺口。（待替换为你的合规观察正文）',
    status: '示例 · 待替换',
  },
  {
    date: '2026-10',
    tag: '采购规则',
    region: '中东',
    title: '中东工程渠道的付款与验货惯例',
    desc: '中东大型项目采购普遍要求第三方验货与阶段性付款绑定。示例条目：概述中东工程商的采购决策链与风险偏好。（待替换为你的观察正文）',
    status: '示例 · 待替换',
  },
  {
    date: '2026-09',
    tag: '市场准入',
    region: '东南亚',
    title: '东南亚市场的价格敏感分层',
    desc: '东南亚市场呈明显的双层结构：新加坡对品质与合规要求对标欧美，其余市场对手动系统与价格敏感度高。示例条目：概述分层打法。（待替换）',
    status: '示例 · 待替换',
  },
]

const EVENTS = [
  { date: '2027-02', name: 'R+T Stuttgart', region: '德国斯图加特', desc: '全球遮阳窗饰行业最大展会，三年一届，成品厂、组件商、工程商全面到场。' },
  { date: '每年 3 月', name: 'R+T Asia / 门展季', region: '中国上海', desc: '亚洲市场风向标，适合观察国内厂商的出海产品线与外销报价策略。' },
  { date: '每年 10 月', name: '国际智能遮阳与门窗产业展', region: '中国佛山', desc: '华南产业本地展会，观察佛山产业带组件供应链的一手窗口。' },
]

const regionColor = {
  '全球': 'bg-slate-500/10 text-slate-600 border-slate-500/20',
  '欧美': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
  '欧盟': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
  '中东': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  '东南亚': 'bg-teal-500/10 text-teal-600 border-teal-500/20',
}

function Card({ item, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="apple-card p-6"
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs font-semibold text-[#86868b]">{item.date}</span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 text-[#0071e3] text-[11px] font-semibold">{item.tag}</span>
        <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${regionColor[item.region] || regionColor['全球']}`}>{item.region}</span>
        {item.status && (
          <span className="ml-auto px-2 py-0.5 rounded bg-black/[.04] text-[#86868b] text-[10px]">{item.status}</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-[#1d1d1f] mb-2 leading-snug">{item.title}</h3>
      <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
    </motion.article>
  )
}

export default function Frontier() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden pb-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/25 text-sky-700 text-sm font-semibold">
              窗饰前沿 · 动态观察
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">全球窗饰遮阳产业，正在发生什么</span>
            </h1>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
              技术趋势、市场准入与采购规则的一线观察。面向成品厂、工程商与品牌方——
              帮你把「听说」变成「看懂」。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* 技术与产品趋势 */}
        <section className="mb-14">
          <div className="flex items-end justify-between mb-5">
            <div>
              <div className="eyebrow mb-1">技术与产品趋势</div>
              <h2 className="text-2xl font-black text-[#1d1d1f]">电机、面料与结构的方向</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {TRENDS.map((t, i) => <Card key={t.title} item={t} i={i} />)}
          </div>
        </section>

        {/* 市场与合规 */}
        <section className="mb-14">
          <div className="mb-5">
            <div className="eyebrow mb-1">市场与合规快讯</div>
            <h2 className="text-2xl font-black text-[#1d1d1f]">欧美 · 中东 · 东南亚的规则变化</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {COMPLIANCE.map((t, i) => <Card key={t.title} item={t} i={i} />)}
          </div>
        </section>

        {/* 展会日历 */}
        <section className="mb-14">
          <div className="mb-5">
            <div className="eyebrow mb-1">展会日历</div>
            <h2 className="text-2xl font-black text-[#1d1d1f]">值得到场的世界级窗口</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {EVENTS.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className="text-xs font-semibold text-[#86868b] mb-2">{e.date} · {e.region}</div>
                <div className="text-lg font-bold text-[#1d1d1f] mb-2">{e.name}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 订阅引导 */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 text-center">
          <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">前沿观察，第一时间送达</h3>
          <p className="text-sm text-[#6e6e73] mb-4">关注公众号「窗饰遮阳出海观察」，动态与快讯同步更新。</p>
          <a href="/about" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0071e3] text-white font-medium text-sm hover:bg-[#0077ed] transition-colors">
            去关注 →
          </a>
        </section>
      </div>
    </div>
  )
}
