import type { Feature, FeatureOption, FeatureType } from "@/lib/types/avatar";
import { Grid3X3, Glasses, Smile, Scissors, Sparkles } from "lucide-react";

export const features: Feature[] = [
  {
    id: "skin-tone",
    type: "skin-tone",
    icon: Grid3X3,
    label: "Skin tone",
  },
  {
    id: "hair",
    type: "hair",
    icon: Scissors,
    label: "Hair",
  },
  {
    id: "facial-expression",
    type: "facial-expression",
    icon: Smile,
    label: "Facial Expressions",
  },

  {
    id: "facial-hair",
    type: "facial-hair",
    icon: Glasses,
    label: "Facial Hair",
  },
  {
    id: "accessories",
    type: "accessories",
    icon: Sparkles,
    label: "Accessories",
  },
];

export const featureOptions: Record<FeatureType, FeatureOption[]> = {
  "skin-tone": [
    { id: "skin-1", type: "skin-tone", label: "#694D3D", color: "#694D3D" },
    { id: "skin-2", type: "skin-tone", label: "#AE5D29", color: "#AE5D29" },
    { id: "skin-3", type: "skin-tone", label: "#D08B5B", color: "#D08B5B" },
    { id: "skin-4", type: "skin-tone", label: "#EDB98A", color: "#EDB98A" },
    { id: "skin-5", type: "skin-tone", label: "#FFDBB4", color: "#FFDBB4" },
    { id: "skin-6", type: "skin-tone", label: "#FFD11B", color: "#FFD11B" },
  ],
  hair: [
    {
      id: "afro",
      type: "hair",
      label: "Afro",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Afro.svg",
    },
    {
      id: "bun-1",
      type: "hair",
      label: "Bun-1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bun-1.svg",
    },
    {
      id: "dreads-2",
      type: "hair",
      label: "Dreads 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Dreads%202.svg",
    },
    {
      id: "hat-beanie",
      type: "hair",
      label: "hat-beanie",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/hat-beanie.svg",
    },
    {
      id: "long",
      type: "hair",
      label: "Long",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Long.svg",
    },
    {
      id: "bangs-2",
      type: "hair",
      label: "Bangs 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bangs%202.svg",
    },
    {
      id: "bun",
      type: "hair",
      label: "Bun",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bun.svg",
    },
    {
      id: "flat-top-long",
      type: "hair",
      label: "Flat Top Long",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Flat%20Top%20Long.svg",
    },
    {
      id: "hat-hip",
      type: "hair",
      label: "hat-hip",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/hat-hip.svg",
    },
    {
      id: "medium-1",
      type: "hair",
      label: "Medium 1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Medium%201.svg",
    },
    {
      id: "bangs",
      type: "hair",
      label: "Bangs",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bangs.svg",
    },
    {
      id: "buns",
      type: "hair",
      label: "Buns",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Buns.svg",
    },
    {
      id: "flat-top",
      type: "hair",
      label: "Flat Top",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Flat%20Top.svg",
    },
    {
      id: "hijab",
      type: "hair",
      label: "Hijab",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Hijab.svg",
    },
    {
      id: "medium-2",
      type: "hair",
      label: "Medium 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Medium%202.svg",
    },
    {
      id: "bantu-knots",
      type: "hair",
      label: "Bantu Knots",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bantu%20Knots.svg",
    },
    {
      id: "cornrows-2",
      type: "hair",
      label: "Cornrows 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Cornrows%202.svg",
    },
    {
      id: "gray-bun",
      type: "hair",
      label: "Gray Bun",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Gray%20Bun.svg",
    },
    {
      id: "long-afro",
      type: "hair",
      label: "Long Afro",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Long%20Afro.svg",
    },
    {
      id: "medium-3",
      type: "hair",
      label: "Medium 3",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Medium%203.svg",
    },
    {
      id: "bear",
      type: "hair",
      label: "Bear",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bear.svg",
    },
    {
      id: "cornrows",
      type: "hair",
      label: "Cornrows",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Cornrows.svg",
    },
    {
      id: "gray-medium",
      type: "hair",
      label: "Gray Medium",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Gray%20Medium.svg",
    },
    {
      id: "long-bangs",
      type: "hair",
      label: "Long Bangs",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Long%20Bangs.svg",
    },
    {
      id: "medium-bangs-2",
      type: "hair",
      label: "Medium Bangs 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Medium%20Bangs%202.svg",
    },
    {
      id: "bun-2",
      type: "hair",
      label: "Bun 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Bun%202.svg",
    },
    {
      id: "dreads-1",
      type: "hair",
      label: "Dreads 1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Dreads%201.svg",
    },
    {
      id: "gray-short",
      type: "hair",
      label: "Gray Short",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Gray%20Short.svg",
    },
    {
      id: "long-curly",
      type: "hair",
      label: "Long Curly",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/hair/Long%20Curly.svg",
    },
  ],
  "facial-expression": [
    {
      id: "angry-with-fang",
      type: "facial-expression",
      label: "Angry with Fang",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Angry%20with%20Fang.svg",
    },
    {
      id: "awe",
      type: "facial-expression",
      label: "Awe",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Awe.svg",
    },
    {
      id: "blank",
      type: "facial-expression",
      label: "Blank",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Blank.svg",
    },
    {
      id: "calm",
      type: "facial-expression",
      label: "Calm",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Calm.svg",
    },
    {
      id: "cheeky",
      type: "facial-expression",
      label: "Cheeky",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Cheeky.svg",
    },
    {
      id: "concerned-fear",
      type: "facial-expression",
      label: "Concerned Fear",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Concerned%20Fear.svg",
    },
    {
      id: "concerned",
      type: "facial-expression",
      label: "Concerned",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Concerned.svg",
    },
    {
      id: "contempt",
      type: "facial-expression",
      label: "Contempt",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Contempt.svg",
    },
    {
      id: "cute",
      type: "facial-expression",
      label: "Cute",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Cute.svg",
    },
    {
      id: "cyclops",
      type: "facial-expression",
      label: "Cyclops",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Cyclops.svg",
    },
    {
      id: "driven",
      type: "facial-expression",
      label: "Driven",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Driven.svg",
    },
    {
      id: "eating-happy",
      type: "facial-expression",
      label: "Eating Happy",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Eating%20Happy.svg",
    },
    {
      id: "explaining",
      type: "facial-expression",
      label: "Explaining",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Explaining.svg",
    },
    {
      id: "eyes-closed",
      type: "facial-expression",
      label: "Eyes Closed",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Eyes%20Closed.svg",
    },
    {
      id: "fear",
      type: "facial-expression",
      label: "Fear",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Fear.svg",
    },
    {
      id: "hectic",
      type: "facial-expression",
      label: "Hectic",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Hectic.svg",
    },
    {
      id: "loving-grin-1",
      type: "facial-expression",
      label: "Loving Grin 1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Loving%20Grin%201.svg",
    },
    {
      id: "loving-grin-2",
      type: "facial-expression",
      label: "Loving Grin 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Loving%20Grin%202.svg",
    },
    {
      id: "monster",
      type: "facial-expression",
      label: "Monster",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Monster.svg",
    },
    {
      id: "old",
      type: "facial-expression",
      label: "Old",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Old.svg",
    },
    {
      id: "rage",
      type: "facial-expression",
      label: "Rage",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Rage.svg",
    },
    {
      id: "serious",
      type: "facial-expression",
      label: "Serious",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Serious.svg",
    },
    {
      id: "smile-big",
      type: "facial-expression",
      label: "Smile Big",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Smile%20Big.svg",
    },
    {
      id: "smile-lol",
      type: "facial-expression",
      label: "Smile LOL",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Smile%20LOL.svg",
    },
    {
      id: "smile-teeth-gap",
      type: "facial-expression",
      label: "Smile Teeth Gap",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Smile%20Teeth%20Gap.svg",
    },
    {
      id: "smile",
      type: "facial-expression",
      label: "Smile",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Smile.svg",
    },
    {
      id: "solemn",
      type: "facial-expression",
      label: "Solemn",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Solemn.svg",
    },
    {
      id: "suspicious",
      type: "facial-expression",
      label: "Suspicious",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Suspicious.svg",
    },
    {
      id: "tired",
      type: "facial-expression",
      label: "Tired",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Tired.svg",
    },
    {
      id: "very-angry",
      type: "facial-expression",
      label: "Very Angry",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-expressions/Very%20Angry.svg",
    },
  ],
  "facial-hair": [
    {
      id: "none",
      type: "facial-hair",
      label: "None",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/_None.svg",
    },
    {
      id: "chin-svg",
      type: "facial-hair",
      label: "Chin",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Chin.svg",
    },
    {
      id: "full-2-svg",
      type: "facial-hair",
      label: "Full 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Full%202.svg",
    },
    {
      id: "full-3-svg",
      type: "facial-hair",
      label: "Full 3",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Full%203.svg",
    },
    {
      id: "full-4-svg",
      type: "facial-hair",
      label: "Full 4",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Full%204.svg",
    },
    {
      id: "full-svg",
      type: "facial-hair",
      label: "Full",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Full.svg",
    },
    {
      id: "goatee-1-svg",
      type: "facial-hair",
      label: "Goatee 1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Goatee%201.svg",
    },
    {
      id: "goatee-2-svg",
      type: "facial-hair",
      label: "Goatee 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Goatee%202.svg",
    },
    {
      id: "moustache-1-svg",
      type: "facial-hair",
      label: "Moustache 1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%201.svg",
    },
    {
      id: "moustache-2-svg",
      type: "facial-hair",
      label: "Moustache 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%202.svg",
    },
    {
      id: "moustache-3-svg",
      type: "facial-hair",
      label: "Moustache 3",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%203.svg",
    },
    {
      id: "moustache-4-svg",
      type: "facial-hair",
      label: "Moustache 4",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%204.svg",
    },
    {
      id: "moustache-5-svg",
      type: "facial-hair",
      label: "Moustache 5",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%205.svg",
    },
    {
      id: "moustache-6-svg",
      type: "facial-hair",
      label: "Moustache 6",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%206.svg",
    },
    {
      id: "moustache-7-svg",
      type: "facial-hair",
      label: "Moustache 7",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%207.svg",
    },
    {
      id: "moustache-8-svg",
      type: "facial-hair",
      label: "Moustache 8",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%208.svg",
    },
    {
      id: "moustache-9-svg",
      type: "facial-hair",
      label: "Moustache 9",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/facial-hair/Moustache%209.svg",
    },
  ],
  accessories: [
    {
      id: "none",
      type: "accessories",
      label: "None",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/_None.svg",
    },
    {
      id: "eyepatch",
      type: "accessories",
      label: "Eyepatch",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Eyepatch.svg",
    },
    {
      id: "glasses-2",
      type: "accessories",
      label: "Glasses 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Glasses%202.svg",
    },
    {
      id: "glasses-3",
      type: "accessories",
      label: "Glasses 3",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Glasses%203.svg",
    },
    {
      id: "glasses-4",
      type: "accessories",
      label: "Glasses 4",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Glasses%204.svg",
    },
    {
      id: "glasses-5-1",
      type: "accessories",
      label: "Glasses 5-1",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Glasses%205-1.svg",
    },
    {
      id: "glasses-5",
      type: "accessories",
      label: "Glasses 5",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Glasses%205.svg",
    },
    {
      id: "glasses",
      type: "accessories",
      label: "Glasses",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Glasses.svg",
    },
    {
      id: "sunglasses-2",
      type: "accessories",
      label: "Sunglasses 2",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Sunglasses%202.svg",
    },
    {
      id: "sunglasses",
      type: "accessories",
      label: "Sunglasses",
      imageUrl:
        "https://jdkukteudoytrofyfkzt.supabase.co/storage/v1/object/public/chura-resources/accessories/Sunglasses.svg",
    },
  ],
} as const;
