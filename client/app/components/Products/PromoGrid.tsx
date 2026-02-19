'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PromoGrid = () => {
    return (
        <section className="w-full bg-theme-bg-dark py-10 px-4">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">

                {/* Large Left Card - Vertical */}
                <div className="relative group overflow-hidden rounded-[2rem] bg-[#F5E6D8] h-[400px] md:h-full p-8 md:p-12 flex flex-col justify-center items-start">
                    <div className="z-10 max-w-xs">
                        <span className="text-theme-accent font-bold uppercase tracking-wider text-xs mb-2 block">Skin 2.0</span>
                        <h3 className="text-4xl font-serif text-theme-text mb-6">Health <br /> & Beauty</h3>
                        <Link href="#skin" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-theme-text hover:gap-4 transition-all">
                            Shop Now <ArrowRight size={16} />
                        </Link>
                    </div>
                    {/* Abstract Shapes/Images */}
                    <div className="absolute right-0 bottom-0 w-full h-full opacity-100">
                        {/* Placeholder for products composition */}
                        {/* We'll use a placeholder div or reuse an image if available */}
                    </div>
                </div>

                {/* Right Column - Two Stacked Cards */}
                <div className="flex flex-col gap-6 h-full">

                    {/* Top Right Card */}
                    <div className="relative group overflow-hidden rounded-[2rem] bg-[#E8F3E2] flex-1 p-8 md:p-10 flex items-center justify-between">
                        <div className="z-10">
                            <span className="text-green-700 font-bold text-sm mb-2 block">10% OFF</span>
                            <h3 className="text-3xl font-serif text-theme-text mb-4">Body Butter</h3>
                            <Link href="#body" className="underline text-xs font-bold uppercase tracking-widest text-theme-text hover:text-green-700 transition-all">
                                Shop Now
                            </Link>
                        </div>
                        <div className="w-1/2 h-full relative">
                            {/* Image placeholder */}
                        </div>
                    </div>

                    {/* Bottom Right Card */}
                    <div className="relative group overflow-hidden rounded-[2rem] bg-[#FBEFF2] flex-1 p-8 md:p-10 flex items-center justify-between">
                        <div className="z-10">
                            <span className="text-[#E780A3] font-bold text-sm mb-2 block">UP TO 30% OFF</span>
                            <h3 className="text-3xl font-serif text-theme-text mb-4">Natural Beauty <br /> Collection</h3>
                            <Link href="#collection" className="underline text-xs font-bold uppercase tracking-widest text-theme-text hover:text-[#E780A3] transition-all">
                                Shop Now
                            </Link>
                        </div>
                        <div className="w-1/2 h-full relative">
                            {/* Image placeholder */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PromoGrid;
