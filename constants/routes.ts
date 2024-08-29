const AddPropertyRoutes = {
  ADD_PROPERTY: 'add-property',
  PROPERTY_TYPE_1: 'property-type-1',
  PROPERTY_LOCATION_2: 'property-location-2',
  PROPERTY_DETAILS_3: 'property-details-3',
  CLEANING_AMENITIES_4: 'cleaning-amenities-4',
  CLEANING_LIST_5: 'cleaning-list-5',
  CLEANING_GUIDELINES_6: 'cleaning-guidelines-6',
  CLEANING_TIME_7: 'cleaning-time-7',
  REGISTRATION_PRICE_8: 'registration-price-8',
  REGISTRATION_LOADING: 'registration-loading',
  COMPLETE: 'complete'
} as const

export { AddPropertyRoutes }
export type AddPropertyRoutes = (typeof AddPropertyRoutes)[keyof typeof AddPropertyRoutes]
