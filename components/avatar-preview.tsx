import React from "react";
import { Button } from "./ui/button";

import type { AvatarState, FeatureType } from "@/lib/types/avatar";
import { featureOptions } from "../data/features";

interface AvatarPreviewProps {
  selectedOptions: AvatarState;
}

export function AvatarPreview({ selectedOptions }: AvatarPreviewProps) {
  return (
    <div className="flex flex-col bg-[#F4F4F1] flex-1 w-full justify-center items-center gap-20 p-20">
      <div className="relative aspect-square bg-white rounded-full w-96 h-96 shadow-md">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="h-full w-full"
        >
          {Object.entries(selectedOptions).map(([type, optionId]) => {
            const option = featureOptions[type as FeatureType].find(
              (opt) => opt.id === optionId
            );
            if (!option) return null;
            return (
              <g
                key={option.id}
                dangerouslySetInnerHTML={{ __html: option.imageUrl || "" }}
              />
            );
          })}
        </svg>
      </div>
      <div className="flex flex-col gap-10 min-w-60">
        <Button>Download</Button>
        <Button>Copy to Clipboard</Button>
      </div>
    </div>
  );
}
