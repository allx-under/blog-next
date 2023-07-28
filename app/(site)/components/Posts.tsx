"use client";
import React, { useCallback, useEffect, useState } from "react";

import SectionContainer from "@/app/components/SectionContainer";

import PostItem from "./PostItem";
import { Post } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import getAllPosts from "@/app/actions/getAllPosts";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [postList, setPostList] = useState<Post[] | []>(posts);

  const categParam = useSearchParams().get("cat");

  const getPostsByCategory = useCallback(async (category: string) => {
    const response = await axios.get(`/api/posts/?cat=${category}`);
    setPostList(response.data);
  }, []);

  useEffect(() => {
    getPostsByCategory(categParam!);
  }, [categParam, getPostsByCategory]);

  return (
    <SectionContainer>
      <ul>
        {postList.map((post, i) => (
          <PostItem key={post?.id} post={post} isLeft={i % 2 === 0} />
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Posts;
