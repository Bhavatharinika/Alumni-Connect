import { Star } from "lucide-react";

const stories = [
  {
    name: "Priya Sharma",
    role: "SDE at Google",
    batch: "Batch of 2020",
    quote: "The mentorship I received through AlumniConnect was instrumental in landing my dream role. My mentor guided me through every step of the interview process.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Product Manager at Microsoft",
    batch: "Batch of 2019",
    quote: "As an alumni mentor, I find immense satisfaction in helping students navigate their career paths. This platform makes it incredibly easy.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Data Scientist at Amazon",
    batch: "Batch of 2021",
    quote: "From resume reviews to mock interviews, my mentor covered everything. I went from confused to confident in just three months.",
    rating: 5,
  },
];

const StoriesSection = () => {
  return (
    <section id="stories" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Success Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Hear from our community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={story.name}
              className="stat-card animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: story.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{story.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {story.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{story.name}</p>
                  <p className="text-xs text-muted-foreground">{story.role} · {story.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
