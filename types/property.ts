import { SelectCardType } from "@/types/common";

interface PropertyType extends SelectCardType {}

interface AddPropertyAddress {
  address: string;
  addressDetail: string;
  apartment: string;
  bcode: string;
  roadAddress: string;
  sido: string;
  sigungu: string;
  sigunguCode: string;
  zoneCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface CleaningAmenity extends SelectCardType {}

interface PropertyNote {
  images: string[];
  description: string;
  cleaningNotes: string;
}

interface CleaningPlaces extends SelectCardType {}

export type {
  PropertyType,
  AddPropertyAddress,
  PropertyNote,
  CleaningAmenity,
  CleaningPlaces,
};
