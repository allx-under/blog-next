"use client";
import { Post } from ".prisma/client";
import Input from "@/app/components/inputs/Input";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/app/components/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Select from "@/app/components/inputs/Select/Select";
import { options } from "@/app/components/inputs/Select/data";

interface EditPostFormProps {
  post: Post;
  onClose: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: post?.title,
      description: post?.description,
      image: post?.image,
      category: {
        value: post?.category,
        label: post?.category.charAt(0).toUpperCase() + post?.category.slice(1),
      },
    },
  });

  const image = watch("image");
  const category = watch("category");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .put(`api/posts/${post.id}`, { ...data, category: data.category.value })
      .then(() => {
        onClose();
        toast.success("Updated");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        onClick={onClose}
        className="absolute top-1 right-1 bg-slate-100/90 rounded-full w-9 h-9 flex items-center justify-center hover:text-zinc-300 hover:bg-slate-800/70 transition cursor-pointer"
      >
        <AiOutlineClose size={20} />
      </div>
      <h3 className="text-center text-2xl font-semibold">Edit your post</h3>
      <Input
        label="Title"
        type="text"
        id="title"
        register={register}
        errors={errors}
        disabled={isLoading}
        required
      />
      <Input
        label="Description"
        type="text"
        id="description"
        register={register}
        errors={errors}
        disabled={isLoading}
        required
      />
      <Select
        disabled={isLoading}
        onChange={(value) => setValue("category", value)}
        value={category}
        defaultValue={category}
        label="Category"
        options={options}
      />
      <div className="flex justify-between mb-3">
        <div>
          <Image
            src={image || post?.image}
            alt="post"
            width={380}
            height={350}
            className="object-cover"
          />
        </div>
        <div className="self-end mr-auto ml-4 p-2 rounded-md border border-transparent hover:border-slate-800 hover:bg-zinc-200/80 transition">
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={handleUpload}
            uploadPreset="dmgxik12"
          >
            <div className="text-slate-800 bg">
              <FcEditImage size={25} /> <p>Change</p>
            </div>
          </CldUploadButton>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          secondary
          text="Update post"
          disabled={isLoading}
          type="submit"
        />
      </div>
    </form>
  );
};

export default EditPostForm;
