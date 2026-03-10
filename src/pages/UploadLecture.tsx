import { useState } from "react";
import { Upload, Video, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const categories = ["Interview Prep", "Career Guidance", "Coding", "Resume Building", "Industry Insights"];

const UploadLecture = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    videoUrl: "",
    duration: "",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Lecture Uploaded!", description: "Your video lecture has been published to the Learning Hub." });
    setForm({ title: "", category: "", description: "", videoUrl: "", duration: "", tags: "" });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Upload Video Lecture</h1>
        <p className="text-muted-foreground mt-1">Share your knowledge with current students.</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card-elevated rounded-2xl p-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Lecture Title</label>
          <Input
            placeholder="e.g., Cracking FAANG Interviews"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="h-11 rounded-xl"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setForm({ ...form, category: cat })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  form.category === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Description</label>
          <Textarea
            placeholder="Brief description of the lecture content..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="rounded-xl min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <LinkIcon className="h-4 w-4" /> Video URL (YouTube / Vimeo)
          </label>
          <Input
            placeholder="https://youtube.com/watch?v=..."
            value={form.videoUrl}
            onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
            className="h-11 rounded-xl"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Duration</label>
            <Input
              placeholder="e.g., 45 min"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              className="h-11 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Tags (comma separated)</label>
            <Input
              placeholder="e.g., DSA, React, Career"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className="h-11 rounded-xl"
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full rounded-xl">
          <Upload className="h-4 w-4" /> Publish Lecture
        </Button>
      </form>
    </div>
  );
};

export default UploadLecture;
