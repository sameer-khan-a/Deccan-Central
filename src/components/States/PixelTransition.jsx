import { useState, useEffect, useRef } from "react";
import "./PixelTransition.css";

function PixelTransition({
  firstContent,
  secondContent,
  mobileOverlay = null,
  aspectRatio = "100%",
  className = "",
  style = {}
}) {
  const [active, setActive] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const cardRef = useRef(null);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (!isTouchDevice || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowTitle(entry.isIntersecting);
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
      className={`pixelated-image-card ${className} ${
        !isTouchDevice && active ? "active" : ""
      }`}
      style={style}
      onMouseEnter={
        !isTouchDevice ? () => setActive(true) : undefined
      }
      onMouseLeave={
        !isTouchDevice ? () => setActive(false) : undefined
      }
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="pixelated-image-card__default">
        {firstContent}
      </div>

      {!isTouchDevice && (
        <div className="pixelated-image-card__active">
          {secondContent}
        </div>
      )}

      {isTouchDevice && mobileOverlay && (
        <div
          className={`pixelated-image-card__mobile-title ${
            showTitle ? "active" : ""
          }`}
        >
          {mobileOverlay}
        </div>
      )}
    </div>
  );
}

export default PixelTransition;
