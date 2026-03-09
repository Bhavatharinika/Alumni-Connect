import DashboardLayout from "@/components/DashboardLayout";
import { LayoutDashboard, User, Users, Calendar, Briefcase, FileText, Sparkles } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import ForYou from "./ForYou";

const navItems = [
  { label: "Dashboard", href: "/student", icon: LayoutDashboard },
  { label: "For You", href: "/student/for-you", icon: Sparkles },
  { label: "My Mentor", href: "/student/mentor", icon: User },
  { label: "Sessions", href: "/student/sessions", icon: Calendar },
  { label: "Job Opportunities", href: "/student/jobs", icon: Briefcase },
  { label: "My Applications", href: "/student/applications", icon: FileText },
  { label: "Profile", href: "/student/profile", icon: Users },
];

const DashboardOverview = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Welcome back, Student 👋</h1>
      <p className="text-muted-foreground mt-1">Here's an overview of your mentorship journey.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Assigned Mentor", value: "Dr. Ankit Raj", sub: "SDE Lead, Google", icon: User, accent: "bg-primary/10 text-primary" },
        { label: "Next Session", value: "Mar 12, 3 PM", sub: "Career Planning", icon: Calendar, accent: "bg-violet/10 text-violet" },
        { label: "Skills Progress", value: "78%", sub: "12 of 15 milestones", icon: Sparkles, accent: "bg-teal/10 text-teal" },
        { label: "Open Opportunities", value: "14", sub: "5 new this week", icon: Briefcase, accent: "bg-primary/10 text-primary" },
      ].map((card) => (
        <div key={card.label} className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{card.label}</p>
            <div className={`h-8 w-8 rounded-lg ${card.accent} flex items-center justify-center`}>
              <card.icon className="h-4 w-4" />
            </div>
          </div>
          <p className="text-xl font-bold text-foreground">{card.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>
        </div>
      ))}
    </div>

    <div className="glass-card-elevated rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {[
          { text: "Mentorship session completed with Dr. Ankit Raj", time: "2 hours ago", dot: "bg-teal" },
          { text: "Applied to Frontend Developer role at Flipkart", time: "Yesterday", dot: "bg-primary" },
          { text: "Skill assessment: React.js — Advanced", time: "3 days ago", dot: "bg-violet" },
          { text: "New job opportunity posted: Backend Engineer at Razorpay", time: "1 week ago", dot: "bg-primary" },
        ].map((activity, i) => (
          <div key={i} className="flex items-start gap-3 pb-4 border-b border-border/50 last:border-0 last:pb-0">
            <div className={`h-2 w-2 rounded-full ${activity.dot} mt-2 shrink-0`} />
            <div>
              <p className="text-sm text-foreground">{activity.text}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-64 glass-card-elevated rounded-2xl">
    <p className="text-muted-foreground">{title} — Coming soon</p>
  </div>
);

const StudentDashboard = () => {
  return (
    <DashboardLayout navItems={navItems} role="Student Portal">
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="for-you" element={<ForYou />} />
        <Route path="mentor" element={<Placeholder title="My Mentor" />} />
        <Route path="sessions" element={<Placeholder title="Sessions" />} />
        <Route path="jobs" element={<Placeholder title="Job Opportunities" />} />
        <Route path="applications" element={<Placeholder title="My Applications" />} />
        <Route path="profile" element={<Placeholder title="Profile" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default StudentDashboard;
