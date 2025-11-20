import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ProgramHighlight = {
  value: string;
  title: string;
  description: string;
  route: string;
  banner: string;
  badge: string;
  stats: {
    label: string;
    value: string;
  }[];
  skills: string[];
};

const programs: ProgramHighlight[] = [
  {
    value: "aiml",
    title: "PG Diploma in GenAI-Powered AI-ML & Agentic AI Engineering",
    description:
      "Design production-grade LLM workflows, multi-agent pipelines, and responsible AI systems that combine LangChain, LangGraph, AutoGen, and CrewAI.",
    route: "/gen-ai-agentic-aiml",
    banner: "/images/IIT Gandhinagar - PG Diploma in AI-ML & Agentic AI Engineering(Vertical) (1).png",
    badge: "Gen AI · LLM · Agents",
    stats: [
      { label: "Duration", value: "6 Months" },
      { label: "Mentored Hours", value: "600+" },
      { label: "Certification", value: "PG Diploma" },
    ],
    skills: [
      "Multi-agent orchestration & tool usage",
      "LLM fine-tuning, evaluation, and guardrails",
      "MLOps, observability, and CI/CD for AI",
      "Responsible AI, governance, and compliance",
      "Capstone with LangChain + enterprise APIs",
    ],
  },
  {
    value: "data-science",
    title: "PG Diploma in GenAI-Powered Data Science & Engineering",
    description:
      "Build cloud-native data stacks, govern petabyte-scale pipelines, and operationalize analytics with MLOps-grade reliability.",
    route: "/gen-ai-data-science",
    banner:
      "/images/IIT Gandhinagar - PG Diploma in GenAI-Powered Data Science & Engineering.png",
    badge: "Data · Cloud · MLOps",
    stats: [
      { label: "Duration", value: "6 Months" },
      { label: "Mentored Hours", value: "540+" },
      { label: "Certification", value: "PG Diploma" },
    ],
    skills: [
      "Modern ETL with Airflow, Spark & Kafka",
      "Cloud warehousing (Redshift, BigQuery, Synapse)",
      "Analytics & BI storytelling for exec stakeholders",
      "ML feature stores, model serving & drift control",
      "Data reliability engineering & cost governance",
    ],
  },
  {
    value: "software-cloud",
    title: "PG Diploma in AI-Powered Software Engineering with Cloud",
    description:
      "Ship AI-augmented full-stack products with Java/Spring, React/Next.js, DevOps, and continuous delivery across AWS/Azure.",
    route: "/gen-ai-software-cloud",
    banner: "/images/IIT Gandhinagar - PG Diploma in AI Driven Cloud based Software Development.png",
    badge: "Software · Cloud · DevOps",
    stats: [
      { label: "Duration", value: "6 Months" },
      { label: "Mentored Hours", value: "520+" },
      { label: "Certification", value: "PG Diploma" },
    ],
    skills: [
      "Full-stack SDLC with React, Next.js & Spring Boot",
      "Agentic AI co-pilots in coding, testing, and reviews",
      "API security, scalability & reliability engineering",
      "Cloud-native deployments with Docker & Kubernetes",
      "Observability, SRE playbooks & post-release ops",
    ],
  },
];

const ProgramHighlights = () => {
  const [activeTab, setActiveTab] = useState(programs[0].value);

  return (
    <section
      aria-labelledby="program-highlights-heading"
      className="py-16 lg:py-24 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Program Highlights
          </div>
          <h2
            id="program-highlights-heading"
            className="text-3xl lg:text-4xl font-bold text-foreground"
          >
            IITGN PG Diploma Tracks
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Explore the residential GenAI-powered diplomas. 
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8 lg:space-y-12">
          <TabsList
            aria-label="Select a program to review highlights"
            className="flex w-full snap-x snap-mandatory overflow-x-auto gap-3 rounded-2xl bg-muted/80 p-3 mb-8 sm:mb-10 backdrop-blur supports-[backdrop-filter]:bg-muted/70 no-scrollbar scroll-pb-4 scroll-pl-2 sm:grid sm:grid-cols-2 lg:grid-cols-3"
          >
            {programs.map((program) => (
              <TabsTrigger
                key={program.value}
                value={program.value}
                className={cn(
                  "flex h-full w-full items-center justify-center rounded-2xl border px-5 py-4 text-center text-sm font-semibold transition-all snap-center",
                  "min-h-[74px] min-w-[240px] sm:min-w-0 sm:min-h-[90px] lg:min-h-[110px]",
                  "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-large data-[state=active]:border-primary/40",
                  "data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-transparent hover:text-primary hover:border-primary/20"
                )}
              >
                <span className="block text-sm sm:text-base leading-snug">{program.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((program) => (
            <TabsContent key={program.value} value={program.value} className="mt-8 lg:mt-10">
              <article className="rounded-[2rem] border border-border/70 bg-card/95 shadow-large p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                        {program.badge}
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-sm font-medium text-primary/90">
                        Futurense as Admissions, Industry and Hospitality Partner
                      </p>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <dl className="grid gap-4 sm:grid-cols-3">
                      {program.stats.map((stat) => (
                        <div
                          key={`${program.value}-${stat.label}`}
                          className="rounded-2xl border border-border/80 bg-muted/40 p-4"
                        >
                          <dt className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</dt>
                          <dd className="text-xl font-semibold text-foreground mt-1">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="space-y-4" aria-label={`${program.title} skill outcomes`}>
                      {program.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-3 text-base leading-relaxed">
                          <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={program.route}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-medium transition hover:opacity-90"
                    >
                      Explore Program
                    </Link>

                    {/* Common Foundation Info */}
                    <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Info className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-xs font-semibold text-primary">Common Foundation (First 6 Weeks)</p>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            All learners begin their journey with a common foundation. Based on your performance in the diagnostic phase, you&apos;ll specialize in one of the tracks given above.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <figure className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted/20 shadow-soft min-h-[320px]">
                    <img
                      src={program.banner}
                      alt={`${program.title} certificate preview`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 py-4 text-primary-foreground">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em]">IITGN · Futurense</p>
                      <p className="text-base">Program Certificate Preview</p>
                    </figcaption>
                  </figure>
                </div>
              </article>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramHighlights;
