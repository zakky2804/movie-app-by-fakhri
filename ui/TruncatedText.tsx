"use client";

import { useState } from "react";

interface TruncatedTextProps {
  text: string;
  className?: string;
}

export default function TruncatedText({
  text,
  className = "",
}: TruncatedTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={` ${className}  `}>
      <p
        className={`text-muted-foreground transition-all duration-300 ${
          expanded ? "" : `line-clamp-2`
        }`}
      >
        {text}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-title-text text-sm font-medium hover:underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
