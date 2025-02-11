"use client";

import type { FeatureOption } from "@/lib/types/avatar";
import { cn } from "@/lib/utils";

interface OptionGridProps {
  options: FeatureOption[];
  selectedOption?: string;
  onSelectOption: (optionId: string) => void;
}

export function OptionGrid({
  options,
  selectedOption,
  onSelectOption,
}: OptionGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 p-3 sm:p-4">
      {options?.map((option) => (
        <button
          key={option.id}
          className={cn(
            "aspect-square rounded-lg border p-2 hover:bg-muted relative transition-colors",
            selectedOption === option.id && "border-primary bg-muted",
            option.color && `bg-[${option.color}]`
          )}
          onClick={() => onSelectOption(option.id)}
          style={option.color ? { backgroundColor: option.color } : undefined}
        >
          {option.imageUrl && (
            <img
              src={option.imageUrl}
              alt={option.label || "Option image"}
              className="h-full w-full object-contain"
            />
          )}
        </button>
      ))}
    </div>
  );
}
