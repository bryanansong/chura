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
        {selectedOptions["facial-hair"] && (
          <img
            src={
              featureOptions["facial-hair"].filter(
                (val) => val.id === selectedOptions["facial-hair"]
              )[0].imageUrl
            }
            alt={
              featureOptions["facial-hair"].filter(
                (val) => val.id === selectedOptions["facial-hair"]
              )[0].label || "Option image"
            }
            className="absolute ml-3 h-2/5 w-1/2 mt-52 object-contain"
          />
        )}
        {selectedOptions["facial-expression"] && (
          <img
            src={
              featureOptions["facial-expression"].filter(
                (val) => val.id === selectedOptions["facial-expression"]
              )[0].imageUrl
            }
            alt={
              featureOptions["facial-expression"].filter(
                (val) => val.id === selectedOptions["facial-expression"]
              )[0].label || "Option image"
            }
            className="absolute ml-14 mt-14 w-3/5 h-1/2 object-contain"
          />
        )}
        {selectedOptions.accessories && (
          <img
            src={
              featureOptions["accessories"].filter(
                (val) => val.id === selectedOptions["accessories"]
              )[0].imageUrl
            }
            alt={
              featureOptions["accessories"].filter(
                (val) => val.id === selectedOptions["accessories"]
              )[0].label || "Option image"
            }
            className="absolute inset-0 h-full w-full object-contain"
          />
        )}
      </div>
      <div className="flex flex-col gap-10 min-w-60">
        <Button>Download</Button>
        <Button>Copy to Clipboard</Button>
      </div>
    </div>
  );
}
