import prisma from "@/app/libs/prisma.db";

const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({});

    return posts;
  } catch (error) {
    console.log(error, "Error with posts");
    return [];
  }
};

export default getAllPosts;
