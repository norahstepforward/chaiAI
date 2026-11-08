// 站点联系配置 —— 改这里就能换收件邮箱，不用动组件代码
// CONTACT_EMAIL：网站留言表单的收件地址（QQ 邮箱），同时用于页面上的 mailto 链接
// WECHAT：微信号，留空则页面上不显示微信项
export const CONTACT_EMAIL = '529522930@qq.com'
export const WECHAT = ''

// 表单投递服务（FormSubmit：免注册，首次提交会往收件箱发一封激活邮件，点一下链接即可）
export const FORM_ENDPOINT = CONTACT_EMAIL
  ? `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`
  : ''

export const mailtoLink = (subject = '网站留言') =>
  CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : ''
