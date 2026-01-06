import Banner from "@/components/about/Banner";
import Image from "next/image";

// add: how we work-icons, images and sizes,content
const about = () => {
  return (
    <section>
      <Banner />
      <div className="px-6 md:px-52 w-screen min-h-screen">
        {/* introduction */}
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-40 items-center my-10">
          <Image
            src="/about/about_1.jpg"
            alt=""
            height={500}
            width={400}
            className="rounded-md order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h6 className="uppercase text-base md:text-xl font-bold">
              About us
            </h6>
            <h3 className="text-3xl md:text-4xl font-semibold my-5">
              Welcome to Tripgo, where unforgettable travel
              experiences await you worldwide.
            </h3>
            <p className="text-base md:text-lg text-gray-500 ">
              We specialize in curating unique and immersive journeys that cater
              to every traveler&apos;s wanderlust. Whether you&apos;re dreaming
              of exploring exotic destinations, embarking on thrilling
              adventures, or simply unwinding in luxury, we&apos;re here to turn
              your travel dreams into reality.
            </p>
            <p className="text-base md:text-lg text-gray-500  mt-3">
              With our passion for exploration and commitment to exceptional
              service, we strive to make every trip an unforgettable adventure.
              Get ready to embark on the journey of a lifetime with Tripgo.
            </p>
          </div>
        </div>
        {/* mission or aim */}
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-40 items-center my-10">
          <div>
            <h6 className="uppercase text-xl font-bold mb-5">Our mission</h6>
            <p className="text-base md:text-lg text-gray-500">
              We specialize in curating unique and immersive journeys that cater
              to every traveler&apos;s wanderlust. Whether you&apos;re dreaming
              of exploring exotic destinations, embarking on thrilling
              adventures, or simply unwinding in luxury, we&apos;re here to turn
              your travel dreams into reality.
            </p>
            <p className="text-base md:text-lg text-gray-500 mt-3">
              With our passion for exploration and commitment to exceptional
              service, we strive to make every trip an unforgettable adventure.
              Get ready to embark on the journey of a lifetime with Tripgo.
            </p>
          </div>
          <Image
            src="/about/about_1.jpg"
            alt=""
            height={500}
            width={400}
            className="rounded-md"
          />
        </div>
        {/* how we work same for home page */}
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-40 items-center my-10">
          <Image
            src="/about/about_1.jpg"
            alt=""
            height={500}
            width={400}
            className="rounded-md order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h6 className="uppercase text-xl font-bold mb-5">Our Process</h6>
            <p className="text-base md:text-lg text-gray-500">
              We specialize in curating unique and immersive journeys that cater
              to every traveler&apos;s wanderlust. Whether you&apos;re dreaming
              of exploring exotic destinations, embarking on thrilling
              adventures, or simply unwinding in luxury, we&apos;re here to turn
              your travel dreams into reality.
            </p>
            <p className="text-base md:text-lg text-gray-500 mt-3">
              With our passion for exploration and commitment to exceptional
              service, we strive to make every trip an unforgettable adventure.
              Get ready to embark on the journey of a lifetime with Tripgo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;