import { ExerciseTemplate } from "@/components/ExerciseTemplate";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, BarChart3, Wrench, Cpu, TrendingUp, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import edaImage1 from "@/assets/1.1/eda_1.png";
import edaImage2 from "@/assets/1.1/eda_2.png";
import edaImage3 from "@/assets/1.1/eda_3.png";
import edaImage4 from "@/assets/1.1/eda_4.png";
import edaImage5 from "@/assets/1.1/eda_5.png";
import trainImage1 from "@/assets/1.1/train_1.png";
import trainImage2 from "@/assets/1.1/train_2.png";
import trainImage3 from "@/assets/1.1/train_3.png";
import trainImage4 from "@/assets/1.1/train_4.png";
import cfmVit1 from "@/assets/1.1/cfm_vit_1.png";
import cfmVit2 from "@/assets/1.1/cfm_vit_2.png";
import cfmRes1 from "@/assets/1.1/cfm_res_1.png";
import cfmRes2 from "@/assets/1.1/cfm_res_2.png";
import gradResnet1 from "@/assets/1.1/grad_resnet_1.png";
import gradEffnet1 from "@/assets/1.1/grad_effnet_1.png";

const BTL1_Exercise1 = () => {
  const sections = [
    { icon: Database, title: "Tổng quan dữ liệu", color: "text-blue-600" },
    { icon: BarChart3, title: "EDA - Khám phá dữ liệu", color: "text-purple-600" },
    { icon: Wrench, title: "Xử lý dữ liệu", color: "text-orange-600" },
    { icon: Cpu, title: "Mô hình", color: "text-green-600" },
    { icon: TrendingUp, title: "Kết quả Training", color: "text-cyan-600" },
    { icon: AlertTriangle, title: "Phân tích lỗi", color: "text-red-600" },
    { icon: BarChart3, title: "Thử nghiệm khác", color: "text-indigo-600" },
    { icon: CheckCircle2, title: "Kết luận", color: "text-emerald-600" },
  ];

  const weatherClassesData = [
    { class: "dew", count: 698, widthMean: 633.9, heightMean: 487.2 },
    { class: "fogsmog", count: 851, widthMean: 510.5, heightMean: 337.3 },
    { class: "frost", count: 475, widthMean: 842.7, heightMean: 633.9 },
    { class: "glaze", count: 639, widthMean: 378.3, heightMean: 303.4 },
    { class: "hail", count: 591, widthMean: 429.9, heightMean: 350.9 },
    { class: "lightning", count: 377, widthMean: 494.2, heightMean: 335.0 },
    { class: "rain", count: 526, widthMean: 470.2, heightMean: 322.1 },
    { class: "rainbow", count: 232, widthMean: 510.2, heightMean: 326.4 },
    { class: "rime", count: 1160, widthMean: 486.4, heightMean: 348.3 },
    { class: "sandstorm", count: 692, widthMean: 504.6, heightMean: 338.9 },
    { class: "snow", count: 621, widthMean: 531.4, heightMean: 363.4 },
  ];

  return (
    <ExerciseTemplate
      btlNumber={1}
      exerciseNumber={1}
      title="Exercise 1: Phân loại ảnh thời tiết"
      description="Phân tích dữ liệu và tiến hành xây dựng mô hình học sâu để dự đoán 6 loại thời tiết dựa trên ảnh đầu vào."
      backLink="/btl1"
    >
      {/* Section Layout */}
      <div className="container mx-auto px-4 space-y-12 py-12">
        {sections.map((section, idx) => (
          <section key={idx} className={idx % 2 === 0 ? "bg-muted/30 py-12 px-4 rounded-lg" : "py-12"}>
            <div className="container mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className={`w-8 h-8 ${section.color}`} />
                <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
              </div>

              {/* Content for Data Overview Section (Index 0) */}
              {idx === 0 ? (
                <Card className="border-2 mb-12 max-w-6xl mx-auto">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Database className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">Weather Image Recognition</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Bộ dữ liệu hình ảnh thời tiết được thu thập và gán nhãn cho bài toán phân loại thời tiết dựa trên ảnh đầu vào.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Column 1 - Data Statistics */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                          Thống kê dữ liệu
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Tổng số mẫu ảnh:</span>
                            <span className="font-bold text-foreground text-lg">6,862 ảnh</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Số lượng lớp (Classes):</span>
                            <span className="font-bold text-foreground text-lg">11 lớp thời tiết</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Định dạng:</span>
                            <span className="font-bold text-foreground text-lg">JPEG, PNG, GIF, BMP</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-muted-foreground">Tỷ lệ Train/Val/Test:</span>
                            <span className="font-bold text-foreground text-lg">70/15/15</span>
                          </div>
                        </div>
                      </div>

                      {/* Column 2 - Technical Specifications */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                          Thông số kỹ thuật ảnh
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Kích thước gốc:</span>
                            <span className="font-bold text-foreground text-lg">Rất đa dạng</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Kích thước input mô hình:</span>
                            <span className="font-bold text-foreground text-lg">224×224 pixels</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Kênh màu:</span>
                            <span className="font-bold text-foreground text-lg">RGB, RGBA, L, P</span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-muted-foreground">Đặc điểm:</span>
                            <span className="font-bold text-foreground text-lg">Đa dạng kích thước</span>
                          </div>
                          <div className="py-2">
                            <Alert className="border-amber-500/30 bg-amber-500/5">
                              <AlertDescription className="text-xs text-muted-foreground">
                                Dữ liệu có đa dạng định dạng và kênh màu, cần tiền xử lý chuẩn hóa.
                              </AlertDescription>
                            </Alert>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : idx === 1 ? (
                // EDA Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  {/* Samples of weather images */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Sample ảnh dữ liệu</CardTitle>
                      <CardDescription>Các ảnh thời tiết biểu diễn từ các lớp khác nhau</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={edaImage1}
                        alt="Sample weather images"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />
                    </CardContent>
                  </Card>

                  {/* Image size analysis */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Phân tích kích thước ảnh</CardTitle>
                      <CardDescription>Phân bố kích thước của các ảnh trong dataset theo từng lớp</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Alert className="border-amber-500/50 bg-amber-500/10 border-l-4">
                        <Info className="h-5 w-5 text-amber-600" />
                        <AlertDescription className="text-base font-semibold text-amber-900">
                          Kích thước ảnh không đồng đều, có nhiều kích thước ảnh từ nhỏ đến rất lớn. Cần phải crop và resize về một chuẩn trước khi đưa vào mô hình.
                        </AlertDescription>
                      </Alert>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left: Image */}
                        <div>
                          <img
                            src={edaImage2}
                            alt="Image size distribution"
                            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                          />
                        </div>

                        {/* Right: Table */}
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-muted/50">
                                <TableHead className="font-bold">Class</TableHead>
                                <TableHead className="text-right font-bold">Count</TableHead>
                                <TableHead className="text-right font-bold">Width_Mean</TableHead>
                                <TableHead className="text-right font-bold">Height_Mean</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {weatherClassesData.map((item, idx) => (
                                <TableRow key={idx}>
                                  <TableCell className="font-medium">{item.class}</TableCell>
                                  <TableCell className="text-right">{item.count}</TableCell>
                                  <TableCell className="text-right">{item.widthMean}</TableCell>
                                  <TableCell className="text-right">{item.heightMean}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Label distribution analysis */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Phân phối nhãn (Label Distribution)</CardTitle>
                      <CardDescription>Phân bố số lượng ảnh của các lớp thời tiết trong dataset</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={edaImage3}
                        alt="Label distribution"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <Alert className="border-amber-500/50 bg-amber-500/10 border-l-4">
                        <Info className="h-5 w-5 text-amber-600" />
                        <AlertDescription className="text-base font-semibold text-amber-900">
                          Một số lớp như <strong>rainbow</strong>, <strong>lightning</strong>, <strong>frost</strong> có số lượng ít, trong khi class <strong>rime</strong>, <strong>fogsmog</strong> lại có số lượng nhiều. Cần phải sử dụng <strong>weighted loss</strong> để phạt nặng với các mẫu sai lớp ít.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* Pixel distribution analysis */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Phân phối Pixel (Pixel Distribution)</CardTitle>
                      <CardDescription>Phân tích độ sáng, độ tương phản và phân bố kênh màu</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={edaImage4}
                        alt="Pixel distribution"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            Độ sáng (Brightness)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Phân phối gần chuẩn, khá đẹp. Cho thấy đa số ảnh có độ sáng trung tính (không quá sáng hay tối).
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            Độ tương phản (Contrast)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Nhìn chung đa số ảnh có độ tương phản tốt, dễ phân biệt các vật thể.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            Kênh màu B (Blue Channel)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Kênh màu B có cột 0 cao bất thường, chứng tỏ có một vài ảnh thiếu sắc xanh (sandstorm, lightning).
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            Ba kênh màu (RGB Channels)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Ba kênh màu đều có cột nhô ở 0 và 255, hợp lý khi lớp lightning thì tối, các lớp như snow, glaze, lightning rất trắng, sáng (có thể gây cháy sáng).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Average images per class */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Hình ảnh trung bình theo lớp (Average Images)</CardTitle>
                      <CardDescription>Cộng các pixel ảnh lại theo các lớp để thu được ảnh trung bình</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={edaImage5}
                        alt="Average images per class"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            Các lớp đặc trưng
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Một số lớp như <strong>dew</strong>, <strong>lightning</strong>, <strong>sandstorm</strong> khá đặc trưng với màu xanh lá, tím, vàng. Lớp <strong>rime</strong>, <strong>rainbow</strong> với màu xanh dương nhạt. Dự kiến các lớp này sẽ dễ đoán trúng.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            Các lớp dễ nhầm lẫn
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Các lớp còn lại như <strong>frost</strong>, <strong>glaze</strong>, <strong>hail</strong>... khá giống nhau, có thể mô hình sẽ gặp khó với các lớp này.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : idx === 2 ? (
                // Data Processing Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  {/* Training Set */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-blue-500/10 text-blue-600 border-blue-500/30">Tập Huấn Luyện</Badge>
                      <CardTitle>Tập Train: 4,798 ảnh</CardTitle>
                      <CardDescription>Xử lý và làm giàu dữ liệu (Data Augmentation)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">RandomResizeCrop</h4>
                            <p className="text-sm text-muted-foreground">Crop ngẫu nhiên và resize về 224x224 pixels</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">RandomHorizontalFlip</h4>
                            <p className="text-sm text-muted-foreground">Lật ảnh ngang ngẫu nhiên</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">RandomRotation</h4>
                            <p className="text-sm text-muted-foreground">Xoay ảnh ngẫu nhiên</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">ColorJitter</h4>
                            <p className="text-sm text-muted-foreground">Thay đổi độ sáng, tương phản, bão hòa màu ngẫu nhiên</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Normalize</h4>
                            <p className="text-sm text-muted-foreground">Chuẩn hóa giá trị pixel theo mean/std tính được từ EDA</p>
                          </div>
                        </div>
                      </div>

                      <Alert className="border-blue-500/30 bg-blue-500/5">
                        <Info className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-sm">
                          <strong>Mục đích:</strong> Tăng cường dữ liệu (augmentation) giúp mô hình tổng quát hóa tốt hơn, giảm overfitting và cải thiện hiệu suất training.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* Validation Set */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-orange-500/10 text-orange-600 border-orange-500/30">Tập Validation</Badge>
                      <CardTitle>Tập Val: 1,031 ảnh</CardTitle>
                      <CardDescription>Xử lý chuẩn (không augmentation)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Resize</h4>
                            <p className="text-sm text-muted-foreground">Resize ảnh về 224x224 pixels</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Normalize</h4>
                            <p className="text-sm text-muted-foreground">Chuẩn hóa giá trị pixel theo mean/std tính được từ EDA</p>
                          </div>
                        </div>
                      </div>

                      <Alert className="border-orange-500/30 bg-orange-500/5">
                        <Info className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-sm">
                          <strong>Mục đích:</strong> Đánh giá hiệu suất mô hình trên dữ liệu chưa thấy (validation set) trong quá trình training.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* Test Set */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-red-500/10 text-red-600 border-red-500/30">Tập Test</Badge>
                      <CardTitle>Tập Test: 1,033 ảnh</CardTitle>
                      <CardDescription>Xử lý chuẩn (không augmentation)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Resize</h4>
                            <p className="text-sm text-muted-foreground">Resize ảnh về 224x224 pixels</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Normalize</h4>
                            <p className="text-sm text-muted-foreground">Chuẩn hóa giá trị pixel theo mean/std tính được từ EDA</p>
                          </div>
                        </div>
                      </div>

                      <Alert className="border-red-500/30 bg-red-500/5">
                        <Info className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-sm">
                          <strong>Mục đích:</strong> Đánh giá hiệu suất cuối cùng của mô hình trên tập dữ liệu độc lập, trung thực nhất.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              ) : idx === 3 ? (
                // Model Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Kiến trúc Mô hình</CardTitle>
                      <CardDescription>So sánh 3 loại mô hình với các chiến lược transfer learning khác nhau</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Alert className="border-blue-500/30 bg-blue-500/5">
                        <Info className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-sm">
                          Sử dụng 3 loại mô hình pre-trained: <strong>ResNet50</strong>, <strong>EfficientNet_b0</strong>, <strong>ViT_base</strong>. Mỗi mô hình được thử nghiệm với 3 chiến lược: Freeze backbone, Partial unfreeze (không đóng băng một phần cuối), và Fine-tune toàn bộ.
                        </AlertDescription>
                      </Alert>

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Mô hình</TableHead>
                              <TableHead className="font-bold">Chiến lược</TableHead>
                              <TableHead className="text-right font-bold">Tổng Tham số</TableHead>
                              <TableHead className="text-right font-bold">Tham số Huấn Luyện</TableHead>
                              <TableHead className="text-right font-bold">Tỷ lệ (%)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {/* ResNet50 */}
                            <TableRow className="bg-blue-50/30">
                              <TableCell className="font-semibold text-blue-700" rowSpan={3}>ResNet50</TableCell>
                              <TableCell>Freeze Backbone</TableCell>
                              <TableCell className="text-right font-mono">23,530,571</TableCell>
                              <TableCell className="text-right font-mono">22,539</TableCell>
                              <TableCell className="text-right">0.10%</TableCell>
                            </TableRow>
                            <TableRow className="bg-blue-50/30">
                              <TableCell>Partial Unfreeze</TableCell>
                              <TableCell className="text-right font-mono">23,530,571</TableCell>
                              <TableCell className="text-right font-mono">22,085,643</TableCell>
                              <TableCell className="text-right">93.85%</TableCell>
                            </TableRow>
                            <TableRow className="bg-blue-50/30">
                              <TableCell>Fine-tune Toàn bộ</TableCell>
                              <TableCell className="text-right font-mono">23,530,571</TableCell>
                              <TableCell className="text-right font-mono">23,530,571</TableCell>
                              <TableCell className="text-right">100%</TableCell>
                            </TableRow>

                            {/* EfficientNet_b0 */}
                            <TableRow className="bg-orange-50/30">
                              <TableCell className="font-semibold text-orange-700" rowSpan={3}>EfficientNet_b0</TableCell>
                              <TableCell>Freeze Backbone</TableCell>
                              <TableCell className="text-right font-mono">4,021,639</TableCell>
                              <TableCell className="text-right font-mono">14,091</TableCell>
                              <TableCell className="text-right">0.35%</TableCell>
                            </TableRow>
                            <TableRow className="bg-orange-50/30">
                              <TableCell>Partial Unfreeze</TableCell>
                              <TableCell className="text-right font-mono">4,021,639</TableCell>
                              <TableCell className="text-right font-mono">2,757,671</TableCell>
                              <TableCell className="text-right">68.58%</TableCell>
                            </TableRow>
                            <TableRow className="bg-orange-50/30">
                              <TableCell>Fine-tune Toàn bộ</TableCell>
                              <TableCell className="text-right font-mono">4,021,639</TableCell>
                              <TableCell className="text-right font-mono">4,021,639</TableCell>
                              <TableCell className="text-right">100%</TableCell>
                            </TableRow>

                            {/* ViT_base */}
                            <TableRow className="bg-purple-50/30">
                              <TableCell className="font-semibold text-purple-700" rowSpan={3}>ViT_base</TableCell>
                              <TableCell>Freeze Backbone</TableCell>
                              <TableCell className="text-right font-mono">85,807,115</TableCell>
                              <TableCell className="text-right font-mono">8,459</TableCell>
                              <TableCell className="text-right">0.01%</TableCell>
                            </TableRow>
                            <TableRow className="bg-purple-50/30">
                              <TableCell>Partial Unfreeze</TableCell>
                              <TableCell className="text-right font-mono">85,807,115</TableCell>
                              <TableCell className="text-right font-mono">21,272,075</TableCell>
                              <TableCell className="text-right">24.80%</TableCell>
                            </TableRow>
                            <TableRow className="bg-purple-50/30">
                              <TableCell>Fine-tune Toàn bộ</TableCell>
                              <TableCell className="text-right font-mono">85,807,115</TableCell>
                              <TableCell className="text-right font-mono">85,807,115</TableCell>
                              <TableCell className="text-right">100%</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {/* ResNet50 */}
                        <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-700 mb-2">ResNet50</h4>
                          <p className="text-sm text-muted-foreground">
                            Mô hình CNN truyền thống, hiệu quả trong xử lý ảnh. Có ~23.5M tham số, tương đối nhẹ nhàng.
                          </p>
                        </div>

                        {/* EfficientNet_b0 */}
                        <div className="bg-orange-50/50 border border-orange-200 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-700 mb-2">EfficientNet_b0</h4>
                          <p className="text-sm text-muted-foreground">
                            Mô hình CNN tối ưu hóa, cân bằng độ chính xác và tốc độ. Nhỏ nhất với ~4M tham số.
                          </p>
                        </div>

                        {/* ViT_base */}
                        <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-700 mb-2">ViT_base</h4>
                          <p className="text-sm text-muted-foreground">
                            Vision Transformer, kiến trúc dựa trên attention. Lớn nhất với ~85.8M tham số.
                          </p>
                        </div>
                      </div>

                      <Card className="bg-amber-50/50 border border-amber-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">📌 Chiến lược Transfer Learning</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-amber-900 mb-1">1. Freeze Backbone</h5>
                            <p className="text-sm text-amber-800">Khóa toàn bộ trọng số backbone, chỉ huấn luyện lớp phân loại cuối cùng.</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-900 mb-1">2. Partial Unfreeze</h5>
                            <p className="text-sm text-amber-800">Khóa phần đầu của backbone, chỉ unfreeze phần cuối.</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-900 mb-1">3. Fine-tune Toàn bộ</h5>
                            <p className="text-sm text-amber-800">Huấn luyện tất cả tham số mô hình.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </div>
              ) : idx === 4 ? (
                // Training Results Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  {/* ResNet50 Results */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-blue-500/10 text-blue-600 border-blue-500/30">ResNet50</Badge>
                      <CardTitle>Kết quả Training - ResNet50</CardTitle>
                      <CardDescription>So sánh 3 chiến lược fine-tuning trên mô hình ResNet50</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={trainImage1}
                        alt="ResNet50 training results"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Mô hình</TableHead>
                              <TableHead className="text-right font-bold">Accuracy</TableHead>
                              <TableHead className="text-right font-bold">Precision</TableHead>
                              <TableHead className="text-right font-bold">Recall</TableHead>
                              <TableHead className="text-right font-bold">F1</TableHead>
                              <TableHead className="text-right font-bold">Loss</TableHead>
                              <TableHead className="text-right font-bold">Time/Epoch (s)</TableHead>
                              <TableHead className="text-right font-bold">Tham số Học</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Freeze</TableCell>
                              <TableCell className="text-right">0.83543</TableCell>
                              <TableCell className="text-right">0.84271</TableCell>
                              <TableCell className="text-right">0.83543</TableCell>
                              <TableCell className="text-right">0.8346</TableCell>
                              <TableCell className="text-right">0.49644</TableCell>
                              <TableCell className="text-right bg-yellow-100/50">33.52</TableCell>
                              <TableCell className="text-right font-mono">22,539</TableCell>
                            </TableRow>
                            <TableRow className="bg-green-50/50">
                              <TableCell className="font-semibold">Partial</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.88771</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.89132</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.88771</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.88831</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.31326</TableCell>
                              <TableCell className="text-right">33.73</TableCell>
                              <TableCell className="text-right font-mono">22,085,643</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Fine-tune</TableCell>
                              <TableCell className="text-right">0.88093</TableCell>
                              <TableCell className="text-right">0.88462</TableCell>
                              <TableCell className="text-right">0.88093</TableCell>
                              <TableCell className="text-right">0.88095</TableCell>
                              <TableCell className="text-right">0.3167</TableCell>
                              <TableCell className="text-right">36.64</TableCell>
                              <TableCell className="text-right font-mono">23,530,571</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <Alert className="border-blue-500/30 bg-blue-500/5">
                        <Info className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-sm">
                          <strong>Nhận xét:</strong> ResNet50 cho kết quả tốt với F1 từ 0.83 đến 0.88. Chiến lược Partial unfreeze đạt kết quả tốt nhất (F1 = 0.88831) với thời gian training nhanh nhất. Giữa Partial và Fine-tune không có khác biệt lớn vì số lượng tham số gần như tương đương (~22M).
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* EfficientNet_b0 Results */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-orange-500/10 text-orange-600 border-orange-500/30">EfficientNet_b0</Badge>
                      <CardTitle>Kết quả Training - EfficientNet_b0</CardTitle>
                      <CardDescription>So sánh 3 chiến lược fine-tuning trên mô hình EfficientNet_b0</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={trainImage2}
                        alt="EfficientNet_b0 training results"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Mô hình</TableHead>
                              <TableHead className="text-right font-bold">Accuracy</TableHead>
                              <TableHead className="text-right font-bold">Precision</TableHead>
                              <TableHead className="text-right font-bold">Recall</TableHead>
                              <TableHead className="text-right font-bold">F1</TableHead>
                              <TableHead className="text-right font-bold">Loss</TableHead>
                              <TableHead className="text-right font-bold">Time/Epoch (s)</TableHead>
                              <TableHead className="text-right font-bold">Tham số Học</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Freeze</TableCell>
                              <TableCell className="text-right">0.69894</TableCell>
                              <TableCell className="text-right">0.70746</TableCell>
                              <TableCell className="text-right">0.69894</TableCell>
                              <TableCell className="text-right">0.69855</TableCell>
                              <TableCell className="text-right">1.03972</TableCell>
                              <TableCell className="text-right">32.99</TableCell>
                              <TableCell className="text-right">14,091</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Partial</TableCell>
                              <TableCell className="text-right">0.79864</TableCell>
                              <TableCell className="text-right">0.80424</TableCell>
                              <TableCell className="text-right">0.79864</TableCell>
                              <TableCell className="text-right">0.79917</TableCell>
                              <TableCell className="text-right">0.62023</TableCell>
                              <TableCell className="text-right bg-yellow-100/50">32.85</TableCell>
                              <TableCell className="text-right font-mono">2,757,671</TableCell>
                            </TableRow>
                            <TableRow className="bg-green-50/50">
                              <TableCell className="font-semibold">Fine-tune</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.82962</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.83559</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.82962</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.83022</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.51317</TableCell>
                              <TableCell className="text-right">34.40</TableCell>
                              <TableCell className="text-right font-mono">4,021,639</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <Alert className="border-orange-500/30 bg-orange-500/5">
                        <Info className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-sm">
                          <strong>Nhận xét:</strong> EfficientNet_b0 cho kết quả chênh lệch hơn so với ResNet (F1 từ 0.69 đến 0.83). Khoảng cách giữa các chiến lược cũng có sự khác biệt rõ rệt hơn. Fine-tune đạt kết quả tốt nhất, cho thấy mô hình cần huấn luyện đầy đủ để đạt hiệu suất cao.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* ViT_base Results */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-purple-500/10 text-purple-600 border-purple-500/30">ViT_base</Badge>
                      <CardTitle>Kết quả Training - ViT_base</CardTitle>
                      <CardDescription>So sánh 3 chiến lược fine-tuning trên mô hình Vision Transformer</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={trainImage3}
                        alt="ViT_base training results"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Mô hình</TableHead>
                              <TableHead className="text-right font-bold">Accuracy</TableHead>
                              <TableHead className="text-right font-bold">Precision</TableHead>
                              <TableHead className="text-right font-bold">Recall</TableHead>
                              <TableHead className="text-right font-bold">F1</TableHead>
                              <TableHead className="text-right font-bold">Loss</TableHead>
                              <TableHead className="text-right font-bold">Time/Epoch (s)</TableHead>
                              <TableHead className="text-right font-bold">Tham số Học</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Freeze</TableCell>
                              <TableCell className="text-right">0.9061</TableCell>
                              <TableCell className="text-right">0.90812</TableCell>
                              <TableCell className="text-right">0.9061</TableCell>
                              <TableCell className="text-right">0.90581</TableCell>
                              <TableCell className="text-right">0.3024</TableCell>
                              <TableCell className="text-right bg-yellow-100/50">43.47</TableCell>
                              <TableCell className="text-right font-mono">8,459</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Partial</TableCell>
                              <TableCell className="text-right">0.92449</TableCell>
                              <TableCell className="text-right">0.92557</TableCell>
                              <TableCell className="text-right">0.92449</TableCell>
                              <TableCell className="text-right">0.92427</TableCell>
                              <TableCell className="text-right">0.24037</TableCell>
                              <TableCell className="text-right">57.33</TableCell>
                              <TableCell className="text-right font-mono">21,272,075</TableCell>
                            </TableRow>
                            <TableRow className="bg-green-50/50">
                              <TableCell className="font-semibold">Fine-tune</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.93611</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.93774</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.93611</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.9357</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.19719</TableCell>
                              <TableCell className="text-right">99.02</TableCell>
                              <TableCell className="text-right font-mono">85,807,115</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <Alert className="border-purple-500/30 bg-purple-500/5">
                        <Info className="h-4 w-4 text-purple-600" />
                        <AlertDescription className="text-sm">
                          <strong>Nhận xét:</strong> ViT_base outperform cả ResNet50 và EfficientNet_b0, đạt F1 = 0.9357 ở mức fine-tune. Thậm chí khi chỉ freeze backbone (freeze), mô hình vẫn cho kết quả rất tốt (F1 = 0.90581). Tuy nhiên, thời gian training và số lượng tham số cần học lại lớn hơn rất nhiều (99s/epoch, 85M tham số).
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* Comparison Results */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-indigo-500/10 text-indigo-600 border-indigo-500/30">So sánh</Badge>
                      <CardTitle>So sánh Mô hình Tốt Nhất</CardTitle>
                      <CardDescription>Mô hình đạt hiệu suất tốt nhất từ mỗi nhóm</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={trainImage4}
                        alt="Best models comparison"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Mô hình</TableHead>
                              <TableHead className="text-right font-bold">Accuracy</TableHead>
                              <TableHead className="text-right font-bold">Precision</TableHead>
                              <TableHead className="text-right font-bold">Recall</TableHead>
                              <TableHead className="text-right font-bold">F1</TableHead>
                              <TableHead className="text-right font-bold">Loss</TableHead>
                              <TableHead className="text-right font-bold">Time/Epoch (s)</TableHead>
                              <TableHead className="text-right font-bold">Tham số Học</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-semibold">ResNet50 Partial</TableCell>
                              <TableCell className="text-right">0.88771</TableCell>
                              <TableCell className="text-right">0.89132</TableCell>
                              <TableCell className="text-right">0.88771</TableCell>
                              <TableCell className="text-right">0.88831</TableCell>
                              <TableCell className="text-right">0.31326</TableCell>
                              <TableCell className="text-right bg-yellow-100/50">33.73</TableCell>
                              <TableCell className="text-right font-mono">22,085,643</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-semibold">EfficientNet_b0 Fine-tune</TableCell>
                              <TableCell className="text-right">0.82962</TableCell>
                              <TableCell className="text-right">0.83559</TableCell>
                              <TableCell className="text-right">0.82962</TableCell>
                              <TableCell className="text-right">0.83022</TableCell>
                              <TableCell className="text-right">0.51317</TableCell>
                              <TableCell className="text-right">34.40</TableCell>
                              <TableCell className="text-right font-mono bg-yellow-100/50">4,021,639</TableCell>
                            </TableRow>
                            <TableRow className="bg-green-50/50">
                              <TableCell className="font-semibold">ViT_base Fine-tune</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.93611</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.93774</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.93611</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.9357</TableCell>
                              <TableCell className="text-right font-semibold bg-yellow-100/50">0.19719</TableCell>
                              <TableCell className="text-right">99.02</TableCell>
                              <TableCell className="text-right font-mono">85,807,115</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <Alert className="border-indigo-500/30 bg-indigo-500/5">
                        <Info className="h-4 w-4 text-indigo-600" />
                        <AlertDescription className="text-sm">
                          <strong>Nhận xét Tổng hợp:</strong> ViT_base vượt trội hơn hai mô hình còn lại với F1 = 0.9357 và Loss = 0.19719 (tốt nhất). ResNet50 Partial cân bằng tốt giữa hiệu suất và chi phí tính toán (33.73s/epoch). EfficientNet_b0 có lợi thế về số lượng tham số và thời gian training nhẹ nhàng, nhưng kết quả thấp hơn. Nhìn chung, kết quả của các mô hình có xu hướng tương quan với số lượng tham số được huấn luyện.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              ) : idx === 5 ? (
                // Error Analysis Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  {/* Confusion Matrix - ViT_base */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-purple-500/10 text-purple-600 border-purple-500/30">ViT_base Fine-tune</Badge>
                      <CardTitle>Ma trận Nhầm lẫn (Confusion Matrix) - ViT_base</CardTitle>
                      <CardDescription>Phân tích các lớp được dự đoán sai</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Un-normalized */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Ma trận Un-normalized</h4>
                          <img
                            src={cfmVit1}
                            alt="ViT Confusion Matrix - Unnormalized"
                            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                          />
                        </div>

                        {/* Normalized */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Ma trận Normalized (%)</h4>
                          <img
                            src={cfmVit2}
                            alt="ViT Confusion Matrix - Normalized"
                            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Confusion Matrix - ResNet50 */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-blue-500/10 text-blue-600 border-blue-500/30">ResNet50 Partial</Badge>
                      <CardTitle>Ma trận Nhầm lẫn (Confusion Matrix) - ResNet50</CardTitle>
                      <CardDescription>Phân tích các lớp được dự đoán sai</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Un-normalized */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Ma trận Un-normalized</h4>
                          <img
                            src={cfmRes1}
                            alt="ResNet50 Confusion Matrix - Unnormalized"
                            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                          />
                        </div>

                        {/* Normalized */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Ma trận Normalized (%)</h4>
                          <img
                            src={cfmRes2}
                            alt="ResNet50 Confusion Matrix - Normalized"
                            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Confusion Matrix Analysis */}
                  <Card className="border-2 bg-amber-50/30">
                    <CardHeader>
                      <CardTitle>Phân tích Ma trận Nhầm lẫn</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                          Các lớp dễ nhầm lẫn
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Cả hai mô hình đều gặp khó khăn với các lớp sau:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                          <li><strong>Glaze, Frost, Rime, Rain, Snow:</strong> Các lớp liên quan đến băng, tuyết và mưa dễ bị nhầm lẫn với nhau do hình ảnh tương tự nhau</li>
                          <li><strong>Fogsmog ↔ Sandstorm:</strong> Hai trường hợp mờ mịt, khó phân biệt, dễ bị nhầm lẫn lẫn nhau</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Các lớp dễ dự đoán đúng
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Dew, Lightning:</strong> Các lớp có đặc trưng rõ ràng và được dự đoán chính xác cao ở cả hai mô hình.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* GradCAM - Correct Case */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-green-500/10 text-green-600 border-green-500/30">Dự đoán Đúng</Badge>
                      <CardTitle>Grad-CAM: Trường hợp Dự đoán Đúng (ResNet50)</CardTitle>
                      <CardDescription>Trực quan hóa các vùng quan trọng mà mô hình sử dụng để đưa ra quyết định chính xác</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={gradResnet1}
                        alt="Grad-CAM ResNet50 correct predictions"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Ảnh 1: Rainbow (Cầu vồng)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Mô hình bắt được chính xác đường cong cầu vồng trong ảnh. Grad-CAM cho thấy mô hình tập trung vào vùng cung tròn của cầu vồng.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            Ảnh 2: Hail (Mưa đá)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Mô hình bắt được vùng đá trên tay người. Activation map tập trung vào các tinh thể đá đặc trưng.
                          </p>
                        </div>

                        <Alert className="border-green-500/30 bg-green-500/5">
                          <Info className="h-4 w-4 text-green-600" />
                          <AlertDescription className="text-sm">
                            <strong>Nhận xét:</strong> Khi dự đoán đúng, mô hình tập trung vào các đặc trưng hình ảnh đặc trưng của lớp và loại trừ các thông tin không liên quan.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </CardContent>
                  </Card>

                  {/* GradCAM - Wrong Case */}
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-red-500/10 text-red-600 border-red-500/30">Dự đoán Sai</Badge>
                      <CardTitle>Grad-CAM: Trường hợp Dự đoán Sai (EfficientNet_b0)</CardTitle>
                      <CardDescription>Phân tích các vùng mà mô hình sử dụng dẫn đến dự đoán sai</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <img
                        src={gradEffnet1}
                        alt="Grad-CAM EfficientNet incorrect predictions"
                        className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                      />

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            Ảnh 1: Fogsmog được dự đoán là Rain (sai)
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Ảnh tương đối khó phân biệt với cả con người. Cả fogsmog và rain đều có vẻ mờ mịt giống nhau. Mô hình khó phân biệt và bị nhầm lẫn.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            Ảnh 2: Sai với Confidence cao
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Mô hình bắt phần không liên quan hoặc không đặc trưng của lớp. Activation map tán mạn, không tập trung vào vùng chính, dẫn đến dự đoán sai.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            Ảnh 3: Mẫu khó phân biệt
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Đây là một mẫu khó, thiếu đặc trưng rõ ràng, khiến cả mô hình nhỏ và lớn đều gặp khó khăn trong dự đoán.
                          </p>
                        </div>

                        <Alert className="border-red-500/30 bg-red-500/5">
                          <Info className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-sm">
                            <strong>Nhận xét:</strong> Khi dự đoán sai, mô hình thường tập trung vào các đặc trưng không liên quan hoặc tán mạn. Các ảnh khó (ambiguous) với đặc trưng mơ hồ là nguyên nhân chính gây sai số.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : idx === 6 ? (
                // Other Experiments Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-indigo-500/10 text-indigo-600 border-indigo-500/30">So sánh</Badge>
                      <CardTitle>Thử nghiệm Augmentation vs No-Augmentation</CardTitle>
                      <CardDescription>So sánh ảnh hưởng của Data Augmentation trên 3 loại mô hình</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Alert className="border-indigo-500/30 bg-indigo-500/5">
                        <Info className="h-4 w-4 text-indigo-600" />
                        <AlertDescription className="text-sm">
                          Kiểm tra xem Data Augmentation có thực sự cải thiện hiệu suất mô hình hay không. Bảng dưới so sánh các metrics chính giữa hai trường hợp: có augmentation (sử dụng RandomResizeCrop, RandomHorizontalFlip, RandomRotation, ColorJitter) và không augmentation (chỉ resize và normalize).
                        </AlertDescription>
                      </Alert>

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Metric</TableHead>
                              <TableHead colSpan={2} className="text-center font-bold border-l">ResNet50 Finetune</TableHead>
                              <TableHead colSpan={2} className="text-center font-bold border-l">EfficientNet_b0 Finetune</TableHead>
                              <TableHead colSpan={2} className="text-center font-bold border-l">ViT Base Finetune</TableHead>
                            </TableRow>
                            <TableRow className="bg-muted/30">
                              <TableHead className="font-bold"></TableHead>
                              <TableHead className="text-center font-bold text-sm">Có Aug</TableHead>
                              <TableHead className="text-center font-bold text-sm">Không Aug</TableHead>
                              <TableHead className="text-center font-bold text-sm">Có Aug</TableHead>
                              <TableHead className="text-center font-bold text-sm">Không Aug</TableHead>
                              <TableHead className="text-center font-bold text-sm">Có Aug</TableHead>
                              <TableHead className="text-center font-bold text-sm">Không Aug</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {/* Accuracy */}
                            <TableRow>
                              <TableCell className="font-semibold">Accuracy</TableCell>
                              <TableCell className="text-center">0.88093</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.90416</TableCell>
                              <TableCell className="text-center">0.82962</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.83446</TableCell>
                              <TableCell className="text-center">0.93611</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.93901</TableCell>
                            </TableRow>

                            {/* F1 Score */}
                            <TableRow>
                              <TableCell className="font-semibold">F1 Score</TableCell>
                              <TableCell className="text-center">0.88905</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.90433</TableCell>
                              <TableCell className="text-center">0.83022</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.83358</TableCell>
                              <TableCell className="text-center">0.9357</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.93886</TableCell>
                            </TableRow>

                            {/* Loss */}
                            <TableRow>
                              <TableCell className="font-semibold">Loss</TableCell>
                              <TableCell className="text-center">0.3167</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.29108</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.51317</TableCell>
                              <TableCell className="text-center">0.53858</TableCell>
                              <TableCell className="text-center">0.19719</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.19101</TableCell>
                            </TableRow>

                            {/* Time per Epoch */}
                            <TableRow>
                              <TableCell className="font-semibold">Time/Epoch (s)</TableCell>
                              <TableCell className="text-center">36.64</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">34.17</TableCell>
                              <TableCell className="text-center">34.40</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">22.99</TableCell>
                              <TableCell className="text-center">99.02</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">98.53</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <div className="space-y-6">
                        <Card className="bg-amber-50/50 border border-amber-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Phân tích Kết quả</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* ResNet50 */}
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-2">ResNet50 Finetune</h4>
                              <div className="space-y-2 text-sm text-muted-foreground ml-3">
                                <p>
                                  <strong className="text-foreground">Kết luận:</strong> <span className="text-red-600 font-semibold">Augmentation làm giảm hiệu suất</span> (Accuracy: 88.09% → 90.42%, Loss: 0.3167 → 0.2911).
                                </p>
                                <p>
                                  Mặc dù augmentation được kỳ vọng giúp tổng quát hóa, nhưng trong trường hợp này, ResNet50 đã overfit dữ liệu augmented. Không augmentation cho kết quả tốt hơn.
                                </p>
                              </div>
                            </div>

                            {/* EfficientNet_b0 */}
                            <div>
                              <h4 className="font-semibold text-orange-700 mb-2">EfficientNet_b0 Finetune</h4>
                              <div className="space-y-2 text-sm text-muted-foreground ml-3">
                                <p>
                                  <strong className="text-foreground">Kết luận:</strong> <span className="text-red-600 font-semibold">Augmentation cũng làm giảm hiệu suất</span> (Accuracy: 82.96% → 83.45%, Loss: 0.5132 → 0.5386).
                                </p>
                                <p>
                                  EfficientNet_b0 cũng có xu hướng tương tự, augmentation không cải thiện mà còn làm giảm performance. Không augmentation cải thiện accuracy thêm ~0.5%.
                                </p>
                              </div>
                            </div>

                            {/* ViT Base */}
                            <div>
                              <h4 className="font-semibold text-purple-700 mb-2">ViT Base Finetune</h4>
                              <div className="space-y-2 text-sm text-muted-foreground ml-3">
                                <p>
                                  <strong className="text-foreground">Kết luận:</strong> <span className="text-red-600 font-semibold">Augmentation làm giảm hiệu suất</span> (Accuracy: 93.61% → 93.90%, Loss: 0.1972 → 0.1910).
                                </p>
                                <p>
                                  Tương tự như hai mô hình kia, ViT base cũng cho thấy rằng không augmentation tốt hơn. Điều này khá bất ngờ vì augmentation thường được expect giúp cải thiện.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-blue-50/50 border border-blue-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Nhận Xét</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">1. Augmentation Không Luôn Cải Thiện</h5>
                              <p className="text-sm text-blue-800">
                                Dữ liệu trong bài này có thể đã đủ đặc trưng rõ ràng, và augmentation (xoay, lật, crop) có thể làm thay đổi các đặc trưng quan trọng của thời tiết, dẫn đến mô hình khó học.
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">2. ResNet50 Mất 2.3% Accuracy do Augmentation</h5>
                              <p className="text-sm text-blue-800">
                                Sự sụt giảm đáng kể cho thấy mô hình này nhạy cảm với augmentation. Có thể chiến lược augmentation cần được điều chỉnh (ví dụ: giảm rotation angle, probability).
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">3. Thời Gian Training Không Đáng Kể</h5>
                              <p className="text-sm text-blue-800">
                                Sự khác biệt về thời gian training giữa augmented vs non-augmented rất nhỏ (&lt; 2 giây), nên overhead không phải là vấn đề.
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">4. ViT Base Ổn Định Nhất</h5>
                              <p className="text-sm text-blue-800">
                                ViT Base có sự khác biệt nhỏ nhất giữa hai trường hợp (~0.3%), cho thấy mô hình này robust hơn đối với augmentation.
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <Badge className="mb-2 bg-indigo-500/10 text-indigo-600 border-indigo-500/30">Learning Rate</Badge>
                      <CardTitle>Thử nghiệm Learning theo tầng</CardTitle>
                      <CardDescription>So sánh giữa Learning Rate chung và Learning Rate theo tầng (Layer-wise) trên 3 mô hình với chiến lược Fine-tune</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Alert className="border-indigo-500/30 bg-indigo-500/5">
                        <Info className="h-4 w-4 text-indigo-600" />
                        <AlertDescription className="text-sm">
                          Kiểm tra xem Learning Rate theo tầng (áp dụng learning rate khác nhau cho các phần khác nhau của mô hình) có cải thiện kết quả so với learning rate chung không. Điều này giúp backbone pre-trained được fine-tune nhẹ nhàng trong khi các lớp sau được học mạnh hơn.
                        </AlertDescription>
                      </Alert>

                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-bold">Metric</TableHead>
                              <TableHead colSpan={2} className="text-center font-bold border-l">ResNet50 Finetune</TableHead>
                              <TableHead colSpan={2} className="text-center font-bold border-l">EfficientNet_b0 Finetune</TableHead>
                              <TableHead colSpan={2} className="text-center font-bold border-l">ViT Base Finetune</TableHead>
                            </TableRow>
                            <TableRow className="bg-muted/30">
                              <TableHead className="font-bold"></TableHead>
                              <TableHead className="text-center font-bold text-sm">LR Chung</TableHead>
                              <TableHead className="text-center font-bold text-sm">LR Tầng</TableHead>
                              <TableHead className="text-center font-bold text-sm">LR Chung</TableHead>
                              <TableHead className="text-center font-bold text-sm">LR Tầng</TableHead>
                              <TableHead className="text-center font-bold text-sm">LR Chung</TableHead>
                              <TableHead className="text-center font-bold text-sm">LR Tầng</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {/* Accuracy */}
                            <TableRow>
                              <TableCell className="font-semibold">Accuracy</TableCell>
                              <TableCell className="text-center">0.90416</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.91384</TableCell>
                              <TableCell className="text-center">0.83446</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.8848</TableCell>
                              <TableCell className="text-center">0.93901</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.94773</TableCell>
                            </TableRow>

                            {/* F1 Score */}
                            <TableRow>
                              <TableCell className="font-semibold">F1 Score</TableCell>
                              <TableCell className="text-center">0.90433</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.9132</TableCell>
                              <TableCell className="text-center">0.83358</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.88431</TableCell>
                              <TableCell className="text-center">0.93886</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.94747</TableCell>
                            </TableRow>

                            {/* Loss */}
                            <TableRow>
                              <TableCell className="font-semibold">Loss</TableCell>
                              <TableCell className="text-center">0.29108</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.25568</TableCell>
                              <TableCell className="text-center">0.53858</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.35352</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">0.19101</TableCell>
                              <TableCell className="text-center">0.21195</TableCell>
                            </TableRow>

                            {/* Time per Epoch */}
                            <TableRow>
                              <TableCell className="font-semibold">Time/Epoch (s)</TableCell>
                              <TableCell className="text-center">34.16501</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">34.12299</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">22.9913</TableCell>
                              <TableCell className="text-center">23.4108</TableCell>
                              <TableCell className="text-center">98.52799</TableCell>
                              <TableCell className="text-center bg-yellow-100/50 font-semibold">97.30171</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <div className="space-y-6">
                        <Card className="bg-amber-50/50 border border-amber-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Phân tích Kết quả</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* ResNet50 */}
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-2">ResNet50 - LR theo tầng cải thiện nhẹ nhàng</h4>
                              <div className="space-y-2 text-sm text-muted-foreground ml-3">
                                <p>
                                  <strong className="text-foreground">Kết quả:</strong> <span className="text-green-600 font-semibold">+0.968% Accuracy (0.90416 → 0.91384)</span>
                                </p>
                                <p>
                                  LR theo tầng cải thiện ResNet50 nhưng không đáng kể. Accuracy tăng từ 90.416% → 91.384%, F1 tăng từ 0.90433 → 0.9132, Loss giảm từ 0.29108 → 0.25568. Thời gian training gần như tương đương (34.16s vs 34.12s), nên LR theo tầng không tạo overhead.
                                </p>
                              </div>
                            </div>

                            {/* EfficientNet_b0 */}
                            <div>
                              <h4 className="font-semibold text-orange-700 mb-2">EfficientNet_b0 - Cải thiện đáng kể nhất</h4>
                              <div className="space-y-2 text-sm text-muted-foreground ml-3">
                                <p>
                                  <strong className="text-foreground">Kết quả:</strong> <span className="text-green-600 font-semibold">+5.034% Accuracy (0.83446 → 0.8848)</span>
                                </p>
                                <p>
                                  EfficientNet_b0 có cải thiện rõ rệt nhất với LR theo tầng. Accuracy tăng từ 83.446% → 88.48%, F1 score tăng từ 0.83358 → 0.88431, Loss giảm mạnh từ 0.53858 → 0.35352. Thời gian training tăng nhẹ từ 22.99s → 23.41s (chỉ +0.42s), rất xứng đáng với cải thiện.
                                </p>
                              </div>
                            </div>

                            {/* ViT Base */}
                            <div>
                              <h4 className="font-semibold text-purple-700 mb-2">ViT Base - Cải thiện nhẹ nhàng</h4>
                              <div className="space-y-2 text-sm text-muted-foreground ml-3">
                                <p>
                                  <strong className="text-foreground">Kết quả:</strong> <span className="text-green-600 font-semibold">+0.872% Accuracy (0.93901 → 0.94773)</span>
                                </p>
                                <p>
                                  ViT Base đã có accuracy cao sẵn, LR theo tầng cải thiện thêm +0.872%. F1 tăng từ 0.93886 → 0.94747, Loss tăng nhẹ từ 0.19101 → 0.21195 (nhưng vẫn rất tốt). Thời gian training còn giảm từ 98.53s → 97.30s (-1.23s), là một bonus tuyệt vời.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-blue-50/50 border border-blue-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">Nhận Xét</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">1. LR theo tầng Có Lợi Ích, Nhưng Mức Độ Khác Nhau</h5>
                              <p className="text-sm text-blue-800">
                                Cả 3 mô hình đều cải thiện khi sử dụng Learning Rate theo tầng, nhưng mức độ thay đổi khác nhau. EfficientNet_b0 lợi nhuận từ chiến lược này, trong khi ResNet50 và ViT Base cải thiện nhẹ.
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">2. EfficientNet_b0 Lợi Nhuận Lớn Nhất (+5.034%)</h5>
                              <p className="text-sm text-blue-800">
                                EfficientNet_b0 cải thiện từ 83.446% → 88.48%, cho thấy mô hình nhỏ hơn nhạy cảm hơn với chiến lược learning rate. Mô hình nhỏ có thể bị bottleneck bởi learning rate chung, và LR theo tầng giúp unlock potential mạnh mẽ.
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">3. ResNet50 Cải Thiện Nhẹ (+0.968%)</h5>
                              <p className="text-sm text-blue-800">
                                ResNet50 từ 90.416% → 91.384%, cải thiện không đáng kể. Điều này cho thấy ResNet50 với fine-tune đã hoạt động tốt sẵn, và LR theo tầng không tạo thêm giá trị lớn (mặc dù vẫn giảm loss từ 0.2911 → 0.2557).
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">4. ViT Base Cải Thiện Nhẹ (+0.872%) Nhưng Nhanh Hơn</h5>
                              <p className="text-sm text-blue-800">
                                ViT Base từ 93.901% → 94.773%, cải thiện nhẹ nhàng nhưng thời gian training còn giảm từ 98.53s → 97.30s. Đây là win-win: cải thiện accuracy và nhanh hơn luôn.
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-900 mb-1">5. Thời Gian Training Không Tăng (Thậm Chí Giảm)</h5>
                              <p className="text-sm text-blue-800">
                                ResNet50: 34.16s → 34.12s (-0.04s), EfficientNet_b0: 22.99s → 23.41s (+0.42s) nhẹ, ViT Base: 98.53s → 97.30s (-1.23s). LR theo tầng không tạo overhead tính toán, và thậm chí có thể nhanh hơn.
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : idx === 7 ? (
                // Conclusion Section
                <div className="space-y-8 max-w-6xl mx-auto">
                  {/* Main Conclusion */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Tổng Kết Bài Tập</CardTitle>
                      <CardDescription>Tổng hợp kết quả, bài học và hướng phát triển future work</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Key Results */}
                      <Card className="bg-green-50/50 border border-green-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">✓ Kết quả Chính</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex items-start gap-3">
                              <div className="text-2xl font-bold text-green-600">0.9361</div>
                              <div>
                                <p className="font-semibold text-foreground">Accuracy Cao nhất</p>
                                <p className="text-xs text-muted-foreground">ViT_base Fine-tune</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-2xl font-bold text-green-600">0.1972</div>
                              <div>
                                <p className="font-semibold text-foreground">Loss Thấp nhất</p>
                                <p className="text-xs text-muted-foreground">ViT_base Fine-tune</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-2xl font-bold text-green-600">0.8883</div>
                              <div>
                                <p className="font-semibold text-foreground">F1 Cân bằng tốt</p>
                                <p className="text-xs text-muted-foreground">ResNet50 Partial</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Model Comparison Summary */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">So sánh Mô hình</h4>

                        <div className="space-y-3">
                          <div className="flex gap-3 items-start">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                              <h5 className="font-semibold text-foreground">ViT_base Fine-tune 🥇</h5>
                              <p className="text-sm text-muted-foreground">
                                Kết quả tốt nhất (F1=0.9357, Accuracy=0.9361). Tuy nhiên đòi hỏi thời gian training dài (99s/epoch) và số lượng tham số lớn (85.8M).
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3 items-start">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                              <h5 className="font-semibold text-foreground">ResNet50 Partial 🥈</h5>
                              <p className="text-sm text-muted-foreground">
                                Cân bằng tốt giữa hiệu suất (F1=0.8883) và chi phí tính toán (33.73s/epoch). Lựa chọn thực tế cho ứng dụng thực tiếp.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3 items-start">
                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                              <h5 className="font-semibold text-foreground">EfficientNet_b0 Fine-tune 🥉</h5>
                              <p className="text-sm text-muted-foreground">
                                Mô hình nhẹ nhàng (4.02M tham số, 34.4s/epoch) nhưng kết quả thấp hơn (F1=0.8302). Thích hợp khi có yêu cầu về tốc độ.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Findings */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Những Phát Hiện Quan Trọng</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Transfer Learning Hiệu Quả
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Chiến lược Partial unfreeze cho kết quả tốt nhất ở ResNet50 (F1=0.8883), chứng tỏ việc giữ lại kiến thức pre-trained từ backbone và tinh chỉnh phần cuối là hiệu quả.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Kích thước Mô hình Ảnh hưởng Lớn
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Kết quả có xu hướng tương quan với số lượng tham số huấn luyện. ViT_base (85.8M) outperform cả ResNet50 (23.5M) và EfficientNet_b0 (4.02M) đáng kể.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                          Các Lớp Khó Phân Biệt
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Các lớp: glaze, frost, rime, rain, snow (liên quan đến băng/tuyết) và fogsmog ↔ sandstorm dễ bị nhầm lẫn do hình ảnh tương tự. Cần thêm dữ liệu hoặc xử lý đặc biệt.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Các Lớp Dễ Dự Đoán
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Dew (xanh lá), Lightning (tím) và Sandstorm (vàng) có đặc trưng rõ ràng và được dự đoán chính xác cao ở tất cả mô hình.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Lessons Learned */}
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Bài Học Rút Ra</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span><strong>Transfer Learning là mạnh mẽ:</strong> Pre-trained models giúp đạt kết quả tốt ngay cả với dữ liệu hạn chế.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span><strong>Partial fine-tuning cân bằng tốt:</strong> Không cần fine-tune toàn bộ, partial unfreeze cho kết quả gần tương đương nhưng nhanh hơn.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span><strong>EDA là thiết yếu:</strong> Hiểu rõ dữ liệu giúp lựa chọn pre-processing, augmentation, và loss function phù hợp.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span><strong>Không phải mô hình lớn = kết quả tốt:</strong> ViT_base tốt hơn nhưng chi phí training lớn gấp 3x ResNet50 với cải thiện chỉ ~5%.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span><strong>Interpretability quan trọng:</strong> Grad-CAM giúp hiểu vì sao mô hình dự đoán sai, từ đó cải thiệt được.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Final Thoughts */}
                  <Alert className="border-emerald-500/30 bg-emerald-500/5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <AlertDescription className="text-sm">
                      <strong>Kết Luận:</strong> Bài tập đã thành công trong việc xây dựng mô hình phân loại thời tiết với accuracy 93.61% (ViT_base). Các mô hình khác nhau cho những trade-off khác nhau giữa accuracy, tốc độ, và công suất tính toán. Lựa chọn mô hình cuối cùng phụ thuộc vào yêu cầu cụ thể của ứng dụng: ResNet50 cho production, ViT_base cho maximum accuracy, EfficientNet_b0 cho edge deployment.
                    </AlertDescription>
                  </Alert>
                </div>
              ) : (
                <Card className="border-2 min-h-64 flex items-center justify-center bg-card/50">
                  <CardContent className="text-center text-muted-foreground py-12">
                    <p className="text-lg">Nội dung cho "{section.title}" sẽ được thêm vào đây</p>
                    <p className="text-sm mt-2">Vui lòng điền chi tiết bài tập</p>
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

export default BTL1_Exercise1;
