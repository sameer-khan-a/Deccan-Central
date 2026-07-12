import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/wildlife/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/andhrapradesh/categories/wildlife/papikonda.webp";
import timeline2 from "../../../assets/states/andhrapradesh/categories/wildlife/sri-venkateshwara.jpeg";
import timeline3 from "../../../assets/states/andhrapradesh/categories/wildlife/coringa.jpg";
import timeline4 from "../../../assets/states/andhrapradesh/categories/wildlife/rollapadu.webp";
import timeline5 from "../../../assets/states/andhrapradesh/categories/wildlife/bengal-tiger.jpg";

import { items, gallery } from "../../../data/andhrapradesh/wildlife";

function Wildlife() {
  const timeline = [
    {
      year: "Ancient Andhra",
      title: "Living with the Wild",
      description:
        "For centuries, the forests, rivers and coastal wetlands of Andhra Pradesh sustained local communities. Wildlife was deeply woven into daily life, spiritual traditions and the rhythms of the Eastern Ghats and the Telugu coast.",
      image: timeline1,
      location: "Papikonda • Godavari Valley",
    },
    {
      year: "Traditional Coexistence",
      title: "Forests, Hills & Sacred Landscapes",
      description:
        "Communities, particularly in the Eastern Ghats, lived alongside wildlife while respecting sacred forests and natural habitats that sheltered leopards, sloth bears, deer and countless bird species.",
      image: timeline2,
      location: "Sri Venkateswara • Eastern Ghats",
    },
    {
      year: "Conservation Begins",
      title: "Protecting Fragile Ecosystems",
      description:
        "Growing awareness of habitat loss led to the creation of protected forests, mangrove reserves and wildlife sanctuaries, safeguarding unique ecosystems and endangered species.",
      image: timeline3,
      location: "Coringa • Godavari Delta",
    },
    {
      year: "Modern Conservation",
      title: "Saving Species & Habitats",
      description:
        "National parks, grassland reserves and scientific conservation programmes now protect iconic wildlife including blackbuck, fishing cats, migratory birds and many other native species.",
      image: timeline4,
      location: "Rollapadu • Across Andhra Pradesh",
    },
    {
      year: "Present Day",
      title: "A Shared Future",
      description:
        "Today, eco-tourism, wildlife research and community participation are helping preserve Andhra Pradesh's forests, wetlands and coastlines, ensuring future generations can continue to experience the state's remarkable biodiversity.",
      image: timeline5,
      location: "Across Andhra Pradesh",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Wildlife of Andhra Pradesh"
        subtitle="Where Forests Meet the Sea"
        description="From the rugged Eastern Ghats and the mighty Godavari Valley to sprawling mangrove forests and coastal wetlands, Andhra Pradesh protects one of India's richest and most diverse natural landscapes."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Andhra's Wild Landscapes"
        text1="Andhra Pradesh's relationship with wildlife has evolved over centuries, from communities living in harmony with forests and rivers to modern conservation efforts protecting fragile ecosystems across the Eastern Ghats and the Bay of Bengal coast."
        text2="Today, national parks, wildlife sanctuaries and mangrove forests safeguard tigers, leopards, blackbuck, fishing cats, migratory birds and countless other species, preserving one of the most diverse natural environments in southern India."
      />

      <CategoryTimeline
        title="Andhra Pradesh's Relationship with Wildlife"
        events={timeline}
      />

      <ItemGrid
        title="Protected Landscapes"
        items={items}
      />

      <Gallery
        tag="WILDLIFE SHOWCASE"
        title="Into the Wild"
        description="Discover Andhra Pradesh's remarkable biodiversity through lush forests, mangrove ecosystems, sprawling grasslands, elusive predators, graceful antelopes and spectacular migratory birdlife that together define the state's extraordinary natural heritage."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;