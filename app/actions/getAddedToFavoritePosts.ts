import prisma from "@/app/libs/prisma.db";
import getCurrentUser from "./getCurrentUser";
import getUserPosts from "./getUserPosts";

const getAddedToFavoritePosts = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return null;
    }
    const userPosts = await getUserPosts(currentUser.id);

    if (!userPosts) {
      return null;
    }

    const amountOfFavorites = userPosts.map((post) => post.favoriteIds.length);

    return amountOfFavorites.reduce((acc, currValue) => acc + currValue, 0);
  } catch (error) {}
};

export default getAddedToFavoritePosts;
