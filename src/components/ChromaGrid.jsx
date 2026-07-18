import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

function ChromaCard({
  item,
  isTouchDevice,
  handleCardMove,
}) {
  const cardRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!isTouchDevice || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isTouchDevice]);

  const isClickable = item.link && item.link !== "#";

  return (
    <article
      ref={cardRef}
      className={`chroma-card ${
        isTouchDevice && active ? "active" : ""
      }`}
      onMouseMove={!isTouchDevice ? handleCardMove : undefined}
      onClick={() => {
        if (isClickable) {
          window.open(item.link, "_blank", "noopener,noreferrer");
        }
      }}
      style={{
        "--card-border": item.borderColor || "#d4a017",
        cursor: isClickable ? "pointer" : "default",
      }}
    >
      <div className="chroma-img-wrapper">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
        <div className="chroma-spotlight" />
      </div>

      <footer className="chroma-info">
        <h3 className="name">{item.title}</h3>

        {item.state && (
          <span className="state">{item.state}</span>
        )}

        {item.handle && (
          <span className="handle">{item.handle}</span>
        )}

        {item.subtitle && (
          <p className="role">{item.subtitle}</p>
        )}

        {item.location && (
          <span className="location">{item.location}</span>
        )}
      </footer>
    </article>
  );
}

const ChromaGrid = ({
  items = [],
  className = "",
  radius = 280,
  columns = 3,
  rows = 2,
  damping = 0.35,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouchDevice) return;

    const grid = rootRef.current;
    if (!grid) return;

    const setX = gsap.quickSetter(grid, "--x", "px");
    const setY = gsap.quickSetter(grid, "--y", "px");

    const center = () => {
      const { width, height } = grid.getBoundingClientRect();
      setX(width / 2);
      setY(height / 2);
    };

    center();
    window.addEventListener("resize", center);

    const move = (e) => {
      const rect = grid.getBoundingClientRect();

      gsap.to(grid, {
        "--x": e.clientX - rect.left,
        "--y": e.clientY - rect.top,
        duration: damping,
        ease,
        overwrite: true,
      });
    };

    grid.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("resize", center);
      grid.removeEventListener("pointermove", move);
    };
  }, [damping, ease, isTouchDevice]);

  const handleCardMove = (e) => {
    if (isTouchDevice) return;

    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <section
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--cols": columns,
        "--rows": rows,
        "--r": `${radius}px`,
      }}
    >
      {items.map((item, index) => (
        <ChromaCard
          key={`${item.title}-${index}`}
          item={item}
          isTouchDevice={isTouchDevice}
          handleCardMove={handleCardMove}
        />
      ))}
    </section>
  );
};

export default ChromaGrid;
