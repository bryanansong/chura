"use client";

import { cn } from "@/lib/utils";
import type { Feature, FeatureType } from "@/lib/types/avatar";
import {
  SidebarMenuButton,
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

interface FeatureSelectorProps {
  features: Feature[];
  selectedFeature: FeatureType;
  onSelectFeature: (feature: FeatureType) => void;
}

export function FeatureSelector({
  features,
  selectedFeature,
  onSelectFeature,
}: FeatureSelectorProps) {
  return (
    <Sidebar collapsible="none" className="w-full lg:w-[250px] border-r">
      <SidebarHeader>
        <div className="hidden items-center gap-2 p-4 lg:flex lg:p-5">
          <Image
            width={30}
            height={30}
            alt="logo"
            src="https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/public/chura-logo.svg"
          />
          <span className="text-2xl lg:text-3xl">Chura</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="grid grid-cols-5 gap-2 p-2 lg:flex lg:flex-col lg:gap-6 lg:p-3 lg:h-full lg:justify-center">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <SidebarMenuButton
                asChild
                key={feature.id}
                className={cn(
                  "flex-shrink-0 justify-center lg:justify-start gap-2 h-12 lg:w-auto lg:h-9 w-full",
                  selectedFeature === feature.type && "bg-muted"
                )}
                onClick={() => onSelectFeature(feature.type)}
              >
                <a href="#" className="flex flex-col lg:flex-row items-center">
                  <Icon className="h-6 w-6 lg:h-12 lg:w-12" />
                  <span className="hidden lg:inline text-lg">
                    {feature.label}
                  </span>
                </a>
              </SidebarMenuButton>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
