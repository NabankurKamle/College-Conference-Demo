import { useEffect, useState } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval;

  const startTimer = () => {
    const countdownDate = new Date("Nov 22,2022 08:30:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div className="w-[100%]  md:px-24 py-28 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-16 lg:space-x-32">
      <div className="flex flex-col items-center justify-center px-10 py-6  h-[100px] w-[100px] rounded-xl border-2 border-[#FF1E00] shadow-[0px_10px_15px_rgba(0,0,0,0.25)]">
        <span className="text-3xl font-bold mb-2">{timerDays}</span>
        <span className="text-lg">Days</span>
      </div>
      <div className="flex flex-col items-center justify-center px-10 py-6 h-[100px] w-[100px] rounded-xl border-2 border-[#FF1E00] shadow-[0px_10px_15px_rgba(0,0,0,0.25)]">
        <span className="text-3xl font-bold mb-2">{timerHours}</span>
        <span className="text-lg">Hours</span>
      </div>
      <div className="flex flex-col items-center justify-center px-10 py-6 h-[100px] w-[100px] rounded-xl border-2 border-[#FF1E00] shadow-[0px_10px_15px_rgba(0,0,0,0.25)]">
        <span className="text-3xl font-bold mb-2">{timerMinutes}</span>
        <span className="text-lg">Minutes</span>
      </div>
      <div className="flex flex-col items-center justify-center px-10 py-6 h-[100px] w-[100px] rounded-xl border-2 border-[#FF1E00] shadow-[0px_10px_15px_rgba(0,0,0,0.25)]">
        <span className="text-3xl font-bold mb-2">{timerSeconds}</span>
        <span className="text-lg">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
