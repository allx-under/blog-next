"use client";
import getUserById from "@/app/actions/getUserById";
import Avatar from "@/app/components/Avatar";

import dateConverter from "@/app/utils/dateConverter";
import { Post, User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import axios from "axios";
import AuthorInfo from "@/app/components/AuthorInfo";

interface PostItemProps {
  post: Post;
  isLeft?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({ post, isLeft }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/api/users/${post.userId}`);

        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [post.userId]);

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
        } flex flex-col justify-between min-h-[260px]`}
      >
        <div>
          {" "}
          <p className="text-lg text-slate-800 mt-5 mb-3">
            {post.description.substring(
              0,
              Math.min(post.description.length, 230)
            ) + "..."}
          </p>
          <MoreButton href={post?.id} text="Read more" />
        </div>
        <AuthorInfo post={post} user={user!} />
      </div>
    </div>
  );
};

export default PostItem;
