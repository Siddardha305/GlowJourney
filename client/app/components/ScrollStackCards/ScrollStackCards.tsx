'use client';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

// Use same cards data as before but adapted
const projects = [
  {
    title: 'Professional Makeup',
    description: 'Master the fundamentals of professional makeup artistry. Learn skin preparation, color theory, foundation matching, and corrective techniques. Understand face shapes and how to contour and highlight effectively. From natural "no-makeup" looks to full glam, this module covers all the essential skills you need to become a versatile artist. Perfect specifically for those starting their journey in the beauty industry.',
    src: '/home/cards/makeup1.png',
    link: '#',
  },
  {
    title: 'Bridal Mastery',
    description: 'Specialized training for the high-demand wedding industry. Learn long-lasting application techniques, photographic makeup for HD cameras, and how to work with different cultural bridal styles. Master the art of consultation, trial runs, and managing time under pressure. This comprehensive module prepares you to handle the most important day of your client\'s life with confidence and skill.',
    src: '/home/cards/makeup2.png',
    link: '#',
  },
  {
    title: 'Editorial & Creative',
    description: 'Unleash your creativity with avant-garde and editorial makeup techniques. Learn to work with bold colors, textures, and graphic liners. ideal for fashion shoots, runway, and creative portfolios. Understand how studio lighting affects makeup and how to collaborate with photographers and stylists to create magazine-worthy images. Elevate your artistry beyond the basics.',
    src: '/home/cards/makeup3.png',
    link: '#',
  },
];

export default function ScrollStackCards(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main className='w-full overflow-visible relative' ref={container} style={{ contain: 'layout style paint' }}>
      <div className='text-theme-text w-full bg-theme-bg-dark pt-8 sm:pt-12 md:pt-16 lg:pt-20'>
        {/* Heading Section */}
        <div className="text-center mb-2 sm:mb-3 md:mb-4 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-text">
            What You'll Learn
          </h2>
        </div>

        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project?.link}
              src={project?.src}
              title={project?.title}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 w-full overflow-hidden py-4 sm:py-6 md:py-8'
      style={{ contain: 'layout style paint', willChange: i < 2 ? 'transform' : 'auto' }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(0vh + ${i * 25}px)`,
          transform: 'translateZ(0)',
        }}
        className={`flex flex-col h-auto min-h-[500px] sm:min-h-[550px] md:h-[600px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] rounded-2xl sm:rounded-3xl pt-4 sm:pt-6 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 
                    bg-gradient-to-br from-theme-accent/20 via-theme-accent/10 to-theme-bg-dark/40 
                    backdrop-blur-md border border-theme-accent/30 
                    shadow-[0_0_25px_rgba(227,27,109,0.2)] 
                    origin-top overflow-hidden`}
      >
        <div className={`flex flex-col md:flex-row flex-1 gap-4 sm:gap-6 md:gap-8`}>
          <div
            className={`relative w-full md:w-[50%] h-[200px] sm:h-[250px] md:h-full rounded-xl sm:rounded-2xl overflow-hidden`}
          >
            <div className={`w-full h-full`}>
              <Image fill src={src} alt={title} className='object-cover' />
            </div>
          </div>

          <div className={`w-full md:w-[50%] flex flex-col justify-start md:justify-center gap-3 sm:gap-4 md:gap-5 py-2`}>
            <div className="flex justify-start">
              <button className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 bg-theme-accent/80 hover:bg-theme-accent rounded-full text-white font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg">
                {title}
              </button>
            </div>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed'>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
