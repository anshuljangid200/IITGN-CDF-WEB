import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  icon?: ReactNode;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

const HeroSection = ({
  icon,
  title,
  highlight,
  description,
  align = "center",
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-subtle",
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-4xl mx-auto animate-fade-in-up",
            align === "center" ? "text-center" : "text-left"
          )}
        >
          {/* ICON */}
          {icon && (
            <div
              className={cn(
                "mb-6",
                align === "center" ? "mx-auto" : ""
              )}
            >
              {icon}
            </div>
          )}

          {/* TITLE */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title}{" "}
            {highlight && (
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>

          {/* DESCRIPTION */}
          {description && (
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
