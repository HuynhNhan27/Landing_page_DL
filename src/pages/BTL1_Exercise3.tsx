import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, ExternalLink, FlaskConical, Gauge, Radar } from "lucide-react";

const REPO = "https://github.com/dung-h/DeepLearning";

const zeroFewRows = [
  { setting: "zero_shot", accuracy: 0.4314, macroF1: 0.3892, deltaAcc: 0.0, deltaF1: 0.0 },
  { setting: "few_shot_k1_mean", accuracy: 0.2749, macroF1: 0.2466, deltaAcc: -0.1565, deltaF1: -0.1426 },
  { setting: "few_shot_k2_mean", accuracy: 0.3275, macroF1: 0.2961, deltaAcc: -0.1039, deltaF1: -0.0931 },
  { setting: "few_shot_k4_mean", accuracy: 0.3870, macroF1: 0.3541, deltaAcc: -0.0444, deltaF1: -0.0350 },
  { setting: "few_shot_k8_mean", accuracy: 0.4334, macroF1: 0.3991, deltaAcc: 0.0020, deltaF1: 0.0099 },
  { setting: "few_shot_k16_mean", accuracy: 0.4744, macroF1: 0.4430, deltaAcc: 0.0430, deltaF1: 0.0538 },
];

const supervisedRows = [
  { model: "VisualBERT", strategy: "full_finetune", accuracy: 0.8752, macroF1: 0.8641 },
  { model: "CLIP", strategy: "full_finetune", accuracy: 0.8488, macroF1: 0.8064 },
  { model: "CLIP", strategy: "lora", accuracy: 0.8388, macroF1: 0.8230 },
  { model: "CLIP", strategy: "deep_head", accuracy: 0.8225, macroF1: 0.8075 },
  { model: "VisualBERT", strategy: "lora", accuracy: 0.8023, macroF1: 0.7777 },
  { model: "VisualBERT", strategy: "deep_head", accuracy: 0.7183, macroF1: 0.6777 },
];

const caseTypeRows = [
  { caseType: "both_wrong", count: 4980, ratio: 0.8132 },
  { caseType: "both_correct", count: 897, ratio: 0.1465 },
  { caseType: "clip_wrong_visualbert_right", count: 149, ratio: 0.0243 },
  { caseType: "clip_right_visualbert_wrong", count: 98, ratio: 0.0160 },
];

const vbWrongPatternRows = [
  { trueLabel: "Dance", vbPred: "Media", count: 295 },
  { trueLabel: "Books", vbPred: "Movies", count: 282 },
  { trueLabel: "Technology", vbPred: "Music", count: 279 },
  { trueLabel: "Art & Design", vbPred: "Real Estate", count: 277 },
  { trueLabel: "Real Estate", vbPred: "Television", count: 273 },
];

const sections = [
  { icon: Database, title: "Tổng quan và giao thức", color: "text-blue-600" },
  { icon: Gauge, title: "Zero-shot và few-shot CLIP", color: "text-violet-600" },
  { icon: Radar, title: "So sánh supervised + full-test audit", color: "text-emerald-600" },
  { icon: FlaskConical, title: "Liên kết minh chứng", color: "text-orange-600" },
];

const BTL1_Exercise3 = () => {
  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={3}
      title="Bài toán phân loại đa phương thức"
      backLink="/btl1"
      description="Đánh giá N24News theo hai nhánh độc lập: zero/few-shot CLIP và supervised CLIP/VisualBERT."
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
                    <p>Split chính thức: train 48,988 · val 6,123 · test 6,124.</p>
                    <p>Few-shot protocol: K = {`{1,2,4,8,16}`}, seed = {`{11,42,123}`}, prompt policy = ensemble.</p>
                    <p>Supervised protocol giữ đủ 3 chiến lược cho cả CLIP và VisualBERT: full_finetune, LoRA, deep_head.</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Zero-shot</Badge>
                      <Badge variant="secondary">Few-shot multi-seed</Badge>
                      <Badge variant="secondary">Supervised full/lora/deep_head</Badge>
                    </div>
                  </CardContent>
                </Card>
              )}

              {idx === 1 && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Zero/few-shot CLIP trên test split (mean theo seed)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="py-2 pr-4">Thiết lập</th>
                          <th className="py-2 pr-4">Accuracy</th>
                          <th className="py-2 pr-4">Macro F1</th>
                          <th className="py-2 pr-4">Δ Accuracy vs zero-shot</th>
                          <th className="py-2 pr-4">Δ Macro F1 vs zero-shot</th>
                        </tr>
                      </thead>
                      <tbody>
                        {zeroFewRows.map((row) => (
                          <tr key={row.setting} className="border-b">
                            <td className="py-2 pr-4">{row.setting}</td>
                            <td className="py-2 pr-4">{row.accuracy.toFixed(4)}</td>
                            <td className="py-2 pr-4">{row.macroF1.toFixed(4)}</td>
                            <td className="py-2 pr-4">{row.deltaAcc.toFixed(4)}</td>
                            <td className="py-2 pr-4">{row.deltaF1.toFixed(4)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-sm text-muted-foreground">
                      Kết luận nhánh zero/few-shot: few-shot chỉ vượt zero-shot ổn định từ K=8 trở lên, và K=16 cho mức cải thiện rõ nhất.
                    </p>
                  </CardContent>
                </Card>
              )}

              {idx === 2 && (
                <div className="space-y-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Supervised CLIP và VisualBERT (test split)</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b text-left">
                            <th className="py-2 pr-4">Model</th>
                            <th className="py-2 pr-4">Chiến lược</th>
                            <th className="py-2 pr-4">Accuracy</th>
                            <th className="py-2 pr-4">Macro F1</th>
                          </tr>
                        </thead>
                        <tbody>
                          {supervisedRows.map((row) => (
                            <tr key={`${row.model}-${row.strategy}`} className="border-b">
                              <td className="py-2 pr-4">{row.model}</td>
                              <td className="py-2 pr-4">{row.strategy}</td>
                              <td className="py-2 pr-4">{row.accuracy.toFixed(4)}</td>
                              <td className="py-2 pr-4">{row.macroF1.toFixed(4)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Full-test case audit (VisualBERT sai / cả hai cùng sai)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b text-left">
                              <th className="py-2 pr-4">Case type</th>
                              <th className="py-2 pr-4">Số mẫu</th>
                              <th className="py-2 pr-4">Tỉ lệ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {caseTypeRows.map((row) => (
                              <tr key={row.caseType} className="border-b">
                                <td className="py-2 pr-4">{row.caseType}</td>
                                <td className="py-2 pr-4">{row.count}</td>
                                <td className="py-2 pr-4">{(row.ratio * 100).toFixed(2)}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b text-left">
                              <th className="py-2 pr-4">Nhãn thật</th>
                              <th className="py-2 pr-4">VisualBERT dự đoán</th>
                              <th className="py-2 pr-4">Số mẫu</th>
                            </tr>
                          </thead>
                          <tbody>
                            {vbWrongPatternRows.map((row) => (
                              <tr key={`${row.trueLabel}-${row.vbPred}`} className="border-b">
                                <td className="py-2 pr-4">{row.trueLabel}</td>
                                <td className="py-2 pr-4">{row.vbPred}</td>
                                <td className="py-2 pr-4">{row.count}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Trên tập test hiện tại, phần lớn mẫu VisualBERT sai nằm trong nhóm cả CLIP cũng sai, nên lỗi chính đến từ độ khó dữ liệu hơn là lỗi riêng của một mô hình.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {idx === 3 && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Tệp notebook và artifacts</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href={`${REPO}/blob/main/btl1/notebooks/text_image_classification.ipynb`} target="_blank" rel="noreferrer">
                        Notebook text_image_classification.ipynb
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`${REPO}/tree/main/btl1/artifacts/multimodal`} target="_blank" rel="noreferrer">
                        Artifacts/multimodal
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

export default BTL1_Exercise3;
