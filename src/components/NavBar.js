import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white py-4 px-6 flex items-center justify-between shadow-lg">
 
      <div className="flex items-center">
        <img
          src="img/logo.jpeg" 
          alt="Logo"
          className="h-20 w-auto rounded-full"
        />
      </div>

     
      <div className="hidden md:flex space-x-6">
        {["Schedule", "About", "The Spirit Room", "Weddings & Rentals", "Support"].map(
          (item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-black font-bold py-2 px-4 hover:bg-orange-500 transition duration-300 hidden md:inline-block"

 
            >
              {item}
            </a>
          )
        )}
      </div>

  
      <a
        href="/buy-tickets"
        className=" text-black font-bold py-2 px-4 rounded-full  transition hidden md:inline-block"
      >
        Buy Tickets
      </a>

  
      <button
        className="md:hidden text-yellow-400 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>


      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#002B36] flex flex-col items-center py-4 space-y-4 md:hidden">
          {["Schedule", "About", "The Spirit Room", "Weddings & Rentals", "Support"].map(
            (item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-lg text-yellow-400 hover:text-orange-400 transition"
              >
                {item}
              </a>
            )
          )}

       
          <a
            href="/buy-tickets"
            className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-orange-500 transition"
          >
            Buy Tickets
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
