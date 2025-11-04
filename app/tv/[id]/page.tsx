import Casts from "@/components/casts/Casts";
import { MovieDetailForClient } from "@/interface/movie";
import Badge from "@/ui/Badge";
import Image from "next/image";
import { Suspense } from "react";
import { getDataFromClient } from "@/lib/utils";
import ListContainer from "@/components/ListContainer";
import ListContainerSkeleton from "@/components/skeletons/ListContainerSkeleton";
import TruncatedTitle from "@/ui/TruncatedTitle";
import TruncatedText from "@/ui/TruncatedText";
import { Play } from "lucide-react";
import { notFound } from "next/navigation";
import SkeletonImage from "@/components/skeletons/SkeletonImage";

export default async function TvDetailId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const baseUrl = process.env.BASE_URL;
  const posterPathUrl = process.env.TMDB_POSTER_IMAGE_URL;

  const data = await getDataFromClient<MovieDetailForClient>(
    `${baseUrl}api/tv/${id}`
  );

  if (!data) return notFound();

  return (
    <>
      <div className="relative mb-8 min-h-[678px] sm:min-h-screen md:min-h-[711px] lg:h-[660px] xl:h-screen   xl:max-h-[685px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          width={1351}
          height={685}
          alt=""
          className="object-cover -z-20 brightness-50 mx-auto  top-0 absolute h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background -z-10"></div>

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
            <TruncatedTitle>{data.name}</TruncatedTitle>
            <div className="space-x-2 mb-4">
              {data.genres.map((item) => (
                <Badge key={item.id} text={item.name} />
              ))}
            </div>
            <TruncatedText text={data.overview} className="mb-3" />

            <a
              href={`https://www.themoviedb.org/movie/${id}/watch`}
              target="_blank"
              className="inline-flex items-center gap-x-2 px-4 py-2 bg-primary/90 text-title-text rounded-md font-Outfit mb-4 hover:bg-primary active:scale-95 active:bg-primary duration-200 "
            >
              <Play size={16} />
              Watch now
            </a>
            <Suspense fallback={<></>}>
              <Casts type="tv" id={id} />
            </Suspense>
          </section>
        </div>
      </div>
      <Suspense fallback={<ListContainerSkeleton title="Similar" />}>
        <ListContainer
          title="Similar"
          link="/tv"
          pathAPI={`tv/${id}/similar`}
        />
      </Suspense>
    </>
  );
}
