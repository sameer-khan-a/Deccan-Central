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
      year: "3rd BCE - 3rd CE",
      title: "Early Foundations",
      description:
        "Early settlements and Buddhist centres introduced brick structures, monasteries and stupas that laid the foundation for Telangana's architectural traditions.",
      image: timeline1,
      location: "Kotilingala • Dhulikatta • Phanigiri",
    },
    {
      year: "11th - 14th Century",
      title: "The Age of Temple Architecture",
      description:
        "Master craftsmen perfected intricately carved temples, elegant pillars, star-shaped platforms and monumental gateways, producing some of the Deccan's finest sacred architecture.",
      image: timeline2,
      location: "Ramappa • Hanamkonda • Warangal",
    },
    {
      year: "16th - 17th Century",
      title: "Forts & Monumental Cities",
      description:
        "Massive hill forts, royal gateways, mosques and grand tombs transformed Telangana into a centre of Indo-Persian architecture while preserving local Deccan craftsmanship.",
      image: timeline3,
      location: "Golconda • Hyderabad",
    },
    {
      year: "18th - 20th Century",
      title: "Palaces & Civic Grandeur",
      description:
        "Magnificent palaces, administrative buildings, markets and public institutions reshaped Hyderabad into one of India's most architecturally distinguished cities.",
      image: timeline4,
      location: "Hyderabad",
    },
    {
      year: "Present Day",
      title: "A Living Architectural Heritage",
      description:
        "UNESCO recognition, restoration projects and heritage conservation continue to preserve Telangana's remarkable monuments while celebrating centuries of artistic achievement.",
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
        description="From ancient Buddhist sites and intricately carved temples to mighty forts, royal palaces and Hyderabad's iconic skyline, Telangana showcases one of the Deccan's richest architectural journeys."
        image={heroImg}
      />

      <CategoryOverview
        heading="An Architectural Journey Through Telangana"
        text1="For over two thousand years, Telangana has witnessed the rise of temples, forts, palaces and monumental cities, each reflecting changing artistic styles, engineering techniques and cultural influences."
        text2="Today, its architectural landscape blends sacred monuments, military strongholds and royal landmarks into a timeless heritage that continues to define the identity of the Deccan."
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
        description="Beyond its iconic monuments, Telangana's architectural heritage lives through intricately carved temples, ancient gateways, imposing forts, royal palaces, historic mosques, stepwells and beautifully preserved heritage precincts."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;