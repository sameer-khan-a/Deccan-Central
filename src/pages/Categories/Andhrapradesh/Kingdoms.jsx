import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/kingdoms/hero.jpeg";

// Timeline Images
import timeline1 from "../../../assets/states/andhrapradesh/categories/kingdoms/satavahana.avif";
import timeline2 from "../../../assets/states/andhrapradesh/categories/kingdoms/ikshvaku.jpg";
import timeline3 from "../../../assets/states/andhrapradesh/categories/kingdoms/eastern-chalukyas.jpg";
import timeline4 from "../../../assets/states/andhrapradesh/categories/kingdoms/kakatiya.jpg";
import timeline5 from "../../../assets/states/andhrapradesh/categories/kingdoms/vijayanagara.jpg";

import { items, gallery } from "../../../data/andhrapradesh/kingdoms";

function Kingdoms() {
  const timeline = [
    {
      year: "230 BCE-220 CE",
      title: "The Satavahana Empire",
      description:
        "The Satavahanas established one of the earliest great empires of the Deccan, transforming Andhra into a thriving centre of commerce, Buddhism and urban development. Their prosperous trade networks connected the Telugu region with the wider Indian Ocean world.",
      image: timeline1,
      location: "Amaravati • Dharanikota",
    },
    {
      year: "225-325 CE",
      title: "The Ikshvakus",
      description:
        "The Ikshvakus ruled the fertile Krishna Valley while elevating Nagarjunakonda into one of India's foremost centres of Buddhism and learning. Their patronage of monasteries, stupas and sculpture enriched Andhra's artistic and spiritual heritage.",
      image: timeline2,
      location: "Nagarjunakonda",
    },
    {
      year: "624-1076 CE",
      title: "The Eastern Chalukyas",
      description:
        "Ruling from Vengi for more than four centuries, the Eastern Chalukyas strengthened regional administration while encouraging Telugu literature, temple architecture and cultural exchange. Their reign laid enduring foundations for Andhra's historical identity.",
      image: timeline3,
      location: "Vengi • Rajamahendravaram",
    },
    {
      year: "1163-1323 CE",
      title: "The Age of Telugu Kingdoms",
      description:
        "The Kakatiyas and other Telugu dynasties strengthened irrigation, fortified cities and regional administration across the eastern Deccan. Their patronage of temples, literature and engineering fostered lasting political unity and cultural prosperity.",
      image: timeline4,
      location: "Warangal • Coastal Andhra",
    },
    {
      year: "1336-1646 CE",
      title: "The Vijayanagara Empire",
      description:
        "The Vijayanagara Empire transformed Rayalaseema into a major imperial centre through magnificent temples, fortified capitals and prosperous trade. Its enduring artistic, architectural and military achievements remain among Andhra Pradesh's greatest historical legacies.",
      image: timeline5,
      location: "Lepakshi • Chandragiri • Penukonda",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Kingdoms of Andhra Pradesh"
        subtitle="Where Great Telugu Dynasties Flourished"
        description="From the pioneering Satavahanas and Buddhist Ikshvakus to the Eastern Chalukyas, powerful Telugu kingdoms and the mighty Vijayanagara Empire, Andhra Pradesh has shaped the political, cultural and artistic history of the Deccan for over two millennia."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Dynasties That Shaped Andhra Pradesh"
        text1="For more than two thousand years, Andhra Pradesh witnessed the rise of influential kingdoms that controlled prosperous trade routes, nurtured renowned centres of learning and transformed the Telugu region through remarkable achievements in governance, architecture and literature."
        text2="Their enduring legacy survives through ancient capitals, sacred temples, royal forts, inscriptions and remarkable archaeological monuments that continue to define Andhra Pradesh while preserving the rich heritage of the Telugu-speaking world."
      />

      <CategoryTimeline
        title="The Rise of Andhra's Kingdoms"
        events={timeline}
      />

      <ItemGrid
        title="The Great Dynasties"
        items={items}
      />

      <Gallery
        tag="ROYAL LEGACY"
        title="Beyond the Great Empires"
        description="Beyond its celebrated dynasties, Andhra Pradesh preserves a remarkable royal heritage through ancient capitals, Buddhist monuments, medieval Telugu kingdoms, magnificent forts, sacred temples and enduring archaeological treasures that shaped the history of the eastern Deccan."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;