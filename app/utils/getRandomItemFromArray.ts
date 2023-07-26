import { Post } from "@prisma/client";

const getRandomItemFromArray = (arr: Post[]) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export default getRandomItemFromArray;
