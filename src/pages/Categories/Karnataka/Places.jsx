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
import modernImg from "../../../assets/states/karnataka/categories/places/dandeli.JPG";

import { items, gallery } from "../../../data/karnataka/places";

function Places() {
  const timeline = [
    {
      year: "Before 900 CE",
      title: "Nature's First Landmarks",
      description:
        "Long before great cities emerged, Karnataka's rivers, forests, caves and hills shaped the lives of early communities. These remarkable landscapes inspired early settlements and sacred traditions while laying the foundations for many of the state's earliest settlements.",
      image: ancientImg,
      location: "Western Ghats • Deccan Plateau",
    },
    {
      year: "900-1300 CE",
      title: "The Rise of Sacred Sites",
      description:
        "Temple towns, cave sanctuaries and pilgrimage centres flourished across Karnataka, transforming places like Badami, Pattadakal and Shravanabelagola into enduring landmarks celebrated for their spiritual importance and architectural brilliance.",
      image: sacredImg,
      location: "Badami • Pattadakal • Shravanabelagola",
    },
    {
      year: "1336-1700 CE",
      title: "Cities of Stone & Heritage",
      description:
        "Magnificent temple complexes, thriving markets and royal capitals reshaped Karnataka's landscape during the Vijayanagara era. Hampi emerged as one of the world's greatest cities, leaving behind an extraordinary legacy of history and architecture.",
      image: heritageImg,
      location: "Hampi",
    },
    {
      year: "1800-1950 CE",
      title: "Hill Stations & Heritage Cities",
      description:
        "The growth of Mysuru, Bengaluru and the coffee estates of Coorg and Chikkamagaluru popularised elegant palaces, botanical gardens, scenic hill stations and cultural attractions that transformed Karnataka into a celebrated travel destination.",
      image: hillImg,
      location: "Mysuru • Coorg • Chikkamagaluru • Bengaluru",
    },
    {
      year: "1950-Present",
      title: "A World of Experiences",
      description:
        "Today, Karnataka brings together UNESCO World Heritage Sites, wildlife reserves, waterfalls, beaches, mountains and vibrant cities, offering travellers an extraordinary blend of history, nature, culture and unforgettable experiences throughout the state.",
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
        description="From the timeless ruins of Hampi to the misty Western Ghats and the golden shores of the Arabian Sea, Karnataka offers an unforgettable journey through history, nature, culture and extraordinary landscapes."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Karnataka's Landmarks"
        text1="Karnataka rewards curiosity like few places in India. Ancient temple towns, UNESCO World Heritage Sites, mist-covered coffee estates, roaring waterfalls, sacred hills and untouched beaches together create one of the country's most diverse travel landscapes."
        text2="Whether exploring forgotten monuments, trekking through the Western Ghats, wandering vibrant heritage cities or relaxing beside the Arabian Sea, every destination reveals another chapter in Karnataka's remarkable story and enduring legacy."
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
        description="Beyond its iconic landmarks, Karnataka is home to hidden temples, ancient forts, charming heritage towns, pristine beaches, dense forests, misty hill stations, spectacular waterfalls and countless offbeat destinations waiting to be discovered."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;
