import { IResultMovieOverview } from "@/interface/movie";
import Link from "next/link";
import SkeletonImage from "./skeletons/SkeletonImage";

const SquareCard = ({
  item,
  link,
}: {
  item: IResultMovieOverview;
  link: string;
}) => {
  return (
    <Link
      href={`${link}/${item.id}`}
      style={{
        contain: "layout paint",
        contentVisibility: "auto",
      }}
    >
      <SkeletonImage
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        width={300}
        height={100}
        alt=""
        sizes="
      (max-width: 375px) 160px,
      (max-width: 640px) 252px,
      (max-width: 768px) 309px,
      (max-width: 1024px) 287px,
      (max-width: 1280px) 224px,
      184px
        "
        classForContainer="aspect-[500/749]"
        className="rounded brightness-75 mb-2 bg-cover duration-200 hover:brightness-100 active:brightness-100 active:scale-95  aspect-[500/749]"
      />
      <h3 className="text-stone-100 truncate">{item.title}</h3>
    </Link>
  );
};

export default SquareCard;
