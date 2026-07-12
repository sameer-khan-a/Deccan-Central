import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/andhrapradesh/categories/kingdoms/hero.jpg";

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
      year: "2nd Century BCE - 3rd Century CE",
      title: "The Satavahana Empire",
      description:
        "One of the earliest great empires of the Deccan, the Satavahanas transformed Andhra into a thriving centre of trade, Buddhism and urban development while linking India with the Roman world.",
      image: timeline1,
      location: "Amaravati • Dharanikota",
    },
    {
      year: "3rd - 4th Century",
      title: "The Ikshvakus",
      description:
        "The Ikshvakus ruled the Krishna Valley and elevated Nagarjunakonda into one of India's foremost Buddhist and educational centres through monumental monasteries and stupas.",
      image: timeline2,
      location: "Nagarjunakonda",
    },
    {
      year: "7th - 12th Century",
      title: "The Eastern Chalukyas",
      description:
        "Ruling from Vengi for over four centuries, the Eastern Chalukyas fostered Telugu literature, temple architecture and stable governance that profoundly shaped Andhra's identity.",
      image: timeline3,
      location: "Vengi • Rajamahendravaram",
    },
    {
      year: "12th - 14th Century",
      title: "The Age of Telugu Kingdoms",
      description:
        "Regional dynasties, including the Kakatiyas and later Telugu rulers, strengthened irrigation, fortified cities, temple patronage and the cultural unity of the Telugu-speaking world.",
      image: timeline4,
      location: "Warangal • Coastal Andhra",
    },
    {
      year: "14th - 17th Century",
      title: "The Vijayanagara Empire",
      description:
        "The Vijayanagara Empire transformed Rayalaseema into a centre of imperial power, leaving behind magnificent temples, forts, prosperous towns and a lasting artistic legacy.",
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
        description="From the pioneering Satavahanas and Buddhist Ikshvakus to the Eastern Chalukyas, Telugu kingdoms and the mighty Vijayanagara Empire, Andhra Pradesh has stood at the heart of Deccan history for over two thousand years."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Dynasties That Shaped Andhra Pradesh"
        text1="Across more than two millennia, Andhra Pradesh witnessed the rise of influential kingdoms that commanded prosperous trade routes, nurtured great centres of learning and transformed the Telugu region through remarkable achievements in governance, architecture and literature."
        text2="Their enduring legacy survives through ancient capitals, sacred temples, royal forts, inscriptions and cultural traditions that continue to define Andhra Pradesh and the wider Telugu world."
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
        description="Beyond its best-known dynasties, Andhra Pradesh's royal heritage includes Buddhist kingdoms, regional powers, medieval Telugu rulers and Deccan sultanates that collectively shaped the political, cultural and architectural legacy of the Telugu heartland."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Kingdoms;