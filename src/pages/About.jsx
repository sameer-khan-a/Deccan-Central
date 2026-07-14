import {
  Crown,
  Landmark,
  Drama,
  Trees,
} from "lucide-react";

import Navbar from "../components/Navbar";
import AboutHero from "../components/About/AboutHero";
import AboutMission from "../components/About/AboutMission";
import AboutStats from "../components/About/AboutStats";
import AboutJourney from "../components/About/AboutJourney";
import AboutQuote from "../components/About/AboutQuote";
import Footer from "../components/Footer";

import heroImg from "../assets/about/hero.jpeg";

function About() {
  const pillars = [
    {
      title: "Kingdoms",
      description:
        "Explore the rise and fall of powerful dynasties that shaped the Deccan for over two thousand years.",
      icon: <Crown size={32} strokeWidth={1.8} />,
    },
    {
      title: "Architecture",
      description:
        "Marvel at temples, forts, palaces and engineering masterpieces that continue to stand the test of time.",
      icon: <Landmark size={32} strokeWidth={1.8} />,
    },
    {
      title: "Culture",
      description:
        "Celebrate the traditions, literature, festivals, music and languages that make every region unique.",
      icon: <Drama size={32} strokeWidth={1.8} />,
    },
    {
      title: "Wildlife",
      description:
        "Discover lush forests, national parks, rare wildlife and the breathtaking biodiversity of the Deccan.",
      icon: <Trees size={32} strokeWidth={1.8} />,
    },
  ];
const stats = [
  {
    value: 5,
    suffix: "",
    label: "States",
  },
  {
    value: 3000,
    suffix: "+",
    label: "Years of History",
  },
  {
    value: 50,
    suffix: "+",
    label: "Major Dynasties",
  },
  {
    value: 1500,
    suffix: "+",
    label: "Historic Monuments",
  },
];

  const steps = [
    {
      title: "Choose a State",
      description:
        "Begin your journey through Karnataka, Kerala, Andhra Pradesh, Telangana or Tamil Nadu.",
    },
    {
      title: "Explore Categories",
      description:
        "Dive into kingdoms, architecture, culture, cuisine, wildlife and remarkable destinations.",
    },
    {
      title: "Discover Stories",
      description:
        "Every monument, dynasty and tradition has a fascinating story waiting to be uncovered.",
    },
    {
      title: "Plan Your Adventure",
      description:
        "Turn inspiration into real experiences by discovering incredible places across the Deccan.",
    },
    {
      title: "Share the Legacy",
      description:
        "Help preserve and celebrate the history and culture of one of India's greatest regions.",
    },
  ];

  return (
    <>
      <Navbar heroSelector=".about-hero" />

      <AboutHero
        title="Rediscover the Deccan"
        tagline="More Than a Region"
        description="Deccan Central is a modern digital archive dedicated to exploring the history, architecture, culture, wildlife and extraordinary places that define one of the world's oldest living civilizations."
        image={heroImg}
      />

      <AboutMission
        heading="Why We Exist"
        text1="The Deccan shaped kingdoms, languages, architecture and traditions that influenced millions, yet much of its story remains scattered across textbooks, forgotten ruins and isolated archives."
        text2="Deccan Central was created to bring those stories together through immersive visuals, carefully curated information and meaningful exploration, making the history of the Deccan accessible to everyone."
        pillars={pillars}
      />

      <AboutStats
        heading="The Scale of the Deccan"
        description="Every number represents centuries of history, culture and heritage waiting to be explored."
        stats={stats}
      />

      <AboutJourney
        heading="Every Journey Starts With Curiosity"
        steps={steps}
      />

      <AboutQuote
        quote="History isn't behind us. It's waiting to be explored."
        buttonText="Start Exploring"
        buttonLink="/"
      />

      <Footer />
    </>
  );
}

export default About;