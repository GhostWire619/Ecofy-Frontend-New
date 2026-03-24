export default function PillarsSection({ pillars, cta }) {
  return (
    <section className="section pillars-redesign">
      <div className="shell">
        <div className="pillars-redesign-head">
          <p className="eyebrow">Operating principles</p>
          <h2>Three pillars shaping every deployment decision</h2>
          <p>{cta.supportingText}</p>
        </div>

        <div className="pillar-track">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="pillar-track-card">
              <span className="pillar-track-step">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="pillars-redesign-cta">
          <div>
            <p className="eyebrow">Strategic support</p>
            <h3>{cta.title}</h3>
          </div>
          <a className="button button-light" href={cta.href}>
            Talk to specialists
          </a>
        </div>
      </div>
    </section>
  );
}
