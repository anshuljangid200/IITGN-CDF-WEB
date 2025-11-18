import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  category?: string;
}

const FAQAccordion = ({ faqs, category }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {category && (
        <h3 className="text-xl font-bold text-foreground mb-4">{category}</h3>
      )}
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden bg-card"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-foreground pr-4">{faq.question}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                openIndex === index && "transform rotate-180"
              )}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 py-4 border-t border-border bg-muted/20 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
