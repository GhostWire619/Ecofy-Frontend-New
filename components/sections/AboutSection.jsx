export default function AboutSection({ about }) {
  return (
    <section className="section shell about-grid">
      <div className="about-visual">
        <img src={about.image} alt="Ecofy Solutions leadership" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">About our company</p>
        <h2>{about.title}</h2>
        <p>{about.description}</p>
        <div className="about-panel">
          <h3>{about.platformTitle}</h3>
          <p>{about.platformDescription}</p>
          <a className="button button-secondary" href={about.href}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
