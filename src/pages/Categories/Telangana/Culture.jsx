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
      year: "Before 900 CE",
      title: "The Roots of Telangana's Identity",
      description:
        "Early communities developed distinctive customs, folk beliefs, seasonal festivals and oral storytelling traditions that formed the cultural foundations of Telangana. These enduring practices shaped regional identity while preserving generations of shared knowledge and heritage.",
      image: timeline1,
      location: "Across Telangana",
    },
    {
      year: "1100-1500 CE",
      title: "Music, Dance & Storytelling",
      description:
        "Folk dances, heroic ballads, puppetry and vibrant community celebrations flourished across Telangana for centuries. These living traditions preserved local history while passing artistic expression, cultural values and collective memory from one generation to the next.",
      image: timeline2,
      location: "Warangal • Karimnagar • Nalgonda",
    },
    {
      year: "1518-1700 CE",
      title: "Traditions Come Together",
      description:
        "Centuries of cultural exchange introduced new languages, music, crafts and architectural influences throughout Telangana. This remarkable fusion of traditions created the distinctive Deccani identity that continues to define the region's cultural character today.",
      image: timeline3,
      location: "Hyderabad",
    },
    {
      year: "1724-1948 CE",
      title: "Celebrating Community",
      description:
        "Festivals such as Bathukamma and Bonalu gained wider public prominence alongside classical and folk traditions, strengthening community bonds across Telangana. Their colourful celebrations became enduring symbols of regional pride, spirituality and shared cultural identity.",
      image: timeline4,
      location: "Hyderabad • Siddipet • Warangal",
    },
    {
      year: "1948-Present",
      title: "Preserving a Living Heritage",
      description:
        "Today, Telangana proudly celebrates its cultural richness through festivals, literature, crafts, music, dance and community traditions. While embracing modern influences, the state continues to preserve the heritage that defines its unique identity.",
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
        description="From vibrant festivals and ancient folk traditions to celebrated arts, crafts and the cosmopolitan spirit of Hyderabad, Telangana preserves a living cultural heritage shaped by centuries of creativity, diversity and community."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Cultural Journey Through Telangana"
        text1="Telangana's culture has evolved through centuries of community traditions, artistic expression and cultural exchange. Every festival, dance, craft, language and ritual reflects the resilience, creativity and enduring spirit of its people."
        text2="Whether experiencing Bathukamma, witnessing Perini Shivatandavam, listening to folk music or admiring handcrafted textiles, visitors discover a remarkable cultural heritage that continues to flourish across every region of the state."
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
        description="Beyond its celebrated festivals, Telangana's cultural heritage thrives through vibrant folk dances, colourful handicrafts, traditional attire, storytelling, temple rituals, local fairs, music and centuries-old artistic traditions preserved across generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Culture;