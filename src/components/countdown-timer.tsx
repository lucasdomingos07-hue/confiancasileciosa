'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = ({ expiryTimestamp }: { expiryTimestamp: number }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = expiryTimestamp - new Date().getTime();
      let newTimeLeft = { minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };
    
    // Set initial time to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryTimestamp]);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  const isTimeUp = timeLeft.minutes <= 0 && timeLeft.seconds <= 0;

  return (
    <div className="text-center my-8 md:my-12">
      <p className="text-base md:text-lg text-amber-400 font-semibold mb-4 tracking-wide">
        Sua oferta especial expira em:
      </p>
      {isTimeUp ? (
        <div
          className="text-4xl md:text-5xl font-bold text-destructive animate-pulse"
        >
          Tempo Esgotado!
        </div>
      ) : (
        <div className="flex justify-center items-center space-x-2 md:space-x-4">
          <div className="flex flex-col items-center p-3 md:p-4 bg-primary/10 border border-primary/20 rounded-lg min-w-[70px] md:min-w-[90px]">
            <span className="text-4xl md:text-6xl font-bold font-mono text-primary">
              {formatTime(timeLeft.minutes)}
            </span>
            <span className="text-xs md:text-sm uppercase text-muted-foreground mt-1">
              Minutos
            </span>
          </div>
          <span className="text-4xl md:text-6xl font-bold text-primary animate-pulse">:</span>
          <div className="flex flex-col items-center p-3 md:p-4 bg-primary/10 border border-primary/20 rounded-lg min-w-[70px] md:min-w-[90px]">
            <span className="text-4xl md:text-6xl font-bold font-mono text-primary">
              {formatTime(timeLeft.seconds)}
            </span>
            <span className="text-xs md:text-sm uppercase text-muted-foreground mt-1">
              Segundos
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
