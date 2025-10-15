import Logo from "../logo";
import Actions from "./components/actions";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 bg-[#fffc] dark:bg-[#18181bcc] px-4 h-16 border-b border-gray-200 dark:border-gray-800 p-4 backdrop-saturate-[180%] backdrop-blur-[5px] flex items-center justify-between">
      <Logo />
      <Actions />
    </header>
  );
};

export default Header;
