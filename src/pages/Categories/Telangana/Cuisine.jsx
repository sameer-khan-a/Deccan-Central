import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import heroImg from "../../../assets/states/telangana/categories/cuisine/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/telangana/categories/cuisine/jonne-rotte.jpg";
import timeline2 from "../../../assets/states/telangana/categories/cuisine/pachi-pulusu.jpg";
import timeline3 from "../../../assets/states/telangana/categories/cuisine/hyderabadi-biriyani.jpg";
import timeline4 from "../../../assets/states/telangana/categories/cuisine/sarva-pindi.webp";
import timeline5 from "../../../assets/states/telangana/categories/cuisine/haleem.jpg";

import { items, gallery } from "../../../data/telangana/cuisine";

function Cuisine() {
  const timeline = [
    {
      year: "Ancient Origins",
      title: "The Roots of Telangana Cuisine",
      description:
        "Early communities built their diets around millets, rice, pulses, wild greens and seasonal produce. These simple, nourishing ingredients became the foundation of Telangana's enduring food culture.",
      image: timeline1,
      location: "Across Telangana",
    },
    {
      year: "Agrarian Traditions",
      title: "The Rise of Regional Flavours",
      description:
        "As agriculture flourished, native ingredients such as sesame, tamarind, red chillies and lentils shaped the bold, earthy flavours that continue to define Telangana's cuisine.",
      image: timeline2,
      location: "Karimnagar • Nalgonda • Warangal",
    },
    {
      year: "Cultural Exchange",
      title: "A Fusion of Culinary Traditions",
      description:
        "Trade, migration and cultural exchange introduced aromatic spices, slow-cooking techniques and fragrant rice dishes, enriching local recipes while preserving their Deccan character.",
      image: timeline3,
      location: "Hyderabad • Golconda",
    },
    {
      year: "Culinary Icons",
      title: "From Village Staples to Global Fame",
      description:
        "Traditional village meals evolved alongside celebrated Hyderabadi delicacies, creating a cuisine renowned for its hearty flavours, festive sweets and world-famous biryani.",
      image: timeline4,
      location: "Hyderabad",
    },
    {
      year: "Present Day",
      title: "A Living Culinary Heritage",
      description:
        "From bustling street food markets and family kitchens to fine dining restaurants, Telangana continues to celebrate its diverse culinary traditions while embracing new tastes and ideas.",
      image: timeline5,
      location: "Across Telangana",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Cuisine of Telangana"
        subtitle="Bold Flavours of the Deccan"
        description="From wholesome millet-based meals and fiery village recipes to Hyderabad's globally celebrated delicacies, Telangana's cuisine is a vibrant journey through centuries of flavour, tradition and cultural exchange."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Through Telangana"
        text1="Rooted in fertile farmlands and enriched by centuries of cultural exchange, Telangana's cuisine brings together rustic village recipes, aromatic spices and time-honoured cooking traditions that have been passed down through generations."
        text2="Whether it's hearty millet-based meals, festive sweets, iconic Hyderabadi dishes or vibrant street food, every flavour reflects the state's rich heritage and enduring love for food."
      />

      <CategoryTimeline
        title="The Evolution of Telangana's Cuisine"
        events={timeline}
      />

      <ItemGrid
        title="Signature Dishes"
        items={items}
      />

      <Gallery
        tag="CULINARY SHOWCASE"
        title="Beyond the Signature Dishes"
        description="Beyond its iconic recipes, Telangana's culinary heritage shines through traditional village meals, festive delicacies, aromatic biryanis, bustling street food, handcrafted sweets and timeless family recipes that continue to bring communities together."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;