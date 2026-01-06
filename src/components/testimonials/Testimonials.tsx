import Image from "next/image";
import TitleComp from "../titleComp/TitleComp";

type Testimonials = {
  id: number;
  img: string;
  userName: string;
  para: string;
};

const data: Testimonials[] = [
  {
    id: 1,
    img: "/testimonials/test_1.jpg",
    userName: "Jessica M., New York, USA",
    para: "I had an unforgettable experience with Tripgo! The tour guides were incredibly knowledgeable and friendly, making our trip both educational and fun. The accommodations were top-notch, and every detail was taken care of, allowing us to relax and enjoy our vacation fully. Highly recommend to anyone looking for a seamless travel experience!",
  },
  {
    id: 2,
    img: "/testimonials/test_2.jpg",
    userName: "Rajesh K., Mumbai, India",
    para: "Our family vacation to Europe was beyond our expectations, thanks to Tripgo. From the moment we booked, everything was handled professionally. The itinerary was perfectly planned, giving us a great mix of sightseeing and relaxation. We created memories that will last a lifetime. Can't wait to book our next adventure with them!",
  },
  {
    id: 3,
    img: "/testimonials/test_3.jpg",
    userName: "Emily P., Sydney, Australia",
    para: "Tripgo made our dream honeymoon come true! The exotic locations, luxurious accommodations, and personalized service were just perfect. The special touches they added to our trip made us feel like royalty. We highly recommend their services for any special occasion travel.",
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 py-10 lg:py-20 xl:max-w-screen-2xl lg:max-w-5xl md:max-w-4xl sm:max-w-2xl max-w-lg flex flex-col mx-auto">
      <TitleComp
        classProp="place-items-center text-center"
        subtitles="what our"
        title="clients say"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 mt-10">
        {data.map((items) => (
          <div
            key={items.id}
            className={`${items.id === 3 ? "md:col-span-2 xl:col-span-1" : ""}`}
          >
            <article className="bg-white shadow-xl p-10 rounded-xl w-full min-h-[35vh] xl:min-h-[45vh] text-pretty flex items-center flex-col justify-between gap-5 xl:gap-0">
              <p className="text-sm xl:text-base font-medium">{items.para}</p>
              <Image
                className="w-14 md:w-16 h-14 md:h-16 rounded-full object-cover object-center"
                src={items.img}
                alt={items.userName}
                width={100}
                height={100}
              />
              <h5 className="font-medium text-base xl:text-lg capitalize">
                {items.userName}
              </h5>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
