import { ArrowLeft } from "lucide-react";

interface PageErrorMessageProps {
  errorCode: number;
  message: string;
  icon: React.ReactNode;
}

const PageErrorMessage = ({
  errorCode,
  message,
  icon,
}: PageErrorMessageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon Section */}
        <div className="p-5 bg-secondary/80 rounded-full w-fit mx-auto flex items-center justify-center shadow-sm">
          {icon}
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-title-text tracking-tight">
          {errorCode}
        </h1>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed">
          {message}
        </p>

        {/* Button */}
        <button className="flex items-center gap-x-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition mx-auto shadow-sm text-title-text">
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageErrorMessage;
