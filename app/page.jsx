import ContactCTA from "./components/ContactCTA";
import SiteHeader from "./components/SiteHeader";

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

      <SiteHeader
        ariaLabel="企业 AI 服务合作导航"
        brandHref="/"
        ctaHref="#contact"
        ctaLabel="加企微咨询"
        minimal
      />

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
              <img
                src="/assets/fde-ai-team.jpg"
                alt="FDE 团队利用 AI 工具协同完成产品、开发、设计和运营工作"
                width="1350"
                height="1080"
                fetchPriority="high"
              />
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

        <section className="section fde-section" aria-labelledby="fde-title">
          <div className="container fde-layout">
            <div className="fde-copy">
              <h2 id="fde-title">FDE，把客户需求带到真实业务现场</h2>
              <p>
                深入客户一线，听需求、拆问题、搭原型、推上线，再根据真实反馈持续迭代。
              </p>
            </div>

            <figure className="fde-visual">
              <img
                src="/assets/fde-guide.jpg"
                alt="FDE 从客户业务现场连接产品和工程团队，并完成调研、方案、验证与交付的图解"
                width="1080"
                height="1440"
                loading="lazy"
              />
            </figure>
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
                <img
                  src="/assets/fde-role.jpg"
                  alt="FDE 结合产品、架构和咨询能力解决客户问题的图解"
                  width="896"
                  height="1200"
                  loading="lazy"
                />
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

        <ContactCTA
          title="想判断你的客户资源适合怎么切入 AI 服务？"
          description="扫码添加企业微信，备注“AI 企业服务合作”。我们会先看你的行业资源、客户类型和合作方式，再判断适合从哪个试点项目开始。"
          primaryLabel="添加企业微信"
          caption="添加企业微信，备注：AI 企业服务合作"
        />
      </main>
    </>
  );
}
