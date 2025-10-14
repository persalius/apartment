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

interface Props {
  apartmentId: string;
}

const bedroomsMap: { [key: number]: string } = {
  1: "1 спальня",
  2: "2 спальни",
  3: "3 спальни",
  4: "4 спальни",
};

const periodMap = {
  day: "в день",
  month: "в месяц",
};

const ApartmentPage = ({ apartmentId }: Props) => {
  const apartment = apartmentList.find(
    (item) => item.id === Number(apartmentId)
  );

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="py-4">
      <Breadcrumb>
        <BreadcrumbList className="overflow-hidden flex-nowrap">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
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
        <IconItem icon={BedDouble} text={bedroomsMap[apartment.bedrooms]} />
        <IconItem
          icon={Bath}
          text={apartment.isCombinedBathroom ? "Совмещенный" : "Раздельный"}
        />
        <IconItem icon={MoveDiagonal} text={`${apartment.area} м²`} />
      </div>

      <Card className="my-4">
        <CardTitle className="mx-4">Описание</CardTitle>
        <CardContent>
          <p className="text-neutral-400">{apartment.description}</p>
        </CardContent>
      </Card>

      {apartment.amenities && (
        <Card className="my-4">
          <CardTitle className="mx-4">Удобства</CardTitle>
          <CardContent>
            <Amenities amenities={apartment.amenities} />
          </CardContent>
        </Card>
      )}

      <MapActions address={apartment.address} />

      <iframe
        className="mt-4 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1026.9448714256275!2d34.328915261719175!3d48.654121968346296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1760466380555!5m2!1sru!2sua"
        width="100%"
        height="300"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="mt-8">
        <p className="font-bold text-cyan-700 text-4xl">
          {formatUAH(apartment.pricing.price)}
        </p>
        <p className="text-neutral-400">
          {periodMap[apartment.pricing.period]}
        </p>
        <Button className="mt-4 w-full" asChild>
          <Link href={`tel:${PHONE_NUMBER}`}>Связаться</Link>
        </Button>
      </div>
    </div>
  );
};

export default ApartmentPage;
