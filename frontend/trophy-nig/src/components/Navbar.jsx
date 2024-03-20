import React, { useEffect, useState } from "react";
import cn from "classnames";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      class={cn(
        scrollY
          ? "bg-white p-4 fixed top-0 w-full z-50"
          : "p-4 fixed top-0 w-full z-50",
        style.navBar
      )}
    >
      <div
        class={cn(
          "container mx-auto flex sm:justify-between md:justify-around lg:justify-around items-center",
          style.navBarContain
        )}
      >
        {/* <!-- Logo --> */}
        <a href="#" class="flex items-center">
          <img
            src="https://trophyproperty.ng/wp-content/uploads/2024/02/Trophy-Nig-LOGO-1.png"
            alt="Logo"
            class="mr-2 h-24"
          />
        </a>

        {/* <!-- Navbar links --> */}
        <div class="md:hidden">
          {/* <!-- Hamburger menu icon --> */}
          <button class="text-white focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="hidden md:flex items-center gap-10 font-bold">
          <a href="#" class="text-green-400 hover:text-green-400 px-3 py-2">
            Home
          </a>
          <a href="#" class="text-green-400 hover:text-green-400 px-3 py-2">
            Properties
          </a>
          <a href="#" class="text-green-400 hover:text-green-400 px-3 py-2">
            Designs
          </a>
          <a href="#" class="text-green-400 hover:text-green-400 px-3 py-2">
            Search
          </a>
          <a href="#" class="text-green-400 hover:text-green-400 px-3 py-2">
            About us
          </a>

          {/* <!-- Person icon --> */}
          <div class="flex items-center ml-4">
            <svg
              class="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2C7 2 3 6 3 11s4 9 9 9 9-4 9-9-4-9-9-9zm0 2a3 3 0 110 6 3 3 0 010-6zM12 16s-3 2-6 2c-2 0-2 2-2 3h16c0-1 0-3-2-3-3 0-6-2-6-2z"
              ></path>
            </svg>
          </div>

          {/* <!-- Create Listing button --> */}
          <button class="bg-green-500 text-white font-bold py-2 px-4 rounded flex items-center">
            Create Listing
            {/* <!-- Angle down icon --> */}
            <svg
              class="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
