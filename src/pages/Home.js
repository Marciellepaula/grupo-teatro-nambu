import React from "react";
import { Link } from "react-router-dom";
import TeamMember from "../components/TeamMember";

const teamMembers = [
  { id: 1, name: "Bárbara Machado", role: "Atriz", description: "Bárbara encanta o público...", imageUrl: "/img/babs.jpeg" },
  { id: 2, name: "Bia Berretta", role: "Atriz", description: "Bia traz emoção...", imageUrl: "/img/beta.jpeg" },
  { id: 3, name: "Crisnaldo Prado", role: "Ator", description: "Crisnaldo é conhecido...", imageUrl: "/img/crisnaldo.jpeg" },
  { id: 4, name: "Edimara Arcanjo", role: "Atriz", description: "Edimara impressiona...", imageUrl: "/img/edmara.jpeg" },
  { id: 5, name: "Emília", role: "Atriz", description: "Emília se destaca...", imageUrl: "/img/emilia.jpeg" },
  { id: 6, name: "Mari Madu", role: "Atriz", description: "Mari Madu cativa...", imageUrl: "/img/madu.jpeg" },
  { id: 7, name: "Marcielle de Paula", role: "Atriz", description: "Marcielle encanta...", imageUrl: "/img/marcielle.jpeg" },
  { id: 8, name: "May", role: "Atriz", description: "May é conhecida...", imageUrl: "/img/may.jpeg" },
  { id: 9, name: "Renan Martins", role: "Ator", description: "Renan traz emoção...", imageUrl: "/img/renan.jpeg" },
  { id: 10, name: "Sabriny Miranda", role: "Atriz", description: "Sabriny emociona...", imageUrl: "/img/sabriny.jpeg" },
  { id: 11, name: "Wanessa Kellen", role: "Atriz", description: "Wanessa é uma atriz...", imageUrl: "/img/wanessa.jpeg" },
];

const performances = [
  { title: "A Última Cena", description: "Uma peça emocionante...", imageUrl: "/images/ultima-cena.jpg" },
  { title: "O Enigma do Palco", description: "Um thriller teatral...", imageUrl: "/images/enigma-palco.jpg" },
  { title: "Sonhos de um Artista", description: "Um espetáculo envolvente...", imageUrl: "/images/sonhos-artista.jpg" },
];



const Home = () => {
  return (
    <div>
    <header className="relative text-white text-center overflow-hidden" style={{ height: '80vh' }}>
      
 
<div className="flex w-full h-full">

  <div className="w-1/3">
    <img
      src="img/imge.JPG" 
      alt="First Image"
      className="w-full h-full object-cover shadow-lg"
    />
  </div>
  

  <div className="w-1/3">
    <img
      src="img/image2.jpeg" 
      alt="Second Image"
      className="w-full h-full object-cover shadow-lg"
    />
  </div>


  <div className="w-1/3">
    <img
      src="img/image1.jpeg" 
      alt="Third Image"
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
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg">
              <Link to={`/actor/${member.id}`}>
                <TeamMember {...member} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nossos Espetáculos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {performances.map((performance, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={performance.imageUrl} alt={performance.title} className="w-full h-56 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">{performance.title}</h3>
              <p className="mt-2 text-gray-700">{performance.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
  );
};

export default Home;
