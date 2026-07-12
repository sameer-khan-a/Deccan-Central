import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/places/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/andhrapradesh/categories/places/srisailam.jpg";
import timeline2 from "../../../assets/states/andhrapradesh/categories/places/lepakshi.jpg";
import timeline3 from "../../../assets/states/andhrapradesh/categories/places/gandikota.jpg";
import timeline4 from "../../../assets/states/andhrapradesh/categories/places/araku.jpg";
import timeline5 from "../../../assets/states/andhrapradesh/categories/places/rushikonda.jpg";

import { items, gallery } from "../../../data/andhrapradesh/places";

function Places() {
  const timeline = [
    {
      year: "Ancient Andhra",
      title: "Sacred Landscapes & Early Settlements",
      description:
        "Pilgrimage centres, Buddhist sites and settlements along the Krishna and Godavari rivers became the earliest destinations, drawing devotees, traders and scholars from across the subcontinent.",
      image: timeline1,
      location: "Srisailam • Amaravati • Nagarjunakonda",
    },
    {
      year: "Medieval Era",
      title: "Temple Towns & Heritage Villages",
      description:
        "Magnificent temples, fortified towns and artistic villages flourished across Andhra, leaving behind enduring cultural landmarks that continue to attract visitors today.",
      image: timeline2,
      location: "Lepakshi • Srikalahasti",
    },
    {
      year: "Historic Frontiers",
      title: "Forts, Canyons & Royal Centres",
      description:
        "Hill forts, dramatic river gorges and royal capitals emerged as symbols of Andhra's strategic importance, blending natural beauty with centuries of history.",
      image: timeline3,
      location: "Gandikota • Chandragiri",
    },
    {
      year: "Natural Wonders",
      title: "Discovering the Eastern Ghats",
      description:
        "Hill stations, limestone caves, coffee plantations and forest landscapes transformed Andhra into a destination for nature lovers and adventure seekers.",
      image: timeline4,
      location: "Araku Valley • Borra Caves • Lambasingi",
    },
    {
      year: "Present Day",
      title: "A Diverse Travel Destination",
      description:
        "Today, Andhra Pradesh offers an extraordinary mix of beaches, wildlife, sacred temples, caves, hill stations and heritage monuments, making it one of South India's most varied travel experiences.",
      image: timeline5,
      location: "Rushikonda • Pulicat Lake • Across Andhra Pradesh",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Places to Visit in Andhra Pradesh"
        subtitle="Where Mountains Meet the Sea"
        description="From sacred temples and dramatic canyons to misty valleys, limestone caves and pristine beaches, Andhra Pradesh offers one of South India's most diverse travel experiences."
        image={heroImg}
      />

      <CategoryOverview
        heading="Journey Across the Telugu Heartland"
        text1="Over centuries, Andhra Pradesh has evolved into a destination where ancient pilgrimage centres, royal monuments and breathtaking natural landscapes exist side by side. Every region offers a unique chapter in the story of the Telugu heartland."
        text2="Whether wandering through the coffee estates of Araku, exploring the rugged cliffs of Gandikota, relaxing on the shores of Rushikonda or discovering hidden cave systems, every journey reveals a different face of Andhra Pradesh."
      />

      <CategoryTimeline
        title="The Evolution of Andhra's Destinations"
        events={timeline}
      />

      <ItemGrid
        title="Iconic Destinations"
        items={items}
      />

      <Gallery
        tag="TRAVEL SHOWCASE"
        title="Beyond the Famous Landmarks"
        description="Beyond its iconic attractions, Andhra Pradesh invites travellers to discover misty hill stations, ancient cave systems, sacred temple towns, scenic coastlines, tranquil wetlands and hidden heritage gems spread across the Telugu landscape."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;