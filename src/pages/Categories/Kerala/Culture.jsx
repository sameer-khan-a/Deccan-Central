import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/kerala/categories/culture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/kerala/categories/culture/theyyam.jpeg";
import timeline2 from "../../../assets/states/kerala/categories/culture/koodiyattam.jpg";
import timeline3 from "../../../assets/states/kerala/categories/culture/kathakali.jpg";
import timeline4 from "../../../assets/states/kerala/categories/culture/kalaripayattu.jpg";
import timeline5 from "../../../assets/states/kerala/categories/culture/onam.webp";

import { items, gallery } from "../../../data/kerala/culture";

function Culture() {

  const timeline = [
    {
      year: "Ancient Kerala",
      title: "Sacred Rituals & Folk Traditions",
      description:
        "Kerala's earliest cultural identity emerged through temple rituals, sacred performances, oral traditions and community festivals deeply connected to nature and local beliefs.",
      image: timeline1,
      location: "North Kerala • Malabar",
    },
    {
      year: "Temple Civilisation",
      title: "The Rise of Classical Arts",
      description:
        "Temple centres became hubs of learning and performance, nurturing timeless traditions such as Koodiyattam, Chakyar Koothu and other classical theatrical forms.",
      image: timeline2,
      location: "Thrissur • Kerala Temple Theatres",
    },
    {
      year: "Cultural Renaissance",
      title: "Dance, Drama & Storytelling",
      description:
        "Kerala's artistic heritage flourished through expressive dance dramas, classical music and refined storytelling traditions, producing globally celebrated art forms like Kathakali and Mohiniyattam.",
      image: timeline3,
      location: "Central Kerala",
    },
    {
      year: "Tradition Meets Life",
      title: "Martial Arts & Community Heritage",
      description:
        "Martial disciplines, ritual performances, craftsmanship and local customs became an integral part of Kerala's identity, preserving centuries of knowledge across generations.",
      image: timeline4,
      location: "Across Kerala",
    },
    {
      year: "Present Day",
      title: "A Living Cultural Legacy",
      description:
        "Today, Kerala proudly celebrates its vibrant festivals, performing arts, martial traditions and community customs, ensuring that one of India's richest cultural landscapes continues to thrive.",
      image: timeline5,
      location: "Across Kerala",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Culture of Kerala"
        subtitle="Where Tradition Becomes Life"
        description="Kerala's culture blends sacred rituals, classical performing arts, martial traditions and vibrant festivals into one of India's richest living cultural landscapes."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Living Cultural Legacy"
        text1="For centuries, Kerala has nurtured a remarkable cultural tradition shaped by temple rituals, maritime connections, artistic excellence and close-knit communities. Every performance, festival and craft reflects the state's enduring heritage."
        text2="From the divine spectacle of Theyyam and the elegance of Kathakali to Kalaripayattu, snake boat races and the joyous celebrations of Onam, Kerala continues to preserve traditions that remain vibrant in everyday life."
      />

      <CategoryTimeline
        title="The Evolution of Kerala's Culture"
        events={timeline}
      />

      <ItemGrid
        title="Cultural Icons"
        items={items}
      />

      <Gallery
        tag="LIVING HERITAGE"
        title="Beyond the Cultural Icons"
        description="Kerala's cultural richness extends beyond its best-known traditions through ancient Sanskrit theatre, martial arts, colourful temple festivals, spectacular boat races, exquisite mural paintings and centuries-old storytelling traditions that continue to shape the state's identity."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;