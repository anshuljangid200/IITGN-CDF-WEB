import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

const TestimonialCard = ({ name, role, company, quote }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-large transition-all duration-300">
      <CardContent className="p-6">
        <Quote className="w-10 h-10 text-primary/30 mb-4" />
        <p className="text-muted-foreground italic mb-6 leading-relaxed">"{quote}"</p>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
