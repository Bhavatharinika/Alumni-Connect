import { useState } from "react";
import { Search, Briefcase, Award, CheckCircle, Send, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const alumniData = [
  { name: "Dr. Ankit Raj", company: "Google", role: "Senior Software Engineer", skills: ["System Design", "Cloud Architecture", "ML"], experience: 8, batch: "2018", available: true, hasResume: true },
  { name: "Priya Sharma", company: "Microsoft", role: "Data Scientist", skills: ["Data Science", "Python", "TensorFlow"], experience: 6, batch: "2019", available: true, hasResume: true },
  { name: "Rahul Verma", company: "Flipkart", role: "Full Stack Developer", skills: ["React", "Node.js", "Microservices"], experience: 5, batch: "2020", available: false, hasResume: true },
  { name: "Sneha Kapoor", company: "Amazon", role: "Cloud Architect", skills: ["AWS", "DevOps", "Kubernetes"], experience: 7, batch: "2018", available: true, hasResume: false },
  { name: "Vikram Patel", company: "CrowdStrike", role: "Security Engineer", skills: ["Network Security", "Ethical Hacking", "SIEM"], experience: 9, batch: "2016", available: true, hasResume: true },
  { name: "Meera Joshi", company: "Infosys", role: "Frontend Lead", skills: ["React", "Angular", "UI/UX"], experience: 4, batch: "2021", available: true, hasResume: true },
  { name: "Arjun Nair", company: "Tesla", role: "ML Engineer", skills: ["Machine Learning", "AI", "Python", "Deep Learning"], experience: 6, batch: "2019", available: true, hasResume: true },
  { name: "Kavya Reddy", company: "Zoho", role: "Product Manager", skills: ["Web Development", "System Design", "Java"], experience: 5, batch: "2020", available: false, hasResume: true },
];

const AlumniDirectory = () => {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [inviteAlumni, setInviteAlumni] = useState<string | null>(null);
  const [inviteForm, setInviteForm] = useState({ topic: "", date: "", mode: "Online", message: "" });

  const filtered = alumniData.filter((a) => {
    const q = search.toLowerCase();
    if (!q) return true;
    return (
      a.name.toLowerCase().includes(q) ||
      a.company.toLowerCase().includes(q) ||
      a.role.toLowerCase().includes(q) ||
      a.skills.some((s) => s.toLowerCase().includes(q))
    );
  });

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Invitation Sent!", description: `Workshop invitation sent to ${inviteAlumni}.` });
    setInviteAlumni(null);
    setInviteForm({ topic: "", date: "", mode: "Online", message: "" });
  };

  const handleViewResume = (name: string) => {
    toast({ title: "Resume", description: `Opening resume for ${name}.` });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Alumni Directory</h1>
        <p className="text-muted-foreground mt-1">Search alumni by skills, name, or company. View resumes and send workshop invitations.</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by skill, name, company, or role (e.g., Machine Learning)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11 rounded-xl"
        />
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">Showing {filtered.length} alumni</p>

      {/* Table */}
      <div className="glass-card-elevated rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                {["Name", "Company", "Role", "Skills", "Resume", "Action"].map((h) => (
                  <th key={h} className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((alumni) => (
                <tr key={alumni.name} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                        {alumni.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{alumni.name}</p>
                        <p className="text-[11px] text-muted-foreground">Batch {alumni.batch} · {alumni.experience} yrs</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{alumni.company}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{alumni.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {alumni.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px] bg-primary/10 text-primary border-0 font-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {alumni.hasResume ? (
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 px-2 rounded-lg text-xs" onClick={() => handleViewResume(alumni.name)}>
                          <FileText className="h-3.5 w-3.5" /> View
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 px-2 rounded-lg text-xs" onClick={() => toast({ title: "Downloading...", description: `Resume for ${alumni.name}` })}>
                          <Download className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      size="sm"
                      className="rounded-xl text-xs h-8"
                      disabled={!alumni.available}
                      onClick={() => setInviteAlumni(alumni.name)}
                    >
                      <Send className="h-3 w-3" /> Invite
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 glass-card-elevated rounded-2xl">
          <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No alumni found matching "{search}".</p>
        </div>
      )}

      {/* Workshop Invite Dialog */}
      <Dialog open={!!inviteAlumni} onOpenChange={() => setInviteAlumni(null)}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle>Invite {inviteAlumni}</DialogTitle>
            <DialogDescription>Send a workshop / guest lecture invitation.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleInvite} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Workshop Topic</label>
              <Input
                placeholder="e.g., Introduction to Cloud Computing"
                value={inviteForm.topic}
                onChange={(e) => setInviteForm({ ...inviteForm, topic: e.target.value })}
                className="h-11 rounded-xl"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Date</label>
                <Input
                  type="date"
                  value={inviteForm.date}
                  onChange={(e) => setInviteForm({ ...inviteForm, date: e.target.value })}
                  className="h-11 rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mode</label>
                <div className="flex gap-2">
                  {["Online", "Offline"].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setInviteForm({ ...inviteForm, mode: m })}
                      className={`flex-1 h-11 rounded-xl text-sm font-medium transition-all ${
                        inviteForm.mode === m
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                placeholder="Brief message for the alumni..."
                value={inviteForm.message}
                onChange={(e) => setInviteForm({ ...inviteForm, message: e.target.value })}
                className="rounded-xl min-h-[80px]"
              />
            </div>
            <div className="flex gap-3">
              <Button type="button" variant="outline" className="flex-1 rounded-xl" onClick={() => setInviteAlumni(null)}>Cancel</Button>
              <Button type="submit" className="flex-1 rounded-xl"><Send className="h-4 w-4" /> Send Invitation</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlumniDirectory;
