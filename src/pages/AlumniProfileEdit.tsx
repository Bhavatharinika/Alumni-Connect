import { useState } from "react";
import { MapPin, Briefcase, GraduationCap, Mail, Star, Award, BookOpen, Copy, Share2, Save, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const REFERRAL_CODE = "ALUMNI-NC-1023";
const REFERRAL_LINK = "nandha-alumni/ref/ARC1023";

const AlumniProfileEdit = () => {
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Ankit Raj",
    role: "Senior Software Engineer",
    company: "Google",
    location: "Bangalore",
    batch: "2018",
    email: "ankit.raj@alumni.nandha.edu",
    experience: "8",
    domain: "AI",
    skills: "React.js, Node.js, System Design, Data Structures, Machine Learning, Cloud Architecture",
    workshopAvailable: true,
    bio: "Passionate about mentoring the next generation of engineers. Specialized in distributed systems and cloud architecture.",
  });

  const copyReferralCode = () => {
    navigator.clipboard.writeText(REFERRAL_CODE);
    toast({ title: "Copied!", description: "Referral code copied to clipboard." });
  };

  const handleSave = () => {
    setEditing(false);
    toast({ title: "Profile Updated!", description: "Your profile changes have been saved." });
  };

  const skills = profile.skills.split(",").map(s => s.trim()).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-1">View and manage your alumni profile.</p>
        </div>
        <Button onClick={() => editing ? handleSave() : setEditing(true)} className="rounded-xl">
          {editing ? <><Save className="h-4 w-4" /> Save Changes</> : <><Edit2 className="h-4 w-4" /> Edit Profile</>}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Profile card */}
          <div className="glass-card-elevated rounded-2xl p-6 text-center">
            <div className="h-20 w-20 rounded-2xl gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
              AR
            </div>
            {editing ? (
              <div className="space-y-3">
                <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="text-center rounded-xl h-11" />
                <Input value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })} className="text-center rounded-xl h-11" placeholder="Role" />
                <Input value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} className="text-center rounded-xl h-11" placeholder="Company" />
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold text-foreground">{profile.name}</h2>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
                <p className="text-sm text-primary font-medium">{profile.company}</p>
              </>
            )}

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{profile.location}</span>
              <span className="flex items-center gap-1"><GraduationCap className="h-3 w-3" />Batch {profile.batch}</span>
            </div>
          </div>

          {/* Referral code */}
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
            <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
              Link: <span className="text-primary font-medium">{REFERRAL_LINK}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="glass-card-elevated rounded-2xl p-6 space-y-4">
            {[
              { icon: Star, label: "Rating", value: "4.9/5.0" },
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

        {/* Right column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Details */}
          <div className="glass-card-elevated rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Profile Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                {editing ? (
                  <Input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="rounded-xl h-11" />
                ) : (
                  <p className="text-sm text-foreground flex items-center gap-1"><Mail className="h-3.5 w-3.5 text-muted-foreground" />{profile.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Years of Experience</label>
                {editing ? (
                  <Input value={profile.experience} onChange={(e) => setProfile({ ...profile, experience: e.target.value })} className="rounded-xl h-11" />
                ) : (
                  <p className="text-sm text-foreground flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-muted-foreground" />{profile.experience} years</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Domain</label>
                {editing ? (
                  <Input value={profile.domain} onChange={(e) => setProfile({ ...profile, domain: e.target.value })} className="rounded-xl h-11" />
                ) : (
                  <p className="text-sm text-foreground">{profile.domain}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</label>
                {editing ? (
                  <Input value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} className="rounded-xl h-11" />
                ) : (
                  <p className="text-sm text-foreground">{profile.location}</p>
                )}
              </div>
            </div>
          </div>

          {/* Workshop availability toggle */}
          <div className="glass-card-elevated rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">Available for Workshops / Guest Lectures</h3>
                <p className="text-sm text-muted-foreground mt-1">Toggle your availability so colleges can invite you as a resource person.</p>
              </div>
              <button
                onClick={() => setProfile({ ...profile, workshopAvailable: !profile.workshopAvailable })}
                className={`relative w-12 h-7 rounded-full transition-colors duration-200 ${profile.workshopAvailable ? "bg-teal" : "bg-border"}`}
              >
                <div className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-card shadow transition-transform duration-200 ${profile.workshopAvailable ? "translate-x-5" : ""}`} />
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card-elevated rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Skills & Expertise</h3>
            {editing ? (
              <Textarea
                value={profile.skills}
                onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                className="rounded-xl"
                placeholder="Comma separated skills..."
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="glass-card-elevated rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground">About</h3>
            {editing ? (
              <Textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="rounded-xl min-h-[100px]"
              />
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfileEdit;
