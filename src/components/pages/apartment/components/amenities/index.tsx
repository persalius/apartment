import type { Amenities as AmenitiesType } from "@/shared/types/apartmen";
import { useAmenities } from "./hooks/useAmenities";

interface Props {
  amenities?: AmenitiesType;
}

const Amenities = ({ amenities }: Props) => {
  const list = useAmenities({ amenities });

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
