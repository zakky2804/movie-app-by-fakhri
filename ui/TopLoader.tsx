"use client";

import dynamic from "next/dynamic";
const NextTopLoader = dynamic(() => import("nextjs-toploader"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/ui/ScrollToTop"), {
  ssr: false,
});

const TopLoader = () => {
  return (
    <>
      <NextTopLoader
        color="oklch(50.5% 0.213 27.518)"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <ScrollToTop />
    </>
  );
};

export default TopLoader;
