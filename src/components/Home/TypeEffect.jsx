import React from "react";
import Typewriter from "typewriter-effect";

function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 40,
      }}
    />
  );
}

export default TypeEffect;