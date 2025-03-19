import React,  { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Show = ({ performances }) => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const show = performances.find((member) => member.id === Number(id));

  if (!show) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl font-medium">Ator não encontrado.</p>
      </div>
    );
  }


  const images = [
    '/nambu/espetaculocurral.jpeg',
    '/nambu/imge.JPG',
    '/nambu/madu.jpeg',
    '/nambu/curral4.jpeg',
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-full">
      <section
        className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: `url(/nambu/espetaculocurral.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1>{show.title}</h1>
        </div>
      </section>

      <section className="py-12 px-4 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Release</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {show.description}
        </p>
      </section>

      <section
        className="relative w-full h-[650px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: `url(/nambu/espetaculocurral2.jpeg)` }}
      >
      </section>


      <section className="bg-orange-400 text-white p-10 h-[550px] flex items-center justify-center mt-16">
  <div className="max-w-5xl w-full">
    <h2 className="font-bold text-2xl">SINOPSE</h2>
    <p className="mt-4 text-lg">
      Duas mulheres, separadas temporalmente e espacialmente por dezoito anos. Uma delas conversa com a filha,
      menina que brinca entre as costuras da mãe. A outra está à espera de alguém que vai chegar, e enquanto isso
      ensaia com um gravador as palavras que serão ditas. Aos poucos, dos silêncios emerge uma história de
      violência como muitas outras, alternando divergência e carinho, palavras rudes e atos de amor. Esse
      movimento – aparentemente circular – se revela na verdade uma espiral, em que a intensidade da violência vai
      lentamente galgando patamares mais altos.
    </p>
    
    <div className="grid grid-cols-2 gap-4 mt-6 text-lg">
      <div>
        <p><strong>Atuação:</strong> Bárbara Machado
Bia Berretta
Crisnaldo Prado
Edimara Arcanjo
Emília
Mari Madu
Marcielle de Paula
May
Renan Martins
Sabriny Miranda
Wanessa Kellen</p>
        <p><strong>Direção:</strong> Virginia Oliveira</p>
        <p><strong>Direção Musical:</strong>Guilherme Santos </p>
        <p><strong>Dramaturgia:</strong> Grupo Matula Teatro, a partir do texto de Gracia Morales</p>
       
      </div>
      <div>
      <p><strong>Iluminação e cenotécnica:</strong> Alunos Curso Técnico de Iluminação Adan Clayton Carneiro de Sousa Bianca Berretta Daniel Fernandes Eduarda Cândido Renan Martins Yara Veiga</p>
        <p><strong>Orientador de Iluminação: </strong>Marcelino</p>
        <p><strong>Figurinos:</strong> Ateliê Artdeco Daniel Fernandes Edmila Marques Wanderson Sena</p>
        <p><strong>Preparação Corporal: </strong>Renan Salgueiro</p>
        <p><strong>Identidade Visual:</strong> Bruno Cardoso</p>
        <p><strong>Fotos:</strong> Maycon Soldan e Paula Poltronieri</p>
     
      </div>
    </div>
  </div>
</section>



<div>
<section className="py-12 px-5 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Cena ${index + 1}`}
        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md cursor-pointer"
        onClick={() => openModal(image)}
      />
    ))}
  </div>
</section>


  {isModalOpen && (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 bg-white text-black rounded-full p-2"
        >
          X
        </button>
        <img
          src={selectedImage}
          alt="Imagem selecionada"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  )}
</div>

    </div>
  );
};

Show.propTypes = {
  performances: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Show;
