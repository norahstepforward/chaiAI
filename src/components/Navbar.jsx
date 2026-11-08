import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// 主导航：5 大板块
const mainNav = [
  { path: '/frontier', label: '窗饰前沿' },
  { path: '/industry', label: '产业专栏' },
  { path: '/tools', label: '方法工具' },
  { path: '/knowledge', label: '知识链接', dropdown: true },
  { path: '/about', label: '关于' },
]

// 知识链接下拉：原站知识栏目整体收编
const knowledgeLinks = [
  { path: '/learning-path', label: '拆成长', desc: '三级九拆过级路线' },
  { path: '/hot', label: '拆经典', desc: '2255 本致用经典热拆库' },
  { path: '/chailive/', label: '拆指南', desc: 'RIA 便签法全库共拆', external: true },
  { path: '/chaibuddy', label: '拆搭子', desc: '拆书家名录与搭子匹配' },
  { path: '/workshops', label: '拆软件', desc: 'AI 软件工作坊' },
  { path: '/skills', label: '拆技能', desc: '技能拆解与下载' },
  { path: '/skill-fusion', label: '拆专家', desc: '领域 AI 专家团' },
  { path: '/coai', label: '共拆AI', desc: '六条合作线' },
]

const knowledgePaths = knowledgeLinks.map(l => l.path)

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [knowledgeOpen, setKnowledgeOpen] = useState(false)

  const inKnowledge = knowledgePaths.some(p => location.pathname.startsWith(p)) ||
    knowledgePaths.some(p => p !== '/' && location.pathname.startsWith(p.slice(0, -1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setKnowledgeOpen(false)
  }, [location.pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen ? 'bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[.06]' : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[19px] font-bold tracking-tight text-[#1d1d1f]">窗饰遮阳出海观察</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {mainNav.map(link => link.dropdown ? (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => setKnowledgeOpen(true)}
              onMouseLeave={() => setKnowledgeOpen(false)}
            >
              <button
                type="button"
                onClick={() => setKnowledgeOpen(v => !v)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                  inKnowledge
                    ? 'bg-black/[.05] text-[#1d1d1f]'
                    : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[.04]'
                }`}
              >
                {link.label}
                <svg className={`w-3 h-3 transition-transform duration-200 ${knowledgeOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {knowledgeOpen && (
                <div className="absolute top-full right-0 pt-2 w-64">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-black/[.06] shadow-[0_16px_48px_rgba(0,0,0,.12)] p-2">
                    {knowledgeLinks.map(k => k.external ? (
                      <a
                        key={k.path}
                        href={k.path}
                        className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-black/[.04] transition-colors"
                      >
                        <span className="text-[13.5px] font-semibold text-[#1d1d1f]">{k.label} <span className="text-[10px] text-[#86868b] font-normal ml-1">外部</span></span>
                        <span className="text-[11px] text-[#86868b]">{k.desc}</span>
                      </a>
                    ) : (
                      <Link
                        key={k.path}
                        to={k.path}
                        className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-black/[.04] transition-colors"
                      >
                        <span className="text-[13.5px] font-semibold text-[#1d1d1f]">{k.label}</span>
                        <span className="text-[11px] text-[#86868b]">{k.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-black/[.05] text-[#1d1d1f]'
                  : 'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[.04]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/about"
            className="ml-2 px-4 py-1.5 rounded-full text-[13.5px] font-semibold bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors shadow-[0_4px_14px_rgba(0,113,227,.3)]"
          >
            联系合作
          </a>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <a href="/about" className="px-3.5 py-1.5 rounded-full text-[13px] font-semibold bg-[#0071e3] text-white">合作</a>
          <button
            type="button"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            className="p-2.5 -mr-1.5 rounded-full text-[#1d1d1f] hover:bg-black/[.05] active:bg-black/[.08] transition-colors"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/[.06] shadow-[0_12px_32px_rgba(0,0,0,.08)]">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col max-h-[70vh] overflow-y-auto">
            {mainNav.map(link => !link.dropdown ? (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-[15px] border-b border-black/[.04] ${
                  location.pathname === link.path
                    ? 'text-[#1d1d1f] font-semibold'
                    : 'text-[#6e6e73] font-medium'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <div key={link.path} className="border-b border-black/[.04]">
                <button
                  type="button"
                  onClick={() => setKnowledgeOpen(v => !v)}
                  className="w-full flex items-center justify-between py-3 text-[15px] text-[#6e6e73] font-medium"
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${knowledgeOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {knowledgeOpen && (
                  <div className="pb-3 pl-3 flex flex-col border-l-2 border-black/[.06] ml-1">
                    {knowledgeLinks.map(k => k.external ? (
                      <a
                        key={k.path}
                        href={k.path}
                        className="py-2.5 text-[14px] text-[#6e6e73]"
                      >
                        {k.label} <span className="text-[11px] text-[#86868b]">· {k.desc}</span>
                      </a>
                    ) : (
                      <Link
                        key={k.path}
                        to={k.path}
                        onClick={() => setMenuOpen(false)}
                        className="py-2.5 text-[14px] text-[#6e6e73]"
                      >
                        {k.label} <span className="text-[11px] text-[#86868b]">· {k.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
