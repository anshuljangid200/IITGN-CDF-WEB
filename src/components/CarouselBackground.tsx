import { useEffect, useState } from "react";

const TRANSITION_MS = 1600;

const images: string[] = [
  "/Carousel-1.jpg",
  "/Carousel-2.jpg",
  "/Carousel-3.jpg",
  "/Carousel-4.jpg",
  "/Carousel-5.jpg",
  "/Carousel-6.jpg",
  "/Carousel-7.jpg",
];

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
    } else {
      mediaQuery.addListener(updatePreference);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updatePreference);
      } else {
        mediaQuery.removeListener(updatePreference);
      }
    };
  }, []);

  return prefersReducedMotion;
};

const CarouselBackground = () => {
  const [index, setIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((prev) => {
        setPreviousIndex(prev);
        return (prev + 1) % images.length;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setPreviousIndex(index);
    }
  }, [prefersReducedMotion, index]);

  const visibleIndices = previousIndex === index ? [index] : [previousIndex, index];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
      {visibleIndices.map((imageIndex, layerIndex) => {
        const isActive = layerIndex === visibleIndices.length - 1;

        return (
          <img
            key={`${imageIndex}-${layerIndex}`}
            src={images[imageIndex]}
            alt="Campus highlight"
            loading={isActive ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: prefersReducedMotion ? "0ms" : `${TRANSITION_MS}ms` }}
          />
        );
      })}
    </div>
  );
};

export default CarouselBackground;
