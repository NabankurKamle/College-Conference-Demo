const Member = ({ member }) => {
  return (
    <div className=" cursor-pointer relative overflow-hidden rounded-[20px]">
      <div>
        <img
          className="w-[250px] h-[350px] rounded-[20px]"
          src={member.imgUrl}
          alt=""
        />
      </div>
      <div className="rounded-b-[15px] absolute py-4 w-[238px] h-[145px] transition-all duration-500 -bottom-[60px] hover:bottom-[55px] left-[6px] text-center bg-[#40404070]  backdrop-blur-md flex flex-col items-center justify-between text-white">
        <p className="text-xl font-bold">{member.name}</p>
        <p>{member.position}</p>
        <p className="text-sm py-4">
          Lorem ipsum dolor sit amet consectetur...
        </p>
      </div>
    </div>
  );
};

export default Member;
