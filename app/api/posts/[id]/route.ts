import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prisma.db";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    const { title, description, image, category } = body;

    const id = params.id;

    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        image,
        category,
      },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.log(error, "ERROR with update post");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
