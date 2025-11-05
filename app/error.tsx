"use client";

import PageErrorMessage from "@/ui/PageErrorMessage";
import { TriangleAlert } from "lucide-react";

export default function ErrorPage() {
  return (
    <PageErrorMessage
      errorCode={500}
      message={
        "Oops! It looks like something went wrong with our servers. Our team has been notified and is working on fixing it."
      }
      icon={<TriangleAlert size={56} className="text-primary" />}
    />
  );
}
