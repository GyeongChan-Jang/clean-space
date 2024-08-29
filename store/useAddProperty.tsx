import { ImagePickerAsset } from 'expo-image-picker/src/ImagePicker.types'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import { AddPropertyRoutes } from '@/constants/routes'
import { AddPropertyAddress, CleaningAmenity, CleaningPlaces } from '@/types/property'

export interface CleaningGuideline {
  id: number
  image: ImagePickerAsset
  description: string
}

export interface AddPropertyState {
  propertyId: string
  propertyType: string
  propertyLocation: AddPropertyAddress
  propertyDetails: {
    name: string
    description: string
    size: number
    rooms: number
    beds: number
    bathrooms: number
  }
  cleaningAmenities: CleaningAmenity[]
  cleaningPlaces: CleaningPlaces[]
  cleaningGuidelines: CleaningGuideline[]
  cleaningTime: {
    startTime: Date
    endTime: Date
    estimatedDuration: number
  }
  cleaningPrice: number

  setPropertyId: (id: string) => void
  setPropertyType: (type: string) => void
  setPropertyLocation: (location: AddPropertyAddress) => void
  setPropertyDetails: (details: Partial<AddPropertyState['propertyDetails']>) => void
  setCleaningAmenities: (amenities: CleaningAmenity[]) => void
  setCleaningPlaces: (places: CleaningPlaces[]) => void
  setCleaningGuidelines: (guidelines: CleaningGuideline[]) => void
  setCleaningTime: (time: Partial<AddPropertyState['cleaningTime']>) => void
  setCleaningPrice: (price: number) => void

  isStepValid: (routeName: string) => boolean
}

const useAddPropertyStore = create(
  subscribeWithSelector<AddPropertyState>((set, get) => ({
    propertyId: '',
    propertyType: '',
    propertyLocation: {
      address: '',
      addressDetail: '',
      apartment: '',
      bcode: '',
      roadAddress: '',
      sido: '',
      sigungu: '',
      sigunguCode: '',
      zoneCode: '',
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    },
    propertyDetails: {
      name: '',
      description: '',
      size: 0,
      rooms: 0,
      beds: 0,
      bathrooms: 0
    },
    cleaningAmenities: [],
    cleaningPlaces: [],
    cleaningGuidelines: [],
    cleaningTime: {
      startTime: new Date(new Date().setHours(11, 0, 0, 0)),
      endTime: new Date(new Date().setHours(13, 0, 0, 0)),
      estimatedDuration: 120
    },
    cleaningPrice: 0,
    onNextPress: null,

    setPropertyId: (id: string) => set({ propertyId: id }),
    setPropertyType: (propertyType) => set({ propertyType }),
    setPropertyLocation: (location) => set({ propertyLocation: location }),
    setPropertyDetails: (details) =>
      set((state) => ({
        propertyDetails: { ...state.propertyDetails, ...details }
      })),
    setCleaningAmenities: (amenities) => set({ cleaningAmenities: amenities }),
    setCleaningPlaces: (places) => set({ cleaningPlaces: places }),
    setCleaningGuidelines: (guidelines: CleaningGuideline[]) => set({ cleaningGuidelines: guidelines }),
    setCleaningTime: (time) =>
      set((state) => ({
        cleaningTime: { ...state.cleaningTime, ...time }
      })),
    setCleaningPrice: (price) => set({ cleaningPrice: price }),

    isStepValid: (routeName: string) => {
      const state = get()

      switch (routeName) {
        case AddPropertyRoutes.PROPERTY_TYPE_1:
          return state.propertyType !== ''
        case AddPropertyRoutes.PROPERTY_LOCATION_2:
          return state.propertyLocation.address !== ''
        case AddPropertyRoutes.PROPERTY_DETAILS_3:
          return (
            state.propertyDetails.name !== '' &&
            state.propertyDetails.size > 0 &&
            state.propertyDetails.rooms > 0 &&
            state.propertyDetails.bathrooms > 0
          )
        case AddPropertyRoutes.CLEANING_AMENITIES_4:
          return state.cleaningAmenities.length > 0
        case AddPropertyRoutes.CLEANING_LIST_5:
          return state.cleaningPlaces.length > 0
        case AddPropertyRoutes.CLEANING_GUIDELINES_6:
          return (
            state.cleaningGuidelines.length >= 1 &&
            state.cleaningGuidelines.every((guideline) => guideline.description.trim() !== '')
          )
        case AddPropertyRoutes.CLEANING_TIME_7:
          return (
            state.cleaningTime.startTime < state.cleaningTime.endTime &&
            state.cleaningTime.estimatedDuration >= 30 &&
            state.cleaningTime.estimatedDuration <= 300
          )
        case AddPropertyRoutes.REGISTRATION_PRICE_8:
          return state.cleaningPrice > 0
        default:
          return false
      }
    }
  }))
)

export default useAddPropertyStore
