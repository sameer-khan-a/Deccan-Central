import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import heroImg from "../../../assets/states/telangana/categories/culture/hero.jpeg";

// Timeline Images
import timeline1 from "../../../assets/states/telangana/categories/culture/samakka-saralamma.jpg";
import timeline2 from "../../../assets/states/telangana/categories/culture/gussadi-dance.webp";
import timeline3 from "../../../assets/states/telangana/categories/culture/deccani-urdu.webp";
import timeline4 from "../../../assets/states/telangana/categories/culture/bathukamma.jpg";
import timeline5 from "../../../assets/states/telangana/categories/culture/bonalu.jpg";

import { items, gallery } from "../../../data/telangana/culture";

function Culture() {
  const timeline = [
    {
      year: "Ancient Traditions",
      title: "The Roots of Telangana's Identity",
      description:
        "Early communities developed unique customs, folk beliefs, seasonal festivals and oral storytelling traditions that formed the cultural foundation of the region.",
      image: timeline1,
      location: "Across Telangana",
    },
    {
      year: "Folk Heritage",
      title: "Music, Dance & Storytelling",
      description:
        "Folk dances, ballads, puppetry and community celebrations flourished, preserving local history and passing traditions from one generation to the next.",
      image: timeline2,
      location: "Warangal • Karimnagar • Nalgonda",
    },
    {
      year: "A Cultural Crossroads",
      title: "Traditions Come Together",
      description:
        "Centuries of cultural exchange enriched Telangana with new languages, music, crafts and artistic styles, creating the distinctive Deccani identity celebrated today.",
      image: timeline3,
      location: "Hyderabad",
    },
    {
      year: "Festivals and Traditions",
      title: "Celebrating Community",
      description:
        "Festivals such as Bathukamma and Bonalu, alongside classical and folk arts, became enduring symbols of Telangana's vibrant cultural spirit and shared identity.",
      image: timeline4,
      location: "Hyderabad • Siddipet • Warangal",
    },
    {
      year: "Present Day",
      title: "Preserving a Living Heritage",
      description:
        "Today, Telangana continues to celebrate its cultural richness through festivals, literature, crafts, music, dance and community traditions while embracing a modern global outlook.",
      image: timeline5,
      location: "Across Telangana",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Culture of Telangana"
        subtitle="Tradition, Festivals & the Spirit of the Deccan"
        description="From vibrant festivals and ancient folk traditions to celebrated arts, crafts and the cosmopolitan spirit of Hyderabad, Telangana's culture is a living expression of the Deccan's rich heritage."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Cultural Journey Through Telangana"
        text1="Telangana's culture has evolved through centuries of community traditions, artistic expression and cultural exchange. Every festival, dance, craft and language reflects the resilience and creativity of its people."
        text2="Whether experiencing Bathukamma, watching Perini Shivatandavam, listening to folk music or admiring handcrafted textiles, visitors discover a heritage that continues to thrive across the state."
      />

      <CategoryTimeline
        title="The Evolution of Telangana's Culture"
        events={timeline}
      />

      <ItemGrid
        title="Cultural Icons"
        items={items}
      />

      <Gallery
        tag="CULTURAL SHOWCASE"
        title="Beyond the Celebrations"
        description="Beyond its famous festivals, Telangana's heritage lives through folk dances, colourful handicrafts, traditional attire, storytelling, temple rituals, music, local fairs and centuries-old artistic traditions."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;