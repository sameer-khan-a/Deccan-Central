import "./ContactCTA.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Compass } from "lucide-react";
import { FaDice } from "react-icons/fa";

import TextType from "./TextType";
import searchData from "../../data/searchData";

function ContactCTA() {
  const ctaRef = useRef(null);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleRandomExplore = () => {
    const randomItem =
      searchData[Math.floor(Math.random() * searchData.length)];

    navigate(randomItem.path);
  };

  return (
    <section
      ref={ctaRef}
      className="contact-cta"
    >
      <div className="contact-cta-overlay"></div>

      <div className="contact-cta-content">

        <span className="section-tag">
          JOIN THE JOURNEY
        </span>

        <h2>
          {startTyping && (
            <TextType
              text={[
                "Every Great Discovery Starts With Someone Who Cares."
              ]}
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

        <p>
          The Deccan is filled with untold stories, forgotten monuments,
          breathtaking landscapes, and living traditions. Whether you've
          discovered a hidden gem, spotted an error, or simply want to
          share your passion for South India, we'd love to hear from you.
        </p>

        <div className="contact-cta-buttons">

          <a
            href="#contact-form"
            className="contact-cta-btn"
          >
            <Compass size={18} />
            Start the Conversation
          </a>

          <button
            className="contact-cta-btn secondary"
            onClick={handleRandomExplore}
          >
            <FaDice />
            Explore Something Random
          </button>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;