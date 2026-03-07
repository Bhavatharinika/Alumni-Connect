import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] gradient-hero flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-violet/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-1.5 text-sm text-primary-foreground/70 mb-8 animate-fade-in backdrop-blur-sm">
            <Award className="h-3.5 w-3.5" />
            Trusted by 50+ institutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Connecting Students with Alumni for{" "}
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
              Career Growth
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bridge the gap between academic learning and industry success through personalized mentorship, career guidance, and exclusive placement opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/login?role=student">
              <Button variant="hero" size="xl">
                Student Login
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login?role=alumni">
              <Button variant="hero-outline" size="xl">
                Alumni Login
              </Button>
            </Link>
            <Link to="/login?role=faculty">
              <Button variant="hero-outline" size="xl">
                Faculty Login
              </Button>
            </Link>
          </div>

          {/* Mini stats row */}
          <div className="flex items-center justify-center gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Users, label: "Active Mentors", value: "500+" },
              { icon: Briefcase, label: "Placements", value: "2,800+" },
              { icon: Award, label: "Success Rate", value: "94%" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 text-primary-foreground/50">
                <stat.icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
