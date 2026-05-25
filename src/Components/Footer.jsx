export const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    
                    {/* Logo and Description - Spans 2 columns on desktop */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="images/cyclistlogo.svg" alt="" className="w-8 h-8" />
                            <span className="text-2xl font-bold">Cyclist</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Cyclist is a mobility app that connects riders with trusted drivers for rides and deliveries, powered by seamless wallet payments.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 border border-[#218D42] rounded-full flex items-center justify-center hover:bg-[#218D42] transition-colors">
                                <img src="images/iconoir_facebook.svg" alt="Facebook" className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 border border-[#218D42] rounded-full flex items-center justify-center hover:bg-[#218D42] transition-colors">
                                <img src="images/iconoir_instagram.svg" alt="LinkedIn" className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 border border-[#218D42] rounded-full flex items-center justify-center hover:bg-[#218D42] transition-colors">
                                <img src="images/iconoir_linkedin.svg" alt="Instagram" className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="">
                        <h3 className="font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Features
                                </a> 
                            </li>
                            <li>
                                <a href="#security" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms of Services
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6">
                    <p className="text-center text-gray-400 text-sm">
                        © 2025 Cyclist. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};