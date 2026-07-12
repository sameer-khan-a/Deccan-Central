import "./ContactForm.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Globe,
  Clock3,
  Send,
} from "lucide-react";

function ContactForm() {
  useEffect(() => {
    emailjs.init({
      publicKey: "ovSP0Ey4782Et-VHJ",
    });
  }, []);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to your inbox
      await emailjs.send(
        "service_wnyrw1b",
        "template_fjhf8sp",
        form
      );

      /*
      // Uncomment AFTER the first email works
      await emailjs.send(
        "service_wnyrw1b",
        "template_m1qzrma",
        form
      );
      */

      alert("Thank you! Your message has been sent successfully.");

      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      alert(error?.text || error?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-container">

        <div className="contact-form-header">
          <span className="section-tag">
            SEND A MESSAGE
          </span>

          <h2>Let's Start a Conversation</h2>

          <div className="section-divider"></div>

          <p>
            We'd love to hear your thoughts, suggestions, discoveries, or
            collaboration ideas. Fill out the form and we'll get back to you.
          </p>
        </div>

        <div className="contact-wrapper">

          <div className="contact-form-card">

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  required
                />
              </div>

              <button type="submit" disabled={loading}>
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          <div className="contact-info-card">

            <div className="info-item">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <p>sameerkhan2003a@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <Globe size={22} />
              <div>
                <h4>Coverage</h4>
                <p>
                  Karnataka, Telangana, Andhra Pradesh,
                  Tamil Nadu & Kerala
                </p>
              </div>
            </div>

            <div className="info-item">
              <Clock3 size={22} />
              <div>
                <h4>Response Time</h4>
                <p>Usually within 24–48 hours.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;