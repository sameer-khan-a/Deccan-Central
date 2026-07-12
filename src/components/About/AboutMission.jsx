import "./AboutMission.css";

function AboutMission({
  heading,
  text1,
  text2,
  pillars,
}) {
  return (
    <section className="about-mission">

      <div className="mission-container">

        <div className="mission-header">

          <span className="section-tag">
            WHY DECCAN CENTRAL?
          </span>

          <h2>{heading}</h2>

          <div className="section-divider"></div>

        </div>

        <div className="mission-content">

          <div className="mission-text">

            <p>{text1}</p>

            <p>{text2}</p>

          </div>

          <div className="mission-grid">

            {pillars.map((pillar, index) => (
              <div
                className="mission-card"
                key={index}
              >
                <div className="mission-icon">
                  {pillar.icon}
                </div>

                <h3>{pillar.title}</h3>

                <p>{pillar.description}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMission;