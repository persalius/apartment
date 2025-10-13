import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { apartmentList } from "@/shared/constants/apartments";

interface Props {
  apartmentId: string;
}

const ApartmentPage = ({ apartmentId }: Props) => {
  const apartment = apartmentList.find(
    (item) => item.id === Number(apartmentId)
  );

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <>
      <AnimatedTestimonials images={apartment.img} />
      <h1 className="text-2xl font-bold mb-4">
        {apartment.shortleDescription}
      </h1>
    </>
  );
};

export default ApartmentPage;
