import React, { useEffect, useState } from "react";
import { View } from "../components";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <header className="header-img  ">
        <div className="shadow  "></div>
        <View>
          <nav className="flex justify-between p-7  relative z-20">
            <div className="flex  gap-20 items-center">
              <img class="h-24" src={Logo} alt="" />
              <ul className="hidden lg:flex gap-10">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <li>Contact</li>
                <li>Page</li>
              </ul>
            </div>
            <div className="flex gap-7 items-center">
              <p>Call Us: +123 456 7890</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </nav>
        </View>

        {/* title */}

        <div className="relative z-30 flex gap-y-5 flex-col items-center justify-center h-5/6 mt-auto">
          <h1 className="text-8xl font-[800] text-white">DIGITAL SERVICES</h1>
          <p className="text-3xl font-bold">BUILDING YOUR EMPIRE DIGITALLY</p>

          <div className="flex gap-5 text-xl font-medium">
            <button className="btn_hover1 rounded-full w-52  h-16">
              Get Started
            </button>
            <button className="border-[#7436bb] border rounded-full h-16 w-52 hover:bg-[#FC9827] transition-all">
              Discover More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
