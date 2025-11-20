import { HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCard from "@/components/ContactCard";
import { Mail, Phone } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const generalFAQs = [
  {
    question: "What is IIT Gandhinagar Competency Development Foundation?",
    answer: "IIT Gandhinagar Competency Development Foundation (IITGN CDF) is a Section-8, not-for-profit company established by IIT Gandhinagar to deliver high-quality, industry-aligned training programs in advanced and emerging technologies.",
  },
  {
    question: "Are these programs recognized?",
    answer: "Yes. These programs are jointly awarded by IIT Gandhinagar and IITGN Competency Development Foundation as official Postgraduate Diploma programs",
  },
  {
    question: "What is the difference between a Competency Development Foundation Program and a Master's degree?",
    answer: "A CDF Postgraduate Diploma is an intensive, 6-month, skills-focused professional program designed to make learners immediately deployable in next-generation tech roles. It emphasizes hands-on training, industry tools, real-world projects, and job readiness whereas a Master’s Degree, in contrast, is a longer academic program (1–2 years) focused on research, theoretical depth, and broader scholastic outcomes.",
  },
];

const admissionsFAQs = [
  {
    question: "Can I apply if I have less than 50% marks but strong programming skills?",
    answer: "Yes. Candidates with relevant industry experience, exceptional programming skills, or strong project portfolios may be considered on a case-by-case basis, subject to Faculty Committee approval.",
  },
  {
    question: "Can fresh graduates with no work experience apply?",
    answer: "Absolutely. These programs are designed for both fresh graduates and working professionals. No prior work experience is mandatory.",
  },
  {
    question: "Are international students eligible?",
    answer: "Yes. International students meeting the eligibility criteria are welcome. Additional visa and documentation requirements apply.",
  },
  {
    question: "Can I apply to multiple programs?",
    answer: "No. Applicants may apply to only one program at a time. Since each program has a rigorous and specialized curriculum, candidates are required to choose the track that best aligns with their skills and career goals.",
  },
  {
    question: "Is there an entrance exam?",
    answer: "Yes the exam is called All India National Proficiency Test (AINPT - IITGN), A 120-minute online proctored test evaluating Quantitative Aptitude, Logical Reasoning, Technical Concepts (DSA basics, programming fundamentals), and Coding Challenges (Python/Java), with results declared within 48 hours.",
  },
];

const programFAQs = [
  {
    question: "Can I work while pursuing these programs?",
    answer: "No. These are full-time, intensive residential programs with a demanding schedule (lectures, labs, projects, and evening sessions). Participants are required to stay on campus and fully commit to the coursework, so working alongside the program is not permitted.",
  },
  {
    question: "What is the medium of instruction?",
    answer: "All programs are taught in English.",
  },
  {
    question: "What is the typical class size?",
    answer: "We maintain small batch sizes (typically 30-50 students) to ensure personalized attention, effective learning, and strong peer interaction.",
  },
  {
    question: "Will I receive an IIT Gandhinagar certificate?",
    answer: "Yes. Upon successful completion, you will receive a Competency Development Foundation Program certificate from IIT Gandhinagar.",
  },
  {
    question: "Are there any prerequisites I should complete before joining?",
    answer: "Basic programming proficiency is expected. Pre-program learning materials and preparatory assignments will be shared with admitted students.",
  },
];

const feeFAQs = [
  // {
  //   question: "What is the program fee?",
  //   answer: "Please contact our admissions office for detailed fee structure. Fee includes tuition, accommodation, meals, learning resources, and career support.",
  // },
  {
    question: "Are installment payment options available?",
    answer: "Yes. We offer flexible payment plans including installments and EMI options through partner financial institutions.",
  },
  // {
  //   question: "Are scholarships available?",
  //   answer: "Yes. We offer limited merit-based and need-based scholarships for deserving candidates. Indicate your interest in the application form.",
  // },
  {
    question: "Does the fee include accommodation and food?",
    answer: "Yes. The program fee is all-inclusive, covering tuition, hostel accommodation, mess facilities (meals), learning materials, and career support.",
  },
];

const campusFAQs = [
  {
    question: "Is accommodation mandatory?",
    answer: "Since these are residential programs, on-campus accommodation is mandatory for the full 6-month duration to ensure immersive learning.",
  },
  {
    question: "What type of accommodation is provided?",
    answer: "Students are provided hostel rooms (single or shared based on availability) with basic furnishings, internet access, and 24/7 security.",
  },
  {
    question: "Are meals included?",
    answer: "Yes. The program fee includes breakfast, lunch, and dinner at the campus mess. Both vegetarian and non-vegetarian options are available.",
  },
  {
    question: "Is the campus safe?",
    answer: "Yes. IIT Gandhinagar has 24/7 security, CCTV monitoring, and well-established safety protocols. Medical facilities are available on campus.",
  },
];

const placementsFAQs = [
  {
    question: "Are placements guaranteed?",
    answer: "While placements are not guaranteed, we provide comprehensive career support including resume building, mock interviews, industry connections, and placement assistance. Final placement depends on individual performance, market conditions, and recruiter demand.",
  },
  {
    question: "What is the average salary package?",
    answer: "Average salary packages vary by program and individual profile, typically ranging from ₹6-15 LPA for entry-level roles. Top performers secure offers of ₹15-30 LPA+ from leading companies.",
  },
  // {
  //   question: "Will I get help with interview preparation?",
  //   answer: "Yes. We provide extensive interview preparation including technical mock interviews, HR coaching, aptitude training, and certification exam preparation.",
  // },
];

const technicalFAQs = [
  {
    question: "What if I don't have a strong programming background?",
    answer: "Basic programming proficiency is required for admission. However, our programs start with foundational modules to ensure all students reach the same level before advanced topics.",
  },
  {
    question: "Do I need to know Python before joining?",
    answer: "Basic familiarity with any programming language is required. Python is taught and reinforced throughout the programs, especially in AI and Data Science tracks.",
  },
  {
    question: "Will I work on real-world projects?",
    answer: "Yes. Each program includes 3-4 major hands-on projects culminating in a comprehensive capstone project addressing real-world challenges.",
  },
  {
    question: "Will I get access to cloud computing resources?",
    answer: "Yes. Students receive cloud credits for AWS, Azure, and/or GCP to practice deployment and work on projects.",
  },
];

const postProgramFAQs = [
  {
    question: "What happens after I complete the program?",
    answer: "You receive: IIT Gandhinagar Competency Development Foundation Program certificate, access to alumni network, continued career support for job search and career transitions, and certification exam vouchers (for AWS/Azure/GCP certifications).",
  },
  {
    question: "Can I pursue further studies after this program?",
    answer: "Yes. Many graduates go on to pursue Master's degrees (M.Tech, MS) or specialized certifications. The Competency Development Foundation Program strengthens your profile for higher studies.",
  },
  {
    question: "Will I remain part of the IIT Gandhinagar community?",
    answer: "Yes. As an alumnus of IITGN-CDF, you'll have lifelong access to the alumni network, events, and continued learning opportunities.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* --- HERO SECTION (UNIFIED STYLE) --- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

            {/* ICON */}
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />

            {/* TITLE */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Browse curated answers covering admissions, residential life, and career commitment.
              Still curious? Our team is one message away.
            </p>

          </div>
        </div>
      </section>


      {/* FAQ Sections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <FAQAccordion faqs={generalFAQs} category="General Questions" />
            </div>

            <div>
              <FAQAccordion faqs={admissionsFAQs} category="Admissions & Eligibility" />
            </div>

            <div>
              <FAQAccordion faqs={programFAQs} category="Program Details" />
            </div>

            <div>
              <FAQAccordion faqs={feeFAQs} category="Fee & Scholarships" />
            </div>

            <div>
              <FAQAccordion faqs={campusFAQs} category="Campus & Facilities" />
            </div>

            <div>
              <FAQAccordion faqs={placementsFAQs} category="Placements & Career" />
            </div>

            <div>
              <FAQAccordion faqs={technicalFAQs} category="Technical Questions" />
            </div>

            <div>
              <FAQAccordion faqs={postProgramFAQs} category="Post-Program" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Have More Questions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                content="cdf@iitgn.ac.in"
                link="mailto:cd@iitgn.ac.in"
              />
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content="+91-79-2395-2278"
                link="tel:+917923952278"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
