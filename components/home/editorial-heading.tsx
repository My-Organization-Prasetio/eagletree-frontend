import type { ReactNode } from "react";

type EditorialHeadingProps = {
  identity: string;
  title: string;
  description?: string;
  action?: ReactNode;
  light?: boolean;
};

export function EditorialHeading({
  identity,
  title,
  description,
  action,
  light = false,
}: EditorialHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-3 h-0.5 rounded-full ${light ? "bg-accent-400" : "bg-accent-600"}`} aria-hidden="true" />
          <p className={`text-xs font-bold uppercase tracking-widest ${light ? "text-accent-400" : "text-accent-700"}`}>
            {identity}
          </p>
        </div>
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${light ? "text-white" : "text-brand-950"}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed ${light ? "text-brand-100/80" : "text-neutral-600"}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 mb-1">{action}</div>}
    </div>
  );
}
