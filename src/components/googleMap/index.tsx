import { Coordinates } from "@/shared/types/apartmen";

interface Props {
  coordinates: Coordinates;
}

const GoogleMap = ({ coordinates }: Props) => {
  return (
    <iframe
      className="mt-4 rounded-lg w-full h-72"
      src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15&output=embed`}
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
