import Link from "next/link";
import Image from "next/image";

import PhoneIcon from "../Icons/PhoneIcon";
import EmailIcon from "../Icons/EmailIcon";
import OfficeIcon from "../Icons/OfficeIcon";
import ClockIcon from "../Icons/ClockIcon";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const ContactUs = () => {
  return (
    <section className="px-6 md:px-40 h-auto w-screen relative bg-white shadow-2xl my-10 py-10 overflow-hidden">
      <div className="mb-7">
        <h3 className="text-3xl md:text-4xl font-semibold capitalize mb-3">
          ContactUs
        </h3>
        <p className="text-base md:text-lg font-normal text-gray-500 md:w-1/3 w-full">
          Feel free to contact us any time. we will get back to you as soon as
          possible
        </p>
      </div>
      <div className="md:w-[50%] w-full relative h-[250px] md:h-[400px]">
        <Image
          src="/contact/contact-vector.jpg"
          alt=""
          fill
          sizes=""
          className="object-cover"
        />
      </div>
      <article className="bg-[rgb(52,52,56)] text-white md:w-[35%] w-full md:h-[50vh] h-auto md:p-16 p-8 relative md:absolute md:right-40 md:top-20 z-10 mt-10 md:mt-0">
        <div className="bg-yellow-400 w-10 h-10 absolute -top-4 -left-4"></div>
        <h4 className="font-semibold text-2xl md:text-3xl md:mb-10 mb-6">
          Info
        </h4>
        <div className="grid grid-cols-1 gap-10">
          <Link
            className="flex items-center gap-2"
            href="mailto: tripgo@gmail.com"
          >
            <EmailIcon classnameProp="w-6 h-6" />
            <p className="text-sm md:text-lg">tripgo@gmail.com</p>
          </Link>
          <Link className="flex items-center gap-2" href="tel: +1234567890">
            <PhoneIcon classnameProp="w-6 h-6" />
            <p className="text-sm md:text-lg">+1234567890</p>
          </Link>
          <address className="flex items-center gap-2">
            <OfficeIcon classnameProp="w-16 h-16 md:w-10 h-10" />
            <p className="text-sm md:text-lg">
              123, 3rd street silicon valley california US, 123, 3rd street
              silicon valley california US
            </p>
          </address>
          <div className="flex items-center gap-2">
            <ClockIcon classnameProp="w-6 h-6" />
            <p className="text-sm md:text-lg">9.00 - 18.00</p>
          </div>
        </div>
      </article>

      <aside className="bg-yellow-400 w-[15%] absolute right-0 top-0 h-full z-0 pb-5 hidden md:block">
        <div className="flex items-end justify-center h-full gap-10">
          <Link href="">
            <InstagramLogoIcon className="w-6 h-6 opacity-70 hover:opacity-100" />
          </Link>
          <Link href="">
            <LinkedInLogoIcon className="w-6 h-6 opacity-70 hover:opacity-100" />
          </Link>
          <Link href="">
            <GitHubLogoIcon className="w-6 h-6 opacity-70 hover:opacity-100" />
          </Link>
        </div>
      </aside>
    </section>
  );
};

export default ContactUs;