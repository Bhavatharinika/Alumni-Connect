import { Users, Target, Briefcase, BookOpen, MessageSquare, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "1-on-1 Mentorship",
    description: "Get paired with alumni mentors who share your career interests and academic background.",
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Receive personalized advice on career paths, skill development, and industry trends.",
  },
  {
    icon: Briefcase,
    title: "Placement Opportunities",
    description: "Access exclusive job openings shared directly by alumni from top companies.",
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description: "Track your progress with structured mentorship sessions and skill assessments.",
  },
  {
    icon: MessageSquare,
    title: "Seamless Communication",
    description: "Schedule sessions, share resources, and stay connected through the platform.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Faculty can monitor student progress and mentorship effectiveness with analytics.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Everything you need for career success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform bridges the gap between students and alumni, creating meaningful mentorship connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="stat-card group cursor-default animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
