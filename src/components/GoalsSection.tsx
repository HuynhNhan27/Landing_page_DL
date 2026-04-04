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
    title: "Xử lý dữ liệu & Feature Engineering",
    description: "Làm sạch, biến đổi và tạo features mới để tối ưu hiệu suất mô hình",
  },
  {
    icon: Target,
    title: "Xây dựng pipeline ML",
    description: "Phát triển pipeline cho cả học máy truyền thống và học sâu",
  },
  {
    icon: FileText,
    title: "Huấn luyện & đánh giá mô hình",
    description: "Training, evaluation và so sánh các mô hình để chọn giải pháp tối ưu",
  },
];

const skills = [
  "NumPy & Pandas",
  "Scikit-learn",
  "TensorFlow / PyTorch",
  "Data Visualization",
  "Model Evaluation",
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
            Nội dung bài tập trải dài trên ba dạng dữ liệu phổ biến: dữ liệu dạng bảng, dữ liệu văn bản và dữ liệu ảnh. 
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
