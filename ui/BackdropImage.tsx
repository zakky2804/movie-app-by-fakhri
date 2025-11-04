"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface BackdropImageProps {
  backdropPath: string | StaticImageData;
  alt: string;
  priority?: boolean;
}

export default function BackdropImage({
  backdropPath,
  alt,
  priority = true,
}: BackdropImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // const backdropUrl = backdropPath
  //   ? `https://image.tmdb.org/t/p/original/${backdropPath}`
  //   : null;

  // if (!backdropUrl || hasError) {
  //   return <BackdropFallback />;
  // }

  return (
    <>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-secondary via-secondary/50 to-background animate-pulse" />
      )}

      {/* Actual image */}
      {hasError ? (
        <BackdropFallback />
      ) : (
        <Image
          src={backdropPath}
          fill
          alt={alt}
          className={`object-cover -z-20 brightness-50 transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          priority={priority}
          quality={75}
          sizes="100vw"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background -z-10" />
    </>
  );
}

// Fallback component
function BackdropFallback() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-secondary/80 via-secondary/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background -z-10" />
    </>
  );
}
