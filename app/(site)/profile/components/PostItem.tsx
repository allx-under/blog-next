"use client";
import { Post } from "@prisma/client";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import PostModal from "./PostModal";
import RichTextRender from "@/app/components/RichTextRender";

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
          <Image
            src={post.image! || "/images/post.jpeg"}
            alt="post"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full p-2 absolute -translate-y-96 group-hover:-translate-y-36 bg-slate-700/80 z-10 h-36 text-white transition duration-300">
          <p className="text-white text-lg text-center mt-10">
            Click to edit post
          </p>
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:hidden p-2 rounded-full bg-slate-900/30 text-zinc-100 transition">
          <MdOutlineModeEditOutline size={32} />
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
