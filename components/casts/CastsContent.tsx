import { Cast } from "@/interface/movie";
// import MySlider from "../slider/SliderProvider";
import SkeletonImage from "../skeletons/SkeletonImage";
import Slider from "../../ui/Slider";

export default async function CastsContent({
  id,
  type,
}: {
  id: string;
  type: "movie" | "tv";
}) {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/${type}/cast/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return <>User not Found</>;
  const data: Cast[] = await res.json();

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
            <h4 className="text-stone-100 line-clamp-2 text-sm z-10 text-center leading-tight">
              {cast.name}
            </h4>
          </div>
        ))}
      </div>
    </Slider>
  );
}
