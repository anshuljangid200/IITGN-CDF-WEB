import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Database,
  Cloud,
  LineChart,
  Workflow,
  Layers,
  Rocket
} from "lucide-react";

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

const modules = [
  { title: "Module 1A: Foundations of AI, Data & SQL", hours: "60 hrs" },
  { title: "Module 1B: Applied Mathematics for Data Engineering", hours: "60 hrs" },
  { title: "Module 1C: ETL Pipelines & Data Architectures", hours: "60 hrs" },
  { title: "Module 2A: Mastering Big Data (Spark, HDFS, PySpark)", hours: "60 hrs" },
  { title: "Module 2B: Analytics & Data Storytelling (Power BI / Tableau)", hours: "60 hrs" },
  { title: "Module 3: Cloud Data Warehousing (Redshift / BigQuery / Synapse)", hours: "60 hrs" },
  { title: "Module 4A: Data Science Meets Engineering (MLOps Fundamentals)", hours: "60 hrs" },
  { title: "Module 4B: Data Reliability & Observability", hours: "60 hrs" },
  { title: "Module 5: Capstone – Scalable Data Solutions", hours: "60 hrs" },
  { title: "Module 6: Interview Prep & Certification Readiness", hours: "60 hrs" }
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

const GenAIPoweredDataScience = () => {
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

      {/* CURRICULUM */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Curriculum Structure (Total: 540+ Contact Hours)
          </h2>
          <div className="space-y-6">
            {modules.map((mod, idx) => (
              <Card key={idx} className="shadow-large">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{mod.title}</h3>
                    <span className="text-muted-foreground text-sm">{mod.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
