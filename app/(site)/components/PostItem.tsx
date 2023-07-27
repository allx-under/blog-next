"use client";

import { Post, User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import axios from "axios";
import AuthorInfo from "@/app/components/AuthorInfo";
import Loader from "@/app/components/Loader";
import RichTextRender from "@/app/components/RichTextRender";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface PostItemProps {
  post: Post;
  isLeft?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({ post, isLeft }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const addToFavorite = () => {
    axios
      .put(`/api/posts/favorite/${post.id}`)
      .then(() => {
        toast.success("Added");
        setIsFavorite(true);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  const deleteFromFavorite = () => {
    axios
      .delete(`/api/posts/favorite/${post.id}`)
      .then(() => {
        toast.success("Removed");
        setIsFavorite(false);
      })
      .catch(() => toast.error("Something went wrong"));
  };

  useEffect(() => {
    if (user) {
      setIsFavorite(post.favoriteIds.includes(user?.id!));
    }
  }, [post.favoriteIds, user]);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(`/api/users/${post.userId}`);

        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, [post.userId]);

  return (
    <div
      className={`mb-10 pb-10 pt-5 border-b border-slate-500  flex ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="relative drop-shadow-[15px_-15px_0px_#cbd5e1] ">
        <h2 className="text-4xl text-slate-800 uppercase absolute max-w-xs p-4 bg-slate-300/90">
          {post.title}
        </h2>
        <div>
          <Image
            alt={post.title}
            src={post.image!}
            width="450"
            height="400"
            className="object-cover"
          />
        </div>
        <div className="px-4 py-2 flex justify-center items-center rounded-bl-full absolute top-0 right-0  bg-slate-300/90">
          {!isFavorite ? (
            <AiOutlineHeart
              onClick={addToFavorite}
              size={20}
              className="cursor-pointer"
            />
          ) : (
            <AiFillHeart
              onClick={deleteFromFavorite}
              className="text-red-500 cursor-pointer"
              size={20}
            />
          )}
        </div>
      </div>

      <div
        className={`max-w-md ${
          isLeft ? "ml-10" : "mr-auto"
        } flex flex-col justify-between min-h-[280px]`}
      >
        <div>
          <RichTextRender
            content={
              post.description.substring(
                0,
                Math.min(post.description.length, 330)
              ) + "..."
            }
          />

          <MoreButton href={post?.id} text="Read more" />
        </div>
        {isLoading ? <Loader /> : <AuthorInfo post={post} user={user!} />}
      </div>
    </div>
  );
};

export default PostItem;
