import prisma from "@/app/libs/prisma.db";

const getPostById = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostById;
