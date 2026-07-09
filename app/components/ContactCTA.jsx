export default function ContactCTA({
  id = "contact",
  title,
  description,
  primaryHref,
  primaryLabel = "预约方案沟通",
  secondaryHref = "https://haisnap.ai/zh",
  secondaryLabel = "访问响指主站",
  caption,
  notes = []
}) {
  return (
    <section id={id} className="contact-section" aria-labelledby={`${id}-title`}>
      <div className="container contact-inner">
        <div className="contact-copy">
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{description}</p>
          {notes.length > 0 ? (
            <ul className="contact-notes">
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
          <div className="contact-actions">
            <a className="button button-primary" href={primaryHref || `#${id}-qr`}>
              {primaryLabel}
            </a>
            <a className="button button-secondary" href={secondaryHref}>
              {secondaryLabel}
            </a>
          </div>
        </div>
        <figure id={`${id}-qr`} className="contact-qr">
          <img src="/assets/enterprise-contact.png" alt="响指 AI 企业微信二维码" width="396" height="396" />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
