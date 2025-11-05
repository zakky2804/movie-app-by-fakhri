import { getData } from "@/lib/utils";
import { IMovie } from "@/interface/movie";
import ImageFooter from "@/ui/ImageFooter";
import GridOfCards from "@/components/GridOfCards";

export const revalidate = 2_592_000;

export default async function Movies() {
  const apiKey = process.env.TMDB_API_KEY;
  const tbdbUrl = process.env.TMDB_BASE_URL;

  if (!apiKey) throw new Error("API_KEY not found");
  const data = await getData<IMovie>(
    `${tbdbUrl}/movie/popular?api_key=${apiKey}`
  );

  if (!data) throw new Error("No data available");

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
        <GridOfCards pathApi="/api/movie" link="/movies" initialData={data} />
      </div>
    </div>
  );
}
