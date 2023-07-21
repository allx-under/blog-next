import React from "react";

import NavLink from "./NavLink";
import getCurrentUser from "../actions/getCurrentUser";
import HeaderLogo from "./HeaderLogo";

import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <div className="w-full h-20 rounded-2xl bg-gradient-to-bl from-slate-300/80 to-slate-200/70 max-w-5xl mx-auto mt-3 flex justify-between items-center pl-8 pr-4">
      <HeaderLogo />
      <div>Categs</div>
      {user ? (
        <UserInfo email={user?.email!} image={user?.image!} />
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
