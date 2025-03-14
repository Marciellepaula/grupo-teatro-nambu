import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ActorDetails = ({ teamMembers }) => {
  const { id } = useParams();


  if (!Array.isArray(teamMembers) || teamMembers.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-xl font-semibold">Erro: Dados dos atores não disponíveis.</p>
      </div>
    );
  }


  const actor = teamMembers.find((member) => member.id === Number(id));


  if (!actor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl font-medium">Ator não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">{actor.name}</h1>
      <h2 className="text-2xl text-gray-600 font-medium text-center mb-8">{actor.role}</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <img
          src={actor.imageUrl}
          alt={`Foto de ${actor.name}`}
          className="w-full md:w-[60%] h-auto object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105"
        />

        <div className="flex-1 mt-6 md:mt-0">
          <p className="text-gray-700 text-lg leading-relaxed">{actor.description}</p>
          <p className="text-gray-600 text-lg mt-4">
            <strong>Idade:</strong> {actor.age} anos
          </p>
          <p className="text-gray-600 text-lg mt-2">
            <strong>Experiência:</strong> {actor.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

ActorDetails.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      experience: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActorDetails;
