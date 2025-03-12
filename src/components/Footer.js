const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Grupo de Teatro Nambu. Todos os direitos reservados.</p>
        <div className="mt-3">
          <a href="https://facebook.com/teatronambu" className="text-blue-400 mx-2">Facebook</a>
          <a href="https://instagram.com/teatronambu" className="text-pink-400 mx-2">Instagram</a>
          <a href="mailto:contato@teatronambu.com" className="text-gray-300 mx-2">E-mail</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  