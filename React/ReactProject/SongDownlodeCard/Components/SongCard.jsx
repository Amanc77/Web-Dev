import React from "react";
import SongList from "./SongList";

function SongCard() {
  return (
    <div className="container h-full grid grid-cols-3 justify-center items-center gap-10 p-20 bg-zinc-700">
      {SongList.map((ele, index) => (
        <div
          key={index}
          className="imageContainer flex flex-col w-full max-w-sm rounded-lg shadow-md bg-black-400 shadow-cyan-400"
        >
          <img
            className="w-full object-cover h-60 rounded-t-lg"
            src={ele.image}
            alt="Image"
          />
          <div className="px-6 py-4">
            <h2 className="text-xl mb-2 text-white">{ele.songName}</h2>
            <p className="text-base text-white">{ele.description}</p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={ele.watchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-full bg-zinc-500 text-center rounded-2xl mt-2 px-3 py-2"
              >
                Watch
              </a>
              <a
                href={ele.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black w-full bg-yellow-400 text-center rounded-2xl mt-2 px-3 py-2"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongCard;
