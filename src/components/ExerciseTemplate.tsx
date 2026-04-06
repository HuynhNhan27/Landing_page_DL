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
      <div className="container mx-auto px-4 py-6">
        <Link to={backLink}>
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Quay lại
          </Button>
        </Link>
      </div>

      <section className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">{title}</h1>
          {description && <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-foreground">{description}</p>}
          <p className="text-lg text-muted-foreground">BTL {btlNumber} - Bài toán {exerciseNumber}</p>
        </div>
      </section>

      {children}
      <div className="py-12" />
    </div>
  );
};
