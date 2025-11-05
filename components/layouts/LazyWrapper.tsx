"use client";

import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const LazyWrapper = ({ children }: React.PropsWithChildren) => {
  return <MobileMenu NavbarMenu={children} />;
};

export default LazyWrapper;
