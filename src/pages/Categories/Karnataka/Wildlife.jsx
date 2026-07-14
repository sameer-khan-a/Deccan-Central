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
      year: "Prehistory-900 CE",
      title: "Living With the Wild",
      description:
        "Dense forests, mighty rivers and the Western Ghats shaped everyday life across Karnataka. Wildlife was deeply woven into local beliefs, folklore and sacred traditions, enabling many communities to coexist with elephants, big cats and countless native species.",
      image: sacredImg,
      location: "Western Ghats • Malnad",
    },
    {
      year: "900-1800 CE",
      title: "Forests of Kingdoms & Communities",
      description:
        "Royal hunting grounds, sacred groves and village forests coexisted throughout Karnataka for centuries. While forests supplied timber, medicine and food, many forests remained protected through religious customs and strong community stewardship.",
      image: tigerImg,
      location: "Across Karnataka",
    },
    {
      year: "1800-1972 CE",
      title: "From Exploitation to Protection",
      description:
        "Rapid deforestation, expanding settlements and commercial forestry placed immense pressure on wildlife habitats across Karnataka. These growing environmental challenges highlighted the urgent need for organized wildlife conservation and long-term habitat protection.",
      image: ghatsImg,
      location: "Western Ghats",
    },
    {
      year: "1972-2000 CE",
      title: "Protecting a Natural Heritage",
      description:
        "National parks, tiger reserves, elephant corridors and wildlife sanctuaries were established to restore fragile ecosystems. These conservation initiatives safeguarded Karnataka's extraordinary biodiversity while strengthening scientific research and environmental awareness.",
      image: conservationImg,
      location: "Bandipur • Nagarhole • Bhadra",
    },
    {
      year: "2000-Present",
      title: "A Global Biodiversity Hotspot",
      description:
        "Today, Karnataka ranks among India's premier wildlife destinations, where thriving tiger populations, elephant landscapes, endemic species and the forests of the Western Ghats continue to inspire conservation, research and responsible eco-tourism.",
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
        description="From the evergreen forests of the Western Ghats to the celebrated tiger reserves of the Deccan, Karnataka protects one of India's richest natural landscapes, home to extraordinary biodiversity and remarkable wildlife."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Land Shaped by Nature"
        text1="Stretching from the lush Western Ghats to the dry forests of the Deccan Plateau, Karnataka shelters an extraordinary range of ecosystems supporting tigers, elephants, leopards, hornbills, king cobras and thousands of remarkable native species."
        text2="For centuries, people and wildlife have coexisted across these landscapes through tradition and conservation. Today, national parks, wildlife sanctuaries and dedicated protection efforts preserve one of India's greatest natural treasures for future generations."
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
        description="Beyond its celebrated tiger reserves, Karnataka is home to lush rainforests, elephant corridors, bird sanctuaries, pristine wetlands, endemic wildlife and hidden wildernesses that make the state one of India's greatest biodiversity hotspots."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;