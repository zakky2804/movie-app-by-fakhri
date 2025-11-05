import { SearchX } from "lucide-react";

interface FallbackNotFoundProps {
  title: string;
  message: string;
}

const FallbackNotFound = ({ title, message }: FallbackNotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-border/10 bg-secondary/30 backdrop-blur-sm max-w-xl mx-auto">
      <SearchX
        size={80}
        strokeWidth={1.5}
        className="text-muted-foreground mb-4"
      />
      <h2 className="text-2xl font-semibold text-title-text mb-2">{title}</h2>
      <p className="max-w-md text-base text-muted-foreground leading-relaxed">
        {message}
      </p>
    </div>
  );
};

export default FallbackNotFound;
