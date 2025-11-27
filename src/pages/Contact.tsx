import { FormEvent, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Plane,
  Train,
  Car,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  SendIcon,
  Loader2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import HeroSection from "@/components/HeroSection";

const CONTACT_PROGRAM_OPTIONS = [
  {
    value: "aiml",
    label: "PG Diploma in AI-ML & Agentic AI Engineering",
  },
  {
    value: "data-science",
    label: "PG Diploma in GenAI-Powered Data Science & Engineering",
  },
  {
    value: "software-cloud",
    label: "PG Diploma in AI Driven Cloud based Software Development",
  },
  {
    value: "not-sure",
    label: "I'm still exploring my options",
  },
];

const API_TIMEOUT_MS = 12000;

const sanitizeText = (value: FormDataEntryValue | null) => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
};

const normalizePhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    return null;
  }
  return value.trim().startsWith("+") ? `+${digits}` : `+${digits}`;
};

const resolveApiBaseUrl = () => {
  const envUrl = (import.meta.env.VITE_API_URL as string | undefined)?.trim();
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    const isLocalHost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocalHost) {
      return "http://localhost:3333";
    }

    return window.location.origin.replace(/\/$/, "");
  }

  return "http://localhost:3333";
};

type SubmissionFeedback = {
  type: "success" | "error";
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<SubmissionFeedback | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = sanitizeText(formData.get("fullName"));
    const email = sanitizeText(formData.get("email"));
    const organization = sanitizeText(formData.get("organization"));
    const message = sanitizeText(formData.get("message"));
    const programSelection = sanitizeText(formData.get("programInterest"));
    const programInterest =
      programSelection &&
      CONTACT_PROGRAM_OPTIONS.find((option) => option.value === programSelection)?.label;
    const normalizedPhone = normalizePhoneNumber((formData.get("phone") as string) ?? "");
    const honeypot = sanitizeText(formData.get("honeypot"));

    if (!fullName || !email) {
      toast({
        title: "Missing information",
        description: "Please provide both your full name and email address.",
        variant: "destructive",
      });
      return;
    }

    if (!normalizedPhone) {
      toast({
        title: "Invalid mobile number",
        description: "Include your country code (e.g., +91) followed by 10-15 digits.",
        variant: "destructive",
      });
      return;
    }

    if (!message || message.length < 20) {
      toast({
        title: "Message is too short",
        description: "Please share at least 20 characters so we can guide you properly.",
        variant: "destructive",
      });
      return;
    }

    const payload = {
      fullName,
      email,
      phone: normalizedPhone,
      organization,
      programInterest: programInterest ?? programSelection ?? undefined,
      message,
      honeypot,
    };

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
      setIsSubmitting(true);
      setSubmissionFeedback(null);

      const response = await fetch(`${resolveApiBaseUrl()}/api/forms/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your message right now.");
      }

      const successMessage =
        result.status === "queued_for_review"
          ? "We received your submission and queued it for a quick manual review."
          : "Thank you! Our team will reach out within 24–48 hours.";

      setSubmissionFeedback({ type: "success", message: successMessage });
      toast({
        title: "Message sent successfully!",
        description: successMessage,
      });

      form.reset();
    } catch (error) {
      clearTimeout(timeoutId);
      const isAbortError = error instanceof DOMException && error.name === "AbortError";
      const fallbackMessage = isAbortError
        ? "The request timed out. Please check your connection and try again."
        : "Please try again shortly or reach out by phone/email.";
      const description =
        error instanceof Error && error.message ? error.message : fallbackMessage;

      setSubmissionFeedback({ type: "error", message: description });
      toast({
        title: "Failed to send message",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* --- HERO SECTION (UNIFIED STYLE) --- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

            {/* ICON */}
            <Phone className="w-16 h-16 text-primary mx-auto mb-6" />

            {/* TITLE */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Get in Touch with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IITGN-CDF
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We're here to guide you through admissions, campus visits, and program fit.
              Reach us directly or browse the FAQ to move forward with confidence.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Button asChild size="lg" variant="cta" className="rounded-full px-6">
                <a href="mailto:cdf@iitgn.ac.in">Email IITGN-CDF</a>
              </Button>

              <Button asChild size="lg" variant="ctaOutline" className="rounded-full px-6">
                <Link to="/faq">Browse FAQs</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ContactCard
                icon={<MapPin className="w-6 h-6" />}
                title="Address"
                content={[
                  "Room No. 101, Academic Block No. 03",
                  "IIT Gandhinagar Campus",
                  "Near Palaj Village",
                  "Gandhinagar – 382355",
                  "Gujarat, India"
                ]}
              />
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content={[
                  "Info: cdf@iitgn.ac.in",
                  "Admission: admission.cdf@iitgn.ac.in",
                ]}
              />
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                content={[
                  "Main Office: +91-79-2395-2278",
                  "Admissions Helpline: +91-79-2395-2278"
                ]}
              />
              <ContactCard
                icon={<Clock className="w-6 h-6" />}
                title="Office Hours"
                content={[
                  "Monday – Friday",
                  "10:00 AM – 6:00 PM IST"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card shadow-large rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center">
                Get in Touch!
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Have a question about our programs? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      required
                    />
                    <p className="text-xs text-muted-foreground">Include your country code (e.g., +91) followed by 10–15 digits so we can reach you internationally.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Current company or institution"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="programInterest">Program of Interest</Label>
                    <div className="relative">
                      <select
                        id="programInterest"
                        name="programInterest"
                        defaultValue=""
                        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <option value="" disabled>
                          Select a program
                        </option>
                        {CONTACT_PROGRAM_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full py-6"
                  size="lg"
                  variant="cta"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="mr-2 h-4 w-4" />
                      Get in Touch!
                    </>
                  )}
                </Button>
                {submissionFeedback && (
                  <p
                    className={`text-sm text-center ${
                      submissionFeedback.type === "success" ? "text-emerald-600" : "text-destructive"
                    }`}
                    role="status"
                    aria-live="assertive"
                  >
                    {submissionFeedback.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Campus */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Visit Our Campus
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Interested in experiencing IIT Gandhinagar firsthand? Schedule a campus tour to explore our facilities, meet faculty and current students, and learn about the residential experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Plane className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-foreground text-center mb-2">By Air</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Sardar Vallabhbhai Patel International Airport, Ahmedabad (30 km)<br />
                    Approximately 45 minutes by taxi/cab
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Train className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-foreground text-center mb-2">By Train</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Gandhinagar Capital Railway Station (8 km) – 15 minutes drive<br />
                    Ahmedabad Railway Station (25 km) – 40 minutes drive
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Car className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-bold text-foreground text-center mb-2">By Road</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Well-connected by state highways from Ahmedabad, Vadodara, and other major cities<br />
                    Ample parking available on campus
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-large">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Schedule a Campus Visit</h3>
                <p className="text-muted-foreground mb-6">
                  Campus visits are available by prior appointment only (Monday–Friday)
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="cta" className="rounded-full px-6">
                    <a href="mailto:visit@iitgncdf.ac.in">Email to Schedule Visit</a>
                  </Button>
                  <Button asChild size="lg" variant="ctaOutline" className="rounded-full px-6">
                    <a href="tel:+917923950000">Call to Schedule</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Follow us on social media for the latest updates, program announcements, and success stories.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="Follow us on LinkedIn"
                aria-label="Visit our LinkedIn profile"
              >
                <Linkedin className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="Follow us on Twitter"
                aria-label="Visit our Twitter profile"
              >
                <Twitter className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="Follow us on Facebook"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="Follow us on Instagram"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                title="Subscribe to our YouTube channel"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="w-6 h-6 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { to: "/admissions", text: "Apply Now" },
                { to: "/programs", text: "View Programs" },
                { to: "/admissions", text: "Check Eligibility" },
                { to: "/placements", text: "Career Support" },
                { to: "/faq", text: "FAQ" },
                { to: "/about", text: "About Us" },
              ].map((link, index) => (
                <Button key={index} asChild variant="ctaOutline" className="w-full rounded-full">
                  <Link to={link.to}>{link.text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
