import { ReactNode, useState, Children } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CategorySectionProps {
  title: string;
  children: ReactNode;
}

export const CategorySection = ({ title, children }: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children);
  const shouldCollapse = childrenArray.length > 4;
  const displayedChildren = shouldCollapse && !isExpanded 
    ? childrenArray.slice(0, 4) 
    : childrenArray;

  return (
    <section className="space-y-6">
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="h-px flex-1 bg-border"></div>
        {shouldCollapse && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2"
          >
            {isExpanded ? (
              <>
                <span className="text-sm">Show Less</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span className="text-sm">Show More ({childrenArray.length - 4})</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedChildren}
      </div>
    </section>
  );
};
