import { useState } from "react";
import "./PixelTransition.css";

function PixelTransition({
  firstContent,
  secondContent,
  aspectRatio = "100%",
  className = "",
  style = {}
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`pixelated-image-card ${className} ${active ? "active" : ""}`}
      style={style}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive((prev) => !prev)}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="pixelated-image-card__default">
        {firstContent}
      </div>

      <div className="pixelated-image-card__active">
        {secondContent}
      </div>
    </div>
  );
}

export default PixelTransition;
