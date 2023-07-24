import getUniqueCategoryArr from "../utils/getUniqueCategoryArr";
import getAllPosts from "./getAllPosts";

const getCategories = async () => {
  try {
    const posts = await getAllPosts();
    return getUniqueCategoryArr(posts);
  } catch (error) {
    console.log("Get category error", error);
    return [];
  }
};

export default getCategories;
