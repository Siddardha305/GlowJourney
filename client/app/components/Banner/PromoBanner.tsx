import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram } from 'lucide-react';
import Image from 'next/image';

interface PromoBannerProps {
    className?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ className = "" }) => {
    return (
        <div className={`w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}>
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#EAEAEA] to-[#C9C9C9] p-1 sm:p-2 shadow-2xl">
                {/* Inner Gradient Container */}
                <div className="relative rounded-[35px] bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-inner">

                    {/* Dark Overlay Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#D8D8D8] to-[#B0B0B0] z-0" />

                    {/* Left Content */}
                    <div className="relative z-10 w-full lg:w-1/2 p-10 lg:p-12 flex flex-col items-start space-y-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                            Start Your <span className="text-theme-accent">Journey</span> Today
                        </h2>

                        <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                            Master professional makeup artistry with our comprehensive courses.
                            Sign up now and experience the power of expert-led training.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Link href="/courses">
                                <button className="group flex items-center gap-2 px-8 py-3.5 bg-theme-text text-white rounded-full font-semibold text-lg hover:bg-theme-accent transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Start Now
                                    <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                        <ArrowRight size={16} />
                                    </div>
                                </button>
                            </Link>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-3 px-8 py-3.5 bg-transparent border border-gray-400 text-gray-700 rounded-full font-medium text-lg hover:bg-white/10 hover:border-gray-500 transition-all duration-300">
                                    <Instagram size={20} />
                                    Follow us
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative z-10 w-full lg:w-1/2 h-[350px] lg:h-[400px] p-4 lg:p-8 flex items-center justify-center lg:justify-end">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/home/makeup_feature.png"
                                alt="Makeup Artist Working"
                                fill
                                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                            {/* Inner vignette for blending */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
