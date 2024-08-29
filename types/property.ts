import { SelectCardType } from '@/types/common'

interface PropertyValues extends SelectCardType {
  value: PropertyType
}

enum PropertyType {
  HOUSE = 'house',
  APARTMENT = 'apartment',
  OFFICE = 'office',
  PENSION = 'pension'
}

interface AddPropertyAddress {
  address: string
  addressDetail: string
  apartment: string
  bcode: string
  roadAddress: string
  sido: string
  sigungu: string
  sigunguCode: string
  zoneCode: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

interface CleaningAmenity extends SelectCardType {}

interface PropertyNote {
  images: string[]
  description: string
  cleaningNotes: string
}

interface CleaningPlaces extends SelectCardType {}

export { PropertyType }

export type { PropertyValues, AddPropertyAddress, PropertyNote, CleaningAmenity, CleaningPlaces }
