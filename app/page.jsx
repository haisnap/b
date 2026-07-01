export const metadata = {
  title: "跳转到银行行业方案",
  alternates: {
    canonical: "/bank/"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function HomePage() {
  return (
    <main className="redirect-page">
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/bank/');"
        }}
      />
      <p>
        <a href="/bank/">进入银行行业方案页面</a>
      </p>
    </main>
  );
}
