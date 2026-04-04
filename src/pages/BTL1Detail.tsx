import { ExerciseCard } from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BTL1Detail = () => {
  const exercises = [
    {
      number: 1,
      title: "Tổng quan dữ liệu",
      description: "Khám phá và phân tích cấu trúc dữ liệu, thống kê cơ bản, và đặc trưng của tập dữ liệu.",
      link: "/btl1/exercise1",
      topics: ["Dataset Overview", "Statistics", "Data Quality"],
    },
    {
      number: 2,
      title: "EDA & Phân tích dữ liệu",
      description: "Thực hiện phân tích khám phá dữ liệu, đóc phân phối, và tìm ra các mối quan hệ giữa các biến.",
      link: "/btl1/exercise2",
      topics: ["Data Exploration", "Visualization", "Correlation"],
    },
    {
      number: 3,
      title: "Xử lý, mô hình & Kết luận",
      description: "Tiền xử lý dữ liệu, xây dựng mô hình học máy, và đánh giá kết quả.",
      link: "/btl1/exercise3",
      topics: ["Preprocessing", "Modeling", "Evaluation"],
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
            BTL 1 - Data Analysis & Machine Learning
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá quy trình phân tích dữ liệu toàn diện, từ khám phá dữ liệu đầu tiên đến xây dựng
            và đánh giá mô hình học máy. Bài tập được chia thành 3 phần chính để tập trung vào từng khía cạnh.
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

export default BTL1Detail;
