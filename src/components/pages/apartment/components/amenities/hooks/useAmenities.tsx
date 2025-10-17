import { JSX, useMemo } from "react";
import { useTranslations } from "next-intl";
import type { Amenities as AmenitiesType } from "@/shared/types/apartmen";
import { CookingPot, SunSnow, WashingMachineIcon, Wifi } from "lucide-react";

interface Props {
  amenities?: AmenitiesType;
}

export const useAmenities = ({ amenities }: Props) => {
  const t = useTranslations("common");

  const list: { icon: JSX.Element; text: string; value: boolean }[] = useMemo(
    () => [
      { icon: <Wifi />, text: t("wifi"), value: amenities?.wifi || false },
      {
        icon: <CookingPot />,
        text: t("kitchen"),
        value: amenities?.kitchen || false,
      },
      {
        icon: <SunSnow />,
        text: t("ac"),
        value: amenities?.airConditioning || false,
      },
      {
        icon: <WashingMachineIcon />,
        text: t("washingMachine"),
        value: amenities?.hasWashingMachine || false,
      },
    ],
    [amenities, t]
  );

  return list;
};
