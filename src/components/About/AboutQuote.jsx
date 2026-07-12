import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDice } from "react-icons/fa";

import TextType from "./TextType";
import searchData from "../../data/searchData";

import "./AboutQuote.css";

function AboutQuote({
  quote,
  buttonText,
}) {
  const quoteRef = useRef(null);

  const [startTyping, setStartTyping] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStartTyping(true);
          }, 250);

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleStartExploring = () => {
    const randomItem =
      searchData[Math.floor(Math.random() * searchData.length)];

    navigate(randomItem.path);
  };

  return (
    <section
      ref={quoteRef}
      className="about-quote"
    >
      <div className="quote-overlay"></div>

      <div className="quote-container">
        <span className="section-tag">
          ONE LAST THOUGHT
        </span>

        <div className="quote-mark">
          "
        </div>

        <h2 className="quote-text">
          {startTyping && (
            <TextType
              text={[quote]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={999999}
              showCursor
              cursorCharacter="_"
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          )}
        </h2>

        <p className="quote-description">
          Every monument, every language, every tradition and every
          forgotten kingdom adds another chapter to the story of the
          Deccan. This is only the beginning.
        </p>

        <button
          className="quote-button"
          onClick={handleStartExploring}
        >
          <FaDice />

          <span>{buttonText}</span>

          <span className="button-arrow">
            →
          </span>
        </button>
      </div>

      <div className="quote-glow"></div>
    </section>
  );
}

export default AboutQuote;