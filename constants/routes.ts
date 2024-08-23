const AddPropertyRoutes = {
  ADD_PROPERTY: "add-property",
  SPACE_TYPE_1: "space-type-1",
  SPACE_LOCATION_2: "space-location-2",
  SPACE_DETAILS_3: "space-details-3",
  CLEANING_AMENITIES_4: "cleaning-amenities-4",
  CLEANING_AREAS_5: "cleaning-areas-5",
  CLEANING_GUIDELINES_6: "cleaning-guidelines-6",
  CLEANING_TIME_7: "cleaning-time-7",
  REGISTRATION_PRICE_8: "registration-price-8",
  COMPLETE: "complete",
} as const;

export { AddPropertyRoutes };
export type AddPropertyRoutes =
  (typeof AddPropertyRoutes)[keyof typeof AddPropertyRoutes];
