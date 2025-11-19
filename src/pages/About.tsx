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
      "Shared IITGN CDF x Futurense placement ecosystem with interview prep, mentor hours, and curated opportunities.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* -------------------------------------------------------------------- */}
      {/* ⭐ ENHANCED HERO SECTION ⭐ */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-8 shadow-large">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IIT Gandhinagar CDF
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              IITGN CDF is a Section 8 initiative that transforms IIT
              Gandhinagar's research excellence into immersive residential
              programs, aligning talent with next-generation industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* ⭐ ENHANCED DESCRIPTION SECTION ⭐ */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 shadow-large bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
                <p>
                The IIT Gandhinagar Competency Development Foundation (CDF) is a Section 8 company established under
                 the aegis of the Indian Institute of Technology Gandhinagar to strengthen the bridge between academic excellence and industry application.
                </p>
                <p>
                CDF is envisioned as IIT Gandhinagar’s dedicated platform for advancing professional and technical competencies through innovative, hands-on, and industry-aligned programs. 
                These programs,
                 pioneered by IIT Gandhinagar through CDF, bring together the institute’s academic rigor, research expertise, and a strong network of industry collaborators to create meaningful pathways for upskilling and talent development.
                </p>
                <p>
                By offering intensive, residential, and application-driven programs in cutting-edge technology domains such as Artificial Intelligence, 
                Data Science, Cloud Computing, Cybersecurity, Robotics, and Semiconductor Manufacturing, CDF aims to equip learners with the practical skills, depth of knowledge,
                 and confidence to meet the evolving needs of modern industries. Guided by IIT Gandhinagar’s values of integrity, innovation, and impact, CDF is committed to shaping the next generation of skilled professionals who can contribute effectively to India’s technological advancement and global competitiveness.

                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* ⭐ BELOW THIS POINT → EVERYTHING FROM SECOND FILE (UNCHANGED) ⭐ */}
      {/* -------------------------------------------------------------------- */}

      {/* Videos */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Campus Experience
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Campus Tour */}
            <Card className="group shadow-large overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1">
              <div className="relative">
                <CardContent className="p-0 aspect-video rounded-t-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fK9y8wiHUsk"
                    allowFullScreen
                    title="IIT Gandhinagar Campus Tour"
                  ></iframe>
                </CardContent>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
              <CardHeader className="p-6 bg-card/95">
                <CardTitle className="text-xl font-bold text-foreground">
                  IIT Gandhinagar Campus Tour
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Explore our cutting-edge campus and culture
                </p>
              </CardHeader>
            </Card>

            {/* Student Life */}
            <Card className="group shadow-large overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1">
              <div className="relative">
                <CardContent className="p-0 aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center rounded-t-lg">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">Video coming soon</p>
                  </div>
                </CardContent>
              </div>
              <CardHeader className="p-6 bg-card/95">
                <CardTitle className="text-xl font-bold text-foreground">
                  Student Life at IIT Gandhinagar
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  A glimpse into our vibrant learning community
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Vision */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-large">
              <Eye className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Vision</h2>

            <Card className="max-w-3xl mx-auto border-2 shadow-large bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  To create a globally recognized platform for competency-based
                  learning, innovation, and professional excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-large">
              <Rocket className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars guiding our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform">
                    <div className="text-primary-foreground">{mission.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Why Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IITGN-CDF?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our programs unique and transformative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 bg-gradient-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-primary shadow-soft group-hover:scale-110 transition-all">
                    <Zap className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Exclusive Benefits
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IIT Advantage
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the unique benefits of learning at IIT Gandhinagar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div className="space-y-4 lg:space-y-6">
              {advantageHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group flex items-start gap-4 rounded-2xl border-2 border-border/80 bg-card/80 backdrop-blur-sm p-5 lg:p-6 shadow-soft hover:shadow-large hover:border-primary/30 transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 transition-all shadow-soft">
                    <div className="group-hover:text-primary-foreground">{highlight.icon}</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-border/50 hover:border-primary/30 transition-all">
              <img
                src="/images/IIT.avif"
                alt="IIT Gandhinagar Classroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-large">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Commitment to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Core values that drive everything we do
              </p>
            </div>

            <Card className="shadow-large border-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <div className="space-y-3 lg:space-y-4">
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
                      className="group flex items-start gap-4 p-5 lg:p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all hover:shadow-md bg-card/50"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform shadow-soft flex-shrink-0">
                        {commitment.icon}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground mb-1">{commitment.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{commitment.desc}</p>
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