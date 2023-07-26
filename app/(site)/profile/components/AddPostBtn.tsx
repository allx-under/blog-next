"use client";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PostModal from "./PostModal";

const AddPostBtn = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className="flex ml-auto items-center rounded-md bg-slate-300/60 p-1 cursor-pointer hover:bg-slate-300/80 transition"
      >
        <AiOutlinePlusCircle size={20} />
        <p className="ml-1">Add post</p>
      </div>
      <PostModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </>
  );
};

export default AddPostBtn;
