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
      year: "300 BCE-600 CE",
      title: "The Birth of Telugu Identity",
      description:
        "The Telugu language, early inscriptions, regional customs and literary traditions laid the cultural foundations of Andhra Pradesh. These enduring influences shaped a distinct identity that continues defining the Telugu-speaking world across generations.",
      image: timeline1,
      location: "Across Andhra Pradesh",
    },
    {
      year: "600-1300 CE",
      title: "Music & Literary Traditions",
      description:
        "Poetry, devotional music, classical learning and oral storytelling flourished under royal patronage throughout Andhra. Scholars and poets preserved philosophy, history and folklore while enriching the remarkable cultural heritage of the Telugu region.",
      image: timeline2,
      location: "Rajamahendravaram • Tirupati",
    },
    {
      year: "1300-1600 CE",
      title: "The Rise of Performing Arts",
      description:
        "Classical dance, temple theatre and devotional performances reached new heights across Andhra Pradesh. Kuchipudi emerged as one of India's foremost classical dance traditions, becoming a timeless symbol of Telugu artistic excellence and cultural pride.",
      image: timeline3,
      location: "Kuchipudi Village • Krishna District",
    },
    {
      year: "1600-1950 CE",
      title: "Craftsmanship Across Generations",
      description:
        "Master artisans preserved remarkable traditions including Kondapalli toys, Kalamkari textiles and Etikoppaka lacquerware. Their exceptional craftsmanship transformed everyday objects into enduring symbols of Andhra Pradesh's artistic heritage and cultural identity.",
      image: timeline4,
      location: "Kondapalli • Srikalahasti • Etikoppaka",
    },
    {
      year: "1950-Present",
      title: "A Living Cultural Heritage",
      description:
        "Today, Andhra Pradesh celebrates its cultural legacy through festivals, language, music, dance, cuisine and traditional craftsmanship. While embracing modern influences, the state continues preserving the rich heritage of Telugu civilization for future generations.",
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
        description="From the timeless Telugu language and graceful Kuchipudi dance to vibrant festivals, sacred traditions and remarkable craftsmanship, Andhra Pradesh preserves one of India's richest cultural legacies spanning more than two thousand years."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Telugu Culture"
        text1="For more than two thousand years, Andhra Pradesh has nurtured a vibrant cultural tradition shaped by literature, music, performing arts, craftsmanship and enduring community values. Every generation has enriched the remarkable legacy of Telugu civilization."
        text2="Whether witnessing the elegance of Kuchipudi, admiring Kalamkari textiles, celebrating Ugadi or exploring centuries-old craft traditions, visitors experience a living culture that proudly honours its past while embracing the future."
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
        description="Beyond its celebrated festivals and performing arts, Andhra Pradesh's cultural heritage thrives through classical music, folk storytelling, sacred traditions, intricate textiles, handcrafted toys and artistic practices preserved across countless generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;