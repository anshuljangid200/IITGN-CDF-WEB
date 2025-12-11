import { ChangeEvent, FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Code, Server, Layers, Cloud, Rocket } from "lucide-react";
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

// Program Specific Config
const SOFTWARE_CURRICULUM_PATH = "/images/Curriculum%20%26%20Learning%20Journey%20-%20Cloud%20based%20Software%20Development.pdf";
const SOFTWARE_CURRICULUM_FILENAME = "IITGN-Cloud-Software-Curriculum.pdf";
const PROGRAM_NAME = "AI Driven Cloud based Software Development";

const heroDescription =
  "A hands-on program that blends full-stack development with Generative AI, Agentic AI, DevOps, and cloud-native deployment workflows.";

const highlights = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Full-Stack Development Fundamentals",
    description: "Master Java, JavaScript, React, Next.js, and Spring Boot for scalable application development.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Augmented Software Engineering",
    description: "Use GenAI tools such as GitHub Copilot & LangChain to enhance design, coding, and testing workflows.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Engineering with Spring Boot",
    description: "Build enterprise backends with API routing, authentication, logging, and real-world integration workflows.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Frontend Engineering with React & Next.js",
    description: "Design intelligent UI systems with interactive and dynamic components powered by AI capabilities.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud & DevOps Readiness",
    description: "Deploy and scale applications using AWS, Azure, Kubernetes, Docker, CI/CD, and observability stacks.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Capstone & Career Support",
    description: "Develop and deploy a real, production-grade AI-integrated software product and receive placement guidance.",
  },
];

const curriculum = [
  {
    title: "Module 1: Foundations of AI, Data & SDLC (Java & JavaScript)",
    points: [
      "AI vs ML vs Generative AI",
      "Prompt engineering & responsible AI",
      "Java & OOP essentials",
      "JavaScript (ES6+), async/await, DOM",
      "Version control & Git workflows",
    ],
  },
  {
    title: "Module 2: Clean Code & Professional Engineering Practices",
    points: [
      "SOLID principles in backend design",
      "Refactoring patterns",
      "Design patterns (Factory, Observer, Adapter)",
      "AI-assisted code reviews & test generation",
    ],
  },
  {
    title: "Module 3: Full-Stack Software Engineering",
    points: [
      "Spring Boot backend development",
      "React.js state management",
      "Next.js routing & SSR",
      "REST APIs + database integration",
    ],
  },
  {
    title: "Module 4: DevOps & Cloud Native Deployment",
    points: [
      "CI/CD pipelines (GitHub Actions / Jenkins)",
      "Docker & containerization",
      "Kubernetes fundamentals",
      "Observability (Prometheus / Grafana / Sentry)",
    ],
  },
  {
    title: "Module 5: Capstone Project",
    points: [
      "Team-based full-stack + AI integrated system",
      "Real deployment on cloud",
      "Architecture documentation & presentation",
    ],
  },
];

type SoftwareCurriculumFormState = {
  name: string;
  email: string;
  phone: string;
};

const softwareInitialFormState: SoftwareCurriculumFormState = {
  name: "",
  email: "",
  phone: "",
};

const GenAISoftwareEngineering = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<SoftwareCurriculumFormState>(softwareInitialFormState);

  const handleInputChange =
    (field: keyof SoftwareCurriculumFormState) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = SOFTWARE_CURRICULUM_PATH;
    link.download = SOFTWARE_CURRICULUM_FILENAME;
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
      // We explicitly add the program name here since it's not in the visible form
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ 
          ...formData, 
          program: PROGRAM_NAME 
        }),
      });

      // 2. Trigger Download on success
      triggerDownload();

      // 3. Reset and Close
      setFormData(softwareInitialFormState);
      setIsDialogOpen(false);

    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback: If backend fails, still allow download
      // This ensures the user gets the file even if the script is busy
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
        icon={<Code className="w-16 h-16 text-primary mx-auto" aria-hidden="true" />}
        title="Gen AI Powered"
        highlight="Software Engineering with Cloud"
        description={heroDescription}
      />

      {/* Highlights */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Key Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className="hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Curriculum Structure
          </h2>

          {curriculum.map((module, index) => (
            <Card key={index} className="shadow-large mb-8">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-foreground mb-4">{module.title}</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  {module.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* CURRICULUM DOWNLOAD CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center space-y-6">
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
                  Fill this short form to unlock the full curriculum PDF for the AI Driven Cloud based Software
                  Development program.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDownloadCurriculum} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="software-curriculum-name">Full Name</Label>
                  <Input
                    id="software-curriculum-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="software-curriculum-email">Email ID</Label>
                  <Input
                    id="software-curriculum-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="software-curriculum-phone">Mobile Number</Label>
                  <Input
                    id="software-curriculum-phone"
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
      <section className="py-16 lg:py-24 text-center">
        <Button asChild size="lg" variant="cta" className="rounded-full px-10">
          <Link to="/admissions">Apply Now</Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default GenAISoftwareEngineering;
