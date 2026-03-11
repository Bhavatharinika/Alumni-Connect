import { MapPin, Briefcase, GraduationCap, Mail, Calendar, Star, Award, BookOpen, Copy, Share2, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const skills = ["React.js", "Node.js", "System Design", "Data Structures", "Machine Learning", "Cloud Architecture"];
const availability = ["Mentoring", "Workshop", "Referral"];
const projects = [
  { name: "Real-time Chat Platform", tech: "React, WebSocket, Redis", year: "2023" },
  { name: "ML-based Resume Screener", tech: "Python, TensorFlow, FastAPI", year: "2022" },
  { name: "E-commerce Microservices", tech: "Go, gRPC, Kubernetes", year: "2021" },
];

const REFERRAL_CODE = "ALUMNI-NC-1023";
const REFERRAL_LINK = "nandha-alumni/ref/ARC1023";

const AlumniProfile = () => {
  const { toast } = useToast();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(REFERRAL_CODE);
    toast({ title: "Copied!", description: "Referral code copied to clipboard." });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/alumni" className="text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-10 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Profile card */}
          <div className="space-y-6">
            <div className="glass-card-elevated rounded-2xl p-6 text-center">
              <div className="h-24 w-24 rounded-2xl gradient-primary flex items-center justify-center text-3xl font-bold text-primary-foreground mx-auto mb-4">
                AR
              </div>
              <h1 className="text-xl font-bold text-foreground">Dr. Ankit Raj</h1>
              <p className="text-sm text-muted-foreground mt-1">Senior Software Engineer</p>
              <p className="text-sm text-primary font-medium">Google</p>

              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Bangalore</span>
                <span className="flex items-center gap-1"><GraduationCap className="h-3 w-3" /> Batch 2018</span>
              </div>

              {/* Availability Badges */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {availability.map((a) => (
                  <Badge key={a} variant="secondary" className="bg-accent/10 text-accent border-0 text-[11px]">
                    {a}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mt-6">
                <Button size="sm" className="flex-1">Connect</Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Mail className="h-3 w-3" /> Message
                </Button>
              </div>

              {/* Resume */}
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="flex-1 rounded-xl text-xs">
                  <FileText className="h-3 w-3" /> View Resume
                </Button>
                <Button size="sm" variant="outline" className="flex-1 rounded-xl text-xs">
                  <Download className="h-3 w-3" /> Download
                </Button>
              </div>
            </div>

            {/* Referral Code Card */}
            <div className="glass-card-elevated rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Share2 className="h-4 w-4 text-primary" /> Your Referral Code
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-secondary rounded-xl px-4 py-3 font-mono text-sm font-bold text-foreground tracking-wider">
                  {REFERRAL_CODE}
                </div>
                <Button size="icon" variant="outline" className="shrink-0 rounded-xl" onClick={copyReferralCode}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Share this code with friends so they can post job opportunities on your behalf.
              </p>
              <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
                Referral link: <span className="text-primary font-medium">{REFERRAL_LINK}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="glass-card-elevated rounded-2xl p-6 space-y-4">
              {[
                { icon: Star, label: "Rating", value: "4.9/5.0" },
                { icon: Calendar, label: "Sessions", value: "48 completed" },
                { icon: Award, label: "Mentees Placed", value: "12 students" },
                { icon: BookOpen, label: "Hours", value: "120+ hours" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mentorship Areas */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Mentorship Areas</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Technical Interview Prep", "System Design", "Career Path Planning", "Resume & Portfolio Review"].map((area) => (
                  <div key={area} className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50">
                    <div className="h-2 w-2 rounded-full bg-teal" />
                    <span className="text-sm text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="glass-card-elevated rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notable Projects</h3>
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.name} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.tech}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;
