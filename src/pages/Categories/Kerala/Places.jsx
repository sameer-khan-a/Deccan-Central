import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/kerala/Categories/places/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/kerala/Categories/places/bekal-fort.jpg";
import timeline2 from "../../../assets/states/kerala/Categories/places/fort-kochi.jpg";
import timeline3 from "../../../assets/states/kerala/Categories/places/alleppey.webp";
import timeline4 from "../../../assets/states/kerala/Categories/places/munnar.jpg";
import timeline5 from "../../../assets/states/kerala/Categories/places/wayanad.webp";

import { items, gallery } from "../../../data/kerala/places";

function Places() {

  const timeline = [
    {
      year: "300 BCE-15th CE",
      title: "Ports, Pilgrimage & Early Settlements",
      description:
        "Kerala's earliest destinations grew around thriving ports, sacred temples and trading centres that connected the Malabar Coast with Arabia, Africa and the Mediterranean world.",
      image: timeline1,
      location: "Malabar Coast • Bekal",
    },
    {
      year: "1498-1947 CE",
      title: "Heritage Towns Emerge",
      description:
        "European merchants transformed coastal settlements into bustling colonial towns, leaving behind forts, churches, synagogues and distinctive urban landscapes that remain popular destinations today.",
      image: timeline2,
      location: "Fort Kochi",
    },
    {
      year: "19th-20th CE",
      title: "Life Along the Waterways",
      description:
        "Long used as trade routes, Kerala's lakes, canals and lagoons later evolved into iconic travel destinations, with houseboats showcasing the state's unique backwater lifestyle.",
      image: timeline3,
      location: "Alappuzha",
    },
    {
      year: "19th-20th CE",
      title: "The Western Ghats Beckon",
      description:
        "Tea plantations, spice estates and cool mountain climates transformed Kerala's highlands into celebrated hill stations, attracting travellers seeking nature and tranquillity.",
      image: timeline4,
      location: "Munnar • Idukki",
    },
    {
      year: "1989-Present",
      title: "God's Own Country",
      description:
        "Today, Kerala offers an extraordinary blend of heritage towns, backwaters, beaches, forests, waterfalls and wildlife, making it one of India's most diverse travel destinations.",
      image: timeline5,
      location: "Across Kerala",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Places to Visit in Kerala"
        subtitle="Backwaters, Highlands & Coastlines"
        description="From emerald tea plantations and tranquil backwaters to dramatic beaches, waterfalls and colonial towns, Kerala offers one of India's most diverse travel experiences."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Across God's Own Country"
        text1="Kerala's destinations have evolved over centuries, from ancient trading ports and sacred pilgrimage centres to colonial towns, peaceful backwaters and breathtaking hill stations. Together they create one of India's most varied travel landscapes."
        text2="Whether cruising through Alappuzha's waterways, exploring Fort Kochi's heritage streets, trekking across Wayanad's forests or relaxing amid Munnar's tea estates, every destination tells a unique chapter of Kerala's story."
      />

      <CategoryTimeline
        title="The Evolution of Kerala's Destinations"
        events={timeline}
      />

      <ItemGrid
        title="Must-Visit Destinations"
        items={items}
      />

      <Gallery
        tag="TRAVEL SHOWCASE"
        title="Beyond the Famous Destinations"
        description="Kerala's beauty extends far beyond its iconic landmarks. Colonial port towns, cliff-lined beaches, misty hill stations, majestic waterfalls and tranquil backwaters together reveal why the state is celebrated as 'God's Own Country.'"
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Places;
