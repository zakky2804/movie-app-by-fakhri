import GridOfCards from "@/components/GridOfCards";
import ImageFooter from "@/ui/ImageFooter";

export default async function Movies() {
  return (
    <div className="">
      <div className="relative h-[200px] overflow-hidden -z-10">
        <ImageFooter />
      </div>
      <h1
        className="text-center text-title-text -mt-10
          "
      >
        Movies
      </h1>
      <div className="pt-16 sm:pt-28 pb-20 px-6 sm:px-16 container mx-auto">
        <GridOfCards pathApi="/api/movie" link="/movies" />
      </div>
    </div>
  );
}
