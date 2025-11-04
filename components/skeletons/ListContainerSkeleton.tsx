"use client";

import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

interface ListContainerSkeletonProps {
  title: string;
}

const ListContainerSkeleton = ({ title }: ListContainerSkeletonProps) => {
  const [skeletonCount, setSkeletonCount] = useState(6); // Default

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width < 640) setSkeletonCount(3); // Mobile
      else if (width < 768) setSkeletonCount(5); // Tablet
      else if (width < 1024) setSkeletonCount(7); // Small desktop
      else if (width < 1280) setSkeletonCount(9); // Desktop
      else setSkeletonCount(12); // XL screen
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="animate-pulse pt-0 pb-5 px-4 sm:px-8 sm:pt-2 sm:pb-5 md:pb-[35px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold text-stone-50">{title}</h2>
        <button className="rounded-full border border-border px-4 py-2 font-medium font-Outfit text-stone-100 hover:bg-primary duration-200">
          View more
        </button>
      </div>

      {/* List Card Skeletons */}
      <div className="flex gap-x-2 overflow-x-hidden">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default ListContainerSkeleton;
