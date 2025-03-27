import React from "react";
import { Link } from "react-router-dom";
import TeamMember from "../components/TeamMember";
import { performances } from "../data/performace";


import { fetchActors } from '../services/api';
import { useFetch } from '../hooks/useFetch';

const Home = (teamMembers) => {

  const { data: actors, loading, error } = useFetch(fetchActors);

  console.log(actors);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar atores</p>;


  return (

    
    <div>
    <header className="relative text-white text-center overflow-hidden" style={{ height: '80vh' }}>
      
 
<div className="flex w-full h-full">

<div className="w-1/3">
            <img
              src="nambu/IMG_5950 (1).JPG" 
              alt="Description of the first dvegt" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
  
          <div className="w-1/3">63891364.png
            <img
              src="nambu/curral.jpeg" 
              alt="Description of the second werwe" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
  
          <div className="w-1/3">
            <img
              src="nambu/curral2.JPG" 
              alt="Description of the third ertgferg" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
</div>


<div className="absolute inset-0 flex items-center justify-center z-10 px-4 py-10">
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Grupo de Teatro Nambu</h1>
    <p className="text-xl">Conectando arte e cultura com cada apresentação.</p>
  </div>
</div>
</header>

<section>

</section>
    <main  className="flex-grow bg-gray-50 py-10 px-6">
      
      <section  id ="1" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre o Grupo</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          O Grupo de Teatro Nambu é uma companhia dedicada à arte dramática...
        </p>
      </section>

      <section id ="2" className="mb-12" >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Conheça nossos integrantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.teamMembers.map((member) => (
            <div key={member.id}>
              <Link to={`/actor/${member.id}`}>
                <TeamMember {...member} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-16" id="3">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nossos Espetáculos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {performances.map((performance, index) => (

      <Link 
        key={performance.id} 
        to={`/show/${performance.id}`} 
        className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 block"
      >
        <img 
          src={performance.imageUrl} 
          alt={performance.title}  
          className="w-full h-72 object-cover rounded-t-lg shadow-md transition-transform transform hover:scale-110 duration-300"
        />
        <h3 className="text-2xl font-semibold mt-6 text-gray-800">{performance.title}</h3>
        <p className="mt-2 text-lg text-gray-600">{performance.description}</p>
      </Link>
    ))}
  </div>
</section>

<section className="mb-16" id ="4">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Agenda</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
  
  </div>
</section>

<section className="mb-16" id="5">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Ajude este projeto</h2>
  <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
    O Grupo de Teatro Nambu se mantém vivo graças ao apoio de pessoas como você! Contribua para que possamos continuar levando cultura e arte para mais pessoas.
  </p>

  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Doações</h3>
      <p className="text-gray-600 mb-4">
        Apoie financeiramente nosso projeto e ajude-nos a produzir novos espetáculos.
      </p>
 
      
        <Link className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300" to ="/doar/">   Contribuir</Link>
   
    </div>

    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Divulgue</h3>
      <p className="text-gray-600 mb-4">
        Compartilhe nosso trabalho nas redes sociais e ajude-nos a alcançar mais pessoas.
      </p>
      <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300">
        Compartilhar
      </button>
    </div>
  </div>
</section>

    </main>
    </div>
  );
};

export default Home;
