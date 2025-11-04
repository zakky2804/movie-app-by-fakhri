"use client";

import PageErrorMessage from "@/ui/PageErrorMessage";
import { TriangleAlert } from "lucide-react";

export default function ErrorPage() {
  return (
    <PageErrorMessage
      errorCode={404}
      message={
        "  Oops! The page you're looking for seems to have wandered off. Let's get you back on track."
      }
      icon={<TriangleAlert size={56} className="text-primary" />}
    />
  );
}
