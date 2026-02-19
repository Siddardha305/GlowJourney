import React from 'react';
import Image from 'next/image';

interface WorkCardProps {
    videoUrl?: string;
    thumbnail?: string;
    index?: number;
    image?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ videoUrl, thumbnail, index = 0, image }) => {
    return (
        <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-theme-bg-light border border-theme-accent/20 hover:border-theme-accent transition-all duration-300 group shadow-sm hover:shadow-md">
            {/* Image / Content */}
            {image ? (
                <Image
                    src={image}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform duration-700"
                    alt={`Work ${index + 1}`}
                />
            ) : (
                /* Placeholder if no image */
                <div className="w-full h-full bg-theme-bg-light flex items-center justify-center">
                    <span className="text-theme-text/50 text-xs uppercase tracking-widest font-medium">
                        Project {index + 1}
                    </span>
                </div>
            )}
        </div>
    );
};

export default WorkCard;
