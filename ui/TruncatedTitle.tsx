"use client";

import { useState } from "react";

const TruncatedTitle = ({ children }: React.PropsWithChildren) => {
  const [collapse, setConllapse] = useState(true);

  return (
    <h1
      className={`mb-4 text-4xl sm:text-7xl font-bold text-title-text leading-[1.2] ${
        collapse && "truncate"
      }`}
      onClick={() => setConllapse(!collapse)}
    >
      {children}
    </h1>
  );
};

export default TruncatedTitle;
