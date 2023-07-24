import prisma from "@/app/libs/prisma.db";

const getUserPosts = async (id: string) => {
  try {
    const userPosts = await prisma.post.findMany({
      where: {
        userId: id,
      },
    });

    return userPosts;
  } catch (error) {
    console.log(error, "Error with user posts");
    return [];
  }
};

export default getUserPosts;
