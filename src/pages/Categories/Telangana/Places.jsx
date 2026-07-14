import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/telangana/categories/places/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/telangana/categories/places/laknavaram-lake.jpg";
import timeline2 from "../../../assets/states/telangana/categories/places/warangal.jpg";
import timeline3 from "../../../assets/states/telangana/categories/places/hyderabad.jpg";
import timeline4 from "../../../assets/states/telangana/categories/places/bogatha-waterfall.jpg";
import timeline5 from "../../../assets/states/telangana/categories/places/medak-cathedral.jpeg";

import { items, gallery } from "../../../data/telangana/places";

function Places() {

  const timeline = [
    {
      year: "230 BCE-900 CE",
      title: "Settlements & Sacred Landscapes",
      description:
        "Early settlements flourished near rivers, fertile plains and important trade routes across Telangana. Buddhist centres, sacred hills and growing market communities established many of the region's earliest cultural, spiritual and commercial landmarks.",
      image: timeline1,
      location: "Phanigiri • Dhulikatta • Kotilingala",
    },
    {
      year: "1100-1323 CE",
      title: "Fortified Cities & Temple Towns",
      description:
        "Powerful kingdoms transformed Telangana through fortified capitals, magnificent temple complexes and thriving market towns. These remarkable centres of administration, religion and commerce remain among the state's most celebrated heritage destinations today.",
      image: timeline2,
      location: "Warangal • Hanamkonda • Ramappa",
    },
    {
      year: "1518-1948 CE",
      title: "The Rise of Hyderabad",
      description:
        "The founding and expansion of Hyderabad ushered in an era of grand monuments, bustling bazaars, elegant gardens and royal palaces. Hyderabad emerged as the political, cultural and commercial heart of the Deccan.",
      image: timeline3,
      location: "Hyderabad • Golconda",
    },
    {
      year: "1948-2000 CE",
      title: "Beyond the Historic Cities",
      description:
        "As tourism expanded, Telangana's waterfalls, forests, lakes and wildlife sanctuaries gained recognition alongside its historic monuments. These diverse natural landscapes offered visitors remarkable opportunities for exploration, adventure and ecological discovery.",
      image: timeline4,
      location: "Bogatha • Kuntala • Kawal",
    },
    {
      year: "2000-Present",
      title: "A Diverse Travel Destination",
      description:
        "Today, Telangana combines heritage monuments, spiritual centres, vibrant cities, eco-tourism destinations and hidden landscapes into one remarkable travel experience. Together, they showcase the state's rich history, cultural diversity and extraordinary natural beauty.",
      image: timeline5,
      location: "Across Telangana",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Places to Visit in Telangana"
        subtitle="Royal Cities, Sacred Hills & Hidden Landscapes"
        description="From Hyderabad's timeless monuments and the Kakatiya legacy of Warangal to majestic waterfalls, ancient temples and serene forests, Telangana offers an unforgettable journey through history, culture and the landscapes of the Deccan."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Across Telangana"
        text1="Telangana's destinations have evolved through centuries of history, from ancient settlements and sacred pilgrimage sites to thriving royal capitals and modern tourism hubs. Every region reveals a unique blend of heritage, architecture and natural beauty."
        text2="Whether exploring medieval forts, wandering Hyderabad's historic streets or discovering hidden waterfalls across the Deccan Plateau, every destination offers a deeper understanding of Telangana's remarkable history, culture and enduring regional identity."
      />

      <CategoryTimeline
        title="The Evolution of Telangana's Destinations"
        events={timeline}
      />

      <ItemGrid
        title="Iconic Destinations"
        items={items}
      />

      <Gallery
        tag="TRAVEL SHOWCASE"
        title="Beyond the Famous Landmarks"
        description="Beyond its iconic attractions, Telangana reveals ancient temple towns, majestic forts, tranquil lakes, cascading waterfalls, wildlife sanctuaries, sacred hills and charming heritage streets that celebrate the state's remarkable diversity and enduring character."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;