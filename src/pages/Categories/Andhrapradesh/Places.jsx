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
      year: "300 BCE-900 CE",
      title: "Sacred Lands & Early Settlements",
      description:
        "Pilgrimage centres, Buddhist monuments and thriving settlements along the Krishna and Godavari rivers became Andhra's earliest destinations. These sacred landscapes attracted devotees, merchants and scholars from across the Indian subcontinent for centuries.",
      image: timeline1,
      location: "Srisailam • Amaravati • Nagarjunakonda",
    },
    {
      year: "900-1300 CE",
      title: "Temple Towns & Sacred Centres",
      description:
        "Magnificent temples, pilgrimage towns and artistic settlements flourished under powerful Telugu dynasties. Their remarkable architecture, spiritual traditions and enduring cultural heritage transformed these centres into celebrated destinations that continue inspiring visitors today.",
      image: timeline2,
      location: "Lepakshi • Srikalahasti",
    },
    {
      year: "1300-1700 CE",
      title: "Forts, Capitals & Royal Landscapes",
      description:
        "Imperial capitals, mighty hill forts and dramatic river valleys reflected Andhra Pradesh's growing importance across the Deccan. Together, these remarkable landscapes blended military strength, royal ambition and extraordinary natural beauty into enduring historical landmarks.",
      image: timeline3,
      location: "Gandikota • Chandragiri",
    },
    {
      year: "1950-2000 CE",
      title: "Discovering the Eastern Ghats",
      description:
        "Growing tourism revealed the spectacular beauty of Andhra's hill stations, limestone caves, coffee plantations and forest landscapes. These scenic destinations introduced travellers to the remarkable biodiversity and natural wonders of the Eastern Ghats.",
      image: timeline4,
      location: "Araku Valley • Borra Caves • Lambasingi",
    },
    {
      year: "2000-Present",
      title: "A Diverse Travel Destination",
      description:
        "Today, Andhra Pradesh offers an extraordinary blend of beaches, wildlife reserves, sacred temples, hill stations, caves and heritage monuments. Together, these remarkable destinations create one of South India's most rewarding travel experiences.",
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
        description="From sacred temples and dramatic canyons to misty valleys, limestone caves and pristine beaches, Andhra Pradesh offers an unforgettable journey through history, nature and the diverse landscapes of the Telugu heartland."
        image={heroImg}
      />

      <CategoryOverview
        heading="Journey Across the Telugu Heartland"
        text1="Over centuries, Andhra Pradesh has evolved into a destination where ancient pilgrimage centres, royal monuments and breathtaking natural landscapes exist together. Every region reveals a remarkable blend of history, culture, architecture and scenic beauty."
        text2="Whether exploring the coffee estates of Araku, the rugged cliffs of Gandikota, the golden shores of Rushikonda or the depths of ancient cave systems, every journey reveals another chapter of Andhra Pradesh's remarkable story."
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
        description="Beyond its iconic attractions, Andhra Pradesh reveals misty hill stations, ancient cave systems, sacred temple towns, scenic coastlines, tranquil wetlands and hidden heritage treasures that celebrate the beauty of the Telugu landscape."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;