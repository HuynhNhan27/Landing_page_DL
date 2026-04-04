import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Database, MessageSquare, Brain, Lightbulb, FileText, ArrowLeft, Settings, Scissors, Layers, Code2, BarChart3, Network } from "lucide-react";
import { Link } from "react-router-dom";
import ml2TextLenHisto from "@/assets/ml2_textlen_histo.png";
import ml2TextLenBoxplot from "@/assets/ml2_textlen_boxplot.png";
import ml2LabelDist from "@/assets/ml2_label.png";
import ml2Rf from "@/assets/ml2_rf.png";
import ml2Mlp from "@/assets/ml2_mlp.png";
import ml2Confusion from "@/assets/ml2_confusion.png";
import ml2HistoAfter from "@/assets/ml2_histo_after.png";
import ml2BoxAfter from "@/assets/ml2_box_after.png";

const BTL2 = () => {
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Text Data / NLP</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            BTL2 – Text Processing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phát hiện cảm xúc từ văn bản sử dụng Natural Language Processing và Deep Learning
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://colab.research.google.com/drive/1FpZT_pxSkoPX01GMBuddQoQ_bh7SBXdC?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Mở Google Colab
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.kaggle.com/datasets/pashupatigupta/emotion-detection-from-text/data" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Xem Dataset
            </a>
          </Button>
        </div>
      </section>

      {/* Tổng quan dữ liệu */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Tổng quan dữ liệu</h2>
        <Card className="max-w-4xl mx-auto border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Emotion Detection from Text Dataset
            </CardTitle>
            <CardDescription>Tập dữ liệu văn bản với nhãn cảm xúc đa dạng</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Thông tin chính:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Dữ liệu gồm 40000 tweets tiếng Anh</li>
                  <li>Gồm 13 loại cảm xúc: joy, sadness, anger, fear, love, surprise, ...</li>
                  <li>Dữ liệu chưa được làm sạch</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Thách thức:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Text ngắn và context đa dạng</li>
                  <li>Các lớp phân bố không đồng đều</li>
                  <li>Xử lý ngữ cảnh và từ đồng nghĩa</li>
                  <li>Một vài cảm xúc khá tương đồng nhau</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Methodology Pipeline */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Quy trình xử lý (Pipeline)</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">1. EDA Text & Label</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Phát hiện text độ dài trung bình ngắn, chứa nhiều từ hiếm và ký tự đặc biệt. Dữ liệu bị Imbalance, một số nhãn rất ít dữ liệu
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <Lightbulb className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">2. Text Preprocessing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Loại bỏ link, hastag, ký tự đặc biệt; lowercasing, remove stopword, lemmatization. Ordinal Encode nhãn.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <Lightbulb className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">3. Feature Extraction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                BoW, TF-IDF embeddings, BERT embeddings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <Brain className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">4. Model Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Huấn luyện mô hình LogisticRegression, RandomForest, MLP, NaiveBayes
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <MessageSquare className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">5. Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Đánh giá dựa trên Accuracy, Precision, Recall, F1-score
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Thống kê dữ liệu văn bản */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Thống kê chiều dài văn bản</h2>
        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Bảng thống kê mô tả</CardTitle>
              <CardDescription>Các chỉ số thống kê cơ bản về chiều dài của văn bản trong tập dữ liệu</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Chỉ số</TableHead>
                    <TableHead>Giá trị (Gốc)</TableHead>
                    <TableHead>Giá trị (Sau xử lý)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Count</TableCell>
                    <TableCell>39827.000000</TableCell>
                    <TableCell>39827.000000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mean</TableCell>
                    <TableCell>73.530821</TableCell>
                    <TableCell>42.748789</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Std</TableCell>
                    <TableCell>36.490448</TableCell>
                    <TableCell>24.201029</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Min</TableCell>
                    <TableCell>1.000000</TableCell>
                    <TableCell>0.000000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">25%</TableCell>
                    <TableCell>43.000000</TableCell>
                    <TableCell>23.000000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">50%</TableCell>
                    <TableCell>69.000000</TableCell>
                    <TableCell>39.000000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">75%</TableCell>
                    <TableCell>103.000000</TableCell>
                    <TableCell>60.000000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Max</TableCell>
                    <TableCell>167.000000</TableCell>
                    <TableCell>130.000000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Biểu đồ phân phối</CardTitle>
                <CardDescription>Histogram chiều dài văn bản</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={ml2TextLenHisto} 
                    alt="Histogram chiều dài văn bản" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Biểu đồ hộp (Boxplot)</CardTitle>
                <CardDescription>Phân bố và giá trị ngoại lai</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={ml2TextLenBoxplot} 
                    alt="Boxplot chiều dài văn bản" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Biểu đồ phân phối (Sau xử lý)</CardTitle>
                <CardDescription>Histogram chiều dài văn bản sau khi làm sạch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={ml2HistoAfter} 
                    alt="Histogram chiều dài văn bản sau xử lý" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Biểu đồ hộp (Sau xử lý)</CardTitle>
                <CardDescription>Phân bố và giá trị ngoại lai sau khi làm sạch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={ml2BoxAfter} 
                    alt="Boxplot chiều dài văn bản sau xử lý" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Viết ở đây */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Nhận xét</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Phân bố độ dài:</span> Phần lớn các tweet có độ dài ngắn đến trung bình, tập trung chủ yếu trong khoảng từ 40 đến 100 ký tự. Làm sạch khiến độ dài tweet giảm xuống còn từ 20 đến 40 ký tự.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Dạng phân phối:</span> Biểu đồ Histogram có dạng phân phối gần chuẩn nhưng hơi lệch phải, cho thấy có một số lượng nhỏ tweet có độ dài lớn hơn đáng kể so với trung bình. Xử lý làm sạch làm chiều dài tổng thể giảm đi, khiến một số tweet dài trở thành outlier và làm phân phối lệch phải nặng hơn.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Giá trị ngoại lai (Outliers):</span> Biểu đồ Boxplot cho thấy sự xuất hiện của một số outlier ở phía trên (các tweet rất dài). Tuy nhiên, số lượng outlier này không quá nhiều và độ dài tối đa cũng không quá cực đoan (thường bị giới hạn bởi quy định của Twitter/X).
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Phân tích từ vựng (Bag of Words) */}
      <section className="container mx-auto px-4 py-12 bg-slate-50/50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Phân tích từ vựng (Bag of Words)</h2>
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Thống kê đặc biệt */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Special key count", value: "144,828" },
              { label: "Mention (@) count", value: "19,991" },
              { label: "Hashtag (#) count", value: "920" },
              { label: "Link count", value: "1,804" },
              { label: "Rare words (count=1)", value: "38,706" },
              { label: "Rare words (after preproc)", value: "21,351" },
            ].map((stat, index) => (
              <Card key={index} className="border-2 text-center hover:border-primary/50 transition-colors">
                <CardHeader className="py-6">
                  <CardDescription className="text-xs uppercase font-bold tracking-wider">{stat.label}</CardDescription>
                  <CardTitle className="text-3xl text-primary">{stat.value}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Top 5 từ phổ biến */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Top 5 từ phổ biến nhất</CardTitle>
              <CardDescription>So sánh tần suất từ trước và sau khi loại bỏ stopwords</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="text-base py-1 px-4">Trước khi xử lý</Badge>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Từ vựng</TableHead>
                        <TableHead className="text-right">Số lượng</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { word: "i", count: "18,980" },
                        { word: "to", count: "14,329" },
                        { word: "the", count: "12,847" },
                        { word: "a", count: "9,613" },
                        { word: "my", count: "7,972" },
                      ].map((item) => (
                        <TableRow key={item.word}>
                          <TableCell className="font-medium text-lg">"{item.word}"</TableCell>
                          <TableCell className="text-right font-mono">{item.count}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Badge className="text-base py-1 px-4">Sau khi loại bỏ Stopwords</Badge>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Từ vựng</TableHead>
                        <TableHead className="text-right">Số lượng</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { word: "im", count: "4,407" },
                        { word: "day", count: "2,990" },
                        { word: "good", count: "2,243" },
                        { word: "get", count: "1,999" },
                        { word: "like", count: "1,928" },
                      ].map((item) => (
                        <TableRow key={item.word}>
                          <TableCell className="font-medium text-lg text-primary">"{item.word}"</TableCell>
                          <TableCell className="text-right font-mono">{item.count}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Phân bố nhãn (Label Distribution) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Phân bố nhãn (Label Distribution)</h2>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="border-2 h-full">
              <CardHeader>
                <CardTitle>Biểu đồ phân bố nhãn</CardTitle>
                <CardDescription>Số lượng mẫu cho từng loại cảm xúc</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={ml2LabelDist} 
                    alt="Label Distribution Histogram" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 h-full">
              <CardHeader>
                <CardTitle>Nhận xét về dữ liệu</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Mất cân bằng dữ liệu (Imbalance):</span>
                    <p className="mt-1 ml-4">
                      Các lớp <Badge variant="outline">neutral</Badge>, <Badge variant="outline">worry</Badge>, <Badge variant="outline">happiness</Badge> chiếm đa số mẫu.
                      Trong khi đó, các lớp như <Badge variant="destructive">anger</Badge>, <Badge variant="secondary">boredom</Badge>, <Badge variant="secondary">enthusiasm</Badge> có rất ít dữ liệu.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Thước đo đánh giá:</span>
                    <p className="mt-1 ml-4">
                      Do dữ liệu mất cân bằng, <strong>Accuracy</strong> sẽ không phản ánh đúng hiệu năng mô hình. Cần ưu tiên sử dụng <strong>F1-score</strong> (Macro hoặc Weighted) để đánh giá.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Giải pháp đề xuất:</span>
                    <p className="mt-1 ml-4">
                      Có thể sử dụng kỹ thuật <code>class_weight</code> trong quá trình huấn luyện để "phạt" nặng hơn khi mô hình dự đoán sai các lớp thiểu số, giúp cân bằng lại sự ảnh hưởng của các lớp.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tiền xử lý & Feature Extraction */}
      <section className="container mx-auto px-4 py-12 bg-slate-50/50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Tiền xử lý & Trích xuất đặc trưng</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Preprocessing */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Scissors className="w-6 h-6 text-primary" />
                <CardTitle>Tiền xử lý dữ liệu (Preprocessing)</CardTitle>
              </div>
              <CardDescription>Các bước làm sạch và chuẩn hóa văn bản</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <span><strong>Lowercase:</strong> Chuyển đổi toàn bộ văn bản về chữ thường.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <span><strong>Cleaning:</strong> Loại bỏ các thực thể nhiễu như Links, Hashtags (#), Mentions (@).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <span><strong>Tokenization:</strong> Tách từ sử dụng phương pháp Split cơ bản hoặc thư viện NLTK.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">4</Badge>
                    <span><strong>Stopwords Removal:</strong> Loại bỏ các từ phổ biến không mang nhiều ý nghĩa (the, is, at...).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">5</Badge>
                    <span><strong>Lemmatization:</strong> Đưa từ về dạng nguyên thể (ví dụ: running -&gt; run).</span>
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg flex items-start gap-2 text-sm text-muted-foreground">
                  <Settings className="w-4 h-4 mt-1 shrink-0" />
                  <p>Lưu ý: Các bước tiền xử lý được thiết kế linh hoạt, có thể bật/tắt từng bước trong quá trình huấn luyện để tìm ra pipeline tối ưu nhất cho từng mô hình.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Extraction */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-6 h-6 text-primary" />
                <CardTitle>Trích xuất đặc trưng (Feature Extraction)</CardTitle>
              </div>
              <CardDescription>Chuyển đổi văn bản thành vector số học</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> Phương pháp truyền thống
                  </h4>
                  <ul className="list-disc list-inside ml-4 text-muted-foreground">
                    <li><strong>Bag of Words (BoW):</strong> Biểu diễn văn bản dựa trên tần suất xuất hiện của từ.</li>
                    <li><strong>TF-IDF:</strong> Đánh trọng số cho từ dựa trên độ phổ biến trong văn bản và độ hiếm trong toàn bộ tập dữ liệu.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Brain className="w-4 h-4" /> Phương pháp hiện đại
                  </h4>
                  <ul className="list-disc list-inside ml-4 text-muted-foreground">
                    <li><strong>BERT Embeddings:</strong> Sử dụng mô hình ngôn ngữ lớn (Pre-trained Transformer) để tạo ra vector ngữ nghĩa ngữ cảnh (Contextual Embeddings).</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg flex items-start gap-2 text-sm text-muted-foreground">
                  <Settings className="w-4 h-4 mt-1 shrink-0" />
                  <p>Chiến lược: Tất cả các phương pháp trích xuất đặc trưng này đều được thử nghiệm độc lập để so sánh hiệu quả đối với bài toán phân loại cảm xúc.</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Quá trình Huấn luyện & Tối ưu hóa */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Quá trình Huấn luyện & Tối ưu hóa</h2>
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Giai đoạn 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge className="text-lg py-1 px-4">Giai đoạn 1</Badge>
              <h3 className="text-2xl font-semibold">Tìm cấu hình Tiền xử lý & Feature Extraction tối ưu</h3>
            </div>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Kết quả thực nghiệm trên 4 mô hình</CardTitle>
                <CardDescription>So sánh hiệu suất F1-score với các cấu hình khác nhau</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mô hình</TableHead>
                      <TableHead>Kiểu Tokenize</TableHead>
                      <TableHead>Loại bỏ Stopword</TableHead>
                      <TableHead>Max Features</TableHead>
                      <TableHead className="text-right">F1-score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-primary/10 font-bold border-primary/20">
                      <TableCell>LogisticReg</TableCell>
                      <TableCell>nltk</TableCell>
                      <TableCell>False</TableCell>
                      <TableCell>2000</TableCell>
                      <TableCell className="text-right">0.318669</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>RandomForest</TableCell>
                      <TableCell>split</TableCell>
                      <TableCell>True</TableCell>
                      <TableCell>3000</TableCell>
                      <TableCell className="text-right">0.301504</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>MLP</TableCell>
                      <TableCell>split</TableCell>
                      <TableCell>True</TableCell>
                      <TableCell>1500</TableCell>
                      <TableCell className="text-right">0.262520</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>NaiveBayes</TableCell>
                      <TableCell>nltk</TableCell>
                      <TableCell>True</TableCell>
                      <TableCell>2000</TableCell>
                      <TableCell className="text-right">0.273574</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-6 bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" /> Nhận xét:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li><strong>Logistic Regression</strong> cho kết quả F1-score ổn định và tốt nhất. RandomForest kết quả chỉ kém hơn Logistic một chút.</li>
                    <li>MultinomialNB và MLPClassifier có hiệu suất thấp hơn đáng kể trong giai đoạn này.</li>
                    <li>Việc lựa chọn tokenizer là <code>nltk</code> hay <code>split</code> không ảnh hưởng quá lớn đến kết quả.</li>
                    <li>Số lượng đặc trưng (max_features) khoảng <strong>1500-2000</strong> là đã đủ để mang lại hiệu suất tốt.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Giai đoạn 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge className="text-lg py-1 px-4 bg-secondary text-secondary-foreground">Giai đoạn 2</Badge>
              <h3 className="text-2xl font-semibold">Tinh chỉnh siêu tham số (Hyperparameter Tuning)</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Random Forest Tuning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">Criterion</TableHead>
                          <TableHead className="text-xs">Max Depth</TableHead>
                          <TableHead className="text-xs">Max Feat</TableHead>
                          <TableHead className="text-xs">Min Leaf</TableHead>
                          <TableHead className="text-xs">Min Split</TableHead>
                          <TableHead className="text-xs">N Est</TableHead>
                          <TableHead className="text-xs text-right">F1</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-xs">
                        <TableRow className="bg-primary/10 font-bold">
                          <TableCell>Gini</TableCell>
                          <TableCell>NaN</TableCell>
                          <TableCell>sqrt</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>200</TableCell>
                          <TableCell className="text-right">0.315028</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Gini</TableCell>
                          <TableCell>NaN</TableCell>
                          <TableCell>sqrt</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>200</TableCell>
                          <TableCell className="text-right">0.315028</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Gini</TableCell>
                          <TableCell>NaN</TableCell>
                          <TableCell>sqrt</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell className="text-right">0.314486</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Gini</TableCell>
                          <TableCell>NaN</TableCell>
                          <TableCell>sqrt</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell className="text-right">0.314486</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Gini</TableCell>
                          <TableCell>NaN</TableCell>
                          <TableCell>sqrt</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>200</TableCell>
                          <TableCell className="text-right">0.309245</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <p>Có thể thấy rằng việc chọn min_split là 2 hay 5 đều cho kết quả như nhau, Gini cho kết quả nhỉnh hơn entropy một ít.</p>
                    <p>Tuning giúp cải thiện F1-score của Random Forest khoảng <strong>0.015</strong>, tuy nhiên kết quả tổng thể vẫn chưa vượt qua được Logistic Regression mặc định.</p>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>MLP Tuning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-xs">Activ</TableHead>
                          <TableHead className="text-xs">Alpha</TableHead>
                          <TableHead className="text-xs">Hidden</TableHead>
                          <TableHead className="text-xs">LR</TableHead>
                          <TableHead className="text-xs">Iter</TableHead>
                          <TableHead className="text-xs text-right">F1</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-xs">
                        <TableRow className="bg-primary/10 font-bold">
                          <TableCell>tanh</TableCell>
                          <TableCell>0.01</TableCell>
                          <TableCell>(100,)</TableCell>
                          <TableCell>adapt</TableCell>
                          <TableCell>500</TableCell>
                          <TableCell className="text-right">0.305003</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>tanh</TableCell>
                          <TableCell>0.01</TableCell>
                          <TableCell>(100,)</TableCell>
                          <TableCell>const</TableCell>
                          <TableCell>500</TableCell>
                          <TableCell className="text-right">0.305003</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>tanh</TableCell>
                          <TableCell>0.01</TableCell>
                          <TableCell>(50,)</TableCell>
                          <TableCell>adapt</TableCell>
                          <TableCell>500</TableCell>
                          <TableCell className="text-right">0.295253</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>tanh</TableCell>
                          <TableCell>0.01</TableCell>
                          <TableCell>(50,)</TableCell>
                          <TableCell>const</TableCell>
                          <TableCell>500</TableCell>
                          <TableCell className="text-right">0.295253</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>relu</TableCell>
                          <TableCell>0.01</TableCell>
                          <TableCell>(100,)</TableCell>
                          <TableCell>adapt</TableCell>
                          <TableCell>500</TableCell>
                          <TableCell className="text-right">0.268143</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <p>Có thể thấy rằng việc chọn learning rate là constant hay adaptive không ảnh hưởng đến kết quả, activation là tanh cho kết quả tốt hơn relu khá nhiều.</p>
                    <p>MLP có sự cải thiện rất tốt sau khi tuning (từ <strong>0.26 lên 0.3</strong>), cho thấy mô hình mạng nơ-ron cần được cấu hình kỹ lưỡng để đạt hiệu quả.</p>
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Đánh giá chung</h4>
                    <p className="text-muted-foreground">
                      Nhìn chung kết quả F1-score vẫn ở mức khiêm tốn (quanh mức <strong>0.3</strong>). Điều này có thể do dataset có độ khó cao (nhiều lớp, văn bản ngắn, nhiễu) hoặc việc sử dụng các phương pháp embedding truyền thống (BoW/TF-IDF) chưa đủ hiệu quả để bắt trọn ngữ nghĩa phức tạp của cảm xúc.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Giai đoạn 3: Confusion Matrix & Deep Learning */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge className="text-lg py-1 px-4 bg-accent text-accent-foreground">Giai đoạn 3</Badge>
              <h3 className="text-2xl font-semibold">Phân tích chi tiết & Deep Learning</h3>
            </div>

            {/* Confusion Matrix */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Confusion Matrix (Random Forest)
                </CardTitle>
                <CardDescription>Phân tích chi tiết kết quả dự đoán trên từng lớp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden border">
                    <img 
                      src={ml2Confusion} 
                      alt="Confusion Matrix Random Forest" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Nhận xét chi tiết:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Các lớp nhiều mẫu (worry, neutral, happiness):</span> Được dự đoán đúng nhiều nhất, accuracy trên lớp đạt khoảng <strong>50%</strong>.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Các lớp ít mẫu hơn (surprise, fun, relief):</span> Được dự đoán rất ít và thường xuyên bị nhầm lẫn với các lớp tương đồng nhưng có số lượng mẫu lớn hơn.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Các lớp rất ít mẫu (anger, boredom, empty, enthusiasm):</span> Hoàn toàn <strong>không được mô hình dự đoán</strong>.
                      </li>
                    </ul>
                    <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                      <p className="text-sm font-medium text-destructive">
                        Kết luận: Phân phối lớp của bộ dữ liệu làm việc dự đoán trở nên khó khăn, khi dữ liệu bị mất cân bằng nặng và các lớp cũng rất tương đồng với nhau về mặt ngữ nghĩa.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deep Learning Verification */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-primary" />
                  Kiểm chứng độ khó với mô hình Deep Learning
                </CardTitle>
                <CardDescription>Thử nghiệm với LSTM, GRU và BERT để so sánh hiệu quả</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Badge variant="outline">LSTM & GRU</Badge>
                      </h4>
                      <div className="bg-muted p-4 rounded-lg space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Accuracy:</span>
                          <span className="font-mono font-bold">0.216</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">F1-Score:</span>
                          <span className="font-mono font-bold text-destructive">0.077</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Mô hình RNN cơ bản (LSTM/GRU) gặp khó khăn lớn, gần như không học được đặc trưng hữu ích từ dữ liệu này.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Badge className="bg-primary">BERT (Transformer)</Badge>
                      </h4>
                      <div className="bg-primary/5 p-4 rounded-lg space-y-2 border border-primary/10">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Accuracy:</span>
                          <span className="font-mono font-bold text-primary">0.383</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">F1-Score:</span>
                          <span className="font-mono font-bold text-primary">0.355</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        BERT đạt kết quả tốt nhất chỉ sau <strong>2 epoch</strong> (epoch đầu đã ngang ngửa RF và MLP).
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/50 p-4 rounded-lg border border-accent">
                    <h4 className="font-semibold mb-1 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" /> Tổng kết thực nghiệm Deep Learning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      LSTM và GRU không thể dự đoán hiệu quả trên bộ dữ liệu này. Tuy nhiên, <strong>BERT</strong> đã chứng minh sức mạnh của Pre-trained Transformer khi đạt được kết quả tốt hơn hẳn so với RandomForest và MLP, mở ra hướng đi tiềm năng để cải thiện bài toán này.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
      


    </div>
  );
};

export default BTL2;