import { GraduationCap } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground">AlumniConnect</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Alumni Mentorship & Placement Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
