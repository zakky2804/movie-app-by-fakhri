import GridOfCards from "@/components/GridOfCards";
import ImageFooter from "@/ui/ImageFooter";

export default async function TvSeries() {
  return (
    <div className="">
      <div className="relative h-[200px] overflow-hidden -z-10 ">
        <ImageFooter />
      </div>
      <h1
        className="text-center text-title-text -mt-10
          "
      >
        Tv Series
      </h1>
      <div className="pt-16 sm:pt-28 pb-20 px-6 sm:px-16 container mx-auto">
        <GridOfCards pathApi="/api/tv" link="/tv" />
      </div>
    </div>
  );
}
