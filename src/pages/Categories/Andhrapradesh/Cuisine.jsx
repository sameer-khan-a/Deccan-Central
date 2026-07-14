import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/cuisine/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/andhrapradesh/categories/cuisine/pesarattu.jpg";
import timeline2 from "../../../assets/states/andhrapradesh/categories/cuisine/pulihora.jpg";
import timeline3 from "../../../assets/states/andhrapradesh/categories/cuisine/chepala-pulusu.jpg";
import timeline4 from "../../../assets/states/andhrapradesh/categories/cuisine/gongura.jpg";
import timeline5 from "../../../assets/states/andhrapradesh/categories/cuisine/andhra-meals.avif";

import { items, gallery } from "../../../data/andhrapradesh/cuisine";

function Cuisine() {
  const timeline = [
    {
      year: "300 BCE-600 CE",
      title: "The Rice Bowl of the Telugu Land",
      description:
        "The fertile Krishna and Godavari river basins nurtured one of South India's oldest culinary traditions. Rice, lentils, millets and seasonal produce established the foundations of Andhra cuisine while supporting prosperous farming communities for centuries.",
      image: timeline1,
      location: "Krishna • Godavari Delta",
    },
    {
      year: "600-1300 CE",
      title: "Sacred Flavours & Community Feasts",
      description:
        "Temple kitchens preserved timeless vegetarian recipes, festive meals and prasadam traditions that shaped everyday cooking across Andhra Pradesh. Their culinary practices inspired generations of households while strengthening regional food culture and community celebrations.",
      image: timeline2,
      location: "Tirupati • Srikalahasti • Draksharamam",
    },
    {
      year: "1300-1700 CE",
      title: "The Taste of the Eastern Coast",
      description:
        "Fishing communities and maritime trade enriched Andhra's cuisine with fresh seafood, aromatic spices, tamarind and distinctive cooking techniques. These coastal influences blended seamlessly with local traditions, creating flavours unique to the Bay of Bengal.",
      image: timeline3,
      location: "Visakhapatnam • Kakinada • Nellore",
    },
    {
      year: "1700-1950 CE",
      title: "Regional Flavours Take Shape",
      description:
        "Regional favourites including Gongura Pachadi, Avakaya, Ulavacharu and Pootharekulu became defining symbols of Andhra Pradesh's culinary identity. Their bold flavours and time-honoured preparation continue to distinguish Telugu cuisine across countless generations.",
      image: timeline4,
      location: "Guntur • East Godavari • Across Andhra",
    },
    {
      year: "1950-Present",
      title: "A Feast of Tradition",
      description:
        "Today, Andhra cuisine celebrates centuries-old family recipes alongside contemporary dining experiences, preserving hearty meals, festive sweets, coastal delicacies and regional specialities while continuing to inspire one of India's most vibrant culinary traditions.",
      image: timeline5,
      location: "Across Andhra Pradesh",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Cuisine of Andhra Pradesh"
        subtitle="Bold Flavours of the Telugu Coast"
        description="From fertile river valleys and sacred temple kitchens to fiery curries, legendary pickles and coastal seafood, Andhra Pradesh's cuisine reflects centuries of bold flavours, regional diversity and enduring culinary tradition."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Across Andhra"
        text1="Shaped by fertile river valleys, a long coastline and centuries of agricultural prosperity, Andhra Pradesh has developed one of India's most distinctive culinary traditions. Every region contributes unique ingredients, bold flavours and treasured family recipes."
        text2="Whether tasting the tang of Gongura, the spice of Avakaya, the freshness of coastal seafood or the sweetness of Pootharekulu, every meal reflects the remarkable heritage and enduring traditions of Telugu cuisine."
      />

      <CategoryTimeline
        title="The Evolution of Andhra Cuisine"
        events={timeline}
      />

      <ItemGrid
        title="Signature Dishes"
        items={items}
      />

      <Gallery
        tag="CULINARY SHOWCASE"
        title="Beyond the Signature Dishes"
        description="Beyond its famous recipes, Andhra Pradesh's culinary heritage thrives through traditional banana leaf feasts, fiery pickles, coastal seafood, comforting lentil dishes, festive sweets, bustling street food and cherished family recipes passed through generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;