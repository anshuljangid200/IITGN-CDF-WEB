import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTAButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
}

interface CTABannerProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  className?: string;
}

type CTAStyleVariant = "cta" | "ctaOutline" | "ctaOnDark";

const resolveVariant = (variant?: CTAButton["variant"]): CTAStyleVariant => {
  switch (variant) {
    case "outline":
      return "ctaOutline";
    case "secondary":
      return "ctaOnDark";
    default:
      return "cta";
  }
};

const CTABanner = ({ title, description, buttons, className = "" }: CTABannerProps) => {
  return (
    <div className={`bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center shadow-large ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
        {title}
      </h2>
      <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            asChild
            size="lg"
            variant={resolveVariant(button.variant)}
            className="rounded-full px-8"
          >
            <Link to={button.href}>{button.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CTABanner;
