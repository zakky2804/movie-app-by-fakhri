"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef } from "react";

const HeroSlider2 = ({ children }: React.PropsWithChildren) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    startAutoScroll();

    emblaApi.on("pointerDown", stopAutoScroll);
    emblaApi.on("pointerUp", startAutoScroll);

    return () => stopAutoScroll();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container slides */}
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default HeroSlider2;
