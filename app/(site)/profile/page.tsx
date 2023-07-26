import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserPosts from "@/app/actions/getUserPosts";
import SectionContainer from "@/app/components/SectionContainer";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import PostList from "./components/PostList";
import AddPostBtn from "./components/AddPostBtn";

const Profile = async () => {
  const user = await getCurrentUser();
  const posts = await getUserPosts(user?.id as string);

  return (
    <SectionContainer>
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <h3 className="text-xl mb-2">Profile</h3>
          <div className="flex items-center">
            <Image
              src={user?.image!}
              alt="avatar"
              width={100}
              height={150}
              className="object-cover rounded-md"
            />
            <div className="ml-3 text-md text-zinc-600">
              <p>
                Name:{" "}
                <span className="font-semibold text-slate-800">
                  {user?.name}
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="font-semibold text-slate-800">
                  {user?.email}
                </span>
              </p>
              <p>
                My post count:{" "}
                <span className="font-semibold text-slate-800">
                  {posts?.length ?? "0"}
                </span>
              </p>
              <p>Added to favorite:</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center mb-4">
            <h3 className="text-xl mr-2">My Posts</h3>
            <AddPostBtn />
          </div>
          <PostList posts={posts} />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Profile;
