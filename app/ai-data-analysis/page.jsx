import ContactCTA from "../components/ContactCTA";
import SiteHeader from "../components/SiteHeader";

const pageUrl = "https://b.haisnap.com/ai-data-analysis/";
const contactHref =
  "mailto:lihongqing@haidian.ai?subject=%E4%BC%81%E4%B8%9A%20AI%20%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E6%96%B9%E6%A1%88%E6%B2%9F%E9%80%9A";

const problems = [
  ["01", "数据散在多个系统，业务问题总靠人找答案", "销售、运营、投放、财务各有报表和口径，团队花很多时间汇总数据，关键问题却迟迟得不到结论。"],
  ["02", "报表能展示结果，却解释不了变化", "数字上涨或下滑以后，仍要反复切换表格、找人核对，才能判断异常来自哪里、下一步应该做什么。"],
  ["03", "复盘停在会议里，洞察没有进入日常动作", "分析结论无法被稳定复用，报告、提醒和后续任务仍依赖人工整理，业务节奏很难真正变快。"]
];

const capabilities = [
  {
    number: "01",
    title: "连接数据，统一关键指标的业务口径",
    body: "把 CRM、订单、投放、客服和经营数据按场景接入，先把指标含义、更新时间和权限范围说清楚。",
    items: ["多源数据接入", "指标口径管理", "角色权限控制"]
  },
  {
    number: "02",
    title: "让业务人员直接提问，获得可解释的结论",
    body: "用自然语言追问销售变化、客户流失或投放效率，AI 自动关联指标、异常信号和相关业务信息。",
    items: ["自然语言问数", "趋势与归因分析", "异常识别提醒"]
  },
  {
    number: "03",
    title: "把洞察变成报告、任务与持续跟进",
    body: "把每天、每周或关键节点的分析结果分发给对应负责人，并把确认后的建议接入复盘和执行流程。",
    items: ["自动分析报告", "业务任务分发", "人工复核闭环"]
  }
];

const scenarios = [
  {
    number: "01",
    label: "销售经营",
    title: "及时发现漏斗变化，找到该跟进的客户和机会",
    body: "连接线索、商机、回款和拜访记录，识别转化掉点、异常机会和区域差异，让销售复盘更快进入下一步动作。",
    items: ["销售漏斗", "商机健康度", "客户跟进"]
  },
  {
    number: "02",
    label: "运营管理",
    title: "从日常数据里识别异常，减少靠经验排查",
    body: "持续观察订单、履约、服务和项目进度，自动提示波动原因与影响范围，帮助运营团队更早处理问题。",
    items: ["经营监控", "异常预警", "运营复盘"]
  },
  {
    number: "03",
    label: "市场投放",
    title: "把投放结果和业务转化放在一起看",
    body: "关联渠道、素材、线索和成交数据，判断预算变化带来的真实业务影响，帮助市场团队持续优化投放组合。",
    items: ["渠道归因", "投放复盘", "预算优化"]
  },
  {
    number: "04",
    label: "经营决策",
    title: "把分散报表整理成管理层能直接讨论的洞察",
    body: "按经营节奏自动生成关键指标、变化说明和待决策事项，让管理层用更少时间看到重点、确认判断和推动执行。",
    items: ["经营周报", "管理看板", "决策事项"]
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://b.haisnap.com/#organization",
      name: "响指 AI",
      alternateName: ["HaiSnap", "HaiSnap AI"],
      url: "https://b.haisnap.com/"
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "企业 AI 数据分析",
      provider: { "@id": "https://b.haisnap.com/#organization" },
      serviceType: "Enterprise AI Data Analysis",
      description: "连接企业业务数据，让团队通过自然语言获得可解释的数据洞察、异常提醒、自动报告和下一步行动建议。",
      url: pageUrl,
      areaServed: "CN"
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "企业 AI 数据分析",
      about: { "@id": `${pageUrl}#service` },
      inLanguage: "zh-CN"
    }
  ]
};

export const metadata = {
  title: { absolute: "企业 AI 数据分析 | 响指 AI" },
  description:
    "响指 AI 数据分析连接销售、运营、投放、财务等企业数据，支持自然语言问数、自动分析报告、异常识别与业务行动跟进，让数据洞察真正进入日常决策。",
  keywords: ["AI 数据分析", "企业数据分析", "自然语言问数", "智能数据分析", "自动分析报告", "经营分析"],
  alternates: { canonical: "/ai-data-analysis/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "响指 AI",
    url: pageUrl,
    title: "企业 AI 数据分析",
    description: "连接企业数据，让每个经营问题都有依据，让洞察进入下一步业务动作。"
  }
};

export default function AiDataAnalysisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <SiteHeader
        ariaLabel="AI 数据分析页面导航"
        brandHref="/"
        ctaHref="#contact"
        ctaLabel="预约演示"
        minimal
      />

      <main id="main" className="home-page data-analysis-page">
        <section className="hero home-hero" aria-labelledby="data-analysis-hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 id="data-analysis-hero-title">企业 AI 数据分析，让每个经营问题都有依据</h1>
              <p className="hero-lead">
                连接销售、运营、投放、财务等业务数据，让团队用自然语言追问变化、自动发现异常、生成报告，并把结论带进下一步业务动作。
              </p>
              <div className="hero-actions" aria-label="首屏行动">
                <a className="button button-primary" href="#contact">
                  预约数据分析方案演示
                </a>
                <a className="button button-secondary" href="#workflow">
                  查看分析流程
                </a>
              </div>
            </div>

            <div className="hero-product" aria-label="企业 AI 数据分析示意">
              <img
                src="/assets/ai-data-analysis-hero.png"
                alt="企业团队借助 AI 将分散业务数据转成可执行洞察"
                width="1672"
                height="941"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="intro-band" aria-labelledby="data-problem-title">
          <div className="container intro-grid">
            <div className="section-kicker">
              <h2 id="data-problem-title">企业不缺报表，缺的是从数据到行动的分析能力</h2>
            </div>
            <div className="diagnosis-list">
              {problems.map((item) => (
                <article key={item[0]}>
                  <span>{item[0]}</span>
                  <div>
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="section fde-section" aria-labelledby="data-workflow-title">
          <div className="container fde-layout">
            <div className="fde-copy">
              <h2 id="data-workflow-title">从数据接入到业务行动，跑通一条分析工作流</h2>
              <p>
                先选一个业务负责人每天都会问的问题，连接相关数据、明确指标口径，让 AI 给出可核对的结论，再把确认后的洞察分发给真正要行动的人。
              </p>
            </div>
            <figure className="fde-visual">
              <img
                src="/assets/ai-data-analysis-flow.png"
                alt="AI 数据分析从数据接入、统一口径、洞察分析到业务行动的流程图"
                width="1693"
                height="929"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="section section-light" aria-labelledby="data-capability-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="data-capability-title">把数据、指标、分析和行动放进同一条业务链</h2>
            </div>
            <div className="pilot-list data-analysis-platform-list">
              {capabilities.map((item) => (
                <article key={item.number}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <ul>
                    {item.items.map((child) => (
                      <li key={child}>{child}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section value-section" aria-labelledby="data-scenarios-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="data-scenarios-title">先解决一个经营问题，再逐步扩大分析范围</h2>
            </div>
            <div className="value-lines">
              {scenarios.map((item) => (
                <article key={item.number}>
                  <div className="value-label value-label-blue">
                    <span>{item.number}</span>
                    <strong>{item.label}</strong>
                  </div>
                  <div className="value-copy">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                  <ul>
                    {item.items.map((child) => (
                      <li key={child}>{child}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          title="想先找出一个值得用 AI 分析的业务问题？"
          description="告诉我们你现在最常看的数据、最难判断的变化和已有系统。我们会先一起判断适合从哪个高频问题切入，再准备可演示、可验证、可逐步扩展的数据分析试点方案。"
          primaryHref={contactHref}
          primaryLabel="预约数据分析方案沟通"
          caption="添加企业微信，备注：AI 数据分析"
        />
      </main>
    </>
  );
}
