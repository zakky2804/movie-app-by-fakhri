import { Frown } from "lucide-react";

export default function NoSimilarContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-border/10 bg-secondary/30 backdrop-blur-sm max-w-xl mx-auto">
      <Frown
        size={80}
        strokeWidth={1.5}
        className="text-muted-foreground mb-4"
      />
      <h2 className="text-2xl font-semibold text-title-text mb-2">
        No Similar Content Found
      </h2>
      <p className="max-w-md text-base text-muted-foreground leading-relaxed">
        We couldn&apos;t find any movies or TV shows similar to what you were
        looking for. Don&apos;t worry, there&apos;s still plenty to discover!
      </p>
    </div>
  );
}
