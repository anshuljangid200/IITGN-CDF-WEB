import {
  ArrowRight,
  Brain,
  Database,
  Cloud,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Board from "@/components/Board";
import LogoMarquee from "@/components/LogoMarquee";
import CarouselBackground from "@/components/CarouselBackground";
import { hiringPartnerLogos, trustedCompanyLogos } from "@/data/partnerLogos";

import ProgramHighlights from "../components/ProgramHighlights";

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
          <div className="inline-flex items-center space-x-2 bg-black/40 text-primary-foreground px-4 py-2 rounded-full mb-4 backdrop-blur-lg border border-white/20 shadow-md mx-auto">
            <span>Experience World-Class Education</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Build Your Future with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Career-Ready Skills
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your career with IIT Gandhinagar's Competency Development
            Foundation Programs in Data Science, AI, Agentic AI, and Software
            Development with Generative AI and Cloud.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <Button
              asChild
              size="sm"
              className="bg-gradient-primary hover:opacity-90 shadow-medium group px-5 py-2 text-sm font-medium rounded-full"
            >
              <Link to="/admissions" className="flex items-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-2 hover:bg-muted px-5 py-2 text-sm font-medium rounded-full"
            >
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Highlights (Tab Layout) */}
      <ProgramHighlights />

      {/* Board Section */}
      <section className="bg-muted/30">
        <Board />
      </section>

      {/* Hiring Partners */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6">
              <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">
                Our Hiring Partners
              </h3>
              <p className="text-center text-sm text-muted-foreground mb-4">
                Organizations that collaborate with IIT Gandhinagar to empower future-ready talent.
              </p>

              <LogoMarquee
                hiringTop={{
                  logos: hiringPartnerLogos,
                  leftToRight: true,
                  duration: 22,
                }}
              />
            </div>

            <div className="bg-card rounded-2xl p-6">
              <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-foreground/90 mb-4">
                Trusted by Leading Companies
              </h3>
              <p className="text-center text-sm text-muted-foreground mb-4">
                Our graduates are trusted by these industry leaders.
              </p>

              <LogoMarquee
                trusted={{
                  logos: trustedCompanyLogos,
                  leftToRight: false,
                  duration: 12,
                }}
              />
            </div>
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

            <Button
              asChild
              size="sm"
              className="bg-white text-primary hover:bg-white/90 shadow-large group px-6 py-2 text-sm font-semibold rounded-full"
            >
              <Link
                to="/admissions"
                className="flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
