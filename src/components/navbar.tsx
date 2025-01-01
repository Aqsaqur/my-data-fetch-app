"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLaptopCode, FaServer, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const close = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-300 via-pink-300 to-pink-300 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-serif font-extrabold text-white">Data Fetching</div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="flex items-center px-4 py-2 rounded-md text-white hover:bg-opacity-20 hover:bg-black transition">
            <FaHome/> Home
          </Link>
          <Link
            href="/client-side"
            className="flex items-center px-4 py-2 rounded-md text-white hover:bg-opacity-20 hover:bg-black transition">
            <FaLaptopCode /> Client Side
          </Link>
          <Link
            href="/server-side"
            className="flex items-center px-4 py-2 rounded-md text-white hover:bg-opacity-20 hover:bg-black transition">
            <FaServer/> Server Side
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu} />
      )}
      <div
        className={`md:hidden fixed top-0 right-0 w-2/3 h-auto bg-gradient-to-b from-pink-300 to-pink-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col items-end pt-6">
          <button
            onClick={toggleMenu}
            className="mb-4 text-white"
            aria-label="Close ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <Link
            href="/"
            className="flex items-center w-full px-4 py-3 rounded-md text-center text-white hover:bg-opacity-20 hover:bg-black transition"
            onClick={close}
          >
            <FaHome/> Home
          </Link>
          <Link
            href="/client-side"
            className="flex items-center w-full px-4 py-3 rounded-md text-center text-white hover:bg-opacity-20 hover:bg-black transition"
            onClick={close}
          >
            <FaLaptopCode/> Client Side
          </Link>
          <Link
            href="/server-side"
            className="flex items-center w-full px-4 py-3 rounded-md text-center text-white hover:bg-opacity-20 hover:bg-black transition"
            onClick={close}>
            <FaServer/> Server Side
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;