"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPostcardHeartFill } from "react-icons/bs";

const HeaderLogo = () => {
  const router = useRouter();
  return (
    <div className="w-1/3">
      <div
        onClick={() => router.push("/")}
        className="flex items-center justify-center rounded-md  p-2 cursor-pointer hover:bg-slate-300/70 transition w-36 "
      >
        <div className="text-slate-900 flex items-center">
          <BsFillPostcardHeartFill size={38} />
        </div>
        <p className="uppercase text-slate-900 font-semibold ml-2 text-3xl">
          Blog
        </p>
      </div>
    </div>
  );
};

export default HeaderLogo;
