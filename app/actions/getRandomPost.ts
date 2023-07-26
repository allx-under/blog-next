import prisma from "@/app/libs/prisma.db";
import getRandomItemFromArray from "../utils/getRandomItemFromArray";

const getRandomPost = async (id: string) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        NOT: {
          id,
        },
      },
    });

    const post = getRandomItemFromArray(posts);
    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getRandomPost;
