export type FeatureType =
  | "skin-tone"
  | "hair"
  | "facial-expression"
  | "facial-hair"
  | "accessories";

export interface Feature {
  id: string;
  type: FeatureType;
  icon: any;
  label: string;
}

export interface FeatureOption {
  id: string;
  type: FeatureType;
  label: string;
  imageUrl?: string;
  color?: string;
}

export interface AvatarState {
  [key: string]: string | undefined;
}
