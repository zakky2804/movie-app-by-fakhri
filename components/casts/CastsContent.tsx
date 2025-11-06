import { Casts } from "@/interface/movie";
import SkeletonImage from "../skeletons/SkeletonImage";
import Slider from "@/ui/Slider";
import { getData } from "@/lib/utils";

export default async function CastsContent({
  id,
  type,
}: {
  id: string;
  type: "movie" | "tv";
}) {
  const apiKey = process.env.TMDB_API_KEY;
  const tbdbUrl = process.env.TMDB_BASE_URL;

  const results = await getData<Casts>(
    `${tbdbUrl}/${type}/${id}/credits?api_key=${apiKey}`,
    false
  );

  if (!results) {
    return null;
  }

  const data = results.cast.map(({ id, name, profile_path }) => ({
    id,
    name,
    profile_path,
  }));

  return (
    <Slider>
      <div className="flex gap-2 ">
        {data.map((cast) => (
          <div
            key={cast.id}
            className="md:max-w-[78px]"
            style={{
              contain: "layout paint",
              contentVisibility: "auto",
            }}
          >
            <SkeletonImage
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              width={500}
              height={749}
              rounded="rounded-lg"
              alt={cast.name}
              priority={false}
              classForContainer=" aspect-[500/749] h-[113px] md:h-auto md:w-[78px]  mb-2"
              className=" brightness-75 hover:brightness-100 mb-2 rounded-lg object-contain overflow-hidden  aspect-[500/749] h-[113px] md:h-auto md:w-[78px]"
            />
            <p className="text-stone-100 line-clamp-2 text-sm z-10 text-center leading-tight">
              {cast.name}
            </p>
          </div>
        ))}
      </div>
    </Slider>
  );
}
