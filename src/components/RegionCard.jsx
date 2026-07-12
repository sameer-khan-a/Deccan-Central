import "./RegionCard.css";

function RegionCard({ title, description, image }) {
  return (
    <div
      className="region-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
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