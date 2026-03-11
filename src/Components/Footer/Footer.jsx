import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-green-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] mt-16">

                <div className="w-11/12 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Logo */}
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-green-600 mb-3">
                            Book Vibe 📚
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Discover your next favorite book and enjoy reading.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="font-semibold mb-3">Services</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className="hover:text-green-500 cursor-pointer">Book Listing</li>
                            <li className="hover:text-green-500 cursor-pointer">Reading Tracker</li>
                            <li className="hover:text-green-500 cursor-pointer">Recommendations</li>
                            <li className="hover:text-green-500 cursor-pointer">Book Reviews</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="font-semibold mb-3">Company</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className="hover:text-green-500 cursor-pointer">About Us</li>
                            <li className="hover:text-green-500 cursor-pointer">Contact</li>
                            <li className="hover:text-green-500 cursor-pointer">Careers</li>
                            <li className="hover:text-green-500 cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="font-semibold mb-3">Legal</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className="hover:text-green-500 cursor-pointer">Terms</li>
                            <li className="hover:text-green-500 cursor-pointer">Privacy</li>
                            <li className="hover:text-green-500 cursor-pointer">Cookies</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center text-gray-500 text-sm pb-6">
                    © 2026 Book Vibe. All rights reserved.
                </div>

            </footer>
        </div>
    );
};

export default Footer;