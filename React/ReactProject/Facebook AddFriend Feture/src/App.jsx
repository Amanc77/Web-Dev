import React from "react";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import Card3 from "../Components/Card3";
import Card4 from "../Components/Card4";
import { useState } from "react";
import data from "../Components/Data1";
import data2 from "../Components/Data2";

function App() {
  const [realData, setRealData] = useState(data);
  const [realData2, setRealData2] = useState(data2);
  const handalBtnClick = (targetIndex) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === targetIndex) {
          return { ...item, addFriend: !item.addFriend };
        }
        return item;
      });
    });
  };

  const handalBtnClick2 = (targetIndex) => {
    setRealData2((prev) => {
      return prev.map((item, index) => {
        if (index === targetIndex) {
          return { ...item, addFriend: !item.addFriend };
        }
        return item;
      });
    });
  };
  return (
    <div className=" bg-zinc-600 h-8000">
      <div>
        <Card id="like" />
        <Card id="dislike" />
      </div>
      <div>
        <Card2 id="share" color="bg-blue-600" />
        <Card2 id="Subscribe" color="bg-red-700" />
      </div>

      <div className="flex gap-10 mt-20 justify-center flex-wrap">
        {realData.map((item, index) => (
          <Card3
            key={index}
            image={item.image}
            name={item.name}
            profession={item.profession}
            handalBtnClick={handalBtnClick}
            index={index}
            addFriend={item.addFriend}
          />
        ))}
      </div>
      <div>
        <h1>This is Values Section for data2</h1>
      </div>
      <div className="flex gap-10 mt-20 justify-center flex-wrap">
        {realData2.map((item, index) => (
          <Card4
            key={index}
            handalBtnClick2={handalBtnClick2}
            index={index}
            values={item}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
