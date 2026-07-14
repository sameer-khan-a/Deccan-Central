import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/tamil-nadu/categories/wildlife/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/tamil-nadu/categories/wildlife/anamalai.jpg";
import timeline2 from "../../../assets/states/tamil-nadu/categories/wildlife/mudumalai.avif";
import timeline3 from "../../../assets/states/tamil-nadu/categories/wildlife/vedanthangal.jpg";
import timeline4 from "../../../assets/states/tamil-nadu/categories/wildlife/gulf-of-mannar.jpg";
import timeline5 from "../../../assets/states/tamil-nadu/categories/wildlife/bengal-tiger.jpg";

import { items, gallery } from "../../../data/tamilnadu/wildlife";

function Wildlife() {

  const timeline = [
    {
      year: "Before 1800 CE",
      title: "Living Alongside Nature",
      description:
        "For centuries, Tamil communities shared the forests, mountains, wetlands and coastlines with wildlife. Animals featured prominently in literature, folklore, temple traditions and everyday life.",
      image: timeline1,
      location: "Western Ghats • Eastern Ghats",
    },
    {
      year: "1855-1972 CE",
      title: "Protecting Forest Landscapes",
      description:
        "Growing awareness of habitat loss encouraged the protection of key forests, ensuring safe refuges for elephants, tigers, leopards and countless other native species.",
      image: timeline2,
      location: "Mudumalai • Nilgiri Biosphere",
    },
    {
      year: "1936-1980 CE",
      title: "Guardians of Migratory Birds",
      description:
        "Tamil Nadu became a pioneer in bird conservation as wetlands and lakes were preserved, providing seasonal refuge for thousands of migratory birds from across Asia.",
      image: timeline3,
      location: "Vedanthangal • Point Calimere",
    },
    {
      year: "1980-2000 CE",
      title: "Protecting Marine Life",
      description:
        "Conservation expanded beyond forests to include coral reefs, seagrass meadows and coastal ecosystems, safeguarding dugongs, sea turtles, dolphins and countless marine species.",
      image: timeline4,
      location: "Gulf of Mannar",
    },
    {
      year: "2000-Present",
      title: "A Shared Future",
      description:
        "Today, wildlife conservation combines scientific research, eco-tourism and community participation to protect Tamil Nadu's extraordinary biodiversity for generations to come.",
      image: timeline5,
      location: "Across Tamil Nadu",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Wildlife of Tamil Nadu"
        subtitle="Where Mountains Meet the Sea"
        description="From the misty Western Ghats and thriving tiger reserves to coastal wetlands and vibrant coral reefs, Tamil Nadu protects one of India's richest and most diverse natural landscapes."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Journey Through Tamil Nadu's Wild Landscapes"
        text1="Tamil Nadu's relationship with wildlife has evolved over centuries, from communities living alongside forests and mountains to modern conservation efforts protecting some of India's most important terrestrial and marine ecosystems."
        text2="Today, national parks, bird sanctuaries, tiger reserves and marine protected areas preserve elephants, tigers, Nilgiri tahrs, dugongs, migratory birds and countless other species that define the state's remarkable biodiversity."
      />

      <CategoryTimeline
        title="Tamil Nadu's Relationship with Wildlife"
        events={timeline}
      />

      <ItemGrid
        title="Protected Landscapes"
        items={items}
      />

      <Gallery
        tag="WILDLIFE SHOWCASE"
        title="Into the Wild"
        description="Explore Tamil Nadu's extraordinary biodiversity through mountain forests, lush tiger reserves, tranquil wetlands, vibrant coral reefs and the remarkable wildlife that has flourished alongside one of India's oldest civilizations."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;