import React from "react";
import Navbar from "../Components/Navbar";
import MusicCard from "../Components/MusicCard";

function App() {
  const data = [
    {
      image: "https://img.youtube.com/vi/Umqb9KENgmk/maxresdefault.jpg",
      songName: "Tum Hi Ho",
      artist: "Arijit Singh",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/k4yXQkG2s1E/maxresdefault.jpg",
      songName: "Kala Chashma",
      artist: "Neha Kakkar",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/ztX-iGlZ_Ug/maxresdefault.jpg",
      songName: "Ban Ja Rani",
      artist: "Guru Randhawa",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/AEIVhBS6baE/maxresdefault.jpg",
      songName: "Gerua",
      artist: "Arijit Singh",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/T94PHkuydcw/maxresdefault.jpg",
      songName: "Kun Faya Kun",
      artist: "A.R. Rahman",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/dx4Teh-nv3A/maxresdefault.jpg",
      songName: "Namo Namo",
      artist: "Guru Randhawa",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/BddP6PYo2gs/maxresdefault.jpg",
      songName: "Kesariya",
      artist: "Arijit Singh",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/hLQl3WQQoQ0/maxresdefault.jpg",
      songName: "Someone Like You",
      artist: "Adele",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/FlsCjmMhFmw/maxresdefault.jpg",
      songName: "Rolling in the Deep",
      artist: "Adele",
      added: false,
    },
    {
      image: "https://img.youtube.com/vi/dx4Teh-nv3A/maxresdefault.jpg",
      songName: "Namo Namo",
      artist: "Guru Randhawa",
      added: false,
    },

    {
      image: "https://i.ytimg.com/vi/EH5WsGJCSKc/maxresdefault.jpg",
      songName: "Tera Hone Laga Hoon",
      artist: "Atif Aslam, Alisha Chinai",
      added: false,
    },

    {
      image: "https://i.ytimg.com/vi/gvyUuxdRdR4/maxresdefault.jpg",
      songName: "Raataan Lambiyan",
      artist: "Jubin Nautiyal, Asees Kaur",
      added: false,
    },

    {
      image: "https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
      songName: "Despacito",
      artist: "Luis Fonsi, Daddy Yankee",
      added: false,
    },

    {
      image: "https://i.ytimg.com/vi/AJtDXIazrMo/maxresdefault.jpg",
      songName: "Love Me Like You Do",
      artist: "Ellie Goulding",
      added: false,
    },
  ];
  const handleClick = (index) => {
    setSongs((prev) => {
      return prev.map((item, indexOfItem) => {
        if (indexOfItem === index) {
          return { ...item, added: item.added ? false : true };
        }
        return item;
      });
    });
  };
  const [songs, setSongs] = React.useState(data);
  return (
    <div className=" bg-zinc-500 h-full ">
      <Navbar data={songs} />
      <div className=" bg-zinc-400 flex gap-10 flex-wrap p-10 ">
        {songs.map((item, index) => (
          <MusicCard
            key={index}
            handleClick={handleClick}
            index={index}
            SongData={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
