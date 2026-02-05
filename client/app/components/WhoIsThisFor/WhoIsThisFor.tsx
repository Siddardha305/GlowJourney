import React from 'react';
import InfoCard from './InfoCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        number: "01.",
        title: "Beginners",
        description: "Perfect for complete beginners who want to learn professional makeup artistry from scratch."
    },
    {
        number: "02.",
        title: "Beauty Creators",
        description: "Ideal for Instagram Influencers, YouTubers, and beauty bloggers who want to create stunning looks."
    },
    {
        number: "03.",
        title: "Aspiring MUAs",
        description: "Designed for those wanting to start a career in bridal, editorial, or commercial makeup."
    },
    {
        number: "04.",
        title: "Salon Owners",
        description: "Great for salon professionals who want to upgrade their skills and offer premium services."
    }
];

const WhoIsThisFor = () => {
    return (
        <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 pt-10 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 bg-theme-bg-dark relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="w-[95%] sm:w-[90%] md:w-[88%] lg:w-[85%] mx-auto relative z-10">
                {/* Header */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-theme-text uppercase tracking-wider whitespace-nowrap">
                        Is This Course Right for You?
                    </h2>
                    <div className="h-[1px] bg-gray-700 flex-grow ml-2 sm:ml-3 md:ml-4"></div>
                </div>

                {/* Centered Container for Cards and CTA */}
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
                        {steps.map((step, index) => (
                            <InfoCard
                                key={index}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>

                    {/* CTA Bar */}
                    <div className="bg-theme-bg-light rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-lg border border-white/5">
                        <h3 className="text-theme-text text-sm sm:text-base md:text-lg font-medium tracking-wide text-center sm:text-left">
                            UPGRADE YOUR ARTISTRY SKILLS NOW
                        </h3>
                        <Link href="/courses">
                            <button className="bg-theme-text text-theme-bg-dark px-5 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 hover:bg-theme-text/90 transition-all group whitespace-nowrap">
                                Start Now
                                <div className="bg-theme-bg-dark rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                                    <ArrowRight size={14} className="text-theme-text" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoIsThisFor;
