"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
  refetch: any;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login: FC<Props> = ({ setRoute, setOpen, refetch }) => {
  const [show, setShow] = useState(false);
  const [login, { isSuccess, error, isLoading }] = useLoginMutation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully!");
      setOpen(false);
      refetch();
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex flex-col md:flex-row w-full h-[600px] md:h-auto overflow-hidden">
      {/* Left: Brand Section */}
      <div className="hidden md:flex md:w-[45%] bg-gradient-to-br from-theme-accent/40 via-black to-black relative flex-col justify-between p-10 text-white overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4">Glow Journey</h1>
          <p className="text-gray-300 leading-relaxed">
            Master the art of makeup with our professional courses. Your journey to excellence starts here.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-theme-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20px] right-[-20px] w-60 h-60 bg-theme-accent/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <AiOutlineCheckCircle className="text-xl text-white" />
            </div>
            <span>Transform your skills today</span>
          </div>
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="w-full md:w-[55%] p-8 sm:p-10 md:p-12 bg-black relative overflow-y-auto h-full max-h-[600px] md:max-h-[85vh] no-scrollbar">
        <div className="text-left mb-8">
          <div className="inline-block p-2 rounded-full bg-white/5 mb-4 border border-white/5">
            <AiOutlineLock className="text-theme-accent" size={20} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back
          </h2>
          <p className="text-gray-400 text-sm">
            Please enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-theme-accent transition-all ${errors.email && touched.email ? "border-red-500" : "border-white/10"
                }`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={!show ? "password" : "text"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-theme-accent transition-all ${errors.password && touched.password ? "border-red-500" : "border-white/10"
                  }`}
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                onClick={() => setShow(!show)}
              >
                {!show ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </div>
            </div>
            {errors.password && touched.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-theme-accent hover:bg-theme-accent-hover text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-theme-accent/20 mt-2"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs text-gray-500 uppercase">Or continue with</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full py-2.5 border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all group"
            >
              <FcGoogle size={20} />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">Google</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <span
              className="text-theme-accent font-medium cursor-pointer hover:underline"
              onClick={() => setRoute("Sign-Up")}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
