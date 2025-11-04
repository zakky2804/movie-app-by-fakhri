import Image from "next/image";
import Logo from "@/assets/logo.png";
import NavbarMenu from "./NavbarMenu";
import LazyWrapper from "./LazyWrapper";

export const dynamic = "force-static";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 mx-auto container">
      <div className="flex justify-between items-center px-4 py-4 sm:px-8 sm:py-8  relative">
        <div className="flex items-center gap-2 ">
          <div className="aspect-square w-8 sm:w-10 bg-secondary">
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="Logo"
              sizes="(max-width: 640px) 40px, 32px"
              className="aspect-square w-8 sm:w-10"
            />
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-title-text">
            FMovies
          </p>
        </div>

        <ul className="hidden md:flex items-center gap-x-8 text-lg lg:text-xl font-semibold text-title-text/80">
          <NavbarMenu />
        </ul>

        <LazyWrapper>
          <NavbarMenu />
        </LazyWrapper>
      </div>
    </nav>
  );
};

export default Navbar;
