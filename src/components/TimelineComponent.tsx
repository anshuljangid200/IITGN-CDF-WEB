interface TimelineStep {
  time?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineComponentProps {
  steps: TimelineStep[];
  variant?: "vertical" | "horizontal";
}

const TimelineComponent = ({ steps, variant = "vertical" }: TimelineComponentProps) => {
  if (variant === "horizontal") {
    return (
      <div className="relative">
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-primary hidden lg:block" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-medium mb-4 relative z-10">
                  {step.icon || index + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary" />
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-medium">
              {step.icon || index + 1}
            </div>
            <div>
              {step.time && (
                <span className="text-sm font-semibold text-primary">{step.time}</span>
              )}
              <h3 className="font-bold text-foreground text-lg mt-1">{step.title}</h3>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
