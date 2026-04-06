import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Database,
  ExternalLink,
  GitCompareArrows,
  NotebookPen,
  TrendingUp,
} from "lucide-react";

import labelDistributionImg from "@/assets/1.2/text_label_distribution_public.png";
import labelCorrelationImg from "@/assets/1.2/text_label_correlation_public.png";
import splitBalanceImg from "@/assets/1.2/text_split_balance_public.png";
import vocabOovImg from "@/assets/1.2/text_vocab_oov_public.png";
import bertCurveImg from "@/assets/1.2/text_bert_learning_curve_public.png";
import lstmCurveImg from "@/assets/1.2/text_lstm_learning_curve_public.png";
import modelComparisonImg from "@/assets/1.2/text_model_comparison_public.png";
import bertConfusionImg from "@/assets/1.2/text_bert_confusion_public.png";
import perLabelF1Img from "@/assets/1.2/text_per_label_f1_public.png";

const REPO = "https://github.com/dung-h/DeepLearning";

const modelRows = [
  ["BERT full weighted", "0.5926", "0.6664"],
  ["BERT full non-weighted", "0.5853", "0.6578"],
  ["LSTM weighted", "0.5225", "0.6161"],
  ["LSTM non-weighted", "0.4735", "0.6088"],
  ["BERT head-only weighted", "0.3890", "0.4973"],
  ["BERT head-only non-weighted", "0.3738", "0.5123"],
];

const SectionTitle = ({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Database;
  title: string;
  description: string;
}) => (
  <div className="mb-6 flex items-start gap-4">
    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <div className="space-y-1">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p className="max-w-3xl text-base text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FigureCard = ({ title, description, src, alt }: { title: string; description: string; src: string; alt: string }) => (
  <Card className="border-2">
    <CardHeader className="pb-4">
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={src} alt={alt} className="w-full rounded-lg border border-border shadow-sm" />
    </CardContent>
  </Card>
);

const BTL1_Exercise2 = () => {
  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={2}
      title="Bài toán phân loại văn bản"
      description="Jigsaw Toxic Comment đa nhãn, so sánh BERT và LSTM theo cùng giao thức split, huấn luyện và hậu kiểm."
      backLink="/btl1"
    >
      <div className="container mx-auto space-y-14 px-4 py-10">
        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={Database}
              title="Dataset Introduction"
              description="Bài toán nhắm tới nhận diện 6 loại ngôn ngữ độc hại trong bình luận người dùng. Macro F1 được dùng làm thước đo chính vì phân phối nhãn lệch mạnh."
            />

            <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Jigsaw Toxic Comment</CardTitle>
                  <CardDescription>Tập dữ liệu đa nhãn với split được tạo lại bằng iterative multilabel stratification.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-base text-muted-foreground">
                  <p>Quy mô huấn luyện gốc: 159,571 bình luận.</p>
                  <p>Split chính thức dùng trong notebook: train 143,613 · val 15,958 · test 63,978.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">6 nhãn toxic</Badge>
                    <Badge variant="secondary">Multi-label</Badge>
                    <Badge variant="secondary">Macro F1 làm thước đo chính</Badge>
                  </div>
                </CardContent>
              </Card>

              <FigureCard
                title="Tỷ lệ nhãn dương"
                description="Các nhãn severe toxic, threat và identity hate hiếm hơn rõ rệt so với toxic, obscene và insult."
                src={labelDistributionImg}
                alt="Text label distribution"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BarChart3}
              title="EDA"
              description="Phân tích tập trung vào mức lệch phân phối, sự đồng xuất hiện giữa các nhãn và tác động của quyết định split."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Tương quan giữa các nhãn"
                description="Obscene và insult đồng biến mạnh với toxic, trong khi threat và identity hate là các nhãn hiếm và khó hơn."
                src={labelCorrelationImg}
                alt="Text label correlation"
              />
              <FigureCard
                title="Cân bằng nhãn sau khi chia split"
                description="Iterative stratification giúp train, val và test giữ cấu trúc nhãn gần nhau thay vì lệch mạnh theo từng tập."
                src={splitBalanceImg}
                alt="Text split balance"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BookOpenCheck}
              title="Dataset, DataLoader"
              description="Phần chuẩn bị dữ liệu cần vừa giữ đủ ngữ cảnh cho mô hình, vừa kiểm soát rủi ro OOV và đảm bảo split được dùng nhất quán ở mọi nhánh."
            />

            <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Thiết lập nạp dữ liệu</CardTitle>
                  <CardDescription>Hai họ mô hình dùng cùng split nhưng khác cách biểu diễn văn bản.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>BERT dùng tokenizer subword và hỗ trợ cả full fine-tune lẫn head-only.</p>
                  <p>LSTM dùng vocabulary xây từ train split và giữ toàn bộ token đủ điều kiện để giảm OOV.</p>
                  <p>Loss được chạy ở cả hai cấu hình weighted và non-weighted để đo tác động của mất cân bằng nhãn.</p>
                </CardContent>
              </Card>

              <FigureCard
                title="Rủi ro OOV theo split"
                description="Val và test vẫn xuất hiện chuỗi có OOV, nhưng tỉ lệ token lạ được kiểm soát nhờ giữ full vocabulary đủ điều kiện từ train."
                src={vocabOovImg}
                alt="Text OOV summary"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BrainCircuit}
              title="Models"
              description="BERT đóng vai trò transfer learning baseline mạnh, còn LSTM là baseline tuần tự để đo lợi ích của encoder ngữ cảnh."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>BERT</CardTitle>
                  <CardDescription>So sánh full fine-tune với head-only trên cùng checkpoint khởi tạo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Biến thể chính: full weighted, full non-weighted, head-only weighted, head-only non-weighted.</p>
                  <p>Full fine-tune giúp tận dụng toàn bộ encoder, trong khi head-only đo mức độ phụ thuộc vào biểu diễn đóng băng.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>LSTM</CardTitle>
                  <CardDescription>Baseline tuần tự dùng cùng split và cùng giao thức hậu kiểm với BERT.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Hai biến thể chính: weighted và non-weighted.</p>
                  <p>Nhánh này giúp định lượng rõ lợi ích của contextual encoder trên các nhãn hiếm.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={TrendingUp}
              title="Train"
              description="Hai learning curve được tách riêng để tránh ảnh nhỏ và cho phép đọc rõ độ hội tụ của từng mô hình."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="BERT full weighted"
                description="Validation loss đạt đáy sớm, sau đó mô hình tiếp tục cải thiện macro F1 trong vài epoch cuối."
                src={bertCurveImg}
                alt="BERT learning curve"
              />
              <FigureCard
                title="LSTM weighted"
                description="LSTM hội tụ chậm hơn và nhạy hơn với val loss, nhưng vẫn tạo được baseline ổn định trên tập test."
                src={lstmCurveImg}
                alt="LSTM learning curve"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={GitCompareArrows}
              title="Train Result"
              description="Phần tổng hợp ưu tiên chart riêng để so sánh chất lượng giữa các chiến lược, sau đó mới dùng bảng nhỏ để chốt số."
            />

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.95fr]">
              <FigureCard
                title="So sánh macro F1 trên test"
                description="BERT full weighted là cấu hình tốt nhất trong nhánh văn bản và vượt rõ rệt các cấu hình head-only."
                src={modelComparisonImg}
                alt="Text model comparison"
              />

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Bảng tóm tắt kết quả</CardTitle>
                  <CardDescription>Các số dưới đây bám trực tiếp theo bộ kết quả đánh giá hiện tại.</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="py-2 pr-3">Mô hình</th>
                        <th className="py-2 pr-3">Macro F1</th>
                        <th className="py-2 pr-3">Micro F1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelRows.map((row) => (
                        <tr key={row[0]} className="border-b">
                          <td className="py-2 pr-3">{row[0]}</td>
                          <td className="py-2 pr-3">{row[1]}</td>
                          <td className="py-2 pr-3">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={NotebookPen}
              title="Phân tích kết quả"
              description="Phần hậu kiểm được tách thành hai ảnh riêng: một ảnh cho cấu trúc lỗi của BERT full weighted và một ảnh cho mức khó theo từng nhãn."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="BERT full weighted: confusion theo từng nhãn"
                description="Các nhãn hiếm như severe toxic và identity hate vẫn có tỉ lệ false negative cao hơn các nhãn phổ biến."
                src={bertConfusionImg}
                alt="BERT confusion per label"
              />
              <FigureCard
                title="Per-label F1 của hai baseline weighted"
                description="BERT giữ ưu thế rõ hơn ở nhóm nhãn khó, đặc biệt là threat và identity hate."
                src={perLabelF1Img}
                alt="Per-label F1"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={ExternalLink}
              title="Kết luận"
              description="BERT full weighted là cấu hình nên chọn cho bài toán phân loại văn bản của BTL1. Landing page chỉ công bố các kết luận được hỗ trợ bởi bộ kết quả hiện tại."
            />

            <Card className="border-2">
              <CardContent className="space-y-5 pt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="font-semibold text-primary">Kết luận mô hình</p>
                    <p className="mt-2 text-sm text-muted-foreground">BERT full weighted đạt macro F1 tốt nhất và giữ cân bằng tốt hơn trên các nhãn hiếm.</p>
                  </div>
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="font-semibold text-primary">Kết luận dữ liệu</p>
                    <p className="mt-2 text-sm text-muted-foreground">Bài toán lệch phân phối rõ, nên macro F1 và weighted loss đều là quyết định bắt buộc chứ không phải tùy chọn.</p>
                  </div>
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="font-semibold text-primary">Kết luận đánh giá</p>
                    <p className="mt-2 text-sm text-muted-foreground">Phân tích nên nhìn cùng lúc chart tổng hợp, confusion theo nhãn và per-label F1 thay vì chỉ đọc một bảng điểm cuối.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={`${REPO}/blob/main/btl1/notebooks/text_classification.ipynb`} target="_blank" rel="noreferrer">
                      Notebook
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`${REPO}/tree/main/btl1/artifacts/text`} target="_blank" rel="noreferrer">
                      Kết quả văn bản
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </ExerciseTemplate>
  );
};

export default BTL1_Exercise2;
