import Image from "next/image";
import ImageFooter from "@/assets/footer-bg.png";
import Logo from "@/assets/logo.png";
import FooterList from "./FooterList";
import { ListData1, ListData2, ListData3 } from "@/assets/data";
import BackdropImage from "@/ui/BackdropImage";

export const dynamic = "force-static";

const Footer = () => {
  return (
    <footer className="relative h-[500px]   w-full ">
      <BackdropImage
        backdropPath={ImageFooter}
        alt="Footer Image"
        priority={false}
      />

      <div className="max-h-[500px] flex flex-col items-center justify-center py-20">
        <div className="mb-8 sm:mb-12 flex items-center gap-2 mx-auto w-fit">
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
          <p className="text-xl sm:text-3xl font-semibold text-title-text font-Outfit">
            FMovies
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 w-full md:max-w-2xl lg:max-w-4xl mx-auto font-Outfit text-stone-300 text-lg sm:text-xl font-medium px-4 footer-grid">
          <FooterList data={ListData1} />
          <FooterList data={ListData2} />
          <FooterList data={ListData3} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
