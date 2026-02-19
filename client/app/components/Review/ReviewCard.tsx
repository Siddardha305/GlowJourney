import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import React from "react";

type Props = {
  item: any;
};

const ReviewCard = (props: Props) => {
  return (
    <div className="w-full h-max pb-4 bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex w-full">
        <Image
          src={props.item.avatar}
          alt=""
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-cover border border-gray-200"
          loading="lazy"
        />
        <div className="800px:flex justify-between w-full hidden">
          <div className="pl-4">
            <h5 className="text-[20px] text-theme-text font-semibold">
              {props.item.name}
            </h5>
            <h6 className="text-[16px] text-gray-500">
              {props.item.profession}
            </h6>
          </div>
          <Ratings rating={5} />
        </div>
        {/* for mobile */}
        <div className="800px:hidden justify-between w-full flex flex-col">
          <div className="pl-4">
            <h5 className="text-[20px] text-theme-text font-semibold">
              {props.item.name}
            </h5>
            <h6 className="text-[16px] text-gray-500">
              {props.item.profession}
            </h6>
          </div>
          <Ratings rating={5} />
        </div>
      </div>
      <p className="pt-2 px-2 font-Poppins text-gray-600 leading-relaxed">
        {props.item.comment}
      </p>
    </div>
  );
};

export default ReviewCard;
