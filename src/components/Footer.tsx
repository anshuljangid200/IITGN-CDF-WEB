import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border mt-12 lg:mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img src="/logo2.png" alt="IITGN logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-base">IITGN CDF</h3>
                <p className="text-xs text-muted-foreground">Competency Development Foundation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering professionals with career-ready, skill-focused learning in Gen AI powered programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/admissions#refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://iitgn.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">
                  IITGN Website
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gen-ai-data-science" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">PG Diploma in GenAI-Powered Data Science & Engineering</span>
                </Link>
              </li>
              <li>
                <Link to="/gen-ai-software-cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">PG Diploma in AI Driven Cloud based Software Development</span>
                </Link>
              </li>
              <li>
                <Link to="/gen-ai-agentic-aiml" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">PG Diploma in AI-ML & Agentic AI Engineering</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-base">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@iitgn.ac.in" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium break-all">
                  cdf@iitgn.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+917923951100" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                  +91-79-2395-2278
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  IIT Gandhinagar,<br />Palaj, Gujarat - 382055
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; 2025 IIT Gandhinagar Competency Development Foundation Programs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
