import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ActorDetails from './components/ActorDetails';  
import Header from "./components/Header";
import TeamMember from "./components/TeamMember";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "./App.css"; 

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Bárbara Machado",
      role: "Atriz",
      description: "Bárbara encanta o público com sua interpretação intensa e carisma no palco.",
      imageUrl: "/img/babs.jpeg",
    },
    {
      id: 2,
      name: "Bia Berretta",
      role: "Atriz",
      description: "Bia traz emoção e profundidade a cada personagem que interpreta.",
      imageUrl: "/img/beta.jpeg",
    },
    {
      id: 3,
      name: "Crisnaldo Prado",
      role: "Ator",
      description: "Crisnaldo é conhecido por sua versatilidade e presença de palco marcante.",
      imageUrl: "/img/crisnaldo.jpeg",
    },
    {
      id: 4,
      name: "Edimara Arcanjo",
      role: "Atriz",
      description: "Edimara impressiona com sua entrega e talento em cada performance.",
      imageUrl: "/img/edmara.jpeg",
    },
    {
      id: 5,
      name: "Emília",
      role: "Atriz",
      description: "Emília se destaca pela sua habilidade em criar personagens complexos e emocionantes.",
      imageUrl: "/img/emilia.jpeg",
    },
    {
      id: 6,
      name: "Mari Madu",
      role: "Atriz",
      description: "Mari Madu cativa com sua expressividade e capacidade de emocionar o público.",
      imageUrl: "/img/madu.jpeg",
    },
    {
      id: 7,
      name: "Marcielle de Paula",
      role: "Atriz",
      description: "Marcielle encanta pela sua energia vibrante e pela profundidade das suas atuações.",
      imageUrl: "/img/marcielle.jpeg",
    },
    {
      id: 8,
      name: "May",
      role: "Atriz",
      description: "May é conhecida pela sua paixão e dedicação ao teatro, sempre entregando performances intensas.",
      imageUrl: "/img/may.jpeg",
    },
    {
      id: 9,
      name: "Renan Martins",
      role: "Ator",
      description: "Renan traz emoção e autenticidade para cada personagem que interpreta.",
      imageUrl: "/img/renan.jpeg",
    },
    {
      id: 10,
      name: "Sabriny Miranda",
      role: "Atriz",
      description: "Sabriny emociona com sua interpretação profunda e cheia de nuances.",
      imageUrl: "/img/sabriny.jpeg",
    },
    {
      id: 11,
      name: "Wanessa Kellen",
      role: "Atriz",
      description: "Wanessa é uma atriz de grande talento e presença, capaz de cativar qualquer plateia.",
      imageUrl: "/img/wanessa.jpeg",
    },
  ];
  

  const performances = [
    {
      title: "A Última Cena",
      description:
        "Uma peça emocionante sobre os desafios e triunfos de um grupo de teatro lidando com sua última apresentação.",
      imageUrl: "/images/ultima-cena.jpg",
    },
    {
      title: "O Enigma do Palco",
      description:
        "Um thriller teatral que mantém o público na ponta da cadeira com mistérios e reviravoltas inesperadas.",
      imageUrl: "/images/enigma-palco.jpg",
    },
    {
      title: "Sonhos de um Artista",
      description:
        "Um espetáculo envolvente que retrata a jornada de um ator em busca de seu grande momento nos palcos.",
      imageUrl: "/images/sonhos-artista.jpg",
    },
  ];

  return (
    <Router>
      <div className="flex flex-col">
        <NavBar />
        <Header />
        <main className="flex-grow bg-gray-50 py-10 px-6">
     
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre o Grupo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O Grupo de Teatro Nambu é uma companhia dedicada à arte dramática, trazendo histórias emocionantes ao público por meio de espetáculos envolventes.
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
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      description={member.description}
                      imageUrl={member.imageUrl}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Nossos Espetáculos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {performances.map((performance, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={performance.imageUrl}
                    alt={performance.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">{performance.title}</h3>
                  <p className="mt-2 text-gray-700">{performance.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <Routes>
        <Route path="/actor/:id" element={<ActorDetails teamMembers={teamMembers} />} />
      </Routes>
    </Router>
  );
}

export default App;
