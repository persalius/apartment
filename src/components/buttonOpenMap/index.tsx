"use client";

import { MapPin } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  address: string;
}

const ButtonOpenMap = ({ address }: Props) => {
  const handleOpen = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <Button
      onClick={handleOpen}
      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      <MapPin className="w-4 h-4" />
      Открыть в Google Maps
    </Button>
  );
};

export default ButtonOpenMap;
