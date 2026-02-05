"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import Image from "next/image";
import avatar from "../../public/assests/avatar.png";
import { useSession } from "next-auth/react";
import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./Loader/Loader";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {});
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const { } = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (!userData) {
        if (data) {
          socialAuth({
            email: data?.user?.email,
            name: data?.user?.name,
            avatar: data.user?.image,
          });
        }
      }
      if (data === null) {
        if (isSuccess) {
          toast.success("Login Successfully");
        }
      }
      if (data === null && !isLoading && !userData) {
        setLogout(true);
      }
    }
  }, [data, userData, isLoading]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully");
      refetch();
    }
    if (error) {
      console.log("Social auth error:", error);
      if ('data' in error) {
        const errorData = error as any;
        toast.error(errorData.data?.message || "Login failed");
      }
    }
  }, [isSuccess, error]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };

  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="w-full relative z-[999]">
            <div
              className={`fixed z-[999] transition-all duration-300 flex items-center justify-between px-4
          ${active
                  ? "top-4 left-1/2 -translate-x-1/2 h-[60px] w-[95%] max-w-[1200px] rounded-full bg-black/50 shadow-[0_0_20px_rgba(227,27,109,0.3)] backdrop-blur-md"
                  : "top-0 left-1/2 -translate-x-1/2 h-[80px] w-full max-w-[1400px] bg-transparent"}
        `}
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Link href={"/"} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/anil-logo.png"
                      alt="Glow Journey Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[20px] font-Poppins font-[600] text-theme-text group-hover:text-theme-accent transition-colors duration-300 whitespace-nowrap">
                    Glow Journey
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden 800px:flex items-center gap-6">
                <NavItems activeItem={activeItem} isMobile={false} />
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                {/* Theme Switcher - Optional based on design, keeping it for functionality */}
                {/* <ThemeSwitcher /> */}

                {/* User Section / Sign In */}
                {userData ? (
                  <Link href="/profile">
                    <div className={`w-10 h-10 rounded-full overflow-hidden border-2 cursor-pointer transition-all ${activeItem === 5 ? "border-theme-accent" : "border-transparent"}`}>
                      <Image
                        src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpen(true)}
                    className="hidden 800px:flex items-center justify-center px-6 py-2 rounded-full bg-theme-accent text-white font-semibold text-sm hover:bg-theme-accent-hover transition-all duration-300 shadow-[0_0_20px_rgba(227,27,109,0.4)] hover:shadow-[0_0_30px_rgba(227,27,109,0.8)] whitespace-nowrap"
                  >
                    Get Started
                  </button>
                )}

                {/* Mobile Menu Toggle */}
                <div className="800px:hidden flex items-center">
                  <button
                    onClick={() => setOpenSidebar(true)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <HiOutlineMenuAlt3
                      size={24}
                      className="text-theme-text"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Sidebar */}
            {openSidebar && (
              <div
                className="fixed w-full h-screen top-0 left-0 z-[99999] bg-black/40 backdrop-blur-sm animate-fadeIn"
                onClick={handleClose}
                id="screen"
              >
                <div className="w-[75%] max-w-[320px] fixed z-[999999999] h-screen bg-theme-bg-light top-0 right-0 shadow-2xl animate-slideInRight">
                  <div className="p-5 border-b border-white/10 flex justify-between items-center">
                    <span className="text-xl font-bold text-theme-text">Menu</span>
                  </div>
                  <div className="py-4">
                    <NavItems activeItem={activeItem} isMobile={true} />
                    {!userData && (
                      <div className="px-6 mt-4">
                        <button
                          onClick={() => {
                            setOpen(true);
                            setOpenSidebar(false);
                          }}
                          className="w-full py-3 rounded-full bg-theme-accent text-white font-semibold hover:bg-theme-accent-hover transition-opacity"
                        >
                          Get Started
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-5 w-full text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Glow Journey
                  </div>
                </div>
              </div>
            )}

            {route === "Login" && (
              <>
                {open && (
                  <CustomModal
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    activeItem={activeItem}
                    component={Login}
                    refetch={refetch}
                  />
                )}
              </>
            )}

            {route === "Sign-Up" && (
              <>
                {open && (
                  <CustomModal
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    activeItem={activeItem}
                    component={SignUp}
                  />
                )}
              </>
            )}

            {route === "Verification" && (
              <>
                {open && (
                  <CustomModal
                    open={open}
                    setOpen={setOpen}
                    setRoute={setRoute}
                    activeItem={activeItem}
                    component={Verification}
                  />
                )}
              </>
            )}
          </div>
        )
      }
    </>
  );
};

export default Header;
