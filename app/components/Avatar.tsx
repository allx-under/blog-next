import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string | null;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 border border-slate-600">
      <Image
        alt="avatar"
        src={src ?? "/images/profile.jpeg"}
        fill
        sizes=""
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
