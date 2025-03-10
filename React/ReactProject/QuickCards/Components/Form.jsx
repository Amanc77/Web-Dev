import React from "react";
import { useForm } from "react-hook-form";
function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mt-5 flex gap-2 "
    >
      <input
        {...register("name")}
        type="text"
        placeholder="Name"
        className="border-none p-2 rounded-md bg-red-100 outline-none"
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="border-none bg-red-100 outline-none p-2 rounded-md"
      />
      <input
        {...register("image")}
        type="text"
        placeholder="Image URL"
        className=" border-none bg-red-100 outline-none p-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
