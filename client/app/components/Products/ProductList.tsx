'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';

const dummyProducts = [
    { id: 1, title: 'Organic High-Curcumin Turmeric', price: 22.9, image: '/home/product1.png', category: 'Powder' },
    { id: 2, title: 'Velvet Matte Lipstick', price: 32.0, image: '/home/product2.png', category: 'Lips' },
    { id: 3, title: 'Hydrating Facial Serum', price: 45.5, image: '/home/product3.png', category: 'Skin' },
    { id: 4, title: 'Volumizing Mascara', price: 18.0, image: '/home/product4.png', category: 'Eyes' },
    { id: 5, title: 'Rose Gold Highlighter', price: 28.0, image: '/home/product5.png', category: 'Face' },
    { id: 6, title: 'Daily Moisturizer', price: 24.0, image: '/home/product6.png', category: 'Skin' },
    { id: 7, title: 'Setting Spray', price: 20.0, image: '/home/product7.png', category: 'Face' },
    { id: 8, title: 'Brow Gel Clear', price: 15.0, image: '/home/product8.png', category: 'Brows' },
];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('Best Seller');
    const tabs = ['Best Seller', 'New Items', 'Sale'];

    return (
        <section className="w-full bg-theme-bg-dark py-12 px-4" id="products">
            <div className="max-w-[1400px] mx-auto">

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg font-medium transition-all duration-300 relative px-2 ${activeTab === tab
                                    ? 'text-theme-text font-bold'
                                    : 'text-gray-400 hover:text-theme-text'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-theme-text rounded-full animate-fadeIn" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {dummyProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id} // Add passed id prop
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            image="/home/hero_makeup.png" // Placeholder image for now until we have product images
                        // image={product.image} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
