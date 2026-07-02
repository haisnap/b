import { SemBentoGrid } from "./components/SemBento";

export const dynamic = "force-dynamic";

const pageUrl = "https://b.haisnap.com/";

const partnerTypes = [
  "行业销售 / 渠道商",
  "企服销售 / SaaS 销售",
  "软件代理商 / 系统集成商",
  "培训讲师 / 企业内训资源方",
  "咨询顾问 / 管理顾问",
  "营销 / 私域 / 电商服务商"
];

const supportItems = [
  ["平台能力", "文案、PPT、报告、网页、应用、知识库和智能体能力，支持快速演示与试点验证。"],
  ["售前方案", "把客户模糊的 AI 想法整理成可沟通、可报价、可推进的项目方案。"],
  ["交付支持", "协助完成需求拆解、Demo 原型、试点交付、培训复盘和后续扩展。"],
  ["合作机制", "支持客户推荐、联合跟进、渠道合作和部署合伙人等合作方式。"]
];

const projectCards = [
  ["AI 咨询培训", "帮助客户理解 AI 能用在哪些业务场景，并形成第一批试点方向。"],
  ["企业知识库", "整理产品手册、历史方案、客服问答和内部文档，变成可调用资产。"],
  ["定制智能体", "围绕销售、市场、运营、客服和管理场景，构建可落地的 AI 助手。"],
  ["工作流优化", "把会议、报价、培训、客户跟进等 SOP 转成可复用的 AI Skill。"],
  ["业务 Demo 原型", "快速做出页面、应用或工具原型，让客户先看到可交付成果。"],
  ["私有化与 API", "面向有安全和集成要求的客户，评估私有化部署与系统对接路径。"]
];

const cooperationModes = [
  ["推荐企业客户", "你提供客户线索，响指协助需求判断、沟通和后续交付。"],
  ["联合跟进项目", "你负责客户关系，响指提供售前方案、Demo 和技术交付支持。"],
  ["成为渠道伙伴", "围绕行业、区域或客户类型，持续推荐并共同服务企业客户。"],
  ["参与部署服务", "参与客户诊断、试点推进、培训复盘和后续运营服务。"]
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
    }
  ]
};

export const metadata = {
  title: "企业 AI 服务合作 | 响指 AI",
  description:
    "有企业客户资源，想切入 AI 服务市场？响指 AI 提供平台、方案、售前和交付支持，帮助合作方把客户需求变成可试点、可报价、可交付的企业 AI 项目。",
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
    title: "企业 AI 服务合作 | 响指 AI",
    description:
      "你负责客户关系和业务需求，响指 AI 提供平台、方案、售前和交付支持。"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link sem-skip" href="#sem-main">
        跳到主要内容
      </a>

      <header className="sem-header" aria-label="企业 AI 服务合作导航">
        <a className="sem-brand" href="/" aria-label="响指 AI 企业服务合作">
          <img src="/assets/haisnap-logo.webp" alt="HaiSnap" width="142" height="54" fetchPriority="high" />
        </a>
        <nav className="sem-nav" aria-label="页面导航">
          <a href="#sem-fit">适合谁</a>
          <a href="#sem-projects">项目类型</a>
          <a href="#sem-contact">咨询合作</a>
        </nav>
        <a className="sem-header-cta" href="#sem-contact">
          获取合作资料
        </a>
      </header>

      <main id="sem-main" className="sem-page">
        <section className="sem-hero" aria-labelledby="sem-hero-title">
          <div className="sem-container sem-hero-grid">
            <div className="sem-hero-copy">
              <p className="sem-eyebrow">企业 AI 服务合作 · 百度 SEM 承接页</p>
              <h1 id="sem-hero-title">有客户资源，想切入企业 AI 服务市场？</h1>
              <p className="sem-hero-lead">
                不需要自己做平台，也不需要从零组技术团队。你负责客户关系和业务需求，响指 AI 提供平台、方案、售前和交付支持，一起把客户的 AI 想法变成可试点、可报价、可交付的项目。
              </p>
              <div className="sem-actions" aria-label="首屏行动">
                <a className="sem-button sem-button-primary" href="#sem-contact">
                  加企业微信咨询
                </a>
                <a className="sem-button sem-button-secondary" href="#sem-bento">
                  了解合作方式
                </a>
              </div>
              <ul className="sem-hero-points" aria-label="合作特点">
                <li>不卖加盟，不收代理费</li>
                <li>先判断客户需求，再包装试点项目</li>
                <li>支持售前、Demo、方案和交付</li>
              </ul>
            </div>

            <aside className="sem-hero-panel" aria-label="企业 AI 项目诊断">
              <div className="sem-panel-window">
                <div className="sem-window-bar">
                  <span>HaiSnap AI Project Desk</span>
                  <strong>LIVE</strong>
                </div>
                <div className="sem-panel-body">
                  <p>客户说：我们也想做 AI，但不知道先做什么。</p>
                  <div className="sem-panel-route">
                    <span>需求拆解</span>
                    <span>试点方案</span>
                    <span>Demo 演示</span>
                    <span>项目交付</span>
                  </div>
                  <div className="sem-panel-result">
                    <span>建议入口</span>
                    <strong>先做一个可验证的小场景</strong>
                    <p>知识库、销售助手、培训课件、客户资料整理或业务 Demo。</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="sem-bento" className="sem-section sem-section-bento" aria-labelledby="sem-bento-title">
          <div className="sem-container">
            <div className="sem-section-heading">
              <span>合作不是只给你一个 AI 账号</span>
              <h2 id="sem-bento-title">响指帮你把客户需求变成企业 AI 项目</h2>
              <p>
                搜索进来的客户通常已经知道 AI 是机会，但缺的是方案、售前材料、演示能力和交付路径。这一页要把合作价值讲清楚，而不是堆功能。
              </p>
            </div>
            <SemBentoGrid />
          </div>
        </section>

        <section id="sem-fit" className="sem-section sem-section-fit" aria-labelledby="sem-fit-title">
          <div className="sem-container sem-split">
            <div className="sem-section-heading sem-heading-left">
              <span>适合谁</span>
              <h2 id="sem-fit-title">如果你能接触企业客户，就可能适合合作</h2>
              <p>
                你不一定懂 AI 技术，也不一定有技术团队。只要你能接触企业老板、业务负责人、培训客户、园区协会、门店商家或行业客户，就可以先从试点项目开始。
              </p>
            </div>
            <div className="sem-partner-grid">
              {partnerTypes.map((item) => (
                <article key={item}>
                  <span />
                  <strong>{item}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sem-section sem-section-support" aria-labelledby="sem-support-title">
          <div className="sem-container">
            <div className="sem-section-heading">
              <span>响指提供什么</span>
              <h2 id="sem-support-title">让合作方能对外沟通、演示、报价和交付</h2>
            </div>
            <div className="sem-support-grid">
              {supportItems.map((item, index) => (
                <article key={item[0]}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sem-projects" className="sem-section sem-section-projects" aria-labelledby="sem-projects-title">
          <div className="sem-container">
            <div className="sem-section-heading sem-heading-left">
              <span>可合作项目</span>
              <h2 id="sem-projects-title">先从一个小场景开始，让客户看到结果</h2>
              <p>
                企业 AI 服务不一定一开始就做大系统。更适合先选一个明确场景，快速验证，再扩展到知识库、智能体、流程优化和部署。
              </p>
            </div>
            <div className="sem-project-grid">
              {projectCards.map((item) => (
                <article key={item[0]}>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sem-section sem-section-modes" aria-labelledby="sem-modes-title">
          <div className="sem-container sem-modes-grid">
            <div className="sem-section-heading sem-heading-left">
              <span>合作方式</span>
              <h2 id="sem-modes-title">根据你的资源和能力，选择合适的合作深度</h2>
            </div>
            <div className="sem-mode-list">
              {cooperationModes.map((item, index) => (
                <article key={item[0]}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item[0]}</h3>
                    <p>{item[1]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sem-contact" className="sem-contact-section" aria-labelledby="sem-contact-title">
          <div className="sem-container sem-contact-grid">
            <div className="sem-contact-copy">
              <span>获取合作资料</span>
              <h2 id="sem-contact-title">想判断自己是否适合做企业 AI 服务合作？</h2>
              <p>
                扫码添加企业微信，备注“AI 企业服务合作”。我们会先看你的客户资源、行业方向和合作方式，再判断适合从哪类试点项目切入。
              </p>
              <ul>
                <li>企业 AI 服务合作方式</li>
                <li>可包装的 AI 项目类型</li>
                <li>客户沟通话术和试点路径</li>
              </ul>
            </div>
            <div className="sem-qr-card">
              <img src="/assets/enterprise-contact.png" alt="响指 AI 企业微信二维码" width="396" height="396" />
              <strong>添加企业微信</strong>
              <p>备注：AI 企业服务合作</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
