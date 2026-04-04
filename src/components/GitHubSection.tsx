import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

export const GitHubSection = () => {
  return (
    <section id="github" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          📦 GitHub Repository
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Trang chủ khóa học được quản lý trên GitHub cùng với tất cả các bài tập lớn.
          Từ đây bạn có thể truy cập vào notebooks, tài liệu, và kết quả của từng bài.
        </p>

        <Card className="max-w-4xl mx-auto border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Github className="w-10 h-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl mb-2">Deep Learning</CardTitle>
            <CardDescription className="text-base">
              Deep Learning and Its Applications Course Projects - CO3133 (HK252)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-muted-foreground">Deep Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Python</span>
              </div>
            </div>

            <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold">📂 Cấu trúc Repository:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>index.html, assignments/, assets/</strong> - Landing page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>btl1/</strong> - Notebooks, dữ liệu, kết quả và báo cáo cho bài 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>btl2/, btl3/</strong> - Placeholder cho bài tập 2 và 3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>docs/</strong> - Tài liệu dùng chung toàn khóa học</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold">⚡ Quick Start:</h4>
              <div className="bg-background/80 p-3 rounded font-mono text-xs overflow-x-auto">
                <code className="text-primary">
                  git clone https://github.com/dung-h/DeepLearning.git<br />
                  cd DeepLearning<br />
                  pip install -r requirements.txt
                </code>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                <a 
                  href="https://github.com/dung-h/DeepLearning" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  Xem trên GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};