import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-xl font-bold max-h-full overflow-hidden flex items-center h-12 w-28 relative"
    >
      <Image src="/images/logo.png" alt="Logo" fill className="relative" />
    </Link>
  );
};

export default Logo;
