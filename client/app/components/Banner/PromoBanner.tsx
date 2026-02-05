import React from 'react';
import Link from 'next/link';

interface PromoBannerProps {
    title: string | React.ReactNode;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    primaryBtnText?: string;
    primaryBtnLink?: string;
    secondaryBtnText?: string;
    secondaryBtnLink?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    className?: string; // Allow passing extra classes
}

const PromoBanner: React.FC<PromoBannerProps> = ({
    title,
    description,
    imageSrc,
    imageAlt = "Feature Image",
    primaryBtnText,
    primaryBtnLink,
    secondaryBtnText,
    secondaryBtnLink,
    onPrimaryClick,
    onSecondaryClick,
    className = "",
}) => {
    return (
        <div className={`relative bg-gradient-to-r from-theme-bg-light to-[#1a1a2e] rounded-[30px] sm:rounded-[40px] px-6 sm:px-10 md:px-12 py-8 sm:py-10 md:py-12 overflow-hidden border border-white/5 shadow-2xl ${className}`}>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">

                {/* Left Content */}
                <div className="w-full lg:flex-1 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                        {title}
                    </h2>

                    <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4 justify-center lg:justify-start">
                        {primaryBtnText && (
                            primaryBtnLink ? (
                                <Link href={primaryBtnLink}>
                                    <PrimaryButton text={primaryBtnText} onClick={onPrimaryClick} />
                                </Link>
                            ) : (
                                <PrimaryButton text={primaryBtnText} onClick={onPrimaryClick} />
                            )
                        )}

                        {secondaryBtnText && (
                            secondaryBtnLink ? (
                                <a href={secondaryBtnLink} target="_blank" rel="noopener noreferrer">
                                    <SecondaryButton text={secondaryBtnText} onClick={onSecondaryClick} />
                                </a>
                            ) : (
                                <SecondaryButton text={secondaryBtnText} onClick={onSecondaryClick} />
                            )
                        )}
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:flex-[0.8] relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
                    <div className="relative w-full max-w-[400px] lg:max-w-none h-[280px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                </div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-theme-accent/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
};

const PrimaryButton = ({ text, onClick }: { text: string; onClick?: () => void }) => (
    <button onClick={onClick} className="bg-theme-text text-theme-bg-dark px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg flex items-center gap-3 hover:bg-theme-text/90 transition-all group whitespace-nowrap shadow-lg shadow-theme-text/20">
        {text}
        <div className="bg-theme-bg-dark rounded-full p-1.5 group-hover:translate-x-1 transition-transform duration-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-theme-text"
            >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        </div>
    </button>
);

const SecondaryButton = ({ text, onClick }: { text: string; onClick?: () => void }) => (
    <button onClick={onClick} className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-white/20 hover:border-white/40 bg-transparent text-white font-semibold text-base sm:text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        {text}
    </button>
);

export default PromoBanner;
