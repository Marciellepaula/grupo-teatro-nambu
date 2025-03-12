const TeamMember = ({ name, role, description, imageUrl }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
        <h3 className="text-xl font-semibold mt-4">{name}</h3>
        <p className="text-md text-gray-600">{role}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default TeamMember;
  