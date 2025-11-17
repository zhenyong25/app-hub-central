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

const COLOR_MAP = {
  default: {
    bg: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
    icon: "text-primary",
  },
  "green-200": {
    bg: "bg-green-200/40",
    hoverBg: "group-hover:bg-green-200/60",
    icon: "text-green-700",
  },
  "cyan-300": {
    bg: "bg-cyan-300/40",
    hoverBg: "group-hover:bg-cyan-300/60",
    icon: "text-cyan-300",
  },
  "yellow-600": {
    bg: "bg-yellow-600/40",
    hoverBg: "group-hover:bg-yellow-600/60",
    icon: "text-yellow-600",
  },
  "orange-200": {
    bg: "bg-orange-200/40",
    hoverBg: "group-hover:bg-orange-200/60",
    icon: "text-orange-700",
  },
  "red-200": {
    bg: "bg-red-200/40",
    hoverBg: "group-hover:bg-red-200/60",
    icon: "text-red-200",
  },
  "gray-200": {
    bg: "bg-gray-200/40",
    hoverBg: "group-hover:bg-gray-200/60",
    icon: "text-gray-700",
  },
} as const;

export const AppCard = ({
  name,
  description,
  icon: Icon,
  url,
  environment,
  iconColor,
}: AppCardProps) => {
  const colors =
    COLOR_MAP[iconColor as keyof typeof COLOR_MAP] ?? COLOR_MAP.default;

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
          <div
            className={`p-4 rounded-xl ${colors.bg} ${colors.hoverBg} transition-colors`}
          >
            <Icon className={`w-8 h-8 ${colors.icon}`} />
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
