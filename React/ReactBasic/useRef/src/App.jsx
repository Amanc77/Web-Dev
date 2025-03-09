import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(`
      name: ${name.current.value},
      email: ${email.current.value},
      password: ${password.current.value},
    `);
  };
  const [value, setValue] = useState({ name: "", email: "", password: "" });
  const handleChange = (event) => {
    event.preventDefault();
    console.log(value);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form action="" onSubmit={handleSubmit2}>
        <input ref={name} type="text" name="name" placeholder="Name" />
        <input ref={email} type="email" name="email" placeholder="Email" />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>

      <form action="" onSubmit={handleChange}>
        <input
          onChange={(event) => setValue({ ...value, name: event.target.value })}
          type="text"
          name="search"
          placeholder="Search"
        />
        <input
          onChange={(event) =>
            setValue({ ...value, email: event.target.value })
          }
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(event) =>
            setValue({ ...value, password: event.target.value })
          }
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Search</button>
      </form>

      {/* now learning react hook form */}
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input {...register("email")} type="email" name="email" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
