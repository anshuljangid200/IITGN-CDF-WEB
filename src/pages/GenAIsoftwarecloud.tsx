import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Server, Layers, Cloud, Rocket } from "lucide-react";

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

const GenAISoftwareEngineering = () => {
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

      {/* CTA */}
      <section className="py-16 lg:py-24 text-center">
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

export default GenAISoftwareEngineering;
