import React from "react";

function MusicCard({ SongData, handleClick, index }) {
  const { image, songName, artist, added } = SongData;

  return (
    <div className="w-64 bg-zinc-300 p-4 rounded-lg  flex flex-col items-start gap-3 shadow-xl">
      <div className=" pt-2  ">
        <img
          src={image}
          alt={songName}
          className="w-full h-full object-contain rounded-md "
        />
      </div>
      <div className=" text-left left-0    ">
        <h2 className="font-bold  text-lg flex items-start text-black">
          {songName}
        </h2>
        <p className="text-sm  text-gray-600">{artist}</p>
      </div>
      <div className=" flex items-center justify-center w-full">
        <button
          onClick={() => {
            handleClick(index);
          }}
          className={`px-6 py-2 ${
            added ? "bg-green-700" : "bg-orange-600"
          } text-white text-sm font-semibold rounded-full text-center`}
        >
          {added ? "Added" : "Add to Favourites"}
        </button>
      </div>
    </div>
  );
}

export default MusicCard;
