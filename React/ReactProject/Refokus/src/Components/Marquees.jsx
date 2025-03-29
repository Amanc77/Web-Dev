import React from "react";

import Marquee from "./Marquee";

function Marquees() {
  const images = [
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    ],
    [
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2755ba681134c9d9b5c_mural.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2754882567001f1ee80_spotify.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
      "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    ],
  ];
  return (
    <div className=" p-20">
      {images.map((item, index) => (
        <Marquee key={index} imagesUrl={item} />
      ))}
    </div>
  );
}

export default Marquees;
