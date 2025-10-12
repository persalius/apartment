import Logo from "../logo";
import Actions from "./components/actions";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 bg-[#fffc] px-4 h-16 border-b border-gray-200 p-4 backdrop-saturate-[180%] backdrop-blur-[5px] flex items-center justify-between">
      <Logo />
      <Actions />
    </header>
  );
};

export default Header;
