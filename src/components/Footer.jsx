import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, mailtoLink } from '../lib/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-black/[.06] bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-[17px] font-bold text-[#1d1d1f] mb-2">窗饰遮阳出海观察</div>
            <p className="text-[13px] leading-relaxed text-[#86868b] max-w-sm">
              窗饰遮阳产业供应链出海的观察阵地——专注全球合规与出海供应链。
            </p>
          </div>
          <div>
            <div className="text-[12px] font-semibold text-[#1d1d1f] mb-3">内容</div>
            <ul className="space-y-2 text-[13px] text-[#6e6e73]">
              <li><Link to="/frontier" className="hover:text-[#0071e3] transition-colors">窗饰前沿</Link></li>
              <li><Link to="/industry" className="hover:text-[#0071e3] transition-colors">产业专栏</Link></li>
              <li><Link to="/tools" className="hover:text-[#0071e3] transition-colors">方法工具</Link></li>
              <li><Link to="/about" className="hover:text-[#0071e3] transition-colors">关于我</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-semibold text-[#1d1d1f] mb-3">知识链接</div>
            <ul className="space-y-2 text-[13px] text-[#6e6e73]">
              <li><Link to="/knowledge" className="hover:text-[#0071e3] transition-colors">知识栏目总入口</Link></li>
              <li><Link to="/hot/books" className="hover:text-[#0071e3] transition-colors">拆经典</Link></li>
              <li><Link to="/workshops" className="hover:text-[#0071e3] transition-colors">拆软件工作坊</Link></li>
              <li><Link to="/skills" className="hover:text-[#0071e3] transition-colors">拆技能</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-black/[.06] flex flex-col md:flex-row justify-between gap-2 text-[12px] text-[#86868b]">
          <span>
            © 2026 窗饰遮阳出海观察 · 诺拉
            {CONTACT_EMAIL && (
              <> · 邮箱 <a href={mailtoLink('来自网站页脚')} className="hover:text-[#0071e3] transition-colors">{CONTACT_EMAIL}</a></>
            )}
          </span>
          <span>窗饰遮阳产业供应链出海的观察阵地</span>
        </div>
      </div>
    </footer>
  )
}
