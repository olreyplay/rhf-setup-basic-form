import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="First name" {...register("firstName")} />

      <button type="submit">Submit</button>
    </form>
  );
}
