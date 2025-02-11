"use client";

import * as React from "react";
import { features, featureOptions } from "@/data/features";
import type { AvatarState, FeatureType } from "@/lib/types/avatar";
import { FeatureSelector } from "@/components/feature-selector";
import { OptionGrid } from "@/components/option-grid";
import { AvatarPreview } from "@/components/avatar-preview";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function AvatarCustomizer() {
  const [selectedFeature, setSelectedFeature] =
    React.useState<FeatureType>("skin-tone");
  const [selectedOptions, setSelectedOptions] = React.useState<AvatarState>({});

  const handleSelectOption = (optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [selectedFeature]: optionId,
    }));
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen lg:h-screen w-full max-lg:flex-col-reverse">
        <FeatureSelector
          features={features}
          selectedFeature={selectedFeature}
          onSelectFeature={setSelectedFeature}
        />
        <Sidebar collapsible="none" className="w-[400px] border-r">
          <SidebarHeader>
            <div className="flex items-center justify-between border-b px-2 py-2">
              <h2 className="text-lg font-semibold capitalize">
                {selectedFeature.replace("-", " ")}
              </h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <OptionGrid
              options={featureOptions[selectedFeature]}
              selectedOption={selectedOptions[selectedFeature]}
              onSelectOption={handleSelectOption}
            />
          </SidebarContent>
        </Sidebar>

        <AvatarPreview selectedOptions={selectedOptions} />
      </div>
    </SidebarProvider>
  );
}
