"use client";

import { memo, useEffect, useState } from "react";

const demandCases = [
  {
    tag: "制造企业",
    title: "老板想做内部知识库，但不知道先从哪个场景开始",
    meta: "建议切入：产品手册问答 + 销售资料整理"
  },
  {
    tag: "培训客户",
    title: "客户想把课程交付升级成 AI 工作流",
    meta: "建议切入：课件生成 + 学员作业分析"
  },
  {
    tag: "连锁门店",
    title: "门店每天有大量客户问题和活动内容要处理",
    meta: "建议切入：客服问答 + 活动文案助手"
  },
  {
    tag: "企服客户",
    title: "销售团队想用 AI 快速生成提案和汇报材料",
    meta: "建议切入：销售方案助手 + 客户跟进记录"
  }
];

const prompts = [
  "客户想做企业知识库，先帮我拆一个试点方案",
  "把销售 SOP 整理成可复用的 AI Skill",
  "基于客户资料生成一份售前沟通提纲",
  "把模糊需求转成报价范围和交付清单"
];

const projectFlow = [
  ["需求拆解", "识别客户场景、数据和决策人"],
  ["AI 方案", "形成客户能听懂的试点路径"],
  ["演示材料", "准备 Demo、PPT 和沟通话术"],
  ["试点交付", "把需求落成可验收成果"]
];

const projectTypes = [
  "AI 咨询培训",
  "企业知识库",
  "销售方案助手",
  "会议纪要跟进",
  "智能体定制",
  "业务 Demo 原型",
  "市场内容工作流",
  "私有化部署",
  "API 对接",
  "SOP 流程优化"
];

const capabilityRows = [
  ["Agent", "补齐员工专业能力", "让销售、市场、运营和管理者调用智能体完成方案、分析、报价和内容生产。"],
  ["Skill", "把企业 SOP 变成流程", "把销售、会议、客服、培训和报价流程整理成可执行、可复用的 AI Skill。"],
  ["Data", "把企业资料变成资产", "把产品手册、历史方案、会议纪要和客户资料整理成可调用、可持续更新的数据资产。"]
];

export const DemandBoard = memo(function DemandBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % demandCases.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="sem-bento-card sem-bento-demand" aria-label="客户需求拆解看板">
      <div className="sem-card-topline">
        <span>客户需求池</span>
        <strong>今日 8 条待判断</strong>
      </div>
      <ul className="sem-demand-list">
        {demandCases.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <li className={isActive ? "is-active" : ""} key={item.title}>
              <span>{item.tag}</span>
              <strong>{item.title}</strong>
              <p>{item.meta}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
});

export const PromptBoard = memo(function PromptBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % prompts.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="sem-bento-card sem-bento-prompt" aria-label="AI 方案输入台">
      <div className="sem-card-topline">
        <span>售前 Copilot</span>
        <strong>Enter 生成</strong>
      </div>
      <div className="sem-prompt-box">
        <p>{prompts[activeIndex]}<span className="sem-cursor" /></p>
      </div>
      <div className="sem-prompt-actions">
        <span>试点路径</span>
        <span>报价清单</span>
        <span>交付边界</span>
      </div>
    </article>
  );
});

export const FlowBoard = memo(function FlowBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projectFlow.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="sem-bento-card sem-bento-flow" aria-label="项目推进状态">
      <div className="sem-card-topline">
        <span>项目推进</span>
        <strong>进行中</strong>
      </div>
      <div className="sem-flow-lines">
        {projectFlow.map((item, index) => (
          <div className={index === activeIndex ? "is-active" : ""} key={item[0]}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item[0]}</strong>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>
    </article>
  );
});

export const ProjectStream = memo(function ProjectStream() {
  const items = [...projectTypes, ...projectTypes];

  return (
    <article className="sem-bento-card sem-bento-stream" aria-label="可包装项目类型">
      <div className="sem-card-topline">
        <span>可包装项目</span>
        <strong>从小场景开始</strong>
      </div>
      <div className="sem-chip-stream" aria-hidden="true">
        <div>
          {items.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
});

export const CapabilityBoard = memo(function CapabilityBoard() {
  return (
    <article className="sem-bento-card sem-bento-capability" aria-label="Agent Skill Data 能力底座">
      <div className="sem-card-topline">
        <span>响指 AI 底座</span>
        <strong>Agent + Skill + Data</strong>
      </div>
      <div className="sem-capability-stack">
        {capabilityRows.map((row) => (
          <div key={row[0]}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </div>
        ))}
      </div>
    </article>
  );
});

export function SemBentoGrid() {
  return (
    <div className="sem-bento-grid">
      <div className="sem-bento-item sem-bento-wide">
        <DemandBoard />
        <p>把客户一句“想做 AI”，拆成可以沟通、可以报价、可以推进的试点需求。</p>
      </div>
      <div className="sem-bento-item">
        <PromptBoard />
        <p>合作方拿到的不只是账号，而是售前沟通、方案包装和交付边界。</p>
      </div>
      <div className="sem-bento-item">
        <FlowBoard />
        <p>从需求判断到试点交付，形成一条清晰的企业 AI 项目路径。</p>
      </div>
      <div className="sem-bento-item sem-bento-wide">
        <ProjectStream />
        <p>先从明确的小场景切入，让客户看到结果，再逐步扩展到智能体和部署。</p>
      </div>
      <div className="sem-bento-item sem-bento-full">
        <CapabilityBoard />
        <p>响指把平台、方案、售前和交付能力打包给合作方，帮助客户需求真正落地。</p>
      </div>
    </div>
  );
}
