"use client";
import React, { useRef } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  {
    id: 1,
    img: "/hero/hero_carousel-1.jpg",
    title: "Unforgettable Adventures Await",
    desc: "Embark on handcrafted adventures with Tripgo. From scaling peaks to azure waters, explore wonders worldwide. Start your journey today!",
  },
  {
    id: 2,
    img: "/hero/hero_carousel-2.jpg",
    title: "Escape to Exotic Paradises",
    desc: "Indulge in wanderlust with Tripgo. Dive into paradise as you explore sun-drenched beaches, ancient ruins, and hidden gems. Let us be your guide to the ultimate escape!",
  },
  {
    id: 3,
    img: "/hero/hero_carousel-3.jpg",
    title: "Luxury Redefined: Opulent Escapes",
    desc: "Experience luxury redefined with Tripgo. From opulent accommodations to exclusive experiences, elevate your travel dreams. Discover elegance and sophistication",
  },
  {
    id: 4,
    img: "/hero/hero_carousel-4.jpg",
    title: "Culture & Heritage Immersion",
    desc: "Immerse in global cultures with Tripgo. Curated journeys reveal traditions, cuisine, and landscapes. Begin your cultural odyssey now!",
  },
];

const Hero = () => {
  const autoPlay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="max-h-full w-screen bg-black">
      <Carousel
        plugins={[autoPlay.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {data.map((item, index) => {
            const { img, desc, title } = item;
            return (
              <CarouselItem
                key={index}
                className="relative h-[90vh] flex flex-col justify-center items-center text-white text-center"
              >
                <Image
                  src={img}
                  alt={title}
                  fill={true}
                  priority
                  quality={100}
                  sizes="100vw"
                  className="object-cover -z-10 opacity-70"
                />
                <div>
                  <h1 className="text-3xl md:text-5xl mb-3 md:mb-5 font-semibold">
                    {title}
                  </h1>
                  <p className="px-5 w-full md:w-[60%] mx-auto text-xs md:text-base">{desc}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-[11rem] md:-translate-x-[35rem] -translate-y-1/2 hover:bg-black hover:opacity-100 bg-black opacity-50 border-none w-10 h-10 md:w-12 md:h-12" />

        <CarouselNext className="hidden md:flex absolute top-1/2 right-1/2 transform translate-x-[11rem] md:translate-x-[35rem] -translate-y-1/2 hover:bg-black hover:opacity-100 bg-black opacity-50 border-none w-10 h-10 md:w-12 md:h-12" />
      </Carousel>
    </section>
  );
};

export default Hero;