export const profile = {
  name: '付恒',
  alternateName: 'Fu Heng',
  role: '顾问',
  roleEn: 'Consultant',
  email: 'mail@fuheng.vip',
  phone: {
    display: '+86 178 8870 0580',
    compact: '17888700580',
  },
  city: '石家庄',
  cityEn: 'Shijiazhuang',
  siteUrl: 'https://cv.fuheng.vip',
  school: '河北外国语学院',
  degree: '本科',
  major: '航空服务艺术与管理',
  graduation: '2024 年毕业',
};

export const displayEmail = profile.email.replace('@', ' [at] ');

export const jobs = [
  {
    company: '作业帮',
    role: 'LPC 顾问',
    period: '时间待补充',
    summary: '工作内容待补充。',
    bullets: ['工作内容待补充'],
    tags: ['学业咨询', '用户沟通'],
  },
  {
    company: '高顿',
    role: '保研顾问',
    period: '时间待补充',
    summary: '工作内容待补充。',
    bullets: ['工作内容待补充'],
    tags: ['保研规划', '院校匹配', '文书 / 面试'],
  },
];

export const projects = [
  { idx: '01', title: '项目占位 ①', desc: '该项目内容稍后补充。', tag: 'TBD' },
  { idx: '02', title: '项目占位 ②', desc: '该项目内容稍后补充。', tag: 'TBD' },
  { idx: '03', title: '项目占位 ③', desc: '该项目内容稍后补充。', tag: 'TBD' },
];

export const skillGroups = [
  {
    title: '咨询能力',
    en: 'Consulting',
    items: ['学业规划', '保研指导', '面试辅导', '文书润色', '需求洞察'],
  },
  {
    title: '工具',
    en: 'Tools',
    items: ['Office', 'Notion', '飞书 / 企业微信', '腾讯会议'],
  },
  {
    title: '语言',
    en: 'Languages',
    items: ['中文 (母语)', 'English'],
  },
];
