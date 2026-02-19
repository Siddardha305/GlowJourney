'use client';

import React, { useState } from 'react';
import WorkCard from './WorkCard';
import { works, categories } from './WorksData';
import Link from 'next/link';

interface WorksGridProps {
    limit?: number;
    showFilters?: boolean;
    showViewAll?: boolean;
    title?: string;
    description?: string;
}

const WorksGrid: React.FC<WorksGridProps> = ({
    limit,
    showFilters = false,
    showViewAll = false,
    title = "OUR WORKS",
    description
}) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filter items
    const filteredWorks = selectedCategory === 'All'
        ? works
        : works.filter(work => work.category === selectedCategory);

    // Apply limit if provided (after filtering)
    const displayWorks = limit ? filteredWorks.slice(0, limit) : filteredWorks;

    return (
        <div className="w-full py-12 md:py-20 bg-theme-bg-dark flex flex-col items-center justify-center">

            {/* Header */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-5xl md:text-6xl font-serif text-theme-text tracking-[0.15em] uppercase mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-theme-text/70 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </div>

            {/* Category Filters */}
            {showFilters && (
                <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 tracking-wider uppercase ${selectedCategory === category
                                    ? 'bg-theme-text text-theme-bg-dark border border-theme-text'
                                    : 'bg-transparent text-theme-text border border-theme-text/20 hover:border-theme-text'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* Grid Container */}
            <div className="w-full max-w-[1400px] px-4 sm:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {displayWorks.map((work, index) => (
                        <WorkCard key={index} index={index} image={work.image} />
                    ))}
                </div>

                {displayWorks.length === 0 && (
                    <div className="text-center py-12 text-theme-text/50 italic">
                        No projects found in this category.
                    </div>
                )}
            </div>

            {/* CTA */}
            {showViewAll && (
                <div className="mt-12">
                    <Link href="/portfolio">
                        <button className="text-theme-text hover:text-theme-accent transition-colors font-medium tracking-widest text-sm border-b border-theme-text/30 hover:border-theme-accent pb-1">
                            VIEW ALL PROJECTS
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default WorksGrid;
