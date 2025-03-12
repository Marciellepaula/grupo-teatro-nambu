import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#002B36] text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://your-logo-url.com/logo.png" 
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {["Schedule", "About", "The Spirit Room", "Weddings & Rentals", "Support"].map(
          (item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-lg hover:text-gray-300 transition"
            >
              {item}
            </a>
          )
        )}
      </div>


      <a
        href="/buy-tickets"
        className="bg-[#D1A677] text-black font-bold py-2 px-4 rounded-full hover:bg-[#b98b5c] transition"
      >
        Buy Tickets
      </a>
    </nav>
  );
};

export default NavBar;
