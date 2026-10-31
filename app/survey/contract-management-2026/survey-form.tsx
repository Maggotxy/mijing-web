'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'done' | 'error';

type Question = {
  id: string;
  title: string;
  required: boolean;
  options?: string[];
  open?: boolean;
  placeholder?: string;
};

// 与收集端 survey-collector.js 里的允许值保持一致，改一处要改两处。
const QUESTIONS: Question[] = [
  {
    id: 'q1',
    title: '贵公司目前有多少员工？',
    required: true,
    options: ['1–10人', '11–50人', '51–200人', '201–500人', '500人以上'],
  },
  {
    id: 'q2',
    title: '贵公司每月新签或续签的合同大约有多少份？',
    required: true,
    options: ['5份以下', '6–20份', '21–50份', '50份以上', '不固定'],
  },
  {
    id: 'q3',
    title: '现在主要由谁负责审合同？',
    required: true,
    options: ['老板 / 负责人自己审', '行政、财务等同事兼着审', '有专职法务', '外聘律师', '基本不审，直接签'],
  },
  {
    id: 'q4',
    title: '审合同时最让您头疼的是哪一件事？（选最主要的一项）',
    required: true,
    options: ['条款看不懂，不知道有没有坑', '不知道哪些条款必须改', '来回修改、沟通太久', '怕漏掉付款、解约、违约等关键点', '出了问题找不到依据'],
  },
  {
    id: 'q5',
    title: '贵公司平时用什么方式管理合同？',
    required: true,
    options: ['纸质文件夹', 'Excel 表格', '微信、邮箱里翻找', '网盘或共享文件夹', '合同管理软件', '没有固定方式'],
  },
  {
    id: 'q6',
    title: '一份普通合同，从拿到到审完签掉，大概要花多长时间？',
    required: true,
    options: ['半小时以内', '半天以内', '1–2天', '3天以上', '说不准，看合同'],
  },
  {
    id: 'q7',
    title: '每月花在合同审查、修改、催签这些事上的时间，加起来大约多久？',
    required: true,
    options: ['不到2小时', '2–8小时', '8–20小时', '20小时以上', '没算过'],
  },
  {
    id: 'q8',
    title: '过去一年，贵公司有没有遇到过对方拖欠货款或服务费？',
    required: true,
    options: ['没有', '有，1次', '有，2–3次', '有，4次以上'],
  },
  {
    id: 'q9',
    title: '过去一年，有没有因为合同条款不清吃过亏（比如扯皮、赔钱、解约难）？',
    required: true,
    options: ['没有', '有，损失不大', '有，损失比较大', '有，正在处理纠纷'],
  },
  {
    id: 'q10',
    title: '合同到期、续约、付款这些关键节点，平时怎么跟进？',
    required: true,
    options: ['靠人记', '用日历、待办提醒', '有系统自动提醒', '基本没人跟，容易漏'],
  },
  {
    id: 'q11',
    title: '如果有一个 AI 工具，能先把合同里的风险点标出来、再由您决定改不改，您愿意试吗？',
    required: true,
    options: ['愿意，想马上试试', '愿意，但要先看看效果', '不确定，要看价格和安全性', '不愿意，更信任人工'],
  },
  {
    id: 'q12',
    title: '您最希望 AI 先帮您解决哪一件事？',
    required: true,
    options: ['把风险条款标出来', '对照我们公司的常用模板', '到期、付款提醒', '直接给修改建议'],
  },
  {
    id: 'q13',
    title: '过去一年，合同上最让您后悔的一件事是什么？（选填，一句话即可）',
    required: false,
    open: true,
    placeholder: '例如：没写清付款节点，对方拖了三个月……（可不填）',
  },
  {
    id: 'q14',
    title: '贵公司属于哪个行业？',
    required: true,
    options: ['贸易、批发零售', '制造', '服务（咨询、设计、IT、广告等）', '建筑、工程', '餐饮、住宿', '其他'],
  },
  {
    id: 'q15',
    title: '还有什么想对我们说的？（选填）',
    required: false,
    open: true,
    placeholder: '对合同管理、法务工具的任何想法，都可以写在这里（可不填）',
  },
];

export default function SurveyForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus('sending');
    setError('');
    const data = new FormData(form);
    const answers: Record<string, string> = {};
    for (const q of QUESTIONS) {
      const v = data.get(q.id);
      if (typeof v === 'string' && v.trim() !== '') answers[q.id] = v.trim();
    }
    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ survey: 'contract-management-2026', answers }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error((body && body.error) || `提交失败（${res.status}），请稍后重试`);
      }
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : '提交失败，请检查网络后重试');
    }
  }

  if (status === 'done') {
    return (
      <div className="survey-done" role="status">
        <h2>感谢参与！</h2>
        <p>您的回答已提交。本次调研结束后，我们会在小觅法务官网汇总公布结果（仅公布整体数字，不涉及任何单个企业的信息）。</p>
        <p><a href="/guide">看看我们的合同指南 →</a></p>
      </div>
    );
  }

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      {QUESTIONS.map((q, i) => (
        <fieldset key={q.id} className="survey-question">
          <legend>
            <span className="survey-num">{i + 1}</span> {q.title}
            {!q.required && <span className="survey-optional">（选填）</span>}
          </legend>
          {q.open ? (
            <textarea name={q.id} rows={3} maxLength={1000} placeholder={q.placeholder} />
          ) : (
            <div className="survey-options">
              {q.options!.map((opt, j) => (
                <label key={opt} className="survey-option">
                  <input type="radio" name={q.id} value={opt} required={q.required && j === 0} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </fieldset>
      ))}
      {status === 'error' && (
        <p className="survey-error" role="alert">{error}</p>
      )}
      <button type="submit" className="survey-submit" disabled={status === 'sending'}>
        {status === 'sending' ? '提交中…' : '提交问卷'}
      </button>
      <p className="survey-note">提交即表示您同意我们按本页说明匿名汇总使用您的回答。本问卷不收集公司名称、姓名、电话、邮箱等任何个人信息。</p>
    </form>
  );
}
