import Link from "next/link";

import { IMovie } from "@/interface/movie";
import SkeletonImage from "./skeletons/SkeletonImage";
import Slider from "../ui/Slider";
import { getData } from "@/lib/utils";

interface ListContainerProps {
  title: string;
  pathAPI: string;
  link: string;
  fallback?: React.ReactNode;
}

const ListContainer = async ({
  link,
  title,
  pathAPI,
  fallback,
}: ListContainerProps) => {
  const tmdbUrl = process.env.TMDB_POSTER_IMAGE_URL;
  const apiKey = process.env.TMDB_API_KEY;
  const tbdbUrl = process.env.TMDB_BASE_URL;

  if (!apiKey) throw new Error("API_KEY not found");
  const data = await getData<IMovie>(`${tbdbUrl}/${pathAPI}?api_key=${apiKey}`);

  if (!data) throw new Error("No data available");
  const results = data.results;

  return (
    <section className="py-0 px-4 sm:px-8 sm:pt-2 pb-4">
      <section className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-stone-50">{title}</h2>
        <Link
          href={link}
          className="rounded-full border border-border px-4 py-2 font-medium font-Outfit text-title-text  transition duration-200 hover:bg-primary active:scale-90 active:bg-primary "
        >
          View more
        </Link>
      </section>

      {results.length === 0 && fallback}
      <Slider>
        <div className="flex gap-2">
          {results.slice(0, 10).map((item) => (
            <Link
              href={`${link}/${item.id}`}
              key={item.id}
              className="min-h-[282px] max-w-[188px] sm:h-auto sm:max-w-[162px]"
              style={{
                contain: "layout paint",
                contentVisibility: "auto",
              }}
            >
              <SkeletonImage
                src={`${tmdbUrl}${item.poster_path}`}
                width={224}
                height={336}
                alt="Gambar dari API"
                priority={false}
                sizes="(max-width: 640px) 162px, 188px"
                classForContainer="relative aspect-[500/749] h-[282px] sm:h-auto sm:w-[162px]  p-0"
                className={`rounded-md brightness-75 overflow-hidden object-cover transition duration-200  hover:brightness-100 active:brightness-100 active:scale-95 aspect-[500/749] h-[282px] sm:h-auto sm:w-[162px]`}
              />

              <h3 className="text-stone-100 truncate">
                {item.title || item.original_name}
              </h3>
            </Link>
          ))}
        </div>
      </Slider>
    </section>
  );
};

export default ListContainer;
