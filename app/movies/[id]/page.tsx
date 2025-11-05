import { IMovieDetail } from "@/interface/movie";
import { getData } from "@/lib/utils";

import Casts from "@/components/casts/Casts";
import { Suspense } from "react";
import Badge from "@/ui/Badge";
import ListContainer from "@/components/ListContainer";

import FallbackNotFound from "@/components/FallbackNotFound";
import TruncatedText from "@/ui/TruncatedText";
import TruncatedTitle from "@/ui/TruncatedTitle";
import { Play } from "lucide-react";
import BackdropImage from "@/ui/BackdropImage";
import { notFound } from "next/navigation";
import SkeletonImage from "@/components/skeletons/SkeletonImage";
import ListContainerSkeleton from "@/components/skeletons/ListContainerSkeleton";
export default async function MovieDetailId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const posterPathUrl = process.env.TMDB_POSTER_IMAGE_URL;
  const apiKey = process.env.TMDB_API_KEY;
  const tbdbUrl = process.env.TMDB_BASE_URL;

  if (!apiKey) throw new Error("API_KEY not found");
  const data = await getData<IMovieDetail>(
    `${tbdbUrl}/movie/${id}?api_key=${apiKey}&page=1`,
    false
  );

  if (!data) return notFound();

  return (
    <>
      <div className="relative mb-0 min-h-[678px] sm:min-h-screen md:min-h-[711px] lg:h-[660px] xl:min-h-screen   xl:max-h-[685px] container">
        <BackdropImage
          backdropPath={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt={`${data.title} backdrop`}
          priority={true}
        />

        <div className="pt-32 pb-20 px-6 sm:px-16 flex gap-x-10 xl:min-w-7xl max-w-[1351px]">
          <SkeletonImage
            src={`${posterPathUrl}/${data.poster_path}`}
            width={340}
            height={510}
            alt=""
            priority={true}
            sizes="(max-width: 1024px) 310px,(max-width: 1280px) 340px"
            classForContainer="hidden lg:block rounded-xl aspect-[500/750]  px-0 lg:max-w-[310px] xl:max-w-[340px]"
            className="brightness-75 "
          />

          <section className="w-full xl:max-w-[700px] pt-6 lg:max-w-[536px]">
            <TruncatedTitle>{data.title}</TruncatedTitle>
            <div className="space-x-2 mb-4">
              {data.genres.map((item) => (
                <Badge key={item.id} text={item.name} />
              ))}
            </div>
            <TruncatedText text={data.overview} className="mb-3" />

            <a
              href={`https://www.themoviedb.org/movie/${id}/watch`}
              target="_blank"
              className="inline-flex items-center gap-x-2 px-4 py-2 bg-primary/90 text-title-text rounded-md font-Outfit mb-4 hover:bg-primary active:scale-95 active:bg-primary duration-200"
            >
              <Play size={16} />
              Watch now
            </a>

            <Casts id={id} type="movie" />
          </section>
        </div>
      </div>

      <Suspense fallback={<ListContainerSkeleton title="Similar" />}>
        <ListContainer
          title="Similar"
          link="/movies"
          pathAPI={`movie/${id}/similar`}
          fallback={
            <FallbackNotFound
              title="No Similar Content Found"
              message=" We couldn't find any movies or TV shows similar to what you were
        looking for. Don't worry, there's still plenty to discover!"
            />
          }
        />
      </Suspense>
    </>
  );
}
