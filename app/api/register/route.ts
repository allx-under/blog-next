import * as bcrypt from "bcrypt";
import prisma from "@/app/libs/prisma.db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return new NextResponse("Missed credentials", { status: 400 });
    }

    const possibleUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (possibleUser) {
      return new NextResponse("Already exist", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error, "Registration error");
    return new NextResponse("Internal error", { status: 500 });
  }
}
