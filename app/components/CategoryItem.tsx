import Link from "next/link";
import React from "react";

interface CategoryItemProps {
  item: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <Link
      href={`/?cat=${item.toLowerCase()}`}
      className="flex items-center rounded-md  px-2 py-1 cursor-pointer hover:bg-slate-300/70 transition"
    >
      {item.toUpperCase()}
    </Link>
  );
};

export default CategoryItem;
