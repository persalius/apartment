"use client";

import { MapPin } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  address: string;
}

const MapActions = ({ address }: Props) => {
  const handleOpenMap = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleOpenRoute = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={handleOpenMap}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <MapPin className="w-4 h-4" />
        Открыть в Google Maps
      </Button>

      <Button
        onClick={handleOpenRoute}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <MapPin className="w-4 h-4" />
        Проложить маршрут
      </Button>
    </div>
  );
};

export default MapActions;
