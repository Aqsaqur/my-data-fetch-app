"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaServer } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 mb-4 text-center tracking-tight uppercase">
       ♡
      </h1>
      <p className="text-xl font-semibold sm:text-2xl text-pink-700 mb-12 text-center">
      ˚˖𓍢ִ໋🌷 Explore how data is fetched using both client-side and server-side approaches in Next.js. 🌷͙֒
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-8 gap-8 mb-10 w-full sm:w-auto">
        <Link href="/client-side">
          <button className="px-8 py-4 sm:px-12 sm:py-6 bg-white text-pink-800 font-medium rounded-lg">
            <FaArrowRight />
            <span className="text-base sm:text-lg">Client-side Data Fetching🎀</span>
          </button>
        </Link>
        <Link href="server-side">
          <button className="px-8 py-4 sm:px-12 sm:py-6 bg-white text-pink-800 font-medium rounded-lg">
            <FaServer/>
            <span className="text-base sm:text-lg">Server-side Data Fetching🎀</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

