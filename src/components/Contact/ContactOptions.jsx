import "./ContactOptions.css";
import {
  Mail,
  MapPinned,
  Handshake,
} from "lucide-react";

const options = [
  {
    icon: <Mail size={30} />,
    title: "General Enquiries",
    description:
      "Have a question about DeccanCentral or need assistance? We're always happy to help.",
  },
  {
    icon: <MapPinned size={30} />,
    title: "Suggest a Destination",
    description:
      "Know a hidden fort, temple, trail, village or cultural treasure? Help us uncover more of the Deccan.",
  },
  {
    icon: <Handshake size={30} />,
    title: "Collaborate",
    description:
      "We welcome collaborations with photographers, historians, researchers, creators and tourism organizations.",
  },
];

function ContactOptions() {
  return (
    <section className="contact-options">
      <div className="contact-options-container">

        <div className="contact-options-header">
          <span className="section-tag">
            START HERE
          </span>

          <h2>How Can We Help?</h2>

          <div className="section-divider"></div>

          <p>
            Whether you're sharing a discovery, reporting an issue, or looking
            to collaborate, we're just a message away.
          </p>
        </div>

        <div className="contact-options-grid">
          {options.map((option, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-card-icon">
                {option.icon}
              </div>

              <h3>{option.title}</h3>

              <p>{option.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContactOptions;