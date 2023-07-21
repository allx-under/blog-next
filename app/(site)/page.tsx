import PrivateRoute from "../components/HOC/PrivateRoute";
import Hero from "./components/Hero";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
      <Hero />
      <Posts />
    </>
  );
}
