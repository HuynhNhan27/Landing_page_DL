import { Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 ocean-gradient text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/50 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Deep Learning and Its Applications CO3133</h3>
            <p className="text-primary-foreground/80">Học kỳ 252 | Nhóm DL123</p>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/dung-h/DeepLearning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              © 2026 Nhóm DL123. Deep Learning Assignment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
