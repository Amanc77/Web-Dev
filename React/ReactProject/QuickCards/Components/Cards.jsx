import React from "react";
import Card from "./Card";

function Cards({ users, handleRemoveUser }) {
  return (
    <div className="w-full h-120 overflow-auto p-4 flex flex-wrap justify-center gap-4">
      {users.map((item, index) => (
        <Card
          key={item.id || index}
          users={item}
          index={index}
          handleRemoveUser={handleRemoveUser}
        />
      ))}
    </div>
  );
}

export default Cards;
