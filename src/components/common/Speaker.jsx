import "./Speaker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Speaker = ({ speaker }) => {
  return (
    <div className=" cursor-pointer relative overflow-hidden">
      <div className="imageContainer">
        <img
          className=" w-[250px] h-[350px] rounded-[20px]"
          src={speaker.imgUrl}
          alt=""
        />
      </div>
      <div className="bg-transparent flex pl-3 w-[239px] h-[100px] absolute left-[6px] bottom-14 z-10">
        <div className=" text-white">
          <p className="text-xl font-semibold w-[130px] mb-1">{speaker.name}</p>
          <p className="text-sm ">{speaker.position}</p>
        </div>
        <div className="bg-transparent backdrop-blur-md border-[1px] border-white  absolute flex items-center justify-center h-[50px] w-[60px] -right-[1px] top-1 rounded-l-full">
          <FontAwesomeIcon
            className="text-3xl text-white"
            icon={speaker.profLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default Speaker;
