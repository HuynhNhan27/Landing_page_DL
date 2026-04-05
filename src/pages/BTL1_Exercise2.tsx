import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, ExternalLink, FlaskConical, LineChart, NotebookPen } from "lucide-react";

const REPO = "https://github.com/dung-h/DeepLearning";

const protocolRows = [
  { model: "BERT full, weighted", valMacroF1: 0.6715, testMacroF1: 0.5926, testMicroF1: 0.6664 },
  { model: "BERT full, non-weighted", valMacroF1: 0.6754, testMacroF1: 0.5853, testMicroF1: 0.6578 },
  { model: "BERT head-only, weighted", valMacroF1: 0.4407, testMacroF1: 0.3890, testMicroF1: 0.4973 },
  { model: "BERT head-only, non-weighted", valMacroF1: 0.2624, testMacroF1: 0.3738, testMicroF1: 0.5123 },
  { model: "LSTM weighted", valMacroF1: 0.6254, testMacroF1: 0.5225, testMicroF1: 0.6161 },
  { model: "LSTM non-weighted", valMacroF1: 0.5511, testMacroF1: 0.4735, testMicroF1: 0.6088 },
];

const sections = [
  { icon: Database, title: "Tổng quan dữ liệu và giao thức", color: "text-blue-600" },
  { icon: FlaskConical, title: "Đánh giá hậu kiểm", color: "text-violet-600" },
  { icon: LineChart, title: "Bảng so sánh mô hình", color: "text-emerald-600" },
  { icon: NotebookPen, title: "Liên kết minh chứng", color: "text-orange-600" },
];

const BTL1_Exercise2 = () => {
  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={2}
      title="Bài toán phân loại văn bản"
      backLink="/btl1"
      description="Đánh giá bài toán phân loại văn bản từ checkpoint đã huấn luyện và các artifacts hậu kiểm."
    >
      <div className="container mx-auto space-y-12 px-4 py-10">
        {sections.map((section, idx) => (
          <section key={section.title} className={idx % 2 === 0 ? "rounded-lg bg-muted/30 px-4 py-10" : "px-4 py-10"}>
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center gap-3">
                <section.icon className={`h-7 w-7 ${section.color}`} />
                <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
              </div>

              {idx === 0 && (
                <Card className="border-2">
                  <CardContent className="space-y-3 pt-6 text-base text-muted-foreground">
                    <p>Dataset: Jigsaw Toxic Comment, bài toán đa nhãn 6 lớp.</p>
                    <p>Split train/val/test dùng iterative multilabel stratification để giữ phân phối nhãn nhất quán giữa các tập.</p>
                    <p>Đánh giá gồm hai họ mô hình (BERT, LSTM) và bốn chiến lược chính (full/head-only, weighted/non-weighted).</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">6 nhãn toxic</Badge>
                      <Badge variant="secondary">Iterative stratification</Badge>
                      <Badge variant="secondary">Threshold tuning</Badge>
                    </div>
                  </CardContent>
                </Card>
              )}

              {idx === 1 && (
                <Card className="border-2">
                  <CardContent className="space-y-3 pt-6 text-base text-muted-foreground">
                    <p>Phần hậu kiểm chạy theo chế độ artifact-first: đọc trực tiếp checkpoint, history và bảng metrics đã lưu.</p>
                    <p>Bộ output hậu kiểm hiện dùng để chấm gồm bảng so sánh tổng hợp, confusion matrix dạng gốc và normalized cho mô hình đại diện.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">text_post_test_summary.png</Badge>
                      <Badge variant="secondary">text_bert_full_weighted_confusion_raw_norm.png</Badge>
                      <Badge variant="secondary">text_lstm_weighted_confusion_raw_norm.png</Badge>
                    </div>
                  </CardContent>
                </Card>
              )}

              {idx === 2 && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Bảng assessment (text_model_comparison.csv)</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="py-2 pr-4">Mô hình</th>
                          <th className="py-2 pr-4">Best val macro F1</th>
                          <th className="py-2 pr-4">Test macro F1</th>
                          <th className="py-2 pr-4">Test micro F1</th>
                        </tr>
                      </thead>
                      <tbody>
                        {protocolRows.map((row) => (
                          <tr key={row.model} className="border-b">
                            <td className="py-2 pr-4">{row.model}</td>
                            <td className="py-2 pr-4">{row.valMacroF1.toFixed(4)}</td>
                            <td className="py-2 pr-4">{row.testMacroF1.toFixed(4)}</td>
                            <td className="py-2 pr-4">{row.testMicroF1.toFixed(4)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              )}

              {idx === 3 && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Tệp notebook và artifacts</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={`${REPO}/blob/main/btl1/notebooks/text_classification.ipynb`} target="_blank" rel="noreferrer">
                        Notebook text_classification.ipynb
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`${REPO}/tree/main/btl1/artifacts/text`} target="_blank" rel="noreferrer">
                        Artifacts/text
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        ))}
      </div>
    </ExerciseTemplate>
  );
};

export default BTL1_Exercise2;
