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
    const skinToneFeature = getFeatureDetails("skin-tone", skinTone);
    if (skinToneFeature?.label && imageUrl) {
      const modifiedUrl = modifySupabaseUrl(
        imageUrl,
        skinToneFeature.label,
        "hair"
      );
      imageUrl = modifiedUrl || imageUrl;
    }
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
    <div className="flex flex-col bg-[#F4F4F1] flex-1 w-full justify-center items-center gap-6 max-sm:py-28 sm:gap-20 p-6 sm:p-20">
      <div className="relative flex justify-center items-center aspect-square bg-white rounded-full w-64 sm:w-96 h-64 sm:h-96 shadow-md p-6 sm:p-10">
        <FeatureImage
          featureType="hair"
          selectedId={selectedOptions.hair || null}
          skinTone={selectedOptions["skin-tone"] || null}
          className="h-full w-full"
        />
        <FeatureImage
          featureType="facial-expression"
          selectedId={selectedOptions["facial-expression"] || null}
          className="absolute ml-12 sm:ml-16 mt-10 sm:mt-14 w-2/5 h-1/2"
        />
        <FeatureImage
          featureType="facial-hair"
          selectedId={selectedOptions["facial-hair"] || null}
          className="absolute ml-8 sm:ml-10 w-[39%] mt-[130px] sm:mt-[180px]"
        />
        <FeatureImage
          featureType="accessories"
          selectedId={selectedOptions.accessories || null}
          className="absolute ml-1 sm:ml-2 w-[50%] mt-5 sm:mt-7"
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-5 w-64 sm:min-w-60">
        <span className="text-center text-sm text-slate-800/50">
          These don't work but support is coming soon 😊
        </span>
        <Button disabled className="w-full">
          Download
        </Button>
        <Button disabled className="w-full">
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
}
