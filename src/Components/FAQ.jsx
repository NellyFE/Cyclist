import React, { useState } from 'react';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    const faqs = [
        {
            question: "How does Cyclist work?",
            answer: "Cyclist helps you book rides based on your wallet balance. Fund your wallet, enter your destination, and we'll suggest rides that fit your budget."
        },
        {
            question: "Do I need to fund my wallet before booking a ride?",
            answer: "Yes, you need to fund your wallet before booking. This ensures you can see ride options that match your available balance."
        },
        {
            question: "What payment methods can I use?",
            answer: "We accept various payment methods including bank transfers, debit cards, and mobile money to fund your Cyclist wallet."
        },
        {
            question: "Can I schedule a ride for later?",
            answer: "Yes! You can schedule rides in advance. Simply select your preferred date and time when booking your ride."
        },
        {
            question: "What happens if my wallet balance is low?",
            answer: "If your wallet balance is low, we'll only show rides within your budget. You can top up your wallet anytime to see more ride options."
        },
        {
            question: "Can I inspect a property before renting?",
            answer: "Yes, you can arrange property inspections with our courier service. Book a courier ride and they'll help facilitate the inspection."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#218D42] text-sm font-normal mb-2 tracking-wider">FAQ</p>
                    <h2 className="text-4xl font-medium mb-4">Got Questions?</h2>
                    <p className="text-[#888888] font-normal">Get answer's to your questions about cyclist</p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                
                                {/* Toggle Icon */}
                                <div className={`shrink-0 w-6 h-6 rounded-full bg-[#218D42] text-white flex items-center justify-center transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-0' : ''
                                }`}>
                                    {openIndex === index ? (
                                        <span className="text-lg font-bold leading-none pb-0.5">−</span>
                                    ) : (
                                        <span className="text-lg font-light leading-none">+</span>
                                    )}
                                </div>
                            </button>

                            {/* Answer */}
                            <div 
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    openIndex === index 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-5 pb-5 pt-0">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};