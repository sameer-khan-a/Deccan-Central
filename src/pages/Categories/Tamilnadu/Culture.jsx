import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/tamil-nadu/categories/culture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/tamil-nadu/categories/culture/tamil-literature.jpg";
import timeline2 from "../../../assets/states/tamil-nadu/categories/culture/bharatanatyam.JPG";
import timeline3 from "../../../assets/states/tamil-nadu/categories/culture/nadaswaram-tavil.jpg";
import timeline4 from "../../../assets/states/tamil-nadu/categories/culture/kanchipuram-silk.jpg";
import timeline5 from "../../../assets/states/tamil-nadu/categories/culture/pongal.jpg";

import { items, gallery } from "../../../data/tamilnadu/culture";

function Culture() {

  const timeline = [
    {
      year: "300 BCE-300 CE",
      title: "The Birth of Tamil Civilization",
      description:
        "Among the world's oldest living cultural traditions, Tamil society flourished through its language, Sangam literature, philosophy and enduring customs that continue to shape Tamil identity today.",
      image: timeline1,
      location: "Madurai • Kanyakumari • Across Tamil Nadu",
    },
    {
      year: "600-1300 CE",
      title: "The Rise of Music & Dance",
      description:
        "Tamil Nadu became a cradle of classical expression, where Bharatanatyam, devotional music and temple performances evolved into some of India's most celebrated artistic traditions.",
      image: timeline2,
      location: "Chidambaram • Thanjavur",
    },
    {
      year: "900-1600 CE",
      title: "Faith at the Heart of Society",
      description:
        "Temple towns grew into vibrant cultural centres, preserving sacred rituals, festivals, classical music, traditional instruments and community celebrations for generations.",
      image: timeline3,
      location: "Madurai • Srirangam • Chidambaram",
    },
    {
      year: "1500-1900 CE",
      title: "The Flourishing of Traditional Arts",
      description:
        "Master artisans perfected silk weaving, bronze casting, folk theatre and handcrafted works that became enduring symbols of Tamil craftsmanship and creativity.",
      image: timeline4,
      location: "Kanchipuram • Swamimalai • Thanjavur",
    },
    {
      year: "1900-Present",
      title: "A Living Classical Culture",
      description:
        "Today, Tamil Nadu proudly celebrates its language, festivals, music, dance, cuisine and artistic traditions, preserving one of the world's oldest living cultural traditions.",
      image: timeline5,
      location: "Across Tamil Nadu",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Culture of Tamil Nadu"
        subtitle="Where an Ancient Civilization Still Lives"
        description="Home to one of the world's oldest living cultures, Tamil Nadu preserves an extraordinary legacy of literature, classical arts, festivals and traditions that continue to shape everyday life."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Living Soul of Tamil Civilization"
        text1="For more than two thousand years, Tamil Nadu has nurtured one of humanity's oldest continuous cultural traditions. Its language, literature, performing arts, craftsmanship and festivals remain deeply woven into everyday life."
        text2="Whether witnessing Bharatanatyam, listening to Carnatic music, admiring Kanchipuram silk or celebrating Pongal, every experience reflects a civilization that continues to evolve while honouring its ancient roots."
      />

      <CategoryTimeline
        title="The Evolution of Tamil Culture"
        events={timeline}
      />

      <ItemGrid
        title="Cultural Icons"
        items={items}
      />

      <Gallery
        tag="CULTURAL SHOWCASE"
        title="Beyond the Traditions"
        description="Beyond its celebrated festivals and classical arts, Tamil Nadu's cultural heritage thrives through timeless literature, folk theatre, sacred music, intricate handloom traditions, colourful kolams and centuries-old craftsmanship that continue to inspire the world."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;
