import { ReactNode } from "react";

interface CategorySectionProps {
  title: string;
  children: ReactNode;
}

export const CategorySection = ({ title, children }: CategorySectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="h-px flex-1 bg-border"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};
