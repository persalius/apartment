"use client";

import { MapPin, Route } from "lucide-react";
import { Button } from "../ui/button";
import { Coordinates } from "@/shared/types/apartmen";
import { useTranslations } from "next-intl";

interface Props {
  coordinates: Coordinates;
}

const MapActions = ({ coordinates }: Props) => {
  const { lat: latitude, lng: longitude } = coordinates;

  const t = useTranslations("common");

  const handleOpenMap = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleOpenRoute = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={handleOpenMap}
        className="w-full flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow-md transition"
      >
        <MapPin className="w-4 h-4" />
        {t("openMap")}
      </Button>

      <Button
        onClick={handleOpenRoute}
        className="w-full flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition"
      >
        <Route className="w-4 h-4" />
        {t("openRoute")}
      </Button>
    </div>
  );
};

export default MapActions;
