"use client";
import AuthorInfo from "@/app/components/AuthorInfo";
import { Post, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface OtherPostProps {
  post: Post;
  user: User;
}

const OtherPost: React.FC<OtherPostProps> = ({ post, user }) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/posts/${post.id}`)}
        className="border border-slate-900 drop-shadow-lg  cursor-pointer group rounded-md overflow-hidden"
      >
        <div className="w-[100%] relative">
          <p className="text-slate-900 text-lg px-2 absolute bg-slate-300/90 ">
            {post?.title}
          </p>

          <Image
            src={post?.image!}
            alt="post"
            width={500}
            height={300}
            className="object-cover"
          />
          <div className="w-full h-full bg-slate-500/70 z-10 absolute top-0 left-0 hidden group-hover:block transition-all ">
            <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-zinc-100 ">
              - Read more -
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-auto">
        <AuthorInfo user={user} post={post} />
      </div>
    </>
  );
};

export default OtherPost;
