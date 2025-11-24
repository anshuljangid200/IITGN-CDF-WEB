import { ChangeEvent, FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Database,
  Cloud,
  LineChart,
  Layers,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const heroDescription =
  "A hands-on program to master scalable data pipelines, distributed compute, cloud data warehousing, analytics, MLOps, and production-ready engineering.";

const highlights = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Ready Data Engineering Foundations",
    description: "Develop strong foundations across AI, SQL, statistics and modern data pipelines."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Modern ETL & Distributed Systems",
    description: "Hands-on pipelines using Airflow, Kafka, Spark, HDFS, and Lakehouse architectures."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Data Warehousing",
    description: "Learn AWS Redshift, Google BigQuery, Azure Synapse, cost-optimization, and compliance."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Advanced Analytics & Storytelling",
    description: "Perform deep EDA, visualization, BI dashboards, and narrative data insights."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "MLOps & Production ML Systems",
    description: "Learn ML lifecycle, versioning, feature stores, CI/CD, and observability pipelines."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Capstone & Interview Readiness",
    description: "End-to-end real-world data engineering project + mock interviews + certification prep."
  }
];

const eligibility = [
  "B.Tech / B.E. / B.S. (minimum 50% or 5.0 CPI/CGPA)",
  "OR M.Sc. / MCA / Integrated Programs (minimum 50%)",
  "Programming proficiency (Python recommended)",
  "Basic math & statistics understanding"
];

const grading = [
  "Weekly quizzes & assignments: 20%",
  "Mid-term exam/project: 20%",
  "Attendance & participation (Minimum 80%): 10%",
  "Capstone Project: 30%",
  "Final Exam: 20%"
];

type CurriculumFormState = {
  name: string;
  email: string;
  phone: string;
  program: string;
};

const programPdfMap: Record<string, { path: string; fileName: string }> = {
  "data-science": {
    path: "/images/Data%20Science%20%26%20Engineering.pdf",
    fileName: "IITGN-Data-Science-Curriculum.pdf"
  },
  aiml: {
    path: "/images/Curriculum%20%26%20Learning%20Journey%20-%20AI-ML%20%26%20Agentic%20AI%20Engineering.pdf",
    fileName: "IITGN-AIML-Curriculum.pdf"
  },
  "software-cloud": {
    path: "/images/Curriculum%20%26%20Learning%20Journey%20-%20Cloud%20based%20Software%20Development.pdf",
    fileName: "IITGN-Cloud-Software-Curriculum.pdf"
  }
};

const programOptions = [
  { value: "data-science", label: "Data Science & Engineering" },
  { value: "aiml", label: "AI-ML & Agentic AI Engineering" },
  { value: "software-cloud", label: "Cloud Based Software Development" }
];

const defaultProgram = "data-science";

const initialFormState: CurriculumFormState = {
  name: "",
  email: "",
  phone: "",
  program: defaultProgram
};

const GenAIPoweredDataScience = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CurriculumFormState>(initialFormState);

  const handleInputChange =
    (field: keyof CurriculumFormState) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleDownloadCurriculum = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.program) {
      setFormError("Please fill out all fields so we can share the curriculum.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    const pdfMeta = programPdfMap[formData.program] ?? programPdfMap[defaultProgram];
    const link = document.createElement("a");
    link.href = pdfMeta.path;
    link.download = pdfMeta.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmitting(false);
    setFormData(initialFormState);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        icon={<Database className="w-16 h-16 text-primary mx-auto" aria-hidden="true" />}
        title="Gen AI Powered"
        highlight="Data Science & Engineering"
        description={heroDescription}
      />

      {/* HIGHLIGHTS */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className="hover:shadow-large transition-all hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
                  Fill this short form to unlock the full curriculum PDF for your preferred program.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDownloadCurriculum} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="curriculum-name">Full Name</Label>
                  <Input
                    id="curriculum-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="curriculum-email">Email ID</Label>
                  <Input
                    id="curriculum-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="curriculum-phone">Mobile Number</Label>
                  <Input
                    id="curriculum-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Program Preference</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, program: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {formError && <p className="text-sm text-destructive">{formError}</p>}
                <DialogFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Preparing download..." : "Download PDF"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Eligibility</h2>
          <ul className="space-y-2 text-muted-foreground text-lg">
            {eligibility.map((e, idx) => <li key={idx}>{e}</li>)}
          </ul>
        </div>
      </section>

      {/* GRADING */}
      <section className="py-16 bg-muted/50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Grading & Evaluation</h2>
          <ul className="space-y-2 text-muted-foreground text-lg">
            {grading.map((g, idx) => <li key={idx}>{g}</li>)}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <a
          href="/admissions"
          className="px-8 py-4 text-lg rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition"
        >
          Apply Now
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIPoweredDataScience;
