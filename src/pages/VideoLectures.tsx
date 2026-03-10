import { useState } from "react";
import { Search, Play, Clock, Tag, User, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = ["All", "Interview Prep", "Career Guidance", "Coding", "Resume Building", "Industry Insights"];

const lectures = [
  {
    id: 1,
    title: "Cracking the Google Interview",
    alumni: "Dr. Ankit Raj",
    company: "Google",
    category: "Interview Prep",
    duration: "45 min",
    description: "Learn the strategies and patterns that helped me crack interviews at top tech companies.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
    tags: ["DSA", "System Design", "Behavioral"],
    date: "Mar 5, 2026",
  },
  {
    id: 2,
    title: "Building a Career in AI/ML",
    alumni: "Priya Sharma",
    company: "Microsoft",
    category: "Career Guidance",
    duration: "38 min",
    description: "A roadmap from college to becoming an ML engineer at a top product company.",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
    tags: ["AI", "Machine Learning", "Career Path"],
    date: "Feb 28, 2026",
  },
  {
    id: 3,
    title: "React.js Masterclass for Beginners",
    alumni: "Rahul Verma",
    company: "Flipkart",
    category: "Coding",
    duration: "1h 12 min",
    description: "Hands-on React tutorial covering hooks, state management, and building real-world apps.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
    tags: ["React", "JavaScript", "Frontend"],
    date: "Feb 20, 2026",
  },
  {
    id: 4,
    title: "Resume That Gets You Shortlisted",
    alumni: "Sneha Kapoor",
    company: "Amazon",
    category: "Resume Building",
    duration: "28 min",
    description: "Tips on building an ATS-friendly resume that actually gets noticed by recruiters.",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=225&fit=crop",
    tags: ["Resume", "ATS", "Job Search"],
    date: "Feb 15, 2026",
  },
  {
    id: 5,
    title: "Cloud Computing in 2026",
    alumni: "Vikram Patel",
    company: "AWS",
    category: "Industry Insights",
    duration: "52 min",
    description: "Deep dive into the latest cloud trends, serverless architecture, and multi-cloud strategies.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
    tags: ["Cloud", "AWS", "DevOps"],
    date: "Feb 10, 2026",
  },
  {
    id: 6,
    title: "System Design Interview Guide",
    alumni: "Dr. Ankit Raj",
    company: "Google",
    category: "Interview Prep",
    duration: "1h 5 min",
    description: "Learn how to approach system design problems with real examples from FAANG interviews.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
    tags: ["System Design", "Scalability", "Architecture"],
    date: "Jan 30, 2026",
  },
];

const VideoLectures = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = lectures.filter((l) => {
    const matchesSearch = l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.alumni.toLowerCase().includes(search.toLowerCase()) ||
      l.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || l.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Alumni Learning Hub</h1>
        <p className="text-muted-foreground mt-1">Learn from Experienced Alumni — Video lectures, tips, and career insights.</p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search lectures, alumni, or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-11 rounded-xl"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((lecture) => (
          <div key={lecture.id} className="glass-card-elevated rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={lecture.thumbnail}
                alt={lecture.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-navy/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {lecture.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  {lecture.category}
                </span>
                <span className="text-xs text-muted-foreground">{lecture.date}</span>
              </div>

              <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {lecture.title}
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-2">{lecture.description}</p>

              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full gradient-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                  {lecture.alumni.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{lecture.alumni}</p>
                  <p className="text-[11px] text-muted-foreground">{lecture.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {lecture.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="w-full rounded-xl" size="sm">
                <Play className="h-3.5 w-3.5" /> Watch Video
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 glass-card-elevated rounded-2xl">
          <Filter className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No lectures found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default VideoLectures;
