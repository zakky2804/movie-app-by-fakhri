import PageErrorMessage from "@/ui/PageErrorMessage";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <PageErrorMessage
      errorCode={404}
      message={"The tv Series you are looking for does not exist."}
      icon={<SearchX size={56} className="text-primary" />}
    />
  );
}
