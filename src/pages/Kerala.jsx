import Navbar from "../components/Navbar";
import StateHero from "../components/States/StateHero";
import InfoSection from "../components/States/InfoSection";
import CategoryGrid from "../components/States/CategoryGrid";
import Footer from "../components/Footer";

import { themes } from "../data/themes";

import heroImg from "../assets/states/kerala/hero.jpg";

import kingdomsImg from "../assets/categories/kerala/kingdoms.avif";
import cultureImg from "../assets/categories/kerala/culture.jpg";
import foodImg from "../assets/categories/kerala/food.jpg";
import monumentsImg from "../assets/categories/kerala/architecture.jpg";
import wildlifeImg from "../assets/categories/kerala/wildlife.jpg";
import placesImg from "../assets/categories/kerala/places.jpg";

function Kerala() {

  const theme = themes.kerala;

  const categories = [
    {
      title: "Kingdoms",
      count: "8 Great Kingdoms",
      description:
        "Explore the legacy of the Cheras, Venad, Kolathunadu, Travancore, Cochin and the rulers who shaped Kerala's history.",
      image: kingdomsImg,
      link: "/kerala/kingdoms",
    },
    {
      title: "Architecture",
      count: "140+ Heritage Sites",
      description:
        "Discover ancient temples, royal palaces, synagogues, churches and remarkable colonial landmarks.",
      image: monumentsImg,
      link: "/kerala/architecture",
    },
    {
      title: "Culture",
      count: "30 Living Traditions",
      description:
        "Experience Kathakali, Theyyam, Mohiniyattam, Kalaripayattu and vibrant cultural festivals.",
      image: cultureImg,
      link: "/kerala/culture",
    },
    {
      title: "Cuisine",
      count: "90+ Signature Dishes",
      description:
        "From seafood delicacies to fragrant curries, coconut-based cuisine and the flavours of the spice coast.",
      image: foodImg,
      link: "/kerala/cuisine",
    },
    {
      title: "Wildlife",
      count: "6 National Parks",
      description:
        "Explore the Western Ghats, tropical rainforests and some of India's richest biodiversity.",
      image: wildlifeImg,
      link: "/kerala/wildlife",
    },
    {
      title: "Places",
      count: "220+ Destinations",
      description:
        "Backwaters, beaches, misty hill stations, historic ports and timeless coastal landscapes.",
      image: placesImg,
      link: "/kerala/places",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".state-hero" />

      <StateHero
        {...theme}
        title="Kerala"
        tagline="GOD'S OWN COUNTRY"
        description="From the ancient spice ports of Muziris and the tranquil backwaters of Alappuzha to the rainforests of the Western Ghats and the Arabian Sea, Kerala is a land shaped by maritime trade, powerful kingdoms and remarkable cultural diversity. Its timeless traditions, breathtaking landscapes and global legacy make it one of India's most extraordinary destinations."
        image={heroImg}
      />

      <InfoSection
        {...theme}
        heading="The Gateway to the Spice Route"
        text1="For more than two thousand years, Kerala has stood at the crossroads of the Indian Ocean world. The Cheras, Venad, Travancore and Cochin transformed the region into a global centre of maritime trade, welcoming merchants from Arabia, China and Europe. Their legacy lives on through magnificent temples, historic churches, ancient synagogues, royal palaces and vibrant port cities."
        text2="Today, Kerala blends serene backwaters, tropical rainforests, mist-covered hill stations and a spectacular coastline with Ayurveda, performing arts and extraordinary wildlife. From Fort Kochi, Bekal and Padmanabhapuram to Munnar, Wayanad and Periyar, every corner of the state reveals another chapter in the remarkable story of India's spice coast."
        stats={[
          {
            value: 14,
            label: "Districts",
          },
          {
            value: 6,
            label: "National Parks",
          },
          {
            value: 18,
            label: "Wildlife Sanctuaries",
          },
          {
            value: 580,
            suffix: " km",
            label: "Coastline",
          },
        ]}
      />

      <div id="kerala-categories">
        <CategoryGrid
          {...theme}
          categories={categories}
        />
      </div>

      <Footer />
    </>
  );
}

export default Kerala;