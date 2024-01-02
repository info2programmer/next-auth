import { COOKIE_NAME, MAX_AGE } from "@/constants";
import { serialize } from "cookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
  const { value } = token;
  const serialized = serialize(COOKIE_NAME, value, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  const response = {
    message: "Logout successfully",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serialized },
  });
}
