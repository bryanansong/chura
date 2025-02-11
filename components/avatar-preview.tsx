import React from "react";
import { Button } from "./ui/button";
import type { AvatarState, FeatureType } from "@/lib/types/avatar";
import { featureOptions } from "../data/features";

interface AvatarPreviewProps {
  selectedOptions: AvatarState;
}

const getFeatureDetails = (
  featureType: FeatureType,
  selectedId: string | null
) => {
  if (!selectedId) return null;

  const feature = featureOptions[featureType].find(
    (val) => val.id === selectedId
  );
  return feature || null;
};

const modifySupabaseUrl = (
  url: string,
  insertSegment: string,
  afterSegment: string
) => {
  try {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split("/");

    const insertIndex = pathSegments.indexOf(afterSegment);
    if (insertIndex === -1) {
      throw new Error(`Segment "${afterSegment}" not found in URL path.`);
    }

    pathSegments.splice(insertIndex + 1, 0, insertSegment);
    urlObj.pathname = pathSegments.join("/");
    return urlObj.toString();
  } catch (error) {
    console.error("Error modifying URL:", error);
    return null;
  }
};

interface FeatureImageProps {
  featureType: FeatureType;
  selectedId: string | null;
  className?: string;
  skinTone?: string | null;
}

function FeatureImage({
  featureType,
  selectedId,
  className = "",
  skinTone,
}: FeatureImageProps) {
  if (!selectedId) return null;

  const feature = getFeatureDetails(featureType, selectedId);
  if (!feature) return null;

  let imageUrl = feature.imageUrl;
  if (featureType === "hair" && skinTone) {
    const skinToneLabel = getFeatureDetails("skin-tone", skinTone)?.label;
    imageUrl =
      modifySupabaseUrl(imageUrl, skinToneLabel || "", "hair") || imageUrl;
  }

  return (
    <img
      src={imageUrl}
      alt={feature.label || "Option image"}
      className={`object-contain ${className}`}
    />
  );
}

export function AvatarPreview({ selectedOptions }: AvatarPreviewProps) {
  return (
    <div className="flex flex-col bg-[#F4F4F1] flex-1 w-full justify-center items-center gap-20 p-20">
      <div className="relative flex justify-center items-center aspect-square bg-white rounded-full w-96 h-96 shadow-md p-10">
        <FeatureImage
          featureType="hair"
          selectedId={selectedOptions.hair}
          skinTone={selectedOptions["skin-tone"]}
          className="h-full w-full"
        />
        <FeatureImage
          featureType="facial-expression"
          selectedId={selectedOptions["facial-expression"]}
          className="absolute ml-16 mt-14 w-2/5 h-1/2"
        />
        <FeatureImage
          featureType="facial-hair"
          selectedId={selectedOptions["facial-hair"]}
          className="absolute ml-10 w-[38%] mt-[180px]"
        />
        <FeatureImage
          featureType="accessories"
          selectedId={selectedOptions.accessories}
          className="absolute ml-2 w-[50%] mt-7"
        />
      </div>
      <div className="flex flex-col gap-10 min-w-60">
        <Button>Download</Button>
        <Button>Copy to Clipboard</Button>
      </div>
    </div>
  );
}
