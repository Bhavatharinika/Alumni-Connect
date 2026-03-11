import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, CheckCircle } from "lucide-react";

const allSkills = [
  "Machine Learning", "AI", "Data Science", "Web Development", "Cloud Computing",
  "Cybersecurity", "React.js", "Node.js", "Python", "Java", "DevOps",
  "System Design", "Blockchain", "IoT", "Mobile Development", "UI/UX Design",
];

const availabilityOptions = ["Mentoring", "Workshop", "Referral"];

const AlumniProfileSetup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    batchYear: "",
    department: "",
    company: "",
    role: "",
    experience: "",
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleAvailability = (opt: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({ title: "Invalid File", description: "Only PDF files are accepted.", variant: "destructive" });
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.batchYear || !form.department || !form.company || !form.role) {
      toast({ title: "Missing Fields", description: "Please fill all required fields.", variant: "destructive" });
      return;
    }
    if (selectedSkills.length === 0) {
      toast({ title: "Select Skills", description: "Please select at least one skill.", variant: "destructive" });
      return;
    }
    // Store profile data (mock — in production this goes to DB)
    localStorage.setItem("alumniProfileComplete", "true");
    localStorage.setItem("alumniProfile", JSON.stringify({
      ...form,
      skills: selectedSkills,
      availability: selectedAvailability,
      resumeName: resumeFile?.name || null,
    }));
    toast({ title: "Profile Saved!", description: "Your profile has been set up successfully." });
    navigate("/alumni");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Complete Your Profile</h1>
          <p className="text-muted-foreground mt-1">Fill in your professional details to get started.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card-elevated rounded-2xl p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name *</label>
              <Input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="e.g., Dr. Ankit Raj" className="h-11 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone Number *</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g., +91 9876543210" className="h-11 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Batch Year *</label>
              <Input value={form.batchYear} onChange={(e) => setForm({ ...form, batchYear: e.target.value })} placeholder="e.g., 2018" className="h-11 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Department *</label>
              <Input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="e.g., Computer Science" className="h-11 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Current Company *</label>
              <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="e.g., Google" className="h-11 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Job Role / Position *</label>
              <Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g., Senior Software Engineer" className="h-11 rounded-xl" required />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-foreground">Years of Experience</label>
              <Input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} placeholder="e.g., 8" className="h-11 rounded-xl" />
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Skills *</label>
            <p className="text-xs text-muted-foreground">Select all that apply</p>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedSkills.includes(skill)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Availability</label>
            <div className="flex flex-wrap gap-2">
              {availabilityOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleAvailability(opt)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedAvailability.includes(opt)
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Upload */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Resume (PDF only)</label>
            {resumeFile ? (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50">
                <Upload className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground flex-1 truncate">{resumeFile.name}</span>
                <button type="button" onClick={() => setResumeFile(null)} className="text-muted-foreground hover:text-destructive">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-24 rounded-xl border-2 border-dashed border-border/50 bg-secondary/30 cursor-pointer hover:bg-secondary/50 transition-colors">
                <Upload className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="text-sm text-muted-foreground">Click to upload PDF</span>
                <input type="file" accept=".pdf" className="hidden" onChange={handleResumeChange} />
              </label>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full rounded-xl">
            Save Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AlumniProfileSetup;
