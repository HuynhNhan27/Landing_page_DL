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

const BTL1_Exercise1 = () => {
  const sections = [
    { icon: Database, title: "Tổng quan dữ liệu", color: "text-blue-600" },
    { icon: BarChart3, title: "EDA - Khám phá dữ liệu", color: "text-purple-600" },
    { icon: Wrench, title: "Xử lý dữ liệu", color: "text-orange-600" },
    { icon: Cpu, title: "Mô hình", color: "text-green-600" },
    { icon: TrendingUp, title: "Kết quả Training", color: "text-cyan-600" },
    { icon: AlertTriangle, title: "Phân tích lỗi", color: "text-red-600" },
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
