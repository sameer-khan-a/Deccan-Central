import "./ContactHero.css";
import { Mail, Compass } from "lucide-react";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay"></div>

      <div className="contact-hero-content">
        <span className="contact-tag">
          <Mail size={16} />
          GET IN TOUCH
        </span>

        <h1>
          Every Great Journey
          <br />
          Begins With a Conversation.
        </h1>

        <p>
          Whether you've uncovered a forgotten fort, discovered a hidden gem,
          spotted something we should improve, or simply want to share your love
          for the Deccan, we'd love to hear from you.
        </p>

        <a href="#contact-form" className="contact-hero-btn">
          <Compass size={18} />
          Start the Conversation
        </a>
      </div>

      <div className="contact-scroll">
        <span></span>
      </div>
    </section>
  );
}

export default ContactHero;