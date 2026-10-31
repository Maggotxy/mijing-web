'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { faqs } from './faq';
import {
  ArrowUpRight,
  ArrowDown,
  Plus,
  Minus,
  Pause,
  Play,
  Menu,
  X,
} from 'lucide-react';

const chapters = [
  {
    title: '理解你的企业',
    en: 'CONTEXT',
    line: '每家企业，都有自己的方式。',
    text: '从公司资料到签约偏好，让每一次处理，都有你企业的真实背景。',
    caption: '企业资料 · 公司规则',
  },
  {
    title: '看清真正关键',
    en: 'CLARITY',
    line: '在纷繁条款中，找到关切。',
    text: '从企业的立场出发，解释风险意味着什么，让重要的问题变得清楚。',
    caption: '合同审查 · 用工预检',
  },
  {
    title: '找到前行路径',
    en: 'DIRECTION',
    line: '有了判断，也有下一步。',
    text: '起草、修改、核对，衔接日常法务工作的每一步，让事情继续向前。',
    caption: '起草修改 · 核对归档',
  },
  {
    title: '沉淀长期理解',
    en: 'CONTINUITY',
    line: '每一次积累，都让下一次从容。',
    text: '经你确认，留存企业规则与处理记录，让有价值的经验在企业中延续。',
    caption: '历史记录 · 企业知识',
  },
];

const planeMotifs = [
  {
    paths: [
      {
        d: 'M26 28H76L130 68M26 78H124M26 128H76L130 88M94 16L142 57M94 140L142 99',
        opacity: 0.42,
      },
      { d: 'M171 78H222L290 40', opacity: 0.72 },
      {
        d: 'M152 60A18 18 0 1 0 152 96M159 61A18 18 0 0 1 159 95',
        opacity: 0.85,
      },
    ],
    nodes: [
      { x: 26, y: 28, r: 3 },
      { x: 26, y: 78, r: 3 },
      { x: 26, y: 128, r: 3 },
      { x: 290, y: 40, r: 3 },
    ],
  },
  {
    paths: [
      {
        d: 'M26 28H91L139 57H206L260 24H294M26 126H91L139 99H206L260 134H294',
        opacity: 0.27,
      },
      { d: 'M26 78H95L135 78H170M186 78H294', opacity: 0.92 },
      {
        d: 'M164 56H157V64M192 56H199V64M164 100H157V92M192 100H199V92',
        opacity: 0.55,
      },
    ],
    nodes: [
      { x: 26, y: 78, r: 3 },
      { x: 178, y: 78, r: 8 },
      { x: 294, y: 78, r: 3 },
    ],
  },
  {
    paths: [
      {
        d: 'M125 28 158 44V94L125 110ZM198 45 169 59V94L198 110Z',
        opacity: 0.54,
      },
      {
        d: 'M26 132H136Q163.5 132 163.5 105V43Q163.5 16 190 16H294',
        opacity: 0.92,
      },
      { d: 'M279 10 294 16 279 22', opacity: 0.72 },
    ],
    nodes: [{ x: 26, y: 132, r: 3 }],
  },
  {
    paths: [
      { d: 'M26 122H89L139 78H205L252 34H294', opacity: 0.88 },
      {
        d: 'M40 138H96L146 94H212L260 50H294M40 106H82L132 62H198L244 18H280',
        opacity: 0.23,
      },
      { d: 'M89 132V144M139 88V108M205 88V108M252 44V64', opacity: 0.38 },
    ],
    nodes: [
      { x: 26, y: 122, r: 3 },
      { x: 89, y: 122, r: 4 },
      { x: 139, y: 78, r: 4 },
      { x: 205, y: 78, r: 4 },
      { x: 252, y: 34, r: 4 },
      { x: 294, y: 34, r: 3 },
    ],
  },
];

function PlaneMotif({ index }: { index: number }) {
  const motif = planeMotifs[index];
  return (
    <svg
      viewBox="0 0 320 160"
      width="100%"
      height="100%"
      fill="none"
      stroke="#78956c"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {motif.paths.map((path, i) => (
        <path key={i} d={path.d} opacity={path.opacity} />
      ))}
      {motif.nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="#edf1e7"
          strokeOpacity="0.78"
        />
      ))}
    </svg>
  );
}

function Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="35"
      height="35"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.51 8 20.21 13.26V26.68L9.45 32ZM30.49 14.15 22.69 18.05 22.63 26.68 30.55 32Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const [paused, setPaused] = useState(true);
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useRef(false);
  const userPaused = useRef(false);
  const heroVisible = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 760px)');
    const planes = Array.from(
      stage.current?.querySelectorAll<HTMLElement>('.glass-plane') ?? [],
    );
    let frame = 0;
    let current = 0;
    let previousChapter = -1;
    const syncVideo = () => {
      const element = video.current;
      if (!element) return;
      if (
        document.hidden ||
        !heroVisible.current ||
        reduced.current ||
        userPaused.current
      )
        element.pause();
      else element.play().catch(() => setPaused(true));
    };
    const schedule = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(render);
    };
    const render = () => {
      frame = 0;
      if (document.hidden) return;
      // Read geometry together before any style writes.
      const scrollY = window.scrollY;
      const top = section.current?.getBoundingClientRect().top ?? 0;
      const length = (section.current?.offsetHeight ?? 1) - window.innerHeight;
      const target = mobile.matches
        ? 1
        : Math.max(0, Math.min(1, -top / Math.max(length, 1)));
      const delta = target - current;
      current =
        reduced.current || Math.abs(delta) < 0.0001
          ? target
          : current + delta * 0.09;
      setScrolled(scrollY > 60);
      if (!mobile.matches) {
        const index = Math.min(3, Math.floor(current * 4));
        if (index !== previousChapter) {
          setActive(index);
          previousChapter = index;
        }
        stage.current?.style.setProperty('--journey', String(current));
        planes.forEach((plane, i) => {
          const phase = Math.max(0, Math.min(1, current * 4 - i));
          const smooth = phase * phase * (3 - 2 * phase);
          plane.style.transform = `translateZ(${i * 22 + (1 - smooth) * (170 + i * 48)}px)`;
          plane.style.setProperty(
            '--plane-opacity',
            String(0.36 + smooth * 0.5),
          );
        });
      }
      hero.current?.style.setProperty(
        '--hero-shift',
        reduced.current || mobile.matches
          ? '0px'
          : `${Math.min(scrollY * 0.24, 220)}px`,
      );
      // Stop when settled; scrolling, resize and visibility changes wake this up.
      if (!mobile.matches && !reduced.current && current !== target) schedule();
    };
    const onBreakpointChange = () => {
      previousChapter = -1;
      schedule();
    };
    const applyPreference = () => {
      reduced.current = preference.matches;
      syncVideo();
      schedule();
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      syncVideo();
      schedule();
    };
    const mediaObserver = new IntersectionObserver(
      (entries) => {
        heroVisible.current = entries.some((entry) => entry.isIntersecting);
        syncVideo();
      },
      { threshold: 0.05 },
    );
    if (hero.current) mediaObserver.observe(hero.current);
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll('.reveal')
      .forEach((element) => revealObserver.observe(element));
    preference.addEventListener('change', applyPreference);
    mobile.addEventListener('change', onBreakpointChange);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('visibilitychange', onVisibility);
    applyPreference();
    return () => {
      cancelAnimationFrame(frame);
      mediaObserver.disconnect();
      revealObserver.disconnect();
      preference.removeEventListener('change', applyPreference);
      mobile.removeEventListener('change', onBreakpointChange);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!menu) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenu(false);
      document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menu]);

  function selectChapter(index: number) {
    if (!section.current) return;
    if (window.matchMedia('(max-width: 760px)').matches) {
      setActive(index);
      section.current
        .querySelectorAll<HTMLElement>('.chapter')
        [index]?.scrollIntoView({
          behavior: reduced.current ? 'instant' : 'smooth',
          block: 'center',
        });
      return;
    }
    const top = section.current.getBoundingClientRect().top + window.scrollY;
    const length = section.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + length * ((index + 0.36) / 4),
      behavior: reduced.current ? 'instant' : 'smooth',
    });
  }
  function toggleVideo() {
    if (!video.current) return;
    if (video.current.paused) {
      userPaused.current = false;
      video.current
        .play()
        .then(() => setPaused(false))
        .catch(() => setPaused(true));
    } else {
      userPaused.current = true;
      video.current.pause();
      setPaused(true);
    }
  }
  const nav = (
    <>
      <a href="#vision" onClick={() => setMenu(false)}>
        关于小觅法务
      </a>
      <a href="#approach" onClick={() => setMenu(false)}>
        我们的方式
      </a>
      <a href="#expertise" onClick={() => setMenu(false)}>
        日常法务
      </a>
    </>
  );

  return (
    <>
      <a href="#vision" className="skip-link">
        跳至主要内容
      </a>
      <header className={`site-header ${scrolled || menu ? 'solid' : ''}`}>
        <a href="#top" className="brand" aria-label="小觅法务首页">
          <Mark />
          <span>
            小觅法务
          </span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          {nav}
        </nav>
        <div className="header-actions">
          <a className="pill header-cta" href="https://app.mjvia.com">
            进入工作台{' '}
            <span>
              <ArrowUpRight size={16} />
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? '关闭导航' : '打开导航'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="mobile-nav" aria-label="移动导航">
            {nav}
            <a href="https://app.mjvia.com" onClick={() => setMenu(false)}>
              进入工作台 <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>
      <main>
        <section
          className="hero"
          id="top"
          ref={hero}
          aria-label="小觅法务企业法务 AI"
        >
          <div className="hero-media">
            <video
              ref={video}
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/mijing-original-poster.webp"
              onPlay={() => setPaused(false)}
              onPause={() => setPaused(true)}
            >
              <source src="/images/mijing-original.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" />
          <div className="hero-topline">
            <span className="small-dot" /> 为企业前行，觅一条明径
          </div>
          <div className="hero-content">
            <p className="eyebrow">小觅法务 / LEGAL INTELLIGENCE</p>
            <h1>
              纷繁之中，
              <br />
              自有明径。
            </h1>
            <div className="hero-bottom">
              <p>
                你的企业法务 AI。
                <br className="mobile-break" /> 让经营的每一步，更有把握。
              </p>
              <a href="#approach" className="pill light">
                探索小觅法务{' '}
                <span>
                  <ArrowDown size={17} />
                </span>
              </a>
            </div>
          </div>
          <div className="hero-foot">
            <a href="#vision" className="scroll-label">
              <span className="scroll-track" />
              向下，发现更多
            </a>
            <button
              className="video-toggle"
              onClick={toggleVideo}
              aria-label={paused ? '播放背景视频' : '暂停背景视频'}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
              <span>{paused ? '播放影像' : '暂停影像'}</span>
            </button>
          </div>
          <div className="hero-index" aria-hidden="true">
            01 — 04
          </div>
        </section>
        <section className="vision section-pad" id="vision">
          <div className="section-kicker reveal">
            <span className="small-dot" /> 为每一家向前的企业
          </div>
          <div className="vision-main reveal">
            <h2>
              心有方向，
              <br />
              经营自有从容。
            </h2>
            <div>
              <p>
                一份新的合作，一位新来的同事，
                <br />
                一个需要认真作出的决定。
              </p>
              <p>
                小觅法务将 AI 带入企业日常法务，
                <br />
                陪你理清纷繁，让前行有据。
              </p>
            </div>
          </div>
          <div className="vision-foot">
            <span>从日常开始，理解你的企业。</span>
            <Mark />
          </div>
        </section>
        <section
          className="journey"
          id="approach"
          ref={section}
          aria-label="小觅法务的工作方式"
        >
          <div className="journey-sticky">
            <div className="journey-heading">
              <p className="eyebrow">小觅法务 · 工作方式</p>
              <h2>
                层层理解，
                <br />
                步步清晰。
              </h2>
            </div>
            <div className="chapter-list">
              {chapters.map((chapter, i) => (
                <button
                  key={chapter.en}
                  className={`chapter ${active === i ? 'active' : ''}`}
                  onClick={() => selectChapter(i)}
                  aria-current={active === i ? 'step' : undefined}
                >
                  <span className="chapter-heading">
                    <span className="chapter-number">0{i + 1}</span>
                    <span>{chapter.title}</span>
                    {active === i ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                  <span className="chapter-detail">
                    <span>{chapter.text}</span>
                    <small>{chapter.caption}</small>
                  </span>
                </button>
              ))}
            </div>
            <div className="stack-stage" ref={stage} aria-hidden="true">
              <div className="stage-orbit" />
              <div className="stack-scene">
                <div className="stack-platform" />
                {chapters.map((chapter, i) => (
                  <div
                    className={`glass-plane plane-${i} ${active === i ? 'is-active' : ''}`}
                    key={chapter.en}
                  >
                    <span className="plane-corner">小觅法务 · 0{i + 1}</span>
                    <div className="plane-route">
                      <PlaneMotif index={i} />
                    </div>
                    <div className="plane-label">
                      <span>{chapter.en}</span>
                      <b>{chapter.title}</b>
                    </div>
                    <span className="plane-plus">+</span>
                  </div>
                ))}
              </div>
              <span className="axis axis-bottom">
                A CLEAR WAY FORWARD / 明径
              </span>
            </div>
            <div className="journey-bottom">
              <span className="journey-count">
                0{active + 1}
                <span> / 04</span>
              </span>
              <p key={active}>{chapters[active].line}</p>
              <span className="journey-scroll">
                滚动，循径而下 <ArrowDown size={14} />
              </span>
            </div>
          </div>
        </section>
        <section className="expertise section-pad" id="expertise">
          <div className="expertise-heading reveal">
            <div>
              <p className="eyebrow">CLOSER TO YOUR BUSINESS</p>
              <h2>
                重要的日常，
                <br />
                值得认真对待。
              </h2>
            </div>
            <p>
              专注合同、用工与企业知识。
              <br />
              让日常法务，成为经营的支持。
            </p>
          </div>
          <div className="editorial-grid">
            <div className="expertise-image reveal">
              <Image
                unoptimized
                src="/images/mijing-original-detail.webp"
                alt="柔和晨光穿过玻璃，映出通向庭院的清晰路径"
                width={1344}
                height={768}
                loading="lazy"
                decoding="async"
              />
              <div className="image-caption">
                <span>小觅法务 · 与企业同行</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
            <div className="expertise-rows">
              <article className="expertise-row reveal">
                <span className="row-number">01 / 合同</span>
                <h3>
                  让每一份合作，
                  <br />
                  都有清晰的共识。
                </h3>
                <p>从起草、审查到条款修改，协助看清约定，妥善推进合作。</p>
                <span className="row-meta">
                  合同起草 · 审查修改 · 履约提醒 · 回款辅助
                </span>
              </article>
              <article className="expertise-row reveal">
                <span className="row-number">02 / 用工</span>
                <h3>
                  在人与企业之间，
                  <br />
                  多一份周全。
                </h3>
                <p>
                  从入职文件检查到离职风险预检，在行动之前，理解需要考虑的问题。
                </p>
                <span className="row-meta">
                  入职文件检查 · 离职与解除风险预检
                </span>
              </article>
              <article className="expertise-row reveal">
                <span className="row-number">03 / 企业知识</span>
                <h3>
                  让你的经验，
                  <br />
                  成为下一步的起点。
                </h3>
                <p>
                  留存企业资料与经你确认的规则，让每一次工作，都建立在已有的理解之上。
                </p>
                <span className="row-meta">公司资料 · 企业规则 · 历史记录</span>
              </article>
            </div>
          </div>
        </section>
        <section className="closing section-pad" id="contact">
          <div className="closing-top">
            <span className="eyebrow">YOUR BUSINESS. A CLEARER PATH.</span>
            <Mark />
          </div>
          <div className="closing-main reveal">
            <p>专注你的事业。</p>
            <h2>
              前行的路，
              <br />
              一起看清。
            </h2>
            <div className="closing-invitation">
              <p>你公司的日常法务，小觅法务能帮到哪一步？</p>
              <p>进入工作台，从一份合同开始，了解与你业务相关的使用方式。</p>
            </div>
            <a className="pill light" href="https://app.mjvia.com">
              进入工作台{' '}
              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
          <div className="closing-line" aria-hidden="true">
            <span />
          </div>
          <div className="closing-bottom">
            <span>
              为没有专职法务的企业，
              <br />
              带来随时可用的日常法务支持。
            </span>
            <span>始于理解，行于明径。</span>
          </div>
        </section>
        <section id="faq" className="faq-section section-pad" aria-labelledby="faq-title">
          <div className="faq-heading">
            <h2 id="faq-title">开始之前，你可能想了解</h2>
            <p>从一份合同开始，把每一步看清。</p>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<Plus size={18} aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer section-pad">
        <div className="footer-top">
          <a href="#top" className="brand">
            <Mark />
            <span>
              小觅法务
            </span>
          </a>
          <nav aria-label="页脚导航">
            {nav}
            <a href="https://app.mjvia.com">进入工作台</a>
          </nav>
          <a href="#top" className="back-top">
            回到顶部 <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 小觅法务</span>
          <p>小觅法务提供日常法务辅助。重大、复杂法律事务，请咨询专业律师。</p>
          <span>企业法务 AI</span>
        </div>
        <div className="footer-legal">
          <nav aria-label="网站与法律资料">
            <a href="https://mjvia.com/about">关于小觅法务</a>
            <a href="https://flk.npc.gov.cn/" target="_blank" rel="noopener noreferrer">国家法律法规数据库</a>
            <a href="https://www.court.gov.cn/" target="_blank" rel="noopener noreferrer">最高人民法院</a>
          </nav>
          <p><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">津ICP备2026009754号-2</a><span>天津觅径科技有限公司</span></p>
        </div>
      </footer>
    </>
  );
}
