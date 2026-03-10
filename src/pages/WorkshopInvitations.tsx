import { useState } from "react";
import { Calendar, MapPin, CheckCircle, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Invitation {
  id: number;
  topic: string;
  date: string;
  mode: string;
  message: string;
  from: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const initialInvitations: Invitation[] = [
  { id: 1, topic: "Introduction to Cloud Computing", date: "2026-03-20", mode: "Online", message: "We'd love to have you conduct a session for our 3rd year students.", from: "Prof. Ramesh Kumar", status: "Pending" },
  { id: 2, topic: "AI in Healthcare Workshop", date: "2026-04-05", mode: "Offline", message: "A hands-on workshop for our AI club members.", from: "Dr. Meena Iyer", status: "Pending" },
  { id: 3, topic: "Resume Building Masterclass", date: "2026-02-15", mode: "Online", message: "Thank you for accepting! Students found it very helpful.", from: "Prof. Suresh Nair", status: "Accepted" },
];

const WorkshopInvitations = () => {
  const { toast } = useToast();
  const [invitations, setInvitations] = useState<Invitation[]>(initialInvitations);

  const updateStatus = (id: number, status: "Accepted" | "Rejected") => {
    setInvitations(prev => prev.map(inv => inv.id === id ? { ...inv, status } : inv));
    toast({ title: `Invitation ${status}`, description: `You have ${status.toLowerCase()} the workshop invitation.` });
  };

  const statusStyles = {
    Pending: "bg-primary/10 text-primary",
    Accepted: "bg-teal/10 text-teal",
    Rejected: "bg-destructive/10 text-destructive",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Workshop Invitations</h1>
        <p className="text-muted-foreground mt-1">View and respond to workshop and guest lecture requests.</p>
      </div>

      <div className="space-y-4">
        {invitations.map((inv) => (
          <div key={inv.id} className="glass-card-elevated rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-foreground">{inv.topic}</h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[inv.status]}`}>
                    {inv.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{inv.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{inv.mode}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />From: {inv.from}</span>
                </div>

                <p className="text-sm text-muted-foreground">{inv.message}</p>
              </div>

              {inv.status === "Pending" && (
                <div className="flex gap-2 shrink-0">
                  <Button size="sm" className="rounded-xl" onClick={() => updateStatus(inv.id, "Accepted")}>
                    <CheckCircle className="h-3.5 w-3.5" /> Accept
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(inv.id, "Rejected")}>
                    <XCircle className="h-3.5 w-3.5" /> Reject
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopInvitations;
