import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import heroImg from "../../../assets/states/telangana/categories/architecture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/telangana/categories/kingdoms/vishnukundin.avif";
import timeline2 from "../../../assets/states/telangana/categories/architecture/ramappa-temple.avif";
import timeline3 from "../../../assets/states/telangana/categories/architecture/golconda-fort.jpeg";
import timeline4 from "../../../assets/states/telangana/categories/architecture/chowmahalla-palace.jpg";
import timeline5 from "../../../assets/states/telangana/categories/architecture/charminar.webp";

import { items, gallery } from "../../../data/telangana/architecture";

function Architecture() {
  const timeline = [
    {
      year: "230 BCE-624 CE",
      title: "Early Foundations",
      description:
        "Early settlements and flourishing Buddhist centres developed brick temples, monasteries and stupas that established the foundations of Telangana's architectural heritage. These enduring monuments reflected the region's growing religious, cultural and artistic significance.",
      image: timeline1,
      location: "Kotilingala • Dhulikatta • Phanigiri",
    },
    {
      year: "1100-1323 CE",
      title: "The Age of Temple Architecture",
      description:
        "Master craftsmen perfected intricately carved temples, elegant pillars, star-shaped platforms and monumental gateways across the Kakatiya realm. Their extraordinary engineering and sculptural excellence produced some of the finest sacred architecture in the Deccan.",
      image: timeline2,
      location: "Ramappa • Hanamkonda • Warangal",
    },
    {
      year: "1518-1687 CE",
      title: "Forts & Monumental Cities",
      description:
        "The Qutb Shahis transformed Telangana through magnificent hill forts, royal gateways, mosques and royal tombs. Their architecture blended Persian influences with local craftsmanship, creating a distinctive and enduring Deccan architectural tradition.",
      image: timeline3,
      location: "Golconda • Hyderabad",
    },
    {
      year: "1724-1948 CE",
      title: "Palaces & Civic Grandeur",
      description:
        "The Asaf Jahi Nizams commissioned magnificent palaces, public institutions, markets and administrative buildings that reshaped Hyderabad. Their architectural vision blended Indo-Islamic, European and local traditions into one of India's finest urban landscapes.",
      image: timeline4,
      location: "Hyderabad",
    },
    {
      year: "1948-Present",
      title: "A Living Architectural Heritage",
      description:
        "Today, heritage conservation, UNESCO recognition and restoration initiatives continue to protect Telangana's remarkable monuments. These ongoing efforts preserve centuries of architectural achievement while celebrating the state's rich cultural and historical legacy.",
      image: timeline5,
      location: "Ramappa • Charminar • Warangal",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Architecture of Telangana"
        subtitle="Stone, Forts & Royal Splendour"
        description="From ancient Buddhist monuments and intricately carved temples to mighty forts, royal palaces and Hyderabad's iconic skyline, Telangana preserves one of the Deccan's richest architectural legacies spanning more than two thousand years."
        image={heroImg}
      />

      <CategoryOverview
        heading="An Architectural Journey Through Telangana"
        text1="For more than two thousand years, Telangana has witnessed the rise of temples, forts, palaces and monumental cities, each reflecting remarkable advances in engineering, artistic expression and the cultural traditions of successive dynasties."
        text2="Today, its architectural landscape blends sacred monuments, military strongholds, royal residences and historic urban landmarks into a remarkable heritage that continues to define Telangana's identity and its enduring place within the Deccan."
      />

      <CategoryTimeline
        title="The Evolution of Telangana's Architecture"
        events={timeline}
      />

      <ItemGrid
        title="Architectural Icons"
        items={items}
      />

      <Gallery
        tag="ARCHITECTURAL SHOWCASE"
        title="Beyond the Landmarks"
        description="Beyond its iconic monuments, Telangana's architectural heritage thrives through intricately carved temples, ancient gateways, imposing forts, royal palaces, historic mosques, elegant stepwells and beautifully preserved heritage precincts across the state."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;