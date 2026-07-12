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
      year: "Ancient Telangana",
      title: "Living Alongside Nature",
      description:
        "For centuries, Telangana's forests, rivers and rocky landscapes sustained local communities. Wildlife was deeply connected to daily life, spiritual traditions and the natural rhythms of the Deccan.",
      image: timeline1,
      location: "Across Telangana",
    },
    {
      year: "Medieval Era",
      title: "Forests of Kingdoms",
      description:
        "Expansive forests served as natural frontiers, hunting grounds and important habitats for tigers, leopards, sloth bears, deer and countless bird species while tribal communities continued to live in harmony with nature.",
      image: timeline2,
      location: "Nallamala • Godavari Valley",
    },
    {
      year: "20th Century",
      title: "Protecting the Wilderness",
      description:
        "As forests faced growing pressure from development and human activity, wildlife sanctuaries and protected forests were established to preserve Telangana's unique ecosystems.",
      image: timeline3,
      location: "Eturnagaram • Pocharam • Kinnerasani",
    },
    {
      year: "Conservation Era",
      title: "A New Hope for Wildlife",
      description:
        "Tiger reserves, scientific conservation programmes and habitat restoration strengthened efforts to protect endangered species and restore ecological balance across the state.",
      image: timeline4,
      location: "Amrabad • Kawal",
    },
    {
      year: "Present Day",
      title: "A Shared Future",
      description:
        "Today, Telangana embraces responsible eco-tourism, wildlife research and community-led conservation, ensuring its forests remain thriving homes for wildlife and meaningful destinations for future generations.",
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
        description="Beyond its historic cities and mighty forts lies a landscape of rugged forests, winding rivers and ancient hills where tigers, leopards, sloth bears and countless other species continue to thrive."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Wild Heart of Telangana"
        text1="Telangana's relationship with wildlife has evolved over centuries, from communities living in harmony with nature to modern conservation efforts protecting some of the Deccan's richest ecosystems. Its forests, wetlands and river valleys remain vital refuges for an extraordinary diversity of life."
        text2="From the tiger-filled forests of Amrabad and Kawal to the wetlands, bird habitats and protected sanctuaries scattered across the state, Telangana continues to preserve its remarkable natural heritage while encouraging sustainable exploration."
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
        description="Explore Telangana's remarkable natural heritage through tiger reserves, wildlife sanctuaries, dense forests, tranquil wetlands, majestic birds and thriving ecosystems that showcase the extraordinary biodiversity of the Deccan."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;