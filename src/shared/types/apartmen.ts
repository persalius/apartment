interface Pricing {
  price: number;
  period: "day" | "month";
}

export interface Apartment {
  id: number;
  shortleDescription: string;
  description: string;
  pricing: Pricing;
  address: string;
  img: string[];
  area: number;
  isCombinedBathroom: boolean;
  bedrooms: number
}
