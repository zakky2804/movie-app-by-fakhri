"use client";

import { Equal, X } from "lucide-react";
import { useEffect, useState } from "react";

const MobileMenu = ({ NavbarMenu }: { NavbarMenu: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickNavLinks = (e: React.MouseEvent<HTMLUListElement>): void => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    if (anchor) setIsOpen(false);
  };

  if (!mounted) {
    return (
      <button className="md:hidden">
        <Equal size={28} className="text-title-text/90" />
      </button>
    );
  }

  return (
    <>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X size={28} className="text-title-text/90 " />
        ) : (
          <Equal size={28} className="text-title-text/90" />
        )}
      </button>

      <div
        className={`w-full h-96 absolute top-14 right-0 px-4 md:hidden transition duration-300 transform-gpu contain-strict ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-50 pointer-events-none"
        }`}
      >
        <ul
          onClick={handleClickNavLinks}
          className="text-center space-y-5 py-8 text-lg lg:text-xl font-semibold text-title-text/80 bg-secondary rounded transition-transform ease-in-out h-full flex flex-col items-center justify-center transform-gpu"
        >
          {NavbarMenu}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
