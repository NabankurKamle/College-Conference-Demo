import "./ContactUs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <div
      id="contactUs"
      className="px-12 py-6 flex flex-col lg:flex-row items-center lg:items-start justify-between w-[100vw] relative contactusContainer"
    >
      <div className="lg:relative lg:pl-20  flex flex-col justify-start items-center lg:items-start">
        <div className=" text-center  lg:text-start mb-10 lg:mb-36">
          <p className="text-md font-bold text-[#6C6C6C] mb-8">
            <div className="h-[14px] w-[4px] bg-[#FF6767] lg:inline-block mr-3 hidden"></div>
            GET IN TOUCH
          </p>
          <p className="font-bold text-4xl text-[#FF6767] mb-8">Contact Us</p>
          <div className=" lg:relative ">
            <ul className="flex items-center justify-between">
              <li>
                <a
                  href="https://in.linkedin.com/school/academy-of-technology/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-3xl transition-colors delay-100 duration-300 hover:text-[#0077B5] "
                    icon={faLinkedin}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-3xl transition-colors delay-100 duration-300 hover:text-[#FD1D1D]"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-3xl transition-colors delay-100 duration-300 hover:text-[#00ACEE]"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/www.aot.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-3xl transition-colors delay-100 duration-300 hover:text-[#3B5998]"
                    icon={faFacebook}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[100vw] py-10 lg:absolute lg:-left-12 -bottom-32 space-y-5 bg-transparent backdrop-blur-sm  md:pl-32">
          <div className="flex items-center justify-start">
            <FontAwesomeIcon icon={faPhone} className="text-xl mr-5" />
            <span className="text-lg">+912525252525</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-5" />
            <span className="text-lg">AcademyOfTechnology@aot.edu.in</span>
          </div>
          <div className="lg:w-[50%]">
            <FontAwesomeIcon icon={faLocationDot} className="text-xl mr-5" />
            <span className="text-lg">
              G.T.ROAD (ADISAPTAGRAM), AEDCONAGAR HOOGHLY-712121 WEST BENGAL,
              INDIA.
            </span>
          </div>
        </div>
      </div>
      <div className="w-[300px] sm:w-[350px] py-6 px-10 h-[500px] overflow-hidden z-10 bg-[#59ce902f] backdrop-blur-[2px] rounded-lg">
        <form className="w-full h-full relative">
          <div className="w-full mb-5">
            <label htmlFor="name" className=" font-bold">
              Name
            </label>
            <input
              id="name"
              className="w-full px-5 py-2 rounded-lg outline-none mt-3 inputShadow"
              type="text"
              placeholder="your name"
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="email" className=" font-bold">
              Email
            </label>
            <input
              id="email"
              className="w-full px-5 py-2 rounded-lg outline-none mt-3 inputShadow"
              type="email"
              placeholder="your email"
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="message" className=" font-bold">
              Your message
            </label>
            <textarea
              id="message"
              className="w-full h-[150px] px-5 py-2 rounded-lg outline-none mt-3 inputShadow resize-none"
              placeholder="your message"
            />
          </div>
          <button className="px-8 py-3 text-sm bg-[#59CE8F] rounded-lg font-bold absolute right-0 drop-shadow-[5px_5px_8px_rgba(0,0,0,0.35)]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
