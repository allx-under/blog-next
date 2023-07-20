"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPostcardHeartFill } from "react-icons/bs";

const HeaderLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center rounded-md  p-2 cursor-pointer hover:bg-slate-300/70 transition"
    >
      <div className="text-slate-900 flex items-center">
        <BsFillPostcardHeartFill size={40} />
      </div>
      <p className="uppercase text-slate-900 font-bold ml-2 text-2xl">blog</p>
    </div>
  );
};

export default HeaderLogo;
