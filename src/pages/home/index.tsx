import { apartmentList } from "@/shared/constants/apartmens";
import { CardItem } from "./components/cardItem";

export const HomePage = () => {
  return (
    <div className="py-4 flex flex-col gap-4">
      {apartmentList.map((apartment) => (
        <CardItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};
