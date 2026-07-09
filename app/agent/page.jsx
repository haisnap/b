import ContactCTA from "../components/ContactCTA";
import SiteHeader from "../components/SiteHeader";

const pageUrl = "https://b.haisnap.com/agent/";
const contactHref =
  "mailto:lihongqing@haidian.ai?subject=%E4%BC%81%E4%B8%9A%E7%BA%A7%20AI%20Agent%20%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%96%B9%E6%A1%88%E6%B2%9F%E9%80%9A";

const problems = [
  ["01", "工具很多，业务流程仍靠人来回切换", "员工需要在知识库、表格、业务系统和生成式 AI 之间搬运信息，任务没有真正闭环。"],
  ["02", "通用 Agent 会对话，却不懂企业规则", "缺少企业知识、权限边界、SOP 和系统连接，回答看似聪明，结果却很难直接进入业务。"],
  ["03", "流程跑起来以后，效果与风险无法管理", "缺少版本、评测、观测、审计和人工复核机制，Agent 难以成为可持续运营的生产能力。"]
];

const platformCapabilities = [
  {
    number: "01",
    label: "建",
    title: "把自然语言需求编排成 Agent 工作流",
    body: "围绕业务目标组合知识、Skill、工具、模型、条件分支与人工节点，快速完成原型验证和流程调整。",
    items: ["可视化流程编排", "企业 Skill 复用", "多模型与工具调用"]
  },
  {
    number: "02",
    label: "用",
    title: "让员工在真实任务里直接调用 Agent",
    body: "从销售方案、客户服务到运营分析，让 Agent 接收任务、调用授权能力并交付可检查的业务成果。",
    items: ["对话式任务入口", "多 Agent 协作", "业务系统连接"]
  },
  {
    number: "03",
    label: "管",
    title: "统一管理权限、版本、质量与运行过程",
    body: "通过 AgentOps 管理发布版本、执行记录、效果评测和异常处置，在关键环节保留人工判断。",
    items: ["执行过程审计", "效果评测观测", "人在回路机制"]
  }
];

const scenarios = [
  {
    number: "01",
    label: "销售与客户经营",
    title: "从客户资料到可执行的销售方案",
    body: "汇集客户背景、沟通记录、产品资料和历史方案，生成拜访准备、需求判断、方案初稿与跟进任务。",
    items: ["客户调研", "销售方案", "跟进计划"]
  },
  {
    number: "02",
    label: "知识与员工助手",
    title: "把企业知识变成岗位 Agent",
    body: "让员工基于授权知识查找答案、执行 SOP、生成专业材料，并把优秀方法沉淀为可复用 Skill。",
    items: ["知识问答", "SOP 执行", "材料生成"]
  },
  {
    number: "03",
    label: "运营与项目管理",
    title: "把分散信息串成持续运行的工作链",
    body: "自动整理会议、数据和项目进展，识别异常与待办，持续生成周报、看板和复盘材料。",
    items: ["会议跟进", "运营周报", "项目复盘"]
  },
  {
    number: "04",
    label: "客服与服务运营",
    title: "让服务流程从问答走向闭环处理",
    body: "结合知识库、工单和业务规则完成问题识别、答案生成、工单流转、质检分析与持续优化。",
    items: ["智能客服", "工单协同", "服务质检"]
  }
];

const deploymentRows = [
  ["API 接入", "连接现有应用与数据服务", "适合先从单个流程快速验证 Agent 价值"],
  ["专属环境", "隔离运行资源与企业配置", "适合对权限、稳定性和管理有更高要求的团队"],
  ["私有化部署", "在客户指定环境部署", "适合对数据安全、网络边界和系统集成有严格要求的组织"]
];

const faqs = [
  ["AI Agent 和普通聊天机器人有什么区别？", "普通聊天机器人主要回答问题；AI Agent 会围绕目标调用知识、工具、Skill 和业务系统，并按照工作流推进任务、生成成果。"],
  ["Agent 工作流需要重新改造现有业务系统吗？", "不需要先替换现有系统。响指位于员工与业务能力之间，可通过授权接口连接知识库、CRM、ERP、工单或其他系统，从边界清晰的任务开始验证。"],
  ["没有技术团队也能搭建企业 Agent 吗？", "可以先由业务人员描述目标和流程，再由响指团队协助拆解场景、配置知识与能力、搭建 Demo，并逐步沉淀为可维护的 Agent 工作流。"],
  ["如何控制 Agent 的结果质量和业务风险？", "通过权限隔离、输入输出记录、效果评测、版本管理、异常处置和人在回路机制，让关键决策保留人工复核，执行过程可追溯。"],
  ["适合从什么场景开始试点？", "优先选择资料多、规则相对清晰、重复频率高且结果容易验收的任务，例如销售方案、知识助手、会议跟进、运营周报、客服质检或项目复盘。"]
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
      name: "企业级 AI Agent 工作流平台",
      provider: { "@id": "https://b.haisnap.com/#organization" },
      serviceType: "Enterprise AI Agent Workflow Platform",
      description: "将企业知识、Skill、工具、模型和业务系统编排成可执行、可管理、可审计的 AI Agent 工作流。",
      url: pageUrl,
      areaServed: "CN"
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "企业级 AI Agent 工作流平台",
      about: { "@id": `${pageUrl}#service` },
      inLanguage: "zh-CN"
    }
  ]
};

export const metadata = {
  title: { absolute: "企业级 AI Agent 工作流平台 | 响指 AI" },
  description:
    "响指 AI Agent 工作流平台连接企业知识、Skill、工具、模型与业务系统，支持工作流编排、多智能体协作、AgentOps 运行管理、API 接入和私有化部署。",
  keywords: ["AI Agent", "Agent 工作流", "AI Agent 工作流", "企业级 Agent", "智能体平台", "多智能体协作"],
  alternates: { canonical: "/agent/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "响指 AI",
    url: pageUrl,
    title: "企业级 AI Agent 工作流平台",
    description: "把企业知识、工具和业务规则编排成真正可以运行的 Agent 工作流。"
  }
};

export default function AgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <SiteHeader
        ariaLabel="AI Agent 工作流页面导航"
        brandHref="/"
        ctaHref="#contact"
        ctaLabel="预约演示"
        minimal
      />

      <main id="main" className="home-page agent-page">
        <section className="hero home-hero" aria-labelledby="agent-hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 id="agent-hero-title">企业级 AI Agent 工作流，让复杂业务自动执行</h1>
              <p className="hero-lead">
                把企业知识、Skill、工具、模型与业务系统编排成一条可运行的工作链。Agent 不只回答问题，还能理解任务、调用能力、推进流程并交付可检查的业务成果。
              </p>
              <div className="hero-actions" aria-label="首屏行动">
                <a className="button button-primary" href="#contact">
                  预约 Agent 方案演示
                </a>
                <a className="button button-secondary" href="#workflow">
                  查看 Agent 工作流
                </a>
              </div>
            </div>

            <div className="hero-product" aria-label="响指 AI Agent 工作流界面示意">
              <img
                src="/assets/haisnap-task-console.png"
                alt="响指 AI Agent 工作流任务执行界面"
                width="2078"
                height="1144"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="institution-band agent-intent-band" aria-label="Agent 工作流适用团队">
          <div className="container institution-inner">
            <div className="institution-list">
              <span>销售团队</span>
              <span>客户服务</span>
              <span>运营团队</span>
              <span>项目管理</span>
              <span>知识管理</span>
            </div>
          </div>
        </section>

        <section className="intro-band agent-problem-section" aria-labelledby="agent-problem-title">
          <div className="container intro-grid">
            <div className="section-kicker">
              <h2 id="agent-problem-title">企业缺的不是另一个 AI 工具，而是一条能把任务做完的工作链</h2>
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

        <section id="workflow" className="section fde-section" aria-labelledby="workflow-title">
          <div className="container fde-layout">
            <div className="fde-copy">
              <h2 id="workflow-title">从一个高频任务开始，跑通 Agent 工作流</h2>
              <p>
                先选一个边界清晰、结果容易验收的业务场景，把资料、规则、系统和人工判断整理成一条可执行流程。跑通以后，再扩展到更多岗位和系统。
              </p>
            </div>
            <figure className="fde-visual">
              <img
                src="/assets/haisnap-prompt-console.png"
                alt="响指 AI 工作流配置与运行界面"
                width="1818"
                height="1000"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section id="platform" className="section section-light" aria-labelledby="platform-title">
          <div className="container">
            <div className="pilot-layout">
              <div className="pilot-copy">
                <div className="section-heading support-heading">
                  <h2 id="platform-title">把 Agent 的构建、使用和管理放在同一套体系里</h2>
                </div>
                <div className="pilot-list">
                  {platformCapabilities.map((item) => (
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

              <figure className="pilot-visual">
                <img
                  src="/assets/haisnap-task-console.png"
                  alt="响指 AI Agent 工作流任务台"
                  width="2078"
                  height="1144"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="scenarios" className="section value-section" aria-labelledby="scenarios-title">
          <div className="container">
            <div className="section-heading">
              <h2 id="scenarios-title">先把一个高频任务跑通，再扩展到完整业务流程</h2>
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

        <section id="governance" className="section governance-section agent-governance-section" aria-labelledby="governance-title">
          <div className="container">
            <div className="governance-grid">
              <div>
                <p className="eyebrow">企业级安全与管控</p>
                <h2 id="governance-title">让 Agent 在清晰边界内执行</h2>
                <p className="governance-lead">
                  以权限、数据、过程和人工控制为边界，让 Agent 调用什么、执行了什么、产生了什么结果都有记录可查。
                </p>
              </div>
              <ul className="boundary-list">
                <li>企业数据按授权范围调用</li>
                <li>模型、知识与工具权限隔离</li>
                <li>任务输入输出完整留痕</li>
                <li>关键业务节点人工确认</li>
                <li>Agent 与工作流版本管理</li>
                <li>异常任务支持定位与重试</li>
              </ul>
            </div>

            <div className="deployment-wrap">
              <div className="section-heading split-heading deployment-heading">
                <h2>按企业要求选择接入与部署方式</h2>
                <p>从快速试点到生产级落地，结合数据安全、网络边界、系统集成和运维要求确定实施路径。</p>
              </div>
              <div className="deployment-table" role="table" aria-label="Agent 平台部署方式">
                <div className="deployment-row deployment-head" role="row">
                  <span role="columnheader">部署方式</span>
                  <span role="columnheader">连接范围</span>
                  <span role="columnheader">适用阶段</span>
                </div>
                {deploymentRows.map((row) => (
                  <div className="deployment-row" role="row" key={row[0]}>
                    <strong role="cell">{row[0]}</strong>
                    <span role="cell">{row[1]}</span>
                    <span role="cell">{row[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="agent-faq-title">
          <div className="container faq-grid">
            <div className="section-heading faq-heading">
              <h2 id="agent-faq-title">关于企业 AI Agent 工作流</h2>
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
          title="想先跑通一条属于你的 Agent 工作流？"
          description="告诉我们你的业务场景、现有资料和系统环境。我们会先一起判断适合从哪个高频任务开始，再准备可演示、可评估、可逐步上线的 Agent 试点方案。"
          primaryHref={contactHref}
          primaryLabel="预约 Agent 方案沟通"
          caption="添加企业微信，备注：Agent 工作流"
        />
      </main>
    </>
  );
}
