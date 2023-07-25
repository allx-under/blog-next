import getAllPosts from "../actions/getAllPosts";
import Hero from "./components/Hero";
import Posts from "./components/Posts";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  );
}
