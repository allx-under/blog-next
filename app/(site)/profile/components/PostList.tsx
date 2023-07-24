import { Post } from "@prisma/client";
import PostItem from "./PostItem";

interface PostsListProps {
  posts: Post[];
}

const PostList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <ul className="grid gap-5 grid-cols-3">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
