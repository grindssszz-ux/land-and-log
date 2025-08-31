import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Quizzes from "./pages/Quizzes";
import AiDoubtSolver from "./pages/AiDoubtSolver";
import Community from "./pages/Community";
import PracticeTests from "./pages/PracticeTests";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const showSidebar = !["/", "/login", "/signup"].includes(location.pathname);

  if (!showSidebar) {
    return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b bg-background/95 backdrop-blur">
            <SidebarTrigger className="ml-4" />
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/ai-doubt-solver" element={<AiDoubtSolver />} />
              <Route path="/community" element={<Community />} />
              <Route path="/practice-tests" element={<PracticeTests />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
