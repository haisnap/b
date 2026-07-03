export const dynamic = "force-dynamic";

const pageUrl = "https://b.haisnap.com/";

const partnerTypes = ["行业销售", "企服渠道", "培训讲师", "系统集成商", "咨询顾问"];

const diagnoses = [
  ["01", "客户知道要做 AI，但说不清第一步", "企业老板、业务负责人和培训客户已经开始问 AI，但需求往往停在一句“我们也想做一个”。"],
  ["02", "合作方有客户关系，却缺少售前材料", "没有清晰场景、Demo、报价边界和交付路径，客户兴趣很容易停在聊天阶段。"],
  ["03", "项目能不能交付，取决于后端能力", "企业 AI 服务需要平台、方案、数据整理、智能体配置、培训复盘和持续运营支持。"]
];

const supportItems = [
  {
    title: "先让客户看到一个能跑的结果",
    body: "用响指的 AI 工作台、知识库、智能体和应用生成能力，快速做出演示原型。"
  },
  {
    title: "把模糊需求整理成可沟通项目",
    body: "协助拆解客户场景、准备沟通提纲、试点方案、报价范围和交付边界。"
  },
  {
    title: "从试点项目走到持续服务",
    body: "参与需求确认、Demo 调整、培训交付、上线复盘和后续扩展建议。"
  }
];

const projectLines = [
  {
    color: "value-label-green",
    number: "01",
    label: "咨询培训",
    title: "AI 咨询、企业内训和试点场景诊断",
    body: "适合已有企业培训、园区协会、商会或老板客户资源的合作方，从认知课和场景诊断切入。",
    items: ["AI 场景课", "业务流程诊断", "试点清单"]
  },
  {
    color: "value-label-blue",
    number: "02",
    label: "项目落地",
    title: "企业知识库、智能体和工作流优化",
    body: "把客户资料、产品手册、销售 SOP、会议记录和客服问答整理成可调用的 AI 能力。",
    items: ["企业知识库", "销售助手", "SOP Skill"]
  },
  {
    color: "value-label-gold",
    number: "03",
    label: "集成部署",
    title: "私有化部署、API 接入和行业应用原型",
    body: "面向有安全、权限和系统集成要求的客户，评估专属部署、接口接入和业务应用原型。",
    items: ["私有化部署", "API 对接", "应用原型"]
  }
];

const faqs = [
  ["这是不是卖加盟？", "不是。这个页面面向有企业客户资源的合作方，先判断客户需求和可合作方式，不收所谓加盟费。"],
  ["我不懂技术可以合作吗？", "可以。你负责客户关系、行业理解和业务场景，响指提供平台、售前、Demo 和交付支持。"],
  ["第一单适合做什么？", "优先从边界清晰的小场景开始，例如企业知识库、销售助手、AI 培训或 SOP 流程优化。"]
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://b.haisnap.com/#organization",
      name: "响指 AI",
      alternateName: ["HaiSnap", "HaiSnap AI"],
      url: pageUrl
    },
    {
      "@type": "Service",
      "@id": "https://b.haisnap.com/#service",
      name: "企业 AI 服务合作",
      provider: { "@id": "https://b.haisnap.com/#organization" },
      serviceType: "Enterprise AI Service Partnership",
      description:
        "响指 AI 面向有企业客户资源、渠道资源、咨询资源和服务交付能力的合作方，提供平台、方案、售前和交付支持。",
      url: pageUrl
    },
    {
      "@type": "FAQPage",
      "@id": "https://b.haisnap.com/#faq",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item[0],
        acceptedAnswer: {
          "@type": "Answer",
          text: item[1]
        }
      }))
    }
  ]
};

export const metadata = {
  title: {
    absolute: "企业 AI 服务合作 | 响指 AI"
  },
  description:
    "有企业客户资源，想切入 AI 服务市场？响指 AI 提供平台、方案、售前、Demo 和交付支持，帮助合作方把客户需求变成可试点、可报价、可交付的企业 AI 项目。",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: "响指 AI",
    url: pageUrl,
    title: "企业 AI 服务合作",
    description: "你负责客户关系和业务需求，响指 AI 提供平台、方案、售前、Demo 和交付支持。"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <header className="site-header site-header-minimal" aria-label="企业 AI 服务合作导航">
        <a className="brand" href="/" aria-label="响指 AI 首页">
          <img src="/assets/haisnap-header-logo.webp" alt="HaiSnap" width="120" height="60" fetchPriority="high" />
        </a>
        <a className="header-cta" href="#contact">
          加企微咨询
        </a>
      </header>

      <main id="main" className="home-page">
        <section className="hero home-hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 id="hero-title">把企业客户的 AI 需求，变成可交付项目</h1>
              <p className="hero-lead">
                如果你有企业客户资源、渠道资源或培训咨询资源，响指可以补上平台、方案、售前、Demo 和交付支持。你负责客户关系，我们一起把客户的 AI 想法变成试点项目。
              </p>
              <div className="hero-actions" aria-label="首屏行动">
                <a className="button button-primary" href="#contact">
                  扫码咨询合作
                </a>
                <a className="button button-secondary" href="#projects">
                  查看可合作项目
                </a>
              </div>
            </div>

            <div className="hero-product" aria-label="响指企业 AI 服务合作工作台示意">
              <div className="product-toolbar">
                <span>HaiSnap Partner Desk</span>
                <span className="product-status">方案准备中</span>
              </div>
              <div className="task-brief">
                <span>客户需求</span>
                <strong>客户说想做 AI，但不知道先从培训、知识库还是业务流程开始</strong>
              </div>
              <img
                src="/assets/haisnap-prompt-console.png"
                alt="响指 AI 工作台把客户需求整理成方案和可执行任务"
                width="1818"
                height="1000"
                fetchPriority="high"
              />
              <div className="product-foot">
                <span>需求诊断</span>
                <span>Demo 演示</span>
                <span>试点交付</span>
              </div>
            </div>
          </div>
        </section>

        <section id="fit" className="institution-band" aria-label="适合合作方">
          <div className="container institution-inner">
            <div className="institution-list" aria-label="合作方类型">
              {partnerTypes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="intro-band" aria-labelledby="diagnosis-title">
          <div className="container intro-grid">
            <div className="section-kicker">
              <h2 id="diagnosis-title">现在缺的不是客户兴趣，而是把兴趣变成项目的能力</h2>
            </div>
            <div className="diagnosis-list">
              {diagnoses.map((item) => (
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

        <section id="support" className="section section-light" aria-labelledby="support-title">
          <div className="container">
            <div className="pilot-layout">
              <div className="pilot-copy">
                <div className="section-heading support-heading">
                  <h2 id="support-title">响指提供平台、售前和交付能力</h2>
                </div>

                <div className="pilot-list">
                  {supportItems.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <figure className="pilot-visual">
                <div className="visual-caption">
                  <strong>把客户一句话需求，整理成可演示、可报价、可交付的试点方案</strong>
                </div>
                <img src="/assets/haisnap-task-console.png" alt="响指 AI 任务执行和交付过程示意" width="2078" height="1144" />
              </figure>
            </div>
          </div>
        </section>

        <section id="projects" className="section value-section" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="projects-title">先从一个小场景切入，再扩展成持续服务</h2>
            </div>
            <div className="value-lines">
              {projectLines.map((item) => (
                <article key={item.number}>
                  <div className={`value-label ${item.color}`}>
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

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div className="section-heading faq-heading">
              <h2 id="faq-title">常见问题</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details key={item[0]} open={index === 0}>
                  <summary>{item[0]}</summary>
                  <p>{item[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-copy">
              <h2 id="contact-title">想判断你的客户资源适合怎么切入 AI 服务？</h2>
              <p>
                扫码添加企业微信，备注“AI 企业服务合作”。我们会先看你的行业资源、客户类型和合作方式，再判断适合从哪个试点项目开始。
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href="#contact">
                  添加企业微信
                </a>
                <a className="button button-secondary" href="https://haisnap.ai/zh">
                  访问响指主站
                </a>
              </div>
            </div>
            <figure className="contact-qr">
              <img src="/assets/enterprise-contact.png" alt="响指 AI 企业微信二维码" width="396" height="396" />
              <figcaption>添加企业微信，备注：AI 企业服务合作</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
