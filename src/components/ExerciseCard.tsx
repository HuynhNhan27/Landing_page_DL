import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";
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
    <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-card group">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
            Exercise {number}
          </Badge>
        </div>
        <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>
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
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
          asChild
        >
          <Link to={link} className="flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Xem chi tiết
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
