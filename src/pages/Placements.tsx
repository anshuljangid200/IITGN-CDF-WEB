import { FormEvent, useState } from "react";
import { FileText, Code, MessageSquare, Calculator, Award, Users, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import styles from "./Placements.module.css";
import LogoMarquee from "@/components/LogoMarquee";
import { hiringPartnerLogos } from "@/data/partnerLogos";
import { toast } from "@/components/ui/use-toast";

// --- STATIC DATA SECTIONS ---

const careerSupport = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Resume & LinkedIn Profile Building",
    description: "One-on-one resume review, ATS optimization, LinkedIn profile enhancement, GitHub portfolio guidance",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Interview Preparation",
    description: "DSA practice, system design, domain-specific questions, mock interviews with industry professionals",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "HR & Behavioral Interview Coaching",
    description: "STAR method training, communication skills, situational judgment, group discussions",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Aptitude & Reasoning Training",
    description: "Quantitative aptitude, logical reasoning, verbal comprehension, company-specific test prep",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certification Preparation",
    description: "AWS, Azure, GCP certifications. Industry-recognized credentials to boost your resume",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Industry Networking & Guest Lectures",
    description: "Guest lectures from industry leaders, networking events, company visits, hackathons",
  },
];

const careerOutcomes = [
  {
    program: "PG Diploma in AI-ML & Agentic AI Engineering",
    roles: [
      "AI Engineer / Machine Learning Engineer",
      "Generative AI Engineer",
      "Prompt Engineering Specialist",
      "MLOps Engineer",
      "AI Consultant / GenAI Consultant",
    ],
  },
  {
    program: "PG Diploma in AI Driven Cloud based Software Development",
    roles: [
      "Full-Stack Developer",
      "Backend Engineer (Java / Spring Boot)",
      "Frontend Engineer (React / Next.js)",
      "DevOps Engineer",
      "Software Development Engineer (SDE)",
    ],
  },
  {
    program: "PG Diploma in GenAI-Powered Data Science & Engineering",
    roles: [
      "Data Engineer",
      "Data Scientist",
      "Cloud Data Engineer",
      "Analytics Engineer",
      "MLOps Engineer",
    ],
  },
];

const PARTNER_API_TIMEOUT = 12000;

// ------------------------------------------------------------------
// TODO: PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
// It should look like: https://script.google.com/macros/s/AKfycbx.../exec
// ------------------------------------------------------------------
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxS4wicIl7V0uDe-nDWHv4kyJOZ5-ol1LY7unZ2Ev9fWAzEuBHGIMOUjDny-V-5Qbz1UA/exec"; 

const Placements = () => {
  const [isSubmittingPartnerForm, setIsSubmittingPartnerForm] = useState(false);
  const [partnerFormFeedback, setPartnerFormFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handlePartnerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmittingPartnerForm) return;

    // 1. Validation
    if (GOOGLE_SCRIPT_URL === "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE") {
      toast({
        title: "Configuration Error",
        description: "Please configure the Google Script URL in the code.",
        variant: "destructive",
      });
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    
    const payload = {
      fullName: (data.get("fullName") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      expertise: (data.get("expertise") as string)?.trim(),
      linkedinUrl: (data.get("linkedinUrl") as string)?.trim(),
      message: (data.get("message") as string)?.trim(),
    };

    if (!payload.fullName || !payload.email || !payload.linkedinUrl || !payload.message) {
      toast({
        title: "Missing information",
        description: "Full name, email, LinkedIn URL, and message are required.",
        variant: "destructive",
      });
      return;
    }

    if (payload.message.length < 20) {
      toast({
        title: "Message too short",
        description: "Please add at least 20 characters so we can review your expertise.",
        variant: "destructive",
      });
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), PARTNER_API_TIMEOUT);

    try {
      setIsSubmittingPartnerForm(true);
      setPartnerFormFeedback(null);

      // 2. Send Data to Google Sheets
      // We use 'no-cors' behavior by sending text/plain to avoid preflight OPTION requests
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
        signal: controller.signal,
      });

      // 3. Handle Success
      // (Note: With Google Scripts & React, we assume success if fetch didn't crash)
      setPartnerFormFeedback({
        type: "success",
        message: "Thank you! Our partnerships team will get in touch soon.",
      });
      toast({
        title: "Application received",
        description: "Our partnerships team will reach out shortly.",
      });
      form.reset();

    } catch (error) {
      // 4. Handle Error
      const isAbortError = error instanceof DOMException && error.name === "AbortError";
      const description = isAbortError
        ? "The request timed out. Please check your connection."
        : "Unable to reach the server. Please try again.";

      setPartnerFormFeedback({ type: "error", message: description });
      toast({
        title: "Failed to submit",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmittingPartnerForm(false);
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Career Support & <span className="bg-gradient-primary bg-clip-text text-transparent">Placement Assistance</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We are committed to your career transformation. Our comprehensive career support services delivered through our operating partner M/s. Futurense Technologies Pvt. Ltd. ensure you graduate not just with technical skills, but with the confidence, network, and readiness to succeed in competitive job markets.
            </p>
          </div>
        </div>
      </section>

      {/* Career Support Framework */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Career Support Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six comprehensive pillars supporting your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careerSupport.map((service, index) => (
              <Card 
                key={index}
                className={`hover:shadow-large transition-all duration-300 animate-fade-in ${styles[`delay${index * 100}`]}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary-foreground">{service.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
              Our Hiring Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Organizations that collaborate with IIT Gandhinagar to empower future-ready talent.
            </p>
          </div>

          <LogoMarquee
            hiringTop={{
              logos: hiringPartnerLogos,
              leftToRight: true,
              duration: 18,
            }}
          />
        </div>
      </section>


      {/* Career Outcomes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Career Outcomes by Program
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {careerOutcomes.map((outcome, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-large transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 text-lg">{outcome.program}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Typical Job Roles:</h4>
                      <ul className="space-y-1">
                        {outcome.roles.map((role, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary">•</span>
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Commitment */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
                  Our Placement Commitment
                </h2>
                <p className="text-muted-foreground mb-6 text-center">
                  While we do not guarantee placements, we are deeply committed to:
                </p>
                <div className="space-y-3">
                  {[
                    "100% Career Support – Every student receives dedicated career coaching",
                    "Industry Connections – Access to our network of hiring partners and alumni",
                    "Continuous Guidance – Support continues even after program completion",
                    "Skill Validation – Rigorous training ensures you meet industry standards",
                    "Confidence Building – Mock interviews and feedback until you're ready",
                  ].map((commitment, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-muted-foreground">{commitment}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-foreground font-semibold mt-8">
                  Your success is our success. We invest in your career transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria for Placement */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
                  Eligibility Criteria for Placement
                </h2>
                <div className="space-y-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">•</span>
                    </div>
                    <p className="text-foreground font-medium">7.0+ CGPA Maintained throughout the program</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">•</span>
                    </div>
                    <p className="text-foreground font-medium">95%+ Attendance Consistent attendance required</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">•</span>
                    </div>
                    <p className="text-foreground font-medium">12+ Projects Deployed with live links</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">•</span>
                    </div>
                    <p className="text-foreground font-medium">&gt;70% or &gt;7.0 CGPA in Class 12th or equivalent exam</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">•</span>
                    </div>
                    <p className="text-foreground font-medium">&gt;60% or &gt;6.0 CGPA in completed previous semesters with no backlogs.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  *Conditions Apply
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner With Us Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
              Partner With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Are you a freelancer or professional looking to contribute to our programs? Join our network of industry experts.
            </p>
            <Card className="shadow-large">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handlePartnerSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                        placeholder="Enter your full name"
                        aria-label="Full Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                        placeholder="Enter your email address"
                        aria-label="Email Address"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="expertise" className="text-sm font-medium text-foreground">Expertise Area</label>
                    <select 
                      id="expertise"
                      name="expertise"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      aria-label="Area of Expertise"
                      title="Select your area of expertise"
                    >
                      <option value="">Select your area of expertise</option>
                      <option value="ai">AI/ML Engineering</option>
                      <option value="software">Software Development</option>
                      <option value="data">Data Science</option>
                      <option value="cloud">Cloud Computing</option>
                      <option value="devops">DevOps</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="text-sm font-medium text-foreground">LinkedIn Profile</label>
                    <input
                      id="linkedin"
                      name="linkedinUrl"
                      type="url"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                      placeholder="Enter your LinkedIn profile URL"
                      aria-label="LinkedIn Profile URL"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tell us about your experience and how you'd like to contribute..."
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    variant="cta"
                    className="w-full rounded-full py-3 text-sm font-semibold"
                    disabled={isSubmittingPartnerForm}
                  >
                    {isSubmittingPartnerForm ? "Submitting..." : "Submit Application"}
                  </Button>
                  {partnerFormFeedback && (
                    <p
                      className={`text-sm text-center ${
                        partnerFormFeedback.type === "success" ? "text-emerald-600" : "text-destructive"
                      }`}
                      role="status"
                      aria-live="assertive"
                    >
                      {partnerFormFeedback.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;
