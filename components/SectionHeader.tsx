import { SectionHeaderProps } from "@/lib/types";

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold capitalize text-white mt-2 mb-8">
        {children}
      </h1>
    </div>
  );
}
