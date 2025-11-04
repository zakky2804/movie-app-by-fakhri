import { Suspense } from "react";
import CastSkeleton from "./CastsSkeleton";
import CastsContent from "./CastsContent";

export default function Casts({
  id,
  type,
}: {
  id: string;
  type: "movie" | "tv";
}) {
  return (
    <section>
      <h3 className="mb-3 text-title-text text-2xl font-semibold">Casts :</h3>
      <Suspense fallback={<CastSkeleton />}>
        <CastsContent id={id} type={type} />
      </Suspense>
    </section>
  );
}
