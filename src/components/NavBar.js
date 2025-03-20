import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Sobre", id: "1" },
    { name: "Elenco", id: "2" },
    { name: "Espetáculos", id: "3" },
    { name: "Agenda", id: "4" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white py-4 px-6 flex items-center justify-between shadow-lg relative">
 
      <a href="/" className="flex items-center">
        <img
          src="nambu/logo.jpeg"
          alt="Logo"
          className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
        />
      </a>

      <div className="hidden md:flex space-x-8">
        {menuItems.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className=" text-base
            tracking-wide text-white hover:text-yellow-200 transition duration-300"
          >
            {name}
          </button>
        ))}
        <a href="/" className="text-base font-semibold  tracking-wide text-yellow-200 hover:text-white transition">
          Ajude esse Projeto
        </a>
    
      </div>

   
      <button
        className="md:hidden text-yellow-100 text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>


      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center py-6 space-y-5 md:hidden z-50 shadow-lg">
          {menuItems.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-lg uppercase font-semibold tracking-wide text-yellow-100 hover:text-orange-400 transition"
            >
              {name}
            </button>
          ))}
          <a href="/" className="text-lg uppercase font-semibold tracking-wide text-yellow-100 hover:text-orange-400 transition">
            Ajude esse Projeto
          </a>
       
        </div>
      )}
    </nav>
  );
};

export default NavBar;
