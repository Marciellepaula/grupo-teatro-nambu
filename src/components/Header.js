const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-4 text-center">
        <img
          src="image.jpg"  // Replace with the actual image path
          alt="Teatro"
          className="w-full h-80 object-cover rounded-lg"  // Fixed height for the image
        />
        <h1 className="text-4xl font-bold mt-4">Grupo de Teatro Nambu</h1>
        <p className="text-xl mt-2">Conectando arte e cultura com cada apresentação.</p>
      </header>
    );
  };
  
  export default Header;
  