import "./ContactForm.css";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function ContactForm() {
  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-container">

        <div className="contact-form-header">
          <span className="section-tag">
            CONTACT
          </span>

          <h2>Get in Touch</h2>

          <div className="section-divider"></div>

          <p>
            Questions, suggestions, historical corrections or collaboration
            enquiries are always welcome. Every contribution helps Deccan
            Central continue documenting and celebrating the history, culture
            and heritage of South India.
          </p>
        </div>

        <div className="contact-wrapper">

          <div className="contact-form-card">

            <div className="contact-message">

              <h3>Contribute to Deccan Central</h3>

              <p>
                Deccan Central is an independent platform dedicated to
                showcasing the history, heritage, architecture, wildlife,
                traditions and remarkable destinations of South India through
                carefully researched and engaging content.
              </p>

              <p>
                We welcome historical corrections, destination
                recommendations, cultural insights, photography contributions,
                travel experiences and partnership enquiries from individuals,
                institutions and organizations who share our passion for
                preserving the stories of the Deccan.
              </p>

            </div>

          </div>

          <div className="contact-info-card">

            <div className="info-item">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <p>contact@deccancentral.com</p>
              </div>
            </div>

            <div className="info-item">
              <Phone size={22} />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={22} />
              <div>
                <h4>Office Address</h4>
                <p>
                  12 Heritage Avenue,
                  MG Road,
                  Bengaluru,
                  Karnataka 560001,
                  India
                </p>
              </div>
            </div>

            <div className="info-item">
              <Clock size={22} />
              <div>
                <h4>Office Hours</h4>
                <p>
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;