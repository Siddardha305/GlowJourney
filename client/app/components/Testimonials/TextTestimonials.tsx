import React, { useRef, useState, useEffect } from 'react';

const reviews = [
    {
        name: "Rajesh Kumar",
        role: "Freelance MUA",
        text: "This course transformed my makeup skills. Now I'm fully booked for the wedding season!",
        rating: 5
    },
    {
        name: "Priya Sharma",
        role: "Beauty Vlogger",
        text: "My makeup tutorials finally look professional. The color theory module was a game changer.",
        rating: 5
    },
    {
        name: "Arun Patel",
        role: "Salon Owner",
        text: "Trained my entire staff with Glow Journey. Our client satisfaction has skyrocketed.",
        rating: 5
    },
    {
        name: "Sneha Reddy",
        role: "Aspiring Artist",
        text: "From basics to advanced contouring, everything is explained so clearly. Loved it!",
        rating: 5
    },
    {
        name: "Vikram Singh",
        role: "Fashion Stylist",
        text: "Understanding makeup for photography has leveled up my editorial work immensely.",
        rating: 5
    },
    {
        name: "Meera Krishnan",
        role: "Bridal Specialist",
        text: "The bridal masterclass is worth every penny. Learned techniques I use every day.",
        rating: 5
    },
    {
        name: "Arjun Nair",
        role: "Makeup Enthusiast",
        text: "Finally, a course that actually teaches the 'why' behind techniques. Highly recommend!",
        rating: 5
    },
    {
        name: "Divya Menon",
        role: "Professional MUA",
        text: "Even as a pro, I learned so many new modern techniques. Kept me updated with trends.",
        rating: 5
    }
];

const secondRowReviews = [
    {
        name: "Karthik Iyer",
        role: "Beauty Consultant",
        text: "Techniques are practical and easy to follow. Great for beginners and pros alike.",
        rating: 5
    },
    {
        name: "Anjali Gupta",
        role: "Self-Taught Artist",
        text: "I used to struggle with eyeliner, now I can do a perfect wing in seconds!",
        rating: 5
    },
    {
        name: "Rohit Verma",
        role: "Photographer",
        text: "Learned makeup basics to help my models on set. Invaluable skill to have.",
        rating: 5
    },
    {
        name: "Lakshmi Pillai",
        role: "Bridal Studio",
        text: "Started my own studio after this course. Already have 10+ brides booked!",
        rating: 5
    },
    {
        name: "Siddharth Rao",
        role: "Cosmetology Student",
        text: "Much better than my college classes. Practical, modern, and to the point.",
        rating: 5
    },
    {
        name: "Pooja Desai",
        role: "Beauty Influencer",
        text: "My followers love the new looks I'm creating. Engagement has doubled!",
        rating: 5
    },
    {
        name: "Naveen Kumar",
        role: "TV Stylist",
        text: "Used these HD makeup techniques for a TV commercial. Results were flawless.",
        rating: 5
    },
    {
        name: "Isha Malhotra",
        role: "Model",
        text: "Learning to do my own makeup for shoots has saved me so much time and money.",
        rating: 5
    }
];

const ReviewCard = ({ name, role, text, rating }: { name: string; role: string; text: string; rating: number }) => (
    <div className="flex-shrink-0 w-[400px] bg-white border border-theme-accent/10 rounded-2xl p-6 mx-3 shadow-sm hover:shadow-md transition-all duration-300 hover:border-theme-accent/30">
        <div className="flex items-center gap-1 mb-3">
            {[...Array(rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-theme-accent fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            ))}
        </div>
        <p className="text-theme-text/80 text-sm mb-4 leading-relaxed font-medium italic">&ldquo;{text}&rdquo;</p>
        <div>
            <p className="text-theme-text font-serif font-bold text-lg">{name}</p>
            <p className="text-theme-accent/80 text-xs uppercase tracking-wider">{role}</p>
        </div>
    </div>
);

const MarqueeRow = ({ reviews, direction }: { reviews: any[], direction: 'left' | 'right' }) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!rowRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - rowRef.current.offsetLeft);
        setScrollLeft(rowRef.current.scrollLeft);
        rowRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !rowRef.current) return;
        e.preventDefault();
        const x = e.pageX - rowRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        rowRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (rowRef.current) {
            rowRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (rowRef.current) {
            rowRef.current.style.cursor = 'grab';
        }
    };

    return (
        <div
            ref={rowRef}
            className="overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

const TextTestimonials = () => {
    // Duplicate for seamless loop
    const firstRow = [...reviews, ...reviews];
    const secondRow = [...secondRowReviews, ...secondRowReviews];

    return (
        <div className="w-full py-20 bg-theme-bg-dark overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-theme-accent/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-theme-text mb-6">
                        What Our <span className="italic font-light text-theme-accent">Students</span> Say
                    </h2>
                    <p className="text-theme-text/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Join thousands of satisfied students who transformed their careers in beauty
                    </p>
                </div>

                {/* First Row - Left to Right */}
                <div className="mb-8 pl-4">
                    <MarqueeRow reviews={firstRow} direction="left" />
                </div>

                {/* Second Row - Right to Left */}
                <div className="pl-4">
                    <MarqueeRow reviews={secondRow} direction="right" />
                </div>
            </div>
        </div>
    );
};

export default TextTestimonials;
