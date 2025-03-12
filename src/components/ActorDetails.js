import React from "react";
import { useParams } from "react-router-dom";

function ActorDetails({ teamMembers }) {

  console.log(teamMembers);

  const { id } = useParams();  


  if (!Array.isArray(teamMembers)) {
    return <div>Erro: teamMembers não é um array.</div>;
  }


  const actor = teamMembers.teamMembers.find((member) => member.id === parseInt(id));

  if (!actor) {
    return <div>Ator não encontrado</div>;
  }

  return (
    <div>
      <h1>Detalhes do Ator: {actor.name}</h1>
      <h2>Função: {actor.role}</h2>
      <p>{actor.description}</p>
      <img src={actor.imageUrl} alt={actor.name} />
    </div>
  );
}

export default ActorDetails;
