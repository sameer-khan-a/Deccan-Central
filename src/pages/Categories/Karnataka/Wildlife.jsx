import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/karnataka/categories/wildlife/hero.jpg";

import sacredImg from "../../../assets/states/karnataka/categories/wildlife/nagarhole.jpg";
import tigerImg from "../../../assets/states/karnataka/categories/wildlife/tiger.jpg";
import ghatsImg from "../../../assets/states/karnataka/categories/wildlife/kudremukh.jpg";
import conservationImg from "../../../assets/states/karnataka/categories/wildlife/bandipur.webp";
import modernImg from "../../../assets/states/karnataka/categories/wildlife/elephant.jpg";

import { items, gallery } from "../../../data/karnataka/wildlife";

function Wildlife() {
  const timeline = [
    {
      year: "Ancient Karnataka",
      title: "Living With the Wild",
      description:
        "Dense forests, mighty rivers and the Western Ghats shaped everyday life. Wildlife was deeply woven into local beliefs, folklore and sacred traditions, with many communities living alongside elephants, big cats and countless other species.",
      image: sacredImg,
      location: "Western Ghats • Malnad",
    },
    {
      year: "Medieval Karnataka",
      title: "Forests of Kingdoms & Communities",
      description:
        "Royal hunting grounds, sacred groves and village forests coexisted across Karnataka. While forests supplied timber, medicine and food, many landscapes remained protected through religious customs and community stewardship.",
      image: tigerImg,
      location: "Across Karnataka",
    },
    {
      year: "19th - 20th Century",
      title: "From Exploitation to Protection",
      description:
        "Rapid deforestation, expanding settlements and commercial forestry threatened wildlife habitats, creating the need for organised conservation and the protection of Karnataka's remaining forests.",
      image: ghatsImg,
      location: "Western Ghats",
    },
    {
      year: "Modern Conservation",
      title: "Protecting a Natural Heritage",
      description:
        "National parks, tiger reserves, elephant corridors and wildlife sanctuaries were established to restore habitats and safeguard Karnataka's extraordinary biodiversity for future generations.",
      image: conservationImg,
      location: "Bandipur • Nagarhole • Bhadra",
    },
    {
      year: "Present Day",
      title: "A Global Biodiversity Hotspot",
      description:
        "Today, Karnataka is recognised as one of India's premier wildlife destinations, where thriving tiger populations, elephant landscapes, endemic species and the forests of the Western Ghats continue to inspire conservation and eco-tourism.",
      image: modernImg,
      location: "Across Karnataka",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Wildlife of Karnataka"
        subtitle="Where Nature Thrives"
        description="From the evergreen forests of the Western Ghats to the tiger reserves of the Deccan, Karnataka is home to one of India's richest and most spectacular natural landscapes."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Land Shaped by Nature"
        text1="Stretching from the lush Western Ghats to the dry forests of the Deccan Plateau, Karnataka shelters an extraordinary variety of ecosystems that support tigers, elephants, leopards, hornbills, king cobras and thousands of other remarkable species."
        text2="For centuries, people and wildlife have shared these landscapes. Today, national parks, wildlife sanctuaries and conservation initiatives continue to protect one of India's greatest natural treasures."
      />

      <CategoryTimeline
        title="The Evolution of Karnataka's Relationship with Wildlife"
        events={timeline}
      />

      <ItemGrid
        title="Wildlife Destinations"
        items={items}
      />

      <Gallery
        tag="WILDLIFE SHOWCASE"
        title="Beyond the Famous Parks"
        description="Beyond its celebrated tiger reserves, Karnataka is home to lush rainforests, elephant corridors, wetlands, bird sanctuaries, endemic species and hidden wildernesses that make the state one of India's greatest biodiversity hotspots."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;