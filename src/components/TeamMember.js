import React from 'react';

const TeamMember = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">

      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 transform hover:scale-110"
      />
      
    
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-900 hover:text-yellow-500 transition duration-300">{name}</h3>
        <p className="text-md text-gray-600 italic">{role}</p>
        <p className="mt-2 text-gray-700 text-lg">{description}</p>
      </div>
      
   
      <div className="mt-4 text-center">
        <a
          href="#"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-orange-500 transition duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
