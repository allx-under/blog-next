"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import ProvidersLogin from "./ProvidersLogin";

interface AuthFormProps {
  isLogin?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (!isLogin) {
      axios
        .post("/api/register", data)
        .then(() => {
          router.push("/profile");
        })
        .catch((e) => {
          toast.error("Something went wrong");
        })
        .finally(() => setIsLoading(false));
    } else {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Wrong credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged in");
            router.push("/profile");
            router.refresh();
          }
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col mb-4" onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <Input
            label="Name"
            type="text"
            id="name"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
        )}
        <Input
          label="Email"
          type="email"
          id="email"
          register={register}
          errors={errors}
          disabled={isLoading}
          required
        />
        <Input
          label="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          disabled={isLoading}
          required
        />
        <Button
          type="submit"
          text={!isLogin ? "Sign up" : "Login"}
          disabled={isLoading}
        />
      </form>

      <div className="border-b pb-4 border-slate-800">
        {!isLogin ? (
          <p className="text-center text-slate-900">
            Already exist?{" "}
            <span
              className="text-slate-700 cursor-pointer hover:text-slate-500"
              onClick={() => router.push("/login")}
            >
              Go to login
            </span>
          </p>
        ) : (
          <p className="text-center text-slate-900">
            Not registered yet?{" "}
            <span
              className="text-slate-700 cursor-pointer hover:text-slate-500"
              onClick={() => router.push("/register")}
            >
              Go to register
            </span>
          </p>
        )}
      </div>
      <ProvidersLogin />
    </div>
  );
};

export default AuthForm;
