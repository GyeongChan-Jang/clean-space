interface PropertyType {
  id: string;
  type: string;
  icon: string;
}

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

interface PropertyNote {
  images: string[];
  description: string;
  cleaningNotes: string;
}

export type { PropertyType, AddPropertyAddress, PropertyNote };
