import Navbar from "../components/Navbar";
import StateHero from "../components/States/StateHero";
import InfoSection from "../components/States/InfoSection";
import CategoryGrid from "../components/States/CategoryGrid";
import Footer from "../components/Footer";

import heroImg from "../assets/states/tamil-nadu/hero.jpg";

import kingdomsImg from "../assets/categories/tamilnadu/kingdoms.jpg";
import cultureImg from "../assets/categories/tamilnadu/culture.jpg";
import foodImg from "../assets/categories/tamilnadu/food.jpg";
import monumentsImg from "../assets/categories/tamilnadu/architecture.jpg";
import wildlifeImg from "../assets/categories/tamilnadu/wildlife.jpg";
import placesImg from "../assets/categories/tamilnadu/places.jpg";

function TamilNadu() {
  const categories = [
    {
      title: "Kingdoms",
      count: "10 Great Dynasties",
      description:
        "Discover the Cheras, Cholas, Pandyas, Pallavas and the rulers who forged one of India's greatest civilizations.",
      image: kingdomsImg,
      link: "/tamil-nadu/kingdoms",
    },
    {
      title: "Architecture",
      count: "300+ Heritage Sites",
      description:
        "Towering temples, rock-cut monuments, royal capitals and UNESCO World Heritage masterpieces.",
      image: monumentsImg,
      link: "/tamil-nadu/architecture",
    },
    {
      title: "Culture",
      count: "40 Living Traditions",
      description:
        "Experience Bharatanatyam, Carnatic music, Sangam literature and timeless festivals.",
      image: cultureImg,
      link: "/tamil-nadu/culture",
    },
    {
      title: "Cuisine",
      count: "100+ Signature Dishes",
      description:
        "From Chettinad delicacies to traditional temple cuisine and beloved South Indian classics.",
      image: foodImg,
      link: "/tamil-nadu/cuisine",
    },
    {
      title: "Wildlife",
      count: "5 National Parks",
      description:
        "Tiger reserves, mangrove forests, the Western Ghats and extraordinary biodiversity.",
      image: wildlifeImg,
      link: "/tamil-nadu/wildlife",
    },
    {
      title: "Places",
      count: "260+ Destinations",
      description:
        "Temple cities, hill stations, beaches, heritage towns and breathtaking landscapes.",
      image: placesImg,
      link: "/tamil-nadu/places",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".state-hero" />

      <StateHero
        title="Tamil Nadu"
        tagline="THE LAND OF LIVING TEMPLES"
        description="Home to the magnificent Chola temples, the ancient port of Mahabalipuram, the sacred city of Madurai and the Nilgiri Hills, Tamil Nadu preserves one of the world's oldest living civilizations. Its timeless architecture, classical arts and enduring traditions reflect over two millennia of history, faith and cultural brilliance."
        image={heroImg}
        exploreTarget="#tamilnadu-categories"
      />

      <InfoSection
        heading="The Heart of Tamil Civilization"
        text1="For more than two thousand years, Tamil Nadu has stood as one of India's greatest centres of culture, architecture and learning. The Cheras, Cholas, Pandyas and Pallavas transformed the region into a powerhouse of temple architecture, maritime trade, literature and artistic excellence, leaving behind monuments that continue to inspire the world."
        text2="Today, Tamil Nadu blends magnificent temple cities, UNESCO World Heritage monuments, vibrant festivals, lush hill stations and remarkable wildlife into one extraordinary landscape. From Madurai, Thanjavur and Mahabalipuram to the Nilgiris, Rameswaram and the mangrove forests of Pichavaram, every region tells another chapter in the enduring story of Tamil civilization."
        stats={[
          {
            value: 38,
            label: "Districts",
          },
          {
            value: 5,
            label: "UNESCO World Heritage Sites",
          },
          {
            value: 5,
            label: "National Parks",
          },
          {
            value: 1000,
            suffix: "+",
            label: "Historic Temples",
          },
        ]}
      />

      <div id="tamilnadu-categories">
        <CategoryGrid categories={categories} />
      </div>

      <Footer />
    </>
  );
}

export default TamilNadu;