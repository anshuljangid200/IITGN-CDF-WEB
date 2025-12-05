import { ChangeEvent, FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Clock, Brain, Layers, Zap, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// --- CONFIGURATION ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxISXHhQQdF6ZAQ4Ex3bVbLOMvF4x1Xm2ZH7c_D6z1hOpx3xJZ7jo3ujl-WuqhHCt0a/exec";

const overview = `This program equips students and professionals with the skills to build
real-world AI and Agentic AI systems. It bridges classical machine learning,
deep learning, and modern generative + agent-based AI frameworks. Students gain
hands-on experience with model training, fine-tuning, deployment, and multi-agent
workflows using LangChain, LangGraph, AutoGen and CrewAI.`;

const eligibility = [
  "B.Tech / B.E. / B.S. (4-year) with minimum 50% or 5.0 CPI/CGPA",
  "OR M.Sc., MCA, Integrated M.Sc./M.Tech, BS-MS (minimum 50%)",
  "Programming proficiency in any language (Python preferred)",
  "Basic understanding of math & statistics",
];

const grading = [
  "Weekly Assignments & Quizzes: 20%",
  "Mid-term Project / Exam: 20%",
  "Attendance & Participation (Minimum 80%): 10%",
  "Capstone Project: 30%",
  "Final Comprehensive Evaluation: 20%",
];

const modules = [
  {
    title: "Module 1: Foundations of AI and Data",
    points: [
      "Evolution of AI, ethics & responsible development",
      "Machine Learning fundamentals & data workflows",
      "Fairness, accountability & bias reduction",
      "Real-world AI applications",
    ],
  },
  {
    title: "Module 2: Pythonic ML & DL Basics",
    points: [
      "Advanced Python for ML workflows",
      "Regression & Classification algorithms",
      "Model evaluation & optimization",
      "Project: ML on real-world dataset",
    ],
  },
  {
    title: "Module 3: Understanding Deep Learning & Neural Networks",
    points: [
      "ANN, CNN, RNN architectures",
      "Backpropagation & optimization techniques",
      "Transfer learning / GANs / Autoencoders",
      "Mini Project: Deep Learning Application",
    ],
  },
  {
    title: "Module 4: Natural Language Processing for Gen AI",
    points: [
      "Tokenization, NER, sentiment analysis",
      "Extractive vs Abstractive summarization",
      "Transformers for NLP tasks",
      "Hands-on NLP project",
    ],
  },
  {
    title: "Module 5: Generative AI & Large Language Models",
    points: [
      "GANs, VAEs, diffusion models",
      "Working with GPT / LLaMA / T5 models",
      "Text generation & embedding models",
      "Fine-tuning LLMs for custom tasks",
    ],
  },
  {
    title: "Module 6: LLM Mastery & Prompt Engineering",
    points: [
      "Zero-shot, Few-shot prompting",
      "Chain-of-Thought reasoning",
      "Prompt optimization strategies",
      "Mini Project: Purpose-built AI assistant",
    ],
  },
  {
    title: "Module 7: Production AI & MLOps",
    points: [
      "Cloud deployment (AWS / GCP / Azure)",
      "Docker & Kubernetes for scaling",
      "Model monitoring & drift handling",
      "End-to-end CI/CD pipeline setup",
    ],
  },
  {
    title: "Module 8: Agentic AI with LangChain",
    points: [
      "Building AI agents & tool-based reasoning",
      "Memory + Retrieval Augmented Generation (RAG)",
      "Multi-step chain execution & planning",
      "Project: Build an autonomous agent",
    ],
  },
  {
    title: "Module 9: Multi-Agent Systems (LangGraph, AutoGen, CrewAI)",
    points: [
      "Graph-based agent workflows",
      "Task delegation & collaboration strategies",
      "Implementing multi-agent pipelines",
      "Project: Multi-agent coordination system",
    ],
  },
  {
    title: "Module 10: Capstone Project (Industry-Driven)",
    points: [
      "Define real-world problem & data workflow",
      "Model development + deployment",
      "Production readiness + performance scaling",
      "Final showcase presentation",
    ],
  },
];

type AimlCurriculumFormState = {
  name: string;
  email: string;
  phone: string;
};

const aimlInitialFormState: AimlCurriculumFormState = {
  name: "",
  email: "",
  phone: "",
};

const AIML_CURRICULUM_PATH =
  "/images/Curriculum%20%26%20Learning%20Journey%20-%20AI-ML%20%26%20Agentic%20AI%20Engineering.pdf";
const AIML_CURRICULUM_FILENAME = "IITGN-AIML-Curriculum.pdf";

const GenAIAgenticEngineering = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<AimlCurriculumFormState>(aimlInitialFormState);

  const handleInputChange =
    (field: keyof AimlCurriculumFormState) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  // Helper to trigger the actual file download
  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = AIML_CURRICULUM_PATH;
    link.download = AIML_CURRICULUM_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCurriculum = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please fill out all fields so we can share the curriculum.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    try {
      // 1. Send data to Google Sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // We include the program name manually here since this page is specific to one program
        body: JSON.stringify({ 
          ...formData, 
          program: "AI-ML & Agentic AI Engineering" 
        }),
      });

      // 2. Trigger Download on success
      triggerDownload();

      // 3. Reset and Close
      setFormData(aimlInitialFormState);
      setIsDialogOpen(false);

    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback: If backend fails, still allow download
      triggerDownload();
      setIsDialogOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        icon={<Brain className="w-16 h-16 text-primary mx-auto" aria-hidden="true" />}
        title="Gen AI Powered"
        highlight="AIML / Agentic AI Engineering"
        description={overview}
      />

      {/* Program Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6 max-w-5xl">
          {[
            { icon: <GraduationCap />, label: "Program Type", value: "6-Month PG Diploma" },
            { icon: <Clock />, value: "600+ Contact Hours", label: "Total Duration" },
            { icon: <Brain />, label: "Mode", value: "Full-Time Residential" },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-large">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gradient-primary text-primary-foreground rounded-lg mb-4">
                  {item.icon}
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <h3 className="text-xl font-bold text-foreground">{item.value}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 text-lg">
            {eligibility.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Curriculum Structure</h2>
          <div className="space-y-10">
            {modules.map((mod, idx) => (
              <Card key={idx} className="shadow-large">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">{mod.title}</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                    {mod.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CURRICULUM DOWNLOAD CTA */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Download the Detailed Curriculum</h2>
          <p className="text-muted-foreground text-lg">
            Get the full learning journey, weekly breakdown, capstone details, and faculty information delivered
            instantly after sharing your contact details.
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full px-8 py-6 text-base font-semibold">
                Download Curriculum
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Tell us a bit about you</DialogTitle>
                <DialogDescription>
                  Fill this short form to unlock the full curriculum PDF for the GenAI-Powered AI-ML & Agentic AI
                  Engineering program.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDownloadCurriculum} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="aiml-curriculum-name">Full Name</Label>
                  <Input
                    id="aiml-curriculum-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aiml-curriculum-email">Email ID</Label>
                  <Input
                    id="aiml-curriculum-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aiml-curriculum-phone">Mobile Number</Label>
                  <Input
                    id="aiml-curriculum-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    required
                  />
                </div>
                {formError && <p className="text-sm text-destructive">{formError}</p>}
                <DialogFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Download PDF"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Button asChild size="lg" variant="cta" className="rounded-full px-10">
          <Link to="/admissions">Apply Now</Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIAgenticEngineering;
