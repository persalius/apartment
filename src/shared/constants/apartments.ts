import { Apartment } from "../types/apartmen";

export const apartmentList: Apartment[] = [
  {
    id: 1,
    title: "Современная квартира в центре города",
    description:
      "Великолепная двухкомнатная квартира в самом сердце города. Полностью меблирована, с современным ремонтом и панорамными окнами. Идеально подходит для комфортной жизни или работы из дома.",
    pricing: { price: 1000, period: "day" },
    address: "Центральный район, Верхнеднепровск",
    img: [
      "/images/apartment1/1.jpg",
      "/images/apartment1/2.jpg",
      "/images/apartment1/3.jpg",
    ],
    area: 55,
    isCombinedBathroom: true,
    bedrooms: 2,
    amenities: {
      wifi: true,
      kitchen: true,
      airConditioning: true,
      hasWashingMachine: true,
    },
  },
  {
    id: 2,
    title: "Современная квартира с одной спальней",
    description:
      "Уютная квартира с одной спальней, расположенная в тихом районе. Идеально подходит для одиночек или пар. В квартире есть все необходимое для комфортного проживания.",
    pricing: { price: 1000, period: "day" },
    address: "Центральный район, Верхнеднепровск",
    img: [
      "/images/apartment1/1.jpg",
      "/images/apartment1/2.jpg",
      "/images/apartment1/3.jpg",
    ],
    area: 40,
    isCombinedBathroom: false,
    bedrooms: 1,
    amenities: {
      wifi: false,
      kitchen: true,
      airConditioning: false,
      hasWashingMachine: true,
    },
  },
  {
    id: 3,
    title: "Современная квартира с одной спальней",
    description:
      "Уютная квартира с одной спальней, расположенная в тихом районе. Идеально подходит для одиночек или пар. В квартире есть все необходимое для комфортного проживания.",
    pricing: { price: 1000, period: "day" },
    address: "Центральный район, Верхнеднепровск",
    img: [
      "/images/apartment1/1.jpg",
      "/images/apartment1/2.jpg",
      "/images/apartment1/3.jpg",
    ],
    area: 68,
    isCombinedBathroom: true,
    bedrooms: 3,
    amenities: {
      wifi: false,
      kitchen: true,
      airConditioning: false,
      hasWashingMachine: false,
    },
  },
  {
    id: 4,
    title: "Современная квартира с одной спальней",
    description:
      "Уютная квартира с одной спальней, расположенная в тихом районе. Идеально подходит для одиночек или пар. В квартире есть все необходимое для комфортного проживания.",
    pricing: { price: 1000, period: "day" },
    address: "Центральный район, Верхнеднепровск",
    img: [
      "/images/apartment1/1.jpg",
      "/images/apartment1/2.jpg",
      "/images/apartment1/3.jpg",
    ],
    area: 68,
    isCombinedBathroom: true,
    bedrooms: 3,
    amenities: {
      wifi: true,
      kitchen: true,
      airConditioning: true,
      hasWashingMachine: true,
    },
  },
  {
    id: 5,
    title: "Современная квартира с одной спальней",
    description:
      "Уютная квартира с одной спальней, расположенная в тихом районе. Идеально подходит для одиночек или пар. В квартире есть все необходимое для комфортного проживания.",
    pricing: { price: 1000, period: "day" },
    address: "Центральный район, Верхнеднепровск",
    img: [
      "/images/apartment1/1.jpg",
      "/images/apartment1/2.jpg",
      "/images/apartment1/3.jpg",
    ],
    area: 68,
    isCombinedBathroom: true,
    bedrooms: 3,
    amenities: {
      wifi: true,
      kitchen: true,
      airConditioning: true,
      hasWashingMachine: true,
    },
  },
];
