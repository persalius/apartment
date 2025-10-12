import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-xl font-bold max-h-full overflow-hidden flex items-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={100}
        className="relative -left-7"
      />
    </div>
  );
};

export default Logo;
