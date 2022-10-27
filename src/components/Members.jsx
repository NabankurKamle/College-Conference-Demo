import "./Members.css";
import members from "../collection/member";
import Member from "./common/Member";

const Members = () => {
  return (
    <div id="committee" className="px-12 py-6 relative memberContainer">
      <div className="flex flex-col items-center  justify-center space-y-8 text-center py-5 px-5 mb-10">
        <p className="text-md font-bold text-[#6C6C6C]">MEET OUR MEMBERS</p>
        <p className="text-4xl font-bold text-[#FF6767]">COMMITTE MEMBERS</p>
        <p className="max-w-[600px] font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, consequatur vero, tenetur corrupti libero necessitatibus
          sequi magni mollitia iure minima nulla, fuga numquam illo eveniet?.
        </p>
        <button className="text-md px-10 py-2 rounded-xl drop-shadow-[8px_8px_15px_rgba(0,0,0,0.45)] text-white bg-gradient-to-r from-[#AC1400] to-[#FF1E00] mb-10 font-semibold">
          Learn More
        </button>
      </div>
      <div className=" flex flex-wrap md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-10 items-center justify-center mb-10">
        {members.map((member) => (
          <Member key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Members;
