"use client";

import { ImageDown, MapPin, Plus } from "lucide-react";
import { useState } from "react";

const UpdateTours = () => {
  const [updateTours, setUpdateTours] = useState({
    img: "",
    title: "",
    description: "",
    location: "",
  });

  const handleTours = (e: any) => {
    const { name, value } = e.target;
    setUpdateTours({ ...updateTours, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTours),
      });
      if (res.ok) {
        setUpdateTours({
          img: "",
          title: "",
          description: "",
          location: "",
        });
      } else {
        console.log("Error Updating the tour");
      }
    } catch (error) {
      console.log(error, "failed to update the tours in db");
    }
  };
  // };

  return (

    <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Tour</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <div className="relative">
            <ImageDown className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              type="text"
              name="img"
              value={updateTours.img}
              onChange={handleTours}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tour Title
          </label>
          <input
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            type="text"
            name="title"
            value={updateTours.title}
            onChange={handleTours}
            placeholder="Amazing Beach Resort"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            name="description"
            value={updateTours.description}
            onChange={handleTours}
            placeholder="Describe your tour..."
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              type="text"
              name="location"
              value={updateTours.location}
              onChange={handleTours}
              placeholder="Bali, Indonesia"
              required
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Tour
        </button>
      </div>
    </div>
  );
};

export default UpdateTours;
