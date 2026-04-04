import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Database, ArrowLeft, Image, BarChart3, Layers, Brain, CheckCircle2, Trophy, Medal, Award, Info, Workflow, Code, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import bieuDoLop from "@/assets/bieu_do_lop.png";
import bieuDoSize from "@/assets/bieu_do_size.png";
import dinhDangFile from "@/assets/dinh_dang_file.png";
import bieuDoKenhMau from "@/assets/bieu_do_kenh_mau.png";
import bieuDoEff from "@/assets/bieu_do_Eff.png";

const BTL3 = () => {
  // Data for stats cards
  const stats = [{
    label: "Tổng số ảnh",
    value: "9,809",
    icon: Image
  }, {
    label: "Số lớp (Classes)",
    value: "7",
    icon: Layers
  }, {
    label: "Định dạng",
    value: "JPEG (99.7%) & PNG",
    icon: Database
  }, {
    label: "Kích thước",
    value: "150x150 (resized)",
    icon: BarChart3
  }];

  // Distribution data
  const distributionData = [{
    class: "Malachite",
    count: 1607
  }, {
    class: "Wulfenite",
    count: 1521
  }, {
    class: "Copper",
    count: 1429
  }, {
    class: "Cerussite",
    count: 1367
  }, {
    class: "Gypsum",
    count: 1351
  }, {
    class: "Hematite",
    count: 1284
  }, {
    class: "Azurite",
    count: 1250
  }];

  // Process steps
  const processSteps = [{
    number: 1,
    title: "EDA",
    description: "Exploratory Data Analysis"
  }, {
    number: 2,
    title: "Tiền xử lý",
    description: "Preprocessing"
  }, {
    number: 3,
    title: "Trích xuất đặc trưng",
    description: "Feature Extraction"
  }, {
    number: 4,
    title: "Huấn luyện",
    description: "Training"
  }, {
    number: 5,
    title: "Đánh giá",
    description: "Evaluation"
  }];

  // Results data
  const resultsData = [{
    rank: "1 🏆",
    method: "SVM (EfficientNet FE)",
    accuracy: "83.64%",
    note: "Hiệu suất cao nhất, tận dụng tốt đặc trưng từ EfficientNet."
  }, {
    rank: "2 🥈",
    method: "Logistic Regression (EfficientNet FE)",
    accuracy: "78.29%",
    note: "Tốt, nhưng thấp hơn SVM."
  }, {
    rank: "3 🥉",
    method: "EfficientNetB0 (Fine-tuning)",
    accuracy: "~77.50%",
    note: "Hiệu quả thấp hơn trích xuất đặc trưng trong trường hợp này."
  }, {
    rank: "4",
    method: "Random Forest (EfficientNet FE)",
    accuracy: "75.08%",
    note: "Hiệu suất thấp nhất."
  }];
  return <div className="min-h-screen bg-gradient-to-b from-background via-ocean-surface/10 to-ocean-deep/20">
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
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Computer Vision</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            BTL3 – Image Recognition
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nhận dạng và phân loại ảnh khoáng sản sử dụng Convolutional Neural Networks và Transfer Learning
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://colab.research.google.com/drive/1JlpRaJXwa1ZzH9b3-W4kKNYHwkiTW2pD?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Mở Google Colab
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.kaggle.com/datasets/floriangeillon/mineral-photos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Xem Dataset
            </a>
          </Button>
        </div>
      </section>

      {/* 1. DATA OVERVIEW */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">1. Tổng quan Dữ liệu</h2>
        
        {/* Single Detailed Dataset Card */}
        <Card className="border-2 mb-12 max-w-6xl mx-auto">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Mineral Photos Dataset</CardTitle>
            </div>
            <CardDescription className="text-base">
              Bộ dữ liệu hình ảnh khoáng sản được thu thập và gán nhãn cho bài toán phân loại.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cột 1 - Thống kê dữ liệu */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Thống kê dữ liệu
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Tổng số mẫu ảnh:</span>
                    <span className="font-bold text-foreground text-lg">9,809 ảnh</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Số lượng lớp (Classes):</span>
                    <span className="font-bold text-foreground text-lg">7 lớp khoáng sản</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Định dạng:</span>
                    <span className="font-bold text-foreground text-lg">JPEG (99.7%) và PNG</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Tỷ lệ Train/Test:</span>
                    <span className="font-bold text-foreground text-lg">80/20</span>
                  </div>
                </div>
              </div>

              {/* Cột 2 - Thông số kỹ thuật ảnh */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">
                  Thông số kỹ thuật ảnh
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Kích thước gốc:</span>
                    <span className="font-bold text-foreground text-lg">Đa dạng</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Kích thước input mô hình:</span>
                    <span className="font-bold text-foreground text-lg">224×224 pixels</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Kênh màu:</span>
                    <span className="font-bold text-foreground text-lg">3 channels (RGB)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Đặc điểm:</span>
                    <span className="font-bold text-foreground text-lg">Dữ liệu mất cân bằng</span>
                  </div>
                  <div className="py-2">
                    <Alert className="border-amber-500/30 bg-amber-500/5">
                      <AlertDescription className="text-xs text-muted-foreground">
                        Dữ liệu mất cân bằng (Imbalanced Data), cần xử lý bằng oversampling hoặc weighted loss.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Distribution Analysis */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left: Distribution Table */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Phân bố mẫu theo lớp</CardTitle>
              <CardDescription>Chi tiết số lượng ảnh từng loại khoáng sản</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lớp khoáng sản</TableHead>
                    <TableHead className="text-right">Số lượng mẫu</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {distributionData.map((item, idx) => <TableRow key={idx}>
                      <TableCell className="font-medium">{item.class}</TableCell>
                      <TableCell className="text-right">{item.count}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Right: Analysis Note */}
          <div className="space-y-6">
            <Alert className="border-primary/20 bg-primary/5">
              <Info className="h-4 w-4 text-primary" />
              <AlertDescription className="text-sm leading-relaxed">
                Có sự chênh lệch giữa lớp có nhiều mẫu nhất (<strong>Malachite, 1607 mẫu</strong>) và lớp ít nhất (<strong>Azurite, 1250 mẫu</strong>). Tuy mức độ chênh lệch không quá lớn, nhưng vẫn cần xem xét kỹ thuật cân bằng dữ liệu (như oversampling, augmentation hoặc weighted loss) khi huấn luyện mô hình.
              </AlertDescription>
            </Alert>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Thống kê tóm tắt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mẫu nhiều nhất:</span>
                  <span className="font-semibold">Malachite (1607)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mẫu ít nhất:</span>
                  <span className="font-semibold">Azurite (1250)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chênh lệch:</span>
                  <span className="font-semibold">357 mẫu (22.2%)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. PROCESS TIMELINE */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">2. Quy trình Thực hiện</h2>
        
        {/* Horizontal Stepper */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-primary/20 hidden md:block" style={{
            marginLeft: '5%',
            marginRight: '5%'
          }} />
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {processSteps.map((step, idx) => <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-3 relative z-10 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDA SECTION */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">3. Phân tích Khám phá Dữ liệu (EDA)</h2>
        
        {/* Hàng 1: Phân phối lớp (Giữ nguyên cái cũ) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {/* Left: Placeholder for Chart */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Biểu đồ phân phối lớp</CardTitle>
              <CardDescription>Số lượng mẫu từng loại khoáng sản</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={bieuDoLop}
                alt="Phân phối lớp"
                className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
              />
            </CardContent>
          </Card>

          {/* Right: Analysis Text */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Nhận xét thống kê mô tả</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Đặc điểm dataset
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                  <li>Dataset tương đối cân bằng với 7 lớp</li>
                  <li>Mỗi lớp có từ 1250-1607 mẫu</li>
                  <li>Tổng cộng 9,809 ảnh khoáng sản</li>
                  <li>Chất lượng ảnh đồng nhất, đa dạng góc chụp</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Quan sát chính
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                  <li>Độ chênh lệch giữa các lớp không vượt quá 28%</li>
                  <li>Không có lớp nào quá thiểu số hoặc đa số</li>
                  <li>Phù hợp cho huấn luyện mô hình phân loại</li>
                  <li>Có thể áp dụng augmentation để tăng thêm tính đa dạng</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hàng 2: Phân tích Kích thước ảnh (Image Sizes) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {/* Cột Trái (Biểu đồ) */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Top 10 kích thước ảnh phổ biến</CardTitle>
              <CardDescription>Phân tích kích thước ảnh trong dataset</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={bieuDoSize}
                alt="Phân phối kích thước ảnh"
                className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
              />
            </CardContent>
          </Card>

          {/* Cột Phải (Nhận xét) */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Phân tích kích thước</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-amber-500/30 bg-amber-500/5">
                <Info className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-sm">
                  Kích thước ảnh không đồng nhất. Kích thước phổ biến nhất là <strong>(400, 300)</strong> với 1012 ảnh.
                </AlertDescription>
              </Alert>
              
              <div>
                <h4 className="font-semibold mb-3">Các kích thước phổ biến khác:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">(400, 266):</span>
                    <span className="font-medium">856 ảnh</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">(400, 267):</span>
                    <span className="font-medium">742 ảnh</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">(400, 320):</span>
                    <span className="font-medium">628 ảnh</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">Các kích thước khác:</span>
                    <span className="font-medium">~6571 ảnh</span>
                  </div>
                </div>
              </div>

              <Alert className="border-primary/20 bg-primary/5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm font-semibold">
                  Kết luận: Cần thực hiện Resize toàn bộ ảnh về kích thước cố định (224×224) để đưa vào mô hình.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Hàng 3: Phân tích Kỹ thuật (Định dạng & Màu sắc) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cột Trái - Định dạng file (File Formats) */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Định dạng file (File Formats)</CardTitle>
              <CardDescription>Phân tích loại file ảnh</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={dinhDangFile}
                alt="Phân phối các dạng file của tập dữ liệu"
                className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
              />
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-semibold">JPEG:</span>
                  <span className="text-lg font-bold text-primary">9,784 ảnh</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-semibold">PNG:</span>
                  <span className="text-lg font-bold">25 ảnh</span>
                </div>
              </div>

              <Alert className="border-primary/20 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Dữ liệu chủ yếu là JPEG (99.7%). Cần chuẩn hóa định dạng khi đọc ảnh để đảm bảo tính nhất quán.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Cột Phải - Kênh màu (Color Modes) */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Kênh màu (Color Modes)</CardTitle>
              <CardDescription>Phân tích chế độ màu của ảnh</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={bieuDoKenhMau}
                alt="Phân phối kênh màu"
                className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
              />
              
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                  <span className="font-semibold">RGB:</span>
                  <span className="text-lg font-bold text-primary">9,783 ảnh</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="font-semibold">RGBA:</span>
                  <span className="font-medium">19 ảnh</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="font-semibold">L (Grayscale):</span>
                  <span className="font-medium">4 ảnh</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="font-semibold">CMYK:</span>
                  <span className="font-medium">3 ảnh</span>
                </div>
              </div>

              <Alert className="border-destructive/30 bg-destructive/5">
                <Info className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-sm">
                  <strong>Lưu ý:</strong> Đa số là ảnh màu (RGB). Cần xử lý các ảnh RGBA/CMYK/Grayscale về chuẩn RGB để tránh lỗi kênh màu khi training.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. PREPROCESSING SECTION */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">4. Tiền xử lý (Preprocessing)</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cột Trái: Giai đoạn 1 - Làm sạch dữ liệu (Data Cleaning) */}
          <Card className="border-2">
            <CardHeader>
              <Badge className="mb-2 bg-blue-500/10 text-blue-600 border-blue-500/30">Giai đoạn 1</Badge>
              <CardTitle>Làm sạch dữ liệu (Data Cleaning)</CardTitle>
              <CardDescription>Xử lý tĩnh trên file trước khi đưa vào huấn luyện</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Lọc file lỗi</h4>
                    <p className="text-sm text-muted-foreground">Quét và xóa các file bị hỏng (corrupt images) hoặc không đúng định dạng</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Dọn dẹp hệ thống</h4>
                    <p className="text-sm text-muted-foreground">Tự động xóa các thư mục rác như <code className="bg-muted px-1 py-0.5 rounded text-xs">.ipynb_checkpoints</code></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Chuẩn hóa kênh màu (Quan trọng)</h4>
                    <p className="text-sm text-muted-foreground">Chuyển đổi toàn bộ ảnh (RGBA, Grayscale) về chuẩn <strong>RGB 3 kênh</strong></p>
                  </div>
                </div>
              </div>
              
              <Alert className="border-blue-500/30 bg-blue-500/5">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-sm">
                  <strong>Mục đích:</strong> Đảm bảo tất cả ảnh trong dataset có định dạng đồng nhất trước khi bắt đầu training.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Cột Phải: Giai đoạn 2 - Data Generator & Augmentation */}
          <Card className="border-2">
            <CardHeader>
              <Badge className="mb-2 bg-green-500/10 text-green-600 border-green-500/30">Giai đoạn 2</Badge>
              <CardTitle>Data Generator & Augmentation</CardTitle>
              <CardDescription>Xử lý động trong quá trình training bằng ImageDataGenerator</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Resize</h4>
                    <p className="text-sm text-muted-foreground">Điều chỉnh kích thước ảnh về <strong>224×224 pixels</strong> để phù hợp với input của mô hình</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Rescale</h4>
                    <p className="text-sm text-muted-foreground">Chuẩn hóa giá trị pixel: <code className="bg-muted px-1 py-0.5 rounded text-xs">1./255</code> đưa pixel về khoảng [0, 1]</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Augmentation</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Rotation (30°)</strong>, Horizontal Flip, Width/Height Shift, Zoom để tăng tính đa dạng
                    </p>
                  </div>
                </div>
              </div>
              
              <Alert className="border-green-500/30 bg-green-500/5">
                <Info className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-sm">
                  <strong>Mục đích:</strong> Tăng cường dữ liệu (Data Augmentation) giúp mô hình tổng quát hóa tốt hơn và giảm overfitting.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. TRAINING STRATEGY */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">5. Chiến lược Huấn luyện</h2>
        
        {/* A. Feature Extraction */}
        <div className="mb-12 max-w-6xl mx-auto">
          <div className="mb-6">
            <Badge className="bg-accent text-accent-foreground mb-2">Phương pháp A</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">Trích xuất Đặc trưng (Feature Extraction)</h3>
            <p className="text-muted-foreground">
              Sử dụng EfficientNetB0 pre-trained (đóng băng trọng số) để trích xuất đặc trưng, sau đó huấn luyện các mô hình ML truyền thống
            </p>
          </div>

          {/* Khối 1: Enhanced Workflow */}
          <Card className="border-2 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="w-6 h-6 text-primary" />
                Quy trình xử lý (Enhanced Workflow)
              </CardTitle>
              <CardDescription>Quy trình trích xuất đặc trưng từ ảnh thành vector 1280 chiều</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-md">
                    <Image className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-center">Input Image</span>
                  <span className="text-xs text-muted-foreground text-center">(Batch)</span>
                </div>
                
                <div className="text-xl text-primary font-bold">→</div>
                
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-md">
                    <Brain className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-center">EfficientNetB0</span>
                  <span className="text-xs text-muted-foreground text-center">(No Classifier)</span>
                </div>
                
                <div className="text-xl text-primary font-bold">→</div>
                
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-md">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-center">Feature Vector</span>
                  <span className="text-xs text-muted-foreground text-center font-mono"><strong>1280 dimensions</strong></span>
                </div>
                
                <div className="text-xl text-primary font-bold">→</div>
                
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-md">
                    <Database className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-center">Storage</span>
                  <span className="text-xs text-muted-foreground text-center font-mono"><strong>HDF5 / .h5</strong></span>
                </div>
                
                <div className="text-xl text-primary font-bold">→</div>
                
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-md">
                    <Layers className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-center">ML Models</span>
                  <span className="text-xs text-muted-foreground text-center">(SVM, RF, LR)</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  Chi tiết kỹ thuật
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          Load pre-trained <strong>EfficientNetB0</strong> từ PyTorch (ImageNet weights).
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          Loại bỏ lớp Classifier cuối cùng (<code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">nn.Identity()</code>) để lấy vector đặc trưng thô.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          Sử dụng thiết bị: <strong className="text-green-600">CUDA (GPU)</strong> để tăng tốc độ xử lý batch lớn.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                          Lưu trữ dữ liệu dạng <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">.h5</code> (HDF5) để sử dụng cho nhiều mô hình.
                        </p>
                      </div>
                    </div>
                </div>

                <Alert className="border-primary/30 bg-primary/5 mt-4">
                  <Info className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm">
                    <strong>Lợi ích:</strong> Vector đặc trưng 1280 chiều được trích xuất bởi EfficientNetB0 giúp tăng chất lượng đầu vào, đồng thời giảm kích thước dữ liệu và tăng tốc độ training các mô hình ML truyền thống.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ML Training Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="mb-6">
            <Badge className="bg-accent text-accent-foreground mb-2">Machine Learning</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">Huấn luyện Mô hình Machine Learning (trên tập đặc trưng)</h3>
            <p className="text-muted-foreground">
              Sử dụng vector đặc trưng 1280 chiều từ EfficientNetB0 để huấn luyện các mô hình ML cổ điển
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cột Trái: Implementation */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Kết quả Đánh giá
                </CardTitle>
                <CardDescription>Performance metrics của các mô hình ML</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="svm" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="svm">SVM</TabsTrigger>
                    <TabsTrigger value="lr">Logistic Reg</TabsTrigger>
                    <TabsTrigger value="rf">Random Forest</TabsTrigger>
                  </TabsList>

                  {/* Tab 1 - SVM */}
                  <TabsContent value="svm" className="space-y-4">
                    <div className="rounded-lg border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-bold">Lớp (Class)</TableHead>
                            <TableHead className="text-right font-bold">Precision</TableHead>
                            <TableHead className="text-right font-bold">Recall</TableHead>
                            <TableHead className="text-right font-bold">F1-Score</TableHead>
                            <TableHead className="text-right font-bold">Support</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">0</TableCell>
                            <TableCell className="text-right">0.934</TableCell>
                            <TableCell className="text-right">0.920</TableCell>
                            <TableCell className="text-right">0.927</TableCell>
                            <TableCell className="text-right">250</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell className="text-right">0.696</TableCell>
                            <TableCell className="text-right">0.703</TableCell>
                            <TableCell className="text-right">0.699</TableCell>
                            <TableCell className="text-right">273</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell className="text-right">0.842</TableCell>
                            <TableCell className="text-right">0.822</TableCell>
                            <TableCell className="text-right">0.832</TableCell>
                            <TableCell className="text-right">286</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell className="text-right">0.759</TableCell>
                            <TableCell className="text-right">0.748</TableCell>
                            <TableCell className="text-right">0.754</TableCell>
                            <TableCell className="text-right">270</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell className="text-right">0.753</TableCell>
                            <TableCell className="text-right">0.833</TableCell>
                            <TableCell className="text-right">0.791</TableCell>
                            <TableCell className="text-right">257</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell className="text-right">0.920</TableCell>
                            <TableCell className="text-right">0.922</TableCell>
                            <TableCell className="text-right">0.921</TableCell>
                            <TableCell className="text-right">322</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell className="text-right">0.896</TableCell>
                            <TableCell className="text-right">0.849</TableCell>
                            <TableCell className="text-right">0.872</TableCell>
                            <TableCell className="text-right">304</TableCell>
                          </TableRow>
                          <TableRow className="border-t-2 border-border">
                            <TableCell colSpan={5} className="h-2 p-0 bg-muted/30"></TableCell>
                          </TableRow>
                          <TableRow className="bg-primary/10 font-bold">
                            <TableCell className="font-bold">Accuracy</TableCell>
                            <TableCell className="text-right" colSpan={3}>0.830</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Macro avg</TableCell>
                            <TableCell className="text-right">0.829</TableCell>
                            <TableCell className="text-right">0.828</TableCell>
                            <TableCell className="text-right">0.828</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Weighted avg</TableCell>
                            <TableCell className="text-right">0.832</TableCell>
                            <TableCell className="text-right">0.830</TableCell>
                            <TableCell className="text-right">0.830</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  {/* Tab 2 - Logistic Regression */}
                  <TabsContent value="lr" className="space-y-4">
                    <div className="rounded-lg border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-bold">Lớp (Class)</TableHead>
                            <TableHead className="text-right font-bold">Precision</TableHead>
                            <TableHead className="text-right font-bold">Recall</TableHead>
                            <TableHead className="text-right font-bold">F1-Score</TableHead>
                            <TableHead className="text-right font-bold">Support</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">0</TableCell>
                            <TableCell className="text-right">0.868</TableCell>
                            <TableCell className="text-right">0.900</TableCell>
                            <TableCell className="text-right">0.884</TableCell>
                            <TableCell className="text-right">250</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell className="text-right">0.606</TableCell>
                            <TableCell className="text-right">0.615</TableCell>
                            <TableCell className="text-right">0.611</TableCell>
                            <TableCell className="text-right">273</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell className="text-right">0.824</TableCell>
                            <TableCell className="text-right">0.790</TableCell>
                            <TableCell className="text-right">0.807</TableCell>
                            <TableCell className="text-right">286</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell className="text-right">0.661</TableCell>
                            <TableCell className="text-right">0.685</TableCell>
                            <TableCell className="text-right">0.673</TableCell>
                            <TableCell className="text-right">270</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell className="text-right">0.737</TableCell>
                            <TableCell className="text-right">0.743</TableCell>
                            <TableCell className="text-right">0.740</TableCell>
                            <TableCell className="text-right">257</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell className="text-right">0.912</TableCell>
                            <TableCell className="text-right">0.898</TableCell>
                            <TableCell className="text-right">0.905</TableCell>
                            <TableCell className="text-right">322</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell className="text-right">0.851</TableCell>
                            <TableCell className="text-right">0.829</TableCell>
                            <TableCell className="text-right">0.840</TableCell>
                            <TableCell className="text-right">304</TableCell>
                          </TableRow>
                          <TableRow className="border-t-2 border-border">
                            <TableCell colSpan={5} className="h-2 p-0 bg-muted/30"></TableCell>
                          </TableRow>
                          <TableRow className="bg-amber-500/10 font-bold">
                            <TableCell className="font-bold">Accuracy</TableCell>
                            <TableCell className="text-right" colSpan={3}>0.783</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Macro avg</TableCell>
                            <TableCell className="text-right">0.780</TableCell>
                            <TableCell className="text-right">0.780</TableCell>
                            <TableCell className="text-right">0.780</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Weighted avg</TableCell>
                            <TableCell className="text-right">0.784</TableCell>
                            <TableCell className="text-right">0.783</TableCell>
                            <TableCell className="text-right">0.783</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  {/* Tab 3 - Random Forest */}
                  <TabsContent value="rf" className="space-y-4">
                    <div className="rounded-lg border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-bold">Lớp (Class)</TableHead>
                            <TableHead className="text-right font-bold">Precision</TableHead>
                            <TableHead className="text-right font-bold">Recall</TableHead>
                            <TableHead className="text-right font-bold">F1-Score</TableHead>
                            <TableHead className="text-right font-bold">Support</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">0</TableCell>
                            <TableCell className="text-right">0.865</TableCell>
                            <TableCell className="text-right">0.844</TableCell>
                            <TableCell className="text-right">0.854</TableCell>
                            <TableCell className="text-right">250</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell className="text-right">0.567</TableCell>
                            <TableCell className="text-right">0.498</TableCell>
                            <TableCell className="text-right">0.530</TableCell>
                            <TableCell className="text-right">273</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell className="text-right">0.794</TableCell>
                            <TableCell className="text-right">0.779</TableCell>
                            <TableCell className="text-right">0.787</TableCell>
                            <TableCell className="text-right">286</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell className="text-right">0.620</TableCell>
                            <TableCell className="text-right">0.641</TableCell>
                            <TableCell className="text-right">0.630</TableCell>
                            <TableCell className="text-right">270</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell className="text-right">0.721</TableCell>
                            <TableCell className="text-right">0.654</TableCell>
                            <TableCell className="text-right">0.686</TableCell>
                            <TableCell className="text-right">257</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell className="text-right">0.818</TableCell>
                            <TableCell className="text-right">0.922</TableCell>
                            <TableCell className="text-right">0.867</TableCell>
                            <TableCell className="text-right">322</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell className="text-right">0.770</TableCell>
                            <TableCell className="text-right">0.816</TableCell>
                            <TableCell className="text-right">0.792</TableCell>
                            <TableCell className="text-right">304</TableCell>
                          </TableRow>
                          <TableRow className="border-t-2 border-border">
                            <TableCell colSpan={5} className="h-2 p-0 bg-muted/30"></TableCell>
                          </TableRow>
                          <TableRow className="bg-red-500/10 font-bold">
                            <TableCell className="font-bold">Accuracy</TableCell>
                            <TableCell className="text-right" colSpan={3}>0.742</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Macro avg</TableCell>
                            <TableCell className="text-right">0.736</TableCell>
                            <TableCell className="text-right">0.736</TableCell>
                            <TableCell className="text-right">0.735</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Weighted avg</TableCell>
                            <TableCell className="text-right">0.738</TableCell>
                            <TableCell className="text-right">0.742</TableCell>
                            <TableCell className="text-right">0.739</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Cột Phải: Performance Metrics with Tabs */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Kết quả Đánh giá Tuning hyperparameter
                </CardTitle>
                <CardDescription>Performance metrics của các mô hình ML</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="svm" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="svm">SVM</TabsTrigger>
                    <TabsTrigger value="rf">Random Forest</TabsTrigger>
                  </TabsList>

                  {/* Tab 1 - SVM */}
                  <TabsContent value="svm" className="space-y-4">
                    <div className="rounded-lg border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-bold">Lớp (Class)</TableHead>
                            <TableHead className="text-right font-bold">Precision</TableHead>
                            <TableHead className="text-right font-bold">Recall</TableHead>
                            <TableHead className="text-right font-bold">F1-Score</TableHead>
                            <TableHead className="text-right font-bold">Support</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">0</TableCell>
                            <TableCell className="text-right">0.92</TableCell>
                            <TableCell className="text-right">0.92</TableCell>
                            <TableCell className="text-right">0.93</TableCell>
                            <TableCell className="text-right">250</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell className="text-right">0.68</TableCell>
                            <TableCell className="text-right">0.74</TableCell>
                            <TableCell className="text-right">0.71</TableCell>
                            <TableCell className="text-right">273</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell className="text-right">0.85</TableCell>
                            <TableCell className="text-right">0.83</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">286</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell className="text-right">0.79</TableCell>
                            <TableCell className="text-right">0.74</TableCell>
                            <TableCell className="text-right">0.77</TableCell>
                            <TableCell className="text-right">270</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell className="text-right">0.76</TableCell>
                            <TableCell className="text-right">0.85</TableCell>
                            <TableCell className="text-right">0.80</TableCell>
                            <TableCell className="text-right">257</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell className="text-right">0.93</TableCell>
                            <TableCell className="text-right">0.92</TableCell>
                            <TableCell className="text-right">0.93</TableCell>
                            <TableCell className="text-right">322</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell className="text-right">0.91</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">0.87</TableCell>
                            <TableCell className="text-right">304</TableCell>
                          </TableRow>
                          <TableRow className="border-t-2 border-border">
                            <TableCell colSpan={5} className="h-2 p-0 bg-muted/30"></TableCell>
                          </TableRow>
                          <TableRow className="bg-primary/10 font-bold">
                            <TableCell className="font-bold">Accuracy</TableCell>
                            <TableCell className="text-right" colSpan={3}>0.8364</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Macro avg</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Weighted avg</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-md border border-border space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">
                        <span className="font-bold text-primary">Config:</span> 'C': 10, 'gamma': 'auto'
                      </p>
                    </div>
                  </TabsContent>


                  {/* Tab 3 - Random Forest */}
                  <TabsContent value="rf" className="space-y-4">

                    <div className="rounded-lg border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-bold">Lớp (Class)</TableHead>
                            <TableHead className="text-right font-bold">Precision</TableHead>
                            <TableHead className="text-right font-bold">Recall</TableHead>
                            <TableHead className="text-right font-bold">F1-Score</TableHead>
                            <TableHead className="text-right font-bold">Support</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">0</TableCell>
                            <TableCell className="text-right">0.87</TableCell>
                            <TableCell className="text-right">0.85</TableCell>
                            <TableCell className="text-right">0.86</TableCell>
                            <TableCell className="text-right">250</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell className="text-right">0.59</TableCell>
                            <TableCell className="text-right">0.49</TableCell>
                            <TableCell className="text-right">0.54</TableCell>
                            <TableCell className="text-right">273</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell className="text-right">0.80</TableCell>
                            <TableCell className="text-right">0.77</TableCell>
                            <TableCell className="text-right">0.79</TableCell>
                            <TableCell className="text-right">286</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell className="text-right">0.64</TableCell>
                            <TableCell className="text-right">0.66</TableCell>
                            <TableCell className="text-right">0.65</TableCell>
                            <TableCell className="text-right">270</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell className="text-right">0.73</TableCell>
                            <TableCell className="text-right">0.68</TableCell>
                            <TableCell className="text-right">0.70</TableCell>
                            <TableCell className="text-right">257</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell className="text-right">0.81</TableCell>
                            <TableCell className="text-right">0.92</TableCell>
                            <TableCell className="text-right">0.86</TableCell>
                            <TableCell className="text-right">322</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell className="text-right">0.77</TableCell>
                            <TableCell className="text-right">0.84</TableCell>
                            <TableCell className="text-right">0.80</TableCell>
                            <TableCell className="text-right">304</TableCell>
                          </TableRow>
                          <TableRow className="border-t-2 border-border">
                            <TableCell colSpan={5} className="h-2 p-0 bg-muted/30"></TableCell>
                          </TableRow>
                          <TableRow className="bg-red-500/10 font-bold">
                            <TableCell className="font-bold">Accuracy</TableCell>
                            <TableCell className="text-right" colSpan={3}>0.7508</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Macro avg</TableCell>
                            <TableCell className="text-right">0.75</TableCell>
                            <TableCell className="text-right">0.75</TableCell>
                            <TableCell className="text-right">0.74</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Weighted avg</TableCell>
                            <TableCell className="text-right">0.75</TableCell>
                            <TableCell className="text-right">0.75</TableCell>
                            <TableCell className="text-right">0.75</TableCell>
                            <TableCell className="text-right">1962</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-md border border-border space-y-2">
                      <p className="text-sm font-mono text-muted-foreground">
                        <span className="font-bold text-primary">Config:</span> 'max_depth': 20, 'min_samples_leaf': 4, 'n_estimators': 300
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* B. Fine-tuning */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Badge className="bg-secondary text-secondary-foreground mb-2">Phương pháp B</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">Fine-tuning EfficientNetB0</h3>
            <p className="text-muted-foreground">
              Huấn luyện lại (fine-tune) mô hình EfficientNetB0 trực tiếp trên tập dữ liệu khoáng sản
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Training History - Loss & Accuracy</CardTitle>
              <CardDescription>Biểu đồ quá trình huấn luyện EfficientNetB0</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={bieuDoEff}
                alt="Biểu đồ quá trình train EfficientNetB0"
                className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. RESULTS & EVALUATION */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">6. Kết quả và Đánh giá</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Results Table */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" />
                Bảng xếp hạng hiệu suất mô hình
              </CardTitle>
              <CardDescription>So sánh accuracy của các phương pháp (xếp hạng từ cao xuống thấp)</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">Hạng</TableHead>
                    <TableHead>Phương pháp / Mô hình</TableHead>
                    <TableHead className="w-28 text-right">Accuracy</TableHead>
                    <TableHead>Nhận xét</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resultsData.map((row, idx) => <TableRow key={idx}>
                      <TableCell className="font-bold text-lg">{row.rank}</TableCell>
                      <TableCell className="font-semibold">{row.method}</TableCell>
                      <TableCell className="text-right font-bold text-primary">{row.accuracy}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{row.note}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Alert className="border-primary bg-primary/5">
            <Medal className="h-5 w-5 text-primary" />
            <AlertDescription className="text-base leading-relaxed">
              <strong className="text-foreground">Kết luận chung:</strong> Việc kết hợp Deep Learning (để trích xuất đặc trưng) và Machine Learning cổ điển (SVM) mang lại hiệu quả tối ưu hơn so với Fine-tuning thuần túy đối với tập dữ liệu này. SVM với feature extraction đạt accuracy cao nhất <strong>82.98%</strong>, vượt trội so với fine-tuning EfficientNetB0 (~77.50%).
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>;
};
export default BTL3;
