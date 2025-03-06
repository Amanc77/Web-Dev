import React from "react";

function App() {
  const [data, setData] = React.useState(true);

  const [value, setValue] = React.useState([4, 15, 21, 321, 34, 541, 6]);

  const [vla2, setVla2] = React.useState([1, 2, 3, 4, 5, 6, 7]);

  const [value3, setValue3] = React.useState([10, 20, 30, 40, 50, 60, 70]);

  const [value4, setValue4] = React.useState([100, 200, 300, 400, 500, 600]);

  const [value5, setValue5] = React.useState([
    { name: "Aman", age: 21 },
    { name: "Mukesh", age: 25 },
    { name: "Rajesh", age: 27 },
    { name: "Suresh", age: 29 },
  ]);

  return (
    <div className=" p-4  bg-zinc-500 min-h-screen  flex flex-col flex-wrap justify-center ">
      <div className="grid grid-col-3 ">
        {value.map((item, index) => (
          <h3 key={index} className=" flex flex-col p-2 text-2xl text-white">
            Value: {item}
          </h3>
        ))}
        <h1 className="text-5xl font-bold text-white ">
          value: {value.join(", ")}
        </h1>
        <button
          onClick={() =>
            setValue(() =>
              value.filter((item, index) => index != value.length - 1)
            )
          }
          className=" w-30  bg-blue-600 m-3 p-2 ml-20 rounded-md flex flex-row"
        >
          Pop Ele
        </button>
        {vla2.map((item, index) => (
          <h3 key={index} className=" p-2 text-2xl text-white">
            Value: {item}
          </h3>
        ))}
        <h1 className="text-5xl font-bold text-white ">
          value: {vla2.join(", ")}
        </h1>
        <button
          onClick={() => {
            setVla2(vla2.filter((item, index) => item % 2 === 0));
          }}
          className=" w-30  bg-blue-600 m-3 p-2 ml-20 rounded-md flex flex-row"
        >
          remove odd ele
        </button>
        {value3.map((item, index) => (
          <h3 key={index} className=" p-2 text-2xl text-white">
            Value: {item}
          </h3>
        ))}
        <h1 className="text-5xl font-bold text-white ">
          value: {value3.join(" ,")}
        </h1>
        <button
          onClick={() => setValue(() => {})}
          className=" w-30  bg-blue-600 m-3 p-2 ml-20 rounded-md flex flex-row"
        >
          remove even index
        </button>
        {value4.map((item, index) => (
          <h3 key={index} className=" p-2 text-2xl text-white">
            Value: {item}
          </h3>
        ))}
        <h1 className="text-5xl font-bold text-white ">
          value: {value4.join(" ,")}
        </h1>
        <button
          onClick={() => setValue4([...value4, 700])}
          className=" w-30  bg-blue-600 m-3 p-2 ml-20 rounded-md flex flex-row"
        >
          add Ele
        </button>
        {value5.map((item, index) => (
          <div>
            <h1 key={index} className=" p-2 text-2xl text-white">
              Name: {item.name}
            </h1>
            <h3 key={index} className=" p-2 text-2xl text-white">
              Age: {item.age}
            </h3>
          </div>
        ))}
        <button
          onClick={() => {
            setValue5(() => {
              value5.map((item) =>
                item.name === "Aman" ? { name: "aman", age: 22 } : item
              );
            });
          }}
          className=" w-30  bg-blue-600 m-3 p-2 ml-20 rounded-md flex flex-row"
        >
          change Age
        </button>

        {
          <h1 className=" text-white ">
            {data === true ? "Data is true" : "Data is false"}
          </h1>
        }
        <button
          onClick={() => {
            setData(!data);
          }}
          className=" w-30  bg-blue-600 m-3 p-2 ml-20 rounded-md flex flex-row"
        >
          change data
        </button>
      </div>
    </div>
  );
}
export default App;
