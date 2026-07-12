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
      year: "Ancient Origins",
      title: "The Rice Bowl of the Telugu Land",
      description:
        "The fertile Krishna and Godavari river basins nurtured one of South India's oldest food traditions. Rice, lentils, millets and seasonal produce became the foundation of Andhra cuisine.",
      image: timeline1,
      location: "Krishna • Godavari Delta",
    },
    {
      year: "Temple Traditions",
      title: "Sacred Flavours & Community Feasts",
      description:
        "Temple kitchens preserved timeless vegetarian recipes, festive meals and prasadam traditions, influencing generations of Andhra households and regional cuisine.",
      image: timeline2,
      location: "Tirupati • Srikalahasti • Draksharamam",
    },
    {
      year: "Coastal Influence",
      title: "The Taste of the Eastern Coast",
      description:
        "Fishing communities and maritime trade enriched Andhra's cuisine with fresh seafood, tamarind, aromatic spices and bold cooking techniques unique to the Bay of Bengal coast.",
      image: timeline3,
      location: "Visakhapatnam • Kakinada • Nellore",
    },
    {
      year: "Regional Specialities",
      title: "The Rise of Iconic Andhra Flavours",
      description:
        "Beloved dishes such as Gongura Pachadi, Avakaya, Ulavacharu and Pootharekulu emerged as enduring symbols of Andhra Pradesh's bold and diverse culinary heritage.",
      image: timeline4,
      location: "Guntur • East Godavari • Across Andhra",
    },
    {
      year: "Present Day",
      title: "A Feast of Tradition",
      description:
        "Today, Andhra cuisine blends centuries-old family recipes with modern dining, celebrating hearty meals, festive sweets, coastal delicacies and one of India's most vibrant food cultures.",
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
        description="From fragrant rice fields and sacred temple kitchens to fiery curries, legendary pickles and coastal seafood, Andhra Pradesh's cuisine is a celebration of bold flavours and timeless tradition."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Across Andhra"
        text1="Shaped by fertile river valleys, a long coastline and centuries of agricultural prosperity, Andhra Pradesh has developed one of India's most distinctive culinary traditions. Every region contributes its own flavours, ingredients and recipes."
        text2="Whether it's the tang of Gongura, the spice of Avakaya, the freshness of coastal seafood or the sweetness of Pootharekulu, every meal tells the story of the Telugu people's rich culinary heritage."
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
        description="Beyond its famous recipes, Andhra Pradesh's food heritage comes alive through traditional banana leaf feasts, fiery pickles, coastal seafood, comforting lentil dishes, festive sweets, bustling street food and cherished family recipes passed down through generations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;