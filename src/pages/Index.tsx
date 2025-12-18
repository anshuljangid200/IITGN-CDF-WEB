import { ArrowRight, Brain, Database, Cloud, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Board from "@/components/Board";
import LogoMarquee from "@/components/LogoMarquee";
import CarouselBackground from "@/components/CarouselBackground";
import { hiringPartnerLogos } from "@/data/partnerLogos";

import ProgramHighlights from "../components/ProgramHighlights";
import BrochureDownloadButton from "@/components/BrochureDownloadButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <CarouselBackground />
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-5 py-2 text-sm font-semibold mb-4 shadow-sm border border-primary/20">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Experience World-Class Education</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Build Your Future with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Career-Ready Skills
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Transform your career with programs run by Competency Advancement Academy of IITGN Competency Development Foundation in Data Science, AI, Agentic AI, and Software Development with Generative AI and Cloud.
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 mb-4">
            <Button asChild variant="cta" size="lg" className="group rounded-full px-6">
              <Link to="/admissions" className="flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="ctaOutline" className="rounded-full px-6">
              <Link to="/programs">Explore Programs</Link>
            </Button>

            <BrochureDownloadButton
              size="lg"
              variant="ctaOutline"
              className="rounded-full px-6"
              label="Download Brochure"
            />
          </div>

          <div className="mt-2 text-center">
            <p className="text-base lg:text-lg font-semibold text-foreground mb-1">
              Program Start Date: <span className="text-primary">9th February 2026</span>
            </p>
            <p className="text-sm lg:text-base text-muted-foreground">
              Students will be expected to be available on campus from{" "}
              <span className="font-medium">8th February 2026</span> onwards
            </p>
            <p className="text-sm lg:text-base text-muted-foreground">M/s. Futurense Technologies Pvt. Ltd. is the Admissions, Industry and Hospitality Partner for the IITGN CDF PG Diploma Programs.</p>
          </div>
        </div>
      </section>

      {/* Program Banner Section
      <section className="py-10 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
            <img
              src="/images/Banner - Horizontal.png"
              alt="Program banner horizontal"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section> */}

      {/* Program Highlights (Tab Layout) */}
      <ProgramHighlights />

      {/* Board Section */}
      <section className="bg-muted/30">
        <Board />
      </section>

      {/* Hiring Partners */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-2xl p-6">
            <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">
              Our Hiring Partners
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-4">
              Organizations that collaborate with IIT Gandhinagar Competency Development Foundation to empower future-ready talent.
            </p>

            <LogoMarquee
              hiringTop={{
                logos: hiringPartnerLogos,
                leftToRight: true,
                duration: 22,
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-16 text-center shadow-large animate-scale-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
              Advance Your Career Today
            </h2>

            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our Competency Development Foundation Programs and build
              expertise that opens doors to roles such as Data Scientist, AI
              Engineer, Cloud Data Engineer, and more.
            </p>

            <Button asChild size="lg" variant="ctaOnDark" className="group rounded-full px-8">
              <Link to="/admissions" className="flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
