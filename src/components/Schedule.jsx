import "./Schedule.css";
import Timer from "./common/Timer";
import events from "../collection/event";
import { useState } from "react";

const Schedule = () => {
  const [activeEventId, setActiveEventId] = useState(1);

  const showEvent = (id) => {
    setActiveEventId(id);
  };

  console.log(events[activeEventId - 1].timeManage.length);

  return (
    <div id="schedule" className="w-[100vw] ">
      <Timer />
      <div className="px-8 md:px-12 py-12 flex flex-col md:flex-row justify-center items-center md:items-start relative scheduleContainer">
        <div className="flex flex-col justify-center items-center md:items-start md:mr-10 lg:mr-16 mb-8 md:mb-auto">
          <div className="md:w-[250px] lg:w-[300px] text-center md:text-start mb-10 ">
            <p className="font-bold text-4xl text-[#FF6767] mb-8">
              SCHEDULE AND EVENT DETAILS
            </p>
            <p className=" text-md max-w-[280px] mb-8 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              expedita similique ut nihil quod voluptates.
            </p>
            <button className="text-md px-10 py-3 rounded-xl drop-shadow-[8px_8px_15px_rgba(0,0,0,0.45)] text-white bg-gradient-to-r from-[#AC1400] to-[#FF1E00]  mb-8 font-semibold">
              Download Schedule
            </button>
          </div>
          <div className="hidden mr-5 md:flex lg:flex-row flex-col justify-center items-center md:space-y-5 lg:space-y-0 lg:space-x-5">
            <div className="flex flex-col justify-center items-center md:space-y-5 lg:space-y-5">
              <img
                className="w-[150px] h-[120px] rounded-xl"
                src="/img/eventPic1.jpg"
                alt=""
              />
              {/* <div className=""> */}
              <img
                className="w-[150px] h-[120px] rounded-xl"
                src="/img/eventPic2.jpg"
                alt=""
              />
              {/* </div> */}
            </div>
            <img
              className="w-[150px] h-[120px] rounded-xl"
              src="/img/eventPic3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-[60%]">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 space-y-5 md:space-y-0 pb-12">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => showEvent(event.id)}
                style={
                  event.id === activeEventId
                    ? { backgroundColor: "#FF1E00" }
                    : {}
                }
                className="flex flex-col px-3 sm:px-10 sm:py-3 py-1 rounded-2xl cursor-pointer text-center text-white bg-[#59CE8F] "
              >
                <span className="text-xs">{event.name}</span>
                <span className="text-sm font-bold">{event.date}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-col w-[100%] mb-4 sm:mb-0">
              {events[activeEventId - 1].timeManage.map((e) => (
                <div
                  key={e.serial}
                  className="w-[100%] h-[300px] sm:h-[250px] md:h-[220px] lg:h-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-between space-y-5 sm:space-y-0 sm:space-x-8  justify-center"
                >
                  <div>
                    <span className="font-bold">{e.time}</span>
                  </div>
                  <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
                    <span className="font-bold md:flex items-center justify-center  px-[15px] py-[10px]  rounded-[50%] bg-[#59CE8F] text-white z-10">
                      {e.serial}
                    </span>
                    {e.serial !==
                      events[activeEventId - 1].timeManage.length && (
                      <div className="sm:block hidden sm:h-[220px]  lg:h-[100px] w-[2px] bg-[#59CE8F]"></div>
                    )}
                  </div>
                  <div className="md:w-[500px] w-[280px] text-center md:text-start">
                    <span className="text-xl font-bold">{e.title}</span>
                    <p className="text-md">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
