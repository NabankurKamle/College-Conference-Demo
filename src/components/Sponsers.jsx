import "./Sponsers.css";
import sponsers from "../collection/sponser";
import Sponser from "./common/Sponser";

const Sponsers = () => {
  return (
    <div
      id="sponsers"
      className="px-2 sm:px-12 py-6 sponsersContainer relative "
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center py-5 px-5 mb-10">
        <p className="text-md font-bold text-[#6C6C6C]">
          EVENT PARTNERS & SPONSERS
        </p>
        <p className="text-4xl font-bold text-[#FF6767]">PARTNERS & SPONSERS</p>
        <p className="max-w-[600px] font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, consequatur vero, tenetur corrupti libero necessitatibus
          sequi magni mollitia iure minima nulla, fuga numquam illo eveniet?.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-16 gap-24 sm:w-[100%] lg:w-[80%] m-auto">
        {sponsers.map((sponser) => (
          <Sponser sponser={sponser} key={sponser.name} />
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
