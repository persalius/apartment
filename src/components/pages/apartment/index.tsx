import Link from "next/link";
import { MapPin, MoveDiagonal, Bath, BedDouble } from "lucide-react";
import IconItem from "@/components/iconItem";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { apartmentList } from "@/shared/constants/apartments";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Amenities from "./components/amenities";
import { formatUAH } from "@/shared/utils/curency";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER } from "@/shared/constants/phone";
import MapActions from "@/components/mapActions";
import GoogleMap from "@/components/googleMap";
import { useTranslations } from "next-intl";

interface Props {
  apartmentId: string;
}

const ApartmentPage = ({ apartmentId }: Props) => {
  const tCommon = useTranslations("common");
  const t = useTranslations("apartmentInfo");

  const apartment = apartmentList.find(
    (item) => item.id === Number(apartmentId)
  );

  const periodMap = {
    day: t("perDay"),
    month: t("perMonth"),
  };

  const bedroomsText = t(`bedrooms.${apartment?.bedrooms}`);
  const bathroomText = t(
    `bathroom.${apartment?.isCombinedBathroom ? "combined" : "separate"}`
  );

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="py-4">
      <Breadcrumb>
        <BreadcrumbList className="overflow-hidden flex-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{tCommon("main")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap">
              {apartment.address}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <AnimatedTestimonials images={apartment.img} />

      <h1 className="text-2xl font-bold my-4">{apartment.title}</h1>

      <IconItem
        icon={MapPin}
        text={apartment.address}
        className="mb-[0.75rem]"
      />
      <div className="flex items-center gap-2">
        <IconItem icon={BedDouble} text={bedroomsText} />
        <IconItem icon={Bath} text={bathroomText} />
        <IconItem icon={MoveDiagonal} text={`${apartment.area} м²`} />
      </div>

      <Card className="my-4">
        <CardTitle className="mx-4">{tCommon("description")}</CardTitle>
        <CardContent>
          <p className="text-neutral-400">{apartment.description}</p>
        </CardContent>
      </Card>

      {apartment.amenities && (
        <Card className="my-4">
          <CardTitle className="mx-4">{tCommon("amenities")}</CardTitle>
          <CardContent>
            <Amenities amenities={apartment.amenities} />
          </CardContent>
        </Card>
      )}

      <MapActions coordinates={apartment.coordinates} />
      <GoogleMap coordinates={apartment.coordinates} />

      <div className="mt-8">
        <p className="font-bold text-cyan-700 text-4xl">
          {formatUAH(apartment.pricing.price)}
        </p>
        <p className="text-neutral-400">
          {periodMap[apartment.pricing.period]}
        </p>
        <Button className="mt-4 w-full" asChild>
          <Link href={`tel:${PHONE_NUMBER}`}>{tCommon("toCall")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ApartmentPage;
