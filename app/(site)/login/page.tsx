import AuthForm from "@/app/components/auth/AuthForm";

const LoginPage = () => {
  return (
    <>
      <h2 className="text-center text-slate-900 text-2xl font-bold uppercase mb-2">
        Welcome back
      </h2>
      <AuthForm isLogin />
    </>
  );
};

export default LoginPage;
