import { Users, Briefcase, Clock, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Alumni Mentors", color: "text-primary" },
  { icon: Award, value: "3,200+", label: "Students Mentored", color: "text-violet" },
  { icon: Briefcase, value: "2,800+", label: "Placements Achieved", color: "text-teal" },
  { icon: Clock, value: "15,000+", label: "Mentorship Hours", color: "text-primary" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground tracking-tight">
            Numbers that speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-navy-foreground/5 backdrop-blur-sm border border-navy-foreground/10 p-8 text-center animate-count-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
              <p className="text-3xl md:text-4xl font-extrabold text-navy-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-navy-foreground/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
