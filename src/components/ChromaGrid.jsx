import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

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

    return () => window.removeEventListener("resize", updateCenter);
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
        "--cols": columns,
        "--rows": rows,
        "--r": `${radius}px`,
      }}
      onPointerMove={handlePointerMove}
    >
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(item.url)}
          style={{
            "--card-border":
              item.borderColor || "#d4a017",

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

            <div className="chroma-spotlight" />
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
    </section>
  );
};

export default ChromaGrid;
