export default function ContactSection({ services, contactDetails }) {
  return (
    <section className="section contact-redesign">
      <div className="shell contact-redesign-grid">
        <div className="contact-redesign-panel">
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us where you need support and we will shape the right stack</h2>
          <form className="contact-redesign-form">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Work email" />
            <input type="tel" placeholder="Phone" />
            <select defaultValue={services[0].title}>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Organization" />
            <input type="text" placeholder="Country" />
            <textarea placeholder="Briefly describe your challenge" rows="5" />
            <label className="contact-redesign-checkbox">
              <input type="checkbox" />
              <span>I agree to receive project and product updates.</span>
            </label>
            <button type="button" className="button button-dark">
              Send inquiry
            </button>
          </form>
        </div>

        <aside className="contact-redesign-support">
          <p className="eyebrow">Direct support line</p>
          <h3>Need urgent assistance?</h3>
          <p>{contactDetails.description}</p>
          <a href={`tel:${contactDetails.phoneRaw}`}>{contactDetails.phone}</a>
          <div className="contact-redesign-badges">
            <span>24/7 response</span>
            <span>Regional coordination</span>
            <span>Rapid escalation</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
