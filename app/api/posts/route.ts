import getAllPosts from "@/app/actions/getAllPosts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prisma.db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("cat")!;

    if (category === "all" || category === "null") {
      const posts = await getAllPosts();
      return NextResponse.json(posts);
    }

    const posts = await prisma.post.findMany({
      where: {
        category,
      },
    });

    if (!posts) {
      return new NextResponse("No posts with such category", { status: 400 });
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error, "ERROR with update post");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { title, description, image, category } = body;

    const newPost = await prisma.post.create({
      data: {
        description,
        image,
        title,
        category,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error, "ERROR with update post");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
