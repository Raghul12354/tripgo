import Image from "next/image";
import Link from "next/link";

import Button from "../button/Button";
import { Mobile_Nav } from "./Mobile_Nav";

export const LinkComp = ({
  linkProp,
  linkName,
}: {
  linkProp: string;
  linkName: string;
}) => {
  return (
    <Link
      className="text-lg md:text-xl font-medium capitalize hover:text-yellow-400 transition-all duration-200"
      href={linkProp}
    >
      {linkName}
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="flex justify-around items-center shadow-xl md:py-4 h-16 md:h-24 relative bg-white">
      <Link href="/">
        <Image
          src="/logo/Tripgo.png"
          alt="Tripgo"
          width={150}
          height={80}
          priority={true}
          quality={100}
          // sizes="(min-width: 300px) 128px, (min-width: 680px) calc(32.5vw - 119px), calc(100vw - 568px)"
          className="object-contain"
        />
      </Link>
      {/* nav-links */}
      <nav className="hidden md:flex items-center bg-inherit text-black w-fit z-20 gap-5 md:gap-10">
        <LinkComp linkProp="/" linkName="home" />
        {/* <LinkComp linkProp="/#services" linkName="services" /> */}
        <LinkComp linkProp="/about" linkName="about" />
        <LinkComp linkProp="/destinations" linkName="destinations" />
        <LinkComp linkProp="/dashboard" linkName="dashboard" />
      </nav>
      {/* btn */}
      <Button
        linkProp="/destinations"
        nameProp="Explore more"
        classProp={`md:block hidden text-base`}
      />
      {/* mobile-menu */}
      <div className="block md:hidden">
        <Mobile_Nav />
      </div>
    </header>
  );
};

export default Navbar;
