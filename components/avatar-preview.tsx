import React from "react";
import { Button } from "./ui/button";

import type { AvatarState, FeatureType } from "@/lib/types/avatar";
import { featureOptions } from "../data/features";

interface AvatarPreviewProps {
  selectedOptions: AvatarState;
}

const modifySupabaseUrl = (
  url: string,
  insertSegment: string,
  afterSegment: string
) => {
  try {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split("/");

    // Find index of the specified segment
    const insertIndex = pathSegments.indexOf(afterSegment);
    if (insertIndex !== -1) {
      pathSegments.splice(insertIndex + 1, 0, insertSegment);
    } else {
      throw new Error(`Segment "${afterSegment}" not found in URL path.`);
    }

    // Construct the new URL
    urlObj.pathname = pathSegments.join("/");

    console.log("New urllllll: \n", urlObj.toString());
    return urlObj.toString();
  } catch (error) {
    console.error("Error modifying URL:", error);
    return null;
  }
};

export function AvatarPreview({ selectedOptions }: AvatarPreviewProps) {
  return (
    <div className="flex flex-col bg-[#F4F4F1] flex-1 w-full justify-center items-center gap-20 p-20">
      <div className="relative flex justify-center items-center aspect-square bg-white rounded-full w-96 h-96 shadow-md p-10">
        {selectedOptions.hair && (
          <img
            src={
              modifySupabaseUrl(
                featureOptions["hair"].filter(
                  (val) => val.id === selectedOptions["hair"]
                )[0].imageUrl || "",
                featureOptions["skin-tone"].filter(
                  (val) => val.id === selectedOptions["skin-tone"]
                )[0]?.label || "",
                "hair"
              ) || ""
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
            className="absolute ml-20 w-[36%] mt-[180px] object-contain"
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
            className="absolute ml-20 mt-14 w-2/5 h-1/2 object-contain"
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
