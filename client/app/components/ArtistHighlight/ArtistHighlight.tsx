'use client'

import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const ArtistHighlight = () => {
    return (
        <section className="w-full bg-theme-bg-dark text-theme-text py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 animate-fade-in-up">
                    <div>
                        <span className="text-theme-accent font-medium tracking-[0.2em] text-sm uppercase mb-2 block">
                            Makeup Artist
                        </span>
                        <h2 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-theme-text mb-6">
                            Bobbi Noda
                        </h2>
                        <p className="text-theme-text/80 text-lg leading-relaxed max-w-lg font-medium">
                            Nulla posuere tortor at nisl semper scelerisque etiam ornare. Iras metus the ravidane sodales vesaire. Integer ac molestie nisi orci varius natoque penatibus magnis.
                        </p>
                        <p className="text-theme-text/80 text-lg leading-relaxed max-w-lg mt-4 font-medium">
                            Phasellus at lacus suscipit congue nisl the volutpat magna done miss the rana risus tincidunt convallis velit orci congue tortor eu dignissim ipsum suam non odio esuntion miss.
                        </p>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-3 pt-2">
                        {[
                            "Face Makeup",
                            "Wedding Makeup",
                            "Eyebrow Makeup"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-theme-accent" />
                                <span className="text-theme-text/90 font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Brand Logos */}
                    <div className="pt-10 flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using text specific logos placeholders as per design, normally these would be SVGs */}
                        <span className="text-xl font-serif font-bold text-theme-text tracking-widest">WELLA</span>
                        <span className="text-lg font-sans font-bold text-theme-text tracking-widest">BURBERRY</span>
                        <span className="text-lg font-sans text-theme-text tracking-wide">L'OREAL</span>
                        <span className="text-lg font-mono font-bold text-theme-text tracking-widest">GOLDWELL</span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Flight Window Style Shape (Pill Shape) */}
                    <div className="relative w-[320px] h-[500px] sm:w-[380px] sm:h-[580px] rounded-[200px] overflow-hidden border-[10px] border-white shadow-2xl shrink-0">
                        <Image
                            src="/home/hero2.jpeg"
                            alt="Bobbi Noda"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        />
                        {/* Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-theme-accent/20 to-transparent" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ArtistHighlight
