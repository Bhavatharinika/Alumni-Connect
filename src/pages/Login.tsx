import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Users, Briefcase, BookOpen } from "lucide-react";

type Role = "student" | "alumni" | "faculty";

const roleConfig = {
  student: { icon: BookOpen, label: "Student", color: "bg-primary", dashboard: "/student" },
  alumni: { icon: Briefcase, label: "Alumni", color: "bg-violet", dashboard: "/alumni" },
  faculty: { icon: Users, label: "Faculty", color: "bg-teal", dashboard: "/faculty" },
};

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>((searchParams.get("role") as Role) || "student");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(roleConfig[selectedRole].dashboard);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Gradient panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative items-center justify-center p-12">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">Nandha's AlumniConnect</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Start your mentorship journey today
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Connect with experienced alumni, gain career insights, and unlock exclusive placement opportunities.
          </p>
        </div>
      </div>

      {/* Right: Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Select your role and sign in to continue</p>
          </div>

          {/* Role selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {(Object.entries(roleConfig) as [Role, typeof roleConfig.student][]).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-200 ${
                  selectedRole === key
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <config.icon className={`h-5 w-5 ${selectedRole === key ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${selectedRole === key ? "text-primary" : "text-muted-foreground"}`}>
                  {config.label}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@institution.edu"
                className="h-11 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-xl"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              Sign in as {roleConfig[selectedRole].label}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-primary font-medium hover:underline">Contact your institution</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
