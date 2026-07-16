import { useMemo } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import TiltedCard from "../components/TiltedCard";
import ChromaGrid from "../components/ChromaGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { highlights } from "../data/highlights";

import karImg from "../assets/Karnataka.jpg";
import telImg from "../assets/Telangana.jpg";
import apImg from "../assets/andhra.jpg";
import tnImg from "../assets/Tamilnadu.jpg";
import kerImg from "../assets/Kerala.jpg";

import "./Home.css";

function Home() {
const states = [
  {
    title: "Karnataka",
    tagline: "THE LAND OF EMPIRES",
    image: karImg,
    path: "/karnataka",
  },
  {
    title: "Telangana",
    tagline: "THE HEART OF THE DECCAN",
    image: telImg,
    path: "/telangana",
  },
  {
    title: "Andhra Pradesh",
    tagline: "THE SACRED EASTERN GATEWAY",
    image: apImg,
    path: "/andhra-pradesh",
  },
  {
    title: "Tamil Nadu",
    tagline: "THE ETERNAL TEMPLE KINGDOM",
    image: tnImg,
    path: "/tamil-nadu",
  },
  {
    title: "Kerala",
    tagline: "GOD'S OWN COUNTRY",
    image: kerImg,
    path: "/kerala",
  },
];
  

  const featuredHighlights = useMemo(
    () =>
      [...highlights]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6),
    []
  );

  return (
    <>
      <Navbar />
      <Hero />

      <section className="regions-section">
        <div className="section-header">
          <p className="section-tag">EXPLORE THE DECCAN</p>

          <h2>Choose Your Journey</h2>

          <p>
            Explore the kingdoms, cultures, monuments,
            landscapes and stories that shaped South India.
          </p>
        </div>

        <div className="regions-grid">
          {states.map((state, index) => (
            <Link
              key={state.title}
              to={state.path}
              className={
                index === states.length - 1
                  ? "full-width-card state-link"
                  : "portrait-card state-link"
              }
            >
              <TiltedCard
                imageSrc={state.image}
                altText={state.title}
                captionText={state.title}
                containerHeight={
                  index === states.length - 1
                    ? "380px"
                    : "460px"
                }
                containerWidth="100%"
                imageHeight={
                  index === states.length - 1
                    ? "380px"
                    : "460px"
                }
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.04}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
overlayContent={
  <div className="card-content">

 

    <h3 className="card-state">
      {state.title}
    </h3>

    <span className="card-tagline">
      {state.tagline}
    </span>

  </div>
}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="highlights-section">
        <div className="section-header">
          <p className="section-tag">DISCOVER THE DECCAN</p>

          <h2>Beyond the Map</h2>

          <p>
            Dive into kingdoms, monuments, cuisine,
            performing arts, sacred places and cultural
            icons that shaped the Deccan.
          </p>
        </div>

        <div className="highlights-grid">
          <ChromaGrid
            items={featuredHighlights}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
