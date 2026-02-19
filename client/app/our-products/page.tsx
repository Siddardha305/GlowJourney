'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../utils/Heading';
import ProductsHero from '../components/Products/ProductsHero';
import PromoGrid from '../components/Products/PromoGrid';
import ProductList from '../components/Products/ProductList';

const ProductsPage = () => {
    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState('Login');
    // activeItem 2 corresponds to "Our Products" in NavItems
    const activeItem = 2;

    return (
        <>
            <Heading
                title="Our Products - Glow Journey"
                description="Discover our exclusive collection of beauty products"
                keywords="makeup products, beauty shop, skincare, cosmetics"
            />
            <div className="min-h-screen bg-theme-bg-dark">
                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />

                {/* Add padding top to account for fixed header if needed, but Hero handles it */}
                <main className="pt-20">
                    <ProductsHero />
                    <PromoGrid />
                    <ProductList />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default ProductsPage;
