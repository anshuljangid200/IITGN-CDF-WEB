import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Clock, Brain, Layers, Zap, BookOpen } from "lucide-react";

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

const GenAIAgenticEngineering = () => {
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

      {/* Grading */}
      <section className="py-16 lg:py-24 bg-muted/50 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Grading & Evaluation</h2>
          <ul className="space-y-3 text-muted-foreground text-lg">
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

export default GenAIAgenticEngineering;
