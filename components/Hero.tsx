import { IMovie } from "@/interface/movie";
import Link from "next/link";
import BackdropImage from "@/ui/BackdropImage";
import SkeletonImage from "./skeletons/SkeletonImage";
import HeroSlider2 from "@/ui/HeroSlider2";
import { getData } from "@/lib/utils";

const Hero = async () => {
  const apiKey = process.env.TMDB_API_KEY;
  const tbdbUrl = process.env.TMDB_BASE_URL;
  const tmdbPosterUrl = process.env.TMDB_POSTER_IMAGE_URL;

  if (!apiKey) throw new Error("API_KEY not found");

  const data = await getData<IMovie>(
    `${tbdbUrl}/movie/popular?api_key=${apiKey}`
  );

  if (!data) throw new Error("No data available");

  const movies = data.results;

  return (
    <HeroSlider2>
      {movies.slice(0, 10).map((movie, index) => (
        <div
          className="mb-10 relative h-[100dvh] sm:h-[600px] lg:h-[660px] xl:h-screen min-w-full  xl:max-h-[685px] "
          key={movie.id}
          style={{
            contain: "layout paint",
            contentVisibility: "auto",
          }}
        >
          <BackdropImage
            backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
            priority={index === 0}
          />

          <div className="pt-32 pb-20 px-6 flex flex-col justify-end h-full md:h-fit sm:px-16  sm:flex-row  lg:justify-between  ">
            <section className="flex items-center w-full sm:max-w-[700px] md:max-w-4xl lg:max-w-[520px] xl:max-w-[700px]">
              <div className="">
                <h1 className="mb-6 text-4xl sm:text-7xl font-bold text-title-text  line-clamp-2">
                  {movie.title}
                </h1>
                <p className="mb-8 line-clamp-3 sm:line-clamp-4 lg:line-clamp-3 xl:line-clamp-4">
                  {movie.overview}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-center">
                  <a
                    href={`https://www.themoviedb.org/movie/${movie.id}/watch`}
                    className="cta-button px-6 py-3 rounded-full transition duration-200 bg-primary/90 hover:bg-primary active:scale-90 active:bg-primary"
                    target="_blank"
                  >
                    Watch Now
                  </a>
                  <Link
                    href={`/movies/${movie.id}`}
                    scroll={true}
                    className="cta-button px-6 py-3 rounded-full border border-border hover:bg-primary duration-100 active:scale-90 active:bg-primary"
                  >
                    See Detail
                  </Link>
                </div>
              </div>
            </section>

            <SkeletonImage
              src={`${tmdbPosterUrl}${movie.poster_path}`}
              width={340}
              height={510}
              alt=""
              sizes="(max-width: 1024px) 310px,(max-width: 1280px) 340px"
              priority={index === 0}
              classForContainer="hidden lg:block rounded-xl aspect-[500/750]  px-0 lg:max-w-[310px] xl:max-w-[340px] shrink-0"
              className="brightness-75 "
            />
          </div>
        </div>
      ))}
    </HeroSlider2>
  );
};

export default Hero;
