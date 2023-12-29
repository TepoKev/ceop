import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    var body = await request.json();
    var password = body.password;
    var email = body.email;
    var user = {
      password: password,
      email: email,
    };
    console.log(user);
    return NextResponse.json({ ...user });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
