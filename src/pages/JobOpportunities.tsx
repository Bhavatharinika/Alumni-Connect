import { MapPin, Briefcase, Clock, ChevronRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const jobs = [
  { title: "Frontend Developer", company: "Google", location: "Bangalore", type: "Full-time", eligibility: "CSE/IT, 2026", posted: "2 days ago", description: "Build responsive web applications using React and TypeScript." },
  { title: "Backend Engineer", company: "Razorpay", location: "Bangalore", type: "Full-time", eligibility: "CSE, 2026", posted: "5 days ago", description: "Design and implement scalable APIs and microservices." },
  { title: "Data Analyst Intern", company: "Flipkart", location: "Mumbai", type: "Internship", eligibility: "All branches, 2027", posted: "1 week ago", description: "Analyze user behavior data and create actionable insights." },
  { title: "Product Manager", company: "Microsoft", location: "Hyderabad", type: "Full-time", eligibility: "MBA/CSE, 2026", posted: "3 days ago", description: "Lead product strategy and roadmap for cloud services." },
  { title: "ML Engineer", company: "Amazon", location: "Remote", type: "Full-time", eligibility: "CSE/AI, 2026", posted: "1 day ago", description: "Build and deploy ML models for recommendation systems." },
  { title: "DevOps Intern", company: "Atlassian", location: "Bangalore", type: "Internship", eligibility: "CSE/IT, 2027", posted: "4 days ago", description: "Automate CI/CD pipelines and infrastructure management." },
];

const JobOpportunities = () => {
  const [search, setSearch] = useState("");
  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-8 pb-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Job Opportunities</h1>
            <p className="text-muted-foreground mt-1">Exclusive openings from alumni networks.</p>
          </div>
          <Link to="/student">
            <Button variant="outline" size="sm">← Back to Dashboard</Button>
          </Link>
        </div>

        {/* Search / filter */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10 h-11 rounded-xl"
              placeholder="Search by title, company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="lg" className="rounded-xl">
            <Filter className="h-4 w-4 mr-2" /> Filters
          </Button>
        </div>

        {/* Job cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((job, i) => (
            <div key={i} className="stat-card group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-sm text-primary font-medium">{job.company}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${job.type === 'Internship' ? 'bg-violet/10 text-violet' : 'bg-teal/10 text-teal'}`}>
                  {job.type}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{job.description}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.eligibility}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.posted}</span>
              </div>

              <div className="flex items-center justify-between">
                <Button size="sm">Apply Now</Button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
