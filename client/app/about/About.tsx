import React from "react";

const About = () => {
  return (
    <div className="w-full bg-theme-bg-dark text-theme-text pt-32 pb-20 relative overflow-hidden min-h-screen">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E57FA1]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-serif text-theme-text mb-10 tracking-tight">
          What is <span className="italic font-light text-theme-accent">Glow Journey?</span>
        </h1>

        <div className="space-y-6 text-lg md:text-xl font-medium text-theme-text/80 leading-loose">
          <p>
            Are you ready to take your makeup artistry skills to the next level? Look
            no further than <span className="font-bold text-theme-text">Glow Journey</span>, the premier beauty community
            dedicated to helping aspiring artists achieve their goals and reach
            their full potential.
          </p>
          <p>
            We know firsthand the challenges that come with learning and growing in the beauty industry.
            That&apos;s why we created Glow Journey &ndash; to provide new
            artists with the resources and support they need to succeed.
          </p>
          <p>
            Our platform is a treasure trove of informative tutorials on
            everything from skin prep basics to advanced bridal techniques. But
            that&apos;s just the beginning. Our affordable courses are designed to
            give you the high-quality education you need to succeed in the
            industry, without breaking the bank.
          </p>
          <p>
            At Glow Journey, we believe that price should never be a barrier to
            achieving your dreams. That&apos;s why our courses are priced low
            &ndash; so that anyone, regardless of their financial situation, can
            access the tools and knowledge they need to succeed.
          </p>
          <p>
            But Glow Journey is more than just a community &ndash; we&apos;re a
            family. Our supportive community of like-minded individuals is here to
            help you every step of the way, whether you&apos;re just starting out
            or looking to take your skills to the next level.
          </p>
          <p>
            With Glow Journey by your side, there&apos;s nothing standing between
            you and your dream career. Our courses and community will provide you
            with the guidance, support, and motivation you need to unleash your
            full potential and become a skilled makeup artist.
          </p>
          <p>
            So what are you waiting for? Join the Glow Journey family today and
            let&apos;s conquer the beauty industry together! With our
            affordable courses, informative videos, and supportive community, the
            sky&apos;s the limit.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-theme-accent/20 flex flex-col items-start gap-2">
          <span className="text-3xl font-serif text-theme-text block">Glow Journey Team</span>
          <h5 className="text-lg font-light italic text-theme-text/60 tracking-wider uppercase text-sm">
            Empowering Beauty Professionals
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
