import React, { useState } from 'react';

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="logo">
                    <img 
                        src="images/cyclistlogo.svg" 
                        alt="Cyclist logo" 
                        className="w-12 h-auto md:w-[48px] md:h-[59px]"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-between w-full ml-6">
                    {/* Nav Links */}
                    <div className="flex gap-6 bg-[#F5F5F5] rounded-full py-2 px-6">
                        <a href="#how-it-works" className="text-sm hover:text-[#218D42] transition-colors">
                            How it Works
                        </a>
                        <a href="#features" className="text-sm hover:text-[#218D42] transition-colors">
                            Features
                        </a>
                        <a href="#testimonials" className="text-sm hover:text-[#218D42] transition-colors">
                            Testimonials
                        </a>
                        <a href="#faq" className="text-sm hover:text-[#218D42] transition-colors">
                            FAQ
                        </a>
                    </div>

                    {/* Download Button */}
                    <div className="ml-4">
                        <a 
                            href="#download" 
                            className="flex items-center bg-[#D6D6D6] bg-opacity-60 py-2 px-6 rounded-full text-sm hover:bg-opacity-80 transition-all"
                        >
                            Download App
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <button 
                    onClick={toggleMenu}
                    className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                    <a 
                        href="#how-it-works" 
                        onClick={toggleMenu}
                        className="text-2xl font-medium hover:text-[#218D42] transition-colors"
                    >
                        How it Works
                    </a>
                    <a 
                        href="#features" 
                        onClick={toggleMenu}
                        className="text-2xl font-medium hover:text-[#218D42] transition-colors"
                    >
                        Features
                    </a>
                    <a 
                        href="#testimonials" 
                        onClick={toggleMenu}
                        className="text-2xl font-medium hover:text-[#218D42] transition-colors"
                    >
                        Testimonials
                    </a>
                    <a 
                        href="#faq" 
                        onClick={toggleMenu}
                        className="text-2xl font-medium hover:text-[#218D42] transition-colors"
                    >
                        FAQ
                    </a>
                    
                    {/* Download Button in Mobile Menu */}
                    <a 
                        href="#download" 
                        onClick={toggleMenu}
                        className="bg-[#218D42] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#1a7335] transition-all mt-4"
                    >
                        Download App
                    </a>
                </div>
            </div>
        </nav>
    );
};