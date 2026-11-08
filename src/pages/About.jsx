import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { CONTACT_EMAIL, WECHAT, mailtoLink } from '../lib/siteConfig'

export default function About() {
  const infoList = [
    { label: '身份', value: '窗饰遮阳产业供应链出海观察者' },
    { label: '专注', value: '全球合规与出海供应链' },
    { label: '所在地', value: '广东佛山' },
    { label: '内容阵地', value: '公众号 + 海外（待定）' },
    ...(WECHAT ? [{ label: '微信', value: WECHAT }] : []),
    ...(CONTACT_EMAIL
      ? [{ label: '邮箱', value: CONTACT_EMAIL, href: mailtoLink('来自网站关于页') }]
      : []),
  ]
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          {/* Avatar and name */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white text-3xl font-black">诺</div>
            <h1 className="text-3xl md:text-4xl font-black text-[#1d1d1f] mb-2">诺拉</h1>
            <p className="text-neon-purple font-medium">窗饰遮阳产业出海观察者 · 专注全球合规与出海供应链</p>
          </div>

          {/* Info grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {infoList.map(info => (
              <div key={info.label} className="p-4 rounded-xl bg-dark-card-hover/50 border border-dark-border">
                <div className="text-xs text-[#86868b] mb-1">{info.label}</div>
                <div className="text-sm text-[#1d1d1f]">
                  {info.href
                    ? <a href={info.href} className="text-[#0071e3] hover:underline break-all">{info.value}</a>
                    : info.value}
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">关于我</h2>
            <div className="space-y-3 text-sm text-[#6e6e73] leading-relaxed">
              <p className="text-base font-bold text-[#1d1d1f]">我是诺拉，窗饰遮阳产业供应链出海的观察者——专注全球合规与出海供应链。</p>
              <p>长期深入窗饰遮阳产业链上游，观察工厂、组件与跨境渠道的真实运转，把一线的规则和变化写给需要出海的企业。</p>
              <p className="flex flex-wrap gap-2 mt-4">
                {['产业溯源', '出海合规', '行业对话'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs">
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* 我做什么 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">我做什么</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { name: '产业溯源内容', desc: '深入窗饰遮阳产业链上游，把工厂、组件、供应链的真实运转写出来给企业看' },
                { name: '出海合规观察', desc: '跟踪欧美 / 中东 / 东南亚市场的认证、标准与采购规则变化' },
                { name: '行业对话 IP', desc: '公众号 + 海外（待定），做窗饰产业人物的深度对话' },
              ].map(s => (
                <div key={s.name} className="p-4 rounded-xl bg-dark-card-hover/50 border border-dark-border">
                  <div className="text-lg font-bold text-[#1d1d1f] mb-1">{s.name}</div>
                  <div className="text-xs text-[#6e6e73]">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 公众号 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">公众号</h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/images/gzh-qr.png"
                alt="公众号「窗饰遮阳出海观察」二维码"
                className="w-44 h-44 rounded-xl border border-dark-border bg-white"
              />
              <div className="text-center sm:text-left space-y-3">
                <span className="inline-block px-4 py-2 rounded-lg bg-neon-purple/10 border border-neon-purple/20 text-base font-bold text-neon-purple">
                  窗饰遮阳出海观察
                </span>
                <p className="text-sm text-[#6e6e73]">微信扫码关注，第一时间收到产业溯源与出海合规更新</p>
                <p className="text-xs text-[#86868b]">微信搜一搜：窗饰遮阳出海观察 · 原始ID gh_267595e27396</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
