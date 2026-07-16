import Navbar from "../components/Navbar";
import StateHero from "../components/States/StateHero";
import InfoSection from "../components/States/InfoSection";
import CategoryGrid from "../components/States/CategoryGrid";
import Footer from "../components/Footer";

import { themes } from "../data/themes";

import heroImg from "../assets/states/karnataka/hero.jpg";

import kingdomsImg from "../assets/categories/karnataka/kingdoms.jpg";
import cultureImg from "../assets/categories/karnataka/culture.jpg";
import foodImg from "../assets/categories/karnataka/food.jpg";
import monumentsImg from "../assets/categories/karnataka/architecture.jpg";
import wildlifeImg from "../assets/categories/karnataka/wildlife.webp";
import placesImg from "../assets/categories/karnataka/places.jpg";

function Karnataka() {

  const theme = themes.karnataka;

  const categories = [
    {
      title: "Kingdoms",
      count: "12 Great Dynasties",
      description:
        "Explore the empires that shaped the history of the Deccan.",
      image: kingdomsImg,
      link: "/karnataka/kingdoms",
    },
    {
      title: "Architectural Heritage",
      count: "180+ Heritage Sites",
      description:
        "UNESCO monuments, temples, forts and magnificent royal palaces.",
      image: monumentsImg,
      link: "/karnataka/architecture",
    },
    {
      title: "Culture",
      count: "35 Living Traditions",
      description:
        "Yakshagana, literature, festivals and Karnataka's enduring folk heritage.",
      image: cultureImg,
      link: "/karnataka/culture",
    },
    {
      title: "Cuisine",
      count: "80+ Signature Dishes",
      description:
        "From Bisi Bele Bath to the rich flavours of the Karavali coast.",
      image: foodImg,
      link: "/karnataka/cuisine",
    },
    {
      title: "Wildlife",
      count: "6 National Parks",
      description:
        "Western Ghats, tigers, elephants and extraordinary biodiversity.",
      image: wildlifeImg,
      link: "/karnataka/wildlife",
    },
    {
      title: "Places",
      count: "250+ Destinations",
      description:
        "Ancient capitals, waterfalls, beaches and breathtaking hill stations.",
      image: placesImg,
      link: "/karnataka/places",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".state-hero" />

      <StateHero
        {...theme}
        title="Karnataka"
        tagline="THE CROWN OF THE DECCAN"
        description="Home to the mighty Vijayanagara Empire, exquisite Hoysala temples, lush Western Ghats and a thriving coastline, Karnataka stands as the cultural and historic heart of the Deccan. Its landscapes weave together royal capitals, timeless traditions and some of India's greatest architectural masterpieces."
        image={heroImg}
      />

      <InfoSection
        {...theme}
        heading="The Heart of the Deccan"
        text1="For more than two thousand years, Karnataka has stood at the center of South India's history. The Kadambas, Chalukyas, Rashtrakutas, Hoysalas and Vijayanagara rulers transformed the region into a powerhouse of architecture, commerce, literature and political influence, leaving behind monuments admired across the world."
        text2="Today, Karnataka blends this extraordinary heritage with thriving cities, biodiverse forests, pristine coastlines and living traditions. From UNESCO World Heritage Sites and sacred temple towns to the wildlife-rich Western Ghats, every region reveals a different chapter in the story of the Deccan."
        stats={[
          { value: 31, label: "Districts" },
          { value: 2, label: "UNESCO Sites" },
          { value: 6, label: "National Parks" },
          { value: 300, suffix: "+", label: "Major Heritage Sites" },
        ]}
      />

      <div id="karnataka-categories">
        <CategoryGrid
          {...theme}
          categories={categories}
        />
      </div>

      <Footer />
    </>
  );
}

export default Karnataka;
