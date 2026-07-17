import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "400px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);

  const [active, setActive] = useState(false);
  const [lastY, setLastY] = useState(0);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);

  const scale = useSpring(1, springValues);

  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  useEffect(() => {
    if (!isTouchDevice || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);

        if (entry.isIntersecting) {
          scale.set(scaleOnHover);
        } else {
          scale.set(1);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isTouchDevice, scale, scaleOnHover]);

  function handleMouse(e) {
    if (isTouchDevice || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set(
      (offsetY / (rect.height / 2)) * -rotateAmplitude
    );

    rotateY.set(
      (offsetX / (rect.width / 2)) * rotateAmplitude
    );

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (isTouchDevice) return;

    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    if (isTouchDevice) return;

    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && !isTouchDevice && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="tilted-card-overlay">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={
            isTouchDevice
              ? undefined
              : {
                  x,
                  y,
                  rotate: rotateFigcaption,
                }
          }
          animate={
            isTouchDevice
              ? {
                  opacity: active ? 1 : 0,
                  y: active ? 0 : 20,
                }
              : {
                  opacity: scale.get() > 1 ? 1 : 0,
                }
          }
          transition={{
            duration: 0.35,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
