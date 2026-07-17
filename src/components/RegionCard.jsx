import { useState, useEffect, useRef } from "react";
import "./RegionCard.css";

function RegionCard({ title, description, image }) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (!isTouchDevice || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isTouchDevice]);

  return (
    <div
      ref={cardRef}
      className={`region-card ${active ? "active" : ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onMouseEnter={!isTouchDevice ? () => setActive(true) : undefined}
      onMouseLeave={!isTouchDevice ? () => setActive(false) : undefined}
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
