import DashboardLayout from "@/components/DashboardLayout";
import { LayoutDashboard, Users, Calendar, Star, Briefcase, User } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", href: "/alumni", icon: LayoutDashboard },
  { label: "My Profile", href: "/alumni/profile", icon: User },
  { label: "My Mentees", href: "/alumni/mentees", icon: Users },
  { label: "Sessions", href: "/alumni/sessions", icon: Calendar },
  { label: "Reviews", href: "/alumni/reviews", icon: Star },
  { label: "Post Job", href: "/alumni/post-job", icon: Briefcase },
];

const mentees = [
  { name: "Aarav Mehta", branch: "CSE, 3rd Year", status: "Active", progress: 72 },
  { name: "Sneha Iyer", branch: "IT, 4th Year", status: "Active", progress: 85 },
  { name: "Karan Singh", branch: "CSE, 2nd Year", status: "New", progress: 15 },
];

const AlumniOverview = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome, Alumni 👋</h1>
        <p className="text-muted-foreground mt-1">Manage your mentees and mentorship sessions.</p>
      </div>
      <Link to="/alumni/post-job">
        <Button>Post Job Opportunity</Button>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Assigned Mentees", value: "3", icon: Users, accent: "bg-primary/10 text-primary" },
        { label: "Sessions This Month", value: "8", icon: Calendar, accent: "bg-violet/10 text-violet" },
        { label: "Avg. Rating", value: "4.8 ★", icon: Star, accent: "bg-teal/10 text-teal" },
        { label: "Jobs Posted", value: "5", icon: Briefcase, accent: "bg-primary/10 text-primary" },
      ].map((card) => (
        <div key={card.label} className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{card.label}</p>
            <div className={`h-8 w-8 rounded-lg ${card.accent} flex items-center justify-center`}>
              <card.icon className="h-4 w-4" />
            </div>
          </div>
          <p className="text-xl font-bold text-foreground">{card.value}</p>
        </div>
      ))}
    </div>

    {/* Mentees list */}
    <div className="glass-card-elevated rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">My Mentees</h3>
      <div className="space-y-3">
        {mentees.map((m) => (
          <div key={m.name} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                {m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.branch}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 hidden sm:block">
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${m.progress}%` }} />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">{m.progress}% complete</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${m.status === 'Active' ? 'bg-teal/10 text-teal' : 'bg-primary/10 text-primary'}`}>
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PostJobForm = () => (
  <div className="max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold text-foreground mb-6">Post a Job Opportunity</h2>
    <form className="space-y-4 glass-card-elevated rounded-2xl p-6">
      {[
        { label: "Job Title", placeholder: "e.g., Frontend Developer" },
        { label: "Company", placeholder: "e.g., Google" },
        { label: "Location", placeholder: "e.g., Bangalore, India" },
        { label: "Eligibility", placeholder: "e.g., CSE/IT, 2024 batch" },
      ].map((field) => (
        <div key={field.label} className="space-y-2">
          <label className="text-sm font-medium text-foreground">{field.label}</label>
          <input className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={field.placeholder} />
        </div>
      ))}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Description</label>
        <textarea className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[120px]" placeholder="Job description..." />
      </div>
      <Button size="lg" className="w-full">Post Job</Button>
    </form>
  </div>
);

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-64 glass-card-elevated rounded-2xl">
    <p className="text-muted-foreground">{title} — Coming soon</p>
  </div>
);

const AlumniDashboard = () => {
  return (
    <DashboardLayout navItems={navItems} role="Alumni Portal">
      <Routes>
        <Route index element={<AlumniOverview />} />
        <Route path="profile" element={<Placeholder title="My Profile" />} />
        <Route path="mentees" element={<Placeholder title="My Mentees" />} />
        <Route path="sessions" element={<Placeholder title="Sessions" />} />
        <Route path="reviews" element={<Placeholder title="Reviews" />} />
        <Route path="post-job" element={<PostJobForm />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AlumniDashboard;
