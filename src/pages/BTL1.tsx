import React from "react";
import { Link } from "react-router-dom";
import {
// Icons chung
ExternalLink, Database, TrendingUp, BarChart3, Target, FileText, ArrowLeft, CheckCircle2, Cpu, AlertTriangle, Info, Fingerprint,
// Icons cho phần Thống kê
Calculator, BarChart4, MoveRight, PieChart, Tag, ShoppingBag, Award, Package,
// Icons cho phần Preprocessing & Modeling
Split, Trash2, Layers, Binary, Code, ArrowDown, Settings2, Sigma, BrainCircuit, Microscope, Table as TableIcon, FlaskConical, 
Italic, SlidersHorizontal} from "lucide-react";

// Import UI Components (shadcn/ui)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

// --- PHẦN IMPORT HÌNH ẢNH ---
// Đảm bảo đường dẫn ảnh của bạn chính xác
import histogramImg from "@/assets/feature_distributions_histogram.png";
import boxplotGridImg from "@/assets/feature_distributions_boxplot.png";
const BTL1 = () => {
  // Helper render bar chart item cho phần Categorical
  const CategoryBar = ({
    label,
    count,
    total,
    colorClass
  }) => {
    const percentage = Math.round(count / total * 100);
    return <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-slate-700">{label}</span>
          <span className="text-muted-foreground">{count.toLocaleString()} ({percentage}%)</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full ${colorClass} rounded-full`} style={{
          width: `${percentage}%`
        }}></div>
        </div>
      </div>;
  };
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
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Machine Learning Pipeline</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Dự đoán giá sản phẩm Amazon (Discounted Price)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Xây dựng pipeline học máy dự đoán giá sau giảm giá (Discounted Price) dựa trên 42K+ sản phẩm điện tử, sử dụng các kỹ thuật xử lý Outlier và Log-transformation.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Thực hiện bởi: Huỳnh Đức Nhân, Nguyễn Thiện Minh, Nguyễn Lưu Khánh Trình, Lê Công Vinh
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://colab.research.google.com/drive/1Y6CAMgL1Y0mev4UZJOi-FPIP7UMF4xSv?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Mở Notebook (Colab)
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.kaggle.com/datasets/ikramshah512/amazon-products-sales-dataset-42k-items-2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Dataset gốc
            </a>
          </Button>
        </div>
      </section>

      {/* Section 1: Dataset Overview (Basic Stats) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Tổng quan dữ liệu</h2>
        
        <Card className="max-w-4xl mx-auto border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              Amazon Products Sales Dataset 2025
            </CardTitle>
            <CardDescription>Dữ liệu bán hàng các sản phẩm điện tử trên Amazon</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Thống kê dữ liệu thô:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Tổng số mẫu: <strong>42,675</strong> dòng.</li>
                  <li>Số lượng đặc trưng (features): 17 cột.</li>
                  <li>Dữ liệu sạch sau khi xử lý missing: <strong>30,228</strong> mẫu.</li>
                  <li>Tỷ lệ Train/Test: 80/20.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Features được chọn để huấn luyện:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Target:</strong> discounted_price</li>
                  <li><strong>Numeric:</strong> product_rating, total_reviews, purchased_last_month, original_price</li>
                  <li><strong>Categorical:</strong> is_sponsored, product_category</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Methodology Pipeline */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Quy trình xử lý (Pipeline)</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">1. EDA & Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Phát hiện dữ liệu bị lệch phải (skewed) và nhiều Outlier ở cột Reviews/Sales. Loại bỏ các giá trị Missing (dropna) để đảm bảo độ tin cậy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <Target className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">2. Preprocessing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <strong>Log-transform + RobustScaler:</strong> Xử lý biến số bị lệch và outlier.<br />
                <strong>MinMaxScaler:</strong> Cho biến Rating.<br />
                <strong>One-Hot Encoding:</strong> Cho biến phân loại Category & Sponsored.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <Cpu className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">3. Modeling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Huấn luyện 4 mô hình: Linear Regression, Random Forest, SVR, và MLP Regressor. Sử dụng Grid Search để tìm tham số tối ưu.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">4. Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Đánh giá dựa trên R², MAE, RMSE. Thực hiện Inverse Transform biến mục tiêu để đánh giá trên thang đo giá thực tế.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Missing Value Analysis */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Chi tiết: Xử lý dữ liệu thiếu</h2>
        <Card className="max-w-4xl mx-auto border-2 border-amber-500/20 bg-amber-50/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Phân tích giá trị thiếu (Missing Values)
            </CardTitle>
            <CardDescription>Biểu đồ tỷ lệ dữ liệu bị khuyết và chiến lược xử lý tương ứng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-8">
              
              {/* Cột trái: CHART */}
              <div className="md:col-span-3 space-y-6 pr-4">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="font-semibold text-red-700">sustainability_tags</span>
                        <span className="font-bold text-red-700">92.01%</span>
                    </div>
                    <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[92.01%] rounded-full animate-pulse"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-amber-700">buy_box_availability</span>
                        <span className="font-bold text-amber-700">34.34%</span>
                    </div>
                    <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[34.34%] rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-amber-700">delivery_date</span>
                        <span className="font-bold text-amber-700">28.08%</span>
                    </div>
                    <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[28.08%] rounded-full"></div>
                    </div>
                </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-amber-700">purchased_last_month</span>
                        <span className="font-bold text-amber-700">24.63%</span>
                    </div>
                    <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[24.63%] rounded-full"></div>
                    </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-dashed border-slate-300">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-emerald-700 flex items-center gap-1">
                             <Info className="w-3 h-3" /> Nhóm thiếu ít (&lt; 5%)
                        </span>
                        <span className="font-bold text-emerald-700">~ 4.8%</span>
                    </div>
                    <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[4.85%] rounded-full"></div>
                    </div>
                </div>
              </div>

              {/* Cột phải: Nhận xét */}
              <div className="md:col-span-2 flex flex-col justify-center space-y-5 border-l pl-6 border-amber-200">
                <div className="space-y-2">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-red-200 mb-1">Xóa cột (Drop Column)</Badge>
                  <p className="text-sm text-muted-foreground">
                    <strong>sustainability_tags</strong> bị thiếu gần như toàn bộ (92%). Loại bỏ cột này.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200 mb-1">Cân nhắc / Imputation</Badge>
                  <p className="text-sm text-muted-foreground">
                    Nhóm màu cam (24-34%): Cần xử lý kỹ bằng cách điền giá trị hoặc loại bỏ dòng tùy ngữ cảnh.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200 mb-1">Xóa dòng (Safe Drop)</Badge>
                  <p className="text-sm text-muted-foreground">
                    Nhóm màu xanh (&lt; 5%) chứa Price & Rating. Loại bỏ các dòng này để giữ dữ liệu sạch.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Unique Value Analysis */}
      <section className="container mx-auto px-4 py-12 bg-slate-50/50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Phân tích đặc trưng dữ liệu</h2>
        <Card className="max-w-6xl mx-auto border-2 border-indigo-500/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fingerprint className="w-6 h-6 text-indigo-600" />
              Phân tích giá trị khác nhau (Unique Values)
            </CardTitle>
            <CardDescription>Đánh giá độ đa dạng của dữ liệu để chọn kỹ thuật mã hóa (Encoding) phù hợp</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Group 1: High Cardinality */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">High Cardinality</Badge>
                    <span className="text-xs text-muted-foreground">Dữ liệu liên tục & Text</span>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-sm">product_title</p>
                        <p className="text-xs text-muted-foreground">Text Identifier</p>
                    </div>
                    <Badge variant="secondary" className="bg-white text-blue-700 border-blue-200">8,808</Badge>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 space-y-2">
                    <p className="font-semibold text-sm mb-2">Continuous Variables</p>
                    <div className="flex justify-between text-xs">
                        <span>total_reviews</span>
                        <span className="font-mono font-bold">4,413</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span>discounted_price</span>
                        <span className="font-mono font-bold">3,558</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span>original_price</span>
                        <span className="font-mono font-bold">3,151</span>
                    </div>
                </div>
                <div className="text-xs text-muted-foreground italic mt-2 p-2 bg-slate-100 rounded">
                   Insight: Số lượng giá trị lớn, phù hợp cho bài toán hồi quy (Regression). Tên sản phẩm rất đa dạng.
                </div>
              </div>

              {/* Group 2: Medium Cardinality */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Medium Cardinality</Badge>
                    <span className="text-xs text-muted-foreground">Dữ liệu thứ bậc</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                     <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100 text-center">
                        <span className="block text-2xl font-bold text-purple-700">1,526</span>
                        <span className="text-xs text-muted-foreground">discount_percent</span>
                     </div>
                     <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100 text-center">
                        <span className="block text-2xl font-bold text-purple-700">42</span>
                        <span className="text-xs text-muted-foreground">has_coupon</span>
                     </div>
                </div>
                <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">product_rating</span>
                        <Badge variant="outline" className="text-purple-700 border-purple-200">31 unique</Badge>
                    </div>
                    <div className="h-2 w-full bg-purple-200 rounded-full">
                         <div className="h-full bg-purple-500 w-[70%] rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Thang điểm từ 1.0 - 5.0</p>
                </div>
                <div className="p-3 bg-purple-50/50 rounded-lg border border-purple-100">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">purchased_last_month</span>
                        <Badge variant="outline" className="text-purple-700 border-purple-200">29 unique</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Đã xử lý từ dạng "1k+", "500+" thành số.</p>
                </div>
              </div>

              {/* Group 3: Low Cardinality */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">Low Cardinality</Badge>
                    <span className="text-xs text-muted-foreground">Phân loại & Nhị phân</span>
                </div>
                <div className="p-3 bg-pink-50/50 rounded-lg border border-pink-100 flex items-center justify-between">
                     <div>
                        <p className="font-semibold text-sm">product_category</p>
                        <p className="text-xs text-muted-foreground">Main Categories</p>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-700">
                        15
                     </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-pink-50/50 rounded-lg border border-pink-100 flex flex-col items-center justify-center gap-1">
                        <span className="text-sm font-medium">is_sponsored</span>
                        <Badge className="bg-pink-600">2 (Binary)</Badge>
                    </div>
                     <div className="p-3 bg-pink-50/50 rounded-lg border border-pink-100 flex flex-col items-center justify-center gap-1">
                        <span className="text-sm font-medium">is_best_seller</span>
                        <Badge variant="outline" className="border-pink-300 text-pink-700">12 (Mixed)</Badge>
                    </div>
                </div>
                 <div className="text-xs text-muted-foreground italic mt-2 p-2 bg-slate-100 rounded">
                   Insight: <code>is_best_seller</code> có 12 giá trị (lỗi định dạng), cần xử lý về Binary. <code>product_category</code> thích hợp One-hot Encoding.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Descriptive Statistics (THỐNG KÊ MÔ TẢ) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Thống kê mô tả</h2>
        
        {/* --- PART 1: NUMERIC DATA --- */}
        <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-700">
                <Calculator className="w-6 h-6 text-primary" />
                1. Đối với các biến số (Numeric Variables)
            </h3>

            {/* 5.1.1 Bảng thống kê */}
            <Card className="border-2 shadow-md overflow-hidden mb-12">
                <CardHeader className="bg-slate-50 border-b">
                    <CardTitle>Bảng tổng hợp thống kê</CardTitle>
                    <CardDescription>Các chỉ số thống kê cơ bản: Mean, Std, Min, Max và các phân vị (Quartiles)</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-slate-100 hover:bg-slate-100">
                                    <TableHead className="w-[150px] font-bold text-slate-900">Statistic</TableHead>
                                    <TableHead className="font-bold text-primary">Product Rating</TableHead>
                                    <TableHead className="font-bold text-primary">Total Reviews</TableHead>
                                    <TableHead className="font-bold text-primary">Purchased (Month)</TableHead>
                                    <TableHead className="font-bold text-primary">Discounted Price</TableHead>
                                    <TableHead className="font-bold text-primary">Original Price</TableHead>
                                    <TableHead className="font-bold text-primary">Discount %</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">Count</TableCell>
                                    <TableCell>41,651</TableCell>
                                    <TableCell>41,651</TableCell>
                                    <TableCell>32,164</TableCell>
                                    <TableCell>40,613</TableCell>
                                    <TableCell>40,613</TableCell>
                                    <TableCell>40,613</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">Mean</TableCell>
                                    <TableCell className="text-blue-600 font-semibold">4.40</TableCell>
                                    <TableCell>3,087</TableCell>
                                    <TableCell>1,294</TableCell>
                                    <TableCell>243.23</TableCell>
                                    <TableCell>257.61</TableCell>
                                    <TableCell>6.55%</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">Std</TableCell>
                                    <TableCell>0.39</TableCell>
                                    <TableCell className="text-red-500 font-semibold">13,030</TableCell>
                                    <TableCell className="text-red-500 font-semibold">6,318</TableCell>
                                    <TableCell>473.35</TableCell>
                                    <TableCell>496.63</TableCell>
                                    <TableCell>12.74</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">Min</TableCell>
                                    <TableCell>1.00</TableCell>
                                    <TableCell>1.00</TableCell>
                                    <TableCell>50.00</TableCell>
                                    <TableCell>2.16</TableCell>
                                    <TableCell>2.16</TableCell>
                                    <TableCell>0.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">25%</TableCell>
                                    <TableCell>4.20</TableCell>
                                    <TableCell>82.00</TableCell>
                                    <TableCell>100.00</TableCell>
                                    <TableCell>29.69</TableCell>
                                    <TableCell>32.99</TableCell>
                                    <TableCell>0.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">50% (Median)</TableCell>
                                    <TableCell>4.50</TableCell>
                                    <TableCell>343.00</TableCell>
                                    <TableCell>200.00</TableCell>
                                    <TableCell>84.99</TableCell>
                                    <TableCell>89.00</TableCell>
                                    <TableCell>0.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">75%</TableCell>
                                    <TableCell>4.70</TableCell>
                                    <TableCell>1,886</TableCell>
                                    <TableCell>400.00</TableCell>
                                    <TableCell>224.00</TableCell>
                                    <TableCell>229.99</TableCell>
                                    <TableCell>8.49</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium bg-slate-50">Max</TableCell>
                                    <TableCell>5.00</TableCell>
                                    <TableCell>865,598</TableCell>
                                    <TableCell>100,000</TableCell>
                                    <TableCell>5,449</TableCell>
                                    <TableCell>5,449</TableCell>
                                    <TableCell>85.42</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

             {/* Nhận xét bảng thống kê */}
             <div className="mt-6 mb-12 bg-slate-50 border-l-4 border-primary p-4 rounded-r-md text-slate-700 space-y-2">
                <h4 className="font-bold text-lg mb-2">Đánh giá tổng quan:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Product Rating:</strong> Điểm trung bình ~4.4/5, phân bố nghiêng về 4–5 sao → đa số sản phẩm được đánh giá cao.</li>
                    <li><strong>Total Reviews:</strong> Trung bình ~3087 đánh giá nhưng độ lệch chuẩn rất lớn (13,030). Có sản phẩm đạt tới 865k review → Phân phối lệch mạnh.</li>
                    <li><strong>Purchased Last Month:</strong> Trung bình ~1294 lượt/tháng, phân tán lớn (std ~6318), max lên tới 100,000.</li>
                    <li><strong>Price (Discounted & Original):</strong> Dao động rộng (từ $2 đến $5449). Dải giá trải dài từ rất rẻ đến rất cao.</li>
                    <li><strong>Discount Percentage:</strong> Trung bình ~6.5%, phần lớn là 0% (Median=0), chỉ một số ít giảm mạnh (Max ~85%).</li>
                </ul>
                <div className="pt-2 mt-2 border-t border-slate-200 font-semibold text-red-600 flex items-center gap-2">
                     <MoveRight className="w-4 h-4" />
                     Kết luận: Dữ liệu chứa nhiều Outliers và lệch phải nặng. Cần chuẩn hóa (Normalization) và xử lý ngoại lai kỹ lưỡng.
                </div>
            </div>

            {/* 5.1.2 Phân tích phân phối (Histograms) - ĐÃ SỬA: Bố cục dọc để ảnh to hơn */}
            <div className="flex flex-col gap-8 mb-16">
                 <Card className="border-2 w-full shadow-md">
                    <CardHeader>
                        <CardTitle>Phân phối dữ liệu (Histograms)</CardTitle>
                        <CardDescription>Quan sát hình dáng phân phối của các biến số</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-white rounded-lg overflow-hidden border">
                             <img src={histogramImg} alt="Distribution Histograms - Phân phối của các biến số" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-xs text-center text-muted-foreground p-2 italic mt-2">Biểu đồ phân phối (Histogram) của 6 biến số quan trọng</p>
                    </CardContent>
                 </Card>

                 <div className="space-y-6 px-2 md:px-8 lg:px-16">
                     <h3 className="text-2xl font-semibold flex items-center gap-2 text-slate-700">
                        <BarChart4 className="w-6 h-6 text-primary" />
                        Nhận xét phân phối
                     </h3>
                     <div className="prose text-slate-600 max-w-none">
                        <p className="mb-4">Kết quả trực quan hóa cho thấy các đặc điểm đáng chú ý:</p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <Badge variant="outline" className="h-fit mt-0.5 border-blue-500 text-blue-700 shrink-0">Rating</Badge>
                                <span>Lệch phải, tập trung chủ yếu ở mức 4–5 sao. Phần lớn sản phẩm Amazon có chất lượng tốt.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="outline" className="h-fit mt-0.5 border-blue-500 text-blue-700 shrink-0">Reviews</Badge>
                                <span>Sau khi log-scale, dữ liệu gần chuẩn hơn, nhưng vẫn tồn tại đuôi dài (long-tail) do các sản phẩm "hot".</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="outline" className="h-fit mt-0.5 border-blue-500 text-blue-700 shrink-0">Purchased</Badge>
                                <span>Rất lệch phải. Đa số sản phẩm có lượng mua thấp, chỉ một nhóm tinh hoa có lượng mua cực cao (Outliers rõ rệt).</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="outline" className="h-fit mt-0.5 border-blue-500 text-blue-700 shrink-0">Price</Badge>
                                <span>Cả <i>Discounted</i> và <i>Original Price</i> sau khi Log-transform đều trở nên ổn định và gần chuẩn (Normal distribution), rất thuận lợi cho mô hình.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="outline" className="h-fit mt-0.5 border-blue-500 text-blue-700 shrink-0">Discount %</Badge>
                                <span>Nghiêng mạnh về 0. Phần lớn sản phẩm không giảm giá hoặc giảm rất ít.</span>
                            </li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-md mt-6 text-sm text-blue-800 font-medium border border-blue-100 flex items-center gap-2">
                            <Info className="w-5 h-5 shrink-0" />
                            <span>Log-transformation là bước xử lý bắt buộc để đưa các phân phối lệch về dạng chuẩn, giúp mô hình hồi quy học tốt hơn.</span>
                        </div>
                     </div>
                 </div>
            </div>

            {/* 5.1.3 Phân tích Boxplots - ĐÃ SỬA: Bố cục dọc để ảnh to hơn */}
            <div className="flex flex-col gap-8 mb-16">
                 <Card className="border-2 w-full shadow-md">
                    <CardHeader>
                        <CardTitle>Biểu đồ hộp (Boxplots)</CardTitle>
                        <CardDescription>Trực quan hóa ngoại lai của các biến số sau khi xử lý Log</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-white rounded-lg overflow-hidden border">
                             <img src={boxplotGridImg} alt="Outlier Boxplots - Phân tích ngoại lai" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-xs text-center text-muted-foreground p-2 italic mt-2">Biểu đồ Boxplot cho thấy lượng lớn Outliers ở các biến Reviews và Sales</p>
                    </CardContent>
                 </Card>

                 <div className="space-y-6 px-2 md:px-8 lg:px-16">
                     <h3 className="text-2xl font-semibold flex items-center gap-2 text-slate-700">
                        <Target className="w-6 h-6 text-primary" />
                        Phân tích ngoại lai (Outliers)
                     </h3>
                     <div className="prose text-slate-600 max-w-none">
                        <p className="mb-4">Biểu đồ Boxplot giúp xác định rõ các giá trị ngoại lai (các điểm đen nằm ngoài râu):</p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-start">
                                <Badge variant="secondary" className="h-fit mt-0.5 shrink-0">Rating</Badge>
                                <span>Outlier nằm ở phía dưới (các sản phẩm 1-2 sao), trái ngược với xu hướng chung.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="secondary" className="h-fit mt-0.5 shrink-0">Review/Sale</Badge>
                                <span>Biến <i>Total Reviews</i> và <i>Purchased Last Month</i> chứa dày đặc outlier phía trên. Đây là các sản phẩm "Best Seller".</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="secondary" className="h-fit mt-0.5 shrink-0">Price</Badge>
                                <span>Phân phối trải rộng, outlier tập trung ở nhóm hàng cao cấp (giá rất cao).</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Badge variant="secondary" className="h-fit mt-0.5 shrink-0">Discount %</Badge>
                                <span>Phần lớn dữ liệu bẹt dí ở mức thấp, nhưng có nhiều điểm outlier ở mức giảm giá sâu.</span>
                            </li>
                        </ul>
                        <div className="bg-amber-50 p-4 rounded-md mt-6 text-sm text-amber-800 font-medium border-l-4 border-amber-400 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 shrink-0" />
                            <span>Kết luận quan trọng: Dữ liệu chứa rất nhiều Outlier thực (không phải nhiễu). Cần sử dụng <strong>RobustScaler</strong> (bền vững với outlier) thay vì StandardScaler thông thường.</span>
                        </div>
                     </div>
                 </div>
            </div>
        </div>

        {/* --- PART 2: CATEGORICAL DATA --- */}
        <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-700">
                <PieChart className="w-6 h-6 text-primary" />
                2. Đối với các biến phân loại (Categorical Variables)
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Product Category Distribution */}
                <Card className="border-2 lg:row-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-indigo-600" />
                            Phân bố Danh mục sản phẩm
                        </CardTitle>
                        <CardDescription>Top 10 ngành hàng phổ biến nhất trong tập dữ liệu</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <CategoryBar label="Other Electronics" count={8755} total={42675} colorClass="bg-indigo-600" />
                         <CategoryBar label="Laptops" count={8693} total={42675} colorClass="bg-indigo-500" />
                         <CategoryBar label="Phones" count={6563} total={42675} colorClass="bg-indigo-400" />
                         <CategoryBar label="Cameras" count={3677} total={42675} colorClass="bg-indigo-400" />
                         <CategoryBar label="Power & Batteries" count={2877} total={42675} colorClass="bg-blue-400" />
                         <CategoryBar label="TV & Display" count={2630} total={42675} colorClass="bg-blue-400" />
                         <CategoryBar label="Chargers & Cables" count={1833} total={42675} colorClass="bg-blue-300" />
                         <CategoryBar label="Storage" count={1630} total={42675} colorClass="bg-blue-300" />
                         <CategoryBar label="Speakers" count={1345} total={42675} colorClass="bg-teal-400" />
                         <CategoryBar label="Networking" count={1070} total={42675} colorClass="bg-teal-300" />
                         
                         <div className="mt-4 p-3 bg-indigo-50 rounded text-sm text-indigo-800">
                            <strong>Nhận xét:</strong> Dữ liệu tập trung mạnh vào "Electronics", "Laptops" và "Phones" (chiếm hơn 50% tổng số). Việc chênh lệch số lượng mẫu giữa các nhóm (Imbalance) có thể ảnh hưởng đến mô hình nếu dùng Category làm feature chính.
                         </div>
                    </CardContent>
                </Card>

                {/* Marketing Flags */}
                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-pink-600" />
                            Thông tin Tiếp thị (Marketing Info)
                        </CardTitle>
                        <CardDescription>Tỷ lệ sản phẩm có Quảng cáo, Coupon hoặc Best Seller</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Sponsored */}
                        <div className="space-y-2">
                             <div className="flex justify-between text-sm">
                                <span>Trạng thái Quảng cáo (is_sponsored)</span>
                                <span className="font-bold">Organic: 83.5% vs Sponsored: 16.5%</span>
                             </div>
                             <div className="flex h-3 w-full rounded-full overflow-hidden">
                                <div className="bg-slate-300 w-[83.5%]" title="Organic"></div>
                                <div className="bg-pink-500 w-[16.5%]" title="Sponsored"></div>
                             </div>
                        </div>

                        {/* Best Seller */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 border rounded bg-slate-50">
                                <span className="text-xs text-muted-foreground uppercase font-bold">Best Seller Badge</span>
                                <div className="text-2xl font-bold text-slate-800 mt-1">~0.6%</div>
                                <p className="text-xs text-muted-foreground">Chỉ 275 SP có badge "Best Seller"</p>
                            </div>
                            <div className="p-3 border rounded bg-slate-50">
                                <span className="text-xs text-muted-foreground uppercase font-bold">Has Coupon</span>
                                <div className="text-2xl font-bold text-slate-800 mt-1">~4.5%</div>
                                <p className="text-xs text-muted-foreground">Đa số (40k+) không có coupon</p>
                            </div>
                        </div>

                         <div className="flex items-start gap-2 text-sm text-muted-foreground bg-slate-100 p-2 rounded">
                            <Info className="w-4 h-4 mt-0.5 shrink-0" />
                            <span>
                                <strong>Lưu ý:</strong> Biến <code>buy_box_availability</code> chỉ có duy nhất 1 giá trị ("Add to cart") cho 28k dòng (còn lại missing). Biến này có Variance = 0, nên loại bỏ khỏi mô hình.
                            </span>
                         </div>
                    </CardContent>
                </Card>

                {/* Top Products */}
                <Card className="border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Package className="w-5 h-5 text-emerald-600" />
                            Sản phẩm phổ biến nhất
                        </CardTitle>
                        <CardDescription>Top sản phẩm xuất hiện nhiều lần (Top duplicate titles)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b pb-2">
                                <span className="truncate w-[80%]">Duracell Coppertop 9V Battery</span>
                                <Badge variant="outline">744</Badge>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="truncate w-[80%]">Energizer MAX AA Batteries (16 Pack)</span>
                                <Badge variant="outline">566</Badge>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="truncate w-[80%]">TRX Training 6 Month Membership</span>
                                <Badge variant="outline">456</Badge>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="truncate w-[80%]">KODAK 10.1 Inch WiFi Digital Frame</span>
                                <Badge variant="outline">438</Badge>
                            </li>
                             <li className="flex justify-between">
                                <span className="truncate w-[80%]">Belkin MagSafe-Compatible Charger</span>
                                <Badge variant="outline">377</Badge>
                            </li>
                        </ul>
                         <p className="text-xs text-muted-foreground mt-3 italic text-center">
                            Có 8,808 tiêu đề sản phẩm duy nhất trên tổng số 42k dòng.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>

      </section>

      {/* Section 6: Data Preprocessing (TIỀN XỬ LÝ) */}
      <section className="container mx-auto px-4 py-12 bg-slate-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Tiền xử lý dữ liệu (Preprocessing)</h2>
        
        {/* 6.1 Feature Selection & Split */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature Selection */}
            <Card className="border-2 border-l-4 border-l-blue-500">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings2 className="w-5 h-5 text-blue-600" />
                        Lựa chọn đặc trưng (Feature Selection)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-slate-600 mb-4">
                        Loại bỏ các biến nhiễu hoặc thiếu quá nhiều dữ liệu. Biến <code>discount_percentage</code> bị loại bỏ vì phụ thuộc tuyến tính vào <code>original_price</code> và <code>discounted_price</code>.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">✔ product_rating</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">✔ total_reviews</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">✔ purchased_last_month</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">✔ original_price</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">✔ is_sponsored</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">✔ product_category</Badge>
                        <Badge variant="destructive" className="opacity-80">✘ discount_percentage</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Train/Test Split */}
            <Card className="border-2 border-l-4 border-l-orange-500">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Split className="w-5 h-5 text-orange-600" />
                        Phân chia dữ liệu (Train/Test Split)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm border-b pb-2">
                            <span className="text-muted-foreground">Target Variable (y):</span>
                            <span className="font-bold font-mono">discounted_price</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b pb-2">
                            <span className="text-muted-foreground">Ratio:</span>
                            <span className="font-bold">80% Train - 20% Test</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b pb-2">
                            <span className="text-muted-foreground">Random State:</span>
                            <span className="font-mono bg-slate-100 px-2 py-0.5 rounded">42</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="bg-slate-100 p-2 rounded text-center">
                                <p className="text-xs text-muted-foreground">X_train Shape</p>
                                <p className="font-mono font-bold text-orange-700">(24182, 6)</p>
                            </div>
                            <div className="bg-slate-100 p-2 rounded text-center">
                                <p className="text-xs text-muted-foreground">X_test Shape</p>
                                <p className="font-mono font-bold text-orange-700">(6046, 6)</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* 6.2 Pipeline Steps Visualization */}
        <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

            <div className="space-y-8">
                {/* Step 1: Missing Value */}
                <div className="relative md:pl-20">
                    <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-full items-center justify-center z-10">
                        <Trash2 className="w-6 h-6 text-slate-500" />
                    </div>
                    <Card className="border-2 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-slate-800">1. Xử lý Missing Value</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <p className="text-sm text-slate-600 mb-2">
                                        Nhóm quyết định <strong>loại bỏ (Drop NA)</strong> các hàng chứa giá trị thiếu thay vì Imputation.
                                    </p>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                                        <li>Số lượng mẫu ban đầu: 42,675</li>
                                        <li>Sau khi lọc: <strong>30,228</strong> (Giảm ~29%)</li>
                                        <li>Lý do: Đảm bảo dữ liệu sạch tuyệt đối, tránh nhiễu do điền giá trị giả.</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 2: Scaling */}
                <div className="relative md:pl-20">
                    <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-full items-center justify-center z-10">
                        <Sigma className="w-6 h-6 text-purple-600" />
                    </div>
                    <Card className="border-2 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-slate-800">2. Chuẩn hóa dữ liệu (Scaling)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-1">MinMaxScaler</Badge>
                                        <p className="text-sm text-slate-600">
                                            Áp dụng cho <code>product_rating</code> (biên độ nhỏ, không outlier).
                                        </p>
                                    </div>
                                    <div>
                                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-1">Log1p + RobustScaler</Badge>
                                        <p className="text-sm text-slate-600">
                                            Áp dụng cho <code>total_reviews</code>, <code>purchased</code>, <code>original_price</code>.
                                            <br />
                                            <span className="italic text-muted-foreground text-xs">Lý do: Giảm độ lệch (skewness) bằng Logarit và xử lý ngoại lai bằng RobustScaler (dựa trên tứ phân vị IQR).</span>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Step 3: Encoding */}
                <div className="relative md:pl-20">
                    <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-full items-center justify-center z-10">
                        <Binary className="w-6 h-6 text-indigo-600" />
                    </div>
                    <Card className="border-2 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-slate-800">3. Mã hóa biến phân loại (Encoding)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <p className="text-sm text-slate-600 mb-2">
                                        Sử dụng <strong>One-Hot Encoding</strong> cho <code>is_sponsored</code> và <code>product_category</code>.
                                    </p>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                                        <li>Tránh gán thứ tự sai lầm (như 1 &gt; 0) cho các danh mục ngang hàng.</li>
                                        <li>Kết quả: Số lượng đặc trưng tăng từ 7 lên <strong>22 cột</strong>.</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Optional Step: PCA */}
                <div className="relative md:pl-20 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-2 border-slate-200 border-dashed rounded-full items-center justify-center z-10">
                        <Layers className="w-6 h-6 text-slate-400" />
                    </div>
                    <Card className="border-2 border-dashed">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-slate-600">4. Giảm chiều dữ liệu (PCA - Optional)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <p className="text-sm text-slate-500">
                                        Cấu hình PCA được chuẩn bị sẵn để thử nghiệm giảm chiều dữ liệu nếu cần thiết, giữ lại 95% hoặc 99% lượng thông tin (variance).
                                    </p>
                                </div>
                                
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
      </section>

      {/* Section 7: Modeling & Results (XÂY DỰNG & HUẤN LUYỆN) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Xây dựng & Huấn luyện Mô hình</h2>
        
        {/* 7.1 Final Pipeline & Strategy */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                         <BrainCircuit className="w-5 h-5 text-indigo-500" />
                         Chiến lược huấn luyện
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-slate-600">
                        <p>
                            <strong>Preprocessing Pipeline:</strong> Thực hiện pipeline tiền xử lý phía trên.
                        </p>
                        <p>
                            <strong>Target Transformation:</strong> Biến mục tiêu <code>y</code> (Price) được xử lý riêng biệt để đảm bảo phân phối chuẩn trước khi training:
                        </p>
                        <div className="flex items-center gap-2 font-mono text-xs bg-indigo-50 p-2 rounded border border-indigo-100 text-indigo-700">
                            y_train &rarr; Log1p &rarr; RobustScaler &rarr; Model.fit
                        </div>
                        <p>
                            <strong>Evaluation:</strong> Kết quả dự đoán được transform ngược lại (Inverse Transform) về thang đo giá trị thực ($) để tính toán sai số MSE, RMSE.
                        </p>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        Lưu ý: Quá trình tiền xử lý sẽ được thử nghiệm nhiều config hơn ở sau.
                    </div>
                </CardContent>
            </Card>

            <Card className="border-2 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                         <Microscope className="w-5 h-5 text-cyan-500" />
                         Các mô hình thử nghiệm
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 p-2 border rounded hover:bg-slate-50">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-sm font-medium">Linear Regression</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 border rounded hover:bg-slate-50">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">Random Forest</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 border rounded hover:bg-slate-50">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span className="text-sm font-medium">SVR (Kernel RBF)</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 border rounded hover:bg-slate-50">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-sm font-medium">MLP Regressor</span>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">
                        Các mô hình đều sử dụng Hyperparameter mặc định, Hyperparameter tuning sẽ ở bước sau.
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* 7.3 Results Table */}
        <Card className="border-2 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                 <FlaskConical className="w-6 h-6 text-primary" />
                 Kết quả thực nghiệm (Experimental Results)
              </CardTitle>
              <CardDescription>Đánh giá hiệu suất trên tập kiểm tra (Test Set - 20%)</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-3 border-b-2 border-slate-200">Model Algorithm</th>
                      <th className="p-3 border-b-2 border-slate-200 text-right">MSE (Thấp tốt)</th>
                      <th className="p-3 border-b-2 border-slate-200 text-right">RMSE (Thấp tốt)</th>
                      <th className="p-3 border-b-2 border-slate-200 text-right">MAE (Thấp tốt)</th>
                      <th className="p-3 border-b-2 border-slate-200 text-right">R² Score (Cao tốt)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-medium text-slate-700">Linear Regression</td>
                      <td className="p-3 text-right font-mono">11,746.01</td>
                      <td className="p-3 text-right font-mono">108.38</td>
                      <td className="p-3 text-right font-mono">20.30</td>
                      <td className="p-3 text-right font-bold text-amber-600">0.826</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-medium text-slate-700">SVR</td>
                      <td className="p-3 text-right font-mono">2,351.97</td>
                      <td className="p-3 text-right font-mono">48.49</td>
                      <td className="p-3 text-right font-mono">21.44</td>
                      <td className="p-3 text-right font-bold text-blue-600">0.965</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-medium text-slate-700">MLP Regressor</td>
                      <td className="p-3 text-right font-mono">2,143.89</td>
                      <td className="p-3 text-right font-mono">46.30</td>
                      <td className="p-3 text-right font-mono">12.94</td>
                      <td className="p-3 text-right font-bold text-blue-600">0.968</td>
                    </tr>
                    <tr className="bg-emerald-50 border-b-2 border-emerald-100 font-bold">
                      <td className="p-3 flex items-center gap-2 text-emerald-800">
                         <Award className="w-4 h-4" />
                         Random Forest Regressor
                      </td>
                      <td className="p-3 text-right font-mono text-emerald-700">444.28</td>
                      <td className="p-3 text-right font-mono text-emerald-700">21.07</td>
                      <td className="p-3 text-right font-mono text-emerald-700">3.73</td>
                      <td className="p-3 text-right text-emerald-600 text-lg">0.993</td>
                    </tr>
                  </tbody>
                </table>
               </div>

               {/* New Section: Comments & Conclusion */}
               <div className="mt-8 space-y-4">
                    <h4 className="text-xl font-semibold text-slate-800 border-l-4 border-primary pl-3">Nhận xét kết quả</h4>
                    <div className="bg-slate-50 p-4 rounded-lg text-slate-700 space-y-3">
                        <p>Dựa trên kết quả đánh giá, nhóm nhận thấy các mô hình có hiệu suất khác nhau đáng kể:</p>
                        <ul className="list-disc list-inside space-y-2 ml-2">
                            <li><strong className="text-red-600">Linear Regression:</strong> Hiệu suất kém nhất với MSE cao nhất (11,746) và R² thấp (0.826), cho thấy mô hình tuyến tính đơn giản không nắm bắt được độ phức tạp của dữ liệu giá.</li>
                            <li><strong className="text-blue-600">SVR và MLPRegressor:</strong> Cho hiệu suất trung bình khá (R² ~ 0.965). Tuy nhiên, SVR có sai số tuyệt đối (MAE) khá cao (21.44), trong khi MLP cải thiện tốt hơn (MAE ~ 12.94).</li>
                            <li><strong className="text-emerald-600">RandomForestRegressor:</strong> Hiệu suất vượt trội nhất mọi mặt: MSE thấp nhất (444.28), RMSE nhỏ (21.07), MAE thấp nhất (3.73) và R² đạt mức gần như tuyệt đối (0.993).</li>
                        </ul>
                    </div>
               </div>
            </CardContent>
        </Card>

      </section>

      {/* Section: Training Process & Hyperparameter Tuning */}
      <section className="container mx-auto px-4 py-12 bg-slate-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Quá trình Training & Tối ưu hóa</h2>
        
        {/* Step 1: Config Preprocess */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-700">
            <Settings2 className="w-6 h-6 text-primary" />
            Bước 1: Tìm cấu hình Preprocess tốt nhất
          </h3>
          <Card className="border-2 shadow-md mb-6">
            <CardHeader>
              <CardTitle>Kết quả tìm kiếm Config Preprocess</CardTitle>
              <CardDescription>Config Preprocess có điểm R2 tốt nhất với từng mô hình</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-100">
                      <TableHead className="font-bold">Mô hình</TableHead>
                      <TableHead>Num Impute</TableHead>
                      <TableHead>Cate Impute</TableHead>
                      <TableHead>Scale</TableHead>
                      <TableHead>PCA</TableHead>
                      <TableHead>Encode</TableHead>
                      <TableHead className="text-right font-bold">R² Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">LinearRegression</TableCell>
                      <TableCell>none</TableCell>
                      <TableCell>none</TableCell>
                      <TableCell>log1p_robust</TableCell>
                      <TableCell>none</TableCell>
                      <TableCell>onehot</TableCell>
                      <TableCell className="text-right font-mono">0.827169</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">RandomForest</TableCell>
                      <TableCell>median</TableCell>
                      <TableCell>none</TableCell>
                      <TableCell>minmax</TableCell>
                      <TableCell>pca_0.99_auto</TableCell>
                      <TableCell>ordinal</TableCell>
                      <TableCell className="text-right font-mono font-bold text-emerald-600">0.995076</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">SVR</TableCell>
                      <TableCell>median</TableCell>
                      <TableCell>most</TableCell>
                      <TableCell>log1p_robust</TableCell>
                      <TableCell>pca_0.95_full</TableCell>
                      <TableCell>onehot</TableCell>
                      <TableCell className="text-right font-mono">0.969946</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MLP</TableCell>
                      <TableCell>median</TableCell>
                      <TableCell>none</TableCell>
                      <TableCell>log1p_robust</TableCell>
                      <TableCell>pca_0.99_auto</TableCell>
                      <TableCell>onehot</TableCell>
                      <TableCell className="text-right font-mono">0.982968</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-lg text-slate-800">Nhận xét về Preprocessing Config:</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <Badge variant="outline" className="h-fit mt-0.5">LinearRegression</Badge>
                <span>Mô hình cho kết quả rất tệ nếu không dùng <strong>Log1p_Robust</strong>. Khi sử dụng thu được kết quả khá tốt (0.81-0.82).</span>
              </li>
              <li className="flex gap-2">
                <Badge variant="outline" className="h-fit mt-0.5">RandomForest</Badge>
                <span>Hoạt động tốt và ổn định ngay cả khi không dùng scaler. Encoding không ảnh hưởng đáng kể.</span>
              </li>
              <li className="flex gap-2">
                <Badge variant="outline" className="h-fit mt-0.5">SVR</Badge>
                <span>Cực kỳ nhạy với scaler, khi không sử dụng <strong>log1p_robust</strong> thì mô hình không hoạt động. Onehot tốt hơn hẳn Ordinal.</span>
              </li>
              <li className="flex gap-2">
                <Badge variant="outline" className="h-fit mt-0.5">MLP</Badge>
                <span>Cũng yêu cầu sử dụng scaler để đạt kết quả tốt. PCA hỗ trợ cho MLP khá tốt.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 2: Hyperparameter Tuning */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-700">
            <SlidersHorizontal className="w-6 h-6 text-primary" />
            Bước 2: Tuning Hyperparameter
          </h3>
          <p className="text-muted-foreground mb-6">
            Sử dụng cấu hình preprocess tốt nhất tìm được ở Bước 1 để tinh chỉnh tham số cho RandomForest, SVR và MLP.
          </p>

          <div className="space-y-8">
            {/* Table 1: RandomForest */}
            <Card className="border shadow-sm">
              <CardHeader className="bg-emerald-50/50 pb-2">
                <CardTitle className="text-lg text-emerald-800">1. RandomForest Tuning Results</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Max Depth</TableHead>
                        <TableHead>Max Features</TableHead>
                        <TableHead>Min Samples Leaf</TableHead>
                        <TableHead>Min Samples Split</TableHead>
                        <TableHead>N Estimators</TableHead>
                        <TableHead className="text-right">MSE</TableHead>
                        <TableHead className="text-right">RMSE</TableHead>
                        <TableHead className="text-right">MAE</TableHead>
                        <TableHead className="text-right font-bold">R²</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>20.0</TableCell>
                        <TableCell>log2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell className="text-right font-mono">1125.56</TableCell>
                        <TableCell className="text-right font-mono">33.55</TableCell>
                        <TableCell className="text-right font-mono">5.06</TableCell>
                        <TableCell className="text-right font-bold text-emerald-600">0.9951</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20.0</TableCell>
                        <TableCell>sqrt</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell className="text-right font-mono">1125.56</TableCell>
                        <TableCell className="text-right font-mono">33.55</TableCell>
                        <TableCell className="text-right font-mono">5.06</TableCell>
                        <TableCell className="text-right font-bold text-emerald-600">0.9951</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20.0</TableCell>
                        <TableCell>sqrt</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>200</TableCell>
                        <TableCell className="text-right font-mono">1140.42</TableCell>
                        <TableCell className="text-right font-mono">33.77</TableCell>
                        <TableCell className="text-right font-mono">5.08</TableCell>
                        <TableCell className="text-right font-bold text-emerald-600">0.9950</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20.0</TableCell>
                        <TableCell>log2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>200</TableCell>
                        <TableCell className="text-right font-mono">1140.42</TableCell>
                        <TableCell className="text-right font-mono">33.77</TableCell>
                        <TableCell className="text-right font-mono">5.08</TableCell>
                        <TableCell className="text-right font-bold text-emerald-600">0.9950</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>20.0</TableCell>
                        <TableCell>log2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>300</TableCell>
                        <TableCell className="text-right font-mono">1158.82</TableCell>
                        <TableCell className="text-right font-mono">34.04</TableCell>
                        <TableCell className="text-right font-mono">5.14</TableCell>
                        <TableCell className="text-right font-bold text-emerald-600">0.9949</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Table 2: SVR */}
            <Card className="border shadow-sm">
              <CardHeader className="bg-blue-50/50 pb-2">
                <CardTitle className="text-lg text-blue-800">2. SVR Tuning Results</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>C</TableHead>
                        <TableHead>Epsilon</TableHead>
                        <TableHead>Gamma</TableHead>
                        <TableHead>Kernel</TableHead>
                        <TableHead className="text-right">MSE</TableHead>
                        <TableHead className="text-right">RMSE</TableHead>
                        <TableHead className="text-right">MAE</TableHead>
                        <TableHead className="text-right font-bold">R²</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>10.0</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>scale</TableCell>
                        <TableCell>rbf</TableCell>
                        <TableCell className="text-right font-mono">4920.46</TableCell>
                        <TableCell className="text-right font-mono">70.15</TableCell>
                        <TableCell className="text-right font-mono">29.05</TableCell>
                        <TableCell className="text-right font-bold text-blue-600">0.9785</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>100.0</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>scale</TableCell>
                        <TableCell>rbf</TableCell>
                        <TableCell className="text-right font-mono">5968.02</TableCell>
                        <TableCell className="text-right font-mono">77.25</TableCell>
                        <TableCell className="text-right font-mono">30.94</TableCell>
                        <TableCell className="text-right font-bold text-blue-600">0.9739</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>1.0</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>scale</TableCell>
                        <TableCell>rbf</TableCell>
                        <TableCell className="text-right font-mono">6870.35</TableCell>
                        <TableCell className="text-right font-mono">82.89</TableCell>
                        <TableCell className="text-right font-mono">30.45</TableCell>
                        <TableCell className="text-right font-bold text-blue-600">0.9699</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10.0</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>auto</TableCell>
                        <TableCell>rbf</TableCell>
                        <TableCell className="text-right font-mono">7247.35</TableCell>
                        <TableCell className="text-right font-mono">85.13</TableCell>
                        <TableCell className="text-right font-mono">30.73</TableCell>
                        <TableCell className="text-right font-bold text-blue-600">0.9683</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>100.0</TableCell>
                        <TableCell>0.1</TableCell>
                        <TableCell>auto</TableCell>
                        <TableCell>rbf</TableCell>
                        <TableCell className="text-right font-mono">7452.81</TableCell>
                        <TableCell className="text-right font-mono">86.33</TableCell>
                        <TableCell className="text-right font-mono">31.80</TableCell>
                        <TableCell className="text-right font-bold text-blue-600">0.9674</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Table 3: MLP */}
            <Card className="border shadow-sm">
              <CardHeader className="bg-orange-50/50 pb-2">
                <CardTitle className="text-lg text-orange-800">3. MLP Tuning Results</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Activation</TableHead>
                        <TableHead>Alpha</TableHead>
                        <TableHead>Hidden Layers</TableHead>
                        <TableHead>Learning Rate</TableHead>
                        <TableHead className="text-right">MSE</TableHead>
                        <TableHead className="text-right">RMSE</TableHead>
                        <TableHead className="text-right">MAE</TableHead>
                        <TableHead className="text-right font-bold">R²</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>relu</TableCell>
                        <TableCell>0.0100</TableCell>
                        <TableCell>(100, 50)</TableCell>
                        <TableCell>adaptive</TableCell>
                        <TableCell className="text-right font-mono">1380.74</TableCell>
                        <TableCell className="text-right font-mono">37.16</TableCell>
                        <TableCell className="text-right font-mono">10.34</TableCell>
                        <TableCell className="text-right font-bold text-orange-600">0.9940</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>relu</TableCell>
                        <TableCell>0.0100</TableCell>
                        <TableCell>(100, 50)</TableCell>
                        <TableCell>constant</TableCell>
                        <TableCell className="text-right font-mono">1380.74</TableCell>
                        <TableCell className="text-right font-mono">37.16</TableCell>
                        <TableCell className="text-right font-mono">10.34</TableCell>
                        <TableCell className="text-right font-bold text-orange-600">0.9940</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>relu</TableCell>
                        <TableCell>0.0010</TableCell>
                        <TableCell>(100, 50)</TableCell>
                        <TableCell>adaptive</TableCell>
                        <TableCell className="text-right font-mono">1469.03</TableCell>
                        <TableCell className="text-right font-mono">38.33</TableCell>
                        <TableCell className="text-right font-mono">10.04</TableCell>
                        <TableCell className="text-right font-bold text-orange-600">0.9936</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>relu</TableCell>
                        <TableCell>0.0010</TableCell>
                        <TableCell>(100, 50)</TableCell>
                        <TableCell>constant</TableCell>
                        <TableCell className="text-right font-mono">1469.03</TableCell>
                        <TableCell className="text-right font-mono">38.33</TableCell>
                        <TableCell className="text-right font-mono">10.04</TableCell>
                        <TableCell className="text-right font-bold text-orange-600">0.9936</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>relu</TableCell>
                        <TableCell>0.0001</TableCell>
                        <TableCell>(100, 50)</TableCell>
                        <TableCell>constant</TableCell>
                        <TableCell className="text-right font-mono">1507.07</TableCell>
                        <TableCell className="text-right font-mono">38.82</TableCell>
                        <TableCell className="text-right font-mono">10.01</TableCell>
                        <TableCell className="text-right font-bold text-orange-600">0.9934</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Placeholder for user comments */}
          <div className="mt-8 bg-slate-50 p-4 rounded-lg border border-slate-200">
             <h4 className="font-bold text-lg mb-2 text-slate-800">Nhận xét chung về Tuning:</h4>
             <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                    <Badge variant="outline" className="h-fit mt-0.5 border-emerald-500 text-emerald-700">RandomForest</Badge>
                    <span>Việc lựa chọn max features là sqrt hay log2 không làm ảnh hưởng đến hiệu suất. Cải tiến của mô hình cũng không quá nhiều so với mô hình mặc định. Chứng tỏ mô hình đã chạm ngưỡng.</span>
                </li>
                <li className="flex gap-2">
                    <Badge variant="outline" className="h-fit mt-0.5 border-orange-500 text-orange-700">MLP</Badge>
                    <span>Chọn gamma là scale cho kết quả tốt hơn auto. Kết quả tăng từ 0.983 lên 0.994, tăng nhiều nhất. Ngang ngửa với RandomForest.</span>
                </li>
                <li className="flex gap-2">
                    <Badge variant="outline" className="h-fit mt-0.5 border-blue-500 text-blue-700">SVR</Badge>
                    <span>Việc chọn learning rate không ảnh hưởng đến mô hình, activation là relu cho kết quả tốt hơn tanh hoàn toàn. Mô hình tăng từ 0.969 lên 0.978 nhưng kết quả vẫn không bằng RF và MLP.</span>
                </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Conclusion (KẾT LUẬN) */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Kết luận & Nhận xét</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 bg-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Mô hình tốt nhất
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        <strong>Random Forest Regressor</strong> là mô hình vượt trội nhất với <strong>R² ≈ 0.9951</strong> và sai số tuyệt đối trung bình (MAE) chỉ khoảng <strong>5.06</strong>. Điều này cho thấy các mô hình dạng cây (Tree-based) hoạt động rất tốt với dữ liệu dạng bảng có nhiều biến phân loại và numeric hỗn hợp này.
                    </p>
                </CardContent>
            </Card>

            <Card className="border-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Hiệu quả kỹ thuật
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>
                            Việc kết hợp <strong>Log-transform</strong> và <strong>RobustScaler</strong> cho biến mục tiêu <code>y</code> đã giúp giảm đáng kể sai số do các sản phẩm giá trị cao (outliers) gây ra.
                        </li>
                        <li>
                            <strong>One-Hot Encoding</strong> hiệu quả hơn Ordinal Encoding trong trường hợp này vì các danh mục sản phẩm không có thứ tự tự nhiên.
                        </li>
                        <li>
                            Linear Regression kém hiệu quả nhất (R² ~ 0.82) chứng tỏ mối quan hệ giữa các biến là phi tuyến tính (Non-linear).
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>;
};
export default BTL1;