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
      <div className="bg-white rounded-full w-96 h-96 shadow-md">.</div>
      <div className="flex flex-col gap-10 min-w-60">
        <Button>Download</Button>
        <Button>Copy to Clipboard</Button>
      </div>
    </div>
  );
}
