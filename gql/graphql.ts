/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string };
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string };
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any };
  /** A date wihout time information */
  Date: { input: string; output: string };
  /** A date and time */
  Datetime: { input: string; output: string };
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string };
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any };
  /** A time without date information */
  Time: { input: string; output: string };
  /** A universally unique identifier */
  UUID: { input: string; output: string };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  gte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigFloat"]["input"]>;
  lte?: InputMaybe<Scalars["BigFloat"]["input"]>;
  neq?: InputMaybe<Scalars["BigFloat"]["input"]>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]["input"]>;
  gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  neq?: InputMaybe<Scalars["BigInt"]["input"]>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]["input"]>;
  gt?: InputMaybe<Scalars["Date"]["input"]>;
  gte?: InputMaybe<Scalars["Date"]["input"]>;
  in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Date"]["input"]>;
  lte?: InputMaybe<Scalars["Date"]["input"]>;
  neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Date"]["input"]>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]["input"]>;
  gt?: InputMaybe<Scalars["Datetime"]["input"]>;
  gte?: InputMaybe<Scalars["Datetime"]["input"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Datetime"]["input"]>;
  lte?: InputMaybe<Scalars["Datetime"]["input"]>;
  neq?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `applications` collection */
  deleteFromapplicationsCollection: ApplicationsDeleteResponse;
  /** Deletes zero or more records from the `cleaner_profiles` collection */
  deleteFromcleaner_profilesCollection: Cleaner_ProfilesDeleteResponse;
  /** Deletes zero or more records from the `cleaning_jobs` collection */
  deleteFromcleaning_jobsCollection: Cleaning_JobsDeleteResponse;
  /** Deletes zero or more records from the `cleaning_price_rules` collection */
  deleteFromcleaning_price_rulesCollection: Cleaning_Price_RulesDeleteResponse;
  /** Deletes zero or more records from the `conversation_participants` collection */
  deleteFromconversation_participantsCollection: Conversation_ParticipantsDeleteResponse;
  /** Deletes zero or more records from the `conversations` collection */
  deleteFromconversationsCollection: ConversationsDeleteResponse;
  /** Deletes zero or more records from the `job_status` collection */
  deleteFromjob_statusCollection: Job_StatusDeleteResponse;
  /** Deletes zero or more records from the `messages` collection */
  deleteFrommessagesCollection: MessagesDeleteResponse;
  /** Deletes zero or more records from the `properties` collection */
  deleteFrompropertiesCollection: PropertiesDeleteResponse;
  /** Deletes zero or more records from the `property_address` collection */
  deleteFromproperty_addressCollection: Property_AddressDeleteResponse;
  /** Deletes zero or more records from the `property_amenities` collection */
  deleteFromproperty_amenitiesCollection: Property_AmenitiesDeleteResponse;
  /** Deletes zero or more records from the `property_cleaning_guidelines` collection */
  deleteFromproperty_cleaning_guidelinesCollection: Property_Cleaning_GuidelinesDeleteResponse;
  /** Deletes zero or more records from the `property_cleaning_list` collection */
  deleteFromproperty_cleaning_listCollection: Property_Cleaning_ListDeleteResponse;
  /** Deletes zero or more records from the `property_photos` collection */
  deleteFromproperty_photosCollection: Property_PhotosDeleteResponse;
  /** Deletes zero or more records from the `property_pricing` collection */
  deleteFromproperty_pricingCollection: Property_PricingDeleteResponse;
  /** Deletes zero or more records from the `ratings` collection */
  deleteFromratingsCollection: RatingsDeleteResponse;
  /** Deletes zero or more records from the `spatial_ref_sys` collection */
  deleteFromspatial_ref_sysCollection: Spatial_Ref_SysDeleteResponse;
  /** Deletes zero or more records from the `users` collection */
  deleteFromusersCollection: UsersDeleteResponse;
  disablelongtransactions?: Maybe<Scalars["String"]["output"]>;
  enablelongtransactions?: Maybe<Scalars["String"]["output"]>;
  gettransactionid?: Maybe<Scalars["Opaque"]["output"]>;
  /** Adds one or more `applications` records to the collection */
  insertIntoapplicationsCollection?: Maybe<ApplicationsInsertResponse>;
  /** Adds one or more `cleaner_profiles` records to the collection */
  insertIntocleaner_profilesCollection?: Maybe<Cleaner_ProfilesInsertResponse>;
  /** Adds one or more `cleaning_jobs` records to the collection */
  insertIntocleaning_jobsCollection?: Maybe<Cleaning_JobsInsertResponse>;
  /** Adds one or more `cleaning_price_rules` records to the collection */
  insertIntocleaning_price_rulesCollection?: Maybe<Cleaning_Price_RulesInsertResponse>;
  /** Adds one or more `conversation_participants` records to the collection */
  insertIntoconversation_participantsCollection?: Maybe<Conversation_ParticipantsInsertResponse>;
  /** Adds one or more `conversations` records to the collection */
  insertIntoconversationsCollection?: Maybe<ConversationsInsertResponse>;
  /** Adds one or more `job_status` records to the collection */
  insertIntojob_statusCollection?: Maybe<Job_StatusInsertResponse>;
  /** Adds one or more `messages` records to the collection */
  insertIntomessagesCollection?: Maybe<MessagesInsertResponse>;
  /** Adds one or more `properties` records to the collection */
  insertIntopropertiesCollection?: Maybe<PropertiesInsertResponse>;
  /** Adds one or more `property_address` records to the collection */
  insertIntoproperty_addressCollection?: Maybe<Property_AddressInsertResponse>;
  /** Adds one or more `property_amenities` records to the collection */
  insertIntoproperty_amenitiesCollection?: Maybe<Property_AmenitiesInsertResponse>;
  /** Adds one or more `property_cleaning_guidelines` records to the collection */
  insertIntoproperty_cleaning_guidelinesCollection?: Maybe<Property_Cleaning_GuidelinesInsertResponse>;
  /** Adds one or more `property_cleaning_list` records to the collection */
  insertIntoproperty_cleaning_listCollection?: Maybe<Property_Cleaning_ListInsertResponse>;
  /** Adds one or more `property_photos` records to the collection */
  insertIntoproperty_photosCollection?: Maybe<Property_PhotosInsertResponse>;
  /** Adds one or more `property_pricing` records to the collection */
  insertIntoproperty_pricingCollection?: Maybe<Property_PricingInsertResponse>;
  /** Adds one or more `ratings` records to the collection */
  insertIntoratingsCollection?: Maybe<RatingsInsertResponse>;
  /** Adds one or more `spatial_ref_sys` records to the collection */
  insertIntospatial_ref_sysCollection?: Maybe<Spatial_Ref_SysInsertResponse>;
  /** Adds one or more `users` records to the collection */
  insertIntousersCollection?: Maybe<UsersInsertResponse>;
  longtransactionsenabled?: Maybe<Scalars["Boolean"]["output"]>;
  postgis_extensions_upgrade?: Maybe<Scalars["String"]["output"]>;
  postgis_selectivity?: Maybe<Scalars["Float"]["output"]>;
  st_clusterkmeans?: Maybe<Scalars["Int"]["output"]>;
  st_symmetricdifference?: Maybe<Scalars["Opaque"]["output"]>;
  /** Updates zero or more records in the `applications` collection */
  updateapplicationsCollection: ApplicationsUpdateResponse;
  /** Updates zero or more records in the `cleaner_profiles` collection */
  updatecleaner_profilesCollection: Cleaner_ProfilesUpdateResponse;
  /** Updates zero or more records in the `cleaning_jobs` collection */
  updatecleaning_jobsCollection: Cleaning_JobsUpdateResponse;
  /** Updates zero or more records in the `cleaning_price_rules` collection */
  updatecleaning_price_rulesCollection: Cleaning_Price_RulesUpdateResponse;
  /** Updates zero or more records in the `conversation_participants` collection */
  updateconversation_participantsCollection: Conversation_ParticipantsUpdateResponse;
  /** Updates zero or more records in the `conversations` collection */
  updateconversationsCollection: ConversationsUpdateResponse;
  /** Updates zero or more records in the `job_status` collection */
  updatejob_statusCollection: Job_StatusUpdateResponse;
  /** Updates zero or more records in the `messages` collection */
  updatemessagesCollection: MessagesUpdateResponse;
  /** Updates zero or more records in the `properties` collection */
  updatepropertiesCollection: PropertiesUpdateResponse;
  /** Updates zero or more records in the `property_address` collection */
  updateproperty_addressCollection: Property_AddressUpdateResponse;
  /** Updates zero or more records in the `property_amenities` collection */
  updateproperty_amenitiesCollection: Property_AmenitiesUpdateResponse;
  /** Updates zero or more records in the `property_cleaning_guidelines` collection */
  updateproperty_cleaning_guidelinesCollection: Property_Cleaning_GuidelinesUpdateResponse;
  /** Updates zero or more records in the `property_cleaning_list` collection */
  updateproperty_cleaning_listCollection: Property_Cleaning_ListUpdateResponse;
  /** Updates zero or more records in the `property_photos` collection */
  updateproperty_photosCollection: Property_PhotosUpdateResponse;
  /** Updates zero or more records in the `property_pricing` collection */
  updateproperty_pricingCollection: Property_PricingUpdateResponse;
  /** Updates zero or more records in the `ratings` collection */
  updateratingsCollection: RatingsUpdateResponse;
  /** Updates zero or more records in the `spatial_ref_sys` collection */
  updatespatial_ref_sysCollection: Spatial_Ref_SysUpdateResponse;
  /** Updates zero or more records in the `users` collection */
  updateusersCollection: UsersUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromapplicationsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ApplicationsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcleaner_ProfilesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Cleaner_ProfilesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcleaning_JobsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Cleaning_JobsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcleaning_Price_RulesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Cleaning_Price_RulesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromconversation_ParticipantsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Conversation_ParticipantsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromconversationsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ConversationsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromjob_StatusCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Job_StatusFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrommessagesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<MessagesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrompropertiesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<PropertiesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproperty_AddressCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_AddressFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproperty_AmenitiesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_AmenitiesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproperty_Cleaning_GuidelinesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_Cleaning_GuidelinesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproperty_Cleaning_ListCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_Cleaning_ListFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproperty_PhotosCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_PhotosFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproperty_PricingCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_PricingFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromratingsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<RatingsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromspatial_Ref_SysCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Spatial_Ref_SysFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromusersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<UsersFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoapplicationsCollectionArgs = {
  objects: Array<ApplicationsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocleaner_ProfilesCollectionArgs = {
  objects: Array<Cleaner_ProfilesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocleaning_JobsCollectionArgs = {
  objects: Array<Cleaning_JobsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocleaning_Price_RulesCollectionArgs = {
  objects: Array<Cleaning_Price_RulesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoconversation_ParticipantsCollectionArgs = {
  objects: Array<Conversation_ParticipantsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoconversationsCollectionArgs = {
  objects: Array<ConversationsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntojob_StatusCollectionArgs = {
  objects: Array<Job_StatusInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntomessagesCollectionArgs = {
  objects: Array<MessagesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntopropertiesCollectionArgs = {
  objects: Array<PropertiesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproperty_AddressCollectionArgs = {
  objects: Array<Property_AddressInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproperty_AmenitiesCollectionArgs = {
  objects: Array<Property_AmenitiesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproperty_Cleaning_GuidelinesCollectionArgs = {
  objects: Array<Property_Cleaning_GuidelinesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproperty_Cleaning_ListCollectionArgs = {
  objects: Array<Property_Cleaning_ListInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproperty_PhotosCollectionArgs = {
  objects: Array<Property_PhotosInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproperty_PricingCollectionArgs = {
  objects: Array<Property_PricingInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoratingsCollectionArgs = {
  objects: Array<RatingsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntospatial_Ref_SysCollectionArgs = {
  objects: Array<Spatial_Ref_SysInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntousersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationPostgis_SelectivityArgs = {
  att_name: Scalars["String"]["input"];
  geom: Scalars["Opaque"]["input"];
  mode?: InputMaybe<Scalars["String"]["input"]>;
  tbl: Scalars["Opaque"]["input"];
};

/** The root type for creating and mutating data */
export type MutationSt_ClusterkmeansArgs = {
  geom: Scalars["Opaque"]["input"];
  k: Scalars["Int"]["input"];
  max_radius?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for creating and mutating data */
export type MutationSt_SymmetricdifferenceArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for creating and mutating data */
export type MutationUpdateapplicationsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ApplicationsFilter>;
  set: ApplicationsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecleaner_ProfilesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Cleaner_ProfilesFilter>;
  set: Cleaner_ProfilesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecleaning_JobsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Cleaning_JobsFilter>;
  set: Cleaning_JobsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecleaning_Price_RulesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Cleaning_Price_RulesFilter>;
  set: Cleaning_Price_RulesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateconversation_ParticipantsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Conversation_ParticipantsFilter>;
  set: Conversation_ParticipantsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateconversationsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<ConversationsFilter>;
  set: ConversationsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatejob_StatusCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Job_StatusFilter>;
  set: Job_StatusUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatemessagesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<MessagesFilter>;
  set: MessagesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatepropertiesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<PropertiesFilter>;
  set: PropertiesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproperty_AddressCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_AddressFilter>;
  set: Property_AddressUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproperty_AmenitiesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_AmenitiesFilter>;
  set: Property_AmenitiesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproperty_Cleaning_GuidelinesCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_Cleaning_GuidelinesFilter>;
  set: Property_Cleaning_GuidelinesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproperty_Cleaning_ListCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_Cleaning_ListFilter>;
  set: Property_Cleaning_ListUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproperty_PhotosCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_PhotosFilter>;
  set: Property_PhotosUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproperty_PricingCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Property_PricingFilter>;
  set: Property_PricingUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateratingsCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<RatingsFilter>;
  set: RatingsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatespatial_Ref_SysCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<Spatial_Ref_SysFilter>;
  set: Spatial_Ref_SysUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateusersCollectionArgs = {
  atMost?: Scalars["Int"]["input"];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"]["output"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars["Opaque"]["input"]>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `applications` */
  applicationsCollection?: Maybe<ApplicationsConnection>;
  /** A pagable collection of type `cleaner_profiles` */
  cleaner_profilesCollection?: Maybe<Cleaner_ProfilesConnection>;
  /** A pagable collection of type `cleaning_jobs` */
  cleaning_jobsCollection?: Maybe<Cleaning_JobsConnection>;
  /** A pagable collection of type `cleaning_price_rules` */
  cleaning_price_rulesCollection?: Maybe<Cleaning_Price_RulesConnection>;
  /** A pagable collection of type `conversation_participants` */
  conversation_participantsCollection?: Maybe<Conversation_ParticipantsConnection>;
  /** A pagable collection of type `conversations` */
  conversationsCollection?: Maybe<ConversationsConnection>;
  equals?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_above?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_below?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_cmp?: Maybe<Scalars["Int"]["output"]>;
  geometry_contained_3d?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_contains?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_contains_3d?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_distance_box?: Maybe<Scalars["Float"]["output"]>;
  geometry_distance_centroid?: Maybe<Scalars["Float"]["output"]>;
  geometry_eq?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_ge?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_gt?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_le?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_left?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_lt?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_overabove?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_overbelow?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_overlaps?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_overlaps_3d?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_overleft?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_overright?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_right?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_same?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_same_3d?: Maybe<Scalars["Boolean"]["output"]>;
  geometry_within?: Maybe<Scalars["Boolean"]["output"]>;
  /** A pagable collection of type `job_status` */
  job_statusCollection?: Maybe<Job_StatusConnection>;
  /** A pagable collection of type `messages` */
  messagesCollection?: Maybe<MessagesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  postgis_constraint_dims?: Maybe<Scalars["Int"]["output"]>;
  postgis_constraint_srid?: Maybe<Scalars["Int"]["output"]>;
  postgis_constraint_type?: Maybe<Scalars["String"]["output"]>;
  postgis_deprecate?: Maybe<Scalars["Opaque"]["output"]>;
  postgis_full_version?: Maybe<Scalars["String"]["output"]>;
  postgis_geos_version?: Maybe<Scalars["String"]["output"]>;
  postgis_index_extent?: Maybe<Scalars["Opaque"]["output"]>;
  postgis_lib_build_date?: Maybe<Scalars["String"]["output"]>;
  postgis_lib_revision?: Maybe<Scalars["String"]["output"]>;
  postgis_lib_version?: Maybe<Scalars["String"]["output"]>;
  postgis_libjson_version?: Maybe<Scalars["String"]["output"]>;
  postgis_liblwgeom_version?: Maybe<Scalars["String"]["output"]>;
  postgis_libprotobuf_version?: Maybe<Scalars["String"]["output"]>;
  postgis_libxml_version?: Maybe<Scalars["String"]["output"]>;
  postgis_pgsql_version?: Maybe<Scalars["String"]["output"]>;
  postgis_proj_version?: Maybe<Scalars["String"]["output"]>;
  postgis_scripts_build_date?: Maybe<Scalars["String"]["output"]>;
  postgis_scripts_installed?: Maybe<Scalars["String"]["output"]>;
  postgis_scripts_pgsql_version?: Maybe<Scalars["String"]["output"]>;
  postgis_scripts_released?: Maybe<Scalars["String"]["output"]>;
  postgis_svn_version?: Maybe<Scalars["String"]["output"]>;
  postgis_type_name?: Maybe<Scalars["String"]["output"]>;
  postgis_version?: Maybe<Scalars["String"]["output"]>;
  postgis_wagyu_version?: Maybe<Scalars["String"]["output"]>;
  /** A pagable collection of type `properties` */
  propertiesCollection?: Maybe<PropertiesConnection>;
  /** A pagable collection of type `property_address` */
  property_addressCollection?: Maybe<Property_AddressConnection>;
  /** A pagable collection of type `property_amenities` */
  property_amenitiesCollection?: Maybe<Property_AmenitiesConnection>;
  /** A pagable collection of type `property_cleaning_guidelines` */
  property_cleaning_guidelinesCollection?: Maybe<Property_Cleaning_GuidelinesConnection>;
  /** A pagable collection of type `property_cleaning_list` */
  property_cleaning_listCollection?: Maybe<Property_Cleaning_ListConnection>;
  /** A pagable collection of type `property_photos` */
  property_photosCollection?: Maybe<Property_PhotosConnection>;
  /** A pagable collection of type `property_pricing` */
  property_pricingCollection?: Maybe<Property_PricingConnection>;
  /** A pagable collection of type `ratings` */
  ratingsCollection?: Maybe<RatingsConnection>;
  /** A pagable collection of type `spatial_ref_sys` */
  spatial_ref_sysCollection?: Maybe<Spatial_Ref_SysConnection>;
  st_3dclosestpoint?: Maybe<Scalars["Opaque"]["output"]>;
  st_3ddistance?: Maybe<Scalars["Float"]["output"]>;
  st_3dintersects?: Maybe<Scalars["Boolean"]["output"]>;
  st_3dlongestline?: Maybe<Scalars["Opaque"]["output"]>;
  st_3dmakebox?: Maybe<Scalars["Opaque"]["output"]>;
  st_3dmaxdistance?: Maybe<Scalars["Float"]["output"]>;
  st_3dshortestline?: Maybe<Scalars["Opaque"]["output"]>;
  st_asencodedpolyline?: Maybe<Scalars["String"]["output"]>;
  st_aslatlontext?: Maybe<Scalars["String"]["output"]>;
  st_asmarc21?: Maybe<Scalars["String"]["output"]>;
  st_asmvtgeom?: Maybe<Scalars["Opaque"]["output"]>;
  st_asx3d?: Maybe<Scalars["String"]["output"]>;
  st_boundingdiagonal?: Maybe<Scalars["Opaque"]["output"]>;
  st_clipbybox2d?: Maybe<Scalars["Opaque"]["output"]>;
  st_closestpoint?: Maybe<Scalars["Opaque"]["output"]>;
  st_concavehull?: Maybe<Scalars["Opaque"]["output"]>;
  st_contains?: Maybe<Scalars["Boolean"]["output"]>;
  st_containsproperly?: Maybe<Scalars["Boolean"]["output"]>;
  st_coorddim?: Maybe<Scalars["Int"]["output"]>;
  st_crosses?: Maybe<Scalars["Boolean"]["output"]>;
  st_curvetoline?: Maybe<Scalars["Opaque"]["output"]>;
  st_delaunaytriangles?: Maybe<Scalars["Opaque"]["output"]>;
  st_difference?: Maybe<Scalars["Opaque"]["output"]>;
  st_disjoint?: Maybe<Scalars["Boolean"]["output"]>;
  st_equals?: Maybe<Scalars["Boolean"]["output"]>;
  st_force3d?: Maybe<Scalars["Opaque"]["output"]>;
  st_force3dm?: Maybe<Scalars["Opaque"]["output"]>;
  st_force3dz?: Maybe<Scalars["Opaque"]["output"]>;
  st_force4d?: Maybe<Scalars["Opaque"]["output"]>;
  st_geometricmedian?: Maybe<Scalars["Opaque"]["output"]>;
  st_geomfrommarc21?: Maybe<Scalars["Opaque"]["output"]>;
  st_hasarc?: Maybe<Scalars["Boolean"]["output"]>;
  st_hexagon?: Maybe<Scalars["Opaque"]["output"]>;
  st_interpolatepoint?: Maybe<Scalars["Float"]["output"]>;
  st_intersects?: Maybe<Scalars["Boolean"]["output"]>;
  st_letters?: Maybe<Scalars["Opaque"]["output"]>;
  st_linecrossingdirection?: Maybe<Scalars["Int"]["output"]>;
  st_linefromencodedpolyline?: Maybe<Scalars["Opaque"]["output"]>;
  st_linelocatepoint?: Maybe<Scalars["Float"]["output"]>;
  st_linetocurve?: Maybe<Scalars["Opaque"]["output"]>;
  st_locatealong?: Maybe<Scalars["Opaque"]["output"]>;
  st_locatebetween?: Maybe<Scalars["Opaque"]["output"]>;
  st_locatebetweenelevations?: Maybe<Scalars["Opaque"]["output"]>;
  st_longestline?: Maybe<Scalars["Opaque"]["output"]>;
  st_makebox2d?: Maybe<Scalars["Opaque"]["output"]>;
  st_maxdistance?: Maybe<Scalars["Float"]["output"]>;
  st_minimumboundingcircle?: Maybe<Scalars["Opaque"]["output"]>;
  st_node?: Maybe<Scalars["Opaque"]["output"]>;
  st_normalize?: Maybe<Scalars["Opaque"]["output"]>;
  st_offsetcurve?: Maybe<Scalars["Opaque"]["output"]>;
  st_orderingequals?: Maybe<Scalars["Boolean"]["output"]>;
  st_overlaps?: Maybe<Scalars["Boolean"]["output"]>;
  st_pointm?: Maybe<Scalars["Opaque"]["output"]>;
  st_pointz?: Maybe<Scalars["Opaque"]["output"]>;
  st_pointzm?: Maybe<Scalars["Opaque"]["output"]>;
  st_project?: Maybe<Scalars["Opaque"]["output"]>;
  st_quantizecoordinates?: Maybe<Scalars["Opaque"]["output"]>;
  st_reduceprecision?: Maybe<Scalars["Opaque"]["output"]>;
  st_removerepeatedpoints?: Maybe<Scalars["Opaque"]["output"]>;
  st_sharedpaths?: Maybe<Scalars["Opaque"]["output"]>;
  st_shortestline?: Maybe<Scalars["Opaque"]["output"]>;
  st_simplifypolygonhull?: Maybe<Scalars["Opaque"]["output"]>;
  st_sortablehash?: Maybe<Scalars["BigInt"]["output"]>;
  st_split?: Maybe<Scalars["Opaque"]["output"]>;
  st_square?: Maybe<Scalars["Opaque"]["output"]>;
  st_swapordinates?: Maybe<Scalars["Opaque"]["output"]>;
  st_symdifference?: Maybe<Scalars["Opaque"]["output"]>;
  st_tileenvelope?: Maybe<Scalars["Opaque"]["output"]>;
  st_touches?: Maybe<Scalars["Boolean"]["output"]>;
  st_triangulatepolygon?: Maybe<Scalars["Opaque"]["output"]>;
  st_voronoi?: Maybe<Scalars["Opaque"]["output"]>;
  st_voronoilines?: Maybe<Scalars["Opaque"]["output"]>;
  st_voronoipolygons?: Maybe<Scalars["Opaque"]["output"]>;
  st_within?: Maybe<Scalars["Boolean"]["output"]>;
  st_wkbtosql?: Maybe<Scalars["Opaque"]["output"]>;
  st_wrapx?: Maybe<Scalars["Opaque"]["output"]>;
  /** A pagable collection of type `users` */
  usersCollection?: Maybe<UsersConnection>;
};

/** The root type for querying data */
export type QueryApplicationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ApplicationsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
};

/** The root type for querying data */
export type QueryCleaner_ProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaner_ProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaner_ProfilesOrderBy>>;
};

/** The root type for querying data */
export type QueryCleaning_JobsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaning_JobsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaning_JobsOrderBy>>;
};

/** The root type for querying data */
export type QueryCleaning_Price_RulesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaning_Price_RulesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaning_Price_RulesOrderBy>>;
};

/** The root type for querying data */
export type QueryConversation_ParticipantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Conversation_ParticipantsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Conversation_ParticipantsOrderBy>>;
};

/** The root type for querying data */
export type QueryConversationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ConversationsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ConversationsOrderBy>>;
};

/** The root type for querying data */
export type QueryEqualsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_AboveArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_BelowArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_CmpArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_Contained_3dArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_ContainsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_Contains_3dArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_Distance_BoxArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_Distance_CentroidArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_EqArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_GeArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_GtArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_LeArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_LeftArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_LtArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_OveraboveArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_OverbelowArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_OverlapsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_Overlaps_3dArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_OverleftArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_OverrightArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_RightArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_SameArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_Same_3dArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryGeometry_WithinArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryJob_StatusCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Job_StatusFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Job_StatusOrderBy>>;
};

/** The root type for querying data */
export type QueryMessagesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<MessagesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MessagesOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root type for querying data */
export type QueryPostgis_Constraint_DimsArgs = {
  geomcolumn: Scalars["String"]["input"];
  geomschema: Scalars["String"]["input"];
  geomtable: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QueryPostgis_Constraint_SridArgs = {
  geomcolumn: Scalars["String"]["input"];
  geomschema: Scalars["String"]["input"];
  geomtable: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QueryPostgis_Constraint_TypeArgs = {
  geomcolumn: Scalars["String"]["input"];
  geomschema: Scalars["String"]["input"];
  geomtable: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QueryPostgis_DeprecateArgs = {
  newname: Scalars["String"]["input"];
  oldname: Scalars["String"]["input"];
  version: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QueryPostgis_Index_ExtentArgs = {
  col: Scalars["String"]["input"];
  tbl: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QueryPostgis_Type_NameArgs = {
  coord_dimension: Scalars["Int"]["input"];
  geomname: Scalars["String"]["input"];
  use_new_name?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The root type for querying data */
export type QueryPropertiesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<PropertiesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

/** The root type for querying data */
export type QueryProperty_AddressCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_AddressFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_AddressOrderBy>>;
};

/** The root type for querying data */
export type QueryProperty_AmenitiesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_AmenitiesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_AmenitiesOrderBy>>;
};

/** The root type for querying data */
export type QueryProperty_Cleaning_GuidelinesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_Cleaning_GuidelinesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_Cleaning_GuidelinesOrderBy>>;
};

/** The root type for querying data */
export type QueryProperty_Cleaning_ListCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_Cleaning_ListFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_Cleaning_ListOrderBy>>;
};

/** The root type for querying data */
export type QueryProperty_PhotosCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_PhotosFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_PhotosOrderBy>>;
};

/** The root type for querying data */
export type QueryProperty_PricingCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_PricingFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_PricingOrderBy>>;
};

/** The root type for querying data */
export type QueryRatingsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<RatingsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RatingsOrderBy>>;
};

/** The root type for querying data */
export type QuerySpatial_Ref_SysCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Spatial_Ref_SysFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Spatial_Ref_SysOrderBy>>;
};

/** The root type for querying data */
export type QuerySt_3dclosestpointArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_3ddistanceArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_3dintersectsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_3dlongestlineArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_3dmakeboxArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_3dmaxdistanceArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_3dshortestlineArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_AsencodedpolylineArgs = {
  geom: Scalars["Opaque"]["input"];
  nprecision?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_AslatlontextArgs = {
  geom: Scalars["Opaque"]["input"];
  tmpl?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_Asmarc21Args = {
  format?: InputMaybe<Scalars["String"]["input"]>;
  geom: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_AsmvtgeomArgs = {
  bounds: Scalars["Opaque"]["input"];
  buffer?: InputMaybe<Scalars["Int"]["input"]>;
  clip_geom?: InputMaybe<Scalars["Boolean"]["input"]>;
  extent?: InputMaybe<Scalars["Int"]["input"]>;
  geom: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_Asx3dArgs = {
  geom: Scalars["Opaque"]["input"];
  maxdecimaldigits?: InputMaybe<Scalars["Int"]["input"]>;
  options?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_BoundingdiagonalArgs = {
  fits?: InputMaybe<Scalars["Boolean"]["input"]>;
  geom: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_Clipbybox2dArgs = {
  box: Scalars["Opaque"]["input"];
  geom: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_ClosestpointArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_ConcavehullArgs = {
  param_allow_holes?: InputMaybe<Scalars["Boolean"]["input"]>;
  param_geom: Scalars["Opaque"]["input"];
  param_pctconvex: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_ContainsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_ContainsproperlyArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_CoorddimArgs = {
  geometry: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_CrossesArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_CurvetolineArgs = {
  flags?: InputMaybe<Scalars["Int"]["input"]>;
  geom: Scalars["Opaque"]["input"];
  tol?: InputMaybe<Scalars["Float"]["input"]>;
  toltype?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_DelaunaytrianglesArgs = {
  flags?: InputMaybe<Scalars["Int"]["input"]>;
  g1: Scalars["Opaque"]["input"];
  tolerance?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_DifferenceArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
  gridsize: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_DisjointArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_EqualsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_Force3dArgs = {
  geom: Scalars["Opaque"]["input"];
  zvalue?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_Force3dmArgs = {
  geom: Scalars["Opaque"]["input"];
  mvalue?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_Force3dzArgs = {
  geom: Scalars["Opaque"]["input"];
  zvalue?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_Force4dArgs = {
  geom: Scalars["Opaque"]["input"];
  mvalue?: InputMaybe<Scalars["Float"]["input"]>;
  zvalue?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_GeometricmedianArgs = {
  fail_if_not_converged?: InputMaybe<Scalars["Boolean"]["input"]>;
  g: Scalars["Opaque"]["input"];
  max_iter?: InputMaybe<Scalars["Int"]["input"]>;
  tolerance?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_Geomfrommarc21Args = {
  marc21xml: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QuerySt_HasarcArgs = {
  geometry: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_HexagonArgs = {
  cell_i: Scalars["Int"]["input"];
  cell_j: Scalars["Int"]["input"];
  origin: Scalars["Opaque"]["input"];
  size: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_InterpolatepointArgs = {
  line: Scalars["Opaque"]["input"];
  point: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_IntersectsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_LettersArgs = {
  font?: InputMaybe<Scalars["JSON"]["input"]>;
  letters: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QuerySt_LinecrossingdirectionArgs = {
  line1: Scalars["Opaque"]["input"];
  line2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_LinefromencodedpolylineArgs = {
  nprecision?: InputMaybe<Scalars["Int"]["input"]>;
  txtin: Scalars["String"]["input"];
};

/** The root type for querying data */
export type QuerySt_LinelocatepointArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_LinetocurveArgs = {
  geometry: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_LocatealongArgs = {
  geometry: Scalars["Opaque"]["input"];
  leftrightoffset?: InputMaybe<Scalars["Float"]["input"]>;
  measure: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_LocatebetweenArgs = {
  frommeasure: Scalars["Float"]["input"];
  geometry: Scalars["Opaque"]["input"];
  leftrightoffset?: InputMaybe<Scalars["Float"]["input"]>;
  tomeasure: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_LocatebetweenelevationsArgs = {
  fromelevation: Scalars["Float"]["input"];
  geometry: Scalars["Opaque"]["input"];
  toelevation: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_LongestlineArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_Makebox2dArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_MaxdistanceArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_MinimumboundingcircleArgs = {
  inputgeom: Scalars["Opaque"]["input"];
  segs_per_quarter?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_NodeArgs = {
  g: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_NormalizeArgs = {
  geom: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_OffsetcurveArgs = {
  distance: Scalars["Float"]["input"];
  line: Scalars["Opaque"]["input"];
  params?: InputMaybe<Scalars["String"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_OrderingequalsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_OverlapsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_PointmArgs = {
  mcoordinate: Scalars["Float"]["input"];
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  xcoordinate: Scalars["Float"]["input"];
  ycoordinate: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_PointzArgs = {
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  xcoordinate: Scalars["Float"]["input"];
  ycoordinate: Scalars["Float"]["input"];
  zcoordinate: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_PointzmArgs = {
  mcoordinate: Scalars["Float"]["input"];
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  xcoordinate: Scalars["Float"]["input"];
  ycoordinate: Scalars["Float"]["input"];
  zcoordinate: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_ProjectArgs = {
  azimuth: Scalars["Float"]["input"];
  distance: Scalars["Float"]["input"];
  geog: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_QuantizecoordinatesArgs = {
  g: Scalars["Opaque"]["input"];
  prec_m?: InputMaybe<Scalars["Int"]["input"]>;
  prec_x: Scalars["Int"]["input"];
  prec_y?: InputMaybe<Scalars["Int"]["input"]>;
  prec_z?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_ReduceprecisionArgs = {
  geom: Scalars["Opaque"]["input"];
  gridsize: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_RemoverepeatedpointsArgs = {
  geom: Scalars["Opaque"]["input"];
  tolerance?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_SharedpathsArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_ShortestlineArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_SimplifypolygonhullArgs = {
  geom: Scalars["Opaque"]["input"];
  is_outer?: InputMaybe<Scalars["Boolean"]["input"]>;
  vertex_fraction: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_SortablehashArgs = {
  geom: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_SplitArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_SquareArgs = {
  cell_i: Scalars["Int"]["input"];
  cell_j: Scalars["Int"]["input"];
  origin: Scalars["Opaque"]["input"];
  size: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_SwapordinatesArgs = {
  geom: Scalars["Opaque"]["input"];
  ords: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_SymdifferenceArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
  gridsize: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QuerySt_TileenvelopeArgs = {
  bounds: Scalars["Opaque"]["input"];
  margin?: InputMaybe<Scalars["Float"]["input"]>;
  x: Scalars["Int"]["input"];
  y: Scalars["Int"]["input"];
  zoom: Scalars["Int"]["input"];
};

/** The root type for querying data */
export type QuerySt_TouchesArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_TriangulatepolygonArgs = {
  g1: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_VoronoiArgs = {
  clip?: InputMaybe<Scalars["Opaque"]["input"]>;
  g1: Scalars["Opaque"]["input"];
  return_polygons?: InputMaybe<Scalars["Boolean"]["input"]>;
  tolerance?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_VoronoilinesArgs = {
  extend_to?: InputMaybe<Scalars["Opaque"]["input"]>;
  g1: Scalars["Opaque"]["input"];
  tolerance?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_VoronoipolygonsArgs = {
  extend_to?: InputMaybe<Scalars["Opaque"]["input"]>;
  g1: Scalars["Opaque"]["input"];
  tolerance?: InputMaybe<Scalars["Float"]["input"]>;
};

/** The root type for querying data */
export type QuerySt_WithinArgs = {
  geom1: Scalars["Opaque"]["input"];
  geom2: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_WkbtosqlArgs = {
  wkb: Scalars["Opaque"]["input"];
};

/** The root type for querying data */
export type QuerySt_WrapxArgs = {
  geom: Scalars["Opaque"]["input"];
  move: Scalars["Float"]["input"];
  wrap: Scalars["Float"]["input"];
};

/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  ilike?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  iregex?: InputMaybe<Scalars["String"]["input"]>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  regex?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars["String"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]["input"]>;
  gt?: InputMaybe<Scalars["Time"]["input"]>;
  gte?: InputMaybe<Scalars["Time"]["input"]>;
  in?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Time"]["input"]>;
  lte?: InputMaybe<Scalars["Time"]["input"]>;
  neq?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["Time"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["Time"]["input"]>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]["input"]>;
  in?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars["UUID"]["input"]>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  contains?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  eq?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
};

export enum Application_Status {
  Accepted = "accepted",
  Applied = "applied",
  Canceled = "canceled",
  Rejected = "rejected",
}

/** Boolean expression comparing fields on type "application_status" */
export type Application_StatusFilter = {
  eq?: InputMaybe<Application_Status>;
  in?: InputMaybe<Array<Application_Status>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Application_Status>;
};

export type Applications = Node & {
  __typename?: "applications";
  application_id: Scalars["UUID"]["output"];
  cleaner_id: Scalars["UUID"]["output"];
  cleaning_jobs: Cleaning_Jobs;
  created_at: Scalars["Opaque"]["output"];
  job_id: Scalars["UUID"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
  users: Users;
};

export type ApplicationsConnection = {
  __typename?: "applicationsConnection";
  edges: Array<ApplicationsEdge>;
  pageInfo: PageInfo;
};

export type ApplicationsDeleteResponse = {
  __typename?: "applicationsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Applications>;
};

export type ApplicationsEdge = {
  __typename?: "applicationsEdge";
  cursor: Scalars["String"]["output"];
  node: Applications;
};

export type ApplicationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ApplicationsFilter>>;
  application_id?: InputMaybe<UuidFilter>;
  cleaner_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<OpaqueFilter>;
  job_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ApplicationsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ApplicationsFilter>>;
  status?: InputMaybe<StringFilter>;
};

export type ApplicationsInsertInput = {
  application_id?: InputMaybe<Scalars["UUID"]["input"]>;
  cleaner_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Opaque"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ApplicationsInsertResponse = {
  __typename?: "applicationsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Applications>;
};

export type ApplicationsOrderBy = {
  application_id?: InputMaybe<OrderByDirection>;
  cleaner_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  job_id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type ApplicationsUpdateInput = {
  application_id?: InputMaybe<Scalars["UUID"]["input"]>;
  cleaner_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Opaque"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type ApplicationsUpdateResponse = {
  __typename?: "applicationsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Applications>;
};

export type Cleaner_Profiles = Node & {
  __typename?: "cleaner_profiles";
  cleaning_count?: Maybe<Scalars["BigInt"]["output"]>;
  cleaning_tools_required: Scalars["Boolean"]["output"];
  created_at: Scalars["Datetime"]["output"];
  desired_pay?: Maybe<Scalars["BigInt"]["output"]>;
  id: Scalars["BigInt"]["output"];
  introduction: Scalars["String"]["output"];
  location: Scalars["String"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  preffered_time_slots: Scalars["JSON"]["output"];
  profile_type?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["Datetime"]["output"]>;
  user_id: Scalars["UUID"]["output"];
  users: Users;
};

export type Cleaner_ProfilesConnection = {
  __typename?: "cleaner_profilesConnection";
  edges: Array<Cleaner_ProfilesEdge>;
  pageInfo: PageInfo;
};

export type Cleaner_ProfilesDeleteResponse = {
  __typename?: "cleaner_profilesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaner_Profiles>;
};

export type Cleaner_ProfilesEdge = {
  __typename?: "cleaner_profilesEdge";
  cursor: Scalars["String"]["output"];
  node: Cleaner_Profiles;
};

export type Cleaner_ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Cleaner_ProfilesFilter>>;
  cleaning_count?: InputMaybe<BigIntFilter>;
  cleaning_tools_required?: InputMaybe<BooleanFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  desired_pay?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  introduction?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Cleaner_ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Cleaner_ProfilesFilter>>;
  profile_type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Cleaner_ProfilesInsertInput = {
  cleaning_count?: InputMaybe<Scalars["BigInt"]["input"]>;
  cleaning_tools_required?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  desired_pay?: InputMaybe<Scalars["BigInt"]["input"]>;
  introduction?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  preffered_time_slots?: InputMaybe<Scalars["JSON"]["input"]>;
  profile_type?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Cleaner_ProfilesInsertResponse = {
  __typename?: "cleaner_profilesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaner_Profiles>;
};

export type Cleaner_ProfilesOrderBy = {
  cleaning_count?: InputMaybe<OrderByDirection>;
  cleaning_tools_required?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  desired_pay?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  introduction?: InputMaybe<OrderByDirection>;
  location?: InputMaybe<OrderByDirection>;
  profile_type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Cleaner_ProfilesUpdateInput = {
  cleaning_count?: InputMaybe<Scalars["BigInt"]["input"]>;
  cleaning_tools_required?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  desired_pay?: InputMaybe<Scalars["BigInt"]["input"]>;
  introduction?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  preffered_time_slots?: InputMaybe<Scalars["JSON"]["input"]>;
  profile_type?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Cleaner_ProfilesUpdateResponse = {
  __typename?: "cleaner_profilesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaner_Profiles>;
};

export type Cleaning_Jobs = Node & {
  __typename?: "cleaning_jobs";
  address: Scalars["String"]["output"];
  applicationsCollection: ApplicationsConnection;
  cleaner_id?: Maybe<Scalars["UUID"]["output"]>;
  conversationsCollection?: Maybe<ConversationsConnection>;
  created_at: Scalars["Datetime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  from_dt: Scalars["Date"]["output"];
  host_id: Scalars["UUID"]["output"];
  job_id: Scalars["UUID"]["output"];
  job_statusCollection: Job_StatusConnection;
  latitude: Scalars["BigFloat"]["output"];
  longitude: Scalars["BigFloat"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  price: Scalars["BigFloat"]["output"];
  properties: Properties;
  property_id: Scalars["UUID"]["output"];
  ratingsCollection: RatingsConnection;
  status: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  to_dt: Scalars["Date"]["output"];
  urgency: Scalars["String"]["output"];
  users: Users;
};

export type Cleaning_JobsApplicationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ApplicationsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
};

export type Cleaning_JobsConversationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ConversationsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ConversationsOrderBy>>;
};

export type Cleaning_JobsJob_StatusCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Job_StatusFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Job_StatusOrderBy>>;
};

export type Cleaning_JobsRatingsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<RatingsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RatingsOrderBy>>;
};

export type Cleaning_JobsConnection = {
  __typename?: "cleaning_jobsConnection";
  edges: Array<Cleaning_JobsEdge>;
  pageInfo: PageInfo;
};

export type Cleaning_JobsDeleteResponse = {
  __typename?: "cleaning_jobsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaning_Jobs>;
};

export type Cleaning_JobsEdge = {
  __typename?: "cleaning_jobsEdge";
  cursor: Scalars["String"]["output"];
  node: Cleaning_Jobs;
};

export type Cleaning_JobsFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Cleaning_JobsFilter>>;
  cleaner_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  from_dt?: InputMaybe<DateFilter>;
  host_id?: InputMaybe<UuidFilter>;
  job_id?: InputMaybe<UuidFilter>;
  latitude?: InputMaybe<BigFloatFilter>;
  longitude?: InputMaybe<BigFloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Cleaning_JobsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Cleaning_JobsFilter>>;
  price?: InputMaybe<BigFloatFilter>;
  property_id?: InputMaybe<UuidFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  to_dt?: InputMaybe<DateFilter>;
  urgency?: InputMaybe<StringFilter>;
};

export type Cleaning_JobsInsertInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  cleaner_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  from_dt?: InputMaybe<Scalars["Date"]["input"]>;
  host_id?: InputMaybe<Scalars["UUID"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  latitude?: InputMaybe<Scalars["BigFloat"]["input"]>;
  longitude?: InputMaybe<Scalars["BigFloat"]["input"]>;
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  to_dt?: InputMaybe<Scalars["Date"]["input"]>;
  urgency?: InputMaybe<Scalars["String"]["input"]>;
};

export type Cleaning_JobsInsertResponse = {
  __typename?: "cleaning_jobsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaning_Jobs>;
};

export type Cleaning_JobsOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  cleaner_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  from_dt?: InputMaybe<OrderByDirection>;
  host_id?: InputMaybe<OrderByDirection>;
  job_id?: InputMaybe<OrderByDirection>;
  latitude?: InputMaybe<OrderByDirection>;
  longitude?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  to_dt?: InputMaybe<OrderByDirection>;
  urgency?: InputMaybe<OrderByDirection>;
};

export type Cleaning_JobsUpdateInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  cleaner_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  from_dt?: InputMaybe<Scalars["Date"]["input"]>;
  host_id?: InputMaybe<Scalars["UUID"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  latitude?: InputMaybe<Scalars["BigFloat"]["input"]>;
  longitude?: InputMaybe<Scalars["BigFloat"]["input"]>;
  price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  to_dt?: InputMaybe<Scalars["Date"]["input"]>;
  urgency?: InputMaybe<Scalars["String"]["input"]>;
};

export type Cleaning_JobsUpdateResponse = {
  __typename?: "cleaning_jobsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaning_Jobs>;
};

export type Cleaning_Price_Rules = Node & {
  __typename?: "cleaning_price_rules";
  created_at: Scalars["Datetime"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  price?: Maybe<Scalars["BigInt"]["output"]>;
  properties?: Maybe<Properties>;
  property_id?: Maybe<Scalars["UUID"]["output"]>;
  rule_id: Scalars["BigInt"]["output"];
  urgency?: Maybe<Scalars["String"]["output"]>;
};

export type Cleaning_Price_RulesConnection = {
  __typename?: "cleaning_price_rulesConnection";
  edges: Array<Cleaning_Price_RulesEdge>;
  pageInfo: PageInfo;
};

export type Cleaning_Price_RulesDeleteResponse = {
  __typename?: "cleaning_price_rulesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaning_Price_Rules>;
};

export type Cleaning_Price_RulesEdge = {
  __typename?: "cleaning_price_rulesEdge";
  cursor: Scalars["String"]["output"];
  node: Cleaning_Price_Rules;
};

export type Cleaning_Price_RulesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Cleaning_Price_RulesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Cleaning_Price_RulesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Cleaning_Price_RulesFilter>>;
  price?: InputMaybe<BigIntFilter>;
  property_id?: InputMaybe<UuidFilter>;
  rule_id?: InputMaybe<BigIntFilter>;
  urgency?: InputMaybe<StringFilter>;
};

export type Cleaning_Price_RulesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  urgency?: InputMaybe<Scalars["String"]["input"]>;
};

export type Cleaning_Price_RulesInsertResponse = {
  __typename?: "cleaning_price_rulesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaning_Price_Rules>;
};

export type Cleaning_Price_RulesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  rule_id?: InputMaybe<OrderByDirection>;
  urgency?: InputMaybe<OrderByDirection>;
};

export type Cleaning_Price_RulesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  urgency?: InputMaybe<Scalars["String"]["input"]>;
};

export type Cleaning_Price_RulesUpdateResponse = {
  __typename?: "cleaning_price_rulesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Cleaning_Price_Rules>;
};

export type Conversation_Participants = Node & {
  __typename?: "conversation_participants";
  conversation_id?: Maybe<Scalars["BigInt"]["output"]>;
  conversations?: Maybe<Conversations>;
  created_at?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  user_id?: Maybe<Scalars["UUID"]["output"]>;
  users?: Maybe<Users>;
};

export type Conversation_ParticipantsConnection = {
  __typename?: "conversation_participantsConnection";
  edges: Array<Conversation_ParticipantsEdge>;
  pageInfo: PageInfo;
};

export type Conversation_ParticipantsDeleteResponse = {
  __typename?: "conversation_participantsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Conversation_Participants>;
};

export type Conversation_ParticipantsEdge = {
  __typename?: "conversation_participantsEdge";
  cursor: Scalars["String"]["output"];
  node: Conversation_Participants;
};

export type Conversation_ParticipantsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Conversation_ParticipantsFilter>>;
  conversation_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Conversation_ParticipantsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Conversation_ParticipantsFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Conversation_ParticipantsInsertInput = {
  conversation_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Conversation_ParticipantsInsertResponse = {
  __typename?: "conversation_participantsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Conversation_Participants>;
};

export type Conversation_ParticipantsOrderBy = {
  conversation_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Conversation_ParticipantsUpdateInput = {
  conversation_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Conversation_ParticipantsUpdateResponse = {
  __typename?: "conversation_participantsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Conversation_Participants>;
};

export type Conversations = Node & {
  __typename?: "conversations";
  cleaning_job_id?: Maybe<Scalars["UUID"]["output"]>;
  cleaning_jobs?: Maybe<Cleaning_Jobs>;
  conversation_participantsCollection?: Maybe<Conversation_ParticipantsConnection>;
  created_at?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["BigInt"]["output"];
  messagesCollection?: Maybe<MessagesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  updated_at?: Maybe<Scalars["Datetime"]["output"]>;
};

export type ConversationsConversation_ParticipantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Conversation_ParticipantsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Conversation_ParticipantsOrderBy>>;
};

export type ConversationsMessagesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<MessagesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MessagesOrderBy>>;
};

export type ConversationsConnection = {
  __typename?: "conversationsConnection";
  edges: Array<ConversationsEdge>;
  pageInfo: PageInfo;
};

export type ConversationsDeleteResponse = {
  __typename?: "conversationsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Conversations>;
};

export type ConversationsEdge = {
  __typename?: "conversationsEdge";
  cursor: Scalars["String"]["output"];
  node: Conversations;
};

export type ConversationsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ConversationsFilter>>;
  cleaning_job_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ConversationsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ConversationsFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ConversationsInsertInput = {
  cleaning_job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type ConversationsInsertResponse = {
  __typename?: "conversationsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Conversations>;
};

export type ConversationsOrderBy = {
  cleaning_job_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ConversationsUpdateInput = {
  cleaning_job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type ConversationsUpdateResponse = {
  __typename?: "conversationsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Conversations>;
};

export type Job_Status = Node & {
  __typename?: "job_status";
  cleaner_id: Scalars["UUID"]["output"];
  cleaning_jobs: Cleaning_Jobs;
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["UUID"]["output"];
  job_id: Scalars["UUID"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  users: Users;
};

export type Job_StatusConnection = {
  __typename?: "job_statusConnection";
  edges: Array<Job_StatusEdge>;
  pageInfo: PageInfo;
};

export type Job_StatusDeleteResponse = {
  __typename?: "job_statusDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Job_Status>;
};

export type Job_StatusEdge = {
  __typename?: "job_statusEdge";
  cursor: Scalars["String"]["output"];
  node: Job_Status;
};

export type Job_StatusFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Job_StatusFilter>>;
  cleaner_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  job_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Job_StatusFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Job_StatusFilter>>;
  status?: InputMaybe<StringFilter>;
};

export type Job_StatusInsertInput = {
  cleaner_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type Job_StatusInsertResponse = {
  __typename?: "job_statusInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Job_Status>;
};

export type Job_StatusOrderBy = {
  cleaner_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  job_id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type Job_StatusUpdateInput = {
  cleaner_id?: InputMaybe<Scalars["UUID"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type Job_StatusUpdateResponse = {
  __typename?: "job_statusUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Job_Status>;
};

export type Messages = Node & {
  __typename?: "messages";
  content?: Maybe<Scalars["String"]["output"]>;
  conversation_id?: Maybe<Scalars["BigInt"]["output"]>;
  conversations?: Maybe<Conversations>;
  created_at?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["BigInt"]["output"];
  image_url?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  sender_id?: Maybe<Scalars["UUID"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  users?: Maybe<Users>;
};

export type MessagesConnection = {
  __typename?: "messagesConnection";
  edges: Array<MessagesEdge>;
  pageInfo: PageInfo;
};

export type MessagesDeleteResponse = {
  __typename?: "messagesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Messages>;
};

export type MessagesEdge = {
  __typename?: "messagesEdge";
  cursor: Scalars["String"]["output"];
  node: Messages;
};

export type MessagesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MessagesFilter>>;
  content?: InputMaybe<StringFilter>;
  conversation_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MessagesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MessagesFilter>>;
  sender_id?: InputMaybe<UuidFilter>;
  status?: InputMaybe<StringFilter>;
};

export type MessagesInsertInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  conversation_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  image_url?: InputMaybe<Scalars["String"]["input"]>;
  sender_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type MessagesInsertResponse = {
  __typename?: "messagesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Messages>;
};

export type MessagesOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  conversation_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  sender_id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type MessagesUpdateInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  conversation_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  image_url?: InputMaybe<Scalars["String"]["input"]>;
  sender_id?: InputMaybe<Scalars["UUID"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

export type MessagesUpdateResponse = {
  __typename?: "messagesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Messages>;
};

export enum Profile_Type {
  Company = "company",
  Individual = "individual",
}

/** Boolean expression comparing fields on type "profile_type" */
export type Profile_TypeFilter = {
  eq?: InputMaybe<Profile_Type>;
  in?: InputMaybe<Array<Profile_Type>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Profile_Type>;
};

export type Properties = Node & {
  __typename?: "properties";
  area_pyeong?: Maybe<Scalars["BigFloat"]["output"]>;
  area_sqm?: Maybe<Scalars["BigFloat"]["output"]>;
  bed_count?: Maybe<Scalars["Int"]["output"]>;
  cleaning_end_time?: Maybe<Scalars["Time"]["output"]>;
  cleaning_estimated_time?: Maybe<Scalars["Int"]["output"]>;
  cleaning_jobsCollection: Cleaning_JobsConnection;
  cleaning_price?: Maybe<Scalars["BigFloat"]["output"]>;
  cleaning_price_rulesCollection: Cleaning_Price_RulesConnection;
  cleaning_start_time?: Maybe<Scalars["Time"]["output"]>;
  coordinates?: Maybe<Scalars["Opaque"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  deposit?: Maybe<Scalars["BigFloat"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  guide_id?: Maybe<Scalars["BigInt"]["output"]>;
  host_id: Scalars["UUID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  open?: Maybe<Scalars["Boolean"]["output"]>;
  property_address: Property_Address;
  property_amenities: Property_Amenities;
  property_cleaning_guidelines?: Maybe<Property_Cleaning_Guidelines>;
  property_cleaning_guidelinesCollection: Property_Cleaning_GuidelinesConnection;
  property_id: Scalars["UUID"]["output"];
  property_photosCollection: Property_PhotosConnection;
  property_pricingCollection: Property_PricingConnection;
  property_type?: Maybe<Property_Type>;
  room_count?: Maybe<Scalars["Int"]["output"]>;
  status: Property_Status;
  toilet_count?: Maybe<Scalars["Int"]["output"]>;
  users: Users;
};

export type PropertiesCleaning_JobsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaning_JobsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaning_JobsOrderBy>>;
};

export type PropertiesCleaning_Price_RulesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaning_Price_RulesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaning_Price_RulesOrderBy>>;
};

export type PropertiesProperty_Cleaning_GuidelinesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_Cleaning_GuidelinesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_Cleaning_GuidelinesOrderBy>>;
};

export type PropertiesProperty_PhotosCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_PhotosFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_PhotosOrderBy>>;
};

export type PropertiesProperty_PricingCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Property_PricingFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Property_PricingOrderBy>>;
};

export type PropertiesConnection = {
  __typename?: "propertiesConnection";
  edges: Array<PropertiesEdge>;
  pageInfo: PageInfo;
};

export type PropertiesDeleteResponse = {
  __typename?: "propertiesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Properties>;
};

export type PropertiesEdge = {
  __typename?: "propertiesEdge";
  cursor: Scalars["String"]["output"];
  node: Properties;
};

export type PropertiesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PropertiesFilter>>;
  area_pyeong?: InputMaybe<BigFloatFilter>;
  area_sqm?: InputMaybe<BigFloatFilter>;
  bed_count?: InputMaybe<IntFilter>;
  cleaning_end_time?: InputMaybe<TimeFilter>;
  cleaning_estimated_time?: InputMaybe<IntFilter>;
  cleaning_price?: InputMaybe<BigFloatFilter>;
  cleaning_start_time?: InputMaybe<TimeFilter>;
  coordinates?: InputMaybe<OpaqueFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  deposit?: InputMaybe<BigFloatFilter>;
  description?: InputMaybe<StringFilter>;
  guide_id?: InputMaybe<BigIntFilter>;
  host_id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PropertiesFilter>;
  open?: InputMaybe<BooleanFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PropertiesFilter>>;
  property_id?: InputMaybe<UuidFilter>;
  property_type?: InputMaybe<Property_TypeFilter>;
  room_count?: InputMaybe<IntFilter>;
  status?: InputMaybe<Property_StatusFilter>;
  toilet_count?: InputMaybe<IntFilter>;
};

export type PropertiesInsertInput = {
  area_pyeong?: InputMaybe<Scalars["BigFloat"]["input"]>;
  area_sqm?: InputMaybe<Scalars["BigFloat"]["input"]>;
  bed_count?: InputMaybe<Scalars["Int"]["input"]>;
  cleaning_end_time?: InputMaybe<Scalars["Time"]["input"]>;
  cleaning_estimated_time?: InputMaybe<Scalars["Int"]["input"]>;
  cleaning_price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  cleaning_start_time?: InputMaybe<Scalars["Time"]["input"]>;
  coordinates?: InputMaybe<Scalars["Opaque"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  deposit?: InputMaybe<Scalars["BigFloat"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  guide_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  host_id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  open?: InputMaybe<Scalars["Boolean"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  property_type?: InputMaybe<Property_Type>;
  room_count?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Property_Status>;
  toilet_count?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PropertiesInsertResponse = {
  __typename?: "propertiesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Properties>;
};

export type PropertiesOrderBy = {
  area_pyeong?: InputMaybe<OrderByDirection>;
  area_sqm?: InputMaybe<OrderByDirection>;
  bed_count?: InputMaybe<OrderByDirection>;
  cleaning_end_time?: InputMaybe<OrderByDirection>;
  cleaning_estimated_time?: InputMaybe<OrderByDirection>;
  cleaning_price?: InputMaybe<OrderByDirection>;
  cleaning_start_time?: InputMaybe<OrderByDirection>;
  coordinates?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  deposit?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  guide_id?: InputMaybe<OrderByDirection>;
  host_id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  open?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  property_type?: InputMaybe<OrderByDirection>;
  room_count?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  toilet_count?: InputMaybe<OrderByDirection>;
};

export type PropertiesUpdateInput = {
  area_pyeong?: InputMaybe<Scalars["BigFloat"]["input"]>;
  area_sqm?: InputMaybe<Scalars["BigFloat"]["input"]>;
  bed_count?: InputMaybe<Scalars["Int"]["input"]>;
  cleaning_end_time?: InputMaybe<Scalars["Time"]["input"]>;
  cleaning_estimated_time?: InputMaybe<Scalars["Int"]["input"]>;
  cleaning_price?: InputMaybe<Scalars["BigFloat"]["input"]>;
  cleaning_start_time?: InputMaybe<Scalars["Time"]["input"]>;
  coordinates?: InputMaybe<Scalars["Opaque"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  deposit?: InputMaybe<Scalars["BigFloat"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  guide_id?: InputMaybe<Scalars["BigInt"]["input"]>;
  host_id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  open?: InputMaybe<Scalars["Boolean"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  property_type?: InputMaybe<Property_Type>;
  room_count?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Property_Status>;
  toilet_count?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PropertiesUpdateResponse = {
  __typename?: "propertiesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Properties>;
};

export type Property_Address = Node & {
  __typename?: "property_address";
  address?: Maybe<Scalars["String"]["output"]>;
  address_detail?: Maybe<Scalars["String"]["output"]>;
  apartment?: Maybe<Scalars["String"]["output"]>;
  bcode?: Maybe<Scalars["String"]["output"]>;
  coordinates?: Maybe<Scalars["Opaque"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["UUID"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  properties: Properties;
  property_id: Scalars["UUID"]["output"];
  road_address?: Maybe<Scalars["String"]["output"]>;
  sido?: Maybe<Scalars["String"]["output"]>;
  sigungu?: Maybe<Scalars["String"]["output"]>;
  sigungu_code?: Maybe<Scalars["String"]["output"]>;
  zonecode?: Maybe<Scalars["String"]["output"]>;
};

export type Property_AddressConnection = {
  __typename?: "property_addressConnection";
  edges: Array<Property_AddressEdge>;
  pageInfo: PageInfo;
};

export type Property_AddressDeleteResponse = {
  __typename?: "property_addressDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Address>;
};

export type Property_AddressEdge = {
  __typename?: "property_addressEdge";
  cursor: Scalars["String"]["output"];
  node: Property_Address;
};

export type Property_AddressFilter = {
  address?: InputMaybe<StringFilter>;
  address_detail?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Property_AddressFilter>>;
  apartment?: InputMaybe<StringFilter>;
  bcode?: InputMaybe<StringFilter>;
  coordinates?: InputMaybe<OpaqueFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Property_AddressFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Property_AddressFilter>>;
  property_id?: InputMaybe<UuidFilter>;
  road_address?: InputMaybe<StringFilter>;
  sido?: InputMaybe<StringFilter>;
  sigungu?: InputMaybe<StringFilter>;
  sigungu_code?: InputMaybe<StringFilter>;
  zonecode?: InputMaybe<StringFilter>;
};

export type Property_AddressInsertInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  address_detail?: InputMaybe<Scalars["String"]["input"]>;
  apartment?: InputMaybe<Scalars["String"]["input"]>;
  bcode?: InputMaybe<Scalars["String"]["input"]>;
  coordinates?: InputMaybe<Scalars["Opaque"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  road_address?: InputMaybe<Scalars["String"]["input"]>;
  sido?: InputMaybe<Scalars["String"]["input"]>;
  sigungu?: InputMaybe<Scalars["String"]["input"]>;
  sigungu_code?: InputMaybe<Scalars["String"]["input"]>;
  zonecode?: InputMaybe<Scalars["String"]["input"]>;
};

export type Property_AddressInsertResponse = {
  __typename?: "property_addressInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Address>;
};

export type Property_AddressOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  address_detail?: InputMaybe<OrderByDirection>;
  apartment?: InputMaybe<OrderByDirection>;
  bcode?: InputMaybe<OrderByDirection>;
  coordinates?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  road_address?: InputMaybe<OrderByDirection>;
  sido?: InputMaybe<OrderByDirection>;
  sigungu?: InputMaybe<OrderByDirection>;
  sigungu_code?: InputMaybe<OrderByDirection>;
  zonecode?: InputMaybe<OrderByDirection>;
};

export type Property_AddressUpdateInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  address_detail?: InputMaybe<Scalars["String"]["input"]>;
  apartment?: InputMaybe<Scalars["String"]["input"]>;
  bcode?: InputMaybe<Scalars["String"]["input"]>;
  coordinates?: InputMaybe<Scalars["Opaque"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  road_address?: InputMaybe<Scalars["String"]["input"]>;
  sido?: InputMaybe<Scalars["String"]["input"]>;
  sigungu?: InputMaybe<Scalars["String"]["input"]>;
  sigungu_code?: InputMaybe<Scalars["String"]["input"]>;
  zonecode?: InputMaybe<Scalars["String"]["input"]>;
};

export type Property_AddressUpdateResponse = {
  __typename?: "property_addressUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Address>;
};

export type Property_Amenities = Node & {
  __typename?: "property_amenities";
  air_conditioner: Scalars["Boolean"]["output"];
  cleaning_tools: Scalars["Boolean"]["output"];
  created_at: Scalars["Datetime"]["output"];
  elevator: Scalars["Boolean"]["output"];
  heating: Scalars["Boolean"]["output"];
  id: Scalars["BigInt"]["output"];
  laundry: Scalars["Boolean"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  parking: Scalars["Boolean"]["output"];
  properties?: Maybe<Properties>;
  property_id?: Maybe<Scalars["UUID"]["output"]>;
  wifi: Scalars["Boolean"]["output"];
};

export type Property_AmenitiesConnection = {
  __typename?: "property_amenitiesConnection";
  edges: Array<Property_AmenitiesEdge>;
  pageInfo: PageInfo;
};

export type Property_AmenitiesDeleteResponse = {
  __typename?: "property_amenitiesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Amenities>;
};

export type Property_AmenitiesEdge = {
  __typename?: "property_amenitiesEdge";
  cursor: Scalars["String"]["output"];
  node: Property_Amenities;
};

export type Property_AmenitiesFilter = {
  air_conditioner?: InputMaybe<BooleanFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Property_AmenitiesFilter>>;
  cleaning_tools?: InputMaybe<BooleanFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  elevator?: InputMaybe<BooleanFilter>;
  heating?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<BigIntFilter>;
  laundry?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Property_AmenitiesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Property_AmenitiesFilter>>;
  parking?: InputMaybe<BooleanFilter>;
  property_id?: InputMaybe<UuidFilter>;
  wifi?: InputMaybe<BooleanFilter>;
};

export type Property_AmenitiesInsertInput = {
  air_conditioner?: InputMaybe<Scalars["Boolean"]["input"]>;
  cleaning_tools?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  elevator?: InputMaybe<Scalars["Boolean"]["input"]>;
  heating?: InputMaybe<Scalars["Boolean"]["input"]>;
  laundry?: InputMaybe<Scalars["Boolean"]["input"]>;
  parking?: InputMaybe<Scalars["Boolean"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  wifi?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Property_AmenitiesInsertResponse = {
  __typename?: "property_amenitiesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Amenities>;
};

export type Property_AmenitiesOrderBy = {
  air_conditioner?: InputMaybe<OrderByDirection>;
  cleaning_tools?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  elevator?: InputMaybe<OrderByDirection>;
  heating?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  laundry?: InputMaybe<OrderByDirection>;
  parking?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  wifi?: InputMaybe<OrderByDirection>;
};

export type Property_AmenitiesUpdateInput = {
  air_conditioner?: InputMaybe<Scalars["Boolean"]["input"]>;
  cleaning_tools?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  elevator?: InputMaybe<Scalars["Boolean"]["input"]>;
  heating?: InputMaybe<Scalars["Boolean"]["input"]>;
  laundry?: InputMaybe<Scalars["Boolean"]["input"]>;
  parking?: InputMaybe<Scalars["Boolean"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  wifi?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Property_AmenitiesUpdateResponse = {
  __typename?: "property_amenitiesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Amenities>;
};

export type Property_Cleaning_Guidelines = Node & {
  __typename?: "property_cleaning_guidelines";
  created_at: Scalars["Datetime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  image_url?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  order?: Maybe<Scalars["Int"]["output"]>;
  properties: Properties;
  propertiesCollection?: Maybe<PropertiesConnection>;
  property_id: Scalars["UUID"]["output"];
};

export type Property_Cleaning_GuidelinesPropertiesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<PropertiesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

export type Property_Cleaning_GuidelinesConnection = {
  __typename?: "property_cleaning_guidelinesConnection";
  edges: Array<Property_Cleaning_GuidelinesEdge>;
  pageInfo: PageInfo;
};

export type Property_Cleaning_GuidelinesDeleteResponse = {
  __typename?: "property_cleaning_guidelinesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Cleaning_Guidelines>;
};

export type Property_Cleaning_GuidelinesEdge = {
  __typename?: "property_cleaning_guidelinesEdge";
  cursor: Scalars["String"]["output"];
  node: Property_Cleaning_Guidelines;
};

export type Property_Cleaning_GuidelinesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Property_Cleaning_GuidelinesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Property_Cleaning_GuidelinesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Property_Cleaning_GuidelinesFilter>>;
  order?: InputMaybe<IntFilter>;
  property_id?: InputMaybe<UuidFilter>;
};

export type Property_Cleaning_GuidelinesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image_url?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Property_Cleaning_GuidelinesInsertResponse = {
  __typename?: "property_cleaning_guidelinesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Cleaning_Guidelines>;
};

export type Property_Cleaning_GuidelinesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  order?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
};

export type Property_Cleaning_GuidelinesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image_url?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Scalars["Int"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Property_Cleaning_GuidelinesUpdateResponse = {
  __typename?: "property_cleaning_guidelinesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Cleaning_Guidelines>;
};

export type Property_Cleaning_List = Node & {
  __typename?: "property_cleaning_list";
  amenity?: Maybe<Scalars["Boolean"]["output"]>;
  bathroom?: Maybe<Scalars["Boolean"]["output"]>;
  bed_room?: Maybe<Scalars["Boolean"]["output"]>;
  bedding?: Maybe<Scalars["Boolean"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  dish_washing?: Maybe<Scalars["Boolean"]["output"]>;
  dressing_room?: Maybe<Scalars["Boolean"]["output"]>;
  garbage?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["BigInt"]["output"];
  kitchen?: Maybe<Scalars["Boolean"]["output"]>;
  laundry_dry?: Maybe<Scalars["Boolean"]["output"]>;
  living_room?: Maybe<Scalars["Boolean"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  property_id?: Maybe<Scalars["UUID"]["output"]>;
  refrigerator?: Maybe<Scalars["Boolean"]["output"]>;
  terrace?: Maybe<Scalars["Boolean"]["output"]>;
  working_space?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Property_Cleaning_ListConnection = {
  __typename?: "property_cleaning_listConnection";
  edges: Array<Property_Cleaning_ListEdge>;
  pageInfo: PageInfo;
};

export type Property_Cleaning_ListDeleteResponse = {
  __typename?: "property_cleaning_listDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Cleaning_List>;
};

export type Property_Cleaning_ListEdge = {
  __typename?: "property_cleaning_listEdge";
  cursor: Scalars["String"]["output"];
  node: Property_Cleaning_List;
};

export type Property_Cleaning_ListFilter = {
  amenity?: InputMaybe<BooleanFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Property_Cleaning_ListFilter>>;
  bathroom?: InputMaybe<BooleanFilter>;
  bed_room?: InputMaybe<BooleanFilter>;
  bedding?: InputMaybe<BooleanFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  dish_washing?: InputMaybe<BooleanFilter>;
  dressing_room?: InputMaybe<BooleanFilter>;
  garbage?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<BigIntFilter>;
  kitchen?: InputMaybe<BooleanFilter>;
  laundry_dry?: InputMaybe<BooleanFilter>;
  living_room?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Property_Cleaning_ListFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Property_Cleaning_ListFilter>>;
  property_id?: InputMaybe<UuidFilter>;
  refrigerator?: InputMaybe<BooleanFilter>;
  terrace?: InputMaybe<BooleanFilter>;
  working_space?: InputMaybe<BooleanFilter>;
};

export type Property_Cleaning_ListInsertInput = {
  amenity?: InputMaybe<Scalars["Boolean"]["input"]>;
  bathroom?: InputMaybe<Scalars["Boolean"]["input"]>;
  bed_room?: InputMaybe<Scalars["Boolean"]["input"]>;
  bedding?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  dish_washing?: InputMaybe<Scalars["Boolean"]["input"]>;
  dressing_room?: InputMaybe<Scalars["Boolean"]["input"]>;
  garbage?: InputMaybe<Scalars["Boolean"]["input"]>;
  kitchen?: InputMaybe<Scalars["Boolean"]["input"]>;
  laundry_dry?: InputMaybe<Scalars["Boolean"]["input"]>;
  living_room?: InputMaybe<Scalars["Boolean"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  refrigerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  terrace?: InputMaybe<Scalars["Boolean"]["input"]>;
  working_space?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Property_Cleaning_ListInsertResponse = {
  __typename?: "property_cleaning_listInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Cleaning_List>;
};

export type Property_Cleaning_ListOrderBy = {
  amenity?: InputMaybe<OrderByDirection>;
  bathroom?: InputMaybe<OrderByDirection>;
  bed_room?: InputMaybe<OrderByDirection>;
  bedding?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  dish_washing?: InputMaybe<OrderByDirection>;
  dressing_room?: InputMaybe<OrderByDirection>;
  garbage?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  kitchen?: InputMaybe<OrderByDirection>;
  laundry_dry?: InputMaybe<OrderByDirection>;
  living_room?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  refrigerator?: InputMaybe<OrderByDirection>;
  terrace?: InputMaybe<OrderByDirection>;
  working_space?: InputMaybe<OrderByDirection>;
};

export type Property_Cleaning_ListUpdateInput = {
  amenity?: InputMaybe<Scalars["Boolean"]["input"]>;
  bathroom?: InputMaybe<Scalars["Boolean"]["input"]>;
  bed_room?: InputMaybe<Scalars["Boolean"]["input"]>;
  bedding?: InputMaybe<Scalars["Boolean"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  dish_washing?: InputMaybe<Scalars["Boolean"]["input"]>;
  dressing_room?: InputMaybe<Scalars["Boolean"]["input"]>;
  garbage?: InputMaybe<Scalars["Boolean"]["input"]>;
  kitchen?: InputMaybe<Scalars["Boolean"]["input"]>;
  laundry_dry?: InputMaybe<Scalars["Boolean"]["input"]>;
  living_room?: InputMaybe<Scalars["Boolean"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  refrigerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  terrace?: InputMaybe<Scalars["Boolean"]["input"]>;
  working_space?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Property_Cleaning_ListUpdateResponse = {
  __typename?: "property_cleaning_listUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Cleaning_List>;
};

export type Property_Photos = Node & {
  __typename?: "property_photos";
  caption?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  is_main_photo: Scalars["Boolean"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  photo_url: Scalars["UUID"]["output"];
  properties: Properties;
  property_id: Scalars["UUID"]["output"];
};

export type Property_PhotosConnection = {
  __typename?: "property_photosConnection";
  edges: Array<Property_PhotosEdge>;
  pageInfo: PageInfo;
};

export type Property_PhotosDeleteResponse = {
  __typename?: "property_photosDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Photos>;
};

export type Property_PhotosEdge = {
  __typename?: "property_photosEdge";
  cursor: Scalars["String"]["output"];
  node: Property_Photos;
};

export type Property_PhotosFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Property_PhotosFilter>>;
  caption?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  is_main_photo?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Property_PhotosFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Property_PhotosFilter>>;
  photo_url?: InputMaybe<UuidFilter>;
  property_id?: InputMaybe<UuidFilter>;
};

export type Property_PhotosInsertInput = {
  caption?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  is_main_photo?: InputMaybe<Scalars["Boolean"]["input"]>;
  photo_url?: InputMaybe<Scalars["UUID"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Property_PhotosInsertResponse = {
  __typename?: "property_photosInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Photos>;
};

export type Property_PhotosOrderBy = {
  caption?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_main_photo?: InputMaybe<OrderByDirection>;
  photo_url?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
};

export type Property_PhotosUpdateInput = {
  caption?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  is_main_photo?: InputMaybe<Scalars["Boolean"]["input"]>;
  photo_url?: InputMaybe<Scalars["UUID"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Property_PhotosUpdateResponse = {
  __typename?: "property_photosUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Photos>;
};

export type Property_Pricing = Node & {
  __typename?: "property_pricing";
  base_price: Scalars["BigInt"]["output"];
  created_at: Scalars["Datetime"]["output"];
  date: Scalars["Date"]["output"];
  id: Scalars["BigInt"]["output"];
  laundry_fee: Scalars["BigInt"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  properties: Properties;
  property_id: Scalars["UUID"]["output"];
  today_urgent_fee: Scalars["BigInt"]["output"];
  updated_at?: Maybe<Scalars["Datetime"]["output"]>;
  urgent_fee: Scalars["BigInt"]["output"];
};

export type Property_PricingConnection = {
  __typename?: "property_pricingConnection";
  edges: Array<Property_PricingEdge>;
  pageInfo: PageInfo;
};

export type Property_PricingDeleteResponse = {
  __typename?: "property_pricingDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Pricing>;
};

export type Property_PricingEdge = {
  __typename?: "property_pricingEdge";
  cursor: Scalars["String"]["output"];
  node: Property_Pricing;
};

export type Property_PricingFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Property_PricingFilter>>;
  base_price?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<BigIntFilter>;
  laundry_fee?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Property_PricingFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Property_PricingFilter>>;
  property_id?: InputMaybe<UuidFilter>;
  today_urgent_fee?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  urgent_fee?: InputMaybe<BigIntFilter>;
};

export type Property_PricingInsertInput = {
  base_price?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  date?: InputMaybe<Scalars["Date"]["input"]>;
  laundry_fee?: InputMaybe<Scalars["BigInt"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  today_urgent_fee?: InputMaybe<Scalars["BigInt"]["input"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  urgent_fee?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type Property_PricingInsertResponse = {
  __typename?: "property_pricingInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Pricing>;
};

export type Property_PricingOrderBy = {
  base_price?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  date?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  laundry_fee?: InputMaybe<OrderByDirection>;
  property_id?: InputMaybe<OrderByDirection>;
  today_urgent_fee?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  urgent_fee?: InputMaybe<OrderByDirection>;
};

export type Property_PricingUpdateInput = {
  base_price?: InputMaybe<Scalars["BigInt"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  date?: InputMaybe<Scalars["Date"]["input"]>;
  laundry_fee?: InputMaybe<Scalars["BigInt"]["input"]>;
  property_id?: InputMaybe<Scalars["UUID"]["input"]>;
  today_urgent_fee?: InputMaybe<Scalars["BigInt"]["input"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  urgent_fee?: InputMaybe<Scalars["BigInt"]["input"]>;
};

export type Property_PricingUpdateResponse = {
  __typename?: "property_pricingUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Property_Pricing>;
};

export enum Property_Status {
  Abandoned = "abandoned",
  Completed = "completed",
  Draft = "draft",
  InProgress = "in_progress",
}

/** Boolean expression comparing fields on type "property_status" */
export type Property_StatusFilter = {
  eq?: InputMaybe<Property_Status>;
  in?: InputMaybe<Array<Property_Status>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Property_Status>;
};

export enum Property_Type {
  Apartment = "apartment",
  House = "house",
  Office = "office",
  Pension = "pension",
}

/** Boolean expression comparing fields on type "property_type" */
export type Property_TypeFilter = {
  eq?: InputMaybe<Property_Type>;
  in?: InputMaybe<Array<Property_Type>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Property_Type>;
};

export type Ratings = Node & {
  __typename?: "ratings";
  cleaning_jobs: Cleaning_Jobs;
  comment?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["Datetime"]["output"];
  id: Scalars["BigInt"]["output"];
  job_id: Scalars["UUID"]["output"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  rated_id: Scalars["UUID"]["output"];
  rater_id: Scalars["UUID"]["output"];
  rating: Scalars["Float"]["output"];
  users: Users;
};

export type RatingsConnection = {
  __typename?: "ratingsConnection";
  edges: Array<RatingsEdge>;
  pageInfo: PageInfo;
};

export type RatingsDeleteResponse = {
  __typename?: "ratingsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Ratings>;
};

export type RatingsEdge = {
  __typename?: "ratingsEdge";
  cursor: Scalars["String"]["output"];
  node: Ratings;
};

export type RatingsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RatingsFilter>>;
  comment?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  job_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RatingsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RatingsFilter>>;
  rated_id?: InputMaybe<UuidFilter>;
  rater_id?: InputMaybe<UuidFilter>;
  rating?: InputMaybe<FloatFilter>;
};

export type RatingsInsertInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  rated_id?: InputMaybe<Scalars["UUID"]["input"]>;
  rater_id?: InputMaybe<Scalars["UUID"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
};

export type RatingsInsertResponse = {
  __typename?: "ratingsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Ratings>;
};

export type RatingsOrderBy = {
  comment?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  job_id?: InputMaybe<OrderByDirection>;
  rated_id?: InputMaybe<OrderByDirection>;
  rater_id?: InputMaybe<OrderByDirection>;
  rating?: InputMaybe<OrderByDirection>;
};

export type RatingsUpdateInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  job_id?: InputMaybe<Scalars["UUID"]["input"]>;
  rated_id?: InputMaybe<Scalars["UUID"]["input"]>;
  rater_id?: InputMaybe<Scalars["UUID"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
};

export type RatingsUpdateResponse = {
  __typename?: "ratingsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Ratings>;
};

export type Spatial_Ref_Sys = Node & {
  __typename?: "spatial_ref_sys";
  auth_name?: Maybe<Scalars["String"]["output"]>;
  auth_srid?: Maybe<Scalars["Int"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  proj4text?: Maybe<Scalars["String"]["output"]>;
  srid: Scalars["Int"]["output"];
  srtext?: Maybe<Scalars["String"]["output"]>;
};

export type Spatial_Ref_SysConnection = {
  __typename?: "spatial_ref_sysConnection";
  edges: Array<Spatial_Ref_SysEdge>;
  pageInfo: PageInfo;
};

export type Spatial_Ref_SysDeleteResponse = {
  __typename?: "spatial_ref_sysDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Spatial_Ref_Sys>;
};

export type Spatial_Ref_SysEdge = {
  __typename?: "spatial_ref_sysEdge";
  cursor: Scalars["String"]["output"];
  node: Spatial_Ref_Sys;
};

export type Spatial_Ref_SysFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Spatial_Ref_SysFilter>>;
  auth_name?: InputMaybe<StringFilter>;
  auth_srid?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Spatial_Ref_SysFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Spatial_Ref_SysFilter>>;
  proj4text?: InputMaybe<StringFilter>;
  srid?: InputMaybe<IntFilter>;
  srtext?: InputMaybe<StringFilter>;
};

export type Spatial_Ref_SysInsertInput = {
  auth_name?: InputMaybe<Scalars["String"]["input"]>;
  auth_srid?: InputMaybe<Scalars["Int"]["input"]>;
  proj4text?: InputMaybe<Scalars["String"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  srtext?: InputMaybe<Scalars["String"]["input"]>;
};

export type Spatial_Ref_SysInsertResponse = {
  __typename?: "spatial_ref_sysInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Spatial_Ref_Sys>;
};

export type Spatial_Ref_SysOrderBy = {
  auth_name?: InputMaybe<OrderByDirection>;
  auth_srid?: InputMaybe<OrderByDirection>;
  proj4text?: InputMaybe<OrderByDirection>;
  srid?: InputMaybe<OrderByDirection>;
  srtext?: InputMaybe<OrderByDirection>;
};

export type Spatial_Ref_SysUpdateInput = {
  auth_name?: InputMaybe<Scalars["String"]["input"]>;
  auth_srid?: InputMaybe<Scalars["Int"]["input"]>;
  proj4text?: InputMaybe<Scalars["String"]["input"]>;
  srid?: InputMaybe<Scalars["Int"]["input"]>;
  srtext?: InputMaybe<Scalars["String"]["input"]>;
};

export type Spatial_Ref_SysUpdateResponse = {
  __typename?: "spatial_ref_sysUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Spatial_Ref_Sys>;
};

export enum Status {
  Completed = "completed",
  InProgress = "in_progress",
  OnTheWay = "on_the_way",
  Scheduled = "scheduled",
}

/** Boolean expression comparing fields on type "status" */
export type StatusFilter = {
  eq?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Status>;
};

export enum Urgency {
  Normal = "normal",
  TodayUrgent = "today_urgent",
  Urgent = "urgent",
}

/** Boolean expression comparing fields on type "urgency" */
export type UrgencyFilter = {
  eq?: InputMaybe<Urgency>;
  in?: InputMaybe<Array<Urgency>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Urgency>;
};

export enum User_Role {
  Cleaner = "cleaner",
  Host = "host",
}

/** Boolean expression comparing fields on type "user_role" */
export type User_RoleFilter = {
  eq?: InputMaybe<User_Role>;
  in?: InputMaybe<Array<User_Role>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<User_Role>;
};

export type Users = Node & {
  __typename?: "users";
  applicationsCollection?: Maybe<ApplicationsConnection>;
  cleaner_profilesCollection?: Maybe<Cleaner_ProfilesConnection>;
  cleaning_jobsCollection?: Maybe<Cleaning_JobsConnection>;
  conversation_participantsCollection?: Maybe<Conversation_ParticipantsConnection>;
  created_at: Scalars["Datetime"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["UUID"]["output"];
  job_statusCollection?: Maybe<Job_StatusConnection>;
  messagesCollection?: Maybe<MessagesConnection>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  profile_image?: Maybe<Scalars["String"]["output"]>;
  propertiesCollection?: Maybe<PropertiesConnection>;
  ratings?: Maybe<Ratings>;
  role?: Maybe<User_Role>;
};

export type UsersApplicationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<ApplicationsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
};

export type UsersCleaner_ProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaner_ProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaner_ProfilesOrderBy>>;
};

export type UsersCleaning_JobsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Cleaning_JobsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Cleaning_JobsOrderBy>>;
};

export type UsersConversation_ParticipantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Conversation_ParticipantsFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Conversation_ParticipantsOrderBy>>;
};

export type UsersJob_StatusCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<Job_StatusFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<Job_StatusOrderBy>>;
};

export type UsersMessagesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<MessagesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MessagesOrderBy>>;
};

export type UsersPropertiesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  filter?: InputMaybe<PropertiesFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PropertiesOrderBy>>;
};

export type UsersConnection = {
  __typename?: "usersConnection";
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  __typename?: "usersDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  __typename?: "usersEdge";
  cursor: Scalars["String"]["output"];
  node: Users;
};

export type UsersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>;
  phone?: InputMaybe<StringFilter>;
  profile_image?: InputMaybe<StringFilter>;
  role?: InputMaybe<User_RoleFilter>;
};

export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_image?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role>;
};

export type UsersInsertResponse = {
  __typename?: "usersInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  profile_image?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  profile_image?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<User_Role>;
};

export type UsersUpdateResponse = {
  __typename?: "usersUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"]["output"];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};
