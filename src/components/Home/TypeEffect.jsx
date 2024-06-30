import React from "react";
import Typewriter from "typewriter-effect";

function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Django Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 30,
      }}
    />
  );
}

export default TypeEffect;