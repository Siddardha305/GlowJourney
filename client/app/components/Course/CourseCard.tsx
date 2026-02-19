import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
      className="group"
    >
      <div className="w-full h-full flex flex-col bg-white border border-theme-accent/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={item.thumbnail.url}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            alt={item.name}
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

          {/* Discount badge */}
          {item.price > 0 && item.estimatedPrice > item.price && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-theme-accent px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-theme-accent/10">
              {Math.round(((item.estimatedPrice - item.price) / item.estimatedPrice) * 100)}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Title */}
          <h1 className="font-serif text-lg text-theme-text mb-3 line-clamp-2 group-hover:text-theme-accent transition-colors duration-300 min-h-[3.5rem]">
            {item.name}
          </h1>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-theme-text/60 text-sm">
            <div className="flex items-center gap-1">
              <AiOutlineUnorderedList size={16} className="text-theme-accent" />
              <span>{item.courseData?.length || 0} Lectures</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-theme-accent/10 pt-4 mt-auto">
            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <h3 className="text-theme-text font-bold text-xl">
                  {item.price === 0 ? (
                    <span className="text-theme-accent">Free</span>
                  ) : (
                    <span>₹{item.price}</span>
                  )}
                </h3>
                {item.price > 0 && item.estimatedPrice > item.price && (
                  <h5 className="text-xs line-through text-theme-text/40">
                    ₹{item.estimatedPrice}
                  </h5>
                )}
              </div>

              {/* View Details Arrow */}
              <div className="text-theme-accent font-medium text-sm flex items-center group-hover:gap-1 transition-all">
                View Details
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
