// import React from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const Show = ({ performances }) => {
//   const { id } = useParams();

//   console.log(performances)

//   if (!Array.isArray(performances) || performances.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p className="text-red-500 text-xl font-semibold">Erro: Dados dos atores não disponíveis.</p>
//       </div>
//     );
//   }


//   const show = performances.find((member) => member.id === Number(id));


//   if (!show) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p className="text-gray-600 text-xl font-medium">Ator não encontrado.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
//       <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">{show.title}</h1>
//       <p className="text-gray-700 text-lg leading-relaxed">{show.description}</p>

//       <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

//       <div className="flex-1 mt-6 md:mt-0">
          
    
//         </div>
//         <img
//           src={show.imageUrl}
//           alt={`Foto de ${show.title}`}
//           className="w-full md:w-[60%] h-auto object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105"
//         />
//       </div>
//     </div>
//   );
// };



import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Show = ({ performances }) => {
  const { id } = useParams();

  const show = performances.find((member) => member.id === Number(id));

  if (!show) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl font-medium">Ator não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
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
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: `url(/nambu/espetaculocurral.jpeg)` }}
      >
      </section>


      <section className="bg-[#a06995] text-white p-10 h-[500px] flex items-center justify-center mt-16">
      <div className="max-w-5xl w-full">
        <h2 className="font-bold text-lg">SINOPSE</h2>
        <p className="mt-2 text-sm">
          Duas mulheres, separadas temporalmente e espacialmente por dezoito anos. Uma delas conversa com a filha,
          menina que brinca entre as costuras da mãe. A outra está à espera de alguém que vai chegar, e enquanto isso
          ensaia com um gravador as palavras que serão ditas. Aos poucos, dos silêncios emerge uma história de
          violência como muitas outras, alternando divergência e carinho, palavras rudes e atos de amor. Esse
          movimento – aparentemente circular – se revela na verdade uma espiral, em que a intensidade da violência vai
          lentamente galgando patamares mais altos.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div>
            <p><strong>Atuação:</strong> Alice Possani e Erika Cunha</p>
            <p><strong>Direção:</strong> Verônica Fabrini</p>
            <p><strong>Trilha sonora original:</strong> Dudu Ferraz</p>
            <p><strong>Dramaturgia:</strong> Grupo Matula Teatro, a partir do texto de Gracia Morales</p>
            <p><strong>Iluminação e cenotécnica:</strong> Eduardo Albregaria</p>
            <p><strong>Figurinos:</strong> Anna Kühl</p>
            <p><strong>Provocações temáticas:</strong> Stella Fisher</p>
            <p><strong>Produção:</strong> Matula Teatro</p>
          </div>
          <div>
            <p><strong>Identidade Visual:</strong> Bruno Cardoso</p>
            <p><strong>Fotos:</strong> Maycon Soldan e Paula Poltronieri</p>
            <p><strong>Costuras:</strong> João Castilho</p>
            <p><strong>Bordados:</strong> Anna Kühl, Amanda Pitta, Erika Cunha, Flora Armani</p>
            <p><strong>Registro audiovisual:</strong> Ericson Cunha, Pedro Ribeiro e Carlos Joaquim</p>
            <p><strong>Edição de imagens:</strong> Ericson Cunha</p>
            <p><strong>Realização:</strong> Grupo Matula Teatro</p>
          </div>
        </div>
      </div>
    </section>


      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/nambu/espetaculocurral.jpeg" alt="Cena 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/nambu/espetaculocurral.jpeg" alt="Cena 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/nambu/espetaculocurral.jpeg" alt="Cena 3" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/nambu/espetaculocurral.jpeg" alt="Cena 4" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>
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
