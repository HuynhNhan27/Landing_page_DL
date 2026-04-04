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
{`ML251/
│── data/                       
    │── tên_data
        │── raw_data/
        │── features/
        │── model_result/
│── modules/
│── notebooks/
│── docs/
|── report/
│── README.md
│── requirements.txt`}
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
{`git clone https://github.com/HuynhNhan27/BTL_ML_251.git
cd BTL_ML_251

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
