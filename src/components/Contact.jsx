import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <>
      <Navbar heroSelector=".contact-hero" />

      <main>
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