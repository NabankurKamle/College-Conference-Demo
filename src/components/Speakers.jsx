import "./Speakers.css";
import speakers from "../collection/speaker";
import Speaker from "./common/Speaker";

const Speakers = () => {
  return (
    <div className="px-12 py-6 relative speakerContainer">
      <div className="flex flex-col items-center justify-center space-y-5 text-center py-5 px-5 mb-10">
        <p className="text-md font-bold text-[#6C6C6C]">
          EVENT CONFERENCE SPEAKERS
        </p>
        <p className="text-5xl font-bold text-[#FF1E00]">THE SPEAKERS</p>
        <p className="max-w-[600px] font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, consequatur vero, tenetur corrupti libero necessitatibus
          sequi magni mollitia iure minima nulla, fuga numquam illo eveniet?.
        </p>
      </div>
      <div className=" flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-10 items-center justify-center mb-10">
        {speakers.map((speaker) => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
