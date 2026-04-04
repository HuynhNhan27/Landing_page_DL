import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BTL1Detail from "./pages/BTL1Detail";
import BTL1_Exercise1 from "./pages/BTL1_Exercise1";
import BTL1_Exercise2 from "./pages/BTL1_Exercise2";
import BTL1_Exercise3 from "./pages/BTL1_Exercise3";
import BTL2Detail from "./pages/BTL2Detail";
import BTL2_Exercise1 from "./pages/BTL2_Exercise1";
import BTL2_Exercise2 from "./pages/BTL2_Exercise2";
import BTL2_Exercise3 from "./pages/BTL2_Exercise3";
import BTL3Detail from "./pages/BTL3Detail";
import BTL3_Exercise1 from "./pages/BTL3_Exercise1";
import BTL3_Exercise2 from "./pages/BTL3_Exercise2";
import BTL3_Exercise3 from "./pages/BTL3_Exercise3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* BTL1 Routes */}
          <Route path="/btl1" element={<BTL1Detail />} />
          <Route path="/btl1/exercise1" element={<BTL1_Exercise1 />} />
          <Route path="/btl1/exercise2" element={<BTL1_Exercise2 />} />
          <Route path="/btl1/exercise3" element={<BTL1_Exercise3 />} />

          {/* BTL2 Routes */}
          <Route path="/btl2" element={<BTL2Detail />} />
          <Route path="/btl2/exercise1" element={<BTL2_Exercise1 />} />
          <Route path="/btl2/exercise2" element={<BTL2_Exercise2 />} />
          <Route path="/btl2/exercise3" element={<BTL2_Exercise3 />} />

          {/* BTL3 Routes */}
          <Route path="/btl3" element={<BTL3Detail />} />
          <Route path="/btl3/exercise1" element={<BTL3_Exercise1 />} />
          <Route path="/btl3/exercise2" element={<BTL3_Exercise2 />} />
          <Route path="/btl3/exercise3" element={<BTL3_Exercise3 />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
