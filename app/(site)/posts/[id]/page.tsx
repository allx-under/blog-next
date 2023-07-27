import getPostById from "@/app/actions/getPostById";
import getRandomPost from "@/app/actions/getRandomPost";
import getUserById from "@/app/actions/getUserById";
import AuthorInfo from "@/app/components/AuthorInfo";
import SectionContainer from "@/app/components/SectionContainer";
import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";
import OtherPost from "./components/OtherPost";
import RichTextRender from "@/app/components/RichTextRender";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(params.id);
  const user = await getUserById(post?.userId!);
  const randomPost = await getRandomPost(params.id);
  const randomUser = await getUserById(randomPost?.userId!);

  return (
    <SectionContainer>
      <div className="flex gap-10 justify-between">
        <div className="w-2/3 border-r border-slate-900">
          <h2 className="text-3xl flex items-center before:block before:w-8 before:h-[1px] before:bg-slate-900 before:mr-2">
            {post?.title}
          </h2>
          <div className="max-w-[95%] mt-4 relative drop-shadow-xl">
            <Image
              src={post?.image!}
              alt="post"
              width={600}
              height={600}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-zinc-100/80 py-1 px-1">
              <AuthorInfo post={post!} user={user!} />
            </div>
          </div>

          <RichTextRender content={post?.description!} />
        </div>
        <div className="flex flex-col w-1/3 justify-center">
          <p className="text-zinc-700 text-center mb-3">
            Other post you may like
          </p>
          <OtherPost post={randomPost!} user={randomUser!} />
        </div>
      </div>
    </SectionContainer>
  );
};

export default PostPage;
