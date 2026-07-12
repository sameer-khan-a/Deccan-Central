import { useNavigate } from "react-router-dom";

import heroVideo from "../assets/homepage.mp4";
import searchData from "../data/searchData";
import { FaDice } from "react-icons/fa";

import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleStartExploring = () => {
    const randomItem =
      searchData[Math.floor(Math.random() * searchData.length)];

    navigate(randomItem.path);
  };

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="overlay">
        <div className="hero-content">
          <p className="tagline">
            DISCOVER THE DECCAN
          </p>

          <h1>
            Explore South India,
            <br />
            One Story At A Time.
          </h1>

          <p className="description">
            Discover kingdoms, forts, temples,
            mosques, cultures, food, wildlife,
            and forgotten places across the Deccan.
          </p>

    <button
  className="explore-cta"
  onClick={handleStartExploring}
>
  <FaDice />
  <span>Start Exploring</span>
</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;