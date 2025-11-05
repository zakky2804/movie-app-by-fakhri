import GridOfCards from "@/components/GridOfCards";
import { IMovie } from "@/interface/movie";
import { getData } from "@/lib/utils";
import ImageFooter from "@/ui/ImageFooter";

export const revalidate = 2_592_000;

export default async function TvSeries() {
  const apiKey = process.env.TMDB_API_KEY;
  const tbdbUrl = process.env.TMDB_BASE_URL;
  if (!apiKey) throw new Error("API_KEY not found");

  const data = await getData<IMovie>(`${tbdbUrl}/tv/popular?api_key=${apiKey}`);
  if (!data) throw new Error("No data available");

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
        <GridOfCards pathApi="/api/tv" link="/tv" initialData={data} />
      </div>
    </div>
  );
}
