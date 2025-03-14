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
        <p
            className="mt-2 text-gray-700 text-lg"
                  style={{
                  display: "-webkit-box",
                   WebkitBoxOrient: "vertical",
                   WebkitLineClamp: 3,
                   overflow: "hidden",
            }}
            >
                {description}
           </p>
      </div>      
    </div>
  );
};

export default TeamMember;
