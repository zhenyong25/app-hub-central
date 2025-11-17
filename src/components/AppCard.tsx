import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  url: string;
  environment?: "production" | "staging";
  iconColor?: string;
}

export const AppCard = ({ name, description, icon: Icon, url, environment, iconColor }: AppCardProps) => {
  const bgColorClass = iconColor ? `bg-${iconColor}/10` : "bg-primary/10";
  const bgHoverClass = iconColor ? `group-hover:bg-${iconColor}/20` : "group-hover:bg-primary/20";
  const iconColorClass = iconColor ? `text-${iconColor}` : "text-primary";
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <Card className="p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/10 border-border relative">
        {environment && (
          <Badge 
            variant={environment === "production" ? "default" : "secondary"}
            className="absolute top-3 right-3 text-xs"
          >
            {environment === "production" ? "PROD" : "STAGING"}
          </Badge>
        )}
        <div className="flex flex-col items-center text-center space-y-4 flex-1">
          <div className={`p-4 rounded-xl ${bgColorClass} ${bgHoverClass} transition-colors`}>
            <Icon className={`w-8 h-8 ${iconColorClass}`} />
          </div>
          <div className="space-y-1 flex-1 flex flex-col justify-center">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </a>
  );
};
