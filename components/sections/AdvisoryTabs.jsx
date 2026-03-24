"use client";

import { useState } from "react";

export default function AdvisoryTabs({ areas }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section className="section shell advisory-redesign">
      <div className="advisory-redesign-head">
        <p className="eyebrow">Advisory studio</p>
        <h2>Navigate advisory capabilities like a product console</h2>
        <p>
          Switch between domains to preview the outcomes and delivery focus for each advisory
          stream.
        </p>
      </div>

      <div className="advisory-redesign-shell">
        <div className="advisory-redesign-list" role="tablist" aria-label="Advisory areas">
          {areas.map((area, index) => (
            <button
              key={area.title}
              className={
                index === activeIndex ? "advisory-redesign-tab active" : "advisory-redesign-tab"
              }
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              type="button"
            >
              <span>0{index + 1}</span>
              <strong>{area.title}</strong>
            </button>
          ))}
        </div>

        <article className="advisory-redesign-panel" role="tabpanel">
          <div className="advisory-redesign-copy">
            <p className="eyebrow">Current focus</p>
            <h3>{activeArea.title}</h3>
            <p>{activeArea.description}</p>
            <div className="advisory-redesign-meta">
              <span>Sector intelligence</span>
              <span>Execution frameworks</span>
              <span>Delivery partnership</span>
            </div>
          </div>

          <div className="advisory-redesign-visual">
            <img src={activeArea.image} alt={activeArea.title} />
          </div>
        </article>
      </div>
    </section>
  );
}
