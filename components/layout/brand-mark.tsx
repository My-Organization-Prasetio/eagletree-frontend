import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center h-14">
      <Image
        className="block h-auto w-auto object-contain"
        src="/eagletree-logo.png"
        alt="Eagletree"
        width={compact ? 78 : 88}
        height={compact ? 50 : 56}
      />
    </span>
  );
}
