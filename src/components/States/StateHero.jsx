import "./StateHero.css";
import { ArrowDown } from "lucide-react";

function StateHero({
  title,
  tagline,
  description,
  image,
}) {
  const handleExplore = () => {
    document
      .querySelector(".category-grid")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="state-hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="state-overlay" />

      <div className="state-content">
        <p className="state-tag">{tagline}</p>

        <h1>{title}</h1>

        <p className="state-description">
          {description}
        </p>

        <button
          className="explore-btn"
          onClick={handleExplore}
        >
          <span>Start Exploring</span>

          <ArrowDown className="explore-icon" />
        </button>
      </div>
    </section>
  );
}

export default StateHero;