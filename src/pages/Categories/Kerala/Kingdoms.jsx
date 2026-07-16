import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/kerala/Categories/kingdoms/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/kerala/Categories/kingdoms/chera.jpg";
import timeline2 from "../../../assets/states/kerala/Categories/kingdoms/kolathunadu.jpg";
import timeline3 from "../../../assets/states/kerala/Categories/kingdoms/kozhikode.jpg";
import timeline4 from "../../../assets/states/kerala/Categories/kingdoms/travancore.jpg";
import timeline5 from "../../../assets/states/kerala/Categories/kingdoms/cochin.jpg";

import { items, gallery } from "../../../data/kerala/kingdoms";

function Kingdoms() {
  const timeline = [
    {
      year: "300 BCE-12th CE",
      title: "The Chera Kingdom",
      description:
        "The Cheras established one of South India's earliest great kingdoms, controlling the spice-rich Malabar Coast and building prosperous maritime connections with Rome, Arabia, China and the wider Indian Ocean.",
      image: timeline1,
      location: "Kodungallur • Central Kerala",
    },
    {
      year: "1124-1498 CE",
      title: "Rise of Regional Kingdoms",
      description:
        "Following the decline of the Cheras, powerful kingdoms such as Kolathunadu, Venad and Valluvanad emerged, each shaping Kerala's regional politics, trade and cultural identity.",
      image: timeline2,
      location: "North & Central Kerala",
    },
    {
      year: "1498-1766 CE",
      title: "The Zamorins of Kozhikode",
      description:
        "The Zamorins transformed Kozhikode into one of the world's greatest spice ports, welcoming merchants from Arabia, China and later Europe while dominating Indian Ocean commerce.",
      image: timeline3,
      location: "Kozhikode (Calicut)",
    },
    {
      year: "1729-1949 CE",
      title: "The Rise of Travancore",
      description:
        "Under Marthanda Varma, Travancore unified much of southern Kerala through military reforms, efficient administration and lasting patronage of temples, education and public works.",
      image: timeline4,
      location: "Thiruvananthapuram",
    },
    {
      year: "1949-Present",
      title: "Kingdoms That Shaped Kerala",
      description:
        "Although the princely states eventually became part of the modern state of Kerala, their forts, palaces, temples, ports and cultural traditions continue to define the state's historical identity.",
      image: timeline5,
      location: "Across Kerala",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Kingdoms of Kerala"
        subtitle="Spice Kingdoms of the Malabar Coast"
        description="From the ancient Cheras to the powerful rulers of Travancore, Kerala's kingdoms transformed the Malabar Coast into one of the world's greatest centres of maritime trade, diplomacy and cultural exchange."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Rise of Kerala's Great Kingdoms"
        text1="For over two thousand years, Kerala's rulers controlled the lucrative spice trade and built thriving ports that connected the Malabar Coast with Rome, Arabia, China and Europe. Their wealth fostered remarkable achievements in governance, architecture and culture."
        text2="From the mighty Cheras and the regional kingdoms that followed to the Zamorins of Kozhikode and the reforming rulers of Travancore, each dynasty contributed to the unique historical identity that defines Kerala today."
      />

      <CategoryTimeline
        title="The Evolution of Kerala's Kingdoms"
        events={timeline}
      />

      <ItemGrid
        title="The Great Kingdoms"
        items={items}
      />

      <Gallery
        tag="ROYAL HERITAGE"
        title="Beyond the Great Kingdoms"
        description="Beyond Kerala's best-known dynasties stood influential regional kingdoms including Venad, Cochin, Valluvanad, Thekkumkur, Vadakkumkur and the Arakkal Sultanate, each contributing to the state's remarkable legacy of trade, diplomacy, warfare and cultural diversity."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;
