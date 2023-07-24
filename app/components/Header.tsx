import React from "react";

import NavLink from "./NavLink";
import getCurrentUser from "../actions/getCurrentUser";
import HeaderLogo from "./HeaderLogo";

import UserInfo from "./UserInfo";
import getCategories from "../actions/getCategories";
import Link from "next/link";

const Header = async () => {
  const user = await getCurrentUser();
  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="w-full h-20 rounded-2xl bg-gradient-to-bl from-slate-300/80 to-slate-200/70 max-w-5xl mx-auto mt-3 flex justify-between items-center pl-8 pr-4">
      <HeaderLogo />
      <div>
        {categories.map((item) => (
          <Link key={item} href={item}>
            {item}
          </Link>
        ))}
      </div>
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
