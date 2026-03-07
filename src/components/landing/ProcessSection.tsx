const steps = [
  {
    step: "01",
    title: "Sign Up & Create Profile",
    description: "Students and alumni register with their institutional credentials and build their profiles.",
  },
  {
    step: "02",
    title: "Get Matched with a Mentor",
    description: "Our smart matching system pairs students with alumni based on career goals and expertise.",
  },
  {
    step: "03",
    title: "Schedule Mentorship Sessions",
    description: "Book 1-on-1 sessions, set goals, and track your progress through the dashboard.",
  },
  {
    step: "04",
    title: "Land Your Dream Role",
    description: "Access exclusive job postings, get referrals, and kickstart your career journey.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Your path to mentorship in 4 steps
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-6xl font-black text-primary/10 mb-4">{step.step}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
