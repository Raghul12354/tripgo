"use client";
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";
import Button from "../button/Button";
import { LinkComp } from "./Navbar";

export function Mobile_Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer dismissible={false} open={open} direction="right">
      <DrawerTrigger asChild onClick={() => setOpen(true)}>
        <button>
          <MenuIcon classProp="w-10 h-10 cursor-pointer" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerClose
          asChild
          onClick={() => setOpen(false)}
          className="flex justify-end w-full pr-5"
        >
          <button className="border-none w-fit mt-5">
            <CloseIcon classProp="w-10 h-10 cursor-pointer" />
          </button>
        </DrawerClose>
        <DrawerHeader className="flex flex-col gap-10 justify-center items-center h-full">
          <button onClick={() => setOpen(false)}>
            <LinkComp linkProp="/" linkName="home" />
          </button>
          {/* <button onClick={() => setOpen(false)}>
          <LinkComp linkProp="/#services" linkName="services" />
          </button> */}
          <button onClick={() => setOpen(false)}>
            <LinkComp linkProp="/about" linkName="about" />
          </button>
          <button onClick={() => setOpen(false)}>
            <LinkComp linkProp="/destinations" linkName="destinations" />
          </button>
            <button onClick={() => setOpen(false)}>
            <LinkComp linkProp="/dashboard" linkName="dashboard" />
          </button>
          <button onClick={() => setOpen(false)}>
            <Button
              linkProp="/booking"
              nameProp="enquire now"
              classProp="px-8 py-3 text-lg text-black block md:hidden"
            />
          </button>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}