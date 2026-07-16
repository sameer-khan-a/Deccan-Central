import "./StateHero.css";
import { ArrowDown } from "lucide-react";

function StateHero({
  title,
  tagline,
  description,
  image,

  accent = "#d4a017",
  accentLight = "#f9c74f",
  accentDark = "#7a1b1b",

  surface = "#171212",
  surfaceLight = "#241818",

  glow = "212,160,23",
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

        "--accent": accent,
        "--accent-light": accentLight,
        "--accent-dark": accentDark,

        "--surface": surface,
        "--surface-light": surfaceLight,

        "--glow": glow,
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

      
        </button>
      </div>
    </section>
  );
}

export default StateHero;
