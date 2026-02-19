import React from 'react';

interface InfoCardProps {
    number: string;
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ number, title, description }) => {
    return (
        <div className="flex flex-col p-6 rounded-2xl bg-white border border-gray-200 hover:border-theme-accent/30 hover:shadow-lg transition-all duration-300 w-full md:w-[280px]">
            <div className="mb-6">
                <h3 className="text-theme-text text-3xl font-semibold mb-1">{number}</h3>
                <h4 className="text-theme-accent text-xl font-medium leading-snug">{title}</h4>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default InfoCard;
