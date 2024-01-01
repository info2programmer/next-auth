"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    (async () => {
      const { user, error } = await getTheUser();

      if (error) {
        push("/");
        return;
      }
      setIsSuccess(true);
    })();
  }, []);

  if (!isSuccess) {
    return <p>Loading...</p>;
  }

  return <main>{children}</main>;
}

async function getTheUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get("/api/auth/me");
    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;
    return {
      user: null,
      error: error,
    };
  }
}
