import { apartmentList } from "@/shared/constants/apartments";
import CardItem from "./components/cardItem";

const HomePage = () => {
  return (
    <div className="py-4 flex flex-col gap-4">
      {apartmentList.map((apartment) => (
        <CardItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};

export default HomePage;
