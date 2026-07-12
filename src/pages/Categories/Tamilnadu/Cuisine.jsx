import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/tamil-nadu/categories/cuisine/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/tamil-nadu/categories/cuisine/ven-pongal.webp";
import timeline2 from "../../../assets/states/tamil-nadu/categories/cuisine/dosa.webp";
import timeline3 from "../../../assets/states/tamil-nadu/categories/cuisine/chettinad-chicken.jpg";
import timeline4 from "../../../assets/states/tamil-nadu/categories/cuisine/filter-coffee.jpg";
import timeline5 from "../../../assets/states/tamil-nadu/categories/cuisine/jigarthanda.jpg";

import { items, gallery } from "../../../data/tamilnadu/cuisine";

function Cuisine() {

  const timeline = [
    {
      year: "Ancient Origins",
      title: "The Foundations of Tamil Cuisine",
      description:
        "Early Tamil communities built their cuisine around rice, millets, lentils, sesame, coconut and native spices. Agriculture along fertile river valleys created one of India's oldest continuous food traditions.",
      image: timeline1,
      location: "Kaveri Delta • Across Tamil Nadu",
    },
    {
      year: "Temple Traditions",
      title: "Sacred Food & Community Feasts",
      description:
        "Temple kitchens preserved time-honoured recipes through prasadam, festive meals and banana-leaf feasts, shaping everyday cooking and strengthening Tamil culinary traditions.",
      image: timeline2,
      location: "Thanjavur • Srirangam • Madurai",
    },
    {
      year: "Regional Flavours",
      title: "The Rise of Distinctive Regional Cuisines",
      description:
        "Regions across Tamil Nadu developed their own culinary identities, from the bold spices of Chettinad and Kongunadu to the seafood traditions of the Coromandel Coast.",
      image: timeline3,
      location: "Chettinad • Kongunadu • Nagapattinam",
    },
    {
      year: "Coffee Houses & Street Food",
      title: "Everyday Tamil Classics",
      description:
        "Filter coffee, crispy dosas, fluffy idlis, flaky parottas and bustling tiffin centres became beloved symbols of Tamil Nadu's vibrant food culture.",
      image: timeline4,
      location: "Chennai • Coimbatore • Madurai",
    },
    {
      year: "Present Day",
      title: "A Global Culinary Legacy",
      description:
        "Today, Tamil cuisine is celebrated worldwide for its balance of flavour, tradition and nutrition, while preserving centuries-old family recipes, festive dishes and regional specialities.",
      image: timeline5,
      location: "Across Tamil Nadu",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Cuisine of Tamil Nadu"
        subtitle="The Flavours of an Ancient Civilization"
        description="From timeless temple cuisine and traditional banana-leaf feasts to fiery Chettinad recipes, iconic breakfasts and world-famous filter coffee, Tamil Nadu offers one of India's richest culinary traditions."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Through Tamil Nadu"
        text1="For thousands of years, Tamil Nadu's cuisine has been shaped by fertile farmlands, sacred temple traditions, regional diversity and generations of culinary expertise. Every meal reflects a remarkable balance of flavour, nutrition and heritage."
        text2="Whether enjoying a crisp dosa, fragrant Chettinad curry, comforting Ven Pongal or a refreshing Jigarthanda, every dish celebrates the enduring spirit of Tamil culture and hospitality."
      />

      <CategoryTimeline
        title="The Evolution of Tamil Cuisine"
        events={timeline}
      />

      <ItemGrid
        title="Signature Dishes"
        items={items}
      />

      <Gallery
        tag="CULINARY SHOWCASE"
        title="Beyond the Signature Dishes"
        description="Beyond its iconic recipes, Tamil Nadu's culinary heritage comes alive through temple offerings, comforting breakfasts, aromatic curries, bustling street food, traditional sweets, filter coffee and regional delicacies that have delighted generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;