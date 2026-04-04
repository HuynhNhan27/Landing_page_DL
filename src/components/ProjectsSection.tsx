import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "BTL1 – Amazon Product",
    domain: "Tabular Data",
    description: "Phân tích và dự đoán dữ liệu sản phẩm Amazon với 42K items",
    status: "Completed",
    link: "/btl1",
    dataset: {
      name: "Amazon Products Dataset",
      url: "https://www.kaggle.com/datasets/ikramshah512/amazon-products-sales-dataset-42k-items-2025",
    },
    colab: "https://colab.research.google.com/drive/1Y6CAMgL1Y0mev4UZJOi-FPIP7UMF4xSv?usp=sharing",
  },
  {
    title: "BTL2 – Text Processing",
    domain: "Text Data",
    description: "Phát hiện cảm xúc từ văn bản sử dụng NLP",
    status: "Completed",
    link: "/btl2",
    dataset: {
      name: "Emotion Detection from Text",
      url: "https://www.kaggle.com/datasets/pashupatigupta/emotion-detection-from-text/data",
    },
    colab: "https://colab.research.google.com/drive/1FpZT_pxSkoPX01GMBuddQoQ_bh7SBXdC?usp=sharing",
  },
  {
    title: "BTL3 – Image Recognition",
    domain: "Computer Vision",
    description: "Nhận dạng và phân loại ảnh khoáng sản",
    status: "Completed",
    link: "/btl3",
    dataset: {
      name: "Mineral Photos",
      url: "https://www.kaggle.com/datasets/floriangeillon/mineral-photos",
    },
    colab: "https://colab.research.google.com/drive/1JlpRaJXwa1ZzH9b3-W4kKNYHwkiTW2pD?usp=sharing",
  },
  {
    title: "Extension – Advanced Topics",
    domain: "Bayesian Network",
    description: "Phân tích và dự đoán trầm cảm sinh viên sử dụng Bayesian Network",
    status: "Completed",
    link: "/extension",
    dataset: {
      name: "Student Depression Dataset",
      url: "https://www.kaggle.com/datasets/adilshamim8/student-depression-dataset/data",
    },
    colab: "https://colab.research.google.com/drive/1H6O0cE0q_EYJlBak-Nht_oQqTRyRVR_b?usp=sharing",
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
          Repo này chứa 4 bài tập lớn của môn học Học Máy – CO3117, trải dài trên ba dạng dữ liệu phổ biến: 
          dữ liệu dạng bảng, dữ liệu văn bản và dữ liệu ảnh.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    <CheckCircle2 className="w-3 h-3" />
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
                <div className="flex items-start gap-2 text-sm">
                  <Database className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <a 
                    href={project.dataset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors hover:underline"
                  >
                    {project.dataset.name}
                  </a>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link to={project.link} className="flex items-center justify-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Xem báo cáo chi tiết
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a 
                      href={project.colab}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Colab
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
