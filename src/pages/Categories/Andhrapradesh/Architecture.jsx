import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/architecture/lepakshi.jpg";

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
      year: "230 BCE-300 CE",
      title: "The Buddhist Foundations",
      description:
        "The Krishna Valley emerged as one of India's foremost Buddhist centres, where monumental stupas, monasteries and finely carved sculptures established the foundations of Andhra Pradesh's architectural heritage while attracting pilgrims from across Asia.",
      image: timeline1,
      location: "Amaravati • Nagarjunakonda",
    },
    {
      year: "300-624 CE",
      title: "Rock-Cut Architecture",
      description:
        "Master craftsmen carved remarkable cave sanctuaries directly into sandstone hills, blending Buddhist origins with later Hindu traditions. These enduring monuments showcased exceptional engineering while enriching Andhra's early architectural legacy.",
      image: timeline2,
      location: "Undavalli",
    },
    {
      year: "624-1323 CE",
      title: "The Age of Temple Architecture",
      description:
        "The Eastern Chalukyas and later Telugu dynasties transformed Andhra through magnificent Dravidian temples featuring soaring gopurams, intricate stone carvings and advanced engineering. Their sacred monuments remain enduring symbols of regional craftsmanship and devotion.",
      image: timeline3,
      location: "Draksharamam • Srikalahasti",
    },
    {
      year: "1336-1646 CE",
      title: "The Vijayanagara Renaissance",
      description:
        "The Vijayanagara Empire ushered in a golden age of architecture, creating elegant temple complexes, ornate mandapas and remarkable sculptures throughout Rayalaseema. These masterpieces reflected imperial wealth, artistic excellence and enduring spiritual traditions.",
      image: timeline4,
      location: "Lepakshi",
    },
    {
      year: "1950-Present",
      title: "Preserving a Timeless Legacy",
      description:
        "Today, conservation initiatives continue protecting Andhra Pradesh's ancient stupas, medieval forts, sacred temples and cave monuments. These treasured landmarks preserve more than two thousand years of architectural achievement for future generations.",
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
        description="From ancient Buddhist stupas and rock-cut caves to majestic temples, medieval forts and Vijayanagara masterpieces, Andhra Pradesh preserves more than two thousand years of architectural brilliance, artistic innovation and enduring cultural heritage."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Andhra's Architecture"
        text1="For more than two thousand years, Andhra Pradesh has witnessed the rise of Buddhist monuments, sacred temple towns, rock-cut sanctuaries and formidable hill forts. Every era introduced remarkable architectural innovations while enriching the artistic traditions of the Telugu region."
        text2="Whether admiring the timeless sculptures of Amaravati, the engineering brilliance of Lepakshi or the dramatic fortifications of Gandikota, every monument reflects the creativity, faith and exceptional craftsmanship that define Andhra Pradesh's architectural identity."
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
        description="Beyond its celebrated monuments, Andhra Pradesh preserves a remarkable architectural legacy through sacred temples, rock-cut caves, medieval forts, royal palaces, ancient stupas and timeless masterpieces that continue to define the Telugu heartland."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;