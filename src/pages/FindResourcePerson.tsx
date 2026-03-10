import { useState } from "react";
import { Search, MapPin, Briefcase, Award, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const domains = ["All", "AI", "Data Science", "Web Development", "Cybersecurity", "Cloud Computing"];

const alumniList = [
  { name: "Dr. Ankit Raj", company: "Google", skills: ["System Design", "Cloud Architecture", "ML"], experience: 8, domain: "AI", available: true },
  { name: "Priya Sharma", company: "Microsoft", skills: ["Data Science", "Python", "TensorFlow"], experience: 6, domain: "Data Science", available: true },
  { name: "Rahul Verma", company: "Flipkart", skills: ["React", "Node.js", "Microservices"], experience: 5, domain: "Web Development", available: false },
  { name: "Sneha Kapoor", company: "Amazon", skills: ["AWS", "DevOps", "Kubernetes"], experience: 7, domain: "Cloud Computing", available: true },
  { name: "Vikram Patel", company: "CrowdStrike", skills: ["Network Security", "Ethical Hacking", "SIEM"], experience: 9, domain: "Cybersecurity", available: true },
  { name: "Meera Joshi", company: "Infosys", skills: ["React", "Angular", "UI/UX"], experience: 4, domain: "Web Development", available: true },
];

const FindResourcePerson = () => {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [inviteModal, setInviteModal] = useState<string | null>(null);
  const [inviteForm, setInviteForm] = useState({ topic: "", date: "", mode: "Online", message: "" });

  const filtered = alumniList.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesDomain = activeDomain === "All" || a.domain === activeDomain;
    return matchesSearch && matchesDomain;
  });

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Invitation Sent!", description: `Workshop invitation sent to ${inviteModal}.` });
    setInviteModal(null);
    setInviteForm({ topic: "", date: "", mode: "Online", message: "" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Find Resource Person</h1>
        <p className="text-muted-foreground mt-1">Search alumni by skills or domain to invite for workshops and guest lectures.</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, skills, or domain..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11 rounded-xl"
        />
      </div>

      {/* Domain filters */}
      <div className="flex flex-wrap gap-2">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setActiveDomain(d)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeDomain === d
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Alumni cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((alumni) => (
          <div key={alumni.name} className="glass-card-elevated rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0">
                {alumni.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-foreground">{alumni.name}</h3>
                  {alumni.available && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-teal bg-teal/10 px-2 py-0.5 rounded-full">
                      <CheckCircle className="h-3 w-3" /> Available
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{alumni.company}</span>
                  <span className="flex items-center gap-1"><Award className="h-3 w-3" />{alumni.experience} yrs exp</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {alumni.skills.map((skill) => (
                    <span key={skill} className="text-[11px] px-2.5 py-0.5 rounded-lg bg-primary/10 text-primary font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Button
                    size="sm"
                    className="rounded-xl"
                    disabled={!alumni.available}
                    onClick={() => setInviteModal(alumni.name)}
                  >
                    <Send className="h-3.5 w-3.5" /> Invite as Resource Person
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 glass-card-elevated rounded-2xl">
          <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No alumni found matching your search.</p>
        </div>
      )}

      {/* Invite Modal */}
      {inviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm" onClick={() => setInviteModal(null)}>
          <div className="glass-card-elevated rounded-2xl p-6 w-full max-w-md mx-4 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-foreground">Invite {inviteModal}</h3>
            <p className="text-sm text-muted-foreground">Send a workshop / guest lecture invitation.</p>

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
                <Button type="button" variant="outline" className="flex-1 rounded-xl" onClick={() => setInviteModal(null)}>Cancel</Button>
                <Button type="submit" className="flex-1 rounded-xl"><Send className="h-4 w-4" /> Send Invitation</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindResourcePerson;
