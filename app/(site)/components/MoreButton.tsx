import Link from "next/link";
import React from "react";

interface MoreButtonProps {
  text: string;
  href: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={`/posts/${href}`}
      className="p-2 bg-zinc-500/80 text-zinc-100 rounded-md h-9 hover:bg-white/30 hover:text-slate-800 transition"
    >
      {text}
    </Link>
  );
};

export default MoreButton;
