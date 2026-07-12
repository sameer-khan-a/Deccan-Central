import "./CategoryGrid.css";
import { Link } from "react-router-dom";
import PixelTransition from "./PixelTransition";

function CategoryGrid({ categories }) {
  return (
    <section className="category-section">

      <div className="section-header">
        <p className="section-tag">
          EXPLORE
        </p>

        <h2>
          Discover Every Side
        </h2>

        <p>
          Journey through the history, culture, cuisine,
          architecture and natural beauty of the region.
        </p>
      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.link}
            className="category-link"
          >
            <PixelTransition
              className="category-card"
              aspectRatio="135%"
              gridSize={16}
              animationStepDuration={0.22}
              pixelColor="#0b0f19"
              firstContent={
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
              }
              secondContent={
                <div
                  className="category-overlay"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                >
                  <div className="overlay-dark" />

                  <div className="overlay-content">
                    <span>{category.count}</span>

                    <h3>{category.title}</h3>

                    <p>{category.description}</p>
                  </div>
                </div>
              }
            />
          </Link>
        ))}

      </div>

    </section>
  );
}

export default CategoryGrid;