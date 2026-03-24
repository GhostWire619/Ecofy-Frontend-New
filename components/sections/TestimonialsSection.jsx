export default function TestimonialsSection({ testimonials }) {
  const [spotlight, ...stories] = testimonials;

  return (
    <section className="section testimonial-redesign">
      <div className="shell">
        <div className="testimonial-redesign-head">
          <p className="eyebrow">Client voices</p>
          <h2>Stories from institutions and entrepreneurs using our platforms</h2>
        </div>

        <div className="testimonial-redesign-grid">
          <article className="testimonial-spotlight">
            <p>{spotlight.quote}</p>
            <div className="testimonial-person">
              <img src={spotlight.image} alt={spotlight.name} />
              <div>
                <strong>{spotlight.name}</strong>
                <span>{spotlight.location}</span>
              </div>
            </div>
          </article>

          <div className="testimonial-stack">
            {stories.map((item) => (
              <article key={item.name} className="testimonial-story">
                <p>{item.quote}</p>
                <div className="testimonial-person">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
