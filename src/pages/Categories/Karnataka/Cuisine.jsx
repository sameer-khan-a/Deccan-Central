import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/cuisine/hero.jpg";

import earlyImg from "../../../assets/states/karnataka/categories/cuisine/ragi-mudde.jpg";
import templeImg from "../../../assets/states/karnataka/categories/cuisine/obbattu.jpg";
import coastalImg from "../../../assets/states/karnataka/categories/cuisine/neerdosa.jpg";
import royalImg from "../../../assets/states/karnataka/categories/cuisine/mysorepak.webp";
import modernImg from "../../../assets/states/karnataka/categories/cuisine/filter-coffee.jpg";

import { items, gallery } from "../../../data/karnataka/cuisine";

function Cuisine() {
  const timeline = [
    {
      year: "Ancient Karnataka",
      title: "The Land of Millets",
      description:
        "Long before royal kitchens emerged, Karnataka's cuisine was built around ragi, jowar, rice, pulses and native spices. These humble ingredients formed the foundation of a rich culinary tradition that still thrives today.",
      image: earlyImg,
      location: "Across Karnataka",
    },
    {
      year: "Early Medieval Era",
      title: "Temple Kitchens & Sacred Food",
      description:
        "Temple traditions refined vegetarian cooking through prasadam, festive feasts and community meals. Sacred kitchens helped preserve recipes and inspired celebrated culinary traditions, including the famous Udupi cuisine.",
      image: templeImg,
      location: "Udupi • Belur • Halebidu",
    },
    {
      year: "Medieval Trade Era",
      title: "Coastal Flavours & Global Influences",
      description:
        "Maritime trade along the Arabian Sea introduced new ingredients, spices and cooking techniques. Coastal Karnataka blended these influences with local traditions, creating distinctive seafood dishes and coconut-rich cuisine.",
      image: coastalImg,
      location: "Mangaluru • Karavali Coast",
    },
    {
      year: "Royal & Colonial Era",
      title: "The Rise of Iconic Delicacies",
      description:
        "Royal kitchens, thriving markets and colonial influences popularised celebrated sweets, snacks and beverages. Delicacies such as Mysore Pak and the state's enduring café culture became lasting symbols of Karnataka.",
      image: royalImg,
      location: "Mysuru • Bengaluru",
    },
    {
      year: "Present Day",
      title: "A Culinary Mosaic",
      description:
        "Today, Karnataka's cuisine is a vibrant blend of tradition and innovation, from North Karnataka's hearty millet-based meals and Malnad specialties to Udupi classics, Mangalorean seafood and Bengaluru's cosmopolitan food scene.",
      image: modernImg,
      location: "Across Karnataka",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Cuisine of Karnataka"
        subtitle="Flavours of the Deccan"
        description="From wholesome millet-based meals and legendary Udupi cuisine to coastal seafood, royal Mysore delicacies and aromatic filter coffee, Karnataka's food tells the story of its land, people and centuries of cultural exchange."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Across Karnataka"
        text1="Karnataka's cuisine is as diverse as its landscapes. Coastal districts celebrate seafood and coconut, Malnad embraces forest produce and spices, while North Karnataka is renowned for hearty millet-based dishes and bold flavours."
        text2="Shaped by agriculture, temple traditions, maritime trade and regional diversity, Karnataka offers one of South India's richest culinary experiences, where every region preserves its own distinctive flavours and food heritage."
      />

      <CategoryTimeline
        title="The Evolution of Karnataka's Cuisine"
        events={timeline}
      />

      <ItemGrid
        title="Signature Dishes"
        items={items}
      />

      <Gallery
        tag="CULINARY SHOWCASE"
        title="Beyond the Signature Dishes"
        description="Beyond its iconic recipes, Karnataka's culinary heritage thrives through festive sweets, temple offerings, traditional snacks, wholesome millet-based meals, vibrant street food, coastal specialties and timeless café traditions."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;