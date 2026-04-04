import { Card, CardContent } from "@/components/ui/card";
import { Target, Code2, Users, FileText } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Phân tích dữ liệu khám phá (EDA)",
    description: "Khám phá và hiểu rõ đặc điểm của dữ liệu thông qua visualization và thống kê",
  },
  {
    icon: Code2,
    title: "Xử lý & làm giàu dữ liệu ",
    description: "Làm sạch, làm giàu dữ liệu cho quá trình train",
  },
  {
    icon: Target,
    title: "Xây dựng & huấn luyện mô hình DL",
    description: "Phát triển các mô hình học sâu tương ứng với loại dữ liệu",
  },
  {
    icon: FileText,
    title: "Phân tích kết quả mô hình",
    description: "Phân tích kết quả metric, đánh giá dự đoán mẫu của mô hình",
  },
];

const skills = [
  "EDA Data",
  "PyTorch, Hugging Face",
  "Data Visualization",
  "Model Evaluation",
  "Error Analysis",
  "Team Collaboration",
];

export const GoalsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          📊 Mục tiêu bài tập lớn
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-lg text-center text-muted-foreground mb-12">
            Nội dung bài tập trải dài trên ba dạng dữ liệu phổ biến: dữ liệu ảnh, dữ liệu văn bản và dữ liệu ảnh-văn bản. 
            Mỗi dạng dữ liệu đều có những đặc thù riêng, yêu cầu những phương pháp xử lý và mô hình phù hợp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <Card 
                key={goal.title}
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <goal.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-center text-foreground">
              Kỹ năng rèn luyện
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 rounded-full bg-primary/10 border-2 border-primary/20 hover:border-primary/40 
                          text-primary font-medium transition-all duration-300 hover:scale-105 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
