"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/auth/logout");
      alert(JSON.stringify(data));
      router.push("/");
      return;
    } catch (e) {
      const error = e as AxiosError;
      alert(error);
    }
  };
  return (
    <div>
      <h1>Dashboard Page Super Secrate</h1>
      <button
        type="button"
        title="LogOut"
        className="mt-2 px-4 py-1 border border-black w-fit rounded-md hover:bg-black hover:text-white"
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
};

export default page;
