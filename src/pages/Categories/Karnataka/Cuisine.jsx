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
      year: "300-900 CE",
      title: "The Land of Millets",
      description:
        "Long before royal kitchens flourished, Karnataka's cuisine revolved around ragi, jowar, rice, pulses and native spices. These simple ingredients established a nourishing culinary tradition that continues to shape everyday meals across the state.",
      image: earlyImg,
      location: "Across Karnataka",
    },
    {
      year: "900-1300 CE",
      title: "Temple Kitchens & Sacred Food",
      description:
        "Temple traditions refined vegetarian cuisine through prasadam, festive feasts and community dining. Sacred kitchens preserved treasured recipes while helping shape the renowned Udupi culinary tradition.",
      image: templeImg,
      location: "Udupi • Belur • Halebidu",
    },
    {
      year: "1300-1700 CE",
      title: "Coastal Flavours & Trade",
      description:
        "Maritime trade along the Arabian Sea introduced new ingredients, spices and cooking techniques. Coastal Karnataka blended these influences with local traditions, creating distinctive seafood dishes, coconut-rich curries and vibrant regional flavours.",
      image: coastalImg,
      location: "Mangaluru • Karavali Coast",
    },
    {
      year: "1800-1950 CE",
      title: "The Rise of Iconic Delicacies",
      description:
        "Royal kitchens, bustling markets and changing urban tastes popularised celebrated sweets, snacks and beverages throughout Karnataka. Delicacies such as Mysore Pak and the state's enduring café culture became lasting symbols of regional identity.",
      image: royalImg,
      location: "Mysuru • Bengaluru",
    },
    {
      year: "1950-Present",
      title: "A Culinary Mosaic",
      description:
        "Modern Karnataka celebrates a remarkable blend of traditional recipes and contemporary innovation, from hearty North Karnataka meals and Malnad specialties to Udupi classics, Mangalorean seafood and Bengaluru's thriving cosmopolitan food culture.",
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
        description="From wholesome millet-based meals and legendary Udupi cuisine to coastal seafood, royal Mysore delicacies and aromatic filter coffee, Karnataka's culinary heritage reflects centuries of tradition, diversity and cultural exchange."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Across Karnataka"
        text1="Karnataka's cuisine is as diverse as its landscapes. Coastal districts celebrate seafood and coconut, Malnad embraces forest produce and spices, while North Karnataka is renowned for hearty millet-based dishes, bold flavours and enduring culinary traditions."
        text2="Shaped by agriculture, temple traditions, maritime trade and regional diversity, Karnataka offers one of South India's richest culinary experiences, where every region preserves distinctive recipes, local ingredients and generations of remarkable food heritage."
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
        description="Beyond its iconic recipes, Karnataka's culinary heritage thrives through festive sweets, temple offerings, traditional snacks, wholesome millet-based meals, coastal specialties, vibrant street food and timeless café traditions enjoyed across the state."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;