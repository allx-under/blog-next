"use client";
import { Post } from ".prisma/client";
import Input from "@/app/components/inputs/Input";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { TbPhotoEdit } from "react-icons/tb";
import React, { useCallback, useRef, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

import Button from "@/app/components/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Select from "@/app/components/inputs/Select/Select";
import { options } from "@/app/components/inputs/Select/data";
import Loader from "@/app/components/Loader";
import dynamic from "next/dynamic";

interface PostFormProps {
  post?: Post;
  onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const defaultValues = post
    ? {
        title: post?.title,
        description: post?.description,
        image: post?.image,
        category: {
          value: post?.category,
          label:
            post?.category.charAt(0).toUpperCase() + post?.category.slice(1),
        },
      }
    : {
        title: "",
        description: "",
        image: "",
        category: {
          value: "",
          label: "",
        },
      };

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    control,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues,
  });

  const image = watch("image");
  const category = watch("category");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, { shouldValidate: true });
    clearErrors("image");
  };

  const onDelete = useCallback(
    (id: string) => {
      setIsLoading(true);
      axios
        .delete(`/api/posts/${id}`)
        .then(() => {
          onClose();
          toast.success("Deleted");
          router.refresh();
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setIsLoading(false));
    },
    [onClose, router]
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    setIsLoading(true);
    if (!data.category.value) {
      setError(
        "category",
        { type: "required", message: "Category is required" },
        { shouldFocus: true }
      );
      setIsLoading(false);
      return;
    }
    if (!data.image) {
      setError(
        "image",
        { type: "required", message: "Image is required" },
        { shouldFocus: true }
      );
      setIsLoading(false);
      return;
    }

    if (post) {
      axios
        .put(`api/posts/${post.id}`, { ...data, category: data.category.value })
        .then(() => {
          onClose();
          toast.success("Updated");
          router.refresh();
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setIsLoading(false));
    } else {
      axios
        .post("/api/posts", { ...data, category: data.category.value })
        .then(() => {
          onClose();
          toast.success("Created");
          router.refresh();
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setIsLoading(false));
    }
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <div
        onClick={onClose}
        className="absolute -top-4 -right-4 bg-slate-100/90 rounded-full w-9 h-9 flex items-center justify-center hover:text-zinc-300 hover:bg-slate-800/70 transition cursor-pointer"
      >
        <AiOutlineClose size={20} />
      </div>
      {isLoading && (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-30">
          <Loader />
        </div>
      )}
      <h3 className="text-center text-2xl font-semibold mb-4">
        {post ? "Edit your post" : "Add new post"}
      </h3>
      <div className="flex w-full gap-2">
        <div className="w-2/3">
          <div className="flex gap-4">
            <Input
              label="Title"
              type="text"
              id="title"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
            />

            <Select
              disabled={isLoading}
              onChange={(value) => {
                setValue("category", value);
                clearErrors("category");
              }}
              value={category}
              defaultValue={category}
              label="Category"
              options={options}
              errors={errors}
            />
          </div>
          <Controller
            name="description"
            control={control}
            defaultValue={post ? post?.description : ""}
            rules={{ required: "Content is required" }}
            render={({ field }) => (
              <div className="border border-zinc-400 bg-white h-[240px] ">
                <ReactQuill
                  placeholder="Your main text"
                  theme="snow"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  style={{
                    height: "200px",
                  }}
                />
              </div>
            )}
          />
        </div>

        <div className="flex flex-col items-center justify-end w-1/3">
          <div className="drop-shadow-xl rounded-lg overflow-hidden border border-zinc-100/20 w-full h-64 ">
            <Image
              src={image || post?.image || "/images/post.jpeg"}
              alt="post"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-center items-center w-36 p-1 mt-1   justify-self-end rounded-md bg-zinc-100/60 hover:bg-zinc-200/80 transition cursor-pointer">
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={handleUpload}
              uploadPreset="dmgxik12"
            >
              <div className="text-slate-800 flex items-center cursor-pointer">
                <TbPhotoEdit size={25} /> <span className="ml-1">Upload</span>
              </div>
            </CldUploadButton>
          </div>
        </div>
        {errors.image && (
          <span className="text-red-500 text-xs">Image is required</span>
        )}
      </div>
      <div className="flex gap-2 items-center">
        {post && (
          <Button
            text="Delete"
            type="button"
            disabled={isLoading}
            warning
            onClick={() => onDelete(post?.id!)}
          ></Button>
        )}
        <Button
          secondary
          text={post ? "Update post" : "Create post"}
          disabled={isLoading}
          type="submit"
        />
      </div>
    </form>
  );
};

export default PostForm;
