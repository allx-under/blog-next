import React from "react";

import NavLink from "./NavLink";
import getCurrentUser from "../actions/getCurrentUser";
import HeaderLogo from "./HeaderLogo";
import Image from "next/image";
import Avatar from "./Avatar";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <div className="w-full h-20 rounded-2xl bg-gradient-to-bl from-slate-300/80 to-slate-200/70 max-w-5xl mx-auto mb-5 mt-3 flex justify-between items-center px-10">
      <HeaderLogo />
      <div>Categs</div>
      {user ? (
        <div className="flex items-center">
          <p className="mr-2">{user?.email}</p>
          <Avatar src={user?.image} />
        </div>
      ) : (
        <div className="flex text-lg font-bold">
          <NavLink href="/login" text="Login" />
          <NavLink href="/register" text="Register" isLast />
        </div>
      )}
    </div>
  );
};

export default Header;
