import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  Eye,
  GitCompareArrows,
  Info,
  LayoutGrid,
  NotebookPen,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

import sampleGridImg from "@/assets/1.3/n24news_sample_grid_public.png";
import fieldMissingnessImg from "@/assets/1.3/n24news_field_missingness_public.png";
import textPolicyImg from "@/assets/1.3/n24news_text_policy_public.png";
import clipCurveImg from "@/assets/1.3/n24news_clip_learning_curve_public.png";
import visualBertCurveImg from "@/assets/1.3/n24news_visualbert_learning_curve_public.png";
import clipDeepHeadCurveImg from "@/assets/1.3/n24news_clip_deep_head_learning_curve_public.png";
import clipLoraCurveImg from "@/assets/1.3/n24news_clip_lora_learning_curve_public.png";
import visualBertDeepHeadCurveImg from "@/assets/1.3/n24news_visualbert_deep_head_learning_curve_public.png";
import visualBertLoraCurveImg from "@/assets/1.3/n24news_visualbert_lora_learning_curve_public.png";
import zeroFewAccuracyImg from "@/assets/1.3/n24news_zero_few_accuracy_public.png";
import zeroFewMacroF1Img from "@/assets/1.3/n24news_zero_few_macro_f1_public.png";
import supervisedMacroF1Img from "@/assets/1.3/n24news_supervised_macro_f1_public.png";
import labelDistributionImg from "@/assets/1.3/n24news_label_distribution_public.png";
import visualBertConfusionImg from "@/assets/1.3/n24news_visualbert_confusion_public.png";
import clipConfusionImg from "@/assets/1.3/n24news_clip_confusion_public.png";
import caseTypeImg from "@/assets/1.3/n24news_case_type_public.png";
import visualBertTopConfusionsImg from "@/assets/1.3/n24news_visualbert_top_confusions_public.png";
import clipTopConfusionsImg from "@/assets/1.3/n24news_clip_top_confusions_public.png";
import visualBertWrongImg from "@/assets/1.3/n24news_visualbert_wrong_patterns_public.png";
import bothWrongImg from "@/assets/1.3/n24news_both_wrong_patterns_public.png";
import gradCamImg from "@/assets/1.3/n24news_visualbert_gradcam_public.png";
import clipSupervisedGradCamImg from "@/assets/1.3/n24news_clip_supervised_gradcam_public.png";
import multimodalSampleManifestRaw from "@/assets/1.3/n24news_sample_records.json?raw";

const REPO = "https://github.com/dung-h/DeepLearning";

type MultimodalSampleRecord = {
  split: string;
  article_id: string;
  category: string;
  headline: string;
  abstract: string;
  body_preview_landing: string;
  body_preview_slide: string;
  caption: string;
  image_public_filename: string;
  image_original_path: string;
};

const multimodalSamples = (JSON.parse(multimodalSampleManifestRaw) as { records: MultimodalSampleRecord[] }).records;
const sampleImageModules = import.meta.glob("../assets/1.3/samples/*", { eager: true, import: "default" });
const sampleImageMap = Object.fromEntries(
  Object.entries(sampleImageModules).map(([key, value]) => [key.split("/").pop()!, value as string]),
);

const supervisedRows = [
  ["VisualBERT full fine-tune", "0.8555", "0.8456", "0.8555"],
  ["CLIP full fine-tune", "0.8421", "0.8250", "0.8421"],
  ["CLIP LoRA", "0.8388", "0.8230", "0.8388"],
  ["CLIP deep head", "0.8225", "0.8075", "0.8225"],
  ["VisualBERT LoRA", "0.8023", "0.7777", "0.8023"],
  ["VisualBERT deep head", "0.7183", "0.6777", "0.7183"],
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
      <p className="max-w-4xl text-base text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FigureCard = ({
  title,
  description,
  src,
  alt,
  children,
}: {
  title: string;
  description: string;
  src: string;
  alt: string;
  children?: React.ReactNode;
}) => (
  <Card className="border-2">
    <CardHeader className="pb-4">
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <img src={src} alt={alt} className="w-full rounded-lg border border-border shadow-sm" />
      {children}
    </CardContent>
  </Card>
);

const StatRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between border-b border-border/60 py-3 last:border-b-0">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-right text-lg font-bold text-foreground">{value}</span>
  </div>
);

const SummaryMetricCard = ({ value, label, sublabel }: { value: string; label: string; sublabel: string }) => (
  <div className="space-y-1 rounded-2xl border border-emerald-500/20 bg-white/70 px-5 py-4 text-center">
    <div className="text-4xl font-bold text-emerald-600">{value}</div>
    <div className="text-lg font-semibold text-foreground">{label}</div>
    <div className="text-sm text-muted-foreground">{sublabel}</div>
  </div>
);

const FieldBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1 rounded-2xl border border-border/70 bg-muted/25 p-3">
    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
    <p className="text-sm leading-6 text-foreground">{value}</p>
  </div>
);

const MultimodalSampleCard = ({ sample }: { sample: MultimodalSampleRecord }) => {
  const imageSrc = sampleImageMap[sample.image_public_filename];
  return (
    <Card className="border-2 bg-background/95">
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{sample.split}</Badge>
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">{sample.category}</Badge>
        </div>
        <div>
          <CardTitle className="text-lg">{sample.article_id}</CardTitle>
          <CardDescription>Ảnh và các trường văn bản được lấy trực tiếp từ processed split.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {imageSrc && <img src={imageSrc} alt={sample.category} className="h-52 w-full rounded-2xl border border-border object-cover shadow-sm" />}
        <div className="space-y-3">
          <FieldBlock label="Headline" value={sample.headline} />
          <FieldBlock label="Abstract" value={sample.abstract} />
          <FieldBlock label="Body preview" value={sample.body_preview_landing} />
          <FieldBlock label="Caption" value={sample.caption} />
        </div>
      </CardContent>
    </Card>
  );
};

const BTL1_Exercise3 = () => {
  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={3}
      title="Bài toán phân loại đa phương thức"
      description="N24News với ba lớp so sánh chính: zero-shot / few-shot CLIP, supervised CLIP và supervised VisualBERT trên cùng test split."
      backLink="/btl1"
    >
      <div className="container mx-auto space-y-14 px-4 py-10">
        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={Database}
              title="Dataset Introduction"
              description="Phần mở đầu giữ cùng triết lý với Exercise 1: thống kê dữ liệu rõ ràng, sample thật đủ ngữ cảnh và một card riêng để nhìn nhanh đặc điểm của N24News."
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>N24News</CardTitle>
                  <CardDescription>Dataset phân loại đa phương thức với 24 lớp tin tức; mỗi mẫu gồm ảnh đại diện và phần văn bản bài báo đi kèm.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="border-b border-border pb-2 text-lg font-bold text-foreground">Thống kê dữ liệu</h3>
                      <StatRow label="Số lớp" value="24" />
                      <StatRow label="Train / val / test" value="48,988 / 6,123 / 6,124" />
                      <StatRow label="Kiểu dữ liệu" value="Image + text" />
                      <StatRow label="Metric chính" value="Accuracy + macro F1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="border-b border-border pb-2 text-lg font-bold text-foreground">Giao thức mô hình</h3>
                      <StatRow label="Prompt-based" value="CLIP zero-shot" />
                      <StatRow label="Low-data" value="CLIP few-shot multi-seed" />
                      <StatRow label="Supervised" value="CLIP + VisualBERT" />
                      <StatRow label="Fine-tune strategy" value="full / LoRA / deep head" />
                    </div>
                  </div>
                  <Alert className="border-amber-500/30 bg-amber-500/5">
                    <Info className="h-4 w-4 text-amber-600" />
                    <AlertDescription>
                      N24News không chỉ là bài toán ảnh. Toàn bộ kết luận công khai đều phải đọc cùng lúc ảnh, headline, abstract, body và caption để tránh rút gọn sai bản chất dữ liệu.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <FigureCard
                title="Sample grid tổng quan"
                description="Grid này cho thấy độ đa dạng chủ đề, phong cách ảnh và bối cảnh thị giác của dataset trước khi đi vào sample card chi tiết."
                src={sampleGridImg}
                alt="N24News sample grid"
              >
                <Alert className="border-primary/20 bg-primary/5">
                  <AlertDescription>
                    Đây chỉ là cái nhìn nhanh ở mức dataset. Các sample card ngay bên dưới mới là phần dùng để đọc đầy đủ quan hệ giữa ảnh và văn bản.
                  </AlertDescription>
                </Alert>
              </FigureCard>
            </div>

            <Card className="mt-6 border-2">
              <CardHeader>
                <CardTitle>Mẫu dữ liệu đa phương thức</CardTitle>
                <CardDescription>Ba ví dụ thật từ ba split khác nhau, mỗi ví dụ đều giữ đủ ảnh, category thật và bốn trường văn bản chính.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 xl:grid-cols-3">
                  {multimodalSamples.map((sample) => (
                    <MultimodalSampleCard key={sample.article_id} sample={sample} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BarChart3}
              title="EDA"
              description="EDA của nhánh đa phương thức phải trả lời hai câu hỏi: trường văn bản nào thật sự có mặt đủ tốt, và text policy nào còn giữ được ngữ nghĩa mà không làm CLIP truncation quá nặng."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Thiếu trường văn bản theo split"
                description="Headline và abstract gần như đầy đủ; caption thiếu rất ít nhưng vẫn phải kiểm tra riêng vì đây là nguồn context bám sát ảnh."
                src={fieldMissingnessImg}
                alt="Field missingness"
              >
                <Alert className="border-blue-500/30 bg-blue-500/5">
                  <AlertDescription>
                    Kết quả này giải thích vì sao caption vẫn được giữ lại trong text policy cuối, thay vì bỏ hẳn chỉ vì thiếu một tỉ lệ nhỏ.
                  </AlertDescription>
                </Alert>
              </FigureCard>
              <FigureCard
                title="Rủi ro truncation theo text policy"
                description="headline + abstract + caption quá dài với CLIP, trong khi abstract + caption vẫn giữ ngữ nghĩa tốt hơn headline + caption mà giảm mạnh truncation."
                src={textPolicyImg}
                alt="Text policy truncation"
              >
                <Alert className="border-blue-500/30 bg-blue-500/5">
                  <AlertDescription>
                    Đây là quyết định EDA quan trọng nhất của notebook multimodal: chọn <strong>abstract + caption</strong> làm policy chính thức.
                  </AlertDescription>
                </Alert>
              </FigureCard>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={LayoutGrid}
              title="Dataset, DataLoader"
              description="Sau EDA, pipeline được khóa lại để zero-shot, few-shot và supervised dùng cùng text policy, tránh việc so sánh lệch chỉ vì input text khác nhau."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Chính sách ghép văn bản</CardTitle>
                  <CardDescription>Text policy chính thức của notebook multimodal là abstract + caption.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>headline + abstract + caption gây truncation quá cao cho CLIP, nên không còn phù hợp làm policy chính thức.</p>
                  <p>abstract + caption giữ nhiều ngữ nghĩa hơn headline + caption và vẫn giảm truncation xuống mức chấp nhận được.</p>
                  <p>Mỗi sample sau đó được ghép cặp ảnh + văn bản theo cùng split trước khi nạp vào CLIP hoặc VisualBERT.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Giao thức đánh giá</CardTitle>
                  <CardDescription>Tất cả chart public hiện tại đều đọc lại từ artifacts có sẵn, không train lại ở bước công bố.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Zero-shot: prompt-based CLIP.</p>
                  <p>Few-shot: K = 1, 2, 4, 8, 16 với 3 seed.</p>
                  <p>Supervised: full fine-tune, LoRA và deep head cho cả CLIP lẫn VisualBERT.</p>
                  <Alert className="border-amber-500/30 bg-amber-500/5">
                    <Info className="h-4 w-4 text-amber-600" />
                    <AlertDescription>Các chart được tách độc lập để đủ lớn khi chiếu slide và đủ rõ khi xem trên landing.</AlertDescription>
                  </Alert>
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
              description="Phần mô hình được trình bày tách bạch theo đúng vai trò: CLIP để đo lợi ích pretraining ở nhiều giao thức, còn VisualBERT là mốc fusion supervised chuyên dụng."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>CLIP</CardTitle>
                  <CardDescription>Được dùng xuyên suốt ở zero-shot, few-shot và supervised.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Zero-shot đo sức mạnh prompt-based từ backbone pretrain.</p>
                  <p>Few-shot cho thấy thêm rất ít mẫu hỗ trợ thì encoder cải thiện tới đâu.</p>
                  <p>Ở supervised, CLIP full fine-tune đạt test accuracy 0.8421; CLIP LoRA đạt 0.8388 với chi phí cập nhật tham số thấp hơn.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>VisualBERT</CardTitle>
                  <CardDescription>Mô hình fusion supervised cho bài toán ảnh-văn bản.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                    <p>VisualBERT full fine-tune là mốc mạnh nhất của nhánh supervised với test accuracy 0.8555 và macro F1 0.8456.</p>
                  <p>Cùng ba chiến lược fine-tune được giữ lại để so sánh công bằng với CLIP trên cùng split và cùng metrics.</p>
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
              description="Các learning curves được tách riêng cho đủ sáu biến thể supervised, giúp đọc rõ đâu là nhánh hội tụ ổn định và đâu là cấu hình suy giảm mạnh."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <FigureCard title="CLIP full fine-tune" description="Mốc chính cho nhánh supervised của CLIP." src={clipCurveImg} alt="CLIP full fine-tune learning curve" />
              <FigureCard title="CLIP LoRA" description="Giảm chi phí fine-tune nhưng vẫn bám sát bản full." src={clipLoraCurveImg} alt="CLIP LoRA learning curve" />
              <FigureCard title="CLIP deep head" description="Nhẹ hơn nhưng khó giữ ổn định bằng full fine-tune." src={clipDeepHeadCurveImg} alt="CLIP deep head learning curve" />
              <FigureCard title="VisualBERT full fine-tune" description="Nhánh mạnh nhất trong nhóm supervised." src={visualBertCurveImg} alt="VisualBERT full fine-tune learning curve" />
              <FigureCard title="VisualBERT LoRA" description="Giảm tham số cập nhật nhưng hụt khá rõ so với bản full." src={visualBertLoraCurveImg} alt="VisualBERT LoRA learning curve" />
              <FigureCard title="VisualBERT deep head" description="Biến thể suy giảm mạnh nhất về chất lượng." src={visualBertDeepHeadCurveImg} alt="VisualBERT deep head learning curve" />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={GitCompareArrows}
              title="Train Result"
              description="Cấu trúc phần kết quả được kéo gần về ex1: có một summary card để quét nhanh, rồi mới mở xuống zero/few-shot và supervised ranking."
            />

            <Card className="mb-6 border-2 border-emerald-500/20 bg-emerald-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  Kết quả chính
                </CardTitle>
                <CardDescription>Ba kết luận cần nhìn đầu tiên trước khi đi sâu xuống confusion matrix và attribution map.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <SummaryMetricCard value="0.8555" label="Best accuracy" sublabel="VisualBERT full fine-tune" />
                <SummaryMetricCard value="0.8456" label="Best macro F1" sublabel="VisualBERT full fine-tune" />
                <SummaryMetricCard value="0.4430" label="Best few-shot macro F1" sublabel="CLIP K=16, 3 seeds" />
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Few-shot CLIP: accuracy"
                description="Few-shot chỉ vượt zero-shot ổn định khi K đủ lớn; K = 16 cho accuracy tốt nhất trong nhóm few-shot hiện có."
                src={zeroFewAccuracyImg}
                alt="Few-shot accuracy"
              />
              <FigureCard
                title="Few-shot CLIP: macro F1"
                description="Macro F1 cho cùng kết luận: K nhỏ chưa đủ để few-shot vượt rõ zero-shot trên toàn bộ 24 lớp."
                src={zeroFewMacroF1Img}
                alt="Few-shot macro F1"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <FigureCard
                title="Xếp hạng supervised theo macro F1"
                description="VisualBERT full fine-tune dẫn đầu cả test accuracy (0.8555) lẫn macro F1 (0.8456); ở nhánh CLIP, full fine-tune đạt accuracy cao nhất 0.8421 còn LoRA là PEFT tốt nhất."
                src={supervisedMacroF1Img}
                alt="Supervised macro F1"
              />

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Bảng tóm tắt supervised</CardTitle>
                  <CardDescription>Single-label nên micro F1 trùng accuracy; bảng được rút về test-only để tránh trộn nhầm các cột val từ run cũ.</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Mô hình</TableHead>
                        <TableHead>Test acc</TableHead>
                        <TableHead>Test macro F1</TableHead>
                        <TableHead>Test micro F1</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supervisedRows.map((row) => (
                        <TableRow key={row[0]}>
                          <TableCell className="font-medium">{row[0]}</TableCell>
                          <TableCell>{row[1]}</TableCell>
                          <TableCell>{row[2]}</TableCell>
                          <TableCell>{row[3]}</TableCell>
                          <TableCell>{row[4]}</TableCell>
                          <TableCell>{row[5]}</TableCell>
                          <TableCell>{row[6]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
              description="Phần cuối được giữ dày như ex1, nhưng đi theo hướng root-cause: không bắt người xem tự đọc ma trận 24×24, mà mở thêm long-tail, case-type và dominant confusion pairs trước khi đi vào confusion matrix và attribution."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Long-tail của test split"
                description="EDA cũ đủ để giải thích text policy và truncation, nhưng chưa đủ để nói vì sao confusion matrix khó đọc. Bước bổ sung đầu tiên là nhìn lại head-tail structure của 24 lớp trên test split."
                src={labelDistributionImg}
                alt="N24News label distribution"
              />
              <FigureCard
                title="Phân phối case type trên full test"
                description="Nhóm cả hai cùng sai vẫn chiếm đa số, cho thấy độ khó không đến từ một mô hình đơn lẻ."
                src={caseTypeImg}
                alt="Case type distribution"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="VisualBERT dominant confusion pairs"
                description="Các cặp như Opinion → Dance hay Television → Books lặp lại với tần suất rất cao, nên confusion của VisualBERT thực ra không nhiễu ngẫu nhiên mà tập trung vào vài cụm lớp gần nghĩa."
                src={visualBertTopConfusionsImg}
                alt="VisualBERT dominant confusion pairs"
              />
              <FigureCard
                title="CLIP dominant confusion pairs"
                description="CLIP full fine-tune cũng vướng đúng các cụm gần nghĩa này, nhưng mức phân tán rộng hơn. Đây là lý do phải tách riêng confusion của CLIP và VisualBERT thay vì dùng chung một narrative."
                src={clipTopConfusionsImg}
                alt="CLIP dominant confusion pairs"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="VisualBERT confusion matrix"
                description="VisualBERT full fine-tune đạt 0.8555 accuracy và 0.8456 macro F1. Ma trận này cần được đọc cùng dominant confusion pairs ở trên để thấy model tập trung lỗi vào một số cụm semantics cụ thể."
                src={visualBertConfusionImg}
                alt="VisualBERT confusion matrix"
              />
              <FigureCard
                title="CLIP full fine-tune confusion matrix"
                description="CLIP full fine-tune đạt 0.8421 accuracy và 0.8250 macro F1. Truncation gần 37.5% ở text policy chính thức là một nguyên nhân hợp lý khiến confusion của CLIP phân tán hơn VisualBERT."
                src={clipConfusionImg}
                alt="CLIP full fine-tune confusion matrix"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Top pattern khi VisualBERT sai"
                description="Các cặp như Dance → Media hoặc Books → Movies là những lỗi lặp lại nhiều nhất trong nhóm VisualBERT sai."
                src={visualBertWrongImg}
                alt="VisualBERT wrong patterns"
              />
              <FigureCard
                title="Top pattern khi cả hai cùng sai"
                description="Những ca này thường nằm ở vùng giao nhau về ngữ nghĩa và có tín hiệu ảnh-văn bản đều chưa đủ tách biệt."
                src={bothWrongImg}
                alt="Both wrong patterns"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-1">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Vì sao confusion matrix khó giải thích nếu chỉ nhìn riêng nó?</CardTitle>
                  <CardDescription>EDA cũ đủ để quyết định text policy, nhưng chưa đủ để giải thích error structure của bài toán 24 lớp.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-base text-muted-foreground">
                  <p>EDA hiện tại trả lời tốt câu hỏi “ghép text như thế nào” nhưng chưa trả lời trọn câu hỏi “vì sao model nhầm lớp này sang lớp kia”. Muốn nói được confusion của multimodal, phải bổ sung thêm long-tail theo lớp và dominant confusion pairs.</p>
                  <p>Với CLIP, text policy chính thức vẫn gây truncation gần 37.5%, nên phần sai số không chỉ đến từ semantic overlap giữa các lớp mà còn đến từ giới hạn chiều dài text đi vào encoder.</p>
                  <p>Với VisualBERT, confusion tập trung hơn ở một số cặp lớp gần nghĩa, cho thấy fusion supervised mạnh hơn ở phần grounding ảnh-văn bản nhưng vẫn chưa tách được hoàn toàn các cụm chủ đề sát nhau.</p>
                  <Alert className="border-primary/20 bg-primary/5">
                    <AlertDescription>
                      Kết luận nghiệp vụ là: confusion matrix chỉ là mặt hiện tượng. Muốn giải thích gốc rễ, cần đọc cùng label tail/head, case-type và dominant confusion pairs.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Attribution trên nhánh ảnh CLIP (dùng trong VisualBERT)"
                description="Heatmap được tính trên đặc trưng patch-token của CLIP ViT-B/32 trước khi đưa vào nhánh fusion, giúp kiểm tra vùng ảnh mô hình đang ưu tiên."
                src={gradCamImg}
                alt="VisualBERT attribution on CLIP vision features"
              />
              <FigureCard
                title="Attribution của CLIP supervised"
                description="Panel CLIP được giữ ở bản supervised (test accuracy 0.8421) để so sánh trực tiếp với VisualBERT full fine-tune (test accuracy 0.8555)."
                src={clipSupervisedGradCamImg}
                alt="CLIP supervised attribution"
              />
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={NotebookPen}
              title="Kết luận"
              description="Khối kết luận chốt lại theo đúng pattern của ex1: metric nổi bật, khuyến nghị mô hình và ý nghĩa học thuật của các protocol."
            />

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Tổng kết bài toán đa phương thức</CardTitle>
                <CardDescription>Kết luận này bám hoàn toàn vào artifacts hiện có, không suy diễn vượt quá notebook truth.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <SummaryMetricCard value="0.8555" label="Best accuracy" sublabel="VisualBERT full fine-tune" />
                  <SummaryMetricCard value="0.8456" label="Best macro F1" sublabel="VisualBERT full fine-tune" />
                  <SummaryMetricCard value="0.8388" label="Best CLIP PEFT" sublabel="CLIP LoRA test accuracy" />
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  <Card className="border border-border/70"><CardContent className="pt-6 text-base text-muted-foreground"><p className="font-semibold text-foreground">VisualBERT full fine-tune</p><p>Dẫn đầu đồng thời ở test accuracy (0.8555) và macro F1 (0.8456), là cấu hình supervised tốt nhất hiện có.</p></CardContent></Card>
                  <Card className="border border-border/70"><CardContent className="pt-6 text-base text-muted-foreground"><p className="font-semibold text-foreground">CLIP few-shot</p><p>K=16 cải thiện rõ so với zero-shot nhưng vẫn còn khoảng cách lớn về accuracy so với các mô hình supervised.</p></CardContent></Card>
                  <Card className="border border-border/70"><CardContent className="pt-6 text-base text-muted-foreground"><p className="font-semibold text-foreground">Phân tích lỗi</p><p>Cần đọc đồng thời confusion matrix, case-type và attribution map để hiểu đúng giới hạn của dữ liệu và mô hình.</p></CardContent></Card>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={`${REPO}/blob/main/btl1/notebooks/text_image_classification.ipynb`} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Xem notebook
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`${REPO}/tree/main/btl1/artifacts/multimodal`} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Xem artifacts
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
