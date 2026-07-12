import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/culture/hero.jpg";

import languageImg from "../../../assets/states/karnataka/categories/culture/kannada-literature.jpg";
import bhaktiImg from "../../../assets/states/karnataka/categories/culture/veeragase.webp";
import artsImg from "../../../assets/states/karnataka/categories/culture/yakshagana.jpg";
import heritageImg from "../../../assets/states/karnataka/categories/culture/mysore-dasara.jpg";
import modernImg from "../../../assets/states/karnataka/categories/culture/hampi-utsav.jpg";

import { items, gallery } from "../../../data/karnataka/culture";

function Culture() {
  const timeline = [
    {
      year: "Ancient Karnataka",
      title: "The Kannada Identity",
      description:
        "Early Kannada-speaking communities laid the foundations of Karnataka's cultural identity through language, literature, local traditions and sacred practices that continue to shape the state today.",
      image: languageImg,
      location: "Across Karnataka",
    },
    {
      year: "Medieval Period",
      title: "Bhakti & Literary Traditions",
      description:
        "The rise of the Bhakti movement, Vachana literature and Jain scholarship transformed Karnataka into a centre of philosophy, devotion and literary excellence, leaving a lasting impact on society.",
      image: bhaktiImg,
      location: "Basavakalyan • Shravanabelagola",
    },
    {
      year: "Classical Era",
      title: "Music, Dance & Performing Arts",
      description:
        "Classical music, Yakshagana, Dollu Kunitha and other performing arts flourished alongside temple traditions, enriching Karnataka's artistic and cultural landscape.",
      image: artsImg,
      location: "Udupi • Hampi • Mysuru",
    },
    {
      year: "19th - 20th Century",
      title: "Preserving a Shared Heritage",
      description:
        "Museums, educational institutions, cultural festivals and royal patronage helped preserve Karnataka's literature, crafts, architecture and performing arts for future generations.",
      image: heritageImg,
      location: "Mysuru • Bengaluru",
    },
    {
      year: "Present Day",
      title: "A Living Cultural Legacy",
      description:
        "Today, Karnataka celebrates a vibrant blend of classical and folk traditions, colourful festivals, regional cuisines, cinema, literature and modern creativity while remaining deeply connected to its heritage.",
      image: modernImg,
      location: "Across Karnataka",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Culture of Karnataka"
        subtitle="Traditions That Endure"
        description="From the origins of the Kannada language to vibrant festivals, music, theatre, literature and living traditions, Karnataka's culture reflects centuries of creativity, diversity and heritage."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Heritage Shaped by People & Tradition"
        text1="Karnataka is home to one of India's richest cultural landscapes, where language, literature, philosophy, music, dance and craftsmanship have evolved together for over fifteen centuries."
        text2="From ancient inscriptions and the Bhakti movement to Yakshagana performances and modern cinema, every generation has added a new chapter to Karnataka's remarkable cultural story."
      />

      <CategoryTimeline
        title="The Evolution of Karnataka's Culture"
        events={timeline}
      />

      <ItemGrid
        title="Cultural Icons"
        items={items}
      />

      <Gallery
        tag="CULTURAL SHOWCASE"
        title="Beyond the Cultural Icons"
        description="Beyond its famous festivals and literary traditions, Karnataka's identity thrives through vibrant folk arts, sacred customs, timeless craftsmanship, regional cuisines, classical music and performing arts that continue to shape everyday life."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;