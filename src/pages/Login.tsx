import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ribbonLeft from "@/assets/ribbon-left.png";
import ribbonRight from "@/assets/ribbon-right.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden flex items-center justify-center">
      {/* 3D Ribbon Decorations */}
      <img 
        src={ribbonLeft} 
        alt="" 
        className="absolute left-0 top-1/4 w-64 h-96 object-contain opacity-80 animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <img 
        src={ribbonRight} 
        alt="" 
        className="absolute right-0 bottom-1/4 w-64 h-96 object-contain opacity-80 animate-pulse"
        style={{ animationDuration: '4s', animationDelay: '2s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-glass bg-glass backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-foreground tracking-wider">BYTE BANDITS</span>
          </div>
        </div>

        {/* Welcome Back Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            WELCOME BACK
          </h1>
        </div>

        {/* Login Form */}
        <div className="space-y-6 mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="USERNAME"
              className="w-full px-6 py-4 bg-glass backdrop-blur-md border border-glass rounded-2xl text-foreground placeholder:text-muted-foreground text-center font-medium tracking-wider focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="relative">
            <Input
              type="password"
              placeholder="PASSWORD"
              className="w-full px-6 py-4 bg-glass backdrop-blur-md border border-glass rounded-2xl text-foreground placeholder:text-muted-foreground text-center font-medium tracking-wider focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Login Button */}
        <div className="flex justify-center mb-12">
          <Button className="glow-button w-16 h-16 rounded-full p-0 relative">
            <ArrowRight className="w-6 h-6 text-foreground relative z-10" />
          </Button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-foreground font-medium">
            DON'T HAVE AN ACCOUNT?{" "}
            <Link 
              to="/signup" 
              className="gradient-text font-bold hover:opacity-80 transition-opacity duration-300"
            >
              SIGN UP
            </Link>
          </p>
        </div>

        {/* 3D Platform Effect */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-8 bg-gradient-primary opacity-20 blur-xl rounded-full"></div>
      </div>
    </div>
  );
};

export default Login;