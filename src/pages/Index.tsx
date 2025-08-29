import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ribbonLeft from "@/assets/ribbon-left.png";
import ribbonRight from "@/assets/ribbon-right.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden flex items-center justify-center">
      {/* 3D Ribbon Decorations */}
      <img 
        src={ribbonLeft} 
        alt="" 
        className="absolute left-0 top-1/4 w-64 h-96 object-contain opacity-60 animate-pulse"
        style={{ animationDuration: '5s' }}
      />
      <img 
        src={ribbonRight} 
        alt="" 
        className="absolute right-0 bottom-1/4 w-64 h-96 object-contain opacity-60 animate-pulse"
        style={{ animationDuration: '5s', animationDelay: '2.5s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-glass bg-glass backdrop-blur-sm mb-12">
            <span className="text-lg font-bold text-foreground tracking-wider">BYTE BANDITS</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
            ENTER THE
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold gradient-text mb-8 tracking-tight">
            DIGITAL REALM
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join the elite community of digital pioneers. Access exclusive content, 
            connect with like-minded innovators, and unlock your potential.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/login">
            <Button className="glow-button px-12 py-4 text-lg font-bold tracking-wider relative">
              <span className="relative z-10">LOGIN</span>
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button 
              variant="outline" 
              className="px-12 py-4 text-lg font-bold tracking-wider bg-glass backdrop-blur-md border-glass text-foreground hover:bg-gradient-primary hover:text-background transition-all duration-300"
            >
              SIGN UP
            </Button>
          </Link>
        </div>

        {/* 3D Platform Effect */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-12 bg-gradient-primary opacity-20 blur-2xl rounded-full"></div>
      </div>
    </div>
  );
};

export default Index;
