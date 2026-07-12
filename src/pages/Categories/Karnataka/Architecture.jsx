import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/architecture/hero.jpg";

import kadambaImg from "../../../assets/states/karnataka/categories/architecture/kadamba.jpg";
import chalukyaImg from "../../../assets/states/karnataka/categories/architecture/aihole.jpg";
import rashtrakutaImg from "../../../assets/states/karnataka/categories/kingdoms/kailasa.webp";
import hoysalaImg from "../../../assets/states/karnataka/categories/kingdoms/hoysala.jpg";
import vijayanagaraImg from "../../../assets/states/karnataka/categories/architecture/Hampi.jpeg";
import wadiyarImg from "../../../assets/states/karnataka/categories/architecture/mysore.jpg";

import { items, gallery } from "../../../data/karnataka/architecture";

function Architecture() {
  const timeline = [
    {
      year: "4th - 6th Century",
      title: "The Kadamba Foundations",
      description:
        "The Kadambas established some of Karnataka's earliest structural temples, introducing the distinctive Kadamba Shikhara and laying the foundations of the region's architectural tradition.",
      image: kadambaImg,
      location: "Banavasi",
    },
    {
      year: "6th - 8th Century",
      title: "The Chalukya Revolution",
      description:
        "The Badami Chalukyas pioneered rock-cut caves and structural temples at Badami, Aihole and Pattadakal, shaping the evolution of Deccan and South Indian architecture.",
      image: chalukyaImg,
      location: "Badami • Aihole • Pattadakal",
    },
    {
      year: "8th - 10th Century",
      title: "The Rashtrakuta Legacy",
      description:
        "The Rashtrakutas expanded the architectural vision of the Deccan through magnificent temples, Jain monuments and remarkable feats of engineering that reflected imperial ambition.",
      image: rashtrakutaImg,
      location: "Manyakheta",
    },
    {
      year: "11th - 14th Century",
      title: "The Hoysala Golden Age",
      description:
        "The Hoysalas perfected soapstone architecture, creating intricately carved star-shaped temples whose artistic detail ranks among the finest achievements of Indian sculpture.",
      image: hoysalaImg,
      location: "Belur • Halebidu • Somanathapura",
    },
    {
      year: "14th - 16th Century",
      title: "The Vijayanagara Empire",
      description:
        "The rulers of Vijayanagara transformed Hampi into one of the world's greatest medieval cities, building monumental temples, royal enclosures, bustling bazaars and ingenious water systems.",
      image: vijayanagaraImg,
      location: "Hampi",
    },
    {
      year: "17th - 21st Century",
      title: "The Wadiyar Legacy",
      description:
        "The Wadiyars blended traditional Indian architecture with Indo-Saracenic and European influences, leaving behind magnificent palaces, public buildings and cultural landmarks that define modern Karnataka.",
      image: wadiyarImg,
      location: "Mysuru",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Architecture of Karnataka"
        subtitle="Stone, Art & Empire"
        description="From ancient cave sanctuaries and Hoysala masterpieces to the imperial grandeur of Hampi and the royal palaces of Mysuru, Karnataka preserves nearly two thousand years of architectural excellence."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Legacy Carved in Stone"
        text1="For nearly two millennia, Karnataka has stood at the forefront of Indian architecture. Successive dynasties including the Kadambas, Chalukyas, Rashtrakutas, Hoysalas, Vijayanagara rulers and the Wadiyars transformed stone into timeless works of art."
        text2="Across the state, magnificent temples, forts, palaces, cave sanctuaries and sacred monuments reflect extraordinary engineering, artistic excellence and cultural vision, making Karnataka one of India's greatest architectural landscapes."
      />

      <CategoryTimeline
        title="The Evolution of Karnataka's Architecture"
        events={timeline}
      />

      <ItemGrid
        title="Architectural Icons"
        items={items}
      />

      <Gallery
        tag="ARCHITECTURAL SHOWCASE"
        title="Beyond the Iconic Landmarks"
        description="Beyond its famous monuments, Karnataka is home to countless architectural treasures spanning ancient temple experiments, UNESCO World Heritage Sites, sacred monuments, royal palaces and masterpieces of medieval craftsmanship."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;