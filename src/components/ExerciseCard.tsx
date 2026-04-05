import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface ExerciseCardProps {
  number: number;
  title: string;
  description: string;
  link: string;
  topics?: string[];
}

export const ExerciseCard = ({ number, title, description, link, topics = [] }: ExerciseCardProps) => {
  return (
    <Card className="group border-2 border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <CardHeader>
        <div className="mb-3 flex items-start justify-between">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
            Exercise {number}
          </Badge>
        </div>
        <CardTitle className="text-2xl text-card-foreground transition-colors group-hover:text-primary">{title}</CardTitle>
        <CardDescription className="mt-2 text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        )}
        <Button className="w-full bg-primary text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg" asChild>
          <Link to={link} className="flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            Mở trang bài toán
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
