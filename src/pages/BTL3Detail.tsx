import { ExerciseCard } from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BTL3Detail = () => {
  const exercises = [
    {
      number: 1,
      title: "Tổng quan dữ liệu",
      description: "Khám phá và phân tích cấu trúc dữ liệu, thống kê cơ bản, và đặc trưng của tập dữ liệu.",
      link: "/btl3/exercise1",
      topics: ["Dataset Overview", "Statistics", "Data Quality"],
    },
    {
      number: 2,
      title: "EDA & Phân tích dữ liệu",
      description: "Thực hiện phân tích khám phá dữ liệu, đóc phân phối, và tìm ra các mối quan hệ giữa các biến.",
      link: "/btl3/exercise2",
      topics: ["Data Exploration", "Visualization", "Insights"],
    },
    {
      number: 3,
      title: "Xử lý, mô hình & Kết luận",
      description: "Tiền xử lý dữ liệu, xây dựng mô hình tối ưu, và triển khai ứng dụng thực tế.",
      link: "/btl3/exercise3",
      topics: ["Preprocessing", "Optimization", "Deployment"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-ocean-surface/10 to-ocean-deep/20">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Về trang chủ
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            BTL 3 - Optimization & Deployment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tối ưu hóa mô hình và triển khai ứng dụng vào thực tế. Tập trung vào các kỹ thuật nâng cao
            và ứng dụng thực tiễn của học máy. Bài tập được chia thành 3 phần.
          </p>
        </div>

        {/* Exercise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.number}
              number={exercise.number}
              title={exercise.title}
              description={exercise.description}
              link={exercise.link}
              topics={exercise.topics}
            />
          ))}
        </div>
      </section>

      {/* Footer spacing */}
      <div className="py-12"></div>
    </div>
  );
};

export default BTL3Detail;
