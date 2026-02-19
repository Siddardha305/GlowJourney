'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductProps {
    id: string | number;
    title: string;
    price: number;
    image: string;
    category: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, image, category }) => {
    return (
        <div className="group flex flex-col items-center">
            {/* Image Container */}
            <div className="relative w-full aspect-square bg-white rounded-[2rem] overflow-hidden mb-4 border border-transparent hover:border-theme-accent/20 transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className="absolute inset-0 p-6 flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-10 h-10 bg-theme-text text-white rounded-full flex items-center justify-center hover:bg-theme-accent transition-colors" title="Add to Cart">
                        <ShoppingBag size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white text-theme-text border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors" title="Quick View">
                        <Eye size={18} />
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{category}</p>
                <h3 className="text-theme-text font-medium text-sm mb-1 group-hover:text-theme-accent transition-colors font-josefin">{title}</h3>
                <span className="text-theme-text font-bold text-sm">${price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
