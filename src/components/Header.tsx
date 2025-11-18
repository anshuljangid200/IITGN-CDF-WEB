import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/admissions", label: "Admissions" },
    { path: "/campus-life", label: "Campus Life" },
    { path: "/placements", label: "Placements" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="container relative mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group -ml-3 sm:-ml-5 md:-ml-6 lg:-ml-7 flex-shrink-0">
            <div className="flex items-center">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Left Circle Logo */}
                <div
                  className="w-10 h-10 sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-white shadow-soft group-hover:shadow-medium transition-all duration-300 overflow-hidden flex items-center justify-center"
                >
                  <img
                    src="/logo.png"
                    alt="CDF icon"
                    className="object-contain w-[72%] h-[72%]"
                    loading="lazy"
                  />
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-6 bg-border/40" />

                {/* Right Circle Logo */}
                <div
                  className="w-10 h-10 sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] lg:w-[66px] lg:h-[66px] rounded-full bg-white shadow-soft group-hover:shadow-medium transition-all duration-300 overflow-hidden flex items-center justify-center"
                >
                  <img
                    src="/logo2.png"
                    alt="IIT Gandhinagar logo"
                    className="object-contain w-[72%] h-[72%]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* TEXT GROUP */}
              <div className="ml-3 sm:ml-4 flex flex-col justify-center leading-tight font-sans">
                <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-foreground">
                  IITG CDF
                </span>
                <span className="text-[0.70rem] sm:text-xs md:text-sm font-medium tracking-tight text-muted-foreground">
                  Competency Development
                </span>
                <span className="text-[0.70rem] sm:text-xs md:text-sm font-medium tracking-tight text-muted-foreground">
                  Foundation
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-navigation"
          className={`md:hidden absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 origin-top space-y-2 rounded-3xl border border-border/60 bg-background/95 p-4 shadow-large transition-all duration-300 ${
            isMenuOpen
              ? "pointer-events-auto opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-2"
          }`}
          aria-hidden={!isMenuOpen}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                isActive(link.path)
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full rounded-2xl bg-gradient-primary py-3 text-base font-semibold hover:opacity-90 transition"
          >
            <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
              Apply Now
            </Link>
          </Button>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
