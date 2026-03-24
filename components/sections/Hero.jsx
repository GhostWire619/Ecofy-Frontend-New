export default function Hero({ slides }) {
  const [first, second] = slides;

  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{first.eyebrow}</p>
          <h1>{first.title}</h1>
          <p className="hero-text">{first.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={first.primary.href}>
              {first.primary.label}
            </a>
            <a className="button button-secondary" href={first.secondary.href}>
              {first.secondary.label}
            </a>
          </div>
        </div>
        <div className="hero-visuals">
          <article className="hero-card hero-card-main">
            <img src={first.image} alt={first.title} />
          </article>
          <article className="hero-card hero-card-accent">
            <img src={second.image} alt={second.title} />
            <div>
              <p className="eyebrow">{second.eyebrow}</p>
              <h2>{second.title}</h2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
