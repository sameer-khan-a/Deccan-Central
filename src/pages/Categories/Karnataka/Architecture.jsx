import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/architecture/hero.jpg";

import kadambaImg from "../../../assets/states/karnataka/categories/architecture/kadamba.JPG";
import chalukyaImg from "../../../assets/states/karnataka/categories/architecture/aihole.jpg";
import rashtrakutaImg from "../../../assets/states/karnataka/categories/kingdoms/kailasa.webp";
import westernChalukyaImg from "../../../assets/states/karnataka/categories/architecture/lakkundi.jpg";
import hoysalaImg from "../../../assets/states/karnataka/categories/kingdoms/hoysala.jpg";
import vijayanagaraImg from "../../../assets/states/karnataka/categories/architecture/Hampi.jpeg";
import wadiyarImg from "../../../assets/states/karnataka/categories/architecture/mysore.jpg";

import { items, gallery } from "../../../data/karnataka/architecture";

function Architecture() {
  const timeline = [
    {
      year: "345-540 CE",
      title: "The Kadamba Foundations",
      description:
        "The Kadambas laid the foundations of Karnataka's architectural tradition by constructing some of the region's earliest structural temples. Their distinctive Kadamba Shikhara and elegant stone craftsmanship influenced generations of temple builders across the Deccan.",
      image: kadambaImg,
      location: "Banavasi",
    },
    {
      year: "543-753 CE",
      title: "The Chalukya Revolution",
      description:
        "The Badami Chalukyas transformed temple architecture through remarkable experimentation with rock-cut caves and structural shrines. Their monuments at Badami, Aihole and Pattadakal established principles that shaped South Indian architecture for centuries.",
      image: chalukyaImg,
      location: "Badami • Aihole • Pattadakal",
    },
    {
      year: "753-982 CE",
      title: "The Rashtrakuta Legacy",
      description:
        "The Rashtrakutas expanded Karnataka's architectural achievements by commissioning monumental temples, rock-cut monuments and Jain sanctuaries. Their patronage celebrated imperial power while elevating artistic craftsmanship throughout the Deccan.",
      image: rashtrakutaImg,
      location: "Manyakheta",
    },
    {
      year: "973-1189 CE",
      title: "The Western Chalukyas",
      description:
        "Also known as the Kalyani Chalukyas, they ushered in a new era of temple architecture across the Deccan. Magnificent monuments at Lakkundi, Itagi and Gadag blended the legacy of the Badami Chalukyas with fresh artistic innovations, creating the architectural style that later inspired the Hoysalas.",
      image: westernChalukyaImg,
      location: "Kalyani • Lakkundi • Itagi • Gadag",
    },
    {
      year: "1026-1343 CE",
      title: "The Hoysala Golden Age",
      description:
        "The Hoysalas perfected soapstone temple architecture through exquisitely carved star-shaped temples filled with intricate sculptures and decorative detail. Their monuments remain among India's greatest artistic achievements, admired for precision, elegance and extraordinary craftsmanship.",
      image: hoysalaImg,
      location: "Belur • Halebidu • Somanathapura",
    },
    {
      year: "1336-1646 CE",
      title: "The Vijayanagara Empire",
      description:
        "The rulers of Vijayanagara transformed Hampi into one of the world's greatest medieval capitals. Magnificent temples, royal enclosures, bustling bazaars and advanced water systems reflected immense wealth, engineering brilliance and enduring imperial ambition.",
      image: vijayanagaraImg,
      location: "Hampi",
    },
    {
      year: "1610-1947",
      title: "The Wadiyar Legacy",
      description:
        "The Wadiyars blended traditional Indian craftsmanship with Indo-Saracenic and European influences to create magnificent palaces, public buildings and cultural landmarks. Their architectural vision continues to define Mysuru while preserving Karnataka's rich royal heritage.",
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
        description="From ancient cave sanctuaries and experimental temples to the imperial grandeur of Hampi and the royal elegance of Mysuru, Karnataka preserves nearly two thousand years of architectural innovation, artistic excellence and enduring cultural achievement."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Legacy Carved in Stone"
        text1="For nearly two thousand years, Karnataka has stood at the forefront of Indian architecture. Dynasties including the Kadambas, Badami Chalukyas, Rashtrakutas, Western Chalukyas, Hoysalas, Vijayanagara rulers and the Wadiyars transformed stone into enduring monuments that continue to inspire admiration across the world."
        text2="From cave sanctuaries and intricately carved temples to mighty forts, royal palaces and sacred monuments, every era contributed distinctive styles and innovations, making Karnataka one of India's richest and most diverse architectural landscapes."
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
        description="Beyond its celebrated monuments, Karnataka is home to countless architectural treasures ranging from experimental temple complexes and UNESCO World Heritage Sites to forgotten forts, sacred shrines and remarkable masterpieces that reveal the state's extraordinary artistic legacy."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;
