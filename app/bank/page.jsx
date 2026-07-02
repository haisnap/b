const contactHref =
  "mailto:lihongqing@haidian.ai?subject=%E9%93%B6%E8%A1%8C%E6%99%BA%E8%83%BD%E8%AE%A4%E7%9F%A5%E4%B8%8E%E4%BB%BB%E5%8A%A1%E6%89%A7%E8%A1%8C%E5%B9%B3%E5%8F%B0%E6%96%B9%E6%A1%88%E6%B2%9F%E9%80%9A";

const pageUrl = "https://b.haisnap.com/bank/";

const institutions = ["中国银行", "中信银行", "民生银行", "邮储银行", "中关村银行"];

const diagnoses = [
  ["01", "经营认知停留在固定报表", "管理层提出新问题时，数据、分析和展示仍需要多个团队临时串联。"],
  ["02", "业务判断依赖人工整合", "客户、企业、项目和产业信息分散，专家时间被大量资料搜集与整理占用。"],
  ["03", "高价值成果难以复用", "报告、看板和复盘材料每次从头生产，优秀方法没有沉淀为组织能力。"]
];

const pilots = [
  {
    role: "客户经理",
    title: "客户综合判断报告",
    body: "汇集行内信息、工商、产业、科技、风险与舆情数据，形成可复核的客户判断和内部汇报材料。",
    items: ["企业画像与关键变化", "产业位置与成长判断", "风险提示与建议动作"]
  },
  {
    role: "风险与合规",
    title: "智能尽调与风险预警",
    body: "把贷前识别、贷中审核、贷后监测和合规报告串成连续、可审计的任务链。",
    items: ["材料识别与异常点提取", "多源风险信号持续监测", "证据链与报告自动整理"]
  },
  {
    role: "管理与运营",
    title: "重点项目看板与复盘",
    body: "把项目资料、会议记录和过程数据转化为持续更新的认知界面与管理层成果。",
    items: ["项目进度与关键节点", "跨部门事项与潜在风险", "专题汇报与复盘材料"]
  }
];

const valueLines = [
  {
    color: "value-label-green",
    number: "01",
    label: "客户经营与增长",
    title: "从粗放触达走向客户理解与持续经营",
    body: "整合客户画像、行为特征与业务数据，辅助完成需求识别、产品匹配、营销建议和持续经营动作。",
    items: ["客户画像与客群分层", "个性化产品匹配", "营销助手与客户陪伴"]
  },
  {
    color: "value-label-gold",
    number: "02",
    label: "风险与合规管理",
    title: "从事后识别走向持续监测与主动预警",
    body: "统一调度客户、交易、司法、舆情和产业信息，辅助尽调、审核、监测、异常识别与报告生产。",
    items: ["智能尽调与授信辅助", "贷后监测与风险预警", "制度解析与合规报告"]
  },
  {
    color: "value-label-blue",
    number: "03",
    label: "运营与财资管理",
    title: "从重复操作走向流程协同与决策支持",
    body: "把知识检索、文档理解、自动审核、预测分析和策略生成组合为可持续运行的任务流程。",
    items: ["知识问答与材料检索", "文档审核与成果生成", "财资预测与策略支持"]
  }
];

const executionSteps = [
  ["01", "任务理解", "识别目标、输入与约束"],
  ["02", "路径规划", "拆解步骤与依赖关系"],
  ["03", "资源调度", "选择数据、专业能力与工具"],
  ["04", "多任务执行", "并行处理与动态调整"],
  ["05", "结果审查", "质量校验与人工复核"],
  ["06", "成果交付", "报告、看板与能力沉淀"]
];

const platformCards = [
  ["数据与系统接入", "只在授权边界内调用", "按需连接 CRM、信贷系统、内部报表、外部产业数据，以及 PPT、Word、PDF、图片等多模态材料。"],
  ["能力服务与编排", "把方法沉淀为标准化业务能力", "统一管理数据能力、行业模型、工具接口与业务模板，让优秀方法可以被配置、组合和持续优化。"],
  ["运行与资源底座", "支撑企业级稳定运行", "提供云原生部署、弹性调度、可观测运维、版本管理和故障隔离能力，支持在线与离线环境。"]
];

const cases = [
  ["中信银行总行", "专精特新企业画像与评价", "支撑客户准入、分层管理与风险识别，为“科创贷”“科创 e 贷”等产品提供数据基础。"],
  ["民生银行", "科技型企业评价与画像系统", "覆盖区域获客、批量评价、企业监测和风险预警，补全画像维度并提升放款效率。"],
  ["邮储银行总行", "科技企业白名单与技术评价", "支持精准营销、科技企业画像和贷中评审，弥补科技专业评价能力不足。"],
  ["中关村银行", "投贷联动与信贷评价模型", "支持企业评分、行业划分、核心技术识别、区域获客与业务决策展示。"]
];

const boundaries = [
  "不改变现有业务系统架构",
  "不越权访问或跨域使用数据",
  "不直接写入核心业务系统",
  "关键环节保留人工复核与审批",
  "执行日志、操作过程和结果可追溯",
  "能力范围可配置、可关闭、可回放"
];

const deployments = [
  ["SaaS 服务", "前期体验、专题分析与轻量场景验证", "启动轻、部署快，先验证任务与成果价值"],
  ["API 接入", "已有门户、知识平台或业务系统", "无需重建系统，把执行能力嵌入现有流程"],
  ["私有化部署", "数据安全、权限隔离与深度集成要求高", "本地或专属云运行，安全可控并持续扩展"]
];

const faqs = [
  ["平台会替代银行现有核心系统吗？", "不会。平台作为统一任务执行层，连接已授权的数据与系统能力，不接管核心业务流程，也不承担最终业务决策。"],
  ["如何保证执行过程可控、可审计？", "平台记录数据来源、能力调用、任务步骤、模型输出和关键操作，支持权限配置、风险提示、结果回放与人工复核。"],
  ["第一阶段适合选择什么任务？", "优先选择高频、高价值、资料复杂但边界清晰的任务，例如客户综合判断、智能尽调、经营专题、合规材料或项目复盘。"],
  ["是否可以接入行内数据并私有化部署？", "可以。可根据银行安全规范部署在本地或专属云环境，并在明确授权范围内连接行内数据库、API、业务系统与文档材料。"]
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://b.haisnap.com/#organization",
      name: "北京海新智能科技有限公司",
      alternateName: ["海新智能", "HaiSnap AI"],
      url: "https://b.haisnap.com",
      email: "lihongqing@haidian.ai"
    },
    {
      "@type": "Product",
      "@id": "https://b.haisnap.com/bank/#product",
      name: "银行智能认知与任务执行平台",
      brand: { "@id": "https://b.haisnap.com/#organization" },
      category: "Banking AI Execution Platform",
      description: "连接银行数据、系统、模型、工具和专业经验，支持任务解析、能力调度、成果生成、过程审计与能力沉淀。",
      url: pageUrl
    },
    {
      "@type": "FAQPage",
      "@id": "https://b.haisnap.com/bank/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "平台会替代银行现有核心系统吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "不会。平台位于业务系统与能力资源之间，承接任务解析、能力调度、成果生成和过程审计，不替代核心系统，也不改变核心业务流程。"
          }
        },
        {
          "@type": "Question",
          name: "是否支持私有化部署和行内数据接入？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "支持。金融机构可根据数据安全、权限隔离和系统集成要求，选择 API 接入、专属环境或本地私有化部署，并在授权范围内接入行内系统与数据。"
          }
        },
        {
          "@type": "Question",
          name: "适合从哪些银行场景开始试点？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "建议从边界清晰、价值高、资料复杂且复用频率高的任务开始，例如客户综合判断、智能尽调、风险预警、合规报告、重点项目看板和项目复盘材料。"
          }
        }
      ]
    }
  ]
};

export const metadata = {
  title: "银行智能认知与任务执行平台",
  description:
    "海新智能面向银行提供智能认知与任务执行平台，连接行内系统、外部数据和专业经验，支持客户经营、智能尽调、风险合规、运营财资与成果生产，提供 API 接入和私有化部署。",
  alternates: {
    canonical: "/bank/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: "海新智能 HaiSnap",
    url: pageUrl,
    title: "银行智能认知与任务执行平台",
    description: "把分散数据、业务系统和专业经验转化为可执行、可审计、可沉淀的银行组织能力。"
  }
};

export const dynamic = "force-dynamic";

export default function BankPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>

      <header className="site-header" aria-label="页面导航">
        <a className="brand" href="https://haisnap.ai/zh" aria-label="HaiSnap 首页">
          <img src="/assets/haisnap-header-logo.webp" alt="HaiSnap" width="120" height="60" fetchPriority="high" />
        </a>
        <nav className="site-nav" aria-label="银行方案导航">
          <a href="#platform">平台能力</a>
          <a href="#scenarios">银行场景</a>
          <a href="#governance">安全与部署</a>
          <a href="#proof">金融案例</a>
        </nav>
        <a className="header-cta" href={contactHref}>
          预约沟通
        </a>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">海新智能 · 银行行业解决方案</p>
              <h1 id="hero-title">银行智能认知与任务执行平台</h1>
              <p className="hero-lead">
                连接行内系统、外部产业数据与专家方法，把客户分析、智能尽调、风险监测和经营汇报转化为可执行、可审计、可复用的工作流程。
              </p>
              <div className="hero-actions" aria-label="首屏行动">
                <a className="button button-primary" href={contactHref}>
                  预约银行方案演示
                </a>
                <a className="button button-secondary" href="#scenarios">
                  查看可试点场景
                </a>
              </div>
              <ul className="hero-guardrails" aria-label="平台边界">
                <li>不替代核心系统</li>
                <li>只调用授权数据</li>
                <li>关键环节保留人工控制</li>
              </ul>
            </div>

            <div className="hero-product" aria-label="HaiSnap 银行任务执行工作台示意">
              <div className="product-toolbar">
                <span>HaiSnap 执行工作台</span>
                <span className="product-status">任务执行中</span>
              </div>
              <div className="task-brief">
                <span>当前任务</span>
                <strong>结合行内信息与外部数据，形成客户综合判断并生成汇报材料</strong>
              </div>
              <img
                src="/assets/haisnap-task-console.png"
                alt="HaiSnap 任务执行过程与结果审查界面"
                width="2078"
                height="1144"
                fetchPriority="high"
              />
              <div className="product-foot">
                <span>数据来源可追溯</span>
                <span>执行过程可回放</span>
                <span>结果支持人工复核</span>
              </div>
            </div>
          </div>
        </section>

        <section className="institution-band" aria-label="金融机构服务经验">
          <div className="container institution-inner">
            <p>金融机构服务经验</p>
            <div className="institution-list" aria-label="相关金融机构">
              {institutions.map((institution) => (
                <span key={institution}>{institution}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="intro-band" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <div className="section-kicker">
              <span>为什么是执行平台</span>
              <h2 id="intro-title">银行真正需要的，不是孤立工具，而是一条持续运转的工作链</h2>
            </div>
            <div className="diagnosis-list">
              {diagnoses.map(([number, title, body]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="scenarios" className="section section-light" aria-labelledby="scenarios-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow eyebrow-dark">从一个真实任务开始</p>
                <h2 id="scenarios-title">先验证可见结果，再逐步进入业务流程</h2>
              </div>
              <p>选择一个边界清晰、复用频率高的任务，让业务部门先看到交付结果、过程控制和规模化复用价值，再逐步扩展到更多流程。</p>
            </div>

            <div className="pilot-layout">
              <div className="pilot-list">
                {pilots.map((pilot) => (
                  <article key={pilot.title}>
                    <span className="pilot-role">{pilot.role}</span>
                    <h3>{pilot.title}</h3>
                    <p>{pilot.body}</p>
                    <ul>
                      {pilot.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <figure className="pilot-visual">
                <div className="visual-caption">
                  <span>一句业务目标</span>
                  <strong>系统完成资料读取、任务拆解、工具调用、结果审查与成果交付</strong>
                </div>
                <img src="/assets/haisnap-prompt-console.png" alt="HaiSnap 输入银行业务目标并读取任务材料的工作台" width="1818" height="1000" loading="lazy" />
                <figcaption>示例界面用于展示任务执行方式，实际部署可按银行数据权限与业务流程配置。</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="platform" className="section value-section" aria-labelledby="value-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow eyebrow-dark">三条银行价值主线</p>
              <h2 id="value-title">围绕增长、风控和运营，进入核心工作链</h2>
            </div>

            <div className="value-lines">
              {valueLines.map((line) => (
                <article key={line.number}>
                  <div className={`value-label ${line.color}`}>
                    <span>{line.number}</span>
                    <strong>{line.label}</strong>
                  </div>
                  <div className="value-copy">
                    <h3>{line.title}</h3>
                    <p>{line.body}</p>
                  </div>
                  <ul>
                    {line.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section execution-section" aria-labelledby="execution-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">任务执行机制</p>
                <h2 id="execution-title">从一句业务目标到可追溯交付结果</h2>
              </div>
              <p>平台位于数据能力与业务系统之间，不改变核心流程，负责理解任务、调度授权能力、执行步骤并记录全过程。</p>
            </div>

            <ol className="execution-flow" aria-label="银行任务执行流程">
              {executionSteps.map(([number, title, body]) => (
                <li key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <small>{body}</small>
                </li>
              ))}
            </ol>

            <div className="platform-grid">
              {platformCards.map(([label, title, body]) => (
                <article key={label}>
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="section proof-section" aria-labelledby="proof-title">
          <div className="container">
            <div className="proof-feature">
              <div className="proof-copy">
                <p className="eyebrow eyebrow-dark">金融服务案例</p>
                <h2 id="proof-title">已有银行科技金融场景积累，不从概念验证开始</h2>
                <p>相关团队长期服务银行科技企业识别、批量获客、客户审批、贷中评价和贷后风控，积累了多源数据、企业评价与产业分析能力。</p>
              </div>
              <div className="proof-numbers" aria-label="中国银行夸腾系统相关成果">
                <span>中国银行 · 夸腾系统</span>
                <strong>1.8 万+</strong>
                <p>截至 2025 年 12 月底，仅深圳地区服务科技企业数量</p>
                <strong>3000 亿元+</strong>
                <p>相关科技贷款规模</p>
              </div>
            </div>

            <div className="case-list">
              {cases.map(([bank, title, body]) => (
                <article key={bank}>
                  <span>{bank}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="governance" className="section governance-section" aria-labelledby="governance-title">
          <div className="container governance-grid">
            <div>
              <p className="eyebrow">企业级可控</p>
              <h2 id="governance-title">低侵入接入，清晰划分平台与业务责任</h2>
              <p className="governance-lead">平台负责解析、调度、执行、记录和生成；银行负责定义目标、授权数据、配置能力、复核结果并完成最终决策。</p>
            </div>
            <ul className="boundary-list">
              {boundaries.map((boundary) => (
                <li key={boundary}>{boundary}</li>
              ))}
            </ul>
          </div>

          <div className="container deployment-wrap">
            <div className="section-heading deployment-heading">
              <p className="eyebrow">接入与部署</p>
              <h2>按验证阶段和安全要求选择落地方式</h2>
            </div>
            <div className="deployment-table" role="table" aria-label="平台接入与部署方式">
              <div className="deployment-row deployment-head" role="row">
                <span role="columnheader">方式</span>
                <span role="columnheader">适合阶段</span>
                <span role="columnheader">典型价值</span>
              </div>
              {deployments.map(([method, stage, value]) => (
                <div className="deployment-row" role="row" key={method}>
                  <strong role="cell">{method}</strong>
                  <span role="cell">{stage}</span>
                  <span role="cell">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div className="section-heading faq-heading">
              <p className="eyebrow eyebrow-dark">FAQ</p>
              <h2 id="faq-title">银行客户常见问题</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">从一个银行任务开始</p>
              <h2 id="contact-title">带来一个真实场景，我们一起判断最小可行路径</h2>
              <p>客户分析、尽调报告、经营专题、风险预警、合规材料或项目复盘都可以成为试点入口。我们会共同梳理数据条件、流程边界、部署方式与交付标准。</p>
              <div className="contact-actions">
                <a className="button button-primary" href={contactHref}>
                  预约方案沟通
                </a>
                <a className="mail-link" href="mailto:lihongqing@haidian.ai">
                  lihongqing@haidian.ai
                </a>
              </div>
            </div>
            <figure className="contact-qr">
              <img src="/assets/enterprise-contact.png" alt="海新智能企业版联系二维码" width="198" height="198" loading="lazy" />
              <figcaption>扫码联系企业版顾问</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 海新智能 HaiSnap</span>
          <a href="mailto:lihongqing@haidian.ai">商务洽谈：lihongqing@haidian.ai</a>
        </div>
      </footer>
    </>
  );
}
