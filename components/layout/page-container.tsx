import type { ComponentPropsWithoutRef } from "react";

type PageContainerProps = ComponentPropsWithoutRef<"div">;

export function PageContainer({ className, ...props }: PageContainerProps) {
  return (
    <div
      {...props}
      className={[
        "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
