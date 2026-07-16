import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/kingdoms/hero.jpg";

import kadambaImg from "../../../assets/states/karnataka/categories/kingdoms/kadamba.JPG";
import chalukyaImg from "../../../assets/states/karnataka/categories/kingdoms/chalukya.jpg";
import rashtrakutaImg from "../../../assets/states/karnataka/categories/kingdoms/rashtrakuta.jpg";
import hoysalaImg from "../../../assets/states/karnataka/categories/kingdoms/hoysala.jpg";
import vijayanagaraImg from "../../../assets/states/karnataka/categories/kingdoms/vijayanagara.webp";

import { items, gallery } from "../../../data/karnataka/kingdoms";

function Kingdoms() {
  const timeline = [
    {
      year: "345 CE",
      title: "Kadamba Dynasty",
      description:
        "Founded by Mayurasharma, the Kadambas established the first major native Kannada kingdom at Banavasi, shaping Karnataka's political identity while advancing Kannada administration and architecture.",
      image: kadambaImg,
      location: "Banavasi",
    },
    {
      year: "543 CE",
      title: "Badami Chalukyas",
      description:
        "The Chalukyas of Badami transformed the Deccan into a major regional power, pioneering rock-cut architecture and temple design at Badami, Aihole and Pattadakal that influenced South India for centuries.",
      image: chalukyaImg,
      location: "Badami • Aihole • Pattadakal",
    },
    {
      year: "753 CE",
      title: "Rashtrakuta Empire",
      description:
        "Among medieval India's greatest imperial dynasties, the Rashtrakutas ruled vast territories while promoting literature, trade and engineering. Their legacy includes the monumental Kailasa Temple at Ellora.",
      image: rashtrakutaImg,
      location: "Manyakheta",
    },
    {
      year: "1000 CE",
      title: "Hoysala Empire",
      description:
        "The Hoysalas ushered in a golden age of architecture and sculpture, creating the masterpieces of Belur, Halebidu and Somanathapura that remain among India's finest temple complexes praised worldwide.",
      image: hoysalaImg,
      location: "Belur • Halebidu • Somanathapura",
    },
    {
      year: "1336 CE",
      title: "Vijayanagara Empire",
      description:
        "Founded by Harihara I and Bukka Raya I, Vijayanagara became South India's last great Hindu empire, with Hampi flourishing as one of the medieval world's richest and most magnificent capitals praised worldwide.",
      image: vijayanagaraImg,
      location: "Hampi",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Kingdoms of Karnataka"
        subtitle="Empires That Shaped the Deccan"
        description="From the pioneering Kadambas to the mighty Vijayanagara Empire, Karnataka has been home to some of India's most influential kingdoms, leaving behind a legacy of power, culture, architecture and innovation."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Rise of Karnataka's Great Dynasties"
        text1="For over fifteen centuries, Karnataka stood at the heart of the Deccan, where powerful kingdoms built prosperous capitals, expanded trade, encouraged literature and transformed the region into a center of political and cultural influence."
        text2="Successive dynasties including the Kadambas, Chalukyas, Rashtrakutas, Hoysalas and Vijayanagara rulers shaped the state's identity through their achievements in governance, architecture, art, religion and the Kannada language."
      />

      <CategoryTimeline
        title="Evolution of Karnataka's Kingdoms"
        events={timeline}
      />

      <ItemGrid
        title="The Great Dynasties"
        items={items}
      />

      <Gallery
        tag="ENDURING HERITAGE"
        title="What the Kingdoms Left Behind"
        description="The influence of Karnataka's great kingdoms extends far beyond political history. Their legacy survives through ancient capitals, monumental architecture, artistic excellence, literary traditions and cultural achievements that continue to define the state today."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;
