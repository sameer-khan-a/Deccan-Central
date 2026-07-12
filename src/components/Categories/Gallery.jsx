import "./Gallery.css";

function Gallery({
  tag = "SHOWCASE",
  title = "Explore the Collection",
  description = "",
  images = [],
}) {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-tag">{tag}</p>

          <h2>{title}</h2>

          {description && (
            <p className="gallery-description">
              {description}
            </p>
          )}
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <article
              className="gallery-card"
              key={`${image.title}-${index}`}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                />
              </div>

              <div className="gallery-overlay">
                {image.category && (
                  <span className="gallery-category">
                    {image.category}
                  </span>
                )}

                <h3>{image.title}</h3>

                {image.description && (
                  <p>{image.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;