import "./ContactFAQ.css";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Deccan Central?",
    answer:
      "Deccan Central is an independent platform dedicated to exploring the history, culture, architecture, wildlife, food, and travel destinations of South India. Our mission is to preserve, celebrate, and share the stories that make the Deccan truly unique.",
  },
  {
    question: "Which regions does Deccan Central cover?",
    answer:
      "Our primary focus is Karnataka, Telangana, Andhra Pradesh, Tamil Nadu, and Kerala. As the platform continues to grow, we'll expand our collection with more destinations, historical landmarks, cultural traditions, and regional stories from across the Deccan.",
  },
  {
    question: "Can I suggest a place or report incorrect information?",
    answer:
      "Absolutely. Whether you've discovered a hidden fort, temple, trekking trail, local tradition, or noticed an error in our content, we'd love to hear from you. Community contributions help us improve and keep our information as accurate as possible.",
  },
  {
    question: "Can I contribute photographs, articles, or research?",
    answer:
      "Yes. We welcome submissions from photographers, historians, researchers, writers, and passionate explorers. If you own the rights to your work, we'll gladly review it for possible inclusion with appropriate credit.",
  },
  {
    question: "Do you accept collaborations or partnerships?",
    answer:
      "Yes. We're always open to working with photographers, travel creators, tourism organizations, museums, educational institutions, researchers, and brands that share our passion for showcasing South India's rich heritage.",
  },
  {
    question: "Can I use the content from Deccan Central?",
    answer:
      "Our content is intended for personal learning, inspiration, and research. If you'd like to reuse our articles, photographs, or other original content for commercial or public purposes, please contact us first to obtain permission.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "We aim to respond to all genuine enquiries within 24 to 48 hours. During busy periods, responses may take a little longer, but every message is carefully reviewed.",
  },
];

function ContactFAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="contact-faq">
      <div className="contact-faq-container">

        <div className="contact-faq-header">
          <span className="section-tag">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>Questions? We've Got Answers.</h2>

          <div className="section-divider"></div>

          <p>
            Find answers to the most common questions about Deccan Central,
            contributions, collaborations, and how you can be part of preserving
            South India's incredible heritage.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>

                {active === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContactFAQ;