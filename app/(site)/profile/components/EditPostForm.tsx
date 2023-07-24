"use client";
import { Post } from ".prisma/client";
import Input from "@/app/components/auth/Input";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import MoreButton from "../../components/MoreButton";
import Button from "@/app/components/Button";

interface EditPostFormProps {
  post: Post;
  onClose: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: post.title,
      description: post.description,
      image: post?.image,
    },
  });

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, { shouldValidate: true });
  };
  return (
    <form>
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
        <div className=" self-end ml-3">
          <CldUploadButton
            options={{ maxFiles: 1 }}
            onUpload={handleUpload}
            uploadPreset="dmgxik12"
          >
            <Button text="Change photo" disabled={isLoading} type="button" />
          </CldUploadButton>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={onClose}
          text="Cancel"
          disabled={isLoading}
          type="button"
        />
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
