import { COOKIE_NAME } from "@/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
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
  const secret = process.env.JWT_SECRET || "";
  try {
    verify(value, secret);
    const response = {
      user: "Authenticated",
    };
    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Somting went wrong",
      },
      {
        status: 400,
      }
    );
  }
}
