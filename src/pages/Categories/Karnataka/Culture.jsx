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
      year: "450-900 CE",
      title: "The Kannada Identity",
      description:
        "Early Kannada-speaking communities established the foundations of Karnataka's cultural identity through language, literature, local traditions and religious practices. Their enduring legacy continues to shape the customs, values and artistic expression of the state today.",
      image: languageImg,
      location: "Across Karnataka",
    },
    {
      year: "900-1400 CE",
      title: "Bhakti & Literary Traditions",
      description:
        "The Bhakti movement, Vachana literature and Jain scholarship transformed Karnataka into a centre of philosophy, devotion and intellectual achievement. These movements inspired social reform while enriching the region's literary and spiritual heritage for centuries.",
      image: bhaktiImg,
      location: "Basavakalyan • Shravanabelagola",
    },
    {
      year: "1400-1800 CE",
      title: "Music, Dance & Performing Arts",
      description:
        "Yakshagana, Dollu Kunitha, Carnatic music and classical dance traditions flourished alongside temple traditions and royal patronage. These vibrant artistic forms strengthened Karnataka's cultural identity while preserving stories, rituals and community celebrations across generations.",
      image: artsImg,
      location: "Udupi • Hampi • Mysuru",
    },
    {
      year: "1800-1956 CE",
      title: "Preserving a Shared Heritage",
      description:
        "Royal patronage, museums, educational institutions and cultural festivals helped preserve Karnataka's literature, architecture, performing arts and traditional crafts. Their collective efforts ensured these remarkable traditions endured for future generations.",
      image: heritageImg,
      location: "Mysuru • Bengaluru",
    },
    {
      year: "1956-Present",
      title: "A Living Cultural Legacy",
      description:
        "Modern Karnataka celebrates a dynamic blend of classical traditions, folk arts, regional cuisines, literature, cinema and contemporary creativity. While embracing progress, the state continues to preserve the cultural heritage that defines its unique identity.",
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
        description="From the emergence of the Kannada language to vibrant festivals, literature, music, theatre and living cultural traditions, Karnataka preserves a cultural legacy shaped by centuries of creativity, diversity and enduring heritage."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Heritage Shaped by People & Tradition"
        text1="Karnataka is home to one of India's richest cultural landscapes, where language, literature, philosophy, music, dance and craftsmanship have flourished together for more than fifteen centuries, creating a legacy admired across the nation."
        text2="From ancient inscriptions and the Bhakti movement to Yakshagana performances, royal patronage and modern cinema, every generation has enriched Karnataka's cultural legacy while preserving the traditions that continue to define the state today."
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
        description="Beyond its celebrated festivals and literary achievements, Karnataka's identity thrives through vibrant folk traditions, sacred customs, timeless craftsmanship, regional traditions, classical music and performing arts that continue to enrich everyday life."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;