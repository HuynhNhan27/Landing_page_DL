import { ExerciseCard } from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BTL1Detail = () => {
  const exercises = [
    {
      number: 1,
      title: "Bài toán phân loại ảnh",
      description: "Phân loại ảnh thời tiết 11 lớp, so sánh CNN và ViT, đánh giá bằng confusion matrix và phân tích lỗi.",
      link: "/btl1/exercise1",
      topics: ["Image", "Classification", "Fine-tune"],
    },
    {
      number: 2,
      title: "Bài toán phân loại văn bản",
      description: "Jigsaw Toxic Comment đa nhãn, so sánh BERT và LSTM theo full/head-only, weighted/non-weighted.",
      link: "/btl1/exercise2",
      topics: ["Text", "Multi-label", "Post-test"],
    },
    {
      number: 3,
      title: "Bài toán phân loại đa phương thức",
      description: "N24News text-image với zero/few-shot CLIP và supervised full_finetune, LoRA, deep_head.",
      link: "/btl1/exercise3",
      topics: ["Text-Image", "Zero/Few-shot", "PEFT"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-ocean-surface/10 to-ocean-deep/20">
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Về trang chủ
          </Button>
        </Link>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">BTL1 - Classification</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">Tổng hợp ba bài toán của BTL1 theo cùng một giao thức đánh giá.</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
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

      <div className="py-12" />
    </div>
  );
};

export default BTL1Detail;
