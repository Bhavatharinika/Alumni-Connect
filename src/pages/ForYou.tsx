import { useState } from "react";
import { MapPin, Briefcase, Clock, User, Search, Filter, ExternalLink, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { LayoutDashboard, Users, Calendar, Star, Briefcase as BriefcaseIcon, User as UserIcon, Sparkles } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "For You", href: "/student/for-you", icon: Sparkles },
  { label: "My Mentor", href: "/student/mentor", icon: UserIcon },
  { label: "Sessions", href: "/student/sessions", icon: Calendar },
  { label: "Job Opportunities", href: "/student/jobs", icon: BriefcaseIcon },
  { label: "Profile", href: "/student/profile", icon: Users },
];

const jobPosts = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore, India",
    eligibility: "CSE/IT, 2025 Batch",
    description: "Join Google's frontend team building next-gen web experiences with React, TypeScript, and cutting-edge tooling. Work on products used by billions.",
    postedBy: "Dr. Ankit Raj",
    postedByRole: "Alumni · SDE Lead, Google",
    postedDate: "2 hours ago",
    logo: "G",
    logoColor: "bg-primary/10 text-primary",
    type: "Full-time",
    salary: "₹18-25 LPA",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Razorpay",
    location: "Bangalore, India",
    eligibility: "CSE/IT/ECE, 2025 Batch",
    description: "Build scalable payment infrastructure powering millions of transactions. Work with Go, Kubernetes, and distributed systems at scale.",
    postedBy: "Priya Sharma",
    postedByRole: "Alumni · Engineering Manager, Razorpay",
    postedDate: "5 hours ago",
    logo: "R",
    logoColor: "bg-violet/10 text-violet",
    type: "Full-time",
    salary: "₹14-20 LPA",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Flipkart",
    location: "Remote",
    eligibility: "CSE/IT/Math, 3rd Year+",
    description: "Work on recommendation systems and ML models that impact shopping experience of 400M+ users. Great learning opportunity with mentorship.",
    postedBy: "Rahul Verma",
    postedByRole: "Alumni · Data Scientist, Flipkart",
    postedDate: "1 day ago",
    logo: "F",
    logoColor: "bg-teal/10 text-teal",
    type: "Internship",
    salary: "₹40K/month",
  },
  {
    id: 4,
    title: "Product Designer",
    company: "Swiggy",
    location: "Hyderabad, India",
    eligibility: "Design/HCI, 2025 Batch",
    description: "Design delightful food ordering experiences for millions. Work closely with product and engineering to ship user-centric features.",
    postedBy: "Meera Nair",
    postedByRole: "Referred by Alumni",
    postedDate: "2 days ago",
    logo: "S",
    logoColor: "bg-primary/10 text-primary",
    type: "Full-time",
    salary: "₹12-18 LPA",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Atlassian",
    location: "Bangalore, India",
    eligibility: "CSE/IT, 2024-2025 Batch",
    description: "Help teams ship faster with world-class CI/CD pipelines and infrastructure. Work with Docker, Terraform, and AWS at enterprise scale.",
    postedBy: "Vikram Patel",
    postedByRole: "Referred by Alumni",
    postedDate: "3 days ago",
    logo: "A",
    logoColor: "bg-violet/10 text-violet",
    type: "Full-time",
    salary: "₹16-22 LPA",
  },
];

const ForYou = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = jobPosts.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">For You ✨</h1>
        <p className="text-muted-foreground mt-1">
          Curated job opportunities from alumni and their network
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs, companies, locations..."
            className="pl-10 h-11 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl shrink-0">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {filteredPosts.map((job) => (
          <div
            key={job.id}
            className="glass-card-elevated rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* Post header - who posted */}
            <div className="flex items-center gap-3 p-5 pb-0">
              <div className={`h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground`}>
                {job.postedBy.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{job.postedBy}</p>
                <p className="text-xs text-muted-foreground">{job.postedByRole} · {job.postedDate}</p>
              </div>
            </div>

            {/* Job content */}
            <div className="p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className={`h-12 w-12 rounded-xl ${job.logoColor} flex items-center justify-center text-lg font-bold shrink-0`}>
                  {job.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-medium text-primary">{job.company}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium flex items-center gap-1">
                  <Briefcase className="h-3 w-3" /> {job.type}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-teal/10 text-teal text-xs font-medium">
                  {job.salary}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground text-xs font-medium flex items-center gap-1">
                  <GraduationCap className="h-3 w-3" /> {job.eligibility}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 px-5 pb-5">
              <Button size="sm" className="flex-1">
                Apply Now <ExternalLink className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 glass-card-elevated rounded-2xl">
          <Briefcase className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No jobs match your search</p>
        </div>
      )}
    </div>
  );
};

export default ForYou;
