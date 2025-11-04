"use client";

import Image from "next/image";
import { useState } from "react";
import FooterImage from "@/assets/footer-bg.png";

export default function ImageFooter() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) return <FooterFallback />;

  return (
    <>
      {/* Skeleton / loading shimmer */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/50 to-background animate-pulse -z-20" />
      )}

      {/* main image */}
      <Image
        src={FooterImage}
        alt="Footer background"
        fill
        className={`object-cover transition-opacity duration-700 ease-out -z-20 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        quality={75}
        priority
        sizes="100vw"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />

      {/* Overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none -z-10" />
    </>
  );
}

function FooterFallback() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-background -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background -z-10" />
    </>
  );
}
