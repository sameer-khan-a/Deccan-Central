import Navbar from "../components/Navbar";
import StateHero from "../components/States/StateHero";
import InfoSection from "../components/States/InfoSection";
import CategoryGrid from "../components/States/CategoryGrid";
import Footer from "../components/Footer";

import heroImg from "../assets/states/andhrapradesh/hero.jpg";

import kingdomsImg from "../assets/categories/andhrapradesh/kingdoms.jpg";
import cultureImg from "../assets/categories/andhrapradesh/culture.jpg";
import foodImg from "../assets/categories/andhrapradesh/food.jpg";
import monumentsImg from "../assets/categories/andhrapradesh/architecture.jpg";
import wildlifeImg from "../assets/categories/andhrapradesh/wildlife.webp";
import placesImg from "../assets/categories/andhrapradesh/places.jpg";

function AndhraPradesh() {
  const categories = [
    {
      title: "Kingdoms",
      count: "11 Great Dynasties",
      description:
        "Journey through the Satavahanas, Eastern Chalukyas, Kakatiyas, Vijayanagara and the rulers who shaped Telugu history.",
      image: kingdomsImg,
      link: "/andhra-pradesh/kingdoms",
    },
    {
      title: "Architecture",
      count: "200+ Heritage Sites",
      description:
        "Explore ancient temples, Buddhist monuments, forts, cave complexes and remarkable stone architecture.",
      image: monumentsImg,
      link: "/andhra-pradesh/architecture",
    },
    {
      title: "Culture",
      count: "35 Living Traditions",
      description:
        "Discover Kuchipudi, Telugu literature, festivals and centuries of artistic excellence.",
      image: cultureImg,
      link: "/andhra-pradesh/culture",
    },
    {
      title: "Cuisine",
      count: "90+ Signature Dishes",
      description:
        "From fiery curries and coastal seafood to traditional sweets and regional delicacies.",
      image: foodImg,
      link: "/andhra-pradesh/cuisine",
    },
    {
      title: "Wildlife",
      count: "3 National Parks",
      description:
        "Eastern Ghats, mangrove forests, tiger reserves and extraordinary biodiversity.",
      image: wildlifeImg,
      link: "/andhra-pradesh/wildlife",
    },
    {
      title: "Places",
      count: "230+ Destinations",
      description:
        "Ancient ports, beaches, temple towns, valleys and breathtaking Eastern Ghats landscapes.",
      image: placesImg,
      link: "/andhra-pradesh/places",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".state-hero" />

      <StateHero
        title="Andhra Pradesh"
        tagline="THE LAND OF THE TELUGU LEGACY"
        description="From the sacred hills of Tirupati and the Buddhist heritage of Amaravati to the dramatic Eastern Ghats and the long Bay of Bengal coastline, Andhra Pradesh is the historic heartland of Telugu civilization. Forged by powerful kingdoms, maritime trade and timeless traditions, its landscapes preserve over two millennia of culture, faith and architectural brilliance."
        image={heroImg}
        exploreTarget="#andhra-categories"
      />

      <InfoSection
        heading="The Cradle of Telugu Civilization"
        text1="For more than two thousand years, Andhra Pradesh has stood at the heart of South India's history. The Satavahanas, Eastern Chalukyas, Kakatiyas and Vijayanagara rulers transformed the region into a centre of trade, architecture, literature and religious learning. Their legacy lives on through magnificent temples, ancient Buddhist monuments, prosperous ports and one of India's richest literary traditions."
        text2="Stretching from the Bay of Bengal to the Eastern Ghats, Andhra Pradesh blends sacred pilgrimage sites, fertile river deltas, pristine beaches, lush valleys and remarkable wildlife into one extraordinary landscape. From Amaravati, Nagarjunakonda and Lepakshi to Araku Valley, Gandikota and the mangrove forests of Coringa, every region reveals another chapter in the remarkable story of the Telugu heartland."
        stats={[
          {
            value: 26,
            label: "Districts",
          },
          {
            value: 975,
            suffix: " km",
            label: "Coastline",
          },
          {
            value: 3,
            label: "National Parks",
          },
          {
            value: 250,
            suffix: "+",
            label: "Heritage Sites",
          },
        ]}
      />

      <div id="andhra-categories">
        <CategoryGrid categories={categories} />
      </div>

      <Footer />
    </>
  );
}

export default AndhraPradesh;