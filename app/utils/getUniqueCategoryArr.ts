import { Post } from "@prisma/client";

const getUniqueCategoryArr = (arr: Post[]) => {
  const categories = arr.map((item) => item.category);

  return [
    "All",
    ...categories.filter((value, index) => categories.indexOf(value) === index),
  ];
};

export default getUniqueCategoryArr;
