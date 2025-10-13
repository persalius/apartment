import { JSX, useMemo } from "react";
import type { Amenities as AmenitiesType } from "@/shared/types/apartmen";
import { CookingPot, SunSnow, WashingMachineIcon, Wifi } from "lucide-react";

interface Props {
  amenities?: AmenitiesType;
}

const Amenities = ({ amenities }: Props) => {
  const list: { icon: JSX.Element; text: string; value: boolean }[] = useMemo(
    () => [
      { icon: <Wifi />, text: "Wi-Fi", value: amenities?.wifi || false },
      {
        icon: <CookingPot />,
        text: "Кухня",
        value: amenities?.kitchen || false,
      },
      {
        icon: <SunSnow />,
        text: "Кондиционер",
        value: amenities?.airConditioning || false,
      },
      {
        icon: <WashingMachineIcon />,
        text: "Стиральная машина",
        value: amenities?.hasWashingMachine || false,
      },
    ],
    [amenities]
  );

  return (
    <ul className="grid grid-cols-2 gap-2">
      {list.map(({ icon, text, value }) => {
        if (!value) return null;
        return (
          <li
            key={text}
            className="flex items-center gap-2 text-neutral-400 text-sm"
          >
            {icon}
            <span>{text}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Amenities;
