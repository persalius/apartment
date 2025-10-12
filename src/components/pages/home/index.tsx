import { apartmentList } from "@/shared/constants/apartments";
import CardItem from "./components/cardItem";

const HomePage = () => {
  return (
    <div className="py-4 flex flex-col gap-4">
      {apartmentList.map((apartment, index) => (
        <CardItem apartment={apartment} key={apartment.id} index={index} />
      ))}
    </div>
  );
};

export default HomePage;
