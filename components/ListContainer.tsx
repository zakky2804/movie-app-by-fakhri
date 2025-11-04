import Link from "next/link";

import { ITv } from "@/interface/tv";
import { IMovie } from "@/interface/movie";
import SkeletonImage from "./skeletons/SkeletonImage";
import Slider from "../ui/Slider";

interface ListContainerProps {
  title: string;
  pathAPI: string;
  link: string;
  callback?: React.ReactNode;
}

const ListContainer = async ({
  link,
  title,
  pathAPI,
  callback,
}: ListContainerProps) => {
  const baseurl = process.env.BASE_URL;
  const tmdbUrl = process.env.TMDB_POSTER_IMAGE_URL;
  const res = await fetch(`${baseurl}api/${pathAPI}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch users");

  type Media = IMovie | ITv;

  const data: Media = await res.json();
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

      {results.length === 0 && callback}
      <Slider>
        <div className="flex gap-2">
          {results.map((item) => (
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

              <h3 className="text-stone-100 truncate">{item.title}</h3>
            </Link>
          ))}
        </div>
      </Slider>
    </section>
  );
};

export default ListContainer;
