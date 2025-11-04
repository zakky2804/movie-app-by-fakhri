"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMenu = () => {
  const pathname = usePathname();

  interface ILink {
    href: string;
    label: string;
  }
  const links: ILink[] = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies" },
    { href: "/tv", label: "Tv Series" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`hover:border-b-2 hover:border-primary hover:text-title-text ${
              pathname === link.href
                ? "text-white border-b-2 border-primary"
                : "text-title-text/80"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarMenu;
