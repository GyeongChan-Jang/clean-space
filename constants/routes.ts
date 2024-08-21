const AddPropertyRoutes = {
  ADD_PROPERTY: "add-property",
  SPACE_TYPE_1: "space-type-1",
  SPACE_INFO_2: "space-info-2",
  SPACE_LOCATION_3: "space-location-3",
  CLEANING_TOOLS_4: "cleaning-tools-4",
  CLEANING_AREAS_5: "cleaning-areas-5",
  CLEANING_GUIDELINE_6: "cleaning-guideline-6",
  CLEANING_NOTES_7: "cleaning-notes-7",
  CLEANING_PRICE_8: "cleaning-price-8",
  COMPLETE: "complete",
} as const;

export { AddPropertyRoutes };
export type AddPropertyRoutes =
  (typeof AddPropertyRoutes)[keyof typeof AddPropertyRoutes];
