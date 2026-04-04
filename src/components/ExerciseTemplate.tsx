import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ExerciseTemplateProps {
  btlNumber: number;
  exerciseNumber: number;
  title: string;
  children: React.ReactNode;
  backLink: string;
  description?: string;
}

export const ExerciseTemplate = ({
  btlNumber,
  exerciseNumber,
  title,
  children,
  backLink,
  description,
}: ExerciseTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-ocean-surface/10 to-ocean-deep/20">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to={backLink}>
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          <p className="text-lg text-muted-foreground">
            BTL {btlNumber} - Exercise {exerciseNumber}
          </p>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* Footer spacing */}
      <div className="py-12"></div>
    </div>
  );
};
