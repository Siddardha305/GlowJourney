"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import { HomeHero } from "./components/hero";
import WhoIsThisFor from "./components/WhoIsThisFor/WhoIsThisFor";
import OurWorks from "./components/OurWorks/OurWorks";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Footer from "./components/Footer";
import AIFeatureSection from "./components/AIFeatureSection/AIFeatureSection";
import ScrollStackCards from "./components/ScrollStackCards/ScrollStackCards";
import VideoTestimonials from "./components/Testimonials/VideoTestimonials";
import TextTestimonials from "./components/Testimonials/TextTestimonials";
import SmoothScroll from "./components/SmoothScroll";
import FAQ from "./components/FAQ/FAQ";

import ArtistHighlight from "./components/ArtistHighlight/ArtistHighlight";
import LoopVideo from "./components/LoopVideo/LoopVideo";

import PromoBanner from "./components/Banner/PromoBanner";

interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <>
      <SmoothScroll />
      <Heading
        title="Glow Journey"
        description="Glow Journey is a platform for students to learn professional makeup artistry"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <div suppressHydrationWarning>
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <HomeHero />
        <LoopVideo />
        <ArtistHighlight />
        {/* <ScrollStackCards /> - Removed per user request */}
        {/* <Reviews /> */}
        {/* <WhoIsThisFor /> - Removed per user request */}
        <Courses />
        <OurWorks />
        {/* <VideoTestimonials /> */}
        <TextTestimonials />
        <FAQ />
        <AIFeatureSection />
        <Footer />
      </div>
    </>
  );
};

export default Page;
