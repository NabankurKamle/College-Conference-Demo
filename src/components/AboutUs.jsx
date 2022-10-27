import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div
        id="aboutUs"
        className="flex justify-center lg:space-x-10 items-center flex-col lg:flex-row lg:px-32 md:px-12 py-6 pb-10 relative aboutusContainer"
      >
        <div className="lg:mr-5 flex flex-col lg:flex-row items-center space-x-12">
          <div className="bg-[#59CE8F] w-[80%] px-10 py-12 lg:w-[350px] rounded-2xl text-center ">
            <p className="text-4xl font-bold mb-5 text-white text-center lg:text-start">
              ACADEMY OF TECHNOLOGY
            </p>
            <p className="font-bold text-sm lg:text-start">
              Academy of Technology is amet consectetur adipisicing elit.
              Officiis minus accusantium facilis facere exercitationem
              blanditiis veritatis error quidem expedita, velit itaque sequi
              amet quam soluta unde quasi. Asperiores et ipsa dolores ex
              placeat, cum vel libero, aperiam sint minima velit non quisquam
              consequuntur ullam provident distinctio reiciendis veritatis
              consectetur, cupiditate expedita exercitationem quas quam rem
              eaque. Sed ex molestiae at repellat possimus voluptates commodi
              modi, aperiam dicta dolores obcaecati, voluptatem quae ratione
              alias vitae omnis.
            </p>
          </div>
        </div>
        <div className="w-[80%] lg:w-auto flex flex-col items-center  lg:items-start lg:justify-start justify-center text-center py-5 mb-3 space-y-5">
          <p className="text-md font-bold text-[#6C6C6C]">
            <div className="h-[14px] w-[4px] bg-[#FF6767] lg:inline-block mr-3 hidden"></div>
            ABOUT OUR VENUE
          </p>
          <p className="text-4xl font-bold md:max-w-[700px] text-[#FF6767] lg:text-start text-center">
            About Us
          </p>
          <p className="max-w-[600px] font-bold lg:text-start text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur, consequatur vero, tenetur corrupti libero
            necessitatibus sequi magni mollitia iure minima nulla, fuga numquam
            illo eveniet?.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            dolorem! Molestiae aperiam ab, placeat mollitia alias ea dolor
            reprehenderit? Sequi deleniti ex similique ullam vero!
          </p>
          <div className="w-[70%] h-[150px] flex justify-center items-center p-[2px] bg-gradient-to-br from-[#59CE8F] to-[#FF1E00] via-black ">
            <iframe
              title="Map"
              style={{ width: "100%", height: "100%" }}
              src="https://maps.google.com/maps?q=Grand%20Trunk%20Rd,%20Adisaptagram,%20Krishnapur%20Chandanpur,%20West%20Bengal%20712502&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          <button className="text-md px-10 py-2 rounded-xl drop-shadow-[8px_8px_15px_rgba(0,0,0,0.45)] text-white bg-gradient-to-r from-[#AC1400] to-[#FF1E00]  font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
