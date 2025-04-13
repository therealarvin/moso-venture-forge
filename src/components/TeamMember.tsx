
interface TeamMemberProps {
  name: string;
  image: string;
  position?: string;
}

const TeamMember = ({ name, image, position }: TeamMemberProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moso-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
          <div className="text-white p-4">
            {position && <p className="text-sm font-medium">{position}</p>}
          </div>
        </div>
      </div>
      <h3 className="text-lg font-medium text-moso-dark text-center">{name}</h3>
      {position && <p className="text-sm text-gray-600 text-center">{position}</p>}
    </div>
  );
};

export default TeamMember;
