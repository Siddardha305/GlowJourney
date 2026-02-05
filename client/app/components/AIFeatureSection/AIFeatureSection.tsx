'use client';

import React from 'react';
import PromoBanner from '../Banner/PromoBanner';

export default function AIFeatureSection() {
  const title = (
    <>
      Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accent-hover">Journey</span> Today
    </>
  );

  return (
    <section className="w-full bg-theme-bg-dark pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-0 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-theme-accent/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 h-full">

        <PromoBanner
          title={title}
          description="Master professional makeup artistry with our comprehensive courses. Sign up now and experience the power of expert-led training."
          imageSrc="/home/makeup_feature.png"
          imageAlt="Makeup Artistry"
          primaryBtnText="Start Now"
          primaryBtnLink="/courses"
          secondaryBtnText="Follow us"
          secondaryBtnLink="https://www.instagram.com/bb_edits00/"
        />

      </div>
    </section>
  );
}
