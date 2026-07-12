import "./AboutHero.css";

function AboutHero({ title, tagline, description, image }) {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="about-hero-overlay" />

      <div className="about-hero-content">

        <span className="about-tag">
          {tagline}
        </span>

        {/* Replace this with React Bits Split Text later */}
        <h1 className="about-title">
          {title}
        </h1>

        <div className="about-divider" />

        <p className="about-description">
          {description}
        </p>

        <div className="about-scroll">

          <span>Scroll to Explore</span>

          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>

        </div>

      </div>

      <div className="about-gradient"></div>

    </section>
  );
}

export default AboutHero;