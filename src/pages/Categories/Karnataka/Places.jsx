import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/places/hero.jpg";

import ancientImg from "../../../assets/states/karnataka/categories/places/coorg.avif";
import sacredImg from "../../../assets/states/karnataka/categories/places/badami.jpg";
import heritageImg from "../../../assets/states/karnataka/categories/places/hampi.jpg";
import hillImg from "../../../assets/states/karnataka/categories/places/murudeshwar.jpg";
import modernImg from "../../../assets/states/karnataka/categories/places/dandeli.jpg";

import { items, gallery } from "../../../data/karnataka/places";

function Places() {
  const timeline = [
    {
      year: "Ancient Karnataka",
      title: "Nature's First Landmarks",
      description:
        "Long before great cities emerged, Karnataka's rivers, caves, forests and hills became sacred landscapes for early communities. These natural wonders shaped the state's earliest settlements and places of worship.",
      image: ancientImg,
      location: "Western Ghats • Deccan Plateau",
    },
    {
      year: "Early Medieval Era",
      title: "The Rise of Sacred Sites",
      description:
        "Temple towns, cave sanctuaries and pilgrimage centres flourished across Karnataka, transforming places like Badami, Pattadakal and Shravanabelagola into enduring spiritual and architectural landmarks.",
      image: sacredImg,
      location: "Badami • Pattadakal • Shravanabelagola",
    },
    {
      year: "Medieval Karnataka",
      title: "Cities of Stone & Heritage",
      description:
        "Magnificent temple complexes, bustling markets and royal capitals reshaped the landscape, with Hampi emerging as one of the world's greatest medieval cities and a lasting symbol of Karnataka's heritage.",
      image: heritageImg,
      location: "Hampi",
    },
    {
      year: "19th - 20th Century",
      title: "Hill Stations & Heritage Cities",
      description:
        "The growth of Mysuru, Bengaluru and the coffee estates of Coorg and Chikkamagaluru introduced elegant palaces, botanical gardens, hill stations and scenic retreats that expanded Karnataka's tourism landscape.",
      image: hillImg,
      location: "Mysuru • Coorg • Chikkamagaluru • Bengaluru",
    },
    {
      year: "Present Day",
      title: "A World of Experiences",
      description:
        "Today, Karnataka brings together UNESCO World Heritage Sites, wildlife reserves, waterfalls, beaches, mountains, vibrant cities and living cultural destinations, making it one of India's most diverse travel experiences.",
      image: modernImg,
      location: "Across Karnataka",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Places to Visit in Karnataka"
        subtitle="Ancient Heritage, Wild Landscapes & Timeless Wonders"
        description="From the timeless ruins of Hampi to the misty Western Ghats and the golden shores of the Arabian Sea, Karnataka offers an unforgettable journey through history, nature and culture."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Karnataka's Landmarks"
        text1="Karnataka rewards curiosity like few places in India. Ancient temple towns, UNESCO World Heritage Sites, mist-covered coffee estates, roaring waterfalls, sacred hills and untouched beaches coexist within a single state."
        text2="Whether exploring forgotten monuments, trekking through the Western Ghats, wandering vibrant heritage cities or relaxing along the Arabian Sea, every destination reveals another chapter of Karnataka's remarkable story."
      />

      <CategoryTimeline
        title="The Evolution of Karnataka's Landmarks"
        events={timeline}
      />

      <ItemGrid
        title="Must-Visit Destinations"
        items={items}
      />

      <Gallery
        tag="DESTINATION SHOWCASE"
        title="Beyond the Must-Visit Places"
        description="Beyond its iconic landmarks, Karnataka is home to hidden temples, ancient forts, charming heritage towns, pristine beaches, dense forests, misty hill stations, spectacular waterfalls and countless offbeat destinations waiting to be explored."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;