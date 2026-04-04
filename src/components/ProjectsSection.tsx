import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "BTL1",
    domain: "Classification",
    description: "Chưa viết :v",
    status: "Done",
    link: "/btl1",
  },
  {
    title: "BTL2",
    domain: "Text/Image Data",
    description: "Chưa viết :v",
    status: "In Progress",
    link: "/btl2",
  },
  {
    title: "BTL3",
    domain: "Real-world Applications",
    description: "Chưa viết :v",
    status: "In Progress",
    link: "/btl3",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          🚀 Projects Overview
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Repo này chứa 3 bài tập lớn của môn Học sâu và ứng dụng. Mỗi bài tập lớn gồm 3 bài tập ứng với 3 loại dữ liệu,
          giúp tăng cường khả năng xử lý trên nhiều task, nhiều loại data khác nhau.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {project.domain}
                  </Badge>
                  <Badge variant="default" className="bg-accent text-accent-foreground flex items-center gap-1">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <Link to={project.link} className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Xem chi tiết
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
