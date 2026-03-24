export default function Footer({ footer }) {
  return (
    <footer className="footer-redesign">
      <div className="shell footer-redesign-grid">
        <section className="footer-redesign-intro">
          <p className="eyebrow">{footer.kicker}</p>
          <h2>{footer.statement}</h2>
        </section>

        <section className="footer-redesign-column">
          <h3>Navigate</h3>
          <div className="footer-redesign-links">
            {footer.navigateLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="footer-redesign-column">
          <h3>Resources</h3>
          <div className="footer-redesign-links">
            {footer.resourceLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="footer-redesign-column">
          <h3>Connect</h3>
          <div className="footer-redesign-links">
            {footer.connectLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="shell footer-redesign-bottom">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
