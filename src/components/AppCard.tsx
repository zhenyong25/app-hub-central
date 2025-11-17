import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AppCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  url: string;
}

export const AppCard = ({ name, description, icon: Icon, url }: AppCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/10 border-border">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </a>
  );
};
