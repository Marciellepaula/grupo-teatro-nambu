import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-orange-500 via-40% to-red-500 text-white py-22  text-center flex flex-col justify-center items-center h-[250px]">
      <p className="text-lg mt-16">&copy; {new Date().getFullYear()} Grupo de Teatro Nambu. Todos os direitos reservados.</p>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://facebook.com/teatronambu" className="text-blue-400 text-3xl hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/cantodanambu/" className="text-pink-400 text-3xl hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="mailto:comunicacao4portas@gmail.com" className="text-gray-300 text-3xl hover:text-gray-400">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
