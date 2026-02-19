'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsHero = () => {
    return (
        <section className="w-full bg-theme-bg-dark relative overflow-hidden py-10 md:py-20 px-4">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Content (Text) - Actually in the image it's centered/mixed but let's follow the standard hero layout or specific design */}
                {/* Looking at reference: Image is transparent png of girl, Text is "Discover The Secrets Of Beauty" */}

                <div className="order-2 md:order-1 flex flex-col items-start md:items-start z-10 space-y-6">
                    <span className="text-theme-text/60 tracking-[0.2em] font-medium uppercase text-sm">
                        Premium Collection
                    </span>
                    <h1 className="text-5xl md:text-7xl font-josefin font-light text-theme-text leading-tight">
                        Discover <br />
                        <span className="font-bold text-[#E57FA1]">The Secrets</span> <br />
                        <span className="font-light">Of Beauty</span>
                    </h1>
                    <p className="text-theme-text/70 max-w-md text-lg leading-relaxed">
                        Get them together (for less!) for dewy, natural-looking coverage that still looks like skin.
                    </p>
                    <Link href="#products">
                        <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest hover:bg-theme-accent transition-all uppercase mt-4">
                            Shop Now
                        </button>
                    </Link>
                </div>

                {/* Right Image (Model) */}
                <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full flex justify-center items-center">
                    {/* Background Circle */}
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white rounded-full blur-3xl opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                    <Image
                        src="/home/hero2.jpeg"
                        alt="Beauty Model"
                        width={600}
                        height={600}
                        className="object-contain relative z-10 drop-shadow-2xl rounded-[3rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductsHero;
