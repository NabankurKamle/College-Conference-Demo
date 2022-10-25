const Sponser = ({ sponser }) => {
  return (
    <div className="relative h-[200px] w-[300px]">
      <img className="h-[100%] w-[100%]" src={sponser.backgroundUrl} alt="" />
      <img
        className="absolute top-[50px] left-[100px]"
        src={sponser.logoUrl}
        alt=""
      />
    </div>
  );
};

export default Sponser;
