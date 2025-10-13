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

interface Props {
  apartmentId: string;
}

const bedroomsMap: { [key: number]: string } = {
  1: "1 спальня",
  2: "2 спальни",
  3: "3 спальни",
  4: "4 спальни",
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
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{apartment.address}</BreadcrumbPage>
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

      <Card className="my-4">
        <CardTitle className="mx-4">Удобства</CardTitle>
        <CardContent>
          <p className="text-neutral-400">{apartment.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApartmentPage;
