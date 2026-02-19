'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "I can find free tutorials on YouTube. Why should I pay to join Glow Journey?",
    answer: "While YouTube has scattered tutorials, our structured course provides a complete learning path from beginner to professional. You get organized modules, sanitized kit lists, personalized feedback on your practice looks, and a supportive community. Plus, you learn hygiene standards and client management which are rarely taught in free tutorials."
  },
  {
    question: "Is this course for absolute beginners, or do I need prior experience?",
    answer: "This course is designed for complete beginners with zero makeup experience. We start from skin prep and brush knowledge and gradually build up to advanced cut-crease and contouring techniques. If you're already familiar with makeup, you'll refine your techniques and learn pro secrets for longevity and finish."
  },
  {
    question: "Who is this course NOT for?",
    answer: "This course isn't for you if you're looking for special effects (SFX) or prosthetics training specifically, or if you're not willing to practice. Makeup is a practical skill."
  },
  {
    question: "I have a full-time job/college. How much time do I need to dedicate daily?",
    answer: "The course is self-paced. We recommend practicing one look per week or 30 minutes a day. Consistency is key to building muscle memory for blending and application."
  },
  {
    question: "Will I just be watching videos, or will I actually practice?",
    answer: "You'll be practicing from day one! You can practice on yourself, a friend, or a face chart. We encourage you to upload photos of your practice for feedback."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(faqs.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 100); // Stagger the animations
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-theme-bg-dark py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-theme-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-theme-accent/5 border border-theme-accent/10 mb-6">
            <span className="text-theme-accent text-xs sm:text-sm font-medium tracking-wider uppercase">F.A.Q.</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-theme-text mb-6">
            Have Questions? <br />
            <span className="italic font-light text-theme-accent">We have answers.</span>
          </h2>
          <p className="text-theme-text/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the course and community.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`transition-all duration-700 ease-out ${visibleItems[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                    ? 'border-theme-accent shadow-lg shadow-theme-accent/5'
                    : 'border-theme-accent/10 hover:border-theme-accent/30 hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-medium transition-colors pr-8 ${openIndex === index ? 'text-theme-accent' : 'text-theme-text group-hover:text-theme-accent'
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                      ? 'bg-theme-accent text-white rotate-180'
                      : 'bg-theme-bg-dark text-theme-text border border-theme-accent/10 group-hover:border-theme-accent/30'
                    }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                    <div className="h-px bg-theme-accent/10 mb-5" />
                    <p className="text-theme-text/80 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-theme-text/60 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-theme-text text-theme-bg-dark font-medium tracking-wide hover:bg-theme-accent transition-colors duration-300 shadow-lg hover:shadow-theme-accent/20"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
