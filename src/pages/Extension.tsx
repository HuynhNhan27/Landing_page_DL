import React from "react";
import { Link } from "react-router-dom";
import ex_1 from "@/assets/ex_1.png";
import ex_2 from "@/assets/ex_2.png";
import ex_3 from "@/assets/ex_3.png";
import ex_4 from "@/assets/ex_4.png";
import ex_5 from "@/assets/ex_5.png";
import ex_6 from "@/assets/ex_6.png";
import ex_7 from "@/assets/ex_7.png";
import ex_8 from "@/assets/ex_8.png";
import ex_9 from "@/assets/ex_9.png";
import ex_10 from "@/assets/ex_10.png";
import ex_11 from "@/assets/ex_11.png";
import ex_12 from "@/assets/ex_12.png";
import {
  // Icons
  ExternalLink, Database, Network, GitBranch, TrendingUp, FileText, ArrowLeft, 
  CheckCircle2, AlertTriangle, Info, BrainCircuit, Share2, Activity,
  Code, GitFork, Sigma, BarChart3, Microscope, LayoutDashboard, PieChart, Image as ImageIcon,
  // New Icons for Categorical
  Users, MapPin, Briefcase, Moon, Utensils, GraduationCap, Brain, Banknote,
  // New Icons for Feature Selection
  Filter, Trash2, ListFilter, Check, X, Calculator,
  // New Icons for Model Training
  Cpu, Zap, Layers, Settings, Play, Terminal,
  ScanSearch, Sparkles, ChartLine
} from "lucide-react";

// Import UI Components (shadcn/ui)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// NOTE: Thay thế các đường dẫn này bằng ảnh thật trong thư mục assets của bạn khi chạy local

const distributionImg = "https://placehold.co/800x500/e2e8f0/475569?text=Distribution+Analysis";
const boxplotImg = "https://placehold.co/800x500/fffbeb/b45309?text=Outlier+Analysis";
const heatmapImg = ex_1;

const Extension = () => {
  
  // Helper render Model Card để đảm bảo đồng bộ
  const ModelCard = ({ id, title, img, colorClass, badgeColor, accuracy, codeSnippet, description }) => (
    <Card className={`border-t-4 ${colorClass} hover:shadow-lg transition-all h-full flex flex-col`}>
        <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <Badge className={`h-6 w-6 rounded-full flex items-center justify-center ${badgeColor} text-sm`}>{id}</Badge>
                    <CardTitle className="text-base font-bold text-slate-800">{title}</CardTitle>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-3">
            {/* Image Area - Giới hạn chiều cao vừa phải */}
            <div className="rounded-md overflow-hidden border bg-slate-50 h-40 flex items-center justify-center shrink-0">
                <img src={img} alt={title} className="h-full w-auto object-contain" />
            </div>

            {/* Code Block */}
            <div className="bg-slate-900 rounded p-3 text-[10px] font-mono text-slate-300 overflow-x-auto shrink-0">
                <pre>{codeSnippet}</pre>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-dashed">
                <span className="text-xs font-semibold text-slate-500">Accuracy</span>
                <span className={`text-lg font-bold ${badgeColor.replace('bg-', 'text-')}`}>{accuracy}</span>
            </div>
            
            {/* Description */}
            <p className="text-xs text-slate-600 italic">
                {description}
            </p>
        </CardContent>
    </Card>
  );

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
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Bayesian Network</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            Extension – Advanced Topics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Phân tích và dự đoán trầm cảm sinh viên sử dụng Bayesian Network và Probabilistic Graphical Models
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
             Thực hiện bởi nhóm MNTV: Huỳnh Đức Nhân, Nguyễn Thiện Minh, Nguyễn Lưu Khánh Trình, Lê Công Vinh
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://colab.research.google.com/drive/1H6O0cE0q_EYJlBak-Nht_oQqTRyRVR_b?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Mở Google Colab
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.kaggle.com/datasets/adilshamim8/student-depression-dataset/data" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Xem Dataset
            </a>
          </Button>
        </div>
      </section>

      {/* Section 1: Dataset Overview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Tổng quan dữ liệu</h2>
        
        <Card className="max-w-4xl mx-auto border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              Student Depression Dataset
            </CardTitle>
            <CardDescription>Dữ liệu khảo sát về trầm cảm và các yếu tố ảnh hưởng ở sinh viên</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Thông tin thống kê:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Tổng số mẫu:</strong> 27,901 sinh viên.</li>
                  <li><strong>Số lượng đặc trưng:</strong> 18 cột (Numeric & Categorical).</li>
                  <li><strong>Mục tiêu (Target):</strong> Depression (Có/Không).</li>
                  <li><strong>Nguồn dữ liệu:</strong> Kaggle.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Features quan trọng:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li><strong>Học tập:</strong> CGPA, Academic Pressure, Study Satisfaction.</li>
                  <li><strong>Sức khỏe:</strong> Sleep Duration, Dietary Habits.</li>
                  <li><strong>Tâm lý & Xã hội:</strong> Financial Stress, Family History of Mental Illness.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Quality Check */}
      <section className="container mx-auto px-4 py-12 bg-slate-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Kiểm tra chất lượng dữ liệu</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Missing Values */}
          <Card className="border-l-4 border-l-emerald-500 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Phân tích Missing Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700">Dữ liệu sạch hoàn toàn (Clean Data).</p>
              <div className="bg-slate-900 rounded-md p-4 overflow-x-auto shadow-inner">
                <code className="text-xs text-green-400 font-mono block">
                  data.isnull().sum() &rarr; All 0 (0.0%)
                </code>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-100">
                <Info className="w-4 h-4" />
                <span>Không cần Imputation. Dữ liệu đầy đủ 100%.</span>
              </div>
            </CardContent>
          </Card>
          {/* Duplicates */}
          <Card className="border-l-4 border-l-blue-500 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-600" />
                Kiểm tra trùng lặp (Duplicates)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700">Đảm bảo tính toàn vẹn của dữ liệu.</p>
              <div className="flex items-center justify-between bg-white p-4 rounded border mb-4">
                <span className="font-medium text-slate-600">Số dòng trùng lặp:</span>
                <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-200 text-lg px-3 py-1">0</Badge>
              </div>
              <p className="text-sm text-muted-foreground italic">Bộ dữ liệu sẵn sàng cho mô hình hóa.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Descriptive Statistics */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Thống kê mô tả (Descriptive Statistics)</h2>
        
        <Tabs defaultValue="categorical" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="numeric">Biến Định Lượng (Numeric)</TabsTrigger>
                    <TabsTrigger value="categorical">Biến Phân Loại (Categorical)</TabsTrigger>
                </TabsList>
            </div>

            {/* TAB: NUMERIC STATISTICS */}
            <TabsContent value="numeric" className="space-y-12">
                {/* Part 1: Table */}
                <Card className="border-2 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sigma className="w-6 h-6 text-indigo-600" />
                            Tổng hợp thống kê biến định lượng
                        </CardTitle>
                        <CardDescription>Mean, Std, Min, Max và các phân vị (Quartiles)</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-slate-100 hover:bg-slate-100">
                                        <TableHead className="font-bold text-slate-900 w-[180px]">Feature</TableHead>
                                        <TableHead className="font-bold text-right">Mean</TableHead>
                                        <TableHead className="font-bold text-right">Std</TableHead>
                                        <TableHead className="font-bold text-right">Min</TableHead>
                                        <TableHead className="font-bold text-right">25%</TableHead>
                                        <TableHead className="font-bold text-right text-indigo-700">50%</TableHead>
                                        <TableHead className="font-bold text-right">75%</TableHead>
                                        <TableHead className="font-bold text-right">Max</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { name: "Age", mean: "25.82", std: "4.91", min: "18", p25: "21", p50: "25", p75: "30", max: "59" },
                                        { name: "Academic Pressure", mean: "3.14", std: "1.38", min: "0", p25: "2", p50: "3", p75: "4", max: "5" },
                                        { name: "Work Pressure", mean: "0.0004", std: "0.044", min: "0", p25: "0", p50: "0", p75: "0", max: "5" },
                                        { name: "CGPA", mean: "7.66", std: "1.47", min: "0", p25: "6.29", p50: "7.77", p75: "8.92", max: "10" },
                                        { name: "Study Satisfaction", mean: "2.94", std: "1.36", min: "0", p25: "2", p50: "3", p75: "4", max: "5" },
                                        { name: "Job Satisfaction", mean: "0.0007", std: "0.044", min: "0", p25: "0", p50: "0", p75: "0", max: "4" },
                                        { name: "Work/Study Hours", mean: "7.16", std: "3.71", min: "0", p25: "4", p50: "8", p75: "10", max: "12" },
                                    ].map((row, index) => (
                                        <TableRow key={index} className="hover:bg-slate-50">
                                            <TableCell className="font-medium">{row.name}</TableCell>
                                            <TableCell className="text-right">{row.mean}</TableCell>
                                            <TableCell className="text-right text-slate-500">{row.std}</TableCell>
                                            <TableCell className="text-right">{row.min}</TableCell>
                                            <TableCell className="text-right">{row.p25}</TableCell>
                                            <TableCell className="text-right font-bold text-indigo-700">{row.p50}</TableCell>
                                            <TableCell className="text-right">{row.p75}</TableCell>
                                            <TableCell className="text-right">{row.max}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {/* Part 2: Visuals */}
                <div className="grid lg:grid-cols-2 gap-8">
                     <Card className="border-2 border-indigo-100">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-indigo-800">
                                <BarChart3 className="w-5 h-5" /> Distribution Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="rounded-lg overflow-hidden border shadow-sm mb-4">
                                <img src={distributionImg} alt="Distribution" className="w-full h-auto object-cover" />
                             </div>
                             <p className="text-sm text-slate-700">
                                <strong className="text-indigo-700">Nhận xét:</strong> Age tập trung 20-30. Academic Pressure lệch phải. Work Pressure hầu hết là 0.
                             </p>
                        </CardContent>
                     </Card>
                     <Card className="border-2 border-amber-100">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-800">
                                <Microscope className="w-5 h-5" /> Outlier Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="rounded-lg overflow-hidden border shadow-sm mb-4">
                                <img src={boxplotImg} alt="Boxplot" className="w-full h-auto object-cover" />
                             </div>
                             <p className="text-sm text-slate-700">
                                <strong className="text-amber-700">Nhận xét:</strong> Age có 12 outliers, CGPA có 9 outliers. Work Pressure và Job Satisfaction rất lệch.
                             </p>
                        </CardContent>
                     </Card>
                </div>
                
                {/* Conclusion Numeric */}
                <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg border border-indigo-100 flex gap-4 items-start shadow-sm">
                    <div className="p-2 bg-indigo-100 rounded-full mt-1">
                        <LayoutDashboard className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-indigo-900 mb-2">Kết luận về biến Numeric</h4>
                        <p className="text-slate-700 text-sm">
                            Độ phân bố đa dạng. Cần chuẩn hóa (Normalization) và xử lý ngoại lệ cho các biến như Work/Study Hours, Academic Pressure, CGPA để tối ưu hóa Bayesian Network.
                        </p>
                    </div>
                </div>
            </TabsContent>

            {/* TAB: CATEGORICAL STATISTICS */}
            <TabsContent value="categorical" className="space-y-8">
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* 1. Demographics */}
                    <Card className="border-2 border-sky-100 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-sky-700">
                                <Users className="w-5 h-5" /> Nhân khẩu học (Demographics)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Gender */}
                            <div>
                                <div className="flex justify-between text-sm mb-1 font-medium">
                                    <span>Gender Distribution</span>
                                    <span className="text-muted-foreground">Cân bằng</span>
                                </div>
                                <div className="flex h-5 w-full rounded-full overflow-hidden border">
                                    <div className="bg-sky-500 flex items-center justify-center text-[10px] text-white font-bold" style={{width: '56%'}}>Male (56%)</div>
                                    <div className="bg-pink-400 flex items-center justify-center text-[10px] text-white font-bold" style={{width: '44%'}}>Female (44%)</div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Male = 15547, Female = 12354 &rarr; Không thiên lệch lớn.</p>
                            </div>

                            {/* Profession */}
                            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border">
                                <Briefcase className="w-5 h-5 text-slate-500 mt-1" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Profession (Nghề nghiệp)</h4>
                                    <div className="text-sm text-slate-600">
                                        Chủ yếu là <Badge variant="outline">Student (27,870)</Badge>. Các nghề khác rất ít mẫu.
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 italic">
                                        &rarr; Biến này ít ảnh hưởng phân loại do tính đồng nhất quá cao.
                                    </p>
                                </div>
                            </div>

                            {/* City & Degree */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-50 rounded border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-4 h-4 text-slate-500" />
                                        <span className="font-bold text-sm">City</span>
                                    </div>
                                    <p className="text-xs text-slate-600">
                                        <strong>52 giá trị.</strong><br/>
                                        Top: Kalyan (1570), Srinagar (1372), Hyderabad (1340).
                                    </p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded border">
                                    <div className="flex items-center gap-2 mb-2">
                                        <GraduationCap className="w-4 h-4 text-slate-500" />
                                        <span className="font-bold text-sm">Degree</span>
                                    </div>
                                    <p className="text-xs text-slate-600">
                                        <strong>28 giá trị.</strong><br/>
                                        Top: Class 12, B.Ed, B.Com, B.Arch.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 2. Lifestyle & Habits */}
                    <Card className="border-2 border-emerald-100 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-emerald-700">
                                <Moon className="w-5 h-5" /> Lối sống & Thói quen
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             {/* Sleep Duration */}
                             <div>
                                <h4 className="text-sm font-bold text-slate-800 mb-2">Sleep Duration (Giấc ngủ)</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center text-xs">
                                        <span className="w-24 font-medium">&lt; 5 hours</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden mx-2">
                                            <div className="h-full bg-orange-400" style={{width: '30%'}}></div>
                                        </div>
                                        <span className="w-10 text-right">8,310</span>
                                    </div>
                                    <div className="flex items-center text-xs">
                                        <span className="w-24 font-medium">5-6 hours</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden mx-2">
                                            <div className="h-full bg-yellow-400" style={{width: '22%'}}></div>
                                        </div>
                                        <span className="w-10 text-right">6,183</span>
                                    </div>
                                    <div className="flex items-center text-xs">
                                        <span className="w-24 font-medium">7-8 hours</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden mx-2">
                                            <div className="h-full bg-emerald-500" style={{width: '26%'}}></div>
                                        </div>
                                        <span className="w-10 text-right">7,346</span>
                                    </div>
                                    <div className="flex items-center text-xs">
                                        <span className="w-24 font-medium">&gt; 8 hours</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden mx-2">
                                            <div className="h-full bg-blue-400" style={{width: '21%'}}></div>
                                        </div>
                                        <span className="w-10 text-right">6,044</span>
                                    </div>
                                </div>
                             </div>

                             {/* Dietary Habits */}
                             <div className="pt-4 border-t border-dashed">
                                <div className="flex items-center gap-2 mb-3">
                                    <Utensils className="w-4 h-4 text-emerald-600" />
                                    <h4 className="text-sm font-bold text-slate-800">Dietary Habits (Ăn uống)</h4>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <div className="p-2 bg-red-50 rounded border border-red-100">
                                        <div className="text-lg font-bold text-red-600">10,317</div>
                                        <div className="text-[10px] text-red-800 font-medium">Unhealthy</div>
                                    </div>
                                    <div className="p-2 bg-yellow-50 rounded border border-yellow-100">
                                        <div className="text-lg font-bold text-yellow-600">9,921</div>
                                        <div className="text-[10px] text-yellow-800 font-medium">Moderate</div>
                                    </div>
                                    <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                                        <div className="text-lg font-bold text-emerald-600">7,651</div>
                                        <div className="text-[10px] text-emerald-800 font-medium">Healthy</div>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 italic text-center">
                                    Phần lớn sinh viên có thói quen ăn uống chưa lành mạnh.
                                </p>
                             </div>
                        </CardContent>
                    </Card>
                </div>

                {/* 3. Mental Health & Target */}
                <Card className="border-2 border-indigo-100 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-indigo-700">
                            <Brain className="w-5 h-5" /> Sức khỏe tâm thần & Target Variable
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Suicidal Thoughts */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-slate-700">Suicidal Thoughts?</h4>
                                <div className="flex items-center justify-between p-3 bg-slate-50 rounded border">
                                    <div className="space-y-1">
                                        <Badge variant="destructive">Yes: 17,656</Badge>
                                        <div className="text-xs text-muted-foreground">Tỷ lệ: ~63%</div>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <Badge variant="outline">No: 10,245</Badge>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-500 italic">Tỷ lệ "Yes" cao đáng báo động, cần đặc biệt lưu ý.</p>
                            </div>

                            {/* Family History */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-slate-700">Family History</h4>
                                <div className="flex items-center justify-center h-full p-3 bg-slate-50 rounded border relative overflow-hidden">
                                     <div className="absolute inset-0 flex">
                                        <div className="bg-indigo-200 w-1/2 flex items-center justify-center text-xs font-bold text-indigo-900">No (51%)</div>
                                        <div className="bg-indigo-300 w-1/2 flex items-center justify-center text-xs font-bold text-indigo-900">Yes (49%)</div>
                                     </div>
                                </div>
                                <div className="flex justify-between text-[10px] text-slate-500 px-1">
                                    <span>14,398</span>
                                    <span>13,503</span>
                                </div>
                                <p className="text-[10px] text-slate-500 italic">Phân bố cân bằng tốt (~50/50).</p>
                            </div>

                            {/* Depression (Target) */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold text-slate-700">Depression (Target)</h4>
                                <div className="flex gap-2">
                                    <div className="flex-1 p-2 bg-red-100 rounded border border-red-200 text-center">
                                        <div className="text-xl font-bold text-red-600">1</div>
                                        <div className="text-[10px] text-red-800 font-bold">16,336 (58%)</div>
                                    </div>
                                    <div className="flex-1 p-2 bg-green-100 rounded border border-green-200 text-center">
                                        <div className="text-xl font-bold text-green-600">0</div>
                                        <div className="text-[10px] text-green-800 font-bold">11,565 (42%)</div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-500 italic">Dữ liệu Target khá cân bằng, thuận lợi cho việc huấn luyện mô hình.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Conclusion Categorical */}
                <div className="bg-gradient-to-r from-sky-50 to-white p-6 rounded-lg border border-sky-100 flex gap-4 items-start shadow-sm">
                    <div className="p-2 bg-sky-100 rounded-full mt-1">
                        <LayoutDashboard className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-sky-900 mb-2">Kết luận về biến Categorical</h4>
                        <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                            <li>Các biến <strong>Gender, Family History, Depression</strong> phân bố khá cân bằng, rất thuận lợi cho mô hình hóa.</li>
                            <li>Biến <strong>Suicidal Thoughts</strong> có tỷ lệ Yes cao (~63%), dự báo sẽ là một predictor mạnh.</li>
                            <li>Một số biến có nhiều giá trị (City, Degree) hoặc phân bố rất lệch (Profession) &rarr; Cần xem xét <strong>mã hóa hợp lý</strong> (Encoding) hoặc gom nhóm các category nhỏ lại để giảm chiều dữ liệu.</li>
                        </ul>
                    </div>
                </div>

            </TabsContent>
        </Tabs>
      </section>

      {/* Section 4: Feature Selection & Preprocessing */}
      <section className="container mx-auto px-4 py-12 bg-slate-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Tiền xử lý & Lựa chọn đặc trưng</h2>
        
        <div className="space-y-12">
            {/* Quantitative Analysis (MI) */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-2xl font-bold text-indigo-900">Phân tích Mutual Information (MI)</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Code & Table */}
                    <div className="space-y-6">
                        <Card className="bg-slate-900 border-none shadow-lg">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-slate-300 text-sm font-mono flex items-center gap-2">
                                    <Code className="w-4 h-4" /> Python Implementation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <pre className="text-xs text-green-400 font-mono overflow-x-auto p-2">
{`from sklearn.feature_selection import mutual_info_classif
# ... (Factorize categorical features) ...

mi = mutual_info_classif(
    X_cat, y, 
    discrete_features=True, 
    random_state=42
)
mi_series = pd.Series(mi, index=cols).sort_values(desc)`}
                                </pre>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-bold">Kết quả Mutual Information Scores</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-slate-100">
                                            <TableHead>Feature</TableHead>
                                            <TableHead className="text-right">MI Score</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { f: "Suicidal Thoughts", s: 0.154642, high: true },
                                            { f: "Financial Stress", s: 0.068728, high: true },
                                            { f: "Dietary Habits", s: 0.021837, high: false },
                                            { f: "Degree", s: 0.009772, high: false },
                                            { f: "Sleep Duration", s: 0.004962, high: false },
                                            { f: "City", s: 0.003534, high: false },
                                            { f: "Family History", s: 0.001429, high: false },
                                            { f: "Profession", s: 0.000359, high: false },
                                            { f: "Gender", s: 0.000002, high: false },
                                        ].map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell className={row.high ? "font-bold text-indigo-700" : "text-slate-600"}>
                                                    {row.f}
                                                </TableCell>
                                                <TableCell className="text-right font-mono">
                                                    {row.s.toFixed(6)}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Heatmap Image */}
                    <div className="space-y-4">
                        <Card className="overflow-hidden border-2 border-indigo-100 h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <ImageIcon className="w-4 h-4" /> Ma trận nhiệt (Correlation Heatmap)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center bg-slate-50 h-full min-h-[300px] p-0">
                                <img src={heatmapImg} alt="Mutual Information Heatmap" className="w-full h-full object-contain" />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 text-sm text-indigo-900">
                    <strong>👉 Kết luận:</strong> Điểm số MI xác nhận rằng <code>Suicidal Thoughts</code> và <code>Financial Stress</code> là những yếu tố có thông tin tương hỗ cao nhất với biến mục tiêu <code>Depression</code>. Các biến như Gender, Profession có điểm số cực thấp, ủng hộ quyết định loại bỏ chúng ở bước định tính.
                </div>
            </div>

            {/* Qualitative Analysis */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Kept Features */}
                <Card className="border-t-4 border-t-green-500 shadow-md">
                    <CardHeader className="bg-green-50/50 pb-3">
                        <CardTitle className="flex items-center gap-2 text-green-800">
                            <Check className="w-6 h-6 text-green-600" />
                            Phần Giữ lại (Selected)
                        </CardTitle>
                        <CardDescription>Các đặc trưng nguyên nhân trực tiếp/gián tiếp dẫn đến trầm cảm</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <ul className="space-y-3">
                            {[
                                { name: "Work/Study Hours", reason: "Thời gian học tập/làm việc" },
                                { name: "Financial Stress", reason: "Căng thẳng tài chính" },
                                { name: "Academic Pressure", reason: "Áp lực học tập" },
                                { name: "CGPA", reason: "Điểm trung bình tích lũy" },
                                { name: "Study Satisfaction", reason: "Mức độ thỏa mãn học tập" },
                                { name: "Have you ever had suicidal thoughts ?", reason: "Suy nghĩ tự tử (Strong Predictor)" },
                                { name: "Depression", reason: "Target Variable (Biến mục tiêu)" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 p-2 rounded hover:bg-green-50 transition-colors">
                                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none shrink-0">
                                        <Check className="w-3 h-3 mr-1" /> Kept
                                    </Badge>
                                    <div>
                                        <span className="font-bold text-slate-800 block">{item.name}</span>
                                        <span className="text-xs text-slate-500">{item.reason}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Dropped Features */}
                <Card className="border-t-4 border-t-red-500 shadow-md">
                    <CardHeader className="bg-red-50/50 pb-3">
                        <CardTitle className="flex items-center gap-2 text-red-800">
                            <Trash2 className="w-6 h-6 text-red-600" />
                            Phần Loại bỏ (Dropped)
                        </CardTitle>
                        <CardDescription>Các biến không liên quan hoặc dữ liệu không hợp lý</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <ul className="space-y-3">
                            {[
                                { name: "id", reason: "Chỉ để định danh, không có ý nghĩa phân loại." },
                                { name: "Age", reason: "Tuổi tác không ảnh hưởng quá lớn đến trầm cảm trong tập này." },
                                { name: "Work Pressure & Job Satisfaction", reason: "Đa phần là sinh viên chưa đi làm -> không ý nghĩa." },
                                { name: "Gender", reason: "Không ảnh hưởng trực tiếp/gián tiếp rõ ràng." },
                                { name: "City", reason: "Chỉ phân định khu vực, quá chung chung." },
                                { name: "Profession", reason: "Chủ yếu là Student, không phân biệt được." },
                                { name: "Sleep Duration", reason: "Là KẾT QUẢ của trầm cảm thay vì nguyên nhân." },
                                { name: "Dietary Habits & Degree", reason: "Ít ảnh hưởng trực tiếp." },
                                { name: "Family History", reason: "Theo phân tích sơ bộ là ít ảnh hưởng." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 p-2 rounded hover:bg-red-50 transition-colors">
                                    <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-200 border-none shrink-0">
                                        <X className="w-3 h-3 mr-1" /> Drop
                                    </Badge>
                                    <div>
                                        <span className="font-bold text-slate-800 block">{item.name}</span>
                                        <span className="text-xs text-slate-500">{item.reason}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Section 5: Library Construction */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Xây dựng thư viện Bayesian Network</h2>
        <Tabs defaultValue="graph" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                    <TabsTrigger value="graph">1. Graph (Lớp cơ sở)</TabsTrigger>
                    <TabsTrigger value="core">2. BayesianNetwork</TabsTrigger>
                    <TabsTrigger value="table">3. BayesianNetworkTable</TabsTrigger>
                </TabsList>
            </div>

            {/* TAB 1: GRAPH */}
            <TabsContent value="graph">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2"><GitBranch className="w-6 h-6 text-primary"/> Lớp Graph</h3>
                        <p className="text-slate-600">
                            Xây dựng lớp cơ sở để quản lý đồ thị có hướng (Directed Graph). Đây là khung xương sống cho Mạng Bayes.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg border space-y-2 text-sm">
                            <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-600"/> <strong>Adjacency List:</strong> Lưu trữ danh sách con (children).</div>
                            <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-600"/> <strong>Back Links:</strong> Lưu trữ danh sách cha (parents) để tính xác suất điều kiện.</div>
                            <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-green-600"/> <strong>Topological Sort:</strong> Sắp xếp thứ tự các node phục vụ cho quá trình suy luận (Inference).</div>
                        </div>
                    </div>
                    <Card className="bg-slate-900 border-none">
                        <CardContent className="p-4 max-h-[400px] overflow-y-auto">
                            <pre className="text-xs text-green-400 font-mono">
{`class Graph:
    def __init__(self):
        self.adj = {}   # node -> children
        self.back = {}  # node -> parents

    def add_edge(self, u, v):
        """Thêm cạnh có hướng u -> v"""
        self.adj[u].append(v)
        self.back[v].append(u)

    def topological_sort(self):
        """Sắp xếp topo dùng DFS"""
        visited, stack = set(), []
        def dfs(u):
            if u in visited: return
            visited.add(u)
            for v in self.adj.get(u, []):
                dfs(v)
            stack.append(u)
        # ... logic duyệt qua tất cả node ...
        return stack[::-1]`}
                            </pre>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            {/* TAB 2: BAYESIAN NETWORK */}
            <TabsContent value="core">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2"><Network className="w-6 h-6 text-indigo-600"/> Lớp BayesianNetwork</h3>
                        <p className="text-slate-600">
                            Mở rộng từ lớp Graph để tích hợp các thành phần xác suất.
                        </p>
                        <ul className="space-y-3">
                            <li className="bg-indigo-50 p-3 rounded-md">
                                <strong className="text-indigo-800">CPT (Conditional Probability Table):</strong> 
                                <p className="text-sm text-slate-600 mt-1">Lưu trữ xác suất của node phụ thuộc vào các node cha (Parents).</p>
                            </li>
                            <li className="bg-indigo-50 p-3 rounded-md">
                                <strong className="text-indigo-800">Probability & Joint Probability:</strong> 
                                <p className="text-sm text-slate-600 mt-1">Tính P(X|Parents) và P(X1, X2, ... Xn) cho toàn bộ mạng.</p>
                            </li>
                            <li className="bg-indigo-50 p-3 rounded-md">
                                <strong className="text-indigo-800">Inference (Suy luận):</strong> 
                                <p className="text-sm text-slate-600 mt-1">Hỗ trợ <code>query</code> (chính xác) và <code>approximate_query</code> (lấy mẫu Monte Carlo).</p>
                            </li>
                        </ul>
                    </div>
                    <Card className="bg-slate-900 border-none">
                        <CardContent className="p-4 max-h-[400px] overflow-y-auto">
                            <pre className="text-xs text-blue-400 font-mono">
{`class BayesianNetwork(Graph):
    def __init__(self):
        super().__init__()
        self.cpt = {}      # {node: {parent_vals: {val: prob}}}
        self.domains = {}  # {node: [values]}

    def probability(self, node, value, assignment):
        """P(node=value | parents)"""
        parents = self.get_parents(node)
        p_vals = tuple(assignment[p] for p in parents)
        return self.cpt[node][p_vals][value]

    def approximate_query(self, Q, evidence, N=1000):
        """Monte Carlo Sampling"""
        dist = {v: 0.0 for v in self.domains[Q]}
        nodes = self.topological_sort()
        for _ in range(N):
            sample = {}
            # Generate sample based on CPT logic...
            # Weight sample based on evidence...
            dist[sample[Q]] += weight
        return normalize(dist)`}
                            </pre>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>

            {/* TAB 3: TABLE WRAPPER */}
            <TabsContent value="table">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold flex items-center gap-2"><Database className="w-6 h-6 text-teal-600"/> Lớp BayesianNetworkTable</h3>
                        <p className="text-slate-600">
                            Cầu nối giữa lý thuyết Mạng Bayes và dữ liệu thực tế (Pandas DataFrame).
                        </p>
                        <div className="space-y-4 text-sm">
                            <div className="border-l-4 border-teal-500 pl-4 py-2 bg-slate-50">
                                <strong>Parameter Learning (Học tham số):</strong> Sử dụng phương pháp <code>MLE</code> (Maximum Likelihood Estimation) để tính toán CPT từ dữ liệu đếm được. Hỗ trợ <code>Smoothing</code> để tránh lỗi xác suất bằng 0.
                            </div>
                            <div className="border-l-4 border-teal-500 pl-4 py-2 bg-slate-50">
                                <strong>Prediction & Evaluation:</strong> Tự động dự đoán nhãn cho tập Test và tính toán độ chính xác (Accuracy).
                            </div>
                            <div className="border-l-4 border-teal-500 pl-4 py-2 bg-slate-50">
                                <strong>Data Discretization:</strong> Tích hợp sẵn hàm `discretize_column` để chuyển đổi dữ liệu liên tục sang rời rạc.
                            </div>
                        </div>
                    </div>
                    <Card className="bg-slate-900 border-none">
                        <CardContent className="p-4 max-h-[400px] overflow-y-auto">
                            <pre className="text-xs text-teal-400 font-mono">
{`class BayesianNetworkTable(BayesianNetwork):
    def __init__(self, dataset):
        self.dataset = dataset

    def fit_cpt(self, node, method="MLE", smoothing=0.0):
        """Học CPT từ dữ liệu"""
        parents = self.get_parents(node)
        # 1. Groupby Parents + Node -> Count
        # 2. Normalize to get Probabilities
        # 3. Apply Laplace Smoothing if needed
        
    def predict(self, Q, evidence, method="exact"):
        """Trả về label có xác suất cao nhất"""
        dist = self.query(Q, evidence)
        return max(dist, key=dist.get)

    def evaluate(self, target, test_data):
        """Tính Accuracy trên tập test"""
        # ... logic lặp qua test_data và predict ...
        return accuracy_score(y_true, y_pred)`}
                            </pre>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
      </section>

    <section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Kiểm tra MLE với mô hình Naive Bayes đơn giản
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <ScanSearch className="w-6 h-6 text-primary" />
        Thuật toán MLE – Naive Bayes (3 biến)
      </CardTitle>
      <CardDescription>
        Kiểm thử thuật toán Maximum Likelihood Estimation (MLE) trên mô hình Naive Bayes tối giản,
        chỉ gồm ba biến nguyên nhân: Gender, Suicidal Thoughts và Family History.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* 2 Hình đặt dọc */}
      <div className="space-y-4">
        <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
          <img src={ex_2} alt="Network Visualization" className="w-full h-auto object-contain" />
        </div>

        <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
          <img src={ex_3} alt="CPT Tables" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Kết quả */}
      <div className="flex items-center justify-between bg-blue-50 border border-blue-200 p-4 rounded-md">
        <span className="font-semibold text-blue-800">Accuracy</span>
        <span className="text-2xl font-bold text-blue-700">≈ 80–82%</span>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">
        Vì chỉ có ba biến đầu vào, mô hình thể hiện khả năng phân loại cơ bản.
        Kết quả phản ánh đúng kỳ vọng của thuật toán MLE khi mô hình có ít tham số
        và hoàn toàn không sử dụng prior hay smoothing.
      </p>
    </CardContent>
  </Card>
</section>


<section className="container mx-auto px-4 py-12 bg-slate-50">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Kiểm tra MLE kết hợp Smoothing
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-green-600" />
        MLE với Laplace Smoothing
      </CardTitle>
      <CardDescription>
        Thử nghiệm MLE với hệ số smoothing lớn để khắc phục zero–probability
        và làm phân phối trở nên ổn định hơn.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* Hình */}
      <div className="space-y-4">
        <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
          <img src={ex_4} alt="Network Visualization Smoothing" className="w-full h-auto object-contain" />
        </div>

        <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
          <img src={ex_5} alt="CPT Smoothing" className="w-full h-auto object-contain" />
        </div>
      </div>

      <div className="flex items-center justify-between bg-green-50 border border-green-200 p-4 rounded-md">
        <span className="font-semibold text-green-800">Accuracy</span>
        <span className="text-2xl font-bold text-green-700">≈ 80–82%</span>
      </div>

      <p className="text-sm text-slate-700">
        Smoothing giúp các xác suất không bị 0 ở những trường hợp hiếm gặp.
        Tuy nhiên vì cấu trúc Naive Bayes đơn giản, smoothing lớn có thể khiến phân phối
        bị quá phẳng, dẫn đến độ chính xác không tăng mà chỉ ổn định hơn.
      </p>
    </CardContent>
  </Card>
</section>


<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Thuật toán MAP với Bias
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Layers className="w-6 h-6 text-purple-600" />
        MAP Inference với Prior Bias
      </CardTitle>
      <CardDescription>
        Kiểm thử thuật toán MAP với bảng bias lớn cho biến Family History.
        Bias đóng vai trò giống như prior mạnh, định hướng xác suất của CPT.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* Hình */}
      <div className="space-y-4">
        <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
          <img src={ex_6} alt="Network Visualization Bias" className="w-full h-auto object-contain" />
        </div>

        <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
          <img src={ex_7} alt="CPT Bias" className="w-full h-auto object-contain" />
        </div>
      </div>

      <div className="flex items-center justify-between bg-purple-50 border border-purple-200 p-4 rounded-md">
        <span className="font-semibold text-purple-800">Accuracy</span>
        <span className="text-2xl font-bold text-purple-700">≈ 82–84%</span>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">
        Bias được đưa vào như một prior cực mạnh giúp mô hình điều chỉnh xác suất
        theo kiến thức chuyên gia. MAP lúc này không chỉ dựa vào dữ liệu mà còn
        kết hợp thông tin trước đó, làm thay đổi đáng kể các bảng CPT.
      </p>
    </CardContent>
  </Card>
</section>


<section className="container mx-auto px-4 py-12 bg-slate-50">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Kiểm tra Bayesian Network và so sánh suy luận Log vs Exact
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Activity className="w-6 h-6 text-orange-600" />
        So sánh giá trị log–probability và xác suất exact
      </CardTitle>
      <CardDescription>
        Thử nghiệm mô hình Bayesian Network có cấu trúc phức tạp hơn và kiểm tra kết quả
        dự đoán thu được bằng hai phương pháp: Log-probability và Exact Inference.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* 1 hình */}
      <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
        <img src={ex_8} alt="Complex Model Structure" className="w-full h-auto object-contain" />
      </div>

      <div className="bg-orange-50 border border-orange-200 p-4 rounded-md space-y-1">
        <p className="font-semibold text-orange-800">Đầu ra của mô hình:</p>
        <p className="text-orange-700 text-sm">• Log-probability: Yes cao hơn No</p>
        <p className="text-orange-700 text-sm">• Exact probability: Yes ≈ 0.704, No ≈ 0.296</p>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">
        Phương pháp log giữ lại độ ổn định số khi xác suất nhỏ, trong khi exact
        cung cấp phân phối xác suất chuẩn hóa. Cả hai phương pháp nhất quán
        khi cùng dự đoán Depression = Yes cao hơn No với cùng input.
      </p>
    </CardContent>
  </Card>
</section>


<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Kiểm tra thuật toán Approximate Inference
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <ChartLine className="w-6 h-6 text-indigo-600" />
        So sánh Approximate vs Exact
      </CardTitle>
      <CardDescription>
        Kiểm tra chất lượng xấp xỉ khi số lượng mẫu N thay đổi, với mục tiêu là dự đoán
        xác suất Depression = "Yes".
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* Hình biểu đồ */}
      <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
        <img src={ex_9} alt="Approximate vs Exact" className="w-full h-auto object-contain" />
      </div>

      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-md">
        <p className="text-indigo-800 text-sm">
          Xác suất chính xác (Exact) ≈ 0.7042.  
          Khi N tăng từ 1 → 50,000, kết quả Approximate hội tụ dần về giá trị exact,
          đúng như kỳ vọng của Monte Carlo Sampling.
        </p>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">
        Thuật toán approximate hoạt động không ổn định ở N thấp
        (xác suất dao động mạnh từ 0 → 1),
        nhưng càng tăng số mẫu thì sai số càng giảm và hội tụ nhanh về giá trị exact.
      </p>
    </CardContent>
  </Card>
</section>
    

        {/* Section: Naive Bayes Full Model */}
<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Mô hình 1 – Naive Bayes (Full Features)
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <BrainCircuit className="w-6 h-6 text-blue-600" />
        Naive Bayes với toàn bộ các biến
      </CardTitle>
      <CardDescription>
        Mô hình Naive Bayes được áp dụng lên toàn bộ 18 đặc trưng sau khi rời rạc hóa.
        Đây là mô hình đơn giản, tính toán nhanh và đạt độ chính xác cao nhất trong ba mô hình.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* Placeholder for image */}
      <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
        <img src={ex_10} alt="Naive Bayes Model" className="w-full h-auto object-contain" />
      </div>

      {/* Accuracy */}
      <div className="flex items-center justify-between bg-blue-50 border border-blue-200 p-4 rounded-md">
        <span className="font-semibold text-blue-800">Accuracy</span>
        <span className="text-2xl font-bold text-blue-700">85.02%</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700 leading-relaxed">
        Nhờ giả định độc lập có điều kiện giữa các biến, Naive Bayes hoạt động rất hiệu quả với dữ liệu rời rạc.
        Mô hình học nhanh, dễ mở rộng và cho kết quả dẫn đầu trong bộ ba mô hình.
        Đây là baseline mạnh cho các bài toán phân loại dạng khảo sát.
      </p>
    </CardContent>
  </Card>
</section>


{/* Section: Simple Bayesian Network */}
<section className="container mx-auto px-4 py-12 bg-slate-50">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Mô hình 2 – Bayesian Network (Đơn giản)
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Network className="w-6 h-6 text-green-600" />
        Bayesian Network đơn giản
      </CardTitle>
      <CardDescription>
        Cấu trúc mạng tối giản, ít cạnh, chạy nhanh và dễ huấn luyện.
        Độ chính xác nằm ở mức khá nhưng không vượt qua được Naive Bayes.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* Placeholder for image */}
      <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
        <img src={ex_11} alt="Simple Bayesian Network" className="w-full h-auto object-contain" />
      </div>

      {/* Accuracy */}
      <div className="flex items-center justify-between bg-green-50 border border-green-200 p-4 rounded-md">
        <span className="font-semibold text-green-800">Accuracy</span>
        <span className="text-2xl font-bold text-green-700">80.97%</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700">
        Mô hình sử dụng một cấu trúc mạng Bayes tối giản nhằm giữ tính giải thích cao.
        Mặc dù hiệu suất tốt, cấu trúc đơn giản hạn chế khả năng học các quan hệ phức tạp.
      </p>
    </CardContent>
  </Card>
</section>


{/* Section: Complex Bayesian Network */}
<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-8 text-center text-primary">
    Mô hình 3 – Bayesian Network (Phức tạp)
  </h2>

  <Card className="max-w-4xl mx-auto border-2">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <GitFork className="w-6 h-6 text-purple-600" />
        Bayesian Network phức tạp
      </CardTitle>
      <CardDescription>
        Cấu trúc mạng có nhiều cạnh, mô tả nhiều mối quan hệ phụ thuộc hơn.
        Tuy nhiên mức độ phức tạp không giúp tăng độ chính xác như mong đợi.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">

      {/* Placeholder for image */}
      <div className="rounded-lg border bg-slate-100 overflow-hidden flex items-center justify-center">
        <img src={ex_12} alt="Complex Bayesian Network" className="w-full h-auto object-contain" />
      </div>

      {/* Accuracy */}
      <div className="flex items-center justify-between bg-purple-50 border border-purple-200 p-4 rounded-md">
        <span className="font-semibold text-purple-800">Accuracy</span>
        <span className="text-2xl font-bold text-purple-700">82.87%</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-700">
        Mạng Bayes phức tạp khắc phục hạn chế về cấu trúc của mô hình đơn giản,
        nhưng việc thêm nhiều cạnh dẫn đến tăng nguy cơ overfitting.
        Điều này giải thích vì sao độ chính xác vẫn không vượt qua được Naive Bayes.
      </p>
    </CardContent>
  </Card>
</section>

      {/* Section 7: Key Findings & Conclusion */}
      <section className="container mx-auto px-4 py-12 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Kết luận & Đánh giá</h2>
        <Card className="max-w-4xl mx-auto border-2 shadow-md">
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                        <CheckCircle2 className="w-5 h-5" /> Kết quả đạt được
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                        <li>Xây dựng thành công thư viện <strong>Bayesian Network from scratch</strong> hỗ trợ đầy đủ các tính năng cơ bản và nâng cao.</li>
                        <li>Độ chính xác cao nhất đạt <strong>83.64%</strong> với phương pháp MAP và Bias Table.</li>
                        <li>Chứng minh được hiệu quả của việc kết hợp kiến thức chuyên gia (Expert Knowledge) vào mô hình học máy.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-700">
                        <TrendingUp className="w-5 h-5" /> Insights & Hướng phát triển
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                        <li><strong>Insight:</strong> Cấu trúc mạng (Graph Structure) ảnh hưởng lớn đến độ chính xác hơn là phương pháp suy luận (Exact vs Approximate).</li>
                        <li><strong>Hạn chế:</strong> Việc rời rạc hóa dữ liệu làm mất mát thông tin chi tiết của các biến liên tục.</li>
                        <li><strong>Cải tiến:</strong> Áp dụng thuật toán học cấu trúc (Structure Learning) tự động như <strong>Hill Climbing</strong> hoặc <strong>K2</strong>.</li>
                    </ul>
                </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Extension;