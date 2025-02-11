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
      <div className="relative flex justify-center items-center aspect-square bg-white rounded-full w-96 h-96 shadow-md p-10">
        {selectedOptions.hair && (
          <img
            src={
              featureOptions["hair"].filter(
                (val) => val.id === selectedOptions["hair"]
              )[0].imageUrl
            }
            alt={
              featureOptions["hair"].filter(
                (val) => val.id === selectedOptions["hair"]
              )[0].label || "Option image"
            }
            className="h-full w-full object-contain"
          />
        )}
        {selectedOptions.eyes && (
          <svg
            viewBox="0 0 100 100"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            {/* Eyes SVG content */}
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-10 min-w-60">
        <Button>Download</Button>
        <Button>Copy to Clipboard</Button>
      </div>
    </div>
  );
}
