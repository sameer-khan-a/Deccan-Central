import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/culture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/andhrapradesh/categories/culture/telugu.jpg";
import timeline2 from "../../../assets/states/andhrapradesh/categories/culture/veena.png";
import timeline3 from "../../../assets/states/andhrapradesh/categories/culture/kuchipudi.jpg";
import timeline4 from "../../../assets/states/andhrapradesh/categories/culture/kondapalli.webp";
import timeline5 from "../../../assets/states/andhrapradesh/categories/culture/ugadi.jpg";

import { items, gallery } from "../../../data/andhrapradesh/culture";

function Culture() {
  const timeline = [
    {
      year: "Ancient Origins",
      title: "The Birth of Telugu Identity",
      description:
        "The Telugu language, early literature and regional customs formed the cultural foundations of Andhra Pradesh, creating a shared identity that has endured for over two millennia.",
      image: timeline1,
      location: "Across Andhra Pradesh",
    },
    {
      year: "Arts & Storytelling",
      title: "A Tradition of Music and Literature",
      description:
        "Poetry, devotional music, oral storytelling and classical learning flourished, preserving history, philosophy and folklore through generations of artists and scholars.",
      image: timeline2,
      location: "Rajamahendravaram • Tirupati",
    },
    {
      year: "Classical Expression",
      title: "The Rise of Performing Arts",
      description:
        "Classical dance, theatre and temple traditions reached new heights, with Kuchipudi emerging as one of India's most celebrated dance forms and a symbol of Telugu culture.",
      image: timeline3,
      location: "Kuchipudi Village • Krishna District",
    },
    {
      year: "Crafts & Community",
      title: "The Flourishing of Traditional Crafts",
      description:
        "Generations of artisans preserved exquisite crafts including Kondapalli toys, Kalamkari textiles and lacquer work, reflecting the creativity and skill of Andhra's communities.",
      image: timeline4,
      location: "Kondapalli • Srikalahasti • Etikoppaka",
    },
    {
      year: "Present Day",
      title: "A Living Cultural Heritage",
      description:
        "Today, Andhra Pradesh celebrates its heritage through festivals, language, music, dance, cuisine and traditional crafts, ensuring that Telugu culture continues to thrive in a modern world.",
      image: timeline5,
      location: "Across Andhra Pradesh",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Culture of Andhra Pradesh"
        subtitle="The Soul of Telugu Civilization"
        description="From the timeless Telugu language and graceful Kuchipudi dance to vibrant festivals, sacred traditions and remarkable craftsmanship, Andhra Pradesh celebrates one of India's richest cultural legacies."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Telugu Culture"
        text1="For more than two thousand years, Andhra Pradesh has nurtured a vibrant cultural tradition shaped by literature, music, performing arts, craftsmanship and deep-rooted community values. Every festival, dance and art form reflects the enduring spirit of Telugu civilization."
        text2="Whether witnessing the elegance of Kuchipudi, admiring Kalamkari textiles, celebrating Ugadi or exploring centuries-old craft traditions, visitors experience a culture that honours its past while embracing the future."
      />

      <CategoryTimeline
        title="The Evolution of Andhra's Culture"
        events={timeline}
      />

      <ItemGrid
        title="Cultural Icons"
        items={items}
      />

      <Gallery
        tag="CULTURAL SHOWCASE"
        title="Beyond the Traditions"
        description="Beyond its celebrated festivals and performing arts, Andhra Pradesh's cultural heritage flourishes through classical music, folk storytelling, sacred traditions, intricate textiles, handcrafted toys and artistic practices that continue to inspire generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;