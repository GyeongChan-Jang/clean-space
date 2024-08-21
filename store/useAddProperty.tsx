import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { AddPropertyAddress, PropertyNote } from "@/types/property";

export interface AddPropertyState {
  spaceType: string;
  spaceInfo: {
    name: string;
    size: number;
    rooms: number;
    bathrooms: number;
    cleaningTime: [number, number];
    cleaningDuration: number;
  };
  spaceLocation: AddPropertyAddress;
  cleaningTools: string[];
  cleaningAreas: string[];
  cleaningGuideline: any[];
  cleaningNotes: PropertyNote;
  cleaningPrice: number;

  setSpaceType: (type: string) => void;
  setSpaceInfo: (info: Partial<AddPropertyState["spaceInfo"]>) => void;
  setSpaceLocation: (location: AddPropertyAddress) => void;
  setCleaningTools: (tools: string[]) => void;
  setCleaningGuideLine: (areas: string[]) => void;
  setCleaningAreas: (photos: string[]) => void;
  setCleaningNotes: (notes: PropertyNote) => void;
  setCleaningPrice: (price: number) => void;
  isStepValid: (routeName: string) => boolean;
}

const useAddPropertyStore = create(
  subscribeWithSelector<AddPropertyState>((set, get) => ({
    spaceType: "",
    spaceInfo: {
      name: "",
      size: 0,
      rooms: 0,
      bathrooms: 0,
      cleaningTime: [0, 0],
      cleaningDuration: 0,
    },
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
    cleaningTools: [],
    cleaningAreas: [],
    cleaningGuideline: [],
    cleaningNotes: {
      images: [],
      description: "",
      cleaningNotes: "",
    },
    cleaningPrice: 0,
    setSpaceType: (spaceType) => set({ spaceType }),
    setSpaceInfo: (info) =>
      set((state) => ({
        spaceInfo: { ...state.spaceInfo, ...info },
      })),
    setSpaceLocation: (newLocation) =>
      set((state) => ({
        spaceLocation: { ...state.spaceLocation, ...newLocation },
      })),
    setCleaningTools: (tools) => set({ cleaningTools: tools }),
    setCleaningAreas: (areas) => set({ cleaningAreas: areas }),
    setCleaningGuideLine: (cleaningGuideline) => set({ cleaningGuideline }),
    setCleaningNotes: (cleaningNotes) => set({ cleaningNotes }),
    setCleaningPrice: (cleaningPrice) => set({ cleaningPrice }),
    isStepValid: (routeName: string) => {
      const state = get();

      switch (routeName) {
        case "space-type-1":
          return state.spaceType !== "";
        case "space-info-2":
          return (
            state.spaceInfo.size > 0 &&
            state.spaceInfo.rooms > 0 &&
            state.spaceInfo.bathrooms > 0 &&
            state.spaceInfo.cleaningTime[0] > 0 &&
            state.spaceInfo.cleaningTime[1] > 0 &&
            state.spaceInfo.cleaningDuration > 0
          );
        case "space-location-3":
          return state.spaceLocation.address !== "";
        case "cleaning-tools-4":
          return state.cleaningTools.length > 0;
        case "cleaning-areas-5":
          return state.cleaningAreas.length > 0;
        case "cleaning-guideline-6":
          return state.cleaningGuideline.length > 0;
        case "cleaning-notes-7":
          return state.cleaningNotes.cleaningNotes !== "";
        case "cleaning-price-8":
          return state.cleaningPrice > 0;
        default:
          return false;
      }
    },
  })),
);

export default useAddPropertyStore;
