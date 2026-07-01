import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://b.haisnap.com"),
  title: {
    default: "银行智能认知与任务执行平台 | 海新智能 HaiSnap",
    template: "%s | 海新智能 HaiSnap"
  },
  description:
    "海新智能面向银行提供智能认知与任务执行平台，连接行内系统、外部数据和专业经验，支持客户经营、智能尽调、风险合规、运营财资与成果生产，提供 API 接入和私有化部署。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
