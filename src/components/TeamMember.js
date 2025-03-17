import React from 'react';

const TeamMember = ({ name, role, description, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white rounded-lg overflow-hidden shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-t-lg transition-all duration-300 transform hover:scale-110"
      />

      <div className="p-6">
        <h3 className="text-3xl font-semibold text-gray-900 hover:text-yellow-500 transition duration-300">{name}</h3>
        <p className="text-lg text-gray-600 italic">{role}</p>
        <p
          className="mt-3 text-gray-700 text-lg leading-relaxed"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4,
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
