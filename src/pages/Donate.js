import React, { useState } from "react";
import { FaPaypal, FaQrcode } from "react-icons/fa";


const Donate = () => {
  const [showQR, setShowQR] = useState(false);
  const pixKey = "marcielle0644@gmail.com";

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Ajude o Grupo de Teatro Nambu</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
        Sua contribuição é essencial para que possamos continuar levando cultura e arte a mais pessoas. Escolha uma opção abaixo e faça sua doação.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaPaypal className="text-blue-600 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">PayPal</h3>
          <p className="text-gray-600 mb-4">Doe facilmente com sua conta PayPal.</p>
          <a
            href="https://www.paypal.com/donate/?business=marcielle0644@gmail.com&currency_code=BRL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Doar com PayPal
          </a>
        </div>

  
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaQrcode className="text-green-600 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pix</h3>
          <p className="text-gray-600 mb-4">Faça um Pix para ajudar nosso projeto.</p>
        
          <button
            onClick={() => {
              navigator.clipboard.writeText(pixKey);
              alert("Chave Pix copiada!");
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 mb-2"
          >
            Copiar Chave Pix
          </button>

     
          <button
            onClick={() => setShowQR(true)}
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Exibir QR Code
          </button>
        </div>
{/* 
 
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaCreditCard className="text-yellow-600 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cartão de Crédito</h3>
          <p className="text-gray-600 mb-4">Doe com seu cartão de crédito de forma segura.</p>
          <a
            href="https://pagamento.seguro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300"
          >
            Doar com Cartão
          </a>
        </div> */}
      </div>


      {showQR && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Escaneie o QR Code para pagar</h2>
    
            <img src={'/Qrcode.jpeg'} alt="QR Code Pix" className="w-48 h-48 mx-auto" />

            <p className="mt-4 text-gray-700">PIX: {pixKey}</p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
