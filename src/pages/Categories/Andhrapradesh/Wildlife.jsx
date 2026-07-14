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
import timeline4 from "../../../assets/states/andhrapradesh/categories/wildlife/rollapadu.jpeg";
import timeline5 from "../../../assets/states/andhrapradesh/categories/wildlife/bengal-tiger.jpg";

import { items, gallery } from "../../../data/andhrapradesh/wildlife";

function Wildlife() {
  const timeline = [
    {
      year: "300 BCE-900 CE",
      title: "Living with the Wild",
      description:
        "For centuries, the forests, rivers and coastal wetlands of Andhra Pradesh sustained local communities across the Telugu region. Wildlife remained closely woven into daily life, spiritual traditions and the natural rhythms of the Eastern Ghats.",
      image: timeline1,
      location: "Papikonda • Godavari Valley",
    },
    {
      year: "900-1700 CE",
      title: "Forests, Hills & Sacred Landscapes",
      description:
        "Communities throughout the Eastern Ghats lived alongside thriving forests while protecting sacred groves and natural habitats. These remarkable landscapes sheltered leopards, sloth bears, deer, native birds and countless other species for centuries.",
      image: timeline2,
      location: "Sri Venkateswara • Eastern Ghats",
    },
    {
      year: "1900-1970 CE",
      title: "Protecting Fragile Ecosystems",
      description:
        "Growing awareness of habitat loss and environmental change encouraged the creation of protected forests, mangrove reserves and wildlife sanctuaries. These conservation efforts safeguarded Andhra Pradesh's unique ecosystems and vulnerable native wildlife.",
      image: timeline3,
      location: "Coringa • Godavari Delta",
    },
    {
      year: "1970-2000 CE",
      title: "Saving Species & Habitats",
      description:
        "National parks, grassland reserves and scientific conservation programmes strengthened efforts to protect endangered wildlife and restore natural habitats. These initiatives secured important refuges for blackbuck, fishing cats, migratory birds and many native species.",
      image: timeline4,
      location: "Rollapadu • Across Andhra Pradesh",
    },
    {
      year: "2000-Present",
      title: "A Shared Future",
      description:
        "Today, eco-tourism, wildlife research and community participation continue preserving Andhra Pradesh's forests, wetlands and coastlines. Together, these initiatives protect extraordinary biodiversity while promoting responsible conservation for future generations across the state.",
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
        description="From the rugged Eastern Ghats and the mighty Godavari Valley to sprawling mangrove forests and coastal wetlands, Andhra Pradesh protects one of India's richest landscapes for wildlife, biodiversity and ecological diversity."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Andhra's Wild Landscapes"
        text1="Andhra Pradesh's relationship with wildlife has evolved through centuries of coexistence, conservation and ecological change. Today, forests, river valleys, grasslands and mangrove ecosystems continue supporting one of southern India's richest concentrations of biodiversity."
        text2="From the tiger habitats of Papikonda and Sri Venkateswara to the mangroves of Coringa and the grasslands of Rollapadu, protected landscapes preserve remarkable wildlife while encouraging responsible tourism and scientific conservation."
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
        description="Beyond its celebrated reserves, Andhra Pradesh's natural heritage thrives through lush forests, mangrove ecosystems, sprawling grasslands, elusive predators, graceful antelopes, vibrant wetlands and spectacular migratory birdlife across the Telugu landscape."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;