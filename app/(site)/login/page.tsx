import SectionContainer from "@/app/components/SectionContainer";
import AuthForm from "@/app/components/auth/AuthForm";
import React from "react";

const LoginPage = () => {
  return (
    <SectionContainer>
      <h2 className="text-center text-slate-900 text-2xl font-bold uppercase mb-2">
        Welcome back
      </h2>
      <AuthForm isLogin />
    </SectionContainer>
  );
};

export default LoginPage;
