import getUserById from "@/app/actions/getUserById";
import Avatar from "@/app/components/Avatar";
import dateConverter from "@/app/utils/dateConverter";
import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface PostItemProps {
  post: Post;
  isLeft?: boolean;
}

const PostItem: React.FC<PostItemProps> = async ({ post, isLeft }) => {
  const user = await getUserById(post.userId);

  return (
    <div
      className={`mb-10 pb-10 border-b border-slate-500 relative  flex ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div>
        <h2 className="text-4xl text-slate-800 uppercase absolute max-w-xs p-4 bg-slate-300/90">
          {post.title}
        </h2>
        <div className="">
          <Image
            alt={post.title}
            src={post.image!}
            width="450"
            height="400"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={`max-w-md ${
          isLeft ? "ml-auto" : "mr-auto"
        } flex flex-col justify-between`}
      >
        <p className="text-md text-slate-600 mt-5">{post.description}</p>
        <div className="flex items-center">
          <Avatar src={user?.image} />
          <div className="text-md text-slate-800 ml-2">
            <p>by {user?.name}</p>
            <p className="text-sm text-slate-700">
              Created:{" "}
              <span className=" text-slate-800">
                {dateConverter(post.createdAt.toString())}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
