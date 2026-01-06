import Image from "next/image";
import Link from "next/link";

import ArrowUp from "../Icons/ArrowUp";
import PhoneIcon from "../Icons/PhoneIcon";
import EmailIcon from "../Icons/EmailIcon";
import OfficeIcon from "../Icons/OfficeIcon";
import ClockIcon from "../Icons/ClockIcon";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="px-6 md:px-40 bg-custom_white pt-5 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40 pt-5 md:pt-10 pb-12 md:pb-24 md:place-items-center">
        {/* first section  */}
        <div className="flex flex-col">
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
          <q className="w-1/2 md:w-[70%] font-medium md:text-lg leading-snug my-3">
            Discover Your World, One Journey at a Time!
          </q>
          {/* social icons */}
          <div className="mt-5">
            <p className="text-lg font-medium capitalize ">follow us</p>
            <div className="grid grid-cols-3 gap-10 w-fit mt-2">
              <Link href="">
                <InstagramLogoIcon className="footer_Icons" />
              </Link>
              <Link href="">
                <LinkedInLogoIcon className="footer_Icons" />
              </Link>
              <Link href="">
                <GitHubLogoIcon className="footer_Icons" />
              </Link>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="grid grid-cols-1 gap-5 w-fit h-fit">
          <h3 className="footer_title">Useful Links</h3>
          <Link href="/about">About</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/">travels</Link>
        </div>
        {/* third section */}
        <div className="flex flex-col gap-5">
          <h3 className="footer_title">Contact Us</h3>
          <address className="flex items-center gap-2">
            <OfficeIcon classnameProp="w-7 h-7" />
            <p className="text-sm md:text-base">
              123, 3rd street silicon valley california US, 123, 3rd street
              silicon valley california US
            </p>
          </address>
          <Link className="flex items-center gap-2 " href="tel: +1234567890">
            <PhoneIcon classnameProp="w-6 h-6" />
            <p className="text-sm md:text-base">+1234567890</p>
          </Link>
          <Link
            className="flex items-center gap-2 "
            href="mailto: tripgo@gmail.com"
          >
            <EmailIcon classnameProp="w-6 h-6" />
            <p className="text-sm md:text-base">tripgo@gmail.com</p>
          </Link>
          <p className="flex items-center gap-2">
            <ClockIcon classnameProp="w-6 h-6" />
            9.00 - 18.00
          </p>
        </div>
      </div>
      {/* copyrights */}
      <p className="text-xs md:text-base font-medium text-center pb-2">
        Copyright &copy; 2026 by Tripgo. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
