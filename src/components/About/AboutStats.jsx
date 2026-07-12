import "./AboutStats.css";
import * as ReactCountUp from "react-countup";

const CountUp = ReactCountUp.default.default;
function AboutStats({
  heading,
  description,
  stats,
}) {
  return (
    <section className="about-stats">

      <div className="stats-container">

        <div className="stats-header">

          <span className="section-tag">
            THE BIGGER PICTURE
          </span>

          <h2>{heading}</h2>

          <div className="section-divider"></div>

          <p>{description}</p>

        </div>

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <div
              className="stat-card"
              key={index}
            >


              <h3 className="stat-number">
  <CountUp
    end={stat.value}
    duration={2.5}
    separator=","
    enableScrollSpy
    scrollSpyOnce
  />
  <span className="stat-plus">{stat.suffix}</span>
</h3>

              

              <span className="stat-label">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AboutStats;