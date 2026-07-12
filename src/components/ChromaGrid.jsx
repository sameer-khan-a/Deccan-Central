import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

const ChromaGrid = ({
  items = [],
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);

  const setX = useRef(null);
  const setY = useRef(null);

  const pos = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const grid = rootRef.current;
    if (!grid) return;

    setX.current = gsap.quickSetter(grid, "--x", "px");
    setY.current = gsap.quickSetter(grid, "--y", "px");

    const updateCenter = () => {
      const { width, height } = grid.getBoundingClientRect();

      pos.current = {
        x: width / 2,
        y: height / 2,
      };

      setX.current(pos.current.x);
      setY.current(pos.current.y);
    };

    updateCenter();

    window.addEventListener("resize", updateCenter);

    return () => {
      window.removeEventListener("resize", updateCenter);
    };
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      overwrite: true,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
    });
  };

  const handlePointerMove = (e) => {
    const rect = rootRef.current.getBoundingClientRect();

    moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );

    gsap.to(fadeRef.current, {
      opacity: 0,
      duration: 0.25,
      overwrite: true,
    });
  };

  const handlePointerLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    card.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  const handleCardClick = (url) => {
    if (!url || url === "#") return;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--r": `${radius}px`,
        "--cols": columns,
        "--rows": rows,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(item.url)}
          style={{
            "--card-border":
              item.borderColor || "transparent",

            "--card-gradient":
              item.gradient ||
              "linear-gradient(145deg, #222, #111)",

            cursor:
              item.url && item.url !== "#"
                ? "pointer"
                : "default",
          }}
        >
          <div className="chroma-img-wrapper">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
            />
          </div>

          <footer className="chroma-info">
            <h3 className="name">
              {item.title}
            </h3>

            {item.state && (
              <span className="state">
                {item.state}
              </span>
            )}

            {item.handle && (
              <span className="handle">
                {item.handle}
              </span>
            )}

            {item.subtitle && (
              <p className="role">
                {item.subtitle}
              </p>
            )}

            {item.location && (
              <span className="location">
                {item.location}
              </span>
            )}
          </footer>
        </article>
      ))}

      <div
        className="chroma-overlay"
        aria-hidden="true"
      />

      <div
        ref={fadeRef}
        className="chroma-fade"
        aria-hidden="true"
      />
    </section>
  );
};

export default ChromaGrid;