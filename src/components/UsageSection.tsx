import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderTree, Terminal } from "lucide-react";

export const UsageSection = () => {
  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-2 border-border bg-card">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <FolderTree className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl text-card-foreground">Cấu trúc repo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm text-muted-foreground">
{`Landing_page_DL/
|-- index.html
|-- assignments/          # Cac bai tap lon
|-- assets/               # Tai nguyen dung chung
|-- btl1/                 # Bai tap lon 1
|   |-- notebooks/        # Jupyter notebooks
|   |-- data/             # Du lieu
|   |-- artifacts/        # Ket qua chay
|   |-- reports/          # Bao cao chi tiet
|   \-- demo/            # Demo assets
|-- btl2/                 # Bai tap lon 2
|-- btl3/                 # Bai tap lon 3
|-- docs/                 # Tai lieu dung chung
|-- logs/                 # Nhat ky thuc thi
|-- reports/              # Bao cao BTL
\-- README.md`}
              </pre>
            </CardContent>
          </Card>

          <Card className="border-2 border-border bg-card">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Terminal className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl text-card-foreground">Cách chạy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="mb-4 text-sm text-muted-foreground">Clone repo và cài đặt dependencies:</p>
                <div className="overflow-x-auto rounded-lg bg-muted p-4">
                  <pre className="font-mono text-sm text-muted-foreground">
{`git clone https://github.com/dung-h/DeepLearning.git
cd DeepLearning

# Tao moi truong ao
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
