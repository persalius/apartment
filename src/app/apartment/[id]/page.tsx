import ApartmentPage from "@/components/pages/apartment";

export default async function Apartment({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return <ApartmentPage apartmentId={id} />;
}
