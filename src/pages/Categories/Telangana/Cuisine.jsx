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
      year: "Before 900 CE",
      title: "The Roots of Telangana Cuisine",
      description:
        "Early communities built their diets around millets, rice, pulses, wild greens and seasonal produce. These wholesome ingredients established the foundations of Telangana's culinary heritage while shaping everyday food traditions that continue to shape everyday life.",
      image: timeline1,
      location: "Across Telangana",
    },
    {
      year: "900-1500 CE",
      title: "The Rise of Regional Flavours",
      description:
        "As agriculture flourished, native ingredients such as sesame, tamarind, black pepper and lentils shaped Telangana's bold regional flavours. These enduring culinary traditions reflected local farming practices while strengthening the state's distinctive food identity.",
      image: timeline2,
      location: "Karimnagar • Nalgonda • Warangal",
    },
    {
      year: "1518-1700 CE",
      title: "A Fusion of Culinary Traditions",
      description:
        "Trade, migration and cultural exchange introduced aromatic spices, slow-cooking techniques and fragrant rice dishes across Telangana. These influences blended seamlessly with local recipes, creating the distinctive Deccan cuisine celebrated throughout the region today.",
      image: timeline3,
      location: "Hyderabad • Golconda",
    },
    {
      year: "1724-1948 CE",
      title: "From Village Staples to Global Fame",
      description:
        "Traditional village meals evolved alongside celebrated Hyderabadi delicacies, creating a cuisine admired for its hearty flavours, festive sweets and remarkable diversity. Signature dishes such as Hyderabadi Biryani gained recognition far beyond the Deccan.",
      image: timeline4,
      location: "Hyderabad",
    },
    {
      year: "1948-Present",
      title: "A Living Culinary Heritage",
      description:
        "Today, Telangana celebrates its remarkable culinary heritage through bustling street food markets, family kitchens, fine dining restaurants and cherished festive traditions. While embracing modern tastes, the state's authentic regional flavours continue to thrive.",
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
        description="From wholesome millet-based meals and fiery village recipes to Hyderabad's world-renowned delicacies, Telangana's cuisine reflects centuries of flavour, tradition, innovation and the rich cultural heritage of the Deccan."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Through Telangana"
        text1="Rooted in fertile farmlands and enriched by centuries of cultural exchange, Telangana's cuisine blends rustic village recipes, aromatic spices and time-honoured cooking traditions that continue to define the region's distinctive culinary identity."
        text2="Whether enjoying hearty millet-based meals, festive sweets, iconic Hyderabadi delicacies or vibrant street food, every dish reflects Telangana's rich history, regional diversity and enduring passion for exceptional cuisine."
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
        description="Beyond its iconic recipes, Telangana's culinary heritage thrives through traditional village meals, festive delicacies, aromatic biryanis, bustling street food, handcrafted sweets and cherished family recipes passed down through generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;