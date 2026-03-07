import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-sm">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">AlumniConnect</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#stories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
          <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact</a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-muted-foreground">Log in</Button>
          </Link>
          <Link to="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
