import React, { useState, useEffect } from "react";

export const TimeLine = ({ nextImage }) => {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(countdown);
          nextImage();
          return 3;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <>
      <p>
        <em>Time left: {timeLeft} </em>
      </p>
    </>
  );
};
