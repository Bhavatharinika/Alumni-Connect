import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, UserPlus, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VALID_REFERRAL_CODES = [
  "ALUMNI-NC-1023",
  "ALUMNI-NC-2045",
  "ALUMNI-NC-3067",
  "ALUMNI-NC-4089",
];

const ReferredLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const referralCode = (form.elements.namedItem("referral") as HTMLInputElement).value;

    if (!VALID_REFERRAL_CODES.includes(referralCode.toUpperCase())) {
      toast({
        title: "Invalid Referral Code",
        description: "Please enter a valid alumni referral code to register.",
        variant: "destructive",
      });
      return;
    }

    setIsRegistered(true);
    toast({
      title: "Registration Successful!",
      description: "You can now post job opportunities.",
    });

    setTimeout(() => navigate("/referred/dashboard"), 1500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/referred/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero relative items-center justify-center p-12">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-violet/20 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground">Nandha's AlumniConnect</span>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Referred by an Alumni?
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Post job opportunities through our alumni referral network. Enter your unique referral code to get started and help students find great careers.
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {isRegistered ? (
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8 text-teal" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">You're all set!</h2>
              <p className="text-muted-foreground">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  <h1 className="text-2xl font-bold text-foreground">
                    {isLogin ? "Welcome Back" : "Referral Registration"}
                  </h1>
                </div>
                <p className="text-muted-foreground">
                  {isLogin
                    ? "Sign in to post job opportunities"
                    : "Register with your alumni referral code"}
                </p>
              </div>

              <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
                    <Input id="name" placeholder="Your full name" className="h-11 rounded-xl" required />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="h-11 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="h-11 rounded-xl" required />
                </div>
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="referral" className="text-sm font-medium text-foreground">Alumni Referral Code</Label>
                    <Input
                      id="referral"
                      placeholder="e.g., ALUMNI-NC-1023"
                      className="h-11 rounded-xl font-mono uppercase"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Ask your alumni contact for their unique referral code
                    </p>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full mt-2">
                  {isLogin ? "Sign In" : "Register & Continue"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                {isLogin ? "Don't have an account? " : "Already registered? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary font-medium hover:underline"
                >
                  {isLogin ? "Register with referral code" : "Sign in"}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferredLogin;
