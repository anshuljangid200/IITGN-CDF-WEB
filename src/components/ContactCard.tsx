import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  link?: string;
}

const ContactCard = ({ icon, title, content, link }: ContactCardProps) => {
  const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a href={link} className="hover:text-primary transition-colors">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <Card className="hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
          <div className="text-primary-foreground">{icon}</div>
        </div>
        <h3 className="font-bold text-foreground mb-3">{title}</h3>
        <ContentWrapper>
          {Array.isArray(content) ? (
            <div className="space-y-1">
              {content.map((item, index) => (
                <p key={index} className="text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">{content}</p>
          )}
        </ContentWrapper>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
