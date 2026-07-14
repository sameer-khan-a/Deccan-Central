import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import heroImg from "../../../assets/states/telangana/categories/wildlife/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/telangana/categories/wildlife/pocharam.jpg";
import timeline2 from "../../../assets/states/telangana/categories/wildlife/kawal.jpg";
import timeline3 from "../../../assets/states/telangana/categories/wildlife/eturnagaram.jpg";
import timeline4 from "../../../assets/states/telangana/categories/wildlife/amrabad.jpg";
import timeline5 from "../../../assets/states/telangana/categories/wildlife/blackbuck.jpg";

import { items, gallery } from "../../../data/telangana/wildlife";

function Wildlife() {
  const timeline = [
    {
      year: "Before 900 CE",
      title: "Living Alongside Nature",
      description:
        "For centuries, Telangana's forests, rivers and rocky landscapes sustained local communities across the Deccan. Wildlife was closely woven into daily life, spiritual traditions and seasonal rhythms, creating a lasting relationship between people and nature.",
      image: timeline1,
      location: "Across Telangana",
    },
    {
      year: "900-1800 CE",
      title: "Forests of Kingdoms",
      description:
        "Expansive forests served as natural frontiers, royal hunting grounds and thriving habitats for tigers, leopards, sloth bears, deer and countless bird species. Tribal communities preserved traditional ecological knowledge while living alongside these wilderness landscapes.",
      image: timeline2,
      location: "Nallamala • Godavari Valley",
    },
    {
      year: "1900-1972 CE",
      title: "Protecting the Wilderness",
      description:
        "Rapid development, expanding settlements and increasing human activity placed growing pressure on Telangana's forests and wildlife. These challenges highlighted the need for protected areas dedicated to conserving the state's remarkable natural ecosystems.",
      image: timeline3,
      location: "Eturnagaram • Pocharam • Kinnerasani",
    },
    {
      year: "1972-2000 CE",
      title: "A New Hope for Wildlife",
      description:
        "Tiger reserves, wildlife sanctuaries and scientific conservation programmes strengthened efforts to restore habitats and protect endangered species. These initiatives laid the foundation for Telangana's modern approach to biodiversity conservation and environmental stewardship.",
      image: timeline4,
      location: "Amrabad • Kawal",
    },
    {
      year: "2000-Present",
      title: "A Shared Future",
      description:
        "Today, Telangana promotes responsible eco-tourism, wildlife research and community-led conservation while safeguarding its forests for future generations. These ongoing efforts continue to protect the state's extraordinary biodiversity and unique natural heritage.",
      image: timeline5,
      location: "Across Telangana",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Wildlife of Telangana"
        subtitle="Forests, Tigers & the Wild Deccan"
        description="Beyond its historic cities and mighty forts lies a landscape of rugged forests, winding rivers and ancient hills where tigers, leopards, sloth bears and countless native species continue to thrive."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Wild Heart of Telangana"
        text1="Telangana's relationship with wildlife has evolved through centuries of coexistence, conservation and ecological change. Its forests, wetlands and river valleys continue to shelter tigers, leopards, birds and countless other species across the Deccan."
        text2="From the tiger reserves of Amrabad and Kawal to tranquil wetlands, bird habitats and protected sanctuaries, Telangana preserves an extraordinary natural heritage while encouraging scientific research, responsible tourism and long-term environmental conservation."
      />

      <CategoryTimeline
        title="Telangana's Relationship with Wildlife"
        events={timeline}
      />

      <ItemGrid
        title="Protected Landscapes"
        items={items}
      />

      <Gallery
        tag="WILDLIFE SHOWCASE"
        title="Into the Wild"
        description="Beyond its protected reserves, Telangana's natural heritage thrives through dense forests, tranquil wetlands, thriving bird habitats, rugged hills, native wildlife and diverse ecosystems that showcase the remarkable biodiversity of the Deccan."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;