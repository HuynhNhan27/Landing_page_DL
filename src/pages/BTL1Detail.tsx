import { ExerciseCard } from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BTL1Detail = () => {
  const exercises = [
    {
      number: 1,
      title: "Weather Image Recognition",
      description: "Khám phá dữ liệu hình ảnh về thời tiết và xây dựng mô hình ResNet, EfficientNet và ViT.",
      link: "/btl1/exercise1",
      topics: ["Image", "Classification", "Fine-tune"],
    },
    {
      number: 2,
      title: "Toxic Comment Classification Challenge",
      description: "Khám phá dữ liệu văn bản và xây dựng mô hình BERT, LSTM.",
      link: "/btl1/exercise2",
      topics: ["Text", "Classification", "Fine-tune"],
    },
    {
      number: 3,
      title: "N24News Multimodal Classification",
      description: "Khám phá dữ liệu ảnh-văn bản và xây dựng mô hình CLIP, VisualBERT.",
      link: "/btl1/exercise3",
      topics: ["Text-Image", "Classification", "Fine-tune"],
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
            BTL 1 - Classification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá dữ liệu hình ảnh, văn bản và hình ảnh-văn bản. Đồng thời, xây dựng mô hình phân loại ứng với 3 loại dữ liệu.
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
