import React from "react";
import { Link } from "react-router-dom";
import TeamMember from "../components/TeamMember";


const performances = [
  { title: "A Última Cena", description: "Uma peça emocionante...", imageUrl: "/nambu/espetaculocurral.jpeg" },
  { title: "O Enigma do Palco", description: "Um thriller teatral...", imageUrl: "/nambu/espetaculocurral2.jpeg" },
  { title: "Sonhos de um Artista", description: "Um espetáculo envolvente...", imageUrl: "/nambu/espetaculocurral1.jpeg" },
];



const Home = (teamMembers) => {
  return (
    <div>
    <header className="relative text-white text-center overflow-hidden" style={{ height: '80vh' }}>
      
 
<div className="flex w-full h-full">

<div className="w-1/3">
            <img
              src="nambu/curral3.jpeg" 
              alt="Description of the first dvegt" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
  
          <div className="w-1/3">
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
    <main className="flex-grow bg-gray-50 py-10 px-6">
      
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre o Grupo</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          O Grupo de Teatro Nambu é uma companhia dedicada à arte dramática...
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Conheça nossos integrantes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg">
              <Link to={`/actor/${member.id}`}>
                <TeamMember {...member} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nossos Espetáculos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {performances.map((performance, index) => (
      <div key={index} className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
        <img 
          src={performance.imageUrl} 
          alt={performance.title}  // Removed redundant "image" or "photo"
          className="w-full h-72 object-cover rounded-t-lg shadow-md transition-transform transform hover:scale-110 duration-300"
        />
        <h3 className="text-2xl font-semibold mt-6 text-gray-800">{performance.title}</h3>
        <p className="mt-2 text-lg text-gray-600">{performance.description}</p>
      </div>
    ))}
  </div>
</section>

    </main>
    </div>
  );
};

export default Home;
