"use client";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <h1>Dashboard Page Super Secrate</h1>
      <button
        type="button"
        title="LogOut"
        className="mt-2 px-4 py-1 border border-black w-fit rounded-md hover:bg-black hover:text-white"
      >
        Log Out
      </button>
    </div>
  );
};

export default page;
