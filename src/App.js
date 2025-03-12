import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ActorDetails from './components/ActorDetails';  
import Header from "./components/Header";
import TeamMember from "./components/TeamMember";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Bárbara Machado",
      role: "Atriz",
      description:
        "Bárbara encanta o público com sua interpretação intensa e carisma no palco.",
      imageUrl: "/images/babs.jpeg",
    },
    {
      id: 2,
      name: "Bia Berretta",
      role: "Atriz",
      description:
        "Bia traz emoção e profundidade a cada personagem que interpreta.",
      imageUrl: "/images/beta.jpeg",
    },
    {
      id: 3,
      name: "Crisnaldo Prado",
      role: "Ator",
      description:
        "Crisnaldo é conhecido por sua versatilidade e presença de palco marcante.",
      imageUrl: "/images/cris.jpeg",
    },
    {
      id: 4,
      name: "Edimara Arcanjo",
      role: "Atriz",
      description:
        "Edimara impressiona com sua entrega e talento em cada performance.",
      imageUrl: "/images/edmara.jpeg",
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
          {/* ABOUT THE GROUP, TEAM MEMBERS, PERFORMANCES */}
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
        {/* Pass `teamMembers` as prop to ActorDetails */}
        <Route path="/actor/:id" element={<ActorDetails teamMembers={teamMembers} />} />
      </Routes>
    </Router>
  );
}

export default App;
