'use client';

import React, { useRef, useEffect } from 'react';

const LoopVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay may be blocked by browser — muted should allow it
            });
        }
    }, []);

    return (
        <div className="w-full bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video">
                    {/* Replace /videos/demo.mp4 with your actual video path */}
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        src="/videos/demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Fallback overlay shown when no video is present */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-white font-serif text-3xl sm:text-5xl tracking-[0.3em] uppercase select-none opacity-60">
                            Loop Video
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoopVideo;
