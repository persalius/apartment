import Image from "next/image";
import Link from "next/link";
import { MapPin, MoveDiagonal, Bath, BedDouble } from "lucide-react";
import { Apartment } from "@/shared/types/apartmen";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import IconItem from "./components/iconItem";

interface Props {
  apartment: Apartment;
}

const periodMap = {
  day: "в день",
  month: "в месяц",
};

const currencyFormatter = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const bedroomsMap: { [key: number]: string } = {
  1: "1 спальня",
  2: "2 спальни",
  3: "3 спальни",
  4: "4 спальни",
};

const CardItem = ({ apartment }: Props) => {
  if (!apartment) return null;

  const {
    shortleDescription,
    address,
    pricing,
    area,
    isCombinedBathroom,
    bedrooms,
  } = apartment;

  return (
    <Link href={`/apartment/${apartment.id}`}>
      <Card className="p-0 overflow-auto group gap-0">
        <CardHeader className="p-0 h-48 flex justify-center relative">
          <Image
            src={apartment.img[0]}
            alt={shortleDescription}
            fill
            className="w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="mb-0.5 text-md font-semibold line-clamp-1">
            {shortleDescription}
          </h3>
          <IconItem icon={MapPin} text={address} className="mb-[0.75rem]" />
          <div className="flex items-center gap-2">
            <IconItem icon={BedDouble} text={bedroomsMap[bedrooms]} />
            <IconItem
              icon={Bath}
              text={isCombinedBathroom ? "Совмещенный" : "Раздельный"}
            />
            <IconItem icon={MoveDiagonal} text={`${area} м²`} />
          </div>
        </CardContent>
        <CardFooter className="border-t border-t-slate-200 justify-between p-4!">
          <p className="font-bold text-amber-700">
            {currencyFormatter.format(pricing.price)}
          </p>
          <p>{periodMap[pricing.period]}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardItem;
