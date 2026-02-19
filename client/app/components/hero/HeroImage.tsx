'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroImage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const cardRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let animationFrameId: number

        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(animationFrameId)
            animationFrameId = requestAnimationFrame(() => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect()
                    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
                    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
                    setMousePosition({ x: x * 10, y: y * 10 })
                }
            })
        }

        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 })
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('mousemove', handleMouseMove)
            container.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove)
                container.removeEventListener('mouseleave', handleMouseLeave)
            }
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="w-full flex justify-center pb-20 -mt-20 z-20 relative px-4" ref={containerRef}>
            <div className="perspective-1000 group">
                <div
                    ref={cardRef}
                    className="relative w-full max-w-[380px] sm:max-w-[800px] h-[230px] sm:h-[450px]
                      bg-white
                      rounded-2xl border border-gray-200 shadow-xl
                      transition-all duration-300 ease-out overflow-hidden transform-gpu"
                    style={{
                        transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                    }}
                >
                    {/* Image Layer */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/home/Homebb.jpg"
                            alt="Home BB"
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover transition-opacity duration-500"
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
