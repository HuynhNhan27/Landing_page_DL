import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderTree, Terminal } from "lucide-react";

export const UsageSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Repo Structure */}
          <Card className="border-2 border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FolderTree className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl text-card-foreground">📂 Repo Structure</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-muted-foreground font-mono">
{`Landing_page_DL/
│── index.html
│── assignments/          # Các bài tập lớn
│── assets/               # Tài nguyên dùng chung
│── btl1/                 # Bài tập lớn 1
│   ├── notebooks/        # Jupyter Notebooks
│   ├── data/             # Dữ liệu
│   ├── artifacts/        # Kết quả chạy
│   ├── reports/          # Báo cáo chi tiết
│   └── demo/             # Demo assets
│── btl2/                 # Bài tập lớn 2 (placeholder)
│── btl3/                 # Bài tập lớn 3 (placeholder)
│── docs/                 # Tài liệu dùng chung
│── logs/                 # Nhật ký thực thi
│── reports/              # Báo cáo BTL
└── README.md`}
              </pre>
            </CardContent>
          </Card>

          {/* Usage Instructions */}
          <Card className="border-2 border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl text-card-foreground">▶️ Usage</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Clone repo và cài đặt dependencies:
                </p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground font-mono">
{`git clone https://github.com/dung-h/DeepLearning.git
cd DeepLearning

# Tạo môi trường ảo
python -m venv venv
source venv/bin/activate

pip install -r requirements.txt`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
