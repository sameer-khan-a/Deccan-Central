import "./ItemCard.css";

function ItemCard({
  title,
  subtitle,
  description,
  image,
}) {
  return (
    <article className="item-card">
      <div className="item-image">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="item-content">
        {subtitle && (
          <p className="item-subtitle">
            {subtitle}
          </p>
        )}

        <h3>{title}</h3>

        {description && (
          <p className="item-description">
            {description}
          </p>
        )}

        <button
          type="button"
          className="item-button"
        >
          Learn More
        </button>
      </div>
    </article>
  );
}

export default ItemCard;