import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/architecture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/andhrapradesh/categories/architecture/amaravati.jpg";
import timeline2 from "../../../assets/states/andhrapradesh/categories/architecture/undavalli-caves.avif";
import timeline3 from "../../../assets/states/andhrapradesh/categories/architecture/draksharamam.jpg";
import timeline4 from "../../../assets/states/andhrapradesh/categories/architecture/lepakshi.jpg";
import timeline5 from "../../../assets/states/andhrapradesh/categories/architecture/gandikota.jpg";

import { items, gallery } from "../../../data/andhrapradesh/architecture";

function Architecture() {
  const timeline = [
    {
      year: "3rd Century BCE - 3rd Century CE",
      title: "The Buddhist Foundations",
      description:
        "The Krishna Valley became one of India's foremost Buddhist centres, where monumental stupas, monasteries and beautifully carved sculptures laid the foundations of Andhra's architectural heritage.",
      image: timeline1,
      location: "Amaravati • Nagarjunakonda",
    },
    {
      year: "4th - 7th Century",
      title: "Rock-Cut Architecture",
      description:
        "Architects carved magnificent cave complexes directly into hillsides, blending Buddhist origins with later Hindu traditions through remarkable monolithic craftsmanship.",
      image: timeline2,
      location: "Undavalli",
    },
    {
      year: "7th - 12th Century",
      title: "The Age of Temple Architecture",
      description:
        "Grand Dravidian temples flourished across Andhra, featuring towering gopurams, intricate stone carvings and sophisticated engineering that shaped the region's sacred landscape.",
      image: timeline3,
      location: "Draksharamam • Srikalahasti",
    },
    {
      year: "14th - 16th Century",
      title: "The Vijayanagara Renaissance",
      description:
        "A golden age of architecture saw the creation of elegant temple complexes, ornate mandapas and artistic masterpieces that reflected the empire's wealth and devotion.",
      image: timeline4,
      location: "Lepakshi",
    },
    {
      year: "Present Day",
      title: "Preserving a Timeless Legacy",
      description:
        "Ancient stupas, medieval forts, sacred temples and cave monuments continue to preserve over two thousand years of Andhra Pradesh's extraordinary architectural heritage.",
      image: timeline5,
      location: "Gandikota • Chandragiri • Across Andhra Pradesh",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Architecture of Andhra Pradesh"
        subtitle="Stone, Faith & Imperial Legacy"
        description="From ancient Buddhist stupas and rock-cut caves to majestic temples, medieval forts and Vijayanagara masterpieces, Andhra Pradesh preserves one of India's richest architectural traditions."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Andhra's Architecture"
        text1="For over two thousand years, Andhra Pradesh has witnessed the rise of Buddhist monuments, sacred temple towns, rock-cut sanctuaries and powerful hill forts. Each era introduced new architectural styles while building upon the artistic traditions of the Telugu region."
        text2="Whether admiring the timeless sculptures of Amaravati, the engineering brilliance of Lepakshi or the dramatic cliffs of Gandikota, every monument reflects the creativity, faith and craftsmanship that define Andhra Pradesh."

      />

      <CategoryTimeline
        title="The Evolution of Andhra's Architecture"
        events={timeline}
      />

      <ItemGrid
        title="Architectural Icons"
        items={items}
      />

      <Gallery
        tag="ARCHITECTURAL SHOWCASE"
        title="Beyond the Landmarks"
        description="Beyond its iconic monuments, Andhra Pradesh's architectural heritage flourishes through sacred temples, rock-cut caves, medieval forts, royal palaces and centuries-old masterpieces that continue to define the cultural landscape of the Telugu heartland."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;