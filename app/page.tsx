import Hero from "@/components/Hero";
import { Suspense } from "react";
import ListContainer from "@/components/ListContainer";
import ListContainerSkeleton from "@/components/skeletons/ListContainerSkeleton";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<ListContainerSkeleton title="Trending Movies" />}>
        <ListContainer
          title="Trending Movies"
          link="/movies"
          pathAPI="movie/populer"
        />
      </Suspense>

      <Suspense fallback={<ListContainerSkeleton title="Top Movies" />}>
        <ListContainer title="Top Movies" link="/movies" pathAPI="movie/top" />
      </Suspense>

      <Suspense fallback={<ListContainerSkeleton title="Populer Tv" />}>
        <ListContainer title="Populer Tv" link="/tv" pathAPI="tv/populer" />
      </Suspense>

      <Suspense fallback={<ListContainerSkeleton title="Top Tv" />}>
        <ListContainer title="Top Tv" link="/tv" pathAPI="tv/top" />
      </Suspense>
    </div>
  );
}
