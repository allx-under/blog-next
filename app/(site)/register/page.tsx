import SectionContainer from "@/app/components/SectionContainer";
import AuthForm from "@/app/components/auth/AuthForm";
import React from "react";

const Register = () => {
  return (
    <>
      <h2 className="text-center text-slate-900 text-2xl font-bold uppercase mb-2">
        Register new user
      </h2>
      <AuthForm />
    </>
  );
};

export default Register;
