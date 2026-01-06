"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="
    flex items-center gap-2
    rounded-lg px-5 py-2
    text-sm font-semibold
    text-red-600
    border border-red-200
    hover:bg-red-50 hover:text-red-700
    active:scale-95
    transition-all duration-200
  "
    >
      Logout
    </button>
  );
};

export default Logout;
