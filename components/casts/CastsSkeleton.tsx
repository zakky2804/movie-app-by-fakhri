export default function CastSkeleton() {
  const skeletons = Array.from({ length: 9 });

  return (
    <div className="flex gap-2 overflow-hidden  animate-pulse">
      {skeletons.map((_, i) => (
        <div
          key={i}
          className="rounded-xl  bg-secondary aspect-[500/749] h-[113px] md:h-[117px] "
        />
      ))}
    </div>
  );
}
