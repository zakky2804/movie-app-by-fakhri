"use client";

import useEmblaCarousel from "embla-carousel-react";

const Slider = ({ children }: React.PropsWithChildren) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
  });

  return (
    <div className="relative ">
      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {children}
      </div>
    </div>
  );
};

export default Slider;
