import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/kerala/Categories/cuisine/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/kerala/Categories/cuisine/puttu-kadala.jpg";
import timeline2 from "../../../assets/states/kerala/Categories/cuisine/appam-stew.jpeg";
import timeline3 from "../../../assets/states/kerala/Categories/cuisine/malabar-biriyani.jpeg";
import timeline4 from "../../../assets/states/kerala/Categories/cuisine/karimeen-polichathu.JPG";
import timeline5 from "../../../assets/states/kerala/Categories/cuisine/sadya.jpg";

import { items, gallery } from "../../../data/kerala/cuisine";

function Cuisine() {

  const timeline = [
    {
      year: "Before 9th CE",
      title: "The Spice Coast",
      description:
        "Kerala's fertile landscape nurtured rice, coconut, pepper, cardamom and countless spices, creating the foundations of one of the world's oldest and most distinctive culinary traditions.",
      image: timeline1,
      location: "Across Kerala",
    },
    {
      year: "9th-16th CE",
      title: "A Meeting of Culinary Worlds",
      description:
        "Centuries of trade with Romans, Arabs, Chinese and later Europeans introduced new ingredients, cooking techniques and flavours that blended naturally with Kerala's indigenous cuisine.",
      image: timeline2,
      location: "Kochi • Kozhikode • Kollam",
    },
    {
      year: "16th-19th CE",
      title: "The Rise of Malabar Cuisine",
      description:
        "Distinct regional food cultures emerged across Kerala, with the Malabar Coast becoming renowned for aromatic biryanis, pathiri and richly spiced seafood influenced by maritime trade.",
      image: timeline3,
      location: "Kozhikode • Thalassery • Malabar",
    },
    {
      year: "19th-20th CE",
      title: "Nature Shapes Every Meal",
      description:
        "Fresh seafood, pearl spot fish, coconut milk and locally grown spices came to define Kerala's cuisine, reflecting the state's close relationship with its rivers, backwaters and Arabian Sea coastline.",
      image: timeline4,
      location: "Alappuzha • Kumarakom • Kochi",
    },
    {
      year: "1947-Present",
      title: "A Timeless Culinary Legacy",
      description:
        "Today, Kerala celebrates its diverse food heritage through festive Sadya feasts, traditional breakfasts, seafood delicacies and regional specialties that continue to delight people around the world.",
      image: timeline5,
      location: "Across Kerala",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Cuisine of Kerala"
        subtitle="Spices, Coconut & The Coast"
        description="From grand Sadya feasts and fragrant Malabar biryanis to coconut-rich curries, fresh seafood and beloved tea-time snacks, Kerala's cuisine reflects centuries of trade, tropical abundance and regional tradition."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Culinary Journey Along the Spice Coast"
        text1="Kerala's cuisine has evolved through its fertile landscapes, abundant waterways and centuries of maritime trade. Coconut, spices, rice and seafood remain the heart of a food culture shaped by nature and enriched by global influences."
        text2="Whether enjoying a traditional Sadya, tasting the flavours of Malabar, savouring Karimeen Pollichathu or starting the day with Appam and Stew, every meal tells the story of Kerala's rich culinary heritage."
      />

      <CategoryTimeline
        title="The Evolution of Kerala's Cuisine"
        events={timeline}
      />

      <ItemGrid
        title="Signature Dishes"
        items={items}
      />

      <Gallery
        tag="CULINARY HERITAGE"
        title="Beyond the Signature Dishes"
        description="Kerala's culinary heritage extends far beyond its iconic dishes through wholesome breakfasts, festive desserts, coastal seafood, traditional snacks and regional specialties that celebrate the remarkable diversity of the Spice Coast."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Cuisine;
