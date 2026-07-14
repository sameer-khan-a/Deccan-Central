import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/tamil-nadu/categories/kingdoms/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/tamil-nadu/categories/kingdoms/chera.webp";
import timeline2 from "../../../assets/states/tamil-nadu/categories/kingdoms/pallava.jpg";
import timeline3 from "../../../assets/states/tamil-nadu/categories/kingdoms/chola.webp";
import timeline4 from "../../../assets/states/tamil-nadu/categories/kingdoms/pandya.webp";
import timeline5 from "../../../assets/states/tamil-nadu/categories/kingdoms/madurai-nayak.jpg";

import { items, gallery } from "../../../data/tamilnadu/kingdoms";

function Kingdoms() {

  const timeline = [
    {
      year: "300 BCE-300 CE",
      title: "The Sangam Kingdoms",
      description:
        "The Cheras, Cholas and Pandyas emerged as the great Tamil powers, nurturing Sangam literature, maritime trade and one of the world's oldest continuous cultural traditions.",
      image: timeline1,
      location: "Madurai • Karur • Korkai",
    },
    {
      year: "275-897 CE",
      title: "The Pallava Dynasty",
      description:
        "From Kanchipuram, the Pallavas transformed the Tamil region through advances in administration, learning and pioneering Dravidian temple architecture in South India.",
      image: timeline2,
      location: "Kanchipuram • Mahabalipuram",
    },
    {
      year: "848-1279 CE",
      title: "The Imperial Cholas",
      description:
        "The Cholas built one of Asia's greatest maritime empires, commanding trade across the Indian Ocean while creating monumental temples and strengthening Tamil culture.",
      image: timeline3,
      location: "Thanjavur • Gangaikonda Cholapuram",
    },
    {
      year: "1216-1345 CE",
      title: "The Later Pandyas",
      description:
        "The Pandyas restored Madurai as a flourishing centre of trade, literature and temple patronage, extending Tamil influence across the Indian Ocean.",
      image: timeline4,
      location: "Madurai • Rameswaram",
    },
    {
      year: "1529-1736 CE",
      title: "The Nayaks of Madurai",
      description:
        "Following the decline of the Vijayanagara Empire, the Nayaks enriched Tamil Nadu with magnificent temple expansions, grand palaces, vibrant festivals and enduring artistic traditions.",
      image: timeline5,
      location: "Madurai • Tiruchirappalli • Thanjavur",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Kingdoms of Tamil Nadu"
        subtitle="The Dynasties That Built Tamil Civilization"
        description="From the legendary Sangam kingdoms and the visionary Pallavas to the mighty Cholas, powerful Pandyas and artistic Nayaks, Tamil Nadu has been the heartland of kingdoms whose influence reached across the Indian Ocean."
        image={heroImg}
      />

      <CategoryOverview
        heading="More Than Two Thousand Years of Royal Legacy"
        text1="For over two millennia, Tamil Nadu has been home to some of India's most influential kingdoms. These dynasties shaped the region through maritime trade, monumental architecture, literature, administration and enduring cultural traditions."
        text2="Their legacy lives on through majestic temple cities, ancient capitals, royal inscriptions and artistic achievements that continue to define Tamil identity and one of the world's oldest living cultural traditions."
      />

      <CategoryTimeline
        title="The Rise of Tamil Kingdoms"
        events={timeline}
      />

      <ItemGrid
        title="The Great Tamil Dynasties"
        items={items}
      />

      <Gallery
        tag="ROYAL LEGACY"
        title="Beyond the Great Empires"
        description="Beyond its best-known dynasties, Tamil Nadu's royal heritage includes influential regional kingdoms, scholarly courts, temple patrons and later rulers whose contributions shaped the state's political, cultural and architectural landscape for centuries."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;