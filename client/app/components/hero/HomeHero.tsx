'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Scan, Droplets } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HomeHero() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center" ref={heroRef}>

      {/* Background Image - Completely filling the hero section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero3.webp"
          alt="Natural Beauty Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-theme-bg-dark/90 via-theme-bg-dark/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center h-full pt-16">

        {/* Text Content (Left Side) - Right Column Removed completely */}
        <div className="flex flex-col items-start text-left space-y-8 max-w-2xl animate-fade-in-up z-20">

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-theme-text leading-[1.1]">
            Polish Your <br />
            <span className="italic">Natural Beauty</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-800 max-w-lg leading-relaxed font-medium">
            We specialize in polishing your natural beauty, creating timeless radiance with a harmony of tradition & innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 w-full sm:w-auto">
            <button
              onClick={() => router.push('/courses')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-theme-text text-white font-medium text-lg hover:bg-theme-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Arrange Schedule
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full sm:w-auto flex items-center gap-3 text-theme-text font-semibold text-lg hover:text-theme-accent transition-colors group justify-center sm:justify-start backdrop-blur-sm bg-white/30 px-6 py-3 rounded-full hover:bg-white/50 border border-white/40 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5 text-theme-text" />
              </div>
              View Your Treatment
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-10 border-t border-theme-text/20 w-full mt-8">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif text-theme-text">35</span>
              </div>
              <p className="text-sm text-theme-text/90 mt-2 leading-snug font-medium">
                Traditional & Modern <br /> Beauty Treatments
              </p>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif text-theme-text">50+</span>
              </div>
              <p className="text-sm text-theme-text/90 mt-2 leading-snug font-medium">
                Professional Expert <br /> Beauticians
              </p>
            </div>
          </div>
        </div>

        {/* Floating Cards Layer (Restored) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">

          {/* Floating Card: Scan Your Face (Top Right) */}
          <div className="absolute top-[18%] right-[8%] bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float-slow pointer-events-auto hover:bg-white/60 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-theme-text">
              <Scan className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-theme-text">Scan Your Face</p>
              <div className="w-20 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div className="w-2/3 h-full bg-theme-accent rounded-full" />
              </div>
            </div>
          </div>

          {/* Floating Card: Moisture (Right Center) */}
          <div className="absolute top-[48%] right-[25%] bg-white/40 backdrop-blur-md border border-white/50 p-5 rounded-3xl shadow-xl flex flex-col items-center gap-3 animate-float-delayed w-32 pointer-events-auto hover:bg-white/60 transition-colors">
            <p className="text-sm font-semibold text-theme-text">Moisture</p>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-gray-200" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-theme-accent" strokeDasharray="175" strokeDashoffset="44" strokeLinecap="round" />
              </svg>
              <span className="absolute text-sm font-bold text-theme-text">75%</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-theme-bg-dark flex items-center justify-center text-theme-accent mt-1">
              <Droplets className="w-4 h-4" />
            </div>
          </div>

          {/* Floating Card: Natural Skin Treatment (Bottom Right) */}
          <div className="absolute bottom-[12%] right-[5%] bg-white/60 backdrop-blur-md border border-white/50 p-4 pr-8 rounded-2xl shadow-xl max-w-xs animate-float pointer-events-auto hover:bg-white/80 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-theme-text">Natural Skin Treatment</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-lg bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-theme-accent/10" />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-white rounded-full text-xs font-semibold text-theme-text shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              View Recommendations
            </button>
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  )
}