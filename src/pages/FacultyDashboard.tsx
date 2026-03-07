import DashboardLayout from "@/components/DashboardLayout";
import { LayoutDashboard, Users, BarChart3, ClipboardList, Settings } from "lucide-react";
import { Routes, Route } from "react-router-dom";

const navItems = [
  { label: "Dashboard", href: "/faculty", icon: LayoutDashboard },
  { label: "Students", href: "/faculty/students", icon: Users },
  { label: "Analytics", href: "/faculty/analytics", icon: BarChart3 },
  { label: "Reviews", href: "/faculty/reviews", icon: ClipboardList },
  { label: "Settings", href: "/faculty/settings", icon: Settings },
];

const students = [
  { name: "Aarav Mehta", mentor: "Dr. Ankit Raj", hours: 24, score: 88, status: "On Track" },
  { name: "Sneha Iyer", mentor: "Priya Sharma", hours: 32, score: 92, status: "Excellent" },
  { name: "Karan Singh", mentor: "Rahul Verma", hours: 8, score: 65, status: "Needs Attention" },
  { name: "Divya Nair", mentor: "Dr. Ankit Raj", hours: 18, score: 79, status: "On Track" },
  { name: "Arjun Rao", mentor: "Priya Sharma", hours: 28, score: 85, status: "On Track" },
];

const FacultyOverview = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Faculty Dashboard</h1>
      <p className="text-muted-foreground mt-1">Monitor mentorship progress and student performance.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Total Mentors", value: "28", change: "+3 this sem" },
        { label: "Students Mentored", value: "156", change: "+12 this month" },
        { label: "Total Hours", value: "1,240", change: "+86 this month" },
        { label: "Placement Rate", value: "89%", change: "+4% vs last year" },
      ].map((card) => (
        <div key={card.label} className="stat-card">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{card.label}</p>
          <p className="text-2xl font-bold text-foreground">{card.value}</p>
          <p className="text-xs text-teal mt-1">{card.change}</p>
        </div>
      ))}
    </div>

    {/* Student performance table */}
    <div className="glass-card-elevated rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <h3 className="text-lg font-semibold text-foreground">Student Performance Overview</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              {["Student", "Mentor", "Hours", "Score", "Status"].map((h) => (
                <th key={h} className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.name} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{s.mentor}</td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">{s.hours}h</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${s.score}%` }} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{s.score}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    s.status === 'Excellent' ? 'bg-teal/10 text-teal' :
                    s.status === 'On Track' ? 'bg-primary/10 text-primary' :
                    'bg-destructive/10 text-destructive'
                  }`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-64 glass-card-elevated rounded-2xl">
    <p className="text-muted-foreground">{title} — Coming soon</p>
  </div>
);

const FacultyDashboard = () => {
  return (
    <DashboardLayout navItems={navItems} role="Faculty Portal">
      <Routes>
        <Route index element={<FacultyOverview />} />
        <Route path="students" element={<Placeholder title="Students" />} />
        <Route path="analytics" element={<Placeholder title="Analytics" />} />
        <Route path="reviews" element={<Placeholder title="Reviews" />} />
        <Route path="settings" element={<Placeholder title="Settings" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default FacultyDashboard;
