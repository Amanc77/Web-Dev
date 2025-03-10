import React from "react";
import Cards from "../Components/Cards";
import { useState } from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveUser = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };
  let total = users.length;
  return (
    <>
      <div className="container h-screen bg-gray-900">
        <div className=" h-15 ">
          <Navbar total={total} />
        </div>
        <div className="  w-full flex flex-col justify-center items-center  ">
          <Cards users={users} handleRemoveUser={handleRemoveUser} />
          <div className=" relative">
            <Form handleFormSubmitData={handleFormSubmitData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
