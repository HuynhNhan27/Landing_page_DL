import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated ocean background */}
      <div className="absolute inset-0 ocean-gradient opacity-90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        {/* Wave animations */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-50">
          <svg className="absolute bottom-0 w-[200%] h-full animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-ocean-light/30"></path>
          </svg>
          <svg className="absolute bottom-0 w-[200%] h-full animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-ocean-wave/20"></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
            Deep Learning and Its Applications
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary-foreground/90">
            CO3133 – HK252
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80">
            Nhóm DL123
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="https://github.com/dung-h/DeepLearning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub Repository
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="#projects" className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Xem Projects
            </a>
          </Button>
        </div>

        <div className="mt-16 p-6 bg-card/80 backdrop-blur-sm rounded-lg shadow-xl max-w-2xl mx-auto border border-border">
          <p className="text-lg text-card-foreground">
            <span className="font-semibold">Giảng viên:</span> TS. Lê Thành Sách
          </p>
        </div>
      </div>
    </section>
  );
};
