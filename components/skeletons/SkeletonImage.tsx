"use client";

import { ImageOff } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface SkeletonImageProps {
  src: string | StaticImageData;
  alt?: string;
  sizes?: string;
  width: number;
  height: number;
  className?: string;
  classForContainer?: string;
  rounded?: string;
  priority?: boolean;
}

export default function SkeletonImage({
  src,
  alt = "",
  sizes = "",
  width,
  height,
  className = "",
  classForContainer = "",
  rounded = "rounded",
  priority = false,
}: SkeletonImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${classForContainer} w-full`}
    >
      {/* Skeleton - visible saat loading */}
      {isLoading && !isError && (
        <div className="absolute inset-0 bg-secondary overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}

      {/* Error fallback */}
      {isError ? (
        <div className="flex flex-col items-center justify-center bg-secondary text-muted-foreground p-0 w-full h-full text-center">
          <ImageOff size={60} className="text-muted-foreground/50" />
          <p className="text-sm mt-2">No Image</p>
        </div>
      ) : (
        /* Actual image */
        <Image
          src={src}
          alt={alt}
          width={width}
          sizes={sizes}
          priority={priority}
          height={height}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsError(true);
            setIsLoading(false);
          }}
          className={`${className} ${rounded} transition-opacity duration-300 w-full ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
