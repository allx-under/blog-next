import getPostById from "@/app/actions/getPostById";
import getUserById from "@/app/actions/getUserById";
import AuthorInfo from "@/app/components/AuthorInfo";
import SectionContainer from "@/app/components/SectionContainer";
import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(params.id);
  const user = await getUserById(post?.userId!);

  return (
    <SectionContainer>
      <div>
        <div className="max-w-[50%] ">
          <h2 className="text-3xl">{post?.title}</h2>
          <div className="w-[100%] mt-4 relative">
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

          <p className="mt-4">{post?.description}</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PostPage;
