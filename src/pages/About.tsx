import {
  Building2,
  Target,
  Heart,
  Users,
  Award,
  Shield,
  GraduationCap,
  Home,
  Briefcase,
  Eye,
  Rocket,
  Sparkles,
  Zap,
  Network,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Board from "@/components/Board";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* DATA ARRAYS */
const missions = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Accelerate Talent for Future Technologies",
    description:
      "Develop immediately deployable learners for next-generation fields such as AI, Generative AI, Cloud Engineering, Data Science, and Intelligent Automation, ensuring they are industry-ready from day one.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Build High-Impact Career Pathways",
    description:
      "Enable meaningful career transitions through rigorous training, mentorship, and structured placement support.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Advance Research-Informed Learning",
    description:
      "Integrate IIT Gandhinagar’s academic and research strengths into applied training for real-world impact.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Nurture Innovation and Problem-Solving",
    description:
      "Develop creative, ethical, and scalable solutions to real-world challenges through hands-on, project-driven learning.",
  },
];

const whyChooseUs = [
  {
    title: "IIT Gandhinagar Pedigree",
    description:
      "Benefit from the academic excellence, research culture, and innovation ecosystem of one of India's premier institutes.",
  },
  {
    title: "Industry-Academia Bridge",
    description:
      "Our programs are co-designed with industry leaders, ensuring curriculum relevance and employability.",
  },
  {
    title: "Applied Learning Focus",
    description:
      "50-60% of program hours devoted to hands-on labs, projects, capstones, and real-world problem-solving.",
  },
  {
    title: "Emerging Technology Specialization",
    description:
      "Deep focus on Generative AI, Agentic AI, LLMs, Cloud-Native Development, MLOps, and Data Engineering.",
  },
  {
    title: "Residential Immersion",
    description:
      "Six-month intensive, on-campus programs creating a collaborative learning environment and peer network.",
  },
  {
    title: "Career Readiness",
    description:
      "Comprehensive placement support including resume building, mock interviews, certification prep, and industry connections.",
  },
];

const advantageHighlights = [
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "IIT Credential",
    description:
      "Postgraduate Diploma jointly awarded by IIT Gandhinagar and IITGN CDF with Executive Alumni Status.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: "Residential Experience",
    description:
      "Live on campus with access to labs, library, maker spaces, and the holistic IIT experience.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Industry Integration",
    description:
      "Fortune-500 mentors, design partners, and project reviews to align outcomes with real-world expectations.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Placement Cell Access",
    description:
      "Shared IITGN-CDF x Futurense placement ecosystem with interview prep, mentor hours, and curated opportunities.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* -------------------------------------------------------------------- */}
      {/* ⭐ HERO SECTION — EXACT FROM FIRST FILE (NO CHANGES) ⭐ */}
      {/* -------------------------------------------------------------------- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IIT Gandhinagar CDF
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              IITGN-CDF is a Section 8 initiative that transforms IIT
              Gandhinagar's research excellence into immersive residential
              programs, aligning talent with next-generation industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* ⭐ DESCRIPTION SECTION — EXACT FROM FIRST FILE (NO CHANGES) ⭐ */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-base leading-relaxed text-muted-foreground space-y-6">
            <p>
              The IIT Gandhinagar Competency Development Foundation (CDF) is a
              Section 8 company established under the aegis of the Indian
              Institute of Technology Gandhinagar to strengthen the bridge
              between academic excellence and industry application.
            </p>
            <p>
              These programs, pioneered by IIT Gandhinagar through CDF, bring
              together the institute’s academic rigor, research expertise, and a
              strong network of industry collaborators to create meaningful
              pathways for upskilling and talent development.
            </p>
            <p>
              Guided by IIT Gandhinagar’s values of integrity, innovation, and
              impact, CDF is committed to shaping the next generation of skilled
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* ⭐ BELOW THIS POINT → EVERYTHING FROM SECOND FILE (UNCHANGED) ⭐ */}
      {/* -------------------------------------------------------------------- */}

      {/* Videos */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Experience{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IITGN
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our world-class campus and vibrant student life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Campus Tour */}
            <Card className="shadow-large overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <CardContent className="p-0 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fK9y8wiHUsk"
                    allowFullScreen
                  ></iframe>
                </CardContent>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold">
                  IIT Gandhinagar Campus Tour
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Explore our cutting-edge campus and culture
                </p>
              </CardHeader>
            </Card>

            {/* Student Life */}
            <Card className="shadow-large overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <CardContent className="p-0 aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Video coming soon</p>
                  </div>
                </CardContent>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold">
                  Student Life at IIT Gandhinagar
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  A glimpse into our vibrant learning community
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Vision */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
              <Eye className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Our Vision</h2>

            <Card className="max-w-3xl mx-auto mt-6 shadow-large">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a globally recognized platform for competency-based
                  learning, innovation, and professional excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
              <Rocket className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars guiding our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
                    {mission.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IITGN-CDF?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 group"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-primary">
                    <Zap className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="bg-muted/30">
        <Board />
      </section>

      {/* IIT Advantage */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            The IIT Advantage
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              {advantageHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card/80 p-5 shadow-soft hover:shadow-large transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {highlight.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/IIT.avif"
                alt="IIT Gandhinagar Classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Commitment to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
            </div>

            <Card className="shadow-large border-2">
              <CardContent className="p-10">
                <div className="space-y-4">
                  {[
                    {
                      title: "Academic Integrity",
                      desc: "Maintaining the highest standards of teaching and evaluation",
                      icon: <Shield className="w-5 h-5" />,
                    },
                    {
                      title: "Student Success",
                      desc: "Providing mentorship, career guidance, and lifelong learning opportunities",
                      icon: <Users className="w-5 h-5" />,
                    },
                    {
                      title: "Innovation Leadership",
                      desc: "Staying at the forefront of emerging technologies and pedagogical methods",
                      icon: <Zap className="w-5 h-5" />,
                    },
                    {
                      title: "Ethical Responsibility",
                      desc: "Promoting responsible AI development and data ethics",
                      icon: <Target className="w-5 h-5" />,
                    },
                    {
                      title: "Social Impact",
                      desc: "Contributing to national skill development and technological advancement",
                      icon: <Award className="w-5 h-5" />,
                    },
                  ].map((commitment, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-5 rounded-xl hover:bg-muted/50 transition-all hover:shadow-md group"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                        {commitment.icon}
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">{commitment.title}</h4>
                        <p className="text-muted-foreground">{commitment.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;