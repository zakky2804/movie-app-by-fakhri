"use client";

// import MobileMenu from "./MobileMenu";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

const LazyWrapper = ({ children }: React.PropsWithChildren) => {
  return <MobileMenu NavbarMenu={children} />;
};

export default LazyWrapper;
