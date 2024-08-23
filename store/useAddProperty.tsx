import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { AddPropertyRoutes } from "@/constants/routes";
import {
  AddPropertyAddress,
  CleaningAmenity,
  CleaningPlaces,
} from "@/types/property";

export interface AddPropertyState {
  spaceType: string;
  spaceLocation: AddPropertyAddress;
  spaceDetails: {
    name: string;
    description: string;
    size: number;
    rooms: number;
    beds: number;
    bathrooms: number;
  };
  cleaningAmenities: CleaningAmenity[];
  cleaningPlaces: CleaningPlaces[];

  setSpaceType: (type: string) => void;
  setSpaceLocation: (location: AddPropertyAddress) => void;
  setSpaceDetails: (details: Partial<AddPropertyState["spaceDetails"]>) => void;
  setCleaningAmenities: (amenities: CleaningAmenity[]) => void;
  setCleaningPlaces: (places: CleaningPlaces[]) => void;

  isStepValid: (routeName: string) => boolean;
}

const useAddPropertyStore = create(
  subscribeWithSelector<AddPropertyState>((set, get) => ({
    spaceType: "",
    spaceLocation: {
      address: "",
      addressDetail: "",
      apartment: "",
      bcode: "",
      roadAddress: "",
      sido: "",
      sigungu: "",
      sigunguCode: "",
      zoneCode: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
    spaceDetails: {
      name: "",
      description: "",
      size: 0,
      rooms: 0,
      beds: 0,
      bathrooms: 0,
    },
    cleaningAmenities: [],
    cleaningPlaces: [],

    setSpaceType: (spaceType) => set({ spaceType }),
    setSpaceLocation: (location) => set({ spaceLocation: location }),
    setSpaceDetails: (details) =>
      set((state) => ({
        spaceDetails: { ...state.spaceDetails, ...details },
      })),
    setCleaningAmenities: (amenities) => set({ cleaningAmenities: amenities }),
    setCleaningPlaces: (places) => set({ cleaningPlaces: places }),

    isStepValid: (routeName: string) => {
      const state = get();

      switch (routeName) {
        case AddPropertyRoutes.SPACE_TYPE_1:
          return state.spaceType !== "";
        case AddPropertyRoutes.SPACE_LOCATION_2:
          return state.spaceLocation.address !== "";
        case AddPropertyRoutes.SPACE_DETAILS_3:
          return (
            state.spaceDetails.name !== "" &&
            state.spaceDetails.size > 0 &&
            state.spaceDetails.rooms > 0 &&
            state.spaceDetails.bathrooms > 0
          );
        case AddPropertyRoutes.CLEANING_AMENITIES_4:
          return state.cleaningAmenities.length > 0;
        case AddPropertyRoutes.CLEANING_PLACES_5:
          return state.cleaningPlaces.length > 0;
        default:
          return false;
      }
    },
  })),
);

export default useAddPropertyStore;
