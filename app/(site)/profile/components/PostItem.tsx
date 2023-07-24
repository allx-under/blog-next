"use client";
import { Post } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import PostModal from "./PostModal";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <li>
      <div
        onClick={() => setIsOpenModal(true)}
        className="border border-slate-600/50 bg-slate-700/30 relative cursor-pointer group overflow-hidden"
      >
        <h3 className="h-12 flex items-center pl-2">{post?.title}</h3>
        <div className="w-full h-36 relative ">
          <Image src={post.image!} alt="post" fill className="object-cover" />
        </div>
        <div className="p-2 absolute -translate-y-96 group-hover:-translate-y-36 bg-slate-700/80 z-10 h-36 text-white transition duration-300">
          <p className="text-xs ">{post.description}</p>
        </div>
      </div>
      <PostModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        post={post}
      />
    </li>
  );
};

export default PostItem;
