import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  BrainCircuit,
  Database,
  ExternalLink,
  Eye,
  GitCompareArrows,
  LayoutGrid,
  TrendingUp,
} from "lucide-react";

import sampleGridImg from "@/assets/1.3/n24news_sample_grid_public.png";
import fieldMissingnessImg from "@/assets/1.3/n24news_field_missingness_public.png";
import textPolicyImg from "@/assets/1.3/n24news_text_policy_public.png";
import clipCurveImg from "@/assets/1.3/n24news_clip_learning_curve_public.png";
import visualBertCurveImg from "@/assets/1.3/n24news_visualbert_learning_curve_public.png";
import zeroFewAccuracyImg from "@/assets/1.3/n24news_zero_few_accuracy_public.png";
import zeroFewMacroF1Img from "@/assets/1.3/n24news_zero_few_macro_f1_public.png";
import supervisedMacroF1Img from "@/assets/1.3/n24news_supervised_macro_f1_public.png";
import visualBertConfusionImg from "@/assets/1.3/n24news_visualbert_confusion_public.png";
import caseTypeImg from "@/assets/1.3/n24news_case_type_public.png";
import visualBertWrongImg from "@/assets/1.3/n24news_visualbert_wrong_patterns_public.png";
import bothWrongImg from "@/assets/1.3/n24news_both_wrong_patterns_public.png";
import gradCamImg from "@/assets/1.3/n24news_visualbert_gradcam_public.png";
import wellCaseImg from "@/assets/1.3/02-well.jpg";
import styleCaseImg from "@/assets/1.3/04-style.jpg";
import educationCaseImg from "@/assets/1.3/06-education.jpg";
import moneyCaseImg from "@/assets/1.3/08-your-money.jpg";

const REPO = "https://github.com/dung-h/DeepLearning";

const supervisedRows = [
  ["VisualBERT full fine-tune", "0.8752", "0.8641"],
  ["CLIP full fine-tune", "0.8488", "0.8064"],
  ["CLIP LoRA", "0.8388", "0.8230"],
  ["CLIP deep head", "0.8225", "0.8075"],
  ["VisualBERT LoRA", "0.8023", "0.7777"],
  ["VisualBERT deep head", "0.7183", "0.6777"],
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

const ExampleImage = ({ src, title, subtitle }: { src: string; title: string; subtitle: string }) => (
  <Card className="border">
    <CardContent className="space-y-3 pt-4">
      <img src={src} alt={title} className="w-full rounded-lg border border-border" />
      <div className="text-sm">
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    </CardContent>
  </Card>
);

const BTL1_Exercise3 = () => {
  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={3}
      title="Bài toán phân loại đa phương thức"
      description="N24News với hai hướng tiếp cận chính: zero/few-shot CLIP và supervised CLIP, VisualBERT trên cùng test split."
      backLink="/btl1"
    >
      <div className="container mx-auto space-y-14 px-4 py-10">
        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={Database}
              title="Dataset Introduction"
              description="Mỗi mẫu N24News gồm ảnh và phần văn bản tin tức đi kèm. Landing page công bố cùng một flow với image task: dữ liệu, mô hình, huấn luyện, kết quả và phân tích lỗi."
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>N24News</CardTitle>
                  <CardDescription>Tập dữ liệu phân loại đa phương thức với 8 lớp tin tức.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-base text-muted-foreground">
                  <p>Split chính thức: train 48,988 · val 6,123 · test 6,124.</p>
                  <p>Nhánh zero/few-shot dùng CLIP. Nhánh supervised dùng cả CLIP và VisualBERT với các chiến lược full fine-tune, LoRA và deep head.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Zero-shot</Badge>
                    <Badge variant="secondary">Few-shot multi-seed</Badge>
                    <Badge variant="secondary">Supervised CLIP + VisualBERT</Badge>
                  </div>
                </CardContent>
              </Card>

              <FigureCard
                title="Mẫu dữ liệu đại diện"
                description="Ảnh và ngữ cảnh văn bản cùng tham gia quyết định nhãn, nên phần EDA phải xem cả hai phía thay vì chỉ xem ảnh đơn lẻ."
                src={sampleGridImg}
                alt="N24News sample grid"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BarChart3}
              title="EDA"
              description="Phân tích dữ liệu tập trung vào chất lượng trường văn bản, mức thiếu caption và tác động của chính sách ghép text lên nguy cơ truncation."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Thiếu trường văn bản theo split"
                description="Headline và abstract gần như đầy đủ tuyệt đối; caption vẫn cần được theo dõi riêng dù tỷ lệ thiếu thấp."
                src={fieldMissingnessImg}
                alt="Field missingness"
              />
              <FigureCard
                title="Rủi ro truncation của CLIP theo text policy"
                description="headline + abstract + caption quá dài với CLIP, trong khi abstract + caption giữ nhiều ngữ nghĩa hơn headline + caption mà vẫn giảm mạnh truncation."
                src={textPolicyImg}
                alt="Text policy truncation"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={LayoutGrid}
              title="Dataset, DataLoader"
              description="Chính sách văn bản được chốt sau EDA rồi dùng nhất quán cho mọi nhánh để việc so sánh giữa zero-shot, few-shot và supervised không bị lệch vì input."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Chính sách ghép văn bản</CardTitle>
                  <CardDescription>Text policy chính thức cho notebook multimodal là abstract + caption.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>headline + abstract + caption tạo quá nhiều mẫu bị cắt ngắn với CLIP, nên không phù hợp làm policy chính thức.</p>
                  <p>abstract + caption giữ phần mô tả giàu thông tin hơn headline + caption nhưng giảm truncation về mức chấp nhận được.</p>
                  <p>Mỗi mẫu sau đó được ghép cặp ảnh + văn bản theo cùng split để nạp vào CLIP hoặc VisualBERT.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Giao thức đánh giá</CardTitle>
                  <CardDescription>Tất cả số liệu công khai đều đọc lại từ bộ kết quả hiện tại, không train lại trong bước công bố.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Few-shot protocol: K = 1, 2, 4, 8, 16 với 3 seed.</p>
                  <p>Supervised protocol: full fine-tune, LoRA, deep head cho CLIP và VisualBERT.</p>
                  <p>Các chart bên dưới đều được tách riêng để đọc rõ khi trình chiếu và khi xem trên landing page.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BrainCircuit}
              title="Models"
              description="CLIP được dùng ở cả zero/few-shot lẫn supervised. VisualBERT được dùng để học fusion chuyên biệt giữa ảnh và văn bản."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>CLIP</CardTitle>
                  <CardDescription>Đo khả năng tận dụng pretraining theo ba mức: zero-shot, few-shot và supervised.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Few-shot giúp đo xem khi có rất ít mẫu hỗ trợ thì encoder sẵn có cải thiện tới đâu.</p>
                  <p>Supervised CLIP tiếp tục được so sánh giữa full fine-tune, LoRA và deep head.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>VisualBERT</CardTitle>
                  <CardDescription>Mô hình fusion supervised chuyên dụng cho bài toán đa phương thức.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>VisualBERT được dùng làm mốc mạnh nhất ở nhánh supervised.</p>
                  <p>Cùng một thiết lập fine-tuning được giữ để so sánh công bằng với CLIP.</p>
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
              description="Learning curve của CLIP và VisualBERT được tách thành hai ảnh độc lập để dễ đọc khi chiếu."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="CLIP full fine-tune"
                description="Loss giảm đều và ổn định theo epoch, đủ để làm mốc cho nhánh supervised của CLIP."
                src={clipCurveImg}
                alt="CLIP learning curve"
              />
              <FigureCard
                title="VisualBERT full fine-tune"
                description="VisualBERT hội tụ nhanh và giữ khoảng cách tốt ở validation loss trong các epoch đầu."
                src={visualBertCurveImg}
                alt="VisualBERT learning curve"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={GitCompareArrows}
              title="Train Result"
              description="Zero/few-shot và supervised được tách thành các chart riêng để mỗi ảnh chỉ mang một thông điệp rõ ràng."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Few-shot CLIP: accuracy"
                description="Few-shot chỉ vượt zero-shot ổn định khi K đủ lớn; K = 16 cho accuracy tốt nhất trong nhóm few-shot hiện tại."
                src={zeroFewAccuracyImg}
                alt="Few-shot accuracy"
              />
              <FigureCard
                title="Few-shot CLIP: macro F1"
                description="Xu hướng macro F1 phản ánh cùng kết luận với accuracy: K nhỏ chưa đủ để few-shot vượt rõ zero-shot."
                src={zeroFewMacroF1Img}
                alt="Few-shot macro F1"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <FigureCard
                title="Xếp hạng supervised theo macro F1"
                description="VisualBERT full fine-tune là cấu hình mạnh nhất, trong khi LoRA là lựa chọn PEFT tốt nhất cho CLIP."
                src={supervisedMacroF1Img}
                alt="Supervised macro F1"
              />

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Bảng tóm tắt supervised</CardTitle>
                  <CardDescription>Các số dưới đây bám theo bảng so sánh supervised hiện tại.</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="py-2 pr-3">Mô hình</th>
                        <th className="py-2 pr-3">Accuracy</th>
                        <th className="py-2 pr-3">Macro F1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supervisedRows.map((row) => (
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
              icon={Eye}
              title="Phân tích kết quả"
              description="Phần error analysis được tách thành nhiều ảnh nhỏ, mỗi ảnh trả lời một câu hỏi riêng: mô hình nhầm ở đâu, nhầm theo pattern nào và đang nhìn vào vùng nào."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="VisualBERT confusion matrix"
                description="Confusion matrix cho thấy phần lớn lỗi tập trung ở các cặp lớp gần nhau về ngữ nghĩa hoặc bối cảnh hình ảnh."
                src={visualBertConfusionImg}
                alt="VisualBERT confusion matrix"
              />
              <FigureCard
                title="Phân phối case type trên full test"
                description="Nhóm cả hai cùng sai vẫn chiếm đa số, cho thấy độ khó đến từ dữ liệu chứ không chỉ là lỗi riêng của VisualBERT."
                src={caseTypeImg}
                alt="Case type distribution"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Top pattern khi VisualBERT sai"
                description="Những cặp như Dance → Media hay Books → Movies là các nhầm lẫn lặp lại nhiều nhất trong nhóm VisualBERT sai."
                src={visualBertWrongImg}
                alt="VisualBERT wrong patterns"
              />
              <FigureCard
                title="Top pattern khi cả hai cùng sai"
                description="Khi CLIP và VisualBERT cùng sai, lỗi thường rơi vào các cặp lớp rất gần nhau về ngữ nghĩa hoặc chủ đề."
                src={bothWrongImg}
                alt="Both wrong patterns"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <FigureCard
                title="ViT-style Grad-CAM cho VisualBERT"
                description="Heatmap giúp kiểm tra vùng ảnh nào đang chi phối quyết định của mô hình thay vì chỉ đọc score đầu ra."
                src={gradCamImg}
                alt="VisualBERT Grad-CAM"
              />

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Các trường hợp khó đại diện</CardTitle>
                  <CardDescription>Bốn ví dụ dưới đây được giữ lại để minh họa các nhầm lẫn semantic và visual thường gặp.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <ExampleImage src={wellCaseImg} title="True: Well" subtitle="Pred: Music" />
                  <ExampleImage src={styleCaseImg} title="True: Style" subtitle="Pred: Economy" />
                  <ExampleImage src={educationCaseImg} title="True: Education" subtitle="Pred: Opinion" />
                  <ExampleImage src={moneyCaseImg} title="True: Your Money" subtitle="Pred: Television" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={ExternalLink}
              title="Kết luận"
              description="Nhánh multimodal nên được đọc như một câu chuyện đầy đủ: dữ liệu, lựa chọn text policy, so sánh giao thức và phân tích lỗi trên full test."
            />

            <Card className="border-2">
              <CardContent className="space-y-5 pt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="font-semibold text-primary">Kết luận supervised</p>
                    <p className="mt-2 text-sm text-muted-foreground">VisualBERT full fine-tune là cấu hình mạnh nhất về cả accuracy và macro F1.</p>
                  </div>
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="font-semibold text-primary">Kết luận zero/few-shot</p>
                    <p className="mt-2 text-sm text-muted-foreground">Few-shot chỉ phát huy rõ khi số mẫu hỗ trợ đủ lớn; K nhỏ chưa vượt ổn định zero-shot.</p>
                  </div>
                  <div className="rounded-2xl bg-primary/5 p-4">
                    <p className="font-semibold text-primary">Kết luận error analysis</p>
                    <p className="mt-2 text-sm text-muted-foreground">Confusion matrix, case-type, Grad-CAM và representative cases cần đi cùng nhau để đọc đúng giới hạn của mô hình.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={`${REPO}/blob/main/btl1/notebooks/text_image_classification.ipynb`} target="_blank" rel="noreferrer">
                      Notebook
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`${REPO}/tree/main/btl1/artifacts/multimodal`} target="_blank" rel="noreferrer">
                      Kết quả multimodal
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

export default BTL1_Exercise3;
