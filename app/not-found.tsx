import PageErrorMessage from "@/ui/PageErrorMessage";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <PageErrorMessage
      errorCode={404}
      message={
        "  Oops! The page you're looking for seems to have wandered off. Let's get you back on track."
      }
      icon={<SearchX size={56} className="text-primary" />}
    />
  );
}
