"use client";

import { memo, useEffect, useState } from "react";

const workflowSteps = [
  ["理解任务", "识别目标、约束与交付标准"],
  ["调用能力", "组合知识库、Skill、工具与 API"],
  ["执行流程", "按条件分支推进并保留人工确认"],
  ["交付成果", "生成可检查、可追溯的业务结果"]
];

const connectedSources = [
  ["企业知识库", "产品手册 · SOP · 历史方案"],
  ["业务系统", "CRM · ERP · 工单 · OA"],
  ["专业工具", "搜索 · 数据分析 · 文档生成"],
  ["企业 API", "在授权范围内读写业务数据"]
];

const opsStates = [
  ["运行观测", "当前 12 条工作流正常执行"],
  ["效果评测", "3 条结果等待业务人员复核"],
  ["异常处置", "1 个外部接口已自动重试"],
  ["版本管理", "销售方案 Agent 已发布 v2.7"]
];

const skills = [
  "客户调研",
  "销售方案",
  "会议跟进",
  "知识问答",
  "合同审查",
  "客服质检",
  "运营周报",
  "项目复盘"
];

export const WorkflowBoard = memo(function WorkflowBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % workflowSteps.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="agent-demo-card agent-demo-workflow" aria-label="AI Agent 工作流执行示意">
      <div className="agent-demo-topline">
        <span>销售方案 Agent</span>
        <strong>执行中</strong>
      </div>
      <div className="agent-workflow-steps">
        {workflowSteps.map((step, index) => (
          <div className={index === activeIndex ? "is-active" : ""} key={step[0]}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step[0]}</strong>
            <p>{step[1]}</p>
          </div>
        ))}
      </div>
    </article>
  );
});

export const ConnectionBoard = memo(function ConnectionBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % connectedSources.length);
    }, 2700);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="agent-demo-card agent-demo-connections" aria-label="Agent 企业能力连接示意">
      <div className="agent-demo-topline">
        <span>能力连接</span>
        <strong>已授权 24 项</strong>
      </div>
      <div className="agent-connection-list">
        {connectedSources.map((source, index) => (
          <div className={index === activeIndex ? "is-active" : ""} key={source[0]}>
            <span />
            <div>
              <strong>{source[0]}</strong>
              <p>{source[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
});

export const OpsBoard = memo(function OpsBoard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % opsStates.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <article className="agent-demo-card agent-demo-ops" aria-label="AgentOps 运行管理示意">
      <div className="agent-demo-topline">
        <span>AgentOps</span>
        <strong>最近 30 分钟</strong>
      </div>
      <div className="agent-ops-focus">
        <span>{opsStates[activeIndex][0]}</span>
        <strong>{opsStates[activeIndex][1]}</strong>
        <div className="agent-ops-meter" aria-hidden="true">
          <i />
        </div>
      </div>
      <ul>
        <li>输入与输出可追溯</li>
        <li>关键节点保留人工确认</li>
        <li>模型与工作流版本可管理</li>
      </ul>
    </article>
  );
});

export const SkillStream = memo(function SkillStream() {
  const items = [...skills, ...skills];
  return (
    <article className="agent-demo-card agent-demo-skills" aria-label="可复用的 Agent Skill">
      <div className="agent-demo-topline">
        <span>企业 Skill</span>
        <strong>按业务持续沉淀</strong>
      </div>
      <div className="agent-skill-stream" aria-hidden="true">
        <div>
          {items.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
});

export default function AgentWorkflowBento() {
  return (
    <div className="agent-demo-grid">
      <div className="agent-demo-item agent-demo-wide">
        <WorkflowBoard />
        <p>把目标、知识、工具和业务规则编排成一条真正可以运行的 Agent 工作流。</p>
      </div>
      <div className="agent-demo-item">
        <ConnectionBoard />
        <p>在权限范围内连接企业数据与系统，让 Agent 不只回答问题，还能推进任务。</p>
      </div>
      <div className="agent-demo-item">
        <OpsBoard />
        <p>从执行过程到结果质量持续观测，异常、版本和人工复核都有明确入口。</p>
      </div>
      <div className="agent-demo-item agent-demo-wide">
        <SkillStream />
        <p>把优秀员工的方法与 SOP 沉淀为可组合、可复用、可持续迭代的企业 Skill。</p>
      </div>
    </div>
  );
}
