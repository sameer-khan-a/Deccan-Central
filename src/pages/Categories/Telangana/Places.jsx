import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

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
      year: "Ancient Telangana",
      title: "Settlements & Sacred Landscapes",
      description:
        "Early settlements flourished near rivers, fertile plains and trade routes, while Buddhist centres and sacred hills emerged as important places of worship and learning.",
      image: timeline1,
      location: "Phanigiri • Dhulikatta • Kotilingala",
    },
    {
      year: "Medieval Era",
      title: "Fortified Cities & Temple Towns",
      description:
        "Growing kingdoms transformed Telangana with fortified capitals, temple complexes and thriving market towns, many of which remain important heritage destinations today.",
      image: timeline2,
      location: "Warangal • Hanamkonda • Ramappa",
    },
    {
      year: "The Rise of Hyderabad",
      title: "A Cosmopolitan Capital",
      description:
        "The founding of Hyderabad ushered in a new era of grand monuments, bustling bazaars, gardens and palaces, making the city the cultural heart of the Deccan.",
      image: timeline3,
      location: "Hyderabad • Golconda",
    },
    {
      year: "Natural Wonders",
      title: "Beyond the Historic Cities",
      description:
        "As travel expanded, Telangana's waterfalls, forests, lakes, wildlife sanctuaries and scenic reservoirs became popular destinations alongside its historic landmarks.",
      image: timeline4,
      location: "Bogatha • Kuntala • Kawal",
    },
    {
      year: "Present Day",
      title: "A Diverse Travel Destination",
      description:
        "Today, Telangana offers a remarkable blend of heritage monuments, spiritual centres, vibrant cities, eco-tourism destinations and hidden gems waiting to be explored.",
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
        description="From Hyderabad's timeless monuments and the Kakatiya legacy of Warangal to majestic waterfalls, ancient temples and serene forests, Telangana offers an unforgettable journey through the heart of the Deccan."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Across Telangana"
        text1="Telangana's destinations have evolved over centuries, from ancient settlements and sacred pilgrimage sites to thriving royal capitals and modern tourism hubs. Every region offers a unique window into the state's history and natural beauty."
        text2="Whether exploring medieval forts, wandering through Hyderabad's historic streets or discovering hidden waterfalls deep within the Deccan Plateau, every destination tells a story worth experiencing."
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
        description="Beyond its iconic attractions, Telangana reveals ancient temple towns, majestic forts, tranquil lakes, cascading waterfalls, wildlife sanctuaries, sacred hills and charming heritage streets that showcase the state's remarkable diversity."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;