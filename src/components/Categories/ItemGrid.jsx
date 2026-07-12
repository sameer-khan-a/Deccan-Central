import "./ItemGrid.css";
import ItemCard from "./ItemCard";

function ItemGrid({
  title = "Explore",
  items = [],
}) {
  return (
    <section className="item-grid-section">

      <div className="section-header">

        <p className="section-tag">
          EXPLORE
        </p>

        <h2>
          {title}
        </h2>

      </div>

      <div className="item-grid">

        {items.map((item, index) => (

          <ItemCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            image={item.image}
          />

        ))}

      </div>

    </section>
  );
}

export default ItemGrid;