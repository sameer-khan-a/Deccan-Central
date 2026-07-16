import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/kerala/Categories/architecture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/kerala/Categories/architecture/padmanabhapuram-palace.jpg";
import timeline2 from "../../../assets/states/kerala/Categories/architecture/sree-padmanabhaswamy-temple.jpg";
import timeline3 from "../../../assets/states/kerala/Categories/architecture/st-francis-church.jpg";
import timeline4 from "../../../assets/states/kerala/Categories/architecture/bekal-fort.jpg";
import timeline5 from "../../../assets/states/kerala/Categories/architecture/mattancherry-palace.jpg";

import { items, gallery } from "../../../data/kerala/architecture";

function Architecture() {

  const timeline = [
    {
      year: "Before 9th CE",
      title: "Architecture Shaped by Nature",
      description:
        "Abundant timber, laterite stone and heavy monsoon rains gave rise to Kerala's distinctive architectural style, characterized by sloping roofs, open courtyards and remarkable wooden craftsmanship.",
      image: timeline1,
      location: "Across Kerala",
    },
    {
      year: "9th-15th CE",
      title: "Sacred Spaces Take Shape",
      description:
        "Temple architecture evolved into a uniquely Keralan form, emphasizing harmony with nature through elegant shrines, nalambalams, copper-clad roofs and finely carved wooden structures.",
      image: timeline2,
      location: "Thiruvananthapuram • Thrissur",
    },
    {
      year: "15th-18th CE",
      title: "A Meeting of Architectural Worlds",
      description:
        "Centuries of trade introduced new churches, synagogues, mosques and colonial buildings that blended seamlessly with Kerala's indigenous building traditions.",
      image: timeline3,
      location: "Kochi • Kozhikode",
    },
    {
      year: "16th-19th CE",
      title: "Palaces, Forts & Coastal Defences",
      description:
        "Kerala's rulers expanded magnificent wooden palaces, coastal forts and administrative centres, combining local craftsmanship with influences from overseas trade and diplomacy.",
      image: timeline4,
      location: "Bekal • Kannur",
    },
    {
      year: "1947-Present",
      title: "Preserving a Living Heritage",
      description:
        "Today, Kerala carefully preserves its temples, palaces, forts and colonial quarters while traditional architectural principles continue to inspire sustainable design across the state.",
      image: timeline5,
      location: "Across Kerala",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Architecture of Kerala"
        subtitle="Timber, Tradition & Monsoon Design"
        description="From elegant wooden palaces and sacred temples to forts, churches and synagogues, Kerala's architecture reflects centuries of craftsmanship shaped by climate, trade and cultural exchange."
        image={heroImg}
      />

      <CategoryOverview
        heading="Built for Rain, Crafted for Generations"
        text1="Kerala developed one of India's most distinctive architectural traditions, where climate shaped every detail. Timber construction, laterite walls, sloping tiled roofs and open courtyards created buildings perfectly suited to the tropical monsoon."
        text2="Centuries of maritime trade and cultural exchange enriched this indigenous style, producing a remarkable architectural landscape where temples, palaces, churches, mosques and synagogues coexist in harmony."
      />

      <CategoryTimeline
        title="The Evolution of Kerala's Architecture"
        events={timeline}
      />

      <ItemGrid
        title="Architectural Marvels"
        items={items}
      />

      <Gallery
        tag="ENDURING HERITAGE"
        title="Beyond the Iconic Landmarks"
        description="Kerala's architectural legacy extends beyond its famous monuments through magnificent temples, wooden palaces, coastal forts, colonial churches, ancient synagogues and traditional homes that together showcase one of India's most distinctive architectural traditions."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;
