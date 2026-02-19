'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../utils/Heading';
import WorksGrid from '../components/OurWorks/WorksGrid';

const PortfolioPage = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1); // Assuming 1 is Portfolio/Works
  const [route, setRoute] = useState('Login');

  return (
    <>
      <Heading
        title="Portfolio - Glow Journey"
        description="Explore our portfolio of creative makeup artistry projects"
        keywords="makeup portfolio, our works, Glow Journey projects"
      />
      <div className="min-h-screen bg-theme-bg-dark">
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />

        {/* Add top padding for fixed header */}
        <main className="pt-20">
          <WorksGrid
            showFilters={false}
            title="OUR PORTFOLIO"
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
