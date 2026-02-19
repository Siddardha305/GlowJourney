import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { format } from "timeago.js";
import CourseContentList from "../Course/CourseContentList";
import RazorpayCheckout from "../Payment/RazorpayCheckout";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useValidateCouponMutation } from "@/redux/features/coupons/couponsApi";
import toast from "react-hot-toast";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaInfinity } from "react-icons/fa";
import Ratings from "@/app/utils/Ratings";

type Props = {
  data: any;
  setRoute: any;
  setOpen: any;
};

const CourseDetails = ({
  data,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {
  const { data: userData, refetch } = useLoadUserQuery(undefined, {});
  const [user, setUser] = useState<any>();
  const [open, setOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [validateCoupon] = useValidateCouponMutation();

  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);

  const dicountPercentenge =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;

  const discountPercentengePrice = dicountPercentenge.toFixed(0);

  const isPurchased =
    user && user?.courses?.find((item: any) => item._id === data._id || item.courseId === data._id);

  const finalPrice = appliedCoupon ? appliedCoupon.finalAmount : data.price;

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setIsApplyingCoupon(true);
    try {
      const response: any = await validateCoupon({
        code: couponCode,
        courseId: data._id,
        amount: data.price,
      });

      if (response.data) {
        setAppliedCoupon(response.data.coupon);
        toast.success("Coupon applied successfully!");
      } else if (response.error) {
        toast.error(response.error.data.message || "Invalid coupon code");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to apply coupon");
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    toast.success("Coupon removed");
  };

  const handleOrder = (e: any) => {
    if (user) {
      setOpen(true);
    } else {
      setRoute("Login");
      openAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-theme-bg-dark py-12">
      <div className="w-[90%] 800px:w-[88%] max-w-[1600px] m-auto">
        <div className="w-full flex flex-col-reverse 800px:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full 800px:w-[65%] space-y-8">
            {/* Course Header */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h1 className="text-3xl md:text-5xl font-bold text-theme-text mb-6">
                {data.name}
              </h1>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-text mb-6 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-theme-accent rounded-full"></div>
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.benefits?.map((item: any, index: number) => (
                  <div
                    className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
                    key={index}
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-theme-bg-dark flex items-center justify-center mt-0.5 border border-theme-accent/20">
                      <IoCheckmarkDoneOutline
                        size={18}
                        className="text-theme-accent"
                      />
                    </div>
                    <p className="text-gray-600 text-base group-hover:text-theme-text transition-colors leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-text mb-6 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-theme-accent rounded-full"></div>
                Prerequisites
              </h2>
              <div className="space-y-4">
                {data.prerequisites?.map((item: any, index: number) => (
                  <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform" key={index}>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-theme-bg-dark border-2 border-theme-accent/20 flex items-center justify-center mt-0.5">
                      <IoCheckmarkDoneOutline
                        size={16}
                        className="text-theme-accent"
                      />
                    </div>
                    <p className="text-gray-600 text-base group-hover:text-theme-text transition-colors">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-text mb-6 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-theme-accent rounded-full"></div>
                Course Content
              </h2>
              <CourseContentList data={data?.courseData} isDemo={true} />
            </div>

            {/* Course Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-theme-text mb-6 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-theme-accent rounded-full"></div>
                About This Course
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {data.description}
              </p>
            </div>

            {/* Reviews Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Ratings rating={data?.ratings} />
                <h2 className="text-2xl md:text-3xl font-bold text-theme-text">
                  {Number.isInteger(data?.ratings)
                    ? data?.ratings.toFixed(1)
                    : data?.ratings.toFixed(2)}
                </h2>
                <span className="text-gray-500 text-lg">• {data?.reviews?.length} Reviews</span>
              </div>
              <div className="space-y-6">
                {(data?.reviews && [...data.reviews].reverse()).map(
                  (item: any, index: number) => (
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-theme-accent/20 hover:bg-white transition-all shadow-sm" key={index}>
                      <div className="flex gap-4">
                        <div className="w-14 h-14 flex-shrink-0">
                          <Image
                            src={
                              item.user.avatar
                                ? item.user.avatar.url
                                : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                            }
                            width={56}
                            height={56}
                            alt=""
                            className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h5 className="text-lg font-semibold text-theme-text">
                              {item.user.name}
                            </h5>
                            <Ratings rating={item.rating} />
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-2">{item.comment}</p>
                          <small className="text-gray-500">
                            {format(item.createdAt)}
                          </small>
                        </div>
                      </div>
                      {item.commentReplies.map((i: any, idx: number) => (
                        <div className="flex gap-4 ml-0 800px:ml-16 mt-6 bg-theme-bg-dark rounded-lg p-4 border border-theme-accent/5" key={idx}>
                          <div className="w-12 h-12 flex-shrink-0">
                            <Image
                              src={
                                i.user.avatar
                                  ? i.user.avatar.url
                                  : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                              }
                              width={48}
                              height={48}
                              alt=""
                              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h5 className="text-base font-semibold text-theme-text">{i.user.name}</h5>
                              <VscVerifiedFilled className="text-theme-accent text-lg" />
                            </div>
                            <p className="text-gray-600 text-sm">{i.comment}</p>
                            <small className="text-gray-500 text-xs">
                              {format(i.createdAt)}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="w-full 800px:w-[35%]">
            <div className="sticky top-24 space-y-6">
              {/* Video Player */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />

                {/* Pricing Section */}
                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accent-hover">
                      {data.price === 0 ? "Free" : `₹${data.price}`}
                    </h1>
                    {data.price > 0 && data.estimatedPrice > data.price && (
                      <>
                        <h5 className="text-xl line-through text-gray-400">
                          ₹{data.estimatedPrice}
                        </h5>
                        <span className="bg-theme-bg-dark border border-theme-accent text-theme-accent px-3 py-1 rounded-full text-sm font-bold">
                          {discountPercentengePrice}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Coupon Section */}
                  {!isPurchased && data.price > 0 && (
                    <div className="mb-6">
                      {!appliedCoupon ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 outline-none focus:border-theme-accent transition-colors"
                          />
                          <button
                            onClick={handleApplyCoupon}
                            disabled={isApplyingCoupon}
                            className="px-5 py-3 bg-theme-accent text-white rounded-lg hover:bg-theme-accent-hover disabled:opacity-50 font-semibold transition-all shadow-sm"
                          >
                            {isApplyingCoupon ? "..." : "Apply"}
                          </button>
                        </div>
                      ) : (
                        <div className="bg-theme-bg-dark border border-theme-accent/20 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-sm text-theme-text mb-1">
                                Coupon Applied: <strong className="text-theme-accent">{appliedCoupon.code}</strong>
                              </p>
                              <p className="text-lg font-semibold text-theme-accent">
                                Discount: ₹{appliedCoupon.discountAmount.toFixed(2)}
                              </p>
                              <p className="text-2xl font-bold text-theme-text">
                                Final Price: ₹{appliedCoupon.finalAmount.toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={handleRemoveCoupon}
                              className="text-red-500 hover:text-red-600 text-sm font-semibold"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  {isPurchased ? (
                    <Link
                      className="block w-full py-4 text-center bg-theme-accent hover:bg-theme-accent-hover text-white rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-lg hover:scale-105"
                      href={`/course-access/${data._id}`}
                    >
                      Enter to Course
                    </Link>
                  ) : (
                    <button
                      className="w-full py-4 bg-theme-accent hover:bg-theme-accent-hover text-white rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md hover:scale-105"
                      onClick={handleOrder}
                    >
                      Buy Now ₹{finalPrice}
                    </button>
                  )}

                  {/* Course Includes */}
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                    <h3 className="text-theme-text font-semibold text-lg mb-4">This course includes:</h3>
                    <div className="flex items-center gap-3 text-gray-600">
                      <AiOutlineUnorderedList className="text-theme-accent" size={20} />
                      <span>{data.courseData?.length || 0} Video Lectures</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaInfinity className="text-theme-accent" size={20} />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="text-theme-accent" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                      <span>Premium Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Razorpay Modal */}
      {open && (
        <div className="w-full h-screen bg-black/50 backdrop-blur-sm fixed top-0 left-0 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="w-full flex justify-end mb-4">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-theme-text transition-colors"
              >
                <IoCloseOutline size={32} />
              </button>
            </div>
            <div className="w-full">
              <RazorpayCheckout
                setOpen={setOpen}
                data={data}
                user={user}
                refetch={refetch}
                appliedCoupon={appliedCoupon}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
