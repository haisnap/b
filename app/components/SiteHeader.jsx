export default function SiteHeader({
  ariaLabel = "页面导航",
  brandHref = "/",
  navItems = [],
  ctaHref = "#contact",
  ctaLabel = "预约沟通",
  minimal = false
}) {
  return (
    <header className={`site-header${minimal ? " site-header-minimal" : ""}`} aria-label={ariaLabel}>
      <a className="brand" href={brandHref} aria-label="响指 AI 首页">
        <img src="/assets/haisnap-header-logo.webp" alt="HaiSnap" width="120" height="60" fetchPriority="high" />
      </a>
      {navItems.length > 0 ? (
        <nav className="site-nav" aria-label={ariaLabel}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
      <a className="header-cta" href={ctaHref}>
        {ctaLabel}
      </a>
    </header>
  );
}
