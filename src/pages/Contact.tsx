import { MapPin, Mail, Phone, Clock, Plane, Train, Car, Linkedin, Twitter, Facebook, Instagram, Youtube, SendIcon } from "lucide-react";
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

const Contact = () => {
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
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-medium">
                <a href="mailto:cdf@iitgn.ac.in">Email IITGN-CDF</a>
              </Button>

              <Button asChild size="lg" variant="outline">
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
                  "Mail: cdf@iitgn.ac.in",
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
                  "9:00 AM – 6:00 PM IST",
                  "",
                  "Saturday",
                  "9:00 AM – 1:00 PM IST"
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
              <form onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "Message sent successfully",
                  description: "We'll get back to you within 24-48 hours.",
                });
              }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is your message about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                  <SendIcon className="w-4 h-4 mr-2" />
                  Get in Touch!
                </Button>
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
                  <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                    <a href="mailto:visit@iitgncdf.ac.in">Email to Schedule Visit</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
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
                <Button key={index} asChild variant="outline" className="w-full">
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
