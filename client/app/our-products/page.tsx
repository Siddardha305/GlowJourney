'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../utils/Heading';
import Image from 'next/image';

const ProductsPage = () => {
    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState('Login');
    // activeItem 2 corresponds to "Our Products" in NavItems
    const activeItem = 2;

    return (
        <>
            <Heading
                title="Our Products - Glow Journey"
                description="Explore our exclusive collection of beauty products"
                keywords="makeup products, beauty shop, Glow Journey store"
            />
            <div className="min-h-screen bg-[#030014]">
                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />

                <div className="w-full pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accent-hover">Products</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-12">
                            Coming Soon! We are curating the best products for you.
                        </p>

                        {/* Placeholder for products grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Example Placeholder Card */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-not-allowed opacity-70">
                                    <div className="h-48 bg-white/5 rounded-xl mb-4 flex items-center justify-center">
                                        <span className="text-gray-500">Product Image</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
                                    <p className="text-gray-400 text-sm">Stay tuned for our exclusive launch.</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default ProductsPage;
