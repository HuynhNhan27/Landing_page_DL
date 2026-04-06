import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  GitCompareArrows,
  Info,
  NotebookPen,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

import labelDistributionImg from "@/assets/1.2/text_label_distribution_public.png";
import labelCorrelationImg from "@/assets/1.2/text_label_correlation_public.png";
import splitBalanceImg from "@/assets/1.2/text_split_balance_public.png";
import vocabOovImg from "@/assets/1.2/text_vocab_oov_public.png";
import bertCurveImg from "@/assets/1.2/text_bert_learning_curve_public.png";
import lstmCurveImg from "@/assets/1.2/text_lstm_learning_curve_public.png";
import bertNonWeightedCurveImg from "@/assets/1.2/text_bert_nonweighted_learning_curve_public.png";
import lstmNonWeightedCurveImg from "@/assets/1.2/text_lstm_nonweighted_learning_curve_public.png";
import bertHeadWeightedCurveImg from "@/assets/1.2/text_bert_head_weighted_learning_curve_public.png";
import bertHeadNonWeightedCurveImg from "@/assets/1.2/text_bert_head_nonweighted_learning_curve_public.png";
import modelComparisonImg from "@/assets/1.2/text_model_comparison_public.png";
import bertConfusionImg from "@/assets/1.2/text_bert_confusion_public.png";
import lstmConfusionImg from "@/assets/1.2/text_lstm_confusion_public.png";
import perLabelF1Img from "@/assets/1.2/text_per_label_f1_public.png";
import textSampleManifestRaw from "@/assets/1.2/text_sample_records.json?raw";
import textInferenceManifestRaw from "@/assets/1.2/text_inference_examples_public.json?raw";

const REPO = "https://github.com/dung-h/DeepLearning";

type TextSampleRecord = {
  role: string;
  split: string;
  id: string;
  true_labels: string[];
  is_clean: boolean;
  comment_text: string;
  comment_preview_landing: string;
  comment_preview_slide: string;
};

type TextInferenceRecord = {
  role: string;
  split: string;
  id: string;
  headline: string;
  comment_text: string;
  comment_preview_landing: string;
  comment_preview_slide: string;
  true_labels: string[];
  bert_pred_labels: string[];
  lstm_pred_labels: string[];
  true_labels_text: string;
  bert_pred_text: string;
  lstm_pred_text: string;
  takeaway: string;
};

const textSamples = (JSON.parse(textSampleManifestRaw) as { records: TextSampleRecord[] }).records;
const textInferenceExamples = (JSON.parse(textInferenceManifestRaw) as { records: TextInferenceRecord[] }).records;

const roleMap: Record<string, string> = {
  clean_no_label: "Mẫu clean / no toxic label",
  common_toxic_overlap: "Mẫu overlap phổ biến",
  rare_label_pattern: "Mẫu nhãn hiếm",
};

const modelRows = [
  {
    model: "BERT full weighted",
    valMacroF1: "0.6715",
    valMicroF1: "0.7789",
    testAccuracy: "0.8691",
    testMacroF1: "0.5926",
    testMicroF1: "0.6664",
  },
  {
    model: "BERT full non-weighted",
    valMacroF1: "0.6754",
    valMicroF1: "0.7917",
    testAccuracy: "0.8615",
    testMacroF1: "0.5853",
    testMicroF1: "0.6578",
  },
  {
    model: "LSTM weighted",
    valMacroF1: "0.6254",
    valMicroF1: "0.7308",
    testAccuracy: "0.8728",
    testMacroF1: "0.5225",
    testMicroF1: "0.6161",
  },
  {
    model: "LSTM non-weighted",
    valMacroF1: "0.5511",
    valMicroF1: "0.7228",
    testAccuracy: "0.8645",
    testMacroF1: "0.4735",
    testMicroF1: "0.6088",
  },
  {
    model: "BERT head-only weighted",
    valMacroF1: "0.4407",
    valMicroF1: "0.5733",
    testAccuracy: "0.8568",
    testMacroF1: "0.3890",
    testMicroF1: "0.4973",
  },
  {
    model: "BERT head-only non-weighted",
    valMacroF1: "0.2624",
    valMicroF1: "0.4703",
    testAccuracy: "0.8721",
    testMacroF1: "0.3738",
    testMicroF1: "0.5123",
  },
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
  imageClassName,
  children,
}: {
  title: string;
  description: string;
  src: string;
  alt: string;
  imageClassName?: string;
  children?: React.ReactNode;
}) => (
  <Card className="border-2">
    <CardHeader className="pb-4">
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <img src={src} alt={alt} className={imageClassName ?? "w-full rounded-lg border border-border shadow-sm"} />
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

const SampleCard = ({ sample }: { sample: TextSampleRecord }) => (
  <Card className="border-2 bg-background/95">
    <CardHeader className="space-y-3 pb-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{sample.split}</Badge>
        <Badge variant="outline">{roleMap[sample.role] ?? sample.role}</Badge>
      </div>
      <div>
        <CardTitle className="text-lg">{sample.id}</CardTitle>
        <CardDescription>Comment raw snippet từ processed split.</CardDescription>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="rounded-2xl border border-border bg-muted/30 p-4">
        <p className="text-sm leading-7 text-foreground">{sample.comment_preview_landing}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {sample.true_labels.length > 0 ? (
          sample.true_labels.map((label) => (
            <Badge key={label} className="bg-primary/10 text-primary hover:bg-primary/10">
              {label}
            </Badge>
          ))
        ) : (
          <Badge className="bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/10">clean / no toxic label</Badge>
        )}
      </div>
    </CardContent>
  </Card>
);

const PredictionBadgeList = ({
  title,
  values,
  tone,
}: {
  title: string;
  values: string[];
  tone: "truth" | "bert" | "lstm";
}) => {
  const toneClass =
    tone === "truth"
      ? "bg-slate-100 text-slate-700"
      : tone === "bert"
        ? "bg-emerald-500/10 text-emerald-700"
        : "bg-amber-500/10 text-amber-700";

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-2">
        {(values.length > 0 ? values : ["clean / no toxic label"]).map((value) => (
          <Badge key={`${title}-${value}`} className={`${toneClass} hover:${toneClass}`}>
            {value}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const InferenceCard = ({ record }: { record: TextInferenceRecord }) => (
  <Card className="border-2 bg-background/95">
    <CardHeader className="space-y-3 pb-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{record.split}</Badge>
        <Badge variant="outline">{record.headline}</Badge>
      </div>
      <div>
        <CardTitle className="text-lg">{record.id}</CardTitle>
        <CardDescription>Checkpoint-inference-only trên test split, so sánh trực tiếp BERT weighted và LSTM weighted.</CardDescription>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="rounded-2xl border border-border bg-muted/30 p-4">
        <p className="text-sm leading-7 text-foreground">{record.comment_preview_landing}</p>
      </div>
      <PredictionBadgeList title="Ground truth" values={record.true_labels} tone="truth" />
      <PredictionBadgeList title="BERT weighted" values={record.bert_pred_labels} tone="bert" />
      <PredictionBadgeList title="LSTM weighted" values={record.lstm_pred_labels} tone="lstm" />
      <Alert className="border-primary/20 bg-primary/5">
        <AlertDescription>{record.takeaway}</AlertDescription>
      </Alert>
    </CardContent>
  </Card>
);

const SummaryMetricCard = ({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel: string;
}) => (
  <div className="space-y-1 rounded-2xl border border-emerald-500/20 bg-white/70 px-5 py-4 text-center">
    <div className="text-4xl font-bold text-emerald-600">{value}</div>
    <div className="text-lg font-semibold text-foreground">{label}</div>
    <div className="text-sm text-muted-foreground">{sublabel}</div>
  </div>
);

const BTL1_Exercise2 = () => {
  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={2}
      title="Bài toán phân loại văn bản"
      description="Jigsaw Toxic Comment đa nhãn với trọng tâm vào split cân bằng, weighted loss, threshold tuning và so sánh BERT với LSTM."
      backLink="/btl1"
    >
      <div className="container mx-auto space-y-14 px-4 py-10">
        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={Database}
              title="Dataset Introduction"
              description="Bài toán nhắm tới nhận diện 6 loại ngôn ngữ độc hại trong bình luận người dùng. Cấu trúc section này được giữ cùng nhịp với Exercise 1: thống kê dữ liệu rõ ràng, có mẫu thật và có lý do chọn macro F1."
            />

            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Jigsaw Toxic Comment</CardTitle>
                  <CardDescription>Processed split được tạo lại bằng iterative multilabel stratification để giữ cấu trúc nhãn ổn định giữa train, val và test.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="border-b border-border pb-2 text-lg font-bold text-foreground">Thống kê dữ liệu</h3>
                      <StatRow label="Tổng số bình luận gốc" value="159,571" />
                      <StatRow label="Số nhãn toxic" value="6 nhãn" />
                      <StatRow label="Split train / val / test" value="143,613 / 15,958 / 63,978" />
                      <StatRow label="Loại bài toán" value="Multi-label" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="border-b border-border pb-2 text-lg font-bold text-foreground">Giao thức chính</h3>
                      <StatRow label="Mô hình so sánh" value="BERT vs LSTM" />
                      <StatRow label="Nhánh BERT" value="full + head-only" />
                      <StatRow label="Loss setting" value="weighted + non-weighted" />
                      <StatRow label="Metric ưu tiên" value="Macro F1" />
                    </div>
                  </div>
                  <Alert className="border-amber-500/30 bg-amber-500/5">
                    <Info className="h-4 w-4 text-amber-600" />
                    <AlertDescription>
                      Severe toxic, threat và identity hate rất hiếm. Vì vậy landing page luôn đọc kết quả theo macro F1 và per-label behavior, không chỉ nhìn exact-match hay micro F1.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <FigureCard
                title="Tỷ lệ nhãn dương"
                description="Toxic, obscene và insult chiếm phần lớn các trường hợp dương; severe toxic, threat và identity hate mỏng hơn nhiều."
                src={labelDistributionImg}
                alt="Text label distribution"
              >
                <Alert className="border-primary/20 bg-primary/5">
                  <AlertDescription>
                    Đây là điểm xuất phát cho toàn bộ lựa chọn phía sau: split phải giữ phân phối tốt, loss phải cân nhắc imbalance và phần đánh giá phải mở xuống per-label.
                  </AlertDescription>
                </Alert>
              </FigureCard>
            </div>

            <Card className="mt-6 border-2">
              <CardHeader>
                <CardTitle>Mẫu dữ liệu văn bản</CardTitle>
                <CardDescription>Ba ví dụ thật từ ba split khác nhau: một clean sample, một overlap phổ biến và một trường hợp nhãn hiếm.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 xl:grid-cols-3">
                  {textSamples.map((sample) => (
                    <SampleCard key={sample.id} sample={sample} />
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
              description="EDA đi theo đúng logic trình bày của nhánh image: chỉ ra vấn đề dữ liệu trước, rồi mới biện minh cho split strategy và weighted loss."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="Tương quan giữa các nhãn"
                description="Obscene và insult đồng biến mạnh với toxic, trong khi threat và identity hate tạo thành cụm khó hơn do ít mẫu."
                src={labelCorrelationImg}
                alt="Text label correlation"
              >
                <Alert className="border-blue-500/30 bg-blue-500/5">
                  <AlertDescription>
                    Correlation này giải thích vì sao model dễ đạt điểm cao ở các nhãn phổ biến nhưng vẫn tụt rõ ở nhóm hiếm, dù loss nhìn đã hội tụ.
                  </AlertDescription>
                </Alert>
              </FigureCard>

              <FigureCard
                title="Cân bằng nhãn sau khi chia split"
                description="Iterative stratification giữ positive rate của từng nhãn gần nhau giữa train, val và test."
                src={splitBalanceImg}
                alt="Text split balance"
              >
                <Alert className="border-blue-500/30 bg-blue-500/5">
                  <AlertDescription>
                    Đây là điều kiện nền để so sánh BERT, LSTM, weighted và non-weighted một cách công bằng thay vì lệch do split.
                  </AlertDescription>
                </Alert>
              </FigureCard>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-muted/30 px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BookOpenCheck}
              title="Dataset, DataLoader"
              description="Sau EDA, pipeline nạp dữ liệu được khóa lại để hai họ mô hình dùng cùng split nhưng khác cách biểu diễn văn bản."
            />

            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Thiết lập xử lý dữ liệu</CardTitle>
                  <CardDescription>Hai nhánh dùng cùng processed split nhưng khác encoder và cách kiểm soát OOV.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-base text-muted-foreground">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background/80 p-4">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">BERT</h3>
                      <p>Dùng tokenizer subword và fine-tune trực tiếp trên comment gốc. Threshold được tune theo từng nhãn ở bước post-test.</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/80 p-4">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">LSTM</h3>
                      <p>Vocabulary xây từ train split và giữ đủ token hợp lệ để giảm OOV, giúp baseline tuần tự không bị thiệt vì cắt vocab quá tay.</p>
                    </div>
                  </div>
                  <Alert className="border-amber-500/30 bg-amber-500/5">
                    <Info className="h-4 w-4 text-amber-600" />
                    <AlertDescription>
                      Weighted và non-weighted đều được giữ lại trong notebook truth để chứng minh class imbalance thực sự tác động tới macro F1 như thế nào.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <FigureCard
                title="Rủi ro OOV theo split"
                description="Khi vocabulary của LSTM giữ đủ token train, tỷ lệ OOV ở val/test còn thấp và nằm trong mức chấp nhận được."
                src={vocabOovImg}
                alt="Text OOV summary"
              >
                <Alert className="border-primary/20 bg-primary/5">
                  <AlertDescription>
                    Việc giữ full vocabulary train là điểm quan trọng để baseline LSTM phản ánh đúng giới hạn mô hình, thay vì bị trừ điểm oan vì build vocab quá chặt.
                  </AlertDescription>
                </Alert>
              </FigureCard>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={BrainCircuit}
              title="Models"
              description="Phần mô hình được giữ đơn giản nhưng đủ rõ logic so sánh: BERT đo lợi ích transfer learning, còn LSTM là baseline tuần tự để soi nhánh hiếm."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>BERT</CardTitle>
                  <CardDescription>So sánh full fine-tune với head-only trên cùng checkpoint khởi tạo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>Full fine-tune cho phép cập nhật toàn bộ encoder; head-only dùng để đo giá trị thực của việc mở toàn mô hình.</p>
                  <p>Mỗi nhánh lại được chạy thêm weighted và non-weighted để đo riêng ảnh hưởng của class imbalance.</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>LSTM</CardTitle>
                  <CardDescription>Baseline tuần tự bám cùng split và cùng giao thức đánh giá với BERT.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-base text-muted-foreground">
                  <p>LSTM weighted / non-weighted giúp đo trực tiếp khoảng cách giữa contextual encoder và baseline truyền thống.</p>
                  <p>Đây là mốc tham chiếu cần có trong một bài toán học thuật, thay vì chỉ công bố best model cuối cùng.</p>
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
              description="Mỗi chart đều có Loss + val macro F1 + val micro F1, và được nhóm theo từng cặp weighted/non-weighted trên cùng một hàng để dễ so sánh trực tiếp."
            />

            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <FigureCard
                  title="BERT full weighted"
                  description="Nhánh mạnh nhất của bài toán văn bản."
                  src={bertCurveImg}
                  alt="BERT weighted learning curve"
                  imageClassName="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                />
                <FigureCard
                  title="BERT full non-weighted"
                  description="Hội tụ nhanh nhưng hụt ở các nhãn hiếm hơn."
                  src={bertNonWeightedCurveImg}
                  alt="BERT non-weighted learning curve"
                  imageClassName="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <FigureCard
                  title="LSTM weighted"
                  description="Baseline ổn định hơn khi có pos_weight."
                  src={lstmCurveImg}
                  alt="LSTM weighted learning curve"
                  imageClassName="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                />
                <FigureCard
                  title="LSTM non-weighted"
                  description="Macro F1 giảm rõ khi bỏ weighting."
                  src={lstmNonWeightedCurveImg}
                  alt="LSTM non-weighted learning curve"
                  imageClassName="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <FigureCard
                  title="BERT head-only weighted"
                  description="Ổn định nhưng bị chặn trần do encoder đóng băng."
                  src={bertHeadWeightedCurveImg}
                  alt="BERT head-only weighted learning curve"
                  imageClassName="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                />
                <FigureCard
                  title="BERT head-only non-weighted"
                  description="Biến thể yếu nhất về macro F1."
                  src={bertHeadNonWeightedCurveImg}
                  alt="BERT head-only non-weighted learning curve"
                  imageClassName="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={GitCompareArrows}
              title="Train Result"
              description="Phần kết quả giữ đúng tinh thần ex1: có khối tổng hợp ngắn để quét nhanh, sau đó mới đi vào chart và bảng chi tiết."
            />

            <Card className="mb-6 border-2 border-emerald-500/20 bg-emerald-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  Kết quả chính
                </CardTitle>
                <CardDescription>Ba chỉ dấu cần nhìn đầu tiên trước khi đọc sâu xuống confusion matrix và per-label F1.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <SummaryMetricCard value="0.5926" label="Macro F1 cao nhất" sublabel="BERT full weighted" />
                <SummaryMetricCard value="0.8728" label="Test accuracy cao nhất" sublabel="LSTM weighted" />
                <SummaryMetricCard value="0.2036" label="Khoảng cách BERT - LSTM" sublabel="Macro F1 gap giữa best two families" />
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <FigureCard
                title="So sánh macro F1 trên test"
                description="BERT full weighted dẫn đầu theo macro F1; riêng test accuracy cao nhất thuộc về LSTM weighted (0.8728) nhưng macro F1 vẫn thấp hơn đáng kể."
                src={modelComparisonImg}
                alt="Text model comparison"
              />

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Bảng tóm tắt kết quả</CardTitle>
                  <CardDescription>Val macro/micro F1 được đặt cạnh test accuracy để tránh chọn model chỉ theo một cột điểm đơn lẻ.</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Mô hình</TableHead>
                        <TableHead>Val macro F1</TableHead>
                        <TableHead>Val micro F1</TableHead>
                        <TableHead>Test acc</TableHead>
                        <TableHead>Test macro F1</TableHead>
                        <TableHead>Test micro F1</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {modelRows.map((row) => (
                        <TableRow key={row.model}>
                          <TableCell className="font-medium">{row.model}</TableCell>
                          <TableCell>{row.valMacroF1}</TableCell>
                          <TableCell>{row.valMicroF1}</TableCell>
                          <TableCell>{row.testAccuracy}</TableCell>
                          <TableCell>{row.testMacroF1}</TableCell>
                          <TableCell>{row.testMicroF1}</TableCell>
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
              icon={ShieldAlert}
              title="Phân tích kết quả"
              description="Phần cuối được làm dày theo cùng tinh thần ex1: không dừng ở một chart tổng hợp, mà hạ xuống inference examples, confusion matrix của cả BERT và LSTM, per-label F1 và kết luận lỗi hiếm."
            />

            <Card className="mb-6 border-2">
              <CardHeader>
                <CardTitle>Selected inference examples</CardTitle>
                <CardDescription>Ba ví dụ test split được chọn từ checkpoint-inference-only để minh họa vì sao BERT thắng ở macro F1 trong khi LSTM vẫn có accuracy rất cao.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 xl:grid-cols-3">
                  {textInferenceExamples.map((record) => (
                    <InferenceCard key={`${record.role}-${record.id}`} record={record} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <FigureCard
                title="BERT full weighted: confusion matrix"
                description="Confusion matrix theo từng nhãn 2x2 giúp nhìn rõ trade-off precision / recall cho từng label."
                src={bertConfusionImg}
                alt="BERT confusion matrix"
              />
              <FigureCard
                title="LSTM weighted: confusion matrix"
                description="Baseline LSTM cho thấy vùng nhãn hiếm vẫn khó hơn rõ rệt so với BERT, dù đã dùng weighted loss."
                src={lstmConfusionImg}
                alt="LSTM confusion matrix"
              />
            </div>

            <div className="mt-6">
              <FigureCard
                title="Per-label F1 của hai weighted baselines"
                description="BERT và LSTM đều mạnh ở toxic / obscene, nhưng BERT giữ được lợi thế rõ hơn ở các nhãn hiếm."
                src={perLabelF1Img}
                alt="Per-label F1"
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Nhóm nhãn dễ</CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground">
                  <p>
                    <strong className="text-foreground">toxic</strong> và <strong className="text-foreground">obscene</strong> có nhiều mẫu dương hơn, nên cả BERT và LSTM đều học được tốt hơn.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Nhóm nhãn khó</CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground">
                  <p>
                    <strong className="text-foreground">severe toxic</strong>, <strong className="text-foreground">threat</strong> và <strong className="text-foreground">identity hate</strong> vẫn là ba nhãn khó nhất vì ít mẫu và biên ngữ nghĩa hẹp.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Ý nghĩa của weighted loss</CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground">
                  <p>
                    Weighted loss không làm mọi metric cùng tăng, nhưng giữ macro F1 tốt hơn rõ ở cả BERT lẫn LSTM. Đây là lựa chọn hợp lý cho bài toán đa nhãn lệch phân phối.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-5">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              icon={NotebookPen}
              title="Kết luận"
              description="Khối kết luận được trình bày như một summary card riêng để giảng viên có thể quét nhanh kết quả cuối cùng và hướng chọn model."
            />

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Tổng kết bài toán văn bản</CardTitle>
                <CardDescription>Phần kết luận chốt theo đúng artifact hiện có, không suy diễn vượt quá notebook truth.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <SummaryMetricCard value="0.5926" label="Best macro F1" sublabel="BERT full weighted" />
                  <SummaryMetricCard value="0.6664" label="Best micro F1" sublabel="BERT full weighted" />
                  <SummaryMetricCard value="0.8728" label="Best test accuracy" sublabel="LSTM weighted" />
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  <Card className="border border-border/70">
                    <CardContent className="pt-6 text-base text-muted-foreground">
                      <p className="font-semibold text-foreground">BERT full weighted</p>
                      <p>Là cấu hình chính thức tốt nhất vì giữ macro F1 cao nhất (0.5926), dù test accuracy (0.8691) thấp hơn nhẹ so với LSTM weighted.</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/70">
                    <CardContent className="pt-6 text-base text-muted-foreground">
                      <p className="font-semibold text-foreground">LSTM weighted</p>
                      <p>Đạt test accuracy cao nhất (0.8728), nhưng vẫn thua BERT đáng kể ở macro F1 nên chưa phải lựa chọn tốt nhất cho nhãn hiếm.</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/70">
                    <CardContent className="pt-6 text-base text-muted-foreground">
                      <p className="font-semibold text-foreground">Head-only</p>
                      <p>Cho thấy rõ đóng băng encoder không đủ mạnh cho bài toán này, nên full fine-tune là lựa chọn đáng giữ lại.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={`${REPO}/blob/main/btl1/notebooks/text_classification.ipynb`} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Xem notebook
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={`${REPO}/tree/main/btl1/artifacts/text`} target="_blank" rel="noreferrer">
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

export default BTL1_Exercise2;
