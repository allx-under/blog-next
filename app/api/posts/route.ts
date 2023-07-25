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
