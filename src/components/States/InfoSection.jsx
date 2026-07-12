import "./InfoSection.css";
import * as ReactCountUp from "react-countup";

const CountUp = ReactCountUp.default.default;

function InfoSection({
  heading,
  text1,
  text2,
  stats = [],
}) {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-left">
          <p className="info-tag">OVERVIEW</p>

          <h2>{heading}</h2>
        </div>

        <div className="info-right">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <div
            key={item.label}
            className="stat-card"
          >
          <h3 className="stat-number">
  <CountUp
    end={item.value}
    duration={2.5}
    separator=","
    enableScrollSpy
    scrollSpyOnce
  />
  <span className="stat-suffix"> {item.suffix || ""}</span>
</h3>

            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;