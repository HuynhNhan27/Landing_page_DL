import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart3, Wrench, Cpu, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

const BTL3_Exercise2 = () => {
  const sections = [
    { icon: Database, title: "Tổng quan dữ liệu", color: "text-blue-600" },
    { icon: BarChart3, title: "EDA - Khám phá dữ liệu", color: "text-purple-600" },
    { icon: Wrench, title: "Xử lý dữ liệu", color: "text-orange-600" },
    { icon: Cpu, title: "Mô hình", color: "text-green-600" },
    { icon: TrendingUp, title: "Kết quả Training", color: "text-cyan-600" },
    { icon: AlertTriangle, title: "Phân tích lỗi", color: "text-red-600" },
    { icon: CheckCircle2, title: "Kết luận", color: "text-emerald-600" },
  ];

  return (
    <ExerciseTemplate
      btlNumber={3}
      exerciseNumber={2}
      title="Exercise 2: EDA & Phân tích dữ liệu"
      backLink="/btl3"
    >
      {/* Section Layout */}
      <div className="container mx-auto px-4 space-y-12 py-12">
        {sections.map((section, idx) => (
          <section key={idx} className={idx % 2 === 0 ? "bg-muted/30 py-12 px-4 rounded-lg" : "py-12"}>
            <div className="container mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className={`w-8 h-8 ${section.color}`} />
                <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
              </div>

              <Card className="border-2 min-h-64 flex items-center justify-center bg-card/50">
                <CardContent className="text-center text-muted-foreground py-12">
                  <p className="text-lg">Nội dung cho "{section.title}" sẽ được thêm vào đây</p>
                  <p className="text-sm mt-2">Vui lòng điền chi tiết bài tập</p>
                </CardContent>
              </Card>
            </div>
          </section>
        ))}
      </div>
    </ExerciseTemplate>
  );
};

export default BTL3_Exercise2;
