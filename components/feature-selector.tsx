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
    <Sidebar collapsible="none" className="w-[250px] border-r">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-5">
          <Image
            width={30}
            height={30}
            alt="logo"
            src="https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/public/chura-logo.svg"
          />
          <span className="text-3xl">Chura</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-6 p-3 h-full justify-center">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <SidebarMenuButton
                asChild
                key={feature.id}
                className={cn(
                  "justify-start gap-2 h-9",
                  selectedFeature === feature.type && "bg-muted"
                )}
                onClick={() => onSelectFeature(feature.type)}
              >
                <a href="#">
                  <Icon className="h-12 w-12" />
                  <span className="text-lg">{feature.label}</span>
                </a>
              </SidebarMenuButton>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
