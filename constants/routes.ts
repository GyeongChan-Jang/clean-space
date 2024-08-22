const AddPropertyRoutes = {
  ADD_PROPERTY: "add-property",
  SPACE_TYPE_1: "space-type-1",
  SPACE_LOCATION_2: "space-location-2",
  SPACE_DETAILS_3: "space-details-3",
  SPACE_INFO_4: "space-info-4",
  CLEANING_AMENITIES_5: "cleaning-amenities-5",
  CLEANING_AREAS_6: "cleaning-areas-6",
  CLEANING_GUIDELINES_7: "cleaning-guidelines-7",
  CLEANING_TIME_8: "cleaning-time-8",
  REGISTRATION_PRICE_9: "registration-price-9",
  COMPLETE: "complete",
} as const;

export { AddPropertyRoutes };
export type AddPropertyRoutes =
  (typeof AddPropertyRoutes)[keyof typeof AddPropertyRoutes];
