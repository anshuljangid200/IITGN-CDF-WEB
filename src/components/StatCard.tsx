interface StatCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

const StatCard = ({ icon, value, label, description }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      {icon && (
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
          {icon}
        </div>
      )}
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-foreground">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
