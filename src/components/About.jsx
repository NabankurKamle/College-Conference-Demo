const About = () => {
  return (
    <>
      <div
        id="topics"
        className="flex justify-center flex-col lg:flex-row lg:px-32 md:px-12 py-6 "
      >
        <div className="hidden mr-10 lg:flex items-center space-x-12">
          <div className="flex flex-col justify-center items-center space-y-12">
            <img
              className="h-[200px] rounded-xl"
              src="/img/aboutImg/picAbout1.jpg"
              alt=""
            />
            <img
              className="h-[200px] rounded-xl"
              src="/img/aboutImg/picAbout2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[450px] rounded-xl"
              src="/img/aboutImg/picAbout3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:justify-start justify-center text-center py-5 mb-3 space-y-8">
          <p className="text-md font-bold text-[#6C6C6C]">
            <div className="h-[14px] w-[4px] bg-[#FF6767] lg:inline-block mr-3 hidden"></div>
            ABOUT CONFERENCE
          </p>
          <p className="text-4xl font-bold md:max-w-[700px] text-[#FF6767] lg:text-start text-center">
            WELCOME TO THE GREATEST DIGITAL INDIA CONFERENCE
            <span
              style={{
                webkitTextFillColor: "transparent",
                webkitTextStroke: "1px",
              }}
              className="block text-6xl text-[#59CE8F]"
            >
              2022
            </span>
          </p>
          <p className="max-w-[600px] font-semibold lg:text-start text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur, consequatur vero, tenetur corrupti libero
            necessitatibus sequi magni mollitia iure minima nulla, fuga numquam
            illo eveniet?.
          </p>
          <button className="text-md px-10 py-2 rounded-xl drop-shadow-[8px_8px_15px_rgba(0,0,0,0.45)] text-white bg-gradient-to-r from-[#AC1400] to-[#FF1E00] mb-10 font-semibold">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex items-center space-y-10 lg:space-y-0 justify-between flex-col lg:flex-row lg:px-60 md:px-12 py-6">
        <div className="w-[200px] h-[200px] px-5 flex flex-col relative items-center justify-center rounded-2xl bg-[#59CE8F] drop-shadow-[0px_10px_5px_rgba(0,0,0,0.25)]">
          <div className="absolute top-2 left-2">
            <img src="/img/aboutImg/logo/logoTicket.svg" alt="" />
          </div>
          <p className="font-bold text-lg text-center text-[#005C2B]">
            TICKETS CONFIRMED
          </p>
          <p className="absolute text-6xl font-extrabold text-[#C1FFDE] -bottom-5">
            1500+
          </p>
        </div>
        <div className="w-[200px] h-[200px] px-5 flex flex-col relative items-center justify-center rounded-2xl bg-[#59CE8F] drop-shadow-[0px_10px_5px_rgba(0,0,0,0.25)]">
          <div className="absolute top-2 left-2">
            <img src="/img/aboutImg/logo/logoOffice.svg" alt="" />
          </div>
          <p className="font-bold text-lg text-center text-[#005C2B]">
            SPONSORE COMPANY
          </p>
          <p className="absolute text-6xl font-extrabold text-[#C1FFDE] -bottom-5">
            9+
          </p>
        </div>
        <div className="w-[200px] h-[200px] px-5 flex flex-col relative items-center justify-center rounded-2xl bg-[#59CE8F] drop-shadow-[0px_10px_5px_rgba(0,0,0,0.25)]">
          <div className="absolute top-2 left-2">
            <img src="/img/aboutImg/logo/logoMic.svg" alt="" />
          </div>
          <p className="font-bold text-lg text-center text-[#005C2B]">
            POWERED PARTNER SPEAKERS
          </p>
          <p className="absolute text-6xl font-extrabold text-[#C1FFDE] -bottom-5">
            10+
          </p>
        </div>
        <div className="w-[200px] h-[200px] px-5 flex flex-col relative items-center justify-center rounded-2xl bg-[#59CE8F] drop-shadow-[0px_10px_5px_rgba(0,0,0,0.25)]">
          <div className="absolute top-2 left-2">
            <img src="/img/aboutImg/logo/logoAudience.svg" alt="" />
          </div>
          <p className="font-bold text-lg text-center text-[#005C2B]">
            INTERNATIONAL MEMBER
          </p>
          <p className="absolute text-6xl font-extrabold text-[#C1FFDE] -bottom-5">
            40+
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
