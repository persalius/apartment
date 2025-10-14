interface Pricing {
  price: number;
  period: "day" | "month";
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Amenities {
  wifi: boolean;
  kitchen: boolean;
  airConditioning: boolean;
  hasWashingMachine: boolean;
}

export interface Apartment {
  id: number;
  title: string;
  description: string;
  pricing: Pricing;
  address: string;
  coordinates: Coordinates;
  img: string[];
  area: number;
  isCombinedBathroom: boolean;
  bedrooms: number;
  amenities?: Amenities;
}
