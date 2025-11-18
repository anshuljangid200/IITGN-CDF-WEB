import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  number: number;
  title: string;
  credits: number;
  topics: string;
  outcomes: string[];
}

interface ModuleAccordionProps {
  modules: Module[];
}

const ModuleAccordion = ({ modules }: ModuleAccordionProps) => {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-medium transition-shadow"
        >
          <button
            onClick={() => toggleModule(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                {module.number}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{module.credits} Credits</p>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-muted-foreground transition-transform",
                openModule === index && "transform rotate-180"
              )}
            />
          </button>
          
          {openModule === index && (
            <div className="px-6 py-4 border-t border-border bg-muted/20 animate-fade-in">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Topics Covered:</h4>
                  <p className="text-muted-foreground">{module.topics}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Learning Outcomes:</h4>
                  <ul className="space-y-2">
                    {module.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModuleAccordion;
