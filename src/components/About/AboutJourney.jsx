import "./AboutJourney.css";

function AboutJourney({
  heading,
  steps,
}) {
  return (
    <section className="about-journey">
      <div className="journey-container">

        <div className="journey-header">

          <span className="section-tag">
            YOUR JOURNEY
          </span>

          <h2>{heading}</h2>

          <div className="section-divider"></div>

          <p>
            Every great adventure begins with a single question.
            Follow the path and uncover the stories hidden across
            the Deccan.
          </p>

        </div>

        <div className="journey-timeline">

          {steps.map((step, index) => (
            <div
              className="journey-step"
              key={index}
            >

              <div className="journey-marker">
                <span>{index + 1}</span>
              </div>



              <article className="journey-card">

                <span className="journey-count">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </article>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AboutJourney;