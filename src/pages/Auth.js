import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost/auth/google/redirect"; 
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center text-white text-2xl font-bold">
      <section className="flex flex-col items-center gap-6">
        <h3>Bem-vindo ao Nosso Serviço</h3>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-white text-gray-700 font-medium px-6 py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300"
        >
          <FaGoogle className="text-red-500 " />
          Entrar com Google
        </button>
      </section>
    </div>
  );
};

export default GoogleLoginButton;
