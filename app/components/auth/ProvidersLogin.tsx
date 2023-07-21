"use client";
import { signIn } from "next-auth/react";

import { FaGithub, FaGoogle } from "react-icons/fa";

const ProvidersLogin = () => {
  return (
    <div className="mt-4 pb-2">
      <h3 className="text-center text-lg mb-2">Or you can use next services</h3>
      <div className="max-w-full bg-white/30 rounded-md h-10 flex justify-evenly items-center ">
        <div
          onClick={() => signIn("github", { callbackUrl: "/profile" })}
          className="group flex justify-center items-center text-slate-800 cursor-pointer rounded-full w-9 h-9 hover:bg-slate-800/50 hover:text-slate-200 transition"
        >
          <FaGithub size={26} />
        </div>
        <div className="w-[1px] h-full bg-slate-800" />
        <div
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="flex justify-center items-center text-slate-800  cursor-pointer rounded-full w-9 h-9 hover:bg-slate-800/50 hover:text-slate-200 transition"
        >
          <FaGoogle size={26} />
        </div>
      </div>
    </div>
  );
};

export default ProvidersLogin;
