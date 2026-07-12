import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/telangana/categories/kingdoms/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/telangana/categories/kingdoms/satavahana.webp";
import timeline2 from "../../../assets/states/telangana/categories/kingdoms/vishnukundin.avif";
import timeline3 from "../../../assets/states/telangana/categories/kingdoms/kakatiya.jpg";
import timeline4 from "../../../assets/states/telangana/categories/kingdoms/qutb-shahi.webp";
import timeline5 from "../../../assets/states/telangana/categories/kingdoms/asaf-jahi.jpg";

import { items, gallery } from "../../../data/telangana/kingdoms";

function Kingdoms() {

  const timeline = [
    {
      year: "1st BCE - 3rd CE",
      title: "The Satavahana Empire",
      description:
        "One of the earliest great Deccan empires, the Satavahanas promoted trade, Buddhism and urban development while establishing Telangana as a vital centre of commerce.",
      image: timeline1,
      location: "Kotilingala • Dhulikatta",
    },
    {
      year: "5th - 7th Century",
      title: "The Vishnukundins",
      description:
        "The Vishnukundins strengthened regional rule through temple construction, administrative reforms and the patronage of early Telugu culture across much of Telangana.",
      image: timeline2,
      location: "Indrapalanagara • Nalgonda",
    },
    {
      year: "12th - 14th Century",
      title: "The Kakatiya Dynasty",
      description:
        "From their capital at Warangal, the Kakatiyas unified the Telugu-speaking region and became renowned for their engineering, irrigation systems and magnificent temple architecture.",
      image: timeline3,
      location: "Warangal • Hanamkonda",
    },
    {
      year: "16th - 17th Century",
      title: "The Qutb Shahis",
      description:
        "The rulers of Golconda founded Hyderabad and transformed it into one of the Deccan's greatest capitals, celebrated for its prosperity, architecture and cultural diversity.",
      image: timeline4,
      location: "Golconda • Hyderabad",
    },
    {
      year: "18th - 20th Century",
      title: "The Asaf Jahi Dynasty",
      description:
        "The Nizams governed one of India's largest princely states, leaving behind a lasting legacy of palaces, educational institutions, public works and Hyderabad's iconic skyline.",
      image: timeline5,
      location: "Hyderabad",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Kingdoms of Telangana"
        subtitle="Empires of the Deccan"
        description="From the ancient Satavahanas and the mighty Kakatiyas to the royal courts of Golconda and Hyderabad, Telangana's kingdoms shaped the political, cultural and architectural history of the Deccan."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Dynasties That Shaped Telangana"
        text1="For more than two millennia, Telangana was ruled by powerful kingdoms that controlled trade routes, built fortified capitals and fostered remarkable achievements in governance, architecture and the arts."
        text2="Their enduring legacy lives on through ancient capitals, magnificent forts, temples, palaces and historic monuments that continue to define Telangana's identity and its place in Deccan history."

      />

      <CategoryTimeline
        title="The Rise of Telangana's Kingdoms"
        events={timeline}
      />

      <ItemGrid
        title="Great Dynasties"
        items={items}
      />

      <Gallery
        tag="ROYAL LEGACY"
        title="Beyond the Kingdoms"
        description="From ancient capitals and hill forts to royal palaces, temples, inscriptions and enduring archaeological sites, Telangana's kingdoms left behind a remarkable legacy that continues to shape the state's cultural landscape."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;