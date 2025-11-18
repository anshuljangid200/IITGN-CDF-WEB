import {
  ClipboardList,
  UserCheck,
  FileCheck,
  CheckCircle2,
  PenLine,
  Check,
  Layers,
  CreditCard,
  Home as HomeIcon,
  CalendarDays,
  RefreshCw,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: <PenLine className="w-6 h-6" />,
    title: "Create Your Applicant Profile",
    description:
      "Gather transcripts, resume, statement of purpose, and evidence of programming proficiency before you begin.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Online Application Submission",
    description:
      "Fill the IITGN CDF application form, upload verified documents, and select your preferred program track.",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Academic & Portfolio Review",
    description:
      "Admissions committee reviews academic performance, project portfolio, and statement of purpose for alignment.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Technical Interaction",
    description:
      "Shortlisted applicants may be invited for a technical conversation or coding assignment to validate readiness.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Offer, Fee & Onboarding",
    description:
      "Receive the formal offer, complete fee formalities as per schedule, and get onboarded to campus-life briefings.",
  },
];

const degreeCriteria = [
  "B.Tech / B.E. / B.S. (4-year) with minimum 50% marks or 5.0 CPI/CGPA (10-point scale)",
  "M.Sc., MCA, Integrated M.Sc./M.Tech, BS-MS (5-year programs) with minimum 50% marks or 5.0 CPI/CGPA",
];

const additionalRequirements = [
  "Proficiency in at least one programming language",
  "Basic understanding of mathematics & statistics",
  "Good written and spoken communication skills",
];

const careerSupport = [
  "Dedicated placement support team",
  "Resume building & portfolio preparation",
  "Mock interviews & communication grooming",
  "Industry mentor interaction sessions",
  "Placement opportunities through IITGN CDF’s partner network",
];

const feeCards = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Program Fee",
    details:
      "Shared with shortlisted candidates; covers tuition, learning resources, labs, industry immersions, and academic services.",
  },
  {
    icon: <HomeIcon className="w-6 h-6" />,
    title: "Hostel & Accommodation",
    details:
      "Residential stay on campus is mandatory. Hostel, utilities, and dining services are coordinated through IITGN CDF.",
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Payment Schedule",
    details:
      "Structured installments: acceptance advance, pre-program payment, and balance before module two. EMI options available via partners.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Refund Policy",
    details:
      "Refunds follow institutional guidelines. Any withdrawal requests are processed as per IITGN CDF’s published timelines.",
  },
];

const feeBreakdown = [
  {
    label: "Academic Fee",
    amount: "₹5,00,000",
    description: "Includes GST and covers tuition, labs, industry immersions, and academic services.",
  },
  {
    label: "Residential & Operations Fee",
    amount: "₹1,25,000 + 5% GST",
    description: "Mandatory on-campus stay with hostel, utilities, dining, and student services.",
  },
  {
    label: "Application Fee",
    amount: "₹3,000",
    description: "One-time non-refundable application processing charge.",
  },
];

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ---------------- HERO SECTION (PLACEMENTS STYLE) ---------------- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

            {/* ICON */}
            <ClipboardList className="w-16 h-16 text-primary mx-auto mb-6" />

            {/* TITLE */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Start Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Application
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Submit your IITGN-CDF application, showcase your portfolio, and unlock immersive
              residential learning designed for ambitious engineers and technologists.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-medium"
            >
              <a
                href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462"
                target="_blank"
                rel="noopener noreferrer"
              >
                Begin Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Journey + Eligibility */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
            <article className="rounded-[2.5rem] border border-border/70 bg-card/95 p-6 sm:p-8 lg:p-10 shadow-large">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Application Process</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Follow these simple steps to complete your application
                </p>
              </div>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-soft">
                        {index + 1}
                      </span>
                      {index < steps.length - 1 && <span className="mt-2 h-full w-px bg-border/70" aria-hidden="true" />}
                    </div>
                    <div className="flex-1 rounded-2xl border border-border/80 bg-muted/30 p-5 shadow-soft">
                      <div className="flex items-center gap-3 text-primary">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <Card className="rounded-[2rem] border border-border/70 shadow-large">
              <CardHeader className="space-y-3">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">Eligibility Criteria</CardTitle>
                <CardDescription className="text-base lg:text-lg">
                  Applicants must hold one of the following degrees in relevant fields:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <ul className="space-y-3 text-muted-foreground">
                  {degreeCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl bg-primary/5 border border-primary/20 p-5">
                  <h4 className="text-base font-semibold text-primary mb-2">Additional Consideration</h4>
                  <p className="text-muted-foreground">
                    Candidates with strong programming skills or industry experience may be considered even with slightly lower grades (Academic Committee discretion).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Additional Requirements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {additionalRequirements.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-secondary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Assistance */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
            <div className="rounded-[2.5rem] bg-gradient-hero p-10 text-center lg:text-left shadow-large text-primary-foreground">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Career Assistance & Placement Support</h2>
              <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
                Dedicated mentors guide you through resume building, mock interviews, and partner-led placement
                opportunities anchored by IITGN CDF&apos;s network.
              </p>
            </div>
            <Card className="shadow-large border border-border/70 rounded-[2.25rem]">
              <CardContent className="p-6 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {careerSupport.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-border/80 p-4 hover:border-primary/40 transition-colors bg-muted/20"
                    >
                      <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 space-y-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Fees Structure & Refund Policy</h2>
            <p className="text-lg text-muted-foreground mt-3">
              Transparent view of financial planning for IITGN CDF programs.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-border/70 bg-card/90 shadow-large">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-muted/60 text-muted-foreground uppercase tracking-wide text-xs">
                <tr>
                  <th className="px-6 py-4 font-semibold">Component</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                  <th className="px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {feeBreakdown.map((row) => (
                  <tr key={row.label} className="border-t border-border/60">
                    <td className="px-6 py-4 font-semibold text-foreground">{row.label}</td>
                    <td className="px-6 py-4 text-primary font-semibold">{row.amount}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-6 py-4 text-xs text-muted-foreground bg-muted/40">
              * Detailed payment schedules are shared with admitted cohorts. Financing and EMI support is available through IITGN CDF partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feeCards.map((card) => (
              <Card key={card.title} className="h-full border border-border/80 shadow-soft">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{card.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Placeholder */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[2.5rem] border border-dashed border-primary/40 bg-muted/40 p-8 lg:p-12 text-center shadow-soft">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Refund Policy</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A detailed refund policy document will be published shortly. Stay tuned for the formal schedule and procedural steps shared with every admitted learner.
            </p>
            <p className="text-sm text-muted-foreground/80 mt-6 max-w-2xl mx-auto">{feeCards[3].details}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-large animate-scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Ready to Apply?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Don&apos;t miss this opportunity to advance your career with an IIT Gandhinagar Competency Development Foundation Program.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large">
              <a
                href="https://admission.futurense.com/?program=IITGPGD&gmid=KN462"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Application
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;

