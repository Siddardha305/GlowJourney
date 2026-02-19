"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../../app/styles/style";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Signup: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);
  const [register, { data, error, isSuccess, isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      setRoute("Verification");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);


  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = {
        name, email, password
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex flex-col md:flex-row w-full h-[600px] md:h-auto overflow-hidden">
      {/* Left: Brand Section */}
      <div className="hidden md:flex md:w-[45%] bg-theme-bg-dark relative flex-col justify-between p-10 text-theme-text overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4">Join Glow Journey</h1>
          <p className="text-gray-600 leading-relaxed">
            Unlock your creative potential and become a certified makeup artist.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20px] right-[-20px] w-60 h-60 bg-white/40 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
              <AiOutlineCheckCircle className="text-xl text-theme-accent" />
            </div>
            <span>Start your career today</span>
          </div>
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="w-full md:w-[55%] p-8 sm:p-10 md:p-12 bg-white relative overflow-y-auto h-full max-h-[600px] md:max-h-[85vh] no-scrollbar">
        <div className="text-left mb-8">
          <div className="inline-block p-2 rounded-full bg-black/5 mb-4 border border-black/5">
            <AiOutlineUser className="text-theme-accent" size={20} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create account
          </h2>
          <p className="text-gray-500 text-sm">
            Sign up to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-accent transition-all ${errors.name && touched.name ? "border-red-500" : "border-gray-200"
                }`}
            />
            {errors.name && touched.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-accent transition-all ${errors.email && touched.email ? "border-red-500" : "border-gray-200"
                }`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={!show ? "password" : "text"}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-accent transition-all ${errors.password && touched.password ? "border-red-500" : "border-gray-200"
                  }`}
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-theme-accent"
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
            className="w-full py-3 bg-theme-accent hover:bg-theme-accent-hover text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-black/10 mt-2"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-500 uppercase">Or continue with</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full py-2.5 border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all group"
            >
              <FcGoogle size={20} />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">Google</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              className="text-theme-accent font-medium cursor-pointer hover:underline"
              onClick={() => setRoute("Login")}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
