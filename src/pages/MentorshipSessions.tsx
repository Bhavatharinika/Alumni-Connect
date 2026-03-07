import { Calendar, Clock, MessageSquare, Video, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcoming = [
  { mentor: "Dr. Ankit Raj", topic: "System Design Basics", date: "Mar 12, 2026", time: "3:00 PM", duration: "45 min", type: "Video Call" },
  { mentor: "Priya Sharma", topic: "Resume Review", date: "Mar 15, 2026", time: "11:00 AM", duration: "30 min", type: "Chat" },
];

const history = [
  { mentor: "Dr. Ankit Raj", topic: "Career Planning", date: "Mar 5, 2026", duration: "50 min", feedback: "Great session, covered career roadmap and short-term goals." },
  { mentor: "Dr. Ankit Raj", topic: "DSA Practice", date: "Feb 28, 2026", duration: "60 min", feedback: "Worked through graph problems. Student showed strong improvement." },
  { mentor: "Priya Sharma", topic: "Mock Interview", date: "Feb 20, 2026", duration: "45 min", feedback: "Excellent performance in behavioral questions. Needs work on system design." },
];

const MentorshipSessions = () => {
  return (
    <div className="min-h-screen bg-background pt-8 pb-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mentorship Sessions</h1>
            <p className="text-muted-foreground mt-1">Book, manage, and review your sessions.</p>
          </div>
          <Link to="/student">
            <Button variant="outline" size="sm">← Back to Dashboard</Button>
          </Link>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Sessions", value: "12", icon: Calendar },
            { label: "Total Hours", value: "9.5h", icon: Clock },
            { label: "This Month", value: "3", icon: MessageSquare },
          ].map((s) => (
            <div key={s.label} className="stat-card flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <div className="glass-card-elevated rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Sessions</h3>
          <div className="space-y-3">
            {upcoming.map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
                    {s.mentor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.topic}</p>
                    <p className="text-xs text-muted-foreground">{s.mentor} · {s.date} at {s.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    {s.type === "Video Call" ? <Video className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
                    {s.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{s.duration}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="glass-card-elevated rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Session History</h3>
          <div className="space-y-3">
            {history.map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.topic}</p>
                    <p className="text-xs text-muted-foreground">{s.mentor} · {s.date} · {s.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">"{s.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipSessions;
