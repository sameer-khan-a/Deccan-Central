import Navbar from "../components/Navbar";
import StateHero from "../components/States/StateHero";
import InfoSection from "../components/States/InfoSection";
import CategoryGrid from "../components/States/CategoryGrid";
import Footer from "../components/Footer";

import { themes } from "../data/themes";

import heroImg from "../assets/states/telangana/hero.jpg";

import kingdomsImg from "../assets/categories/telangana/kingdoms.jpg";
import cultureImg from "../assets/categories/telangana/culture.webp";
import foodImg from "../assets/categories/telangana/food.jpg";
import monumentsImg from "../assets/categories/telangana/architecture.webp";
import wildlifeImg from "../assets/categories/telangana/wildlife.jpg";
import placesImg from "../assets/categories/telangana/places.webp";

function Telangana() {

  const theme = themes.telangana;

  const categories = [
    {
      title: "Kingdoms",
      count: "9 Great Dynasties",
      description:
        "Discover the Satavahanas, Kakatiyas, Bahmanis, Qutb Shahis and the rulers who shaped the Deccan.",
      image: kingdomsImg,
      link: "/telangana/kingdoms",
    },
    {
      title: "Structures",
      count: "170+ Heritage Sites",
      description:
        "Explore magnificent forts, temples, mosques, stepwells and royal palaces spanning centuries.",
      image: monumentsImg,
      link: "/telangana/architecture",
    },
    {
      title: "Culture",
      count: "30 Living Traditions",
      description:
        "Experience Perini, Bonalu, Bathukamma and the vibrant cultural legacy of Telangana.",
      image: cultureImg,
      link: "/telangana/culture",
    },
    {
      title: "Cuisine",
      count: "75+ Signature Dishes",
      description:
        "From Hyderabadi Biryani to the bold, rustic flavours of traditional Telangana cuisine.",
      image: foodImg,
      link: "/telangana/cuisine",
    },
    {
      title: "Wildlife",
      count: "3 National Parks",
      description:
        "Tiger reserves, dry deciduous forests, wetlands and remarkable Deccan biodiversity.",
      image: wildlifeImg,
      link: "/telangana/wildlife",
    },
    {
      title: "Places",
      count: "180+ Destinations",
      description:
        "UNESCO monuments, ancient forts, temple towns, waterfalls and timeless Deccan landscapes.",
      image: placesImg,
      link: "/telangana/places",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".state-hero" />

      <StateHero
        {...theme}
        title="Telangana"
        tagline="THE HEART OF THE DECCAN"
        description="From the legendary Kakatiya strongholds and the grandeur of Hyderabad to the forests of Amrabad and the Godavari basin, Telangana embodies the spirit of the Deccan. Forged by powerful dynasties, Indo-Persian heritage and enduring traditions, it is a land where history and modern ambition thrive together."
        image={heroImg}
      />

      <InfoSection
        {...theme}
        heading="The Crossroads of the Deccan"
        text1="For over two thousand years, Telangana has stood at the crossroads of the Deccan's history. The Satavahanas, Kakatiyas, Bahmanis, Qutb Shahis and the Asaf Jahi Nizams transformed the region into a centre of political power, architecture, commerce and culture. Their legacy lives on through majestic forts, intricately carved temples, grand mosques, royal palaces and one of India's richest urban traditions."
        text2="Beyond Hyderabad lies a landscape of tiger reserves, dense forests, waterfalls, reservoirs and sacred temple towns. From the UNESCO World Heritage-listed Ramappa Temple and the imposing Warangal Fort to the forests of Amrabad and the mighty Godavari River, every corner of Telangana reveals another chapter in the enduring story of the Deccan."
        stats={[
          {
            value: 33,
            label: "Districts",
          },
          {
            value: 1,
            label: "UNESCO World Heritage Site",
          },
          {
            value: 3,
            label: "National Parks",
          },
          {
            value: 500,
            suffix: "+",
            label: "Historic Monuments",
          },
        ]}
      />

      <div id="telangana-categories">
        <CategoryGrid
          {...theme}
          categories={categories}
        />
      </div>

      <Footer />
    </>
  );
}

export default Telangana;
