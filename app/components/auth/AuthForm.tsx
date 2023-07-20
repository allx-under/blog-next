"use client";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

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
    reset,
    setValue,
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
          router.push("/login");
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
            router.push("/");
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
      <div>
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
    </div>
  );
};

export default AuthForm;
