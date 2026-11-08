import { useState } from 'react'
import { CONTACT_EMAIL, FORM_ENDPOINT, mailtoLink } from '../lib/siteConfig'

const TOPICS = ['产业内容合作', '出海合规咨询', '行业对话 / 访谈', '其他']

const inputCls =
  'w-full px-4 py-2.5 rounded-xl bg-[#f5f5f7] border border-[#e8e8ed] text-[14px] text-[#1d1d1f] placeholder:text-[#a1a1a6] outline-none transition-all focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/10'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '', honey: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    if (form.honey) return // 蜜罐字段：机器人会填，真人看不到
    if (!form.name.trim() || !form.message.trim()) {
      setStatus('error')
      setError('称呼和留言内容请填写完整。')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error')
      setError('请填写一个能收到回复的邮箱地址。')
      return
    }
    if (!FORM_ENDPOINT) {
      setStatus('error')
      setError('表单收件邮箱还没配置，请先联系站长。')
      return
    }

    setStatus('sending')
    setError('')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `【出海观察·网站留言】${form.topic} — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          称呼: form.name,
          联系邮箱: form.email,
          主题: form.topic,
          留言: form.message,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json().catch(() => ({}))
      // FormSubmit 未激活时会返回 200 + success:"false"，此时不能算发送成功
      if (String(data.success) !== 'true') {
        setStatus('error')
        setError(
          /activat/i.test(data.message || '')
            ? '表单还没激活，请先到 QQ 邮箱点开 FormSubmit 的激活邮件，再重新提交。'
            : (data.message || `发送失败，请直接发邮件到 ${CONTACT_EMAIL}。`)
        )
        return
      }
      setStatus('success')
      setForm({ name: '', email: '', topic: TOPICS[0], message: '', honey: '' })
    } catch (err) {
      setStatus('error')
      setError(`发送失败，请直接发邮件到 ${CONTACT_EMAIL}。`)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[#0071e3]/20 bg-[#0071e3]/[.06] p-8 text-center">
        <div className="text-2xl mb-2">✅</div>
        <div className="text-lg font-bold text-[#1d1d1f] mb-1">留言已发出</div>
        <p className="text-sm text-[#6e6e73]">
          我看到后会尽快回复。急事可直接发邮件到{' '}
          <a href={mailtoLink()} className="text-[#0071e3] hover:underline">{CONTACT_EMAIL}</a>
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-[13px] text-[#0071e3] hover:underline"
        >
          再写一条
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-[#e8e8ed] bg-white p-6 md:p-8 text-left">
      <h3 className="text-lg font-bold text-[#1d1d1f] mb-1">给我留言</h3>
      <p className="text-[13px] text-[#86868b] mb-6">
        产业内容合作 · 出海合规咨询 · 行业对话，写在这里会直接进我邮箱。
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="cf-name" className="block text-[12px] font-medium text-[#6e6e73] mb-1.5">称呼 *</label>
          <input
            id="cf-name" name="name" value={form.name} onChange={onChange}
            placeholder="怎么称呼你" className={inputCls} autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-[12px] font-medium text-[#6e6e73] mb-1.5">联系邮箱 *</label>
          <input
            id="cf-email" name="email" type="email" value={form.email} onChange={onChange}
            placeholder="you@company.com" className={inputCls} autoComplete="email"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="cf-topic" className="block text-[12px] font-medium text-[#6e6e73] mb-1.5">想聊什么</label>
        <select id="cf-topic" name="topic" value={form.topic} onChange={onChange} className={inputCls}>
          {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="cf-message" className="block text-[12px] font-medium text-[#6e6e73] mb-1.5">留言内容 *</label>
        <textarea
          id="cf-message" name="message" value={form.message} onChange={onChange}
          rows={5} placeholder="简单说明背景和你的问题，越具体我越好回复"
          className={`${inputCls} resize-y`}
        />
      </div>

      {/* 蜜罐：真人不可见 */}
      <input
        type="text" name="honey" value={form.honey} onChange={onChange} tabIndex={-1}
        autoComplete="off" aria-hidden="true"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
      />

      {status === 'error' && (
        <p className="text-[13px] text-[#d7141a] mb-3">{error}</p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit" disabled={status === 'sending'}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === 'sending' ? '发送中…' : '发送留言'}
        </button>
        {CONTACT_EMAIL && (
          <a href={mailtoLink('网站留言')} className="text-[13px] text-[#6e6e73] hover:text-[#0071e3] transition-colors">
            或直接发邮件 → {CONTACT_EMAIL}
          </a>
        )}
      </div>
    </form>
  )
}
