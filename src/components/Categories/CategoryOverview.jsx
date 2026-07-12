import "./CategoryOverview.css";

function CategoryOverview({
  heading,
  text1,
  text2,
}) {
  return (
    <section className="category-overview">

      <div className="category-overview-container">

        <div className="overview-left">

          <p className="overview-tag">
            OVERVIEW
          </p>

          <h2>
            {heading}
          </h2>

        </div>

        <div className="overview-right">

          <p>
            {text1}
          </p>

          <p>
            {text2}
          </p>

        </div>

      </div>

    </section>
  );
}

export default CategoryOverview;