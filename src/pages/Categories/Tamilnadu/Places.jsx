import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/tamil-nadu/categories/places/hero.webp";

// Timeline Images
import timeline1 from "../../../assets/states/tamil-nadu/categories/places/rameswaram.jpg";
import timeline2 from "../../../assets/states/tamil-nadu/categories/places/mahabalipuram.jpg";
import timeline3 from "../../../assets/states/tamil-nadu/categories/places/kanyakumari.jpg";
import timeline4 from "../../../assets/states/tamil-nadu/categories/places/ooty.webp";
import timeline5 from "../../../assets/states/tamil-nadu/categories/places/pichavaram.jpeg";

import { items, gallery } from "../../../data/tamilnadu/places";

function Places() {

  const timeline = [
    {
      year: "Ancient Tamilakam",
      title: "Sacred Landscapes & Early Settlements",
      description:
        "Pilgrimage centres, river valleys and coastal settlements became the earliest destinations of Tamil Nadu, attracting devotees, traders and scholars for centuries.",
      image: timeline1,
      location: "Rameswaram • Madurai • Kanchipuram",
    },
    {
      year: "Pallava & Chola Era",
      title: "Temple Cities & Maritime Ports",
      description:
        "Temple towns flourished alongside prosperous ports, where magnificent monuments and thriving trade connected Tamil Nadu with Southeast Asia and the wider Indian Ocean.",
      image: timeline2,
      location: "Mahabalipuram • Nagapattinam",
    },
    {
      year: "Medieval Tamil Nadu",
      title: "Pilgrimage & Cultural Centres",
      description:
        "Sacred temples, royal capitals and coastal landmarks evolved into vibrant cultural destinations that continue to define Tamil Nadu's heritage today.",
      image: timeline3,
      location: "Kanyakumari • Madurai • Chidambaram",
    },
    {
      year: "Colonial Era",
      title: "The Rise of Hill Stations",
      description:
        "The cool climates of the Western Ghats inspired the development of picturesque hill stations, introducing a new chapter in Tamil Nadu's travel history.",
      image: timeline4,
      location: "Ooty • Kodaikanal • Yercaud",
    },
    {
      year: "Present Day",
      title: "A Journey Across Every Landscape",
      description:
        "Today, Tamil Nadu offers an extraordinary blend of temple cities, beaches, mangrove forests, waterfalls, wildlife reserves and mountain retreats, making it one of India's most diverse travel destinations.",
      image: timeline5,
      location: "Across Tamil Nadu",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Places to Visit in Tamil Nadu"
        subtitle="Temples, Hills & Coastlines"
        description="From ancient temple cities and UNESCO monuments to misty hill stations, pristine beaches and remarkable natural landscapes, Tamil Nadu offers one of India's richest travel experiences."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Across Tamil Nadu"
        text1="Tamil Nadu's destinations have evolved over thousands of years, from sacred pilgrimage centres and thriving port cities to colonial hill stations and modern nature escapes. Each landscape tells a unique chapter in the state's remarkable history."
        text2="Whether exploring Mahabalipuram's monuments, watching the sunrise at Kanyakumari, trekking through the Nilgiris or gliding through the mangroves of Pichavaram, every journey reveals another side of Tamil Nadu."

      />

      <CategoryTimeline
        title="The Evolution of Tamil Nadu's Destinations"
        events={timeline}
      />

      <ItemGrid
        title="Must-Visit Destinations"
        items={items}
      />

      <Gallery
        tag="TRAVEL SHOWCASE"
        title="Beyond the Famous Landmarks"
        description="Beyond its iconic destinations, Tamil Nadu invites travellers to discover sacred islands, roaring waterfalls, wildlife sanctuaries, mist-covered hills, tranquil mangrove forests and timeless landscapes that showcase the incredible diversity of the state."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;