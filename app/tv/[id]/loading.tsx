import ListContainerSkeleton from "@/components/skeletons/ListContainerSkeleton";

export const dynamic = "force-static";

export default function LoadingMovieDetail() {
  return (
    <>
      <div
        className="animate-pulse min-h-[678px]  sm:min-h-screen md:min-h-[711px] md:mb-8 xl:mb-[25px]"
        aria-hidden="true"
      >
        <div className="pt-32 pb-20 px-6 sm:px-16 flex gap-x-10 xl:min-w-7xl max-w-[1351px] ">
          {/* image skeleton */}
          <div className="aspect-[500/750] lg:w-[310px] xl:w-[340px] bg-secondary rounded-xl hidden lg:block shrink-0" />

          {/* content skeleton */}
          <div className="w-full xl:max-w-[700px] pt-8 xl:pt-8 lg:max-w-[536px]">
            {/* title */}
            <div className="h-7 w-40 sm:w-80 xl:w-96 sm:h-14 xl:h-16 bg-secondary rounded-xl " />

            {/* badges */}
            <div className="mt-[23px] sm:mt-8 md:mt-8 xl:mt-8 flex">
              <div className="h-[25px] w-24 bg-secondary rounded-xl mr-2" />
              <div className="h-[25px] w-20 bg-secondary rounded-xl " />
            </div>

            {/* description */}
            <div className="mt-5 md:mt-4 xl:mt-5 space-y-1">
              <div className="h-4 w-full bg-secondary rounded-xl " />
              <div className="h-4 w-full md:w-[600px] bg-secondary rounded-xl " />
            </div>

            <div className="h-5 w-[72px] bg-secondary rounded-xl mt-[15px] md:mt-4 xl:mt-3" />
            <div className="w-[135px] h-10 bg-secondary rounded-md mt-3 sm:mt-3 md:mt-4" />

            <div className="mt-5 md:mt-6">
              <div className="h-6 w-[72px] bg-secondary rounded-xl mb-[14px] sm:mb-[19px] md:mb-[13px] xl:mb-2" />
              <div className="flex gap-2 overflow-hidden ">
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
                <div className="aspect-[500/749] h-[113px] md:h-[117px]  bg-secondary rounded-xl shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListContainerSkeleton title="Similar" />
    </>
  );
}
