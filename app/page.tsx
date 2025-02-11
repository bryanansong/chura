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
import Image from "next/image";

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
      <div className="relative flex min-h-screen w-full flex-col-reverse lg:h-screen lg:flex-row">
        <div className="absolute top-5 left-5 items-center gap-2 flex p-5 lg:hidden">
          <Image
            width={30}
            height={30}
            alt="logo"
            src="https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/public/chura-logo.svg"
          />
          <span className="text-2xl lg:text-3xl">Chura</span>
        </div>
        <div className="flex max-lg:flex-col">
          <FeatureSelector
            features={features}
            selectedFeature={selectedFeature}
            onSelectFeature={setSelectedFeature}
          />
          <Sidebar collapsible="none" className="w-full lg:w-[400px] border-r">
            <SidebarHeader>
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="text-2xl capitalize">
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
        </div>

        <AvatarPreview selectedOptions={selectedOptions} />
      </div>
    </SidebarProvider>
  );
}
