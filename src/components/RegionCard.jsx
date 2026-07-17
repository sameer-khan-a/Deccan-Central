import { useState, useEffect, useRef } from "react";
import "./RegionCard.css";

function RegionCard({ title, description, image }) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`region-card ${active ? "active" : ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="region-overlay">

        <div className="region-top">
          <span className="region-badge">
            Region
          </span>
        </div>

        <div className="region-content">
          <h2>{title}</h2>

          <p>{description}</p>

          <div className="region-footer">
            <span className="region-link">
              Explore →
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RegionCard;
