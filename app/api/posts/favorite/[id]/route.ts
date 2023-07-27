import getCurrentUser from "@/app/actions/getCurrentUser";
import getPostById from "@/app/actions/getPostById";
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

    const id = params.id;

    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        favoriteIds: {
          push: currentUser.id,
        },
      },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.log(error, "ERROR with update post");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const id = params.id;

    const post = await getPostById(id);

    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        favoriteIds: {
          set: post?.favoriteIds.filter((post) => post !== currentUser.id),
        },
      },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.log(error, "ERROR with update post");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
