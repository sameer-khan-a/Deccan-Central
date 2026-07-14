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
      year: "230 BCE-220 CE",
      title: "The Satavahana Empire",
      description:
        "The Satavahanas established one of the earliest great empires of the Deccan, promoting long-distance trade, Buddhism and urban development. Their rule transformed much of the Deccan, with Telangana emerging as an important centre of regional influence.",
      image: timeline1,
      location: "Kotilingala • Dhulikatta",
    },
    {
      year: "420-624 CE",
      title: "The Vishnukundins",
      description:
        "The Vishnukundins strengthened regional administration through temple construction, efficient governance and the patronage of Telugu literature and culture. Their reign helped shape Telangana's political identity while encouraging artistic and religious development.",
      image: timeline2,
      location: "Indrapalanagara • Nalgonda",
    },
    {
      year: "1163-1323 CE",
      title: "The Kakatiya Dynasty",
      description:
        "From their capital at Warangal, the Kakatiyas unified much of the Telugu-speaking region through military strength and visionary administration. Their engineering innovations, irrigation systems and remarkable temples remain enduring symbols of Telangana.",
      image: timeline3,
      location: "Warangal • Hanamkonda",
    },
    {
      year: "1518-1687 CE",
      title: "The Qutb Shahis",
      description:
        "The Qutb Shahis transformed Golconda into a prosperous kingdom before establishing Hyderabad as their magnificent capital. Their patronage fostered architecture, literature, commerce and cultural diversity throughout the eastern Deccan.",
      image: timeline4,
      location: "Golconda • Hyderabad",
    },
    {
      year: "1724-1948 CE",
      title: "The Asaf Jahi Dynasty",
      description:
        "The Asaf Jahi Nizams governed one of India's largest princely states, presiding over an era of modernisation, education and public works. Their magnificent palaces, institutions and civic landmarks continue to define Hyderabad's historic character.",
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
        description="From the ancient Satavahanas and the mighty Kakatiyas to the royal courts of Golconda and Hyderabad, Telangana's kingdoms shaped the political, cultural and architectural history of the Deccan for over two millennia."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Dynasties That Shaped Telangana"
        text1="For more than two thousand years, Telangana was ruled by powerful kingdoms that controlled trade routes, built fortified capitals and fostered remarkable achievements in governance, architecture, commerce and the arts across the Deccan."
        text2="Their enduring legacy survives through ancient capitals, magnificent forts, temples, palaces and historic monuments that continue to define Telangana's identity while preserving one of the Deccan's richest royal traditions."
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
        description="From ancient capitals and hill forts to royal palaces, temples, inscriptions and remarkable archaeological sites, Telangana's kingdoms left behind an extraordinary legacy that continues to shape the state's cultural and historical landscape."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;