import DashboardLayout from "@/components/DashboardLayout";
import { Briefcase, LayoutDashboard, PlusCircle } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const navItems = [
  { label: "Dashboard", href: "/referred/dashboard", icon: LayoutDashboard },
  { label: "Post Job", href: "/referred/dashboard/post-job", icon: PlusCircle },
  { label: "My Posts", href: "/referred/dashboard/my-posts", icon: Briefcase },
];

const ReferredOverview = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Welcome, Referred User 👋</h1>
      <p className="text-muted-foreground mt-1">Post job opportunities to help students get placed.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { label: "Jobs Posted", value: "2", accent: "bg-primary/10 text-primary" },
        { label: "Applications Received", value: "14", accent: "bg-teal/10 text-teal" },
        { label: "Referred By", value: "Dr. Ankit Raj", accent: "bg-violet/10 text-violet" },
      ].map((card) => (
        <div key={card.label} className="stat-card">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{card.label}</p>
          <p className="text-xl font-bold text-foreground">{card.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const ReferredPostJob = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Job Posted!", description: "Your job opportunity is now visible in the For You feed." });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-64 glass-card-elevated rounded-2xl gap-3">
        <Briefcase className="h-10 w-10 text-teal" />
        <p className="text-foreground font-semibold">Job posted successfully!</p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>Post Another</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6">Post a Job Opportunity</h2>
      <form onSubmit={handleSubmit} className="space-y-4 glass-card-elevated rounded-2xl p-6">
        {[
          { label: "Job Title", placeholder: "e.g., Frontend Developer" },
          { label: "Company", placeholder: "e.g., Google" },
          { label: "Location", placeholder: "e.g., Bangalore, India" },
          { label: "Salary / Stipend", placeholder: "e.g., ₹18-25 LPA" },
          { label: "Eligibility", placeholder: "e.g., CSE/IT, 2025 batch" },
        ].map((field) => (
          <div key={field.label} className="space-y-2">
            <label className="text-sm font-medium text-foreground">{field.label}</label>
            <input className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={field.placeholder} required />
          </div>
        ))}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Description</label>
          <textarea className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[120px]" placeholder="Job description..." required />
        </div>
        <Button size="lg" className="w-full" type="submit">Post Job</Button>
      </form>
    </div>
  );
};

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-64 glass-card-elevated rounded-2xl">
    <p className="text-muted-foreground">{title} — Coming soon</p>
  </div>
);

const ReferredDashboard = () => (
  <DashboardLayout navItems={navItems} role="Referred User">
    <Routes>
      <Route index element={<ReferredOverview />} />
      <Route path="post-job" element={<ReferredPostJob />} />
      <Route path="my-posts" element={<Placeholder title="My Posts" />} />
    </Routes>
  </DashboardLayout>
);

export default ReferredDashboard;
