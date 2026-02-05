import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Sunita Reddy",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    profession: "Bridal Artist | Hyderabad",
    comment:
      "I had the pleasure of exploring Glow Journey, a website that provides an extensive range of courses on various makeup topics. I was thoroughly impressed with my experience, as the website offers a comprehensive selection of courses that cater to different skill levels and interests. If you're looking to enhance your knowledge and skills in makeup artistry, I highly recommend checking out Glow Journey!",
  },
  {
    name: "Priya Lakshmi",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Salon Owner | Vijayawada",
    comment:
      "Thanks for your amazing makeup tutorial platform! Your teaching style is outstanding, and the quality of your tutorials is top-notch. Your ability to break down complex looks into manageable steps, and cover diverse products and techniques is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching makeup, and keep up the fantastic work!",
  },
  {
    name: "Karthik Verma",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Fashion Stylist | Visakhapatnam",
    comment:
      "Thanks for your amazing makeup tutorial platform! Your teaching style is outstanding, and the quality of your tutorials is top-notch. Your ability to break down complex looks into manageable steps, and cover diverse products and techniques is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching makeup, and keep up the fantastic work!"
  },
  {
    name: "Sravani Krishna",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Makeup Artist | Warangal",
    comment:
      "I had the pleasure of exploring Glow Journey, a website that provides an extensive range of courses on various makeup topics. I was thoroughly impressed with my experience",
  },
  {
    name: "Pradeep Kumar",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Motion Graphics Artist | Guntur",
    comment:
      "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
  {
    name: "Anjali Reddy",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Beauty Consultant | Nellore",
    comment:
      "Join Glow Journey! It focuses on practical applications rather than just teaching theory. I took a lesson on creating professional bridal looks, and it was very helpful in teaching me the different stages involved in creating a look from start to finish. Overall, I highly recommend Glow Journey to anyone looking to improve their makeup skills and build a portfolio. It is a great resource that will help you take your skills to the next level.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            We take pride in the success of our students and are committed to
            providing them with the best possible learning experience. But don't
            just take our word for it - hear what our students have to say about
            their experience with us!
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
