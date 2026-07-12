import "./CategoryHero.css";

function CategoryHero({
  title,
  subtitle,
  description,
  image,
}) {
  return (
    <section
      className="category-hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="category-overlay" />

      <div className="category-content">

        <p className="category-tag">
          {subtitle}
        </p>

        <h1>
          {title}
        </h1>

        <p className="category-description">
          {description}
        </p>

      </div>

    </section>
  );
}

export default CategoryHero;