import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./CategoryTimeline.css";

export default function CategoryTimeline({ title, events = [] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight")
        setActive((p) => Math.min(p + 1, events.length - 1));
      if (e.key === "ArrowLeft")
        setActive((p) => Math.max(p - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [events.length]);

  if (!events.length) return null;

  const current = events[active];
  const progress =
    events.length > 1 ? (active / (events.length - 1)) * 100 : 0;

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <span className="timeline-tag">HISTORICAL TIMELINE</span>
        <h2>{title}</h2>
      </div>

      <div className="timeline-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="timeline-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
          >
            <div className="timeline-left">
              {current.image && (
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="timeline-image"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                />
              )}
            </div>

            <div className="timeline-right">
              <span className="timeline-year">{current.year}</span>
              <h3>{current.title}</h3>
              <p>{current.description}</p>

              {current.location && (
                <div className="timeline-location">
                  <strong>Location:</strong>
                  <span>{current.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="timeline-filmstrip">
          <input
            className="timeline-slider"
            type="range"
            min="0"
            max={events.length - 1}
            step="1"
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right,#d4a017 ${progress}%,#2b3546 ${progress}%)`,
            }}
          />

          <div className="timeline-years">
            {events.map((event, index) => (
              <button
                key={index}
                className={`timeline-year-label ${
                  active === index ? "active" : ""
                }`}
                onClick={() => setActive(index)}
              >
                {event.year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}