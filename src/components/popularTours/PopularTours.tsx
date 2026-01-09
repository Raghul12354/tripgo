"use client";

import { useEffect, useState } from "react";
import TitleComp from "../titleComp/TitleComp";

import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const PopularTours = () => {
  const [popularTour, SetPopularTour] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch("/api/destinations");
        const result = await response.json();
        console.log(result);
        SetPopularTour(result.data);
      } catch (error) {
        console.log(error, "error fetching data from tours");
      }
    };
    fetchTour();
  }, []);

  const customData = {
    1: {
      link: "/destinations/1",
      gridStyle: "md:h-full w-full md:col-span-1 md:row-span-3",
    },
    2: {
      link: "/destinations/2",
      gridStyle: "md:h-[300px] w-full",
    },
    7: {
      link: "/destinations/7",
      gridStyle: "md:h-[300px] w-full",
    },
    8: {
      link: "/destinations/8",
      gridStyle: "md:h-[400px] w-full md:col-span-2 row-span-2",
    },
  };

  return (
    <section className="p-6 md:px-40 min-h-screen w-screen flex flex-col justify-start gap-8 md:gap-12 mt-10">
  <TitleComp
    classProp="place-items-center"
    subtitles="Explore Our"
    title="Top Picks"
  />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
    {popularTour.map((item) => {
      const { id, img, title, city } = item;
      const data = customData[id];
      if (!data) return null;

      const { link, gridStyle } = data;

      return (
        <Link
          key={id}
          href={link}
          className={`${gridStyle} group h-[200px] relative grid items-end pb-7 text-white rounded-2xl overflow-hidden
          transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl`}
        >
          <Image
            src={img}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex justify-between px-7 items-center z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold capitalize">
                {title}
              </h3>
              <p className="text-sm md:text-lg opacity-90 capitalize">
                {city}
              </p>
            </div>

            <ArrowTopRightIcon
              className="h-6 w-6 border border-white/70 rounded-full p-1
              transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </Link>
      );
    })}
  </div>
</section>

  );
};

export default PopularTours;
