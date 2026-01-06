"use client";
import React, { useState } from "react";
import { z } from "zod";
import Modal from "@/components/booking/modal";
import { StartDate } from "@/components/booking/dateComp";
import { EndDateComp } from "@/components/booking/EndDateComp";
import { Separator } from "@/components/ui/separator";

const bookingSchema = z.object({
  Name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50),
  Email: z.string().email({ message: "Please enter a valid email address." }),
  PhoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
  TourName: z.string().min(1, { message: "Please select a tour name." }),
  Transport: z
    .string()
    .min(1, { message: "Please select transportation preference." }),
  Adults: z.string().min(1, { message: "Please enter number of adults." }),
  Children: z.string().min(1, { message: "Please enter number of children." }),
  StartDate: z.string().min(1, { message: "Please select start date." }),
  EndDate: z.string().min(1, { message: "Please select end date." }),
});

const Booking = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    TourName: "",
    Transport: "",
    Adults: "",
    Children: "",
    StartDate: "",
    EndDate: "",
    SplMessage: "",
  });
  // console.log("Current form state:", form);
  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  // start_Date Function
  const handleStartDateSelect = (StartDate: Date | null) => {
    if (StartDate) {
      const startDate = StartDate.toISOString().split("T")[0];
      setForm({ ...form, StartDate: startDate });
    }
  };

  // End_Date Function
  const handleEndDate = (EndDate: Date | null) => {
    if (EndDate) {
      const endDate = EndDate.toISOString().split("T")[0];
      setForm({ ...form, EndDate: endDate });
    }
  };
  const handleSubmit = async (e: any) => {
    try {
      //** Validate form data using zod schema
      bookingSchema.parse(form);
      //** POST req
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      setOpenModal(true);
      const data = await response.json();
      // console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error while submitting form:", error);
      // If validation fails, set the errors state
      if (error instanceof z.ZodError) {
        setErrors(
          error.errors.reduce((acc: Record<string, string>, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {})
        );
      }
    }
  };
  //  EmailHandler
  const handleEmail = async (e: any) => {
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit Email Form");
      }
    } catch (error) {
      console.error("Error while submitting Email Form:", error);
    }
  };

  return (
    <div className="p-6 md:px-40 w-screen min-h-screen py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          handleEmail(e);
        }}
        className="p-8 md:p-20 bg-white shadow-xl rounded"
      >
        {/* Tour details  */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Destination Details
            </h2>
            <p className="hidden md:block">
              All fields marked with{" "}
              <span className="text-red-500 text-xl">&apos; * &apos;</span> must
              be filled in
            </p>
          </div>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label">
              <p>
                Select your favorite Destination{" "}
                <span className="text-red-500">*</span>
              </p>
              {errors.TourName && (
                <p className="text-red-500">{errors.TourName}</p>
              )}
              <select
                className="booking_input pt-1"
                onChange={handleForm}
                value={form.TourName}
                name="TourName"
              >
                <option value="">Select...</option>
                <option value="TamilNadu Tour">TamilNadu Tour</option>
                <option value="Kerala Tour">Kerala Tour</option>
                <option value="Goa Tour">Goa Tour</option>
              </select>
            </label>
            <label className="booking_label">
              <p>
                Would you like assistance with Transportation?{" "}
                <span className="text-red-500">*</span>
              </p>
              {errors.Transport && (
                <p className="text-red-500">{errors.Transport}</p>
              )}
              <select
                className="booking_input pt-1"
                name="Transport"
                onChange={handleForm}
                value={form.Transport}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="booking_label">
              <p>
                Start Date
                <span className="text-red-500"> *</span>
              </p>
              {errors.StartDate && (
                <p className="text-red-500">{errors.StartDate}</p>
              )}
              <StartDate
                nameProp="Select your start date"
                dateProp={handleStartDateSelect}
              />
            </label>
            <label className="booking_label">
              <p>
                End Date <span className="text-red-500"> *</span>
              </p>
              {errors.endDate && (
                <p className="text-red-500">{errors.endDate}</p>
              )}
              <EndDateComp
                nameProp="Select your end date"
                endDateProp={handleEndDate}
              />
            </label>
            <label className="booking_label">
              <p>
                No. of Adults
                <span className="text-red-500"> *</span>
              </p>
              {errors.Adults && <p className="text-red-500">{errors.Adults}</p>}
              <input
                className="booking_input "
                type="text"
                name="Adults"
                onChange={handleForm}
                value={form.Adults}
              />
            </label>
            <label className="booking_label">
              <p>
                No. of Children
                <span className="text-red-500"> *</span>
              </p>
              {errors.Children && (
                <p className="text-red-500">{errors.Children}</p>
              )}
              <input
                className="booking_input "
                type="text"
                name="Children"
                onChange={handleForm}
                value={form.Children}
              />
            </label>
          </div>
        </div>
        {/* Personal details  */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 mt-10">
            Personal Details
          </h2>
          <Separator className="mb-10 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <label className="booking_label col-span-2 md:col-span-1">
              <p>
                Full Name
                <span className="text-red-500"> *</span>
              </p>
              {errors.Name && <p className="text-red-500">{errors.Name}</p>}
              <input
                className="booking_input"
                type="text"
                name="Name"
                onChange={handleForm}
                value={form.Name}
              />
            </label>
            <label className="booking_label">
              <p>
                Phone Number
                <span className="text-red-500"> *</span>
              </p>
              {errors.PhoneNumber && (
                <p className="text-red-500">{errors.PhoneNumber}</p>
              )}
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.PhoneNumber}
                type="tel"
                name="PhoneNumber"
              />
            </label>
            <label className="booking_label col-span-2">
              <p>
                Email
                <span className="text-red-500"> *</span>
              </p>
              {errors.Email && <p className="text-red-500">{errors.Email}</p>}
              <input
                className="booking_input"
                onChange={handleForm}
                value={form.Email}
                type="email"
                name="Email"
              />
            </label>
            <label className="booking_label col-span-2">
              Do you have any special requests?
              <textarea
                className="border-2 w-full mt-3"
                placeholder="Type here..."
                name="SplMessage"
                onChange={handleForm}
                value={form.SplMessage}
                cols={30}
                rows={10}
                spellCheck={true}
              />
            </label>
          </div>
        </div>
        {openModal ? (
          <Modal />
        ) : (
          <button
            className="text-lg md:text-xl font-medium bg-yellow-400 rounded-xl px-16 py-3 shadow-md hover:bg-yellow-500 mt-12 md:mt-16 mx-auto flex"
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Booking;