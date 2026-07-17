import { useState, useEffect, useRef } from "react";
import "./ItemCard.css";

function ItemCard({
  title,
  subtitle,
  description,
  image,
  link,
}) {
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
    <article
      ref={cardRef}
      className={`item-card ${active ? "active" : ""}`}
      onMouseEnter={!isTouchDevice ? () => setActive(true) : undefined}
      onMouseLeave={!isTouchDevice ? () => setActive(false) : undefined}
    >
      <div className="item-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="item-content">
        {subtitle && (
          <p className="item-subtitle">
            {subtitle}
          </p>
        )}

        <h3>{title}</h3>

        {description && (
          <p className="item-description">
            {description}
          </p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="item-button"
          >
            Learn More
          </a>
        )}
      </div>
    </article>
  );
}

export default ItemCard;
