"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();

  const handelSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);
      alert(JSON.stringify(data));
      // Redirect to user to /dashboard
      push("/dashboard");
    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };
  return (
    <div className="flex justify-center mt-10 ">
      <div className="flex-col">
        <h1 className="text-2xl font-semibold">Hi, User</h1>
        <form
          onSubmit={handelSubmit}
          className="flex flex-col p-4 border-black border rounded-md mt-2 shadow-lg bg-gray-200 max-w-6xl"
        >
          <input
            type="text"
            name="username"
            title="usename"
            placeholder="Enter username"
            className="p-2 border border-gray-400 rounded-lg"
          />
          <input
            type="password"
            name="password"
            title="password"
            placeholder="Enter Password"
            className="p-2 border border-gray-400 rounded-lg mt-2"
          />

          <button
            type="submit"
            title="Login"
            className="mt-2 px-4 py-1 border border-black w-fit rounded-md hover:bg-black hover:text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
