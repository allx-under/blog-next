import getUserById from "@/app/actions/getUserById";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const user = await getUserById(id);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return null;
  }
}
