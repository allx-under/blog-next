import React from "react";
import Avatar from "./Avatar";
import { Post, User } from "@prisma/client";
import dateConverter from "../utils/dateConverter";
import getUserById from "../actions/getUserById";

interface AuthorInfoProps {
  user: User;
  post: Post;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ post, user }) => {
  return (
    <div className="flex items-center">
      <Avatar src={user?.image} />
      <div className="text-sm text-slate-800 ml-2">
        <p>by {user?.name}</p>
        <p className="text-xs text-slate-700">
          Created:{" "}
          <span className=" text-slate-800">
            {dateConverter(post.createdAt.toString())}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
