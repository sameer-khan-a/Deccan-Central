import Navbar from "../../../components/Navbar";
import CategoryHero from "../../../components/Categories/CategoryHero";
import CategoryOverview from "../../../components/Categories/CategoryOverview";
import CategoryTimeline from "../../../components/Categories/CategoryTimeline";
import ItemGrid from "../../../components/Categories/ItemGrid";
import Gallery from "../../../components/Categories/Gallery";
import Footer from "../../../components/Footer";

import heroImg from "../../../assets/states/tamil-nadu/categories/architecture/hero.jpg";

// Timeline Images
import timeline1 from "../../../assets/states/tamil-nadu/categories/architecture/mahabalipuram.jpg";
import timeline2 from "../../../assets/states/tamil-nadu/categories/architecture/brihadeeswara-temple.jpg";
import timeline3 from "../../../assets/states/tamil-nadu/categories/architecture/chidambaram-temple.jpg";
import timeline4 from "../../../assets/states/tamil-nadu/categories/architecture/meenakshi-temple.jpg";
import timeline5 from "../../../assets/states/tamil-nadu/categories/architecture/vellore-fort.jpg";

import { items, gallery } from "../../../data/tamilnadu/architecture";

function Architecture() {

  const timeline = [
    {
      year: "7th - 9th Century",
      title: "The Birth of Dravidian Architecture",
      description:
        "The Pallavas pioneered South India's transition from rock-cut shrines to magnificent structural temples, establishing the foundations of the Dravidian architectural tradition.",
      image: timeline1,
      location: "Mahabalipuram • Kanchipuram",
    },
    {
      year: "10th - 13th Century",
      title: "The Chola Golden Age",
      description:
        "The Cholas perfected monumental granite construction, creating soaring vimanas, masterfully sculpted temples and engineering marvels that became symbols of imperial power.",
      image: timeline2,
      location: "Thanjavur • Gangaikonda Cholapuram",
    },
    {
      year: "13th - 15th Century",
      title: "Temple Cities Flourish",
      description:
        "Sacred temple complexes expanded into vibrant urban centres, with larger mandapas, elaborate gateways and richly carved halls becoming defining features of Tamil architecture.",
      image: timeline3,
      location: "Chidambaram • Srirangam",
    },
    {
      year: "16th - 17th Century",
      title: "The Age of Towering Gopurams",
      description:
        "The Vijayanagara and Nayak rulers transformed temple skylines with colossal gopurams, thousand-pillared halls and vast corridors that remain among the world's greatest architectural achievements.",
      image: timeline4,
      location: "Madurai • Rameswaram",
    },
    {
      year: "Present Day",
      title: "A Living Architectural Legacy",
      description:
        "UNESCO monuments, active temple cities, majestic forts and historic palaces continue to preserve Tamil Nadu's extraordinary architectural heritage while inspiring millions of visitors each year.",
      image: timeline5,
      location: "Across Tamil Nadu",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".category-hero" />

      <CategoryHero
        title="Architecture of Tamil Nadu"
        subtitle="Where Stone Became Eternal"
        description="From Pallava rock-cut monuments and imperial Chola temples to towering gopurams, sacred temple cities and formidable forts, Tamil Nadu preserves one of the world's greatest architectural traditions."
        image={heroImg}
      />

      <CategoryOverview
        heading="The Evolution of Dravidian Architecture"
        text1="For more than fifteen centuries, Tamil Nadu has stood at the forefront of South Indian architecture. Master builders transformed stone into enduring works of art, continuously refining the Dravidian style through innovation, devotion and extraordinary craftsmanship."
        text2="From the rock-cut monuments of Mahabalipuram to the towering temple cities of Madurai and Rameswaram, every monument reflects a remarkable journey of engineering, artistry and spiritual expression."

      />

      <CategoryTimeline
        title="The Evolution of Tamil Architecture"
        events={timeline}
      />

      <ItemGrid
        title="Architectural Icons"
        items={items}
      />

      <Gallery
        tag="ARCHITECTURAL SHOWCASE"
        title="Beyond the Great Temples"
        description="Beyond its world-famous monuments, Tamil Nadu's architectural heritage flourishes through UNESCO temples, royal palaces, granite forts, sacred corridors, intricately carved mandapas and living temple cities that continue to define the landscape of southern India."
        images={gallery}
      />

      <Footer />
    </>
  );
}

export default Architecture;