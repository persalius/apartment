interface Pricing {
  price: number;
  period: "day" | "month";
}

interface Amenities {
  wifi: boolean;
  parking: boolean;
  kitchen: boolean;
  airConditioning: boolean;
}

export interface Apartment {
  id: number;
  title: string;
  description: string;
  pricing: Pricing;
  address: string;
  img: string[];
  area: number;
  isCombinedBathroom: boolean;
  bedrooms: number;
  amenities?: Amenities;
}
