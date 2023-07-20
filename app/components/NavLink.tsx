import Link from "next/link";
import React from "react";

interface NavLinkProps {
  text: string;
  href: string;
  isLast?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href, isLast }) => {
  return (
    <Link
      className={`px-3 ${
        isLast ? "border-0" : "border-r"
      } border-slate-900 hover:text-slate-600/80 transition`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavLink;
