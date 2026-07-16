import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/kerala/Categories/wildlife/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/kerala/Categories/wildlife/asian-elephant.jpg";
import timeline2 from "../../../assets/states/kerala/Categories/wildlife/periyar.jpg";
import timeline3 from "../../../assets/states/kerala/Categories/wildlife/silent-valley.jpg";
import timeline4 from "../../../assets/states/kerala/Categories/wildlife/eravikulam.webp";
import timeline5 from "../../../assets/states/kerala/Categories/wildlife/great-hornbill.jpg";

import { items, gallery } from "../../../data/kerala/wildlife";

function Wildlife() {

  const timeline = [
    {
      year: "Before 19th CE",
      title: "Living with the Forests",
      description:
        "For centuries, Kerala's communities coexisted with the rainforests of the Western Ghats. Wildlife featured in folklore, temple traditions and indigenous knowledge, fostering a deep respect for nature.",
      image: timeline1,
      location: "Western Ghats • Kerala",
    },
    {
      year: "1894-1972 CE",
      title: "Protecting Natural Landscapes",
      description:
        "Protected reserves were established to safeguard elephants, tigers, endemic species and the fragile ecosystems of the Western Ghats.",
      image: timeline2,
      location: "Periyar • Thekkady",
    },
    {
      year: "1973-1985 CE",
      title: "Saving the Rainforests",
      description:
        "Public awareness and scientific research led to landmark conservation victories, including the protection of Silent Valley, preserving one of India's last untouched tropical rainforests.",
      image: timeline3,
      location: "Silent Valley",
    },
    {
      year: "1985-2000 CE",
      title: "Safeguarding Endemic Species",
      description:
        "National parks and wildlife sanctuaries strengthened conservation efforts, protecting endangered animals such as the Nilgiri Tahr, lion-tailed macaque and countless endemic birds and reptiles.",
      image: timeline4,
      location: "Eravikulam • Wayanad",
    },
    {
      year: "2000-Present",
      title: "A Shared Future",
      description:
        "Today, Kerala combines scientific conservation, eco-tourism and community participation to protect one of the world's richest biodiversity hotspots while encouraging sustainable coexistence between people and wildlife.",
      image: timeline5,
      location: "Across Kerala",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Wildlife of Kerala"
        subtitle="Rainforests of the Western Ghats"
        description="From ancient rainforests and mist-covered mountains to thriving river valleys, Kerala protects some of India's richest ecosystems and the extraordinary wildlife of the Western Ghats."
        image={heroImg}
      />

      <CategoryOverview
        heading="A Timeless Bond with Nature"
        text1="Kerala's relationship with wildlife has evolved over centuries, from communities living in harmony with forests to pioneering conservation initiatives that safeguard one of the world's most important biodiversity hotspots."
        text2="Today, the state's national parks, wildlife sanctuaries and tiger reserves protect elephants, Nilgiri Tahrs, lion-tailed macaques, Great Hornbills and countless endemic species while promoting responsible eco-tourism and scientific research."
      />

      <CategoryTimeline
        title="Kerala's Relationship with Wildlife"
        events={timeline}
      />

      <ItemGrid
        title="Premier Wildlife Destinations"
        items={items}
      />

      <Gallery
        tag="WILDLIFE SHOWCASE"
        title="Icons of the Western Ghats"
        description="Kerala's extraordinary biodiversity extends beyond its protected forests through endemic mammals, colourful birds, ancient reptiles and rainforest specialists that have made the Western Ghats one of Earth's most remarkable natural treasures."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Wildlife;
