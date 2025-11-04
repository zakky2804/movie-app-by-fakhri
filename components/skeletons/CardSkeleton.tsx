const CardSkeleton = () => {
  return (
    <div
      style={{
        contain: "layout paint",
      }}
    >
      <div className="aspect-[500/749] h-[282px] sm:h-auto sm:w-[162px] bg-secondary rounded-md shrink-0 mb-1" />
      <div className="w-28 h-4 bg-secondary rounded-md" />
    </div>
  );
};

export default CardSkeleton;
