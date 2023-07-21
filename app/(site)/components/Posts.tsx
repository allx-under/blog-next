import getAllPosts from "@/app/actions/getAllPosts";
import React from "react";
import PostItem from "./PostItem";
import SectionContainer from "@/app/components/SectionContainer";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <SectionContainer>
      <ul>
        {posts.map((post, i) => (
          <PostItem key={post?.id} post={post} isLeft={i % 2 === 0} />
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Posts;
