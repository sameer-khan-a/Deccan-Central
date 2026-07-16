import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactOptions from "../components/Contact/ContactOptions";
import ContactForm from "../components/Contact/ContactForm";
import ContactFAQ from "../components/Contact/ContactFAQ";
import ContactCTA from "../components/Contact/ContactCTA";

function Contact() {
  return (
    <>
      <Navbar heroSelector=".contact-hero" />

      <main className="contact-page">
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactFAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default Contact;
