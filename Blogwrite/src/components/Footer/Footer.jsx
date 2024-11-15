import React from 'react';
import { Link } from 'react-router-dom';
import Logo_thi from '../Logo_thi';

function Footer() {
    return (
        <section className=" mt-48 relative overflow-hidden py-10 bg-[#eef5db] border-t-2 border-t-gray-200">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    {/* Company Logo_thi and Copyright */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center px-10">
                                <Logo_thi width="140px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-700">
                                    &copy; Copyright 2024. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-md font-semibold uppercase text-gray-600">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Support Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-md font-semibold uppercase text-gray-600">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Legals Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-md font-semibold uppercase text-gray-600">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-150"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
