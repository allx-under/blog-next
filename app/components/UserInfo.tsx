"use client";
import { FiLogOut } from "react-icons/fi";
import Avatar from "./Avatar";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserInfoProps {
  email: string;
  image: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ email, image }) => {
  const router = useRouter();

  return (
    <div className="flex items-center w-1/3 justify-end">
      <p className="mr-2 text-sm">{email}</p>
      <div
        onClick={() => router.push("/profile")}
        className="group/avatar relative cursor-pointer"
      >
        <Avatar src={image} />
        <span className="hidden group-hover/avatar:block absolute text-sm -bottom-4 left-0 text-gray-600 ">
          Profile
        </span>
      </div>
      <div
        onClick={() => {
          signOut();
        }}
        className="h-9 w-9 md:h-11 md:w-11 rounded-full flex justify-center items-center ml-2 cursor-pointer hover:bg-slate-800/30 relative group transition"
      >
        <FiLogOut size={26} />
        <span className="hidden group-hover:block absolute text-sm -bottom-4 left-0 text-gray-600">
          Logout
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
