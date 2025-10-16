import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-xl font-bold max-h-full overflow-hidden flex items-center"
    >
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={50}
        className="relative"
      />
    </Link>
  );
};

export default Logo;
